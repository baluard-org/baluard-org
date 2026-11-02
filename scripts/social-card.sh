#!/usr/bin/env bash
# Regenerates site/static/assets/social-card.png, the 1200x630 og:image used by base.html.
set -euo pipefail

cd "$(dirname "$0")/.."

SANS_FONT=$(fc-match -f '%{file}' sans-serif)
WORK=$(mktemp -d)
trap 'rm -rf "$WORK"' EXIT

rsvg-convert -w 400 -h 400 site/static/assets/baluard-lock-only.svg -o "$WORK/lock.png"

cat > "$WORK/bg.svg" <<'EOF'
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0e1b1e"/>
      <stop offset="100%" stop-color="#091315"/>
    </linearGradient>
    <radialGradient id="glowLime" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0%" stop-color="#c5f279" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#c5f279" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glowBlue" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="bar" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#c5f279"/>
      <stop offset="100%" stop-color="#3f6b1e"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <circle cx="310" cy="315" r="340" fill="url(#glowLime)"/>
  <circle cx="980" cy="560" r="470" fill="url(#glowBlue)"/>
  <rect y="622" width="1200" height="8" fill="url(#bar)"/>
</svg>
EOF

rsvg-convert "$WORK/bg.svg" -o "$WORK/bg.png"

# ImageMagick's builtin SVG parser drops gradient fills (flat black); all SVG passes through rsvg-convert.
magick "$WORK/bg.png" \
  \( "$WORK/lock.png" \) -geometry +110+115 -composite \
  -font site/static/assets/baluard-morris-roman.black.ttf -pointsize 150 -fill '#f1f5f9' \
  -annotate +556+175 'Baluard' \
  -font "$SANS_FONT" -pointsize 42 -fill '#94a3b8' \
  -annotate +565+335 'No one can take it away.' \
  -annotate +565+400 'Including us.' \
  -pointsize 26 -fill '#64748b' -kerning 2 \
  -annotate +115+540 'git-native  ·  no server  ·  no account  ·  no subscription' \
  site/static/assets/social-card.png

identify site/static/assets/social-card.png
