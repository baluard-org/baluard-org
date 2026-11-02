#!/usr/bin/env bash
# Regenerates favicon.ico (16/32/48), favicon-32x32.png, and icon-192.png from the lock SVG.
set -euo pipefail

cd "$(dirname "$0")/.."

WORK=$(mktemp -d)
trap 'rm -rf "$WORK"' EXIT

for s in 16 32 48 192; do
  rsvg-convert -w "$s" -h "$s" site/static/assets/baluard-lock-only.svg -o "$WORK/icon-$s.png"
done

magick "$WORK/icon-16.png" "$WORK/icon-32.png" "$WORK/icon-48.png" site/static/favicon.ico
cp "$WORK/icon-32.png" site/static/assets/favicon-32x32.png
cp "$WORK/icon-192.png" site/static/assets/icon-192.png

identify site/static/favicon.ico
