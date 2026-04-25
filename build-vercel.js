#!/usr/bin/env node
/**
 * Build script for Vercel deployment.
 * Copies UI files and public trip outputs to public/.
 */
const fs = require('fs');
const fsp = require('fs').promises;
const path = require('path');

const ROOT = __dirname;
const PUBLIC = path.join(ROOT, 'public');
const TRIPS_DIR = path.join(ROOT, 'trips');
const UI_DIR = path.join(ROOT, 'ui');

async function copyFile(src, dest) {
  await fsp.mkdir(path.dirname(dest), { recursive: true });
  await fsp.copyFile(src, dest);
}

async function build() {
  console.log('Building for Vercel...');

  await fsp.rm(PUBLIC, { recursive: true, force: true });
  await fsp.mkdir(PUBLIC, { recursive: true });

  for (const file of ['index.html', 'style.css', 'app.js']) {
    await copyFile(path.join(UI_DIR, file), path.join(PUBLIC, file));
    console.log(`  ✓ ui/${file}`);
  }

  const entries = await fsp.readdir(TRIPS_DIR, { withFileTypes: true });
  const publicTrips = [];

  for (const entry of entries) {
    if (!entry.isDirectory() || entry.name.startsWith('.') || entry.name.startsWith('_')) continue;

    const tripDir = path.join(TRIPS_DIR, entry.name);
    let meta = {};
    try {
      meta = JSON.parse(await fsp.readFile(path.join(tripDir, 'meta.json'), 'utf-8'));
    } catch {}

    if (!meta.public) {
      console.log(`  ✗ trips/${entry.name} (private)`);
      continue;
    }

    // Copy README.md so it can be fetched statically
    const readmeSrc = path.join(tripDir, 'README.md');
    let hasReadme = false;
    try {
      await copyFile(readmeSrc, path.join(PUBLIC, 'trips', entry.name, 'README.md'));
      hasReadme = true;
      console.log(`  ✓ trips/${entry.name}/README.md`);

      // Use H1 from README as title fallback
      if (meta.title === entry.name || !meta.title) {
        const lines = (await fsp.readFile(readmeSrc, 'utf-8')).split('\n');
        const h1 = lines.find(l => l.startsWith('# '));
        if (h1) meta.title = h1.replace(/^#\s*/, '').trim();
      }
    } catch {}

    // Copy output PDFs
    const outputDir = path.join(tripDir, 'output');
    let files = [];
    try { files = await fsp.readdir(outputDir); } catch {}

    const pdfs = files.filter(f => f.endsWith('.pdf'));
    for (const pdf of pdfs) {
      const src = path.join(outputDir, pdf);
      const dest = path.join(PUBLIC, 'trips', entry.name, 'output', pdf);
      const size = (await fsp.stat(src)).size;
      await copyFile(src, dest);
      console.log(`  ✓ trips/${entry.name}/output/${pdf} (${(size / 1024 / 1024).toFixed(1)}MB)`);
    }

    publicTrips.push({ ...meta, name: entry.name, hasReadme, pdfs });
  }

  const order = { upcoming: 0, planning: 1, completed: 2 };
  publicTrips.sort((a, b) => (order[a.status] ?? 3) - (order[b.status] ?? 3));

  await fsp.writeFile(path.join(PUBLIC, 'trips.json'), JSON.stringify(publicTrips, null, 2));
  console.log(`  ✓ trips.json (${publicTrips.length} public trips)`);

  console.log('\nBuild complete → public/');
}

build().catch(e => { console.error(e); process.exit(1); });
