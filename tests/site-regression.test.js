// Dependency-free structural regression checks for the static site.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const pages = ['index.html', 'rag-aziendale.html', 'ai-in-locale.html', 'iniziative.html', 'progetti.html', 'percorso.html', 'fuori-dal-lavoro.html', 'privacy.html', '404.html'];
const js = read('script.js');
const config = JSON.parse(read('vercel.json'));
assert(config.headers.some(group => group.headers.some(h => h.key === 'Content-Security-Policy')), 'Missing CSP');
for (const css of ['style.css', 'portfolio-redesign.css', 'pages.css']) {
  assert(!/@import|fonts\.googleapis|fonts\.gstatic/.test(read(css)), css + ': no blocking @import or Google Fonts');
}

// Translation coverage: every key used in any page must exist in both dictionaries.
const dictionaries = {};
for (const language of ['it', 'en']) {
  const start = js.indexOf('    ' + language + ': {');
  const end = language === 'it' ? js.indexOf('    en: {', start) : js.indexOf('\n  };', start);
  assert(start >= 0 && end > start, 'Translation dictionary missing: ' + language);
  dictionaries[language] = js.slice(start, end);
}

for (const file of pages) {
  const html = read(file);
  assert(!html.includes('\\n<'), file + ': literal newline escape found');
  assert(!/<script>/.test(html), file + ': inline scripts are not allowed by the CSP');
  assert(!/<style/.test(html), file + ': inline styles are not allowed by the CSP');
  assert(!/\sstyle="/.test(html), file + ': style attributes are not allowed by the CSP');
  assert(!html.includes('infocamere.it'), file + ': work email must not be published');
  assert(!html.includes('data-lang="fr"'), file + ': French selector must be removed');
  for (const code of ['it', 'en', 'zh', 'tw']) assert(html.includes('data-lang="' + code + '"'), file + ': language button ' + code + ' missing');
  assert(html.includes('href="pages.css"'), file + ': pages.css missing');
  assert(html.includes('name="color-scheme" content="dark"') && html.includes('name="darkreader-lock"'), file + ': dark colour scheme must be declared so browsers do not recolour the site');
  assert(html.includes('<script src="script.js"></script>'), file + ': script.js missing');
  assert(!/fonts\.googleapis|fonts\.gstatic/.test(html), file + ': fonts must be served from the site, not Google Fonts');
  assert(!/\b(Jira|UCMDB|Confluence|wiki)\b/i.test(html), file + ': internal source tools must not be named');
  assert((html.match(/<main[\s>]/g) || []).length === 1, file + ': exactly one <main> landmark');
  assert(!html.includes('class="work-meta'), file + ': no eyebrow label above the title');
  assert(!html.replace(/<script[\s\S]*?<\/script>/g, '').includes('·'), file + ': no middle-dot joined strings');
  if (file !== 'index.html') assert(html.includes('class="desktop-nav"'), file + ': navigation missing');
  assert(/<body[^>]+data-page="[a-z]+"/.test(html), file + ': body needs data-page');
  for (const [, target] of html.matchAll(/href="([a-z-]+\.html)"/g)) {
    assert(fs.existsSync(path.join(root, target)), file + ' links to missing page ' + target);
  }
  for (const key of [...html.matchAll(/data-i18n(?:-aria)?="([^"]+)"/g)].map(m => m[1])) {
    for (const language of ['it', 'en']) {
      assert(new RegExp('\\b' + key + '\\s*:').test(dictionaries[language]), file + ': ' + language + ' missing translation for ' + key);
    }
  }
  const pageName = html.match(/data-page="([a-z]+)"/)[1];
  const suffix = pageName === 'home' ? '' : '_' + pageName;
  for (const language of ['it', 'en']) {
    assert(dictionaries[language].includes('page_title' + suffix + ':'), file + ': ' + language + ' page title missing');
  }
}
assert(!js.includes('infocamere.it'), 'Work email must not be published');
assert(!/\b(Jira|UCMDB|Confluence|wiki)\b/i.test(js), 'Internal source tools must not be named');
// The installed app paints Android's system bars from the manifest: keep it on the page colour.
const manifest = JSON.parse(read('manifest.json'));
for (const file of pages) {
  const themeColor = (read(file).match(/name="theme-color" content="([^"]+)"/) || [])[1];
  assert(themeColor === manifest.theme_color && themeColor === manifest.background_color, file + ': theme-color must match manifest colours');
}
for (const language of ['it', 'en']) assert(!dictionaries[language].includes('·'), language + ': no middle-dot joined strings');

const home = read('index.html');
assert(home.includes('data-i18n="hero_hi"'), 'Hero greeting must be translated');
assert(home.includes('id="heroIntro"'), 'Hero intro paragraph missing');
for (const language of ['it', 'en']) assert(dictionaries[language].includes('hero_intro:'), language + ': hero intro missing');
assert(home.includes('data-i18n="skip_to_content"'), 'Skip link must be translated');
assert(home.includes('href="progetti.html"') && home.includes('class="hero-link"') && home.includes('hero-link contact-trigger'), 'Hero links must reach the projects page and open the contacts');
assert(home.includes('srcset="photo.webp?v=31"'), 'New portrait must be displayed');
assert(home.includes('srcset="photo-mobile.webp?v=31"'), 'Mobile portrait crop must be displayed');
assert(!home.includes('class="info-dialog"'), 'Project dialogs were replaced by pages');

assert(read('rag-aziendale.html').includes('data-i18n="c1_summary"'), 'RAG summary must remain');
assert(read('ai-in-locale.html').includes('data-i18n="c2_summary"'), 'Local AI summary must remain');
for (const file of ['rag-aziendale.html', 'ai-in-locale.html', 'iniziative.html', 'percorso.html', 'progetti.html', 'fuori-dal-lavoro.html']) {
  assert(read('sitemap.xml').includes('https://nforcolin.eu/' + file), 'Sitemap missing ' + file);
}
const redesign = read('portfolio-redesign.css');
assert(/@media\(prefers-reduced-motion:no-preference\)\{\s*@view-transition\{navigation:auto\}/.test(redesign), 'Page transitions must be limited to no-preference motion');
assert(/@media\(prefers-reduced-motion:reduce\)\{\.hero-portrait\{animation-name:portrait-fade\}\}/.test(redesign), 'Portrait reveal needs a reduced-motion fallback');
const admin = read('admin.html');
assert(!/<style|\sstyle="|<script>/.test(admin), 'admin.html: inline styles and scripts are blocked by the CSP');
assert(admin.includes('href="/admin.css"'), 'admin.html: admin.css missing');
const ragPage = read('rag-aziendale.html');
assert(ragPage.includes('data-figure') && ragPage.includes('src="figure.js"') && ragPage.includes('href="figure.css"'), 'RAG figure must be wired to its own CSS and script files');
assert(!/<svg[^>]*\sstyle=/.test(ragPage), 'RAG figure must not use style attributes');
const ogMatch = read('index.html').match(/property="og:image" content="https:\/\/nforcolin\.eu\/([^"]+)"/);
assert(ogMatch && !/%20|\s/.test(ogMatch[1]), 'og:image must point to a file without spaces');
assert(fs.statSync(path.join(root, ogMatch[1])).size < 300 * 1024, 'og:image must stay under 300 KB for social previews');
const vercel = JSON.parse(read('vercel.json'));
assert((vercel.redirects || []).some(r => r.has?.some(h => h.type === 'host' && h.value === 'www.nforcolin.eu') && r.destination.startsWith('https://nforcolin.eu/') && r.permanent), 'www must redirect permanently to the apex domain');
// Internal InfoCamere metrics are not approved for publication; "35 colleghi"
// (the colleagues supported on AI) was approved by Nicolò in November 2026.
const internalData = /\b(13|25) (persone|people|colleghi|colleagues)\b|\b35 (persone|people)\b|\b[234](\.5)? (ore|hours)\b|ore\s+e\s+mezza|mezz.ora|half\s+an\s+hour|\b30 (minuti|minutes)\b|costo\s+nullo|at\s+no\s+cost|esos[ei]|more\s+expensive/;
for (const file of [...pages, 'script.js']) assert(!internalData.test(read(file)), file + ': contains unapproved internal metrics');
console.log('Site regression checks passed');

/* Cinese e twi: stesse chiavi dell'inglese, stessi segnaposto, nessuno strumento interno. */
{
  const vm = require('node:vm');
  const load = name => { const sandbox = { window: {} }; vm.runInNewContext(read(name), sandbox); return sandbox.window.NF_I18N; };
  const start = js.indexOf('en: {');
  const enBlock = vm.runInNewContext('({' + js.slice(start, js.indexOf('\n    }\n  };', start) + 6).replace(/^en:/, 'en:') + '})');
  const en = enBlock.en;
  for (const [code, file] of [['zh', 'i18n-zh.js'], ['tw', 'i18n-tw.js']]) {
    const dict = load(file)[code];
    assert(dict, file + ': dictionary missing');
    assert.deepEqual(Object.keys(dict).sort(), Object.keys(en).sort(), file + ': keys differ from the English dictionary');
    assert.equal(dict.hero_intro.length, en.hero_intro.length, file + ': hero_intro paragraphs differ');
    assert(dict.rag_fig_reading.includes('{name}'), file + ': {name} placeholder missing');
    assert(!/\b(Jira|UCMDB|Confluence|wiki)\b/i.test(read(file)), file + ': internal source tools must not be named');
  }
}
