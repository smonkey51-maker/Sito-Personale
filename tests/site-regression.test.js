// Dependency-free structural regression checks for the static site.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const pages = ['index.html', 'rag-aziendale.html', 'ai-in-locale.html', 'iniziative.html', 'progetti.html', 'percorso.html', 'privacy.html'];
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
  assert(!html.includes('id="cmEmail"'), file + ': email row must stay removed');
  assert(!html.includes('data-lang="fr"'), file + ': French selector must be removed');
  assert(html.includes('href="pages.css"'), file + ': pages.css missing');
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
assert(home.includes('data-i18n="hero_greeting"'), 'Hero greeting must be translated');
assert(home.includes('id="heroIntro"'), 'Hero intro paragraph missing');
for (const language of ['it', 'en']) assert(dictionaries[language].includes('hero_intro:'), language + ': hero intro missing');
assert(home.includes('data-i18n="skip_to_content"'), 'Skip link must be translated');
assert(home.includes('class="hero-filmstrip"'), 'Hero filmstrip must link to the real pages');
assert(home.includes('srcset="photo.webp?v=24"'), 'New portrait must be displayed');
assert(home.includes('srcset="photo-mobile.webp?v=24"'), 'Mobile portrait crop must be displayed');
assert(!home.includes('class="info-dialog"'), 'Project dialogs were replaced by pages');

assert(read('rag-aziendale.html').includes('data-i18n="c1_summary"'), 'RAG summary must remain');
assert(read('ai-in-locale.html').includes('data-i18n="c2_summary"'), 'Local AI summary must remain');
for (const file of ['rag-aziendale.html', 'ai-in-locale.html', 'iniziative.html', 'percorso.html', 'progetti.html']) {
  assert(read('sitemap.xml').includes('https://nforcolin.eu/' + file), 'Sitemap missing ' + file);
}
const redesign = read('portfolio-redesign.css');
assert(/@media\(prefers-reduced-motion:no-preference\)\{\s*@view-transition\{navigation:auto\}/.test(redesign), 'Page transitions must be limited to no-preference motion');
assert(/@media\(prefers-reduced-motion:reduce\)\{\.hero-portrait\{animation-name:portrait-fade\}\}/.test(redesign), 'Portrait reveal needs a reduced-motion fallback');
console.log('Site regression checks passed');
