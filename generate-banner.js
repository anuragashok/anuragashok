const fs = require('fs');
const lines = [
  'Hello World!',
  "I'm Anurag Ashok",
  'Lead Software Engineer @ Grab',
  'Automation Nerd'
];
const width = 1000;
const lineHeight = 35;
const padding = 40;
const height = padding * 2 + lineHeight * lines.length;

let defs = [];
let texts = [];
let y = padding + lineHeight;
let delay = 0;

lines.forEach((line, idx) => {
  const clipId = `clip${idx}`;
  const textWidth = line.length * 18;
  defs.push(`\n<clipPath id="${clipId}">\n  <rect x="${width / 2 - textWidth / 2}" y="${y - lineHeight + 8}" width="0" height="${lineHeight}">\n    <animate attributeName="width" from="0" to="${textWidth}" dur="2s" begin="${delay}s" fill="freeze" />\n  </rect>\n</clipPath>`);
  texts.push(`<text x="50%" y="${y}" text-anchor="middle" clip-path="url(#${clipId})">${line}</text>`);
  delay += 2;
  y += lineHeight;
});

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
<style>
svg { background:#000; }
text { font-family:'Fira Code', monospace; fill:#00FF00; font-size:30px; }
</style>
<defs>
${defs.join('\n')}
</defs>
${texts.join('\n')}
</svg>`;

fs.writeFileSync('hello-world-banner.svg', svg);
