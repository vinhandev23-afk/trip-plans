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

  // Clean and recreate public/
  await fsp.rm(PUBLIC, { recursive: true, force: true });
  await fsp.mkdir(PUBLIC, { recursive: true });

  // Copy UI files
  for (const file of ['index.html', 'style.css', 'app.js']) {
    await copyFile(path.join(UI_DIR, file), path.join(PUBLIC, file));
    console.log(`  ✓ ui/${file}`);
  }

  // Copy public trip outputs (PDFs only)
  const entries = await fsp.readdir(TRIPS_DIR, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isDirectory() || entry.name.startsWith('.')) continue;

    const tripDir = path.join(TRIPS_DIR, entry.name);
    let meta = {};
    try {
      meta = JSON.parse(await fsp.readFile(path.join(tripDir, 'meta.json'), 'utf-8'));
    } catch {}

    if (!meta.public) {
      console.log(`  ✗ trips/${entry.name} (private)`);
      continue;
    }

    // Copy output PDFs
    const outputDir = path.join(tripDir, 'output');
    let files;
    try { files = await fsp.readdir(outputDir); } catch { continue; }

    const pdfs = files.filter(f => f.endsWith('.pdf'));
    for (const pdf of pdfs) {
      const src = path.join(outputDir, pdf);
      const dest = path.join(PUBLIC, 'trips', entry.name, 'output', pdf);
      const size = (await fsp.stat(src)).size;
      await copyFile(src, dest);
      console.log(`  ✓ trips/${entry.name}/output/${pdf} (${(size / 1024 / 1024).toFixed(1)}MB)`);
    }
  }

  console.log('\nBuild complete → public/');
}

build().catch(e => { console.error(e); process.exit(1); });
