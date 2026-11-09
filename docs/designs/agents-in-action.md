# Agents in Action: pagina di demo su nforcolin.eu

* Author: Nic Forcolin
* Status: Proposed (rev. 2, dopo la Goldfish Review e la verifica sul repository)
* Date: 2026-11-09

## Overview

nforcolin.eu mostra oggi il lavoro di Nicolò sull'AI con testo e casi studio (`rag-aziendale.html`, `ai-in-locale.html`, le voci di `progetti.html`). Nessuna pagina mostra un agente mentre lavora: il visitatore legge "ho costruito X" ma non vede input, passaggi intermedi e output. Questa feature aggiunge una pagina nuova, `agenti.html`, con 3 demo basate su trace registrate di agenti AI. Il visitatore le scorre un passo alla volta. Niente gira dal vivo e non ci sono costi di inferenza ricorrenti.

## Problem Statement

Le prove di competenza ci sono già (i casi studio). Manca una prova di comportamento: nessuna pagina mostra un agente che svolge un compito passo per passo. Il pubblico principale è il top management (BRAND.md §1), che legge anche senza background tecnico; una parte dei visitatori è tecnica e vuole vedere stack, passaggi e metriche.

La soluzione: 3 demo con trace pre-registrate, prodotte una volta su un dataset sintetico creato apposta, riprodotte come replay deterministico a passi. Ogni demo ha due livelli: uno descrittivo, leggibile senza background tecnico, e uno tecnico con stack, passi e metriche.

## Goals

* Mostrare 3 demo (triage di ticket, sintesi di documenti, automazione di un workflow) come trace registrate e riproducibili a passi.
* Servire due livelli di profondità nella stessa voce, senza duplicare la pagina per pubblico.
* Restare statica: nessun backend nuovo, nessuna chiamata a un LLM a runtime.
* Coprire le stesse quattro lingue del sito (IT, EN, ZH, TW), compreso il testo delle trace.
* Riusare ciò che il sito ha già: scheletro delle pagine interne, voci `.item` di `progetti.html`, token di `portfolio-redesign.css`, sistema `data-i18n`, finestra contatti, test esistenti.
* Emettere due eventi client-side (apertura demo, clic su contatti), pronti per un collegamento futuro alla dashboard di `admin.html`.

## Non-Goals

* Nessuna esecuzione di codice o chiamata a un LLM a runtime.
* Nessuna autenticazione o area utente.
* Nessun contenuto riservato InfoCamere: i 3 casi usano un dataset sintetico.
* Non modifica i casi studio esistenti.
* Non collega gli eventi alla dashboard: oggi `/api/analytics/collect` registra solo le visualizzazioni di pagina (`path`, `ref`, `src`), e estenderlo è un lavoro separato.
* Nessun overlay o modale per il dettaglio: si apre inline nella voce.
* Il contenuto tecnico non è duplicato a mano nell'HTML per ogni lingua.

## Open Questions

Valgono per tutti e tre i file di trace (`data/agents/*.json`): finché non sono risolte, i file non esistono in produzione.

* **Q1. Scenari delle trace.** I casi d'uso sono fissati; lo scenario dentro ciascuno (quale ticket, quale documento, quale workflow) va scritto in fase di autoring.
* **Q2. Strumento per registrare le trace.** Da decidere (script Python con un framework agentico, oppure chiamate dirette una tantum a un'API LLM). È una scelta di produzione dei dati, non di rendering. Token e latenze nel JSON devono venire dalla registrazione reale (BRAND.md: "Non inventare metriche").
* **Q3. Traduzione delle trace in ZH e TW.** Le trace vengono registrate in una lingua; le versioni nelle altre lingue sono traduzioni dello stesso run. Va dichiarato nella pagina che il testo è tradotto, e va deciso chi rivede ZH e TW.

## Critical User Journeys (CUJs)

### CUJ 1: Lettore non tecnico

* **Given:** un visitatore apre `agenti.html` dal menu.
* **When:** preme il pulsante di una demo.
* **Then:** vede il livello descrittivo: cosa fa l'agente e con quale risultato, in linguaggio semplice. Un controllo visibile porta al livello tecnico, ma non serve per capire la demo.

### CUJ 2: Lettore tecnico

* **Given:** un visitatore apre una demo e passa al livello tecnico.
* **When:** avanza tra i passi con i pulsanti o con le frecce.
* **Then:** vede in ordine input, chiamate agli strumenti, output finale e metriche (token, latenza) della trace registrata, nella lingua attiva del sito. L'unica richiesta di rete è il JSON della demo, dallo stesso dominio.

### CUJ 3: Tastiera e `prefers-reduced-motion`

* **Given:** il visitatore naviga solo da tastiera, oppure ha attivo `prefers-reduced-motion: reduce`.
* **When:** apre una demo, cambia livello, avanza tra i passi, chiude.
* **Then:** tutto funziona con Tab, Invio, Spazio, frecce ed Esc; con movimento ridotto restano solo i cambi di opacità.

### CUJ 4: Cambio lingua con una demo aperta

* **Given:** una demo è aperta al livello tecnico.
* **When:** il visitatore cambia lingua dal selettore.
* **Then:** testo descrittivo e passo corrente vengono mostrati nella nuova lingua, sullo stesso passo.

## Proposed Architecture

### Come funziona oggi il sito (verificato sul repository)

* Una pagina HTML per URL, nella cartella principale. Il testo è in italiano nell'HTML e viene sostituito lato client: `script.js` contiene i dizionari `it` ed `en`, `i18n-zh.js` e `i18n-tw.js` vengono caricati solo quando servono. Le chiavi si legano con `data-i18n` e `data-i18n-aria`; le pagine interne usano un suffisso dato da `data-page` sul `<body>`.
* La lingua attiva è `document.documentElement.lang`: `it`, `en`, `zh-Hans` o `tw`.
* La build esiste: Vercel esegue `npm test && npm run build`. `build.js` copia in `dist/` tutto ciò che non è nell'elenco `skip`, minifica `script.js` e i CSS principali, e aggiunge `analytics.js` a ogni pagina pubblica.
* La CSP (`vercel.json`) permette script, stili e `connect-src` solo dallo stesso dominio; `tests/site-regression.test.js` boccia script e stili inline.
* I contatti sono una finestra (`<dialog id="contactDialog">`) aperta da `.contact-trigger`, presente su ogni pagina.

### Livello descrittivo: HTML più `data-i18n`

`agenti.html` contiene le 3 voci come markup statico in italiano, con chiavi `data-i18n` (suffisso `_agents`) tradotte nei quattro dizionari. È lo stesso meccanismo del resto del sito: una sola fonte per lingua, nessuna copia della pagina, testo indicizzabile e visibile senza JS (in italiano).

### Livello tecnico: JSON caricato al bisogno

Al primo passaggio al livello tecnico, `agents.js` carica `data/agents/<demo-id>.json?v=<AGENTS_DATA_VERSION>` con `fetch`, legge il blocco della lingua attiva (se manca, usa `en`) e costruisce i passi nel contenitore della voce. Il JSON resta in memoria per il resto della visita. Senza JS il livello tecnico non è disponibile; il pulsante che lo apre è creato da JS, quindi senza JS non compare.

Perché JSON e non dizionari `data-i18n`: le trace sono lunghe e strutturate (tipo di passo, contenuto, metriche); messe nei dizionari peserebbero su ogni pagina del sito, mentre il JSON si scarica solo da chi apre il livello tecnico di quella demo.

### Schema dei dati

Un file per demo (3 file), per esempio `data/agents/triage-ticket.json`:

```text
{
  "it": {
    "stack": ["…"],
    "steps": [
      { "type": "input" | "tool_call" | "output",
        "label": "…",
        "content": "…",
        "metrics": { "tokens": n, "latency_ms": n } }
    ]
  },
  "en": { … }, "zh": { … }, "tw": { … }
}
```

* Le chiavi di lingua sono quelle di `script.js` (`it`, `en`, `zh`, `tw`); `agents.js` converte `zh-Hans` in `zh`.
* `metrics` è facoltativo su `input`, obbligatorio su `tool_call` e `output`.
* Nessun campo per il livello descrittivo: la sua unica fonte è l'HTML con le chiavi `data-i18n`.

### Interazione e stato

Ogni voce ha uno stato in `data-state` sull'`<article>`: `collapsed`, `light`, `technical`, più `loading` ed `error` durante e dopo il caricamento del JSON.

* **Apertura:** un `<button>` nativo con `aria-expanded` e `aria-controls` apre e chiude la voce. Riapertura: torna sempre al livello descrittivo, passo 1.
* **Cambio livello:** un secondo `<button>` dentro la voce aperta ("Vedi la trace" / "Torna alla descrizione").
* **Passi:** pulsanti "Passo precedente" e "Passo successivo", più `ArrowLeft` e `ArrowRight` quando il focus è dentro la voce. Ai limiti il pulsante corrispondente diventa `disabled`; se aveva il focus, il focus passa all'altro pulsante. Nessun giro dall'ultimo al primo passo.
* **Annuncio:** una regione con `role="status"` e `aria-live="polite"` dentro la voce annuncia "Passo 2 di 6" e il titolo del passo.
* **Esc:** dal livello tecnico torna al descrittivo; dal descrittivo chiude la voce. In entrambi i casi il focus torna al pulsante che ha aperto il livello appena lasciato.
* **Clic ripetuti:** mentre lo stato è `loading` i clic sul pulsante del livello tecnico vengono ignorati.
* **Cambio lingua:** a fine `applyLang()` `script.js` emette `document.dispatchEvent(new CustomEvent("nf:langchange", { detail: { lang } }))`; `agents.js` lo ascolta e ridisegna il passo corrente della voce aperta.
* **Inserimento nel DOM:** solo `createElement` e `textContent`, mai `innerHTML` con dati del JSON.

### Errori di caricamento

Se il `fetch` fallisce (rete, 404, JSON non valido, lingua e `en` entrambe assenti), la voce passa a `error` e mostra, nella regione `role="status"`, un messaggio tradotto ("La trace non si è caricata.") con un pulsante "Riprova". Il livello descrittivo resta leggibile.

### Movimento

* Apertura della voce e cambio livello: `opacity` da 0 a 1 e `transform: translateY(4px)` a 0, 200ms in entrata e 150ms in uscita, con la curva `--ease` del sito. Niente `max-height`.
* Cambio di passo: nessuna animazione (azione ripetuta molte volte).
* Pulsanti: `:active { transform: scale(.97) }`; stili `:hover` dentro `@media (hover:hover) and (pointer:fine)`.
* `prefers-reduced-motion: reduce`: resta solo l'opacità.

### Eventi

Due eventi, con un solo nome per non legare la pagina a un'API che non esiste ancora:

```text
document.dispatchEvent(new CustomEvent("nf:event", {
  detail: { name: "agents_open" | "agents_contact", demoId, lang }
}))
```

Nessuno li ascolta oggi. Altri eventi (cambio livello, avanzamento dei passi) si aggiungono quando si progetta l'estensione di `/api/analytics/collect`.

### Composizione della pagina

* Scheletro delle pagine interne (`<body class="inner" data-page="agents">`, barra, menu, finestra contatti, `colophon`), copiato da `progetti.html`.
* Titolo di pagina in Bodoni Moda, arancione, come le altre pagine. Proposta: "Agenti al lavoro" / "Agents at work" (da confermare).
* Una frase introduttiva che dichiara lo stato: esplorazione su dati sintetici, trace registrate e non eseguite dal vivo.
* Le 3 demo come voci `.item` in colonna, `<h2>` per il titolo della voce, senza icone. Le voci differiscono per contenuto, non per decorazione.
* In fondo un blocco `.page-cta` con il pulsante che apre la finestra contatti (come in `progetti.html`).

```text
agenti.html (lingua attiva)
  ├─ titolo, frase introduttiva
  ├─ voce triage-ticket   [button] → livello descrittivo (HTML + data-i18n)
  │                                 → [button] livello tecnico
  │                                       └─ fetch data/agents/triage-ticket.json?v=N
  │                                          → passi costruiti con textContent
  ├─ voce doc-summary         …
  ├─ voce workflow-automation …
  └─ .page-cta → finestra contatti   (nf:event agents_contact)
```

## Alternatives Considered

### Alternativa A: demo su progetti reali InfoCamere

* **Pros:** prova diretta di lavoro in produzione; nessun dataset da creare.
* **Cons:** espone dettagli di un ambiente soggetto a riservatezza; richiede approvazioni fuori dallo scope di un sito personale.
* **Reason for Rejection:** i vincoli di riservatezza rendono non pubblicabili i dettagli dei progetti reali.

### Alternativa B: agente eseguibile dal vivo

* **Pros:** il visitatore interagisce con un agente vero.
* **Cons:** richiede backend dedicato, limiti contro gli abusi e costi di inferenza per ogni visitatore.
* **Reason for Rejection:** in conflitto con il vincolo "nessuna chiamata a un LLM a runtime".

### Alternativa C: diagramma animato astratto

* **Pros:** più semplice da produrre.
* **Cons:** non mostra un comportamento reale: accanto ai casi studio sembrerebbe un'illustrazione di marketing, e contraddice BRAND.md ("Non inventare metriche, impatti o caratteristiche tecniche").
* **Reason for Rejection:** la trace registrata è l'unica opzione statica che mostra un comportamento effettivamente avvenuto.

### Alternativa D: trace scritte direttamente nell'HTML

* **Pros:** nessun `fetch`, tutto indicizzabile.
* **Cons:** l'HTML del sito esiste in una sola lingua; le trace in ZH, TW ed EN dovrebbero comunque passare dai dizionari, che vengono caricati su ogni pagina.
* **Reason for Rejection:** il JSON per demo pesa solo su chi apre il livello tecnico.

### Alternativa E: pagina interamente generata da JS

* **Pros:** una sola fonte anche per il livello descrittivo.
* **Cons:** pagina vuota senza JS; un round-trip in più prima di mostrare testo; diverge dal resto del sito.
* **Reason for Rejection:** il livello descrittivo segue lo stesso schema `data-i18n` delle altre pagine.

### Alternativa F: funzione globale `window.trackEvent`

* **Pros:** chiamata diretta.
* **Cons:** lega la pagina a una funzione che non esiste e di cui non si conosce la firma.
* **Reason for Rejection:** un `CustomEvent` non richiede nulla a chi lo emette.

### Alternativa G: sezione in `progetti.html` o nella home

* **Pros:** nessuna pagina nuova da registrare.
* **Cons:** la home oggi è solo la hero; `progetti.html` è già lunga e ha un suo invito finale.
* **Reason for Rejection:** scelta dell'autore: una pagina dedicata, raggiungibile dal menu.

## Non-Functional Requirements

* **Performance:** nessuna richiesta al caricamento della pagina oltre a quelle delle altre pagine interne; il JSON si scarica solo al primo accesso al livello tecnico di quella demo.
* **Security:** nessun `innerHTML` con dati del JSON; nessuna origine esterna (la CSP esistente non va toccata); nessuno script o stile inline.
* **Accessibilità:** pulsanti nativi con `aria-expanded`/`aria-controls`, regione `aria-live` per i passi, tastiera completa, focus visibile, bersagli ≥44px su mobile, contrasto secondo CLAUDE.md.
* **i18n:** tutte le chiavi `_agents` presenti nei quattro dizionari; tutti i JSON con le quattro lingue.
* **Rollout:** pagina additiva; l'unica modifica a codice esistente è l'evento `nf:langchange` in `script.js` e la voce di menu nelle pagine.
* **Rollback:** rimuovere `agenti.html`, `agents.js`, `data/agents/`, gli stili in `pages.css`, la voce di menu e le registrazioni (sitemap, ricerca, test). Le versioni dei JSON in cache non hanno effetto senza la pagina.
* **Privacy:** solo dati sintetici; gli eventi non contengono dati personali.

## Risks & Mitigations

| Rischio | Effetto | Mitigazione |
|---|---|---|
| `fetch` fallito (rete, 404) | livello tecnico vuoto | stato `error` con messaggio e "Riprova"; livello descrittivo intatto |
| JSON non valido o lingua mancante | eccezione JS | `try/catch` sul parsing; fallback a `en`; altrimenti stato `error`. Test che valida i 3 file |
| Iniezione di contenuto | XSS da dati del JSON | solo `textContent`; la CSP blocca script esterni e inline |
| JSON vecchio in cache dopo un aggiornamento | trace non allineata al testo | `?v=AGENTS_DATA_VERSION` in `agents.js`, da incrementare a ogni modifica dei dati |
| Traduzioni ZH/TW non riviste | errori nel testo delle trace | dichiarare nella pagina che il testo è tradotto; revisione prima della pubblicazione (Q3) |
| Metriche non reali | perdita di credibilità | token e latenze solo dalla registrazione (Q2) |
| `docs/` pubblicata per errore | documenti interni online | `"docs"` aggiunto a `skip` in `build.js` |

## Detailed Implementation Plan

Tre fasi; ognuna lascia il sito in uno stato pubblicabile e con `npm test` verde.

### Fase 1: pagina statica (pubblicabile subito)

1. **`agenti.html` (Create):** scheletro da `progetti.html`, `data-page="agents"`, titolo, frase introduttiva, 3 `<article class="item" data-demo-id="…" data-state="collapsed">` con titolo, descrizione e pulsante di apertura, blocco `.page-cta`. Meta description, `og:image`, canonical come le altre pagine.
2. **`script.js` (Modify):** chiavi `*_agents` nei dizionari `it` ed `en`; voce di menu `nav_agents`.
3. **`i18n-zh.js`, `i18n-tw.js` (Modify):** stesse chiavi.
4. **Menu (Modify):** voce `agenti.html` nel `<nav class="site-menu">` di `index.html`, `progetti.html`, `ai-in-locale.html`, `rag-aziendale.html`, `iniziative.html`, `percorso.html`, `fuori-dal-lavoro.html`, `privacy.html`, `404.html`.
5. **`sitemap.xml`, `search.js` (Modify):** aggiungere `agenti.html`.
6. **`tests/site-regression.test.js`, `tests/browser.spec.cjs` (Modify):** aggiungere `agenti.html` agli elenchi `pages`.
7. **`og-agenti.jpg` (Create):** immagine di anteprima come le altre `og-*.jpg`.

Punto stabile: la pagina mostra le 3 demo al livello descrittivo; nessun JS nuovo.

### Fase 2: dati

8. **`data/agents/triage-ticket.json`, `data/agents/doc-summary.json`, `data/agents/workflow-automation.json` (Create):** schema sopra, contenuto da Q1–Q3. Bloccata finché le trace non esistono.
9. **`tests/site-regression.test.js` (Modify):** per ogni file, JSON valido, quattro lingue, `steps` non vuoto, `type` ammesso, `metrics` presente dove obbligatorio.

Punto stabile: dati validati dai test, non ancora usati dalla pagina.

### Fase 3: interazione

10. **`agents.js` (Create)**, caricato solo da `agenti.html` con `defer`. Responsabilità:
    * apertura e chiusura delle voci (`aria-expanded`, `data-state`);
    * creazione del pulsante del livello tecnico;
    * caricamento del JSON con `?v=`, cache in memoria, stati `loading` ed `error`;
    * costruzione di stack e passi con `textContent`;
    * navigazione tra i passi (pulsanti, frecce, limiti disabilitati);
    * annuncio del passo nella regione `aria-live`;
    * Esc e ritorno del focus;
    * ascolto di `nf:langchange`;
    * emissione di `nf:event` (`agents_open`, `agents_contact`).
11. **`script.js` (Modify):** emettere `nf:langchange` a fine `applyLang()`; chiavi per pulsanti, messaggi di errore e annuncio dei passi.
12. **`pages.css` (Modify):** stili della voce aperta, dei passi e dei pulsanti con i token esistenti (`--ink`, `--ink-soft`, `--line`, `--accent`, `--dur`, `--ease`); blocco `prefers-reduced-motion`.
13. **`build.js` (Modify):** minificare `agents.js` con `terser`, come `script.js`.

## Verification Plan

* `npm test` (`tests/site-regression.test.js`) e i test Playwright (`npx playwright test --trace off`, server `tests/serve.cjs` su 127.0.0.1:4173) verdi a ogni fase.
* Casi Playwright da aggiungere in `tests/browser.spec.cjs`:
  * clic sul pulsante di una voce → `aria-expanded="true"`, livello descrittivo visibile;
  * livello tecnico → passo 1 di N, "Passo precedente" disabilitato;
  * `ArrowRight` fino all'ultimo passo → "Passo successivo" disabilitato, il focus resta su un pulsante attivo;
  * Esc dal livello tecnico → livello descrittivo, focus sul pulsante della trace; secondo Esc → voce chiusa, focus sul pulsante della voce;
  * JSON intercettato con 404 → messaggio di errore e "Riprova"; "Riprova" con risposta valida → passo 1;
  * cambio lingua a EN con la trace aperta → stesso passo, testo in inglese;
  * `prefers-reduced-motion: reduce` → nessun `transform` sulle transizioni, interazione invariata;
  * viewport 390px → nessuno scorrimento orizzontale, pulsanti ≥44px.
* Controllo manuale con uno screen reader dell'annuncio dei passi.
* Prima di pubblicare la fase 2: revisione umana dei testi ZH e TW (Q3).

## Additional Resources

* `BRAND.md`: posizionamento, tono, palette e tipografia (Bodoni Moda per i titoli, sans di sistema per il testo).
* `CLAUDE.md`: regole di layout, movimento e copy del repository.
* `concepts_brief.md`: brainstorming EGM precedente a questo documento (non nel repository).

## Future Improvements

* Collegare `nf:event` a `/api/analytics/collect` estendendo l'endpoint agli eventi.
* Uno script separato per registrare le trace sul dataset sintetico (Q2).

Drafted with EGM
