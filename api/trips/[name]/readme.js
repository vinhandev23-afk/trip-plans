const fsp = require('fs').promises;
const path = require('path');

const TRIPS_DIR = path.join(process.cwd(), 'trips');
const IS_VERCEL = !!process.env.VERCEL;

function safePath(name) {
  if (!name || name.includes('..') || name.includes('/')) return null;
  return path.join(TRIPS_DIR, name, 'README.md');
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'GET') return res.status(405).end();

  const { name } = req.query;
  const filePath = safePath(name);
  if (!filePath) return res.status(400).json({ error: 'Invalid trip name' });

  // On Vercel, only serve readme for public trips
  if (IS_VERCEL) {
    try {
      const meta = JSON.parse(await fsp.readFile(path.join(TRIPS_DIR, name, 'meta.json'), 'utf-8'));
      if (!meta.public) return res.status(403).json({ error: 'Not public' });
    } catch {}
  }

  try {
    const content = await fsp.readFile(filePath, 'utf-8');
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    return res.status(200).send(content);
  } catch {
    return res.status(404).send('README not found');
  }
};
