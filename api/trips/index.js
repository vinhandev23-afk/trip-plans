const fsp = require('fs').promises;
const path = require('path');

const TRIPS_DIR = path.join(process.cwd(), 'trips');
const IS_VERCEL = !!process.env.VERCEL;

async function getTrips() {
  let entries;
  try { entries = await fsp.readdir(TRIPS_DIR, { withFileTypes: true }); }
  catch { return []; }

  const trips = await Promise.all(
    entries
      .filter(e => e.isDirectory() && !e.name.startsWith('.') && !e.name.startsWith('_'))
      .map(async e => {
        const dir = path.join(TRIPS_DIR, e.name);
        let meta = { name: e.name, title: e.name, status: 'planning', public: false };

        try {
          const m = JSON.parse(await fsp.readFile(path.join(dir, 'meta.json'), 'utf-8'));
          meta = { ...meta, ...m };
        } catch {}

        if (meta.title === e.name) {
          try {
            const lines = (await fsp.readFile(path.join(dir, 'README.md'), 'utf-8')).split('\n');
            const h1 = lines.find(l => l.startsWith('# '));
            if (h1) meta.title = h1.replace(/^#\s*/, '').trim();
          } catch {}
        }

        try {
          const files = await fsp.readdir(path.join(dir, 'output'));
          meta.pdfs = files.filter(f => f.endsWith('.pdf'));
        } catch { meta.pdfs = []; }

        meta.hasReadme = await fsp.access(path.join(dir, 'README.md')).then(() => true).catch(() => false);
        return meta;
      })
  );

  const filtered = IS_VERCEL ? trips.filter(t => t.public) : trips;
  const order = { upcoming: 0, planning: 1, completed: 2 };
  return filtered.sort((a, b) => (order[a.status] ?? 3) - (order[b.status] ?? 3));
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(204).end();

  if (req.method === 'GET') {
    try {
      const trips = await getTrips();
      return res.status(200).json(trips);
    } catch (e) {
      return res.status(500).json({ error: e.message });
    }
  }

  if (req.method === 'POST') {
    if (IS_VERCEL) return res.status(403).json({ error: 'Not allowed on hosted version' });

    try {
      const data = req.body;
      const slug = (data.name || data.title)
        .toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/gi, 'd').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

      const dir = path.join(TRIPS_DIR, slug);
      await fsp.mkdir(dir);
      await fsp.mkdir(path.join(dir, 'images'));
      await fsp.mkdir(path.join(dir, 'output'));

      const dates = [data.start_date, data.end_date].filter(Boolean).join(' – ') || data.dates || 'TBD';
      let tpl = await fsp.readFile(path.join(process.cwd(), '_template', 'README.md'), 'utf-8');
      const replacements = {
        TITLE: data.title || slug, SUBTITLE: data.idea || 'Thêm mô tả lộ trình',
        DATES: dates, DURATION: data.duration || 'TBD', PEOPLE: data.people || '2',
        TRANSPORT: data.transport || 'xe máy', KM: data.km || 'TBD', BUDGET: data.budget || 'TBD',
      };
      for (const [k, v] of Object.entries(replacements)) {
        tpl = tpl.replace(new RegExp(`\\[${k}\\]`, 'g'), v);
      }
      await fsp.writeFile(path.join(dir, 'README.md'), tpl);
      const meta = { ...data, name: slug, dates, status: 'planning', public: false, created: new Date().toISOString() };
      await fsp.writeFile(path.join(dir, 'meta.json'), JSON.stringify(meta, null, 2));

      return res.status(201).json({ name: slug });
    } catch (e) {
      return res.status(400).json({ error: e.message });
    }
  }

  res.status(405).end();
};
