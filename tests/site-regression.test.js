// Dependency-free structural regression checks for the static site.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const html = read('index.html');
const css = read('style.css');
const js = read('script.js');
const config = JSON.parse(read('vercel.json'));
assert(!html.includes('\\n<'), 'Literal newline escape found in HTML');
assert(!html.includes('class="page-index"'), 'Redundant page index returned');
assert(!js.includes('getElementById("pageIndex")'), 'Orphaned index JS returned');
assert(!css.includes('grayscale('), 'Portrait must stay in colour');
for (const id of ['casi-studio','local-ai','chi-sono','percorso','contatti']) {
  assert(html.includes('id="' + id + '"'), 'Missing section ' + id);
}
assert(html.indexOf('id="casi-studio"') < html.indexOf('id="local-ai"'), 'RAG must precede local AI');
assert(html.indexOf('id="local-ai"') < html.indexOf('id="chi-sono"'), 'Projects must precede biography');
for (const key of [...html.matchAll(/data-i18n="([^"]+)"/g)].map(m=>m[1])) {
  for (const lang of ['it','en','fr']) {
    const start=js.indexOf(lang + ': {');
    assert(start >= 0, 'Missing locale ' + lang);
    const end=js.indexOf('\n    },',start);
    assert(js.slice(start,end<0?undefined:end).includes(key + ':'), 'Missing ' + lang + ' translation: ' + key);
  }
}
assert(config.headers.some(group => group.headers.some(h => h.key === 'Content-Security-Policy')), 'Missing CSP');
console.log('Site regression checks passed');
