#!/usr/bin/env node
const http = require('http');
const fs = require('fs');
const fsp = fs.promises;
const path = require('path');

const PORT = process.env.PORT || 3000;
const ROOT = __dirname;
const TRIPS_DIR = path.join(ROOT, 'trips');
const UI_DIR = path.join(ROOT, 'ui');
const TEMPLATE_DIR = path.join(ROOT, '_template');

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.pdf': 'application/pdf',
  '.md': 'text/plain; charset=utf-8',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
};

function safePath(base, ...parts) {
  const joined = parts.join('/').replace(/\.\./g, '');
  const resolved = path.resolve(base, joined);
  if (!resolved.startsWith(path.resolve(base))) return null;
  return resolved;
}

async function serveStatic(req, res, filePath) {
  let stat;
  try { stat = await fsp.stat(filePath); } catch { return false; }

  const ext = path.extname(filePath).toLowerCase();
  const mime = MIME[ext] || 'application/octet-stream';
  const size = stat.size;
  const range = req.headers.range;

  if (range) {
    const m = range.match(/bytes=(\d+)-(\d*)/);
    if (m) {
      const start = parseInt(m[1], 10);
      const end = m[2] ? parseInt(m[2], 10) : size - 1;
      res.writeHead(206, {
        'Content-Type': mime,
        'Content-Range': `bytes ${start}-${end}/${size}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': end - start + 1,
      });
      fs.createReadStream(filePath, { start, end }).pipe(res);
      return true;
    }
  }

  res.writeHead(200, {
    'Content-Type': mime,
    'Content-Length': size,
    'Accept-Ranges': 'bytes',
    ...(ext === '.pdf' ? { 'Content-Disposition': 'inline' } : {}),
  });
  fs.createReadStream(filePath).pipe(res);
  return true;
}

async function getTrips() {
  let entries;
  try { entries = await fsp.readdir(TRIPS_DIR, { withFileTypes: true }); }
  catch { return []; }

  const trips = await Promise.all(
    entries
      .filter(e => e.isDirectory() && !e.name.startsWith('.') && !e.name.startsWith('_'))
      .map(async e => {
        const dir = path.join(TRIPS_DIR, e.name);
        let meta = { name: e.name, title: e.name, status: 'planning' };

        try {
          const m = JSON.parse(await fsp.readFile(path.join(dir, 'meta.json'), 'utf-8'));
          meta = { ...meta, ...m };
        } catch {}

        if (meta.title === e.name) {
          try {
            const lines = (await fsp.readFile(path.join(dir, 'README.md'), 'utf-8')).split('\n');
            const h1 = lines.find(l => l.startsWith('# '));
            if (h1) meta.title = h1.replace(/^#\s*/, '').trim();
            const h2 = lines.find(l =>
              l.startsWith('## ') &&
              !l.includes('DEADLINE') &&
              !l.includes('Lịch trình') &&
              !l.includes('Khách sạn') &&
              !l.includes('Budget') &&
              !l.includes('Lưu ý')
            );
            if (h2) meta.subtitle = h2.replace(/^##\s*/, '').trim();
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

  const order = { upcoming: 0, planning: 1, completed: 2 };
  return trips.sort((a, b) => (order[a.status] ?? 3) - (order[b.status] ?? 3));
}

async function readBody(req) {
  return new Promise(resolve => {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => resolve(body));
  });
}

const server = http.createServer(async (req, res) => {
  const { pathname } = new URL(req.url, `http://localhost`);

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') { res.writeHead(204); res.end(); return; }

  // GET /api/trips
  if (pathname === '/api/trips' && req.method === 'GET') {
    const trips = await getTrips();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify(trips));
  }

  // POST /api/trips — create new trip from template
  if (pathname === '/api/trips' && req.method === 'POST') {
    try {
      const data = JSON.parse(await readBody(req));
      const slug = (data.name || data.title)
        .toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/gi, 'd')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');

      const dir = path.join(TRIPS_DIR, slug);
      await fsp.mkdir(dir);
      await fsp.mkdir(path.join(dir, 'images'));
      await fsp.mkdir(path.join(dir, 'output'));

      // Build dates string
      const dates = [data.start_date, data.end_date].filter(Boolean).join(' – ') || data.dates || 'TBD';

      // Fill template
      let tpl = await fsp.readFile(path.join(TEMPLATE_DIR, 'README.md'), 'utf-8');
      const replacements = {
        TITLE: data.title || slug,
        SUBTITLE: data.subtitle || data.idea || 'Thêm mô tả lộ trình',
        DATES: dates,
        DURATION: data.duration || 'TBD',
        PEOPLE: data.people || '2',
        TRANSPORT: data.transport || 'xe máy',
        KM: data.km || 'TBD',
        BUDGET: data.budget || 'TBD',
        IDEA: data.idea || '',
      };
      for (const [k, v] of Object.entries(replacements)) {
        tpl = tpl.replace(new RegExp(`\\[${k}\\]`, 'g'), v);
      }

      await fsp.writeFile(path.join(dir, 'README.md'), tpl);
      const meta = { ...data, name: slug, dates, status: 'planning', created: new Date().toISOString() };
      await fsp.writeFile(path.join(dir, 'meta.json'), JSON.stringify(meta, null, 2));

      res.writeHead(201, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ name: slug }));
    } catch (e) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ error: e.message }));
    }
  }

  // GET /api/trips/:name/readme
  const readmeMatch = pathname.match(/^\/api\/trips\/([^/]+)\/readme$/);
  if (readmeMatch && req.method === 'GET') {
    const p = safePath(TRIPS_DIR, readmeMatch[1], 'README.md');
    if (!p) { res.writeHead(403); return res.end(); }
    try {
      const content = await fsp.readFile(p, 'utf-8');
      res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
      return res.end(content);
    } catch {
      res.writeHead(404);
      return res.end('README not found');
    }
  }

  // GET/PATCH /api/trips/:name/meta
  const metaMatch = pathname.match(/^\/api\/trips\/([^/]+)\/meta$/);
  if (metaMatch) {
    const p = safePath(TRIPS_DIR, metaMatch[1], 'meta.json');
    if (!p) { res.writeHead(403); return res.end(); }
    if (req.method === 'GET') {
      try {
        const c = await fsp.readFile(p, 'utf-8');
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(c);
      } catch { res.writeHead(404); return res.end('{}'); }
    }
    if (req.method === 'PATCH') {
      try {
        let current = {};
        try { current = JSON.parse(await fsp.readFile(p, 'utf-8')); } catch {}
        const updated = { ...current, ...JSON.parse(await readBody(req)) };
        await fsp.writeFile(p, JSON.stringify(updated, null, 2));
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify(updated));
      } catch (e) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ error: e.message }));
      }
    }
  }

  // Serve trip files (PDFs, images, HTML outputs)
  if (pathname.startsWith('/trips/')) {
    const rel = pathname.slice('/trips/'.length);
    const p = safePath(TRIPS_DIR, rel);
    if (!p) { res.writeHead(403); return res.end('Forbidden'); }
    if (await serveStatic(req, res, p)) return;
    res.writeHead(404); return res.end('Not found');
  }

  // Serve UI
  if (pathname === '/' || pathname === '') {
    if (await serveStatic(req, res, path.join(UI_DIR, 'index.html'))) return;
  }

  const uiPath = safePath(UI_DIR, pathname.slice(1));
  if (uiPath && await serveStatic(req, res, uiPath)) return;

  res.writeHead(404); res.end('Not found');
});

server.listen(PORT, () => {
  console.log(`\n🗺️  Trip Plans UI → http://localhost:${PORT}\n`);
});
