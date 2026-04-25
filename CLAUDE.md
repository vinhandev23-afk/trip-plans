# Trip Plans — Planning Workspace + PDF Brochure Generator

## ⚠️ Rules for Claude — MUST FOLLOW

- **NEVER** run `git push`, `git push --force`, or any command that pushes code to remote without explicit user confirmation
- **NEVER** run `vercel`, `vercel deploy`, or any deploy command without explicit user instruction
- **NEVER** log in to GitHub, Vercel, or any external service — do not run `vercel login`, `gh auth login`, or similar
- **NEVER** switch, add, or authenticate with a different GitHub/Vercel account
- **Always ask** before any action that sends data outside the local machine (deploy, push, publish)

## Overview
This project has two parts:
1. **Planning**: User provides trip ideas → Claude creates a detailed `README.md` markdown plan inside `trips/<name>/`
2. **Brochure**: Node.js `gen.js` + Chrome headless renders beautiful A4 PDF brochures from images

## Web UI (Local)

```bash
node server.js        # Start at http://localhost:3000
```

View all trips, read README plans, view PDFs, create new trips from the UI.

## Creating a New Trip Plan

Tell Claude your idea: route, dates, people, transport, budget. Claude will create:
- `trips/<name>/README.md` — full itinerary plan (based on `_template/README.md`)
- `trips/<name>/meta.json` — metadata for the UI

## Generating a PDF Brochure

```bash
# 1. Edit gen.js in the trip folder
cd trips/<trip-name>
node gen.js

# 2. Render PDF with Chrome headless
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --no-sandbox \
  --print-to-pdf="output/<filename>.pdf" \
  --print-to-pdf-no-header --no-margins \
  --virtual-time-budget=10000 \
  "file://$(pwd)/output/<filename>.html"
```

## Folder Structure

```
trip-plans/
  CLAUDE.md          # This file
  server.js          # Web UI server (port 3000)
  package.json
  _template/
    README.md        # Template for new trip plans (with [PLACEHOLDER] fields)
  ui/                # Frontend (HTML + CSS + JS)
    index.html
    style.css
    app.js
  trips/
    <trip-name>/
      README.md      # Detailed itinerary plan (markdown)
      meta.json      # Title, dates, people, transport, status, budget
      gen.js         # PDF brochure generator
      images/        # Source images for brochure
      output/        # Generated HTML + PDF files
  _archive/          # Legacy/duplicate files (safe to ignore)
```

## Trip Plan Template Structure (README.md)

Based on `trips/roadtrip-30-4/README.md` as the gold standard:
- Header: title, route tagline, dates/duration/people/transport/km/budget summary
- ASCII route diagram
- DEADLINES table (accommodations to book, tasks)
- Day-by-day itinerary (tables with time/location/details + tip blockquotes)
- Hotel booking table
- Gas/fuel notes + km per day table
- Safety notes (vehicle, weather, road safety, cash)
- Budget breakdown table
- Highlights table (★★★ rating)

## Key Technical Notes

- Images MUST be embedded as base64 in HTML. External URLs fail in Chrome headless PDF.
- Use `@page { size: A4; margin: 0; }` and `-webkit-print-color-adjust: exact` for print fidelity.
- For webp images, use `data:image/webp;base64,...` MIME type.
- Each `.page` div is exactly 210mm x 297mm with `page-break-after: always`.
- `--virtual-time-budget=10000` gives Chrome time to load fonts and render.
- Large images (>1MB) significantly increase HTML/PDF size. Resize to ~1200px width for balance.

## Trips

### 1. Long Hai (Company Trip)
- **Route**: Q9 -> Deo Nuoc Ngot -> Phuoc Hai -> Cafe -> Villa 50 Nguyen Chi Thanh -> BBQ
- **People**: ~20, bus 29 seats
- **Duration**: 2N1D
- **Villa**: 50 Nguyen Chi Thanh, Long Hai

### 2. Phu Quy (Club Trip)
- **Route**: HCM -> Phan Thiet (limousine) -> Superdong -> Phu Quy Island
- **People**: ~10 (club)
- **Duration**: 3N2D
- **Budget**: < 2.5 trieu/nguoi
- **Best dates**: May 8-10 or May 15-17, 2026
- **Food spots**: Sea La Vie, Be ca Anh Sang, Quan Ong Gia, Say Dao, Co Bay

### 3. Road Trip 30/4
- **Route**: SG -> Phan Rang -> Quy Nhon (coastal) -> Nha Trang -> Deo Khanh Le -> Da Lat (transit) -> Ho Ta Dung -> SG
- **People**: 2 (motorcycle)
- **Duration**: 7N6D
- **Budget**: ~3.5 trieu/nguoi
- **Highlight**: Deo Khanh Le (QL27C), Ho Ta Dung camping
