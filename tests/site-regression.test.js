// Dependency-free structural regression checks for the static site.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const pages = ['index.html', 'rag-aziendale.html', 'ai-in-locale.html', 'progetti.html', 'percorso.html', 'fuori-dal-lavoro.html', 'privacy.html', 'contatti.html', '404.html'];
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
  for (const code of ['it', 'en', 'zh']) assert(html.includes('data-lang="' + code + '"'), file + ': language button ' + code + ' missing');
  assert(html.includes('href="pages.css"'), file + ': pages.css missing');
  assert(html.includes('name="color-scheme" content="dark"') && html.includes('name="darkreader-lock"'), file + ': colour schemes must be declared so browsers do not recolour the site');
  assert(html.includes('<script src="script.js"></script>'), file + ': script.js missing');
  assert(!/fonts\.googleapis|fonts\.gstatic/.test(html), file + ': fonts must be served from the site, not Google Fonts');
  assert(!/\b(Jira|UCMDB|Confluence|wiki)\b/i.test(html), file + ': internal source tools must not be named');
  assert((html.match(/<main[\s>]/g) || []).length === 1, file + ': exactly one <main> landmark');
  assert(!html.includes('class="work-meta'), file + ': no eyebrow label above the title');
  assert(!html.replace(/<script[\s\S]*?<\/script>/g, '').includes('·'), file + ': no middle-dot joined strings');
  assert(html.includes('class="lang-list"'), file + ': language list missing');
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
assert(!home.includes('hero_hi'), 'Hero opens with the intro, no greeting');
assert(home.includes('id="heroIntro"'), 'Hero intro paragraph missing');
for (const language of ['it', 'en']) assert(dictionaries[language].includes('hero_intro:'), language + ': hero intro missing');
assert(home.includes('data-i18n="skip_to_content"'), 'Skip link must be translated');
assert(!home.includes('hero-cta-row'), 'The redundant hero links were removed');
assert(home.includes('src="photo.webp?v=43"'), 'New portrait must be displayed');
// Home attorno a quattro ambiti (28 novembre 2026): apertura di tre righe con l'invito al caffè, quattro ambiti, niente riga sul pubblico.
for (const area of ['area1_t', 'area2_t', 'area3_t', 'area4_t']) assert(home.includes('data-i18n="' + area + '"'), 'Home must list the area ' + area);
assert(home.includes('id="homeAreasTitle"') && !home.includes('hero-audience') && !home.includes('home_audience_desc'), 'Home areas section replaces the projects list and the audience line');
assert(home.includes('<a class="home-text-link" href="contatti.html">Conosciamoci con un caffè.</a>'), 'The hero must end with the coffee link to the contact page');
for (const language of ['it', 'en']) assert(dictionaries[language].includes('href:"contatti.html"'), language + ': hero coffee link missing');
assert(read('progetti.html').includes('data-i18n="area4_t"'), 'Progetti must group the projects by area');

assert(!home.includes('class="info-dialog"'), 'Project dialogs were replaced by pages');

assert(read('rag-aziendale.html').includes('data-i18n="c1_summary"'), 'RAG summary must remain');
assert(read('ai-in-locale.html').includes('data-i18n="c2_summary"'), 'Local AI summary must remain');
for (const file of ['rag-aziendale.html', 'ai-in-locale.html', 'percorso.html', 'progetti.html', 'fuori-dal-lavoro.html', 'contatti.html']) {
  assert(read('sitemap.xml').includes('https://nforcolin.eu/' + file), 'Sitemap missing ' + file);
}
const redesign = read('portfolio-redesign.css');
assert(/@media\(prefers-reduced-motion:no-preference\)\{\s*@view-transition\{navigation:auto\}/.test(redesign), 'Page transitions must be limited to no-preference motion');
const admin = read('admin.html');
assert(!/<style|\sstyle="|<script>/.test(admin), 'admin.html: inline styles and scripts are blocked by the CSP');
assert(admin.includes('href="/admin.css"'), 'admin.html: admin.css missing');
const ragPage = read('rag-aziendale.html');
assert(ragPage.includes('data-figure') && ragPage.includes('src="figure.js"') && ragPage.includes('href="figure.css"'), 'RAG figure must be wired to its own CSS and script files');
assert(!/<svg[^>]*\sstyle=/.test(ragPage), 'RAG figure must not use style attributes');
const ogMatch = read('index.html').match(/property="og:image" content="https:\/\/nforcolin\.eu\/([^"]+)"/);
assert(ogMatch && !/%20|\s/.test(ogMatch[1]), 'og:image must point to a file without spaces');
// Il ?v=N serve solo a far rileggere l'immagine ai social: il file è quello senza parametro.
assert(fs.statSync(path.join(root, ogMatch[1].split('?')[0])).size < 300 * 1024, 'og:image must stay under 300 KB for social previews');
const vercel = JSON.parse(read('vercel.json'));
assert((vercel.redirects || []).some(r => r.has?.some(h => h.type === 'host' && h.value === 'www.nforcolin.eu') && r.destination.startsWith('https://nforcolin.eu/') && r.permanent), 'www must redirect permanently to the apex domain');
// Internal InfoCamere metrics are not approved for publication. Approved by Nicolò in
// November 2026: "36 colleghi" (colleagues supported on AI; exact figure confirmed by Nicolò on 28 November 2026) and the RAG results
// (14 users of the RAG, the Manager and 13 collaborators; one of 6 InfoCamere employees in an AI solutions project run by 1 director and 1 deputy director; incidents in 15 minutes (before: one hour, exact, confirmed on 28 November 2026), analysis in under 2 hours, up to 15 questions a day).
const internalData = /\b25 (persone|people|colleghi|colleagues)\b|\b13 (colleghi|colleagues)\b|\b35 (persone|people)\b|\b([34](\.5)?|2\.5) (ore|hours)\b|ore\s+e\s+mezza|mezz.ora|half\s+an\s+hour|\b30 (minuti|minutes)\b|costo\s+nullo|at\s+no\s+cost|esos[ei]|more\s+expensive/;
for (const file of [...pages, 'script.js']) assert(!internalData.test(read(file)), file + ': contains unapproved internal metrics');
// Pagina contatti: il modulo invia a /api/contact/send, ha il campo trappola e rimanda all'informativa.
const contact = read('contatti.html');
assert(contact.includes('id="contactForm"') && contact.includes('action="/api/contact/send"'), 'Contact form missing');
assert(contact.includes('name="website"') && contact.includes('class="field-trap"'), 'Contact form honeypot missing');
assert(contact.includes('href="privacy.html#modulo"') && read('privacy.html').includes('id="modulo"'), 'Contact form must link to its privacy section');
for (const f of ['send', 'list', 'delete']) assert(fs.existsSync(path.join(root, 'api/contact/' + f + '.js')), 'api/contact/' + f + '.js missing');
assert(read('index.html').includes('<a href="contatti.html" data-i18n="collab_coffee">'), 'The coffee line must link to the contact page');
for (const file of ['rag-aziendale.html', 'ai-in-locale.html', 'percorso.html', 'progetti.html', 'fuori-dal-lavoro.html']) {
  assert(read(file).includes('class="cta-button" href="contatti.html"'), file + ': the closing button must open the contact page');
}
// Il token del bot Telegram vive solo nelle variabili d'ambiente di Vercel.
const send = read('api/contact/send.js');
assert(send.includes('process.env.TELEGRAM_BOT_TOKEN') && !/\d{8,10}:[A-Za-z0-9_-]{30,}/.test(send), 'Telegram token must come from the environment');
assert(!send.includes('parse_mode'), 'Telegram messages are plain text, so the sender cannot inject formatting');
assert(read('privacy.html').includes('Telegram'), 'The privacy notice must mention the Telegram forwarding');
console.log('Site regression checks passed');

/* Cinese: stesse chiavi dell'inglese, stessi segnaposto, nessuno strumento interno. */
{
  const vm = require('node:vm');
  const load = name => { const sandbox = { window: {} }; vm.runInNewContext(read(name), sandbox); return sandbox.window.NF_I18N; };
  const start = js.indexOf('en: {');
  const enBlock = vm.runInNewContext('({' + js.slice(start, js.indexOf('\n    }\n  };', start) + 6).replace(/^en:/, 'en:') + '})');
  const en = enBlock.en;
  for (const [code, file] of [['zh', 'i18n-zh.js']]) {
    const dict = load(file)[code];
    assert(dict, file + ': dictionary missing');
    assert.deepEqual(Object.keys(dict).sort(), Object.keys(en).sort(), file + ': keys differ from the English dictionary');
    assert.equal(dict.hero_intro.length, en.hero_intro.length, file + ': hero_intro paragraphs differ');
    assert(dict.rag_fig_reading.includes('{name}'), file + ': {name} placeholder missing');
    assert(!/\b(Jira|UCMDB|Confluence|wiki)\b/i.test(read(file)), file + ': internal source tools must not be named');
  }
}
