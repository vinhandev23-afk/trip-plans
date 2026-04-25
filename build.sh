#!/bin/bash
# Build all trip PDFs or a specific one
# Usage: ./build.sh [longhai|phuquy|roadtrip-30-4]

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
DIR="$(cd "$(dirname "$0")" && pwd)"

build_trip() {
  local trip="$1"
  local folder="$DIR/$trip"

  if [ ! -f "$folder/gen.js" ]; then
    echo "Error: $folder/gen.js not found"
    return 1
  fi

  echo "=== Building $trip ==="

  # Generate HTML
  cd "$folder"
  node gen.js

  # Find the generated HTML
  local html=$(ls "$folder/output/"*.html 2>/dev/null | head -1)
  if [ -z "$html" ]; then
    # Check root for HTML
    html=$(ls /Users/nhantv5/*${trip}*.html 2>/dev/null | head -1)
  fi

  if [ -z "$html" ]; then
    echo "Error: No HTML found for $trip"
    return 1
  fi

  local pdf="${html%.html}.pdf"

  echo "Rendering: $html -> $pdf"
  "$CHROME" --headless --disable-gpu --no-sandbox \
    --print-to-pdf="$pdf" \
    --print-to-pdf-no-header --no-margins \
    --virtual-time-budget=10000 \
    "file://$html" 2>/dev/null

  echo "Done: $(ls -lh "$pdf" | awk '{print $5}') -> $pdf"
  echo ""
}

if [ -n "$1" ]; then
  build_trip "$1"
else
  for trip in longhai phuquy roadtrip-30-4; do
    build_trip "$trip"
  done
fi
