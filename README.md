# Trip Plans - PDF Brochure Generator

Professional A4 travel brochures generated from HTML/CSS, rendered to PDF via Chrome headless.

## Trips

| Trip | Route | Duration | People | Budget |
|------|-------|----------|--------|--------|
| **Long Hai** | Q9 -> Long Hai (villa) | 2N1D | ~20 (company) | N/A |
| **Phu Quy** | HCM -> Phan Thiet -> Phu Quy Island | 3N2D | ~10 (club) | < 2.5tr/nguoi |
| **Road Trip 30/4** | SG -> Quy Nhon -> Ta Dung -> SG | 7N6D | 2 (moto) | ~3.5tr/nguoi |

## Quick Start

```bash
# Generate HTML (from trip folder)
cd longhai && node gen.js

# Render PDF
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --no-sandbox \
  --print-to-pdf="output/trip.pdf" \
  --print-to-pdf-no-header --no-margins \
  --virtual-time-budget=10000 \
  "file://$(pwd)/output/trip.html"
```

## Adding New Images
1. Drop images into `<trip>/images/`
2. Add `loadImg('filename.jpg')` in `gen.js`
3. Reference with `${I.varName}` in HTML template
4. Run `node gen.js` then Chrome headless

## Tech Stack
- Node.js (base64 image embedding)
- HTML/CSS (A4 print layout)
- Google Fonts (Cormorant Garamond + Inter)
- Chrome headless (PDF rendering)
