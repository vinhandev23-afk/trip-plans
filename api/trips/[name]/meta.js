const fsp = require('fs').promises;
const path = require('path');

const TRIPS_DIR = path.join(process.cwd(), 'trips');
const IS_VERCEL = !!process.env.VERCEL;

function safePath(name) {
  if (!name || name.includes('..') || name.includes('/')) return null;
  return path.join(TRIPS_DIR, name, 'meta.json');
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, PATCH, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(204).end();

  const { name } = req.query;
  const filePath = safePath(name);
  if (!filePath) return res.status(400).json({ error: 'Invalid trip name' });

  if (req.method === 'GET') {
    try {
      const content = await fsp.readFile(filePath, 'utf-8');
      return res.status(200).json(JSON.parse(content));
    } catch {
      return res.status(404).json({});
    }
  }

  if (req.method === 'PATCH') {
    if (IS_VERCEL) return res.status(403).json({ error: 'Read-only on hosted version' });
    try {
      let current = {};
      try { current = JSON.parse(await fsp.readFile(filePath, 'utf-8')); } catch {}
      const updated = { ...current, ...req.body };
      await fsp.writeFile(filePath, JSON.stringify(updated, null, 2));
      return res.status(200).json(updated);
    } catch (e) {
      return res.status(400).json({ error: e.message });
    }
  }

  res.status(405).end();
};
