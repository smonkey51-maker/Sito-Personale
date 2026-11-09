/* Ricerca nel sito: legge le pagine una volta, al primo utilizzo, e mostra i
   passaggi che contengono il testo digitato, con il link alla pagina. */
(() => {
const button = document.querySelector(".search-btn");
const topbar = document.querySelector(".topbar");
if (!button || !topbar) return;
const pages = ["index.html", "progetti.html", "ai-in-locale.html", "agenti.html", "rag-aziendale.html", "iniziative.html", "percorso.html", "fuori-dal-lavoro.html", "privacy.html"];
const panel = document.createElement("div");
panel.className = "search-panel";
panel.hidden = true;
panel.innerHTML = '<label class="visually-hidden" for="siteSearch">Cerca nel sito</label><input id="siteSearch" type="search" autocomplete="off" placeholder="Cerca nel sito"><ul class="search-results" aria-live="polite"></ul>';
topbar.appendChild(panel);
const input = panel.querySelector("input");
const results = panel.querySelector(".search-results");
let index = null;
const norm = (text) => text.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
function load() {
  if (index) return Promise.resolve(index);
  return Promise.all(pages.map((url) => fetch(url).then((r) => r.text()).catch(() => ""))).then((docs) => {
    index = [];
    docs.forEach((html, i) => {
      const doc = new DOMParser().parseFromString(html, "text/html");
      const title = (doc.querySelector("h1") || doc.title).textContent.replace(/\s+/g, " ").trim();
      (doc.querySelector("main") || doc.body).querySelectorAll("h1, h2, h3, p, li").forEach((el) => {
        const text = el.textContent.replace(/\s+/g, " ").trim();
        if (text.length > 3 && text !== title) index.push({ url: pages[i], title, text });
      });
    });
    return index;
  });
}
function render() {
  const q = norm(input.value.trim());
  results.textContent = "";
  if (q.length < 2 || !index) return;
  const hits = index.filter((e) => norm(e.text).includes(q)).slice(0, 8);
  if (!hits.length) {
    const li = document.createElement("li");
    li.className = "search-empty";
    li.textContent = "Nessun risultato.";
    results.appendChild(li);
    return;
  }
  hits.forEach((hit) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = hit.url;
    const page = document.createElement("span");
    page.className = "s-page";
    page.textContent = hit.title;
    const snippet = document.createElement("span");
    snippet.className = "s-text";
    const at = norm(hit.text).indexOf(q);
    const from = Math.max(0, at - 60);
    snippet.textContent = (from > 0 ? "…" : "") + hit.text.slice(from, from + 160) + (from + 160 < hit.text.length ? "…" : "");
    a.append(page, snippet);
    li.appendChild(a);
    results.appendChild(li);
  });
}
function setOpen(open) {
  panel.hidden = !open;
  button.setAttribute("aria-expanded", String(open));
  if (open) {
    load().then(render);
    input.focus();
  }
}
/* Dopo aver scelto un risultato, o tornando indietro con la cronologia (la pagina può essere ripristinata com'era), la ricerca si richiude e si svuota. */
function reset() {
  input.value = "";
  results.textContent = "";
  setOpen(false);
}
results.addEventListener("click", (e) => { if (e.target.closest("a")) reset(); });
window.addEventListener("pagehide", reset);
window.addEventListener("pageshow", (e) => { if (e.persisted) reset(); });
button.addEventListener("click", () => setOpen(panel.hidden));
input.addEventListener("input", () => { load().then(render); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !panel.hidden) { setOpen(false); button.focus(); } });
document.addEventListener("click", (e) => { if (!panel.hidden && !panel.contains(e.target) && !button.contains(e.target)) setOpen(false); });
})();
