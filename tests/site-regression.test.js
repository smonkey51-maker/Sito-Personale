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
for (const id of ['casi-studio','local-ai','esperienze']) {
  assert(html.includes('id="' + id + '"'), 'Missing section ' + id);
}
for (const removed of ['percorso','badge','contatti','chi-sono']) {
  assert(!html.includes('id="' + removed + '"'), 'Removed section returned: ' + removed);
}
assert(html.indexOf('id="casi-studio"') < html.indexOf('id="local-ai"'), 'RAG must precede local AI');
assert(html.indexOf('id="local-ai"') < html.indexOf('id="esperienze"'), 'Projects must precede initiatives');
for (const key of [...html.matchAll(/data-i18n="([^"]+)"/g)].map(m=>m[1])) {
  for (const lang of ['it','en']) {
    const start=js.indexOf(lang + ': {');
    assert(start >= 0, 'Missing locale ' + lang);
    const end=js.indexOf('\n    },',start);
    assert(js.slice(start,end<0?undefined:end).includes(key + ':'), 'Missing ' + lang + ' translation: ' + key);
  }
}
assert(config.headers.some(group => group.headers.some(h => h.key === 'Content-Security-Policy')), 'Missing CSP');

// Translation coverage: all keys used in the page must exist in all three dictionaries.
const translationKeys = [...html.matchAll(/data-i18n(?:-aria|-title|-placeholder)?="([^"]+)"/g)].map(m => m[1]);
const scriptSource = fs.readFileSync(path.join(__dirname, '..', 'script.js'), 'utf8');
for (const language of ['it','en']) {
  const start = scriptSource.indexOf('    ' + language + ': {');
  const end = language === 'it' ? scriptSource.indexOf('    en: {',start) : scriptSource.indexOf('\n  };',start);
  assert(start >= 0 && end > start, 'Translation dictionary missing: ' + language);
  const section = scriptSource.slice(start,end);
  for(const key of translationKeys) {
    assert(new RegExp('\\b' + key + '\\s*:').test(section), language + ' missing translation for ' + key);
  }
}
assert(html.includes('data-i18n="hero_intro"'), 'Hero introduction must be translated');
assert(html.includes('data-i18n="skip_to_content"'), 'Skip link must be translated');

assert(!html.includes('data-lang="fr"'), 'French selector must be removed');
assert(!html.includes('class="desktop-nav"'), 'Redundant project nav must be removed');
assert(html.includes('srcset="portrait.webp?v=5"'), 'New portrait must be displayed');
assert(!html.includes('id="c1Details"'), 'RAG detail reader must be removed');
assert(!html.includes('rag_step1_title'), 'RAG diagram must be removed');
assert(!html.includes('id="c2Details"'), 'Local AI detail reader must be removed');
assert(!html.includes('local_step1_title'), 'Local AI diagram must be removed');
assert(html.includes('data-i18n="c2_summary"'), 'Local AI summary must remain');
assert(html.includes('data-i18n="c1_summary"'), 'RAG summary must remain');
console.log('Site regression checks passed');
