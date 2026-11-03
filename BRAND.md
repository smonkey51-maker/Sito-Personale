# Brand: Nicolò Forcolin

Riferimento interno, non pubblicato. Raccoglie posizionamento, tono e sistema visivo del sito nforcolin.eu.
Tutto ciò che è scritto qui corrisponde a scelte già presenti nel sito.

## 1. Posizionamento

**Pubblico principale:** top management. Il sito lo legge anche chi non è del settore, quindi ogni termine tecnico va usato con precisione e spiegato solo quando serve.

**Obiettivo:** lasciare un lettore che vuole saperne di più e decide di contattare l'autore. Non sembrare affidabili in astratto.

**Positioning statement (v1):**

> Per chi deve decidere se un professionista IT sa portare l'AI dalla demo alla produzione: il lavoro al Service Desk di InfoCamere e i progetti AI in produzione sono la prova concreta.

**Tre differenziatori:**

1. **Affidabilità infrastrutturale applicata all'AI.** Prova: un sistema RAG in produzione, non una demo.
2. **Ascolto trasversale.** Prova: confronto continuo con altri uffici sull'adozione dell'AI (sezione "AI in produzione e adozione"). Il lavoro non si ferma al rilascio.
3. **Precisione anche quando scomoda.** Prova: il progetto DABO è raccontato con l'esito reale, incluso il mancato accesso alla finale.

## 2. Tono

1. **Fattuale.** Nessun superlativo ("rivoluzionario", "innovativo", "cutting-edge"). Un esito non ideale si dichiara.
2. **Stato esplicito.** Ogni risultato è marcato come prodotto, in corso o esplorazione. Non lasciare l'etichetta ambigua.
3. **Prima persona attiva.** "Ho realizzato", "ho seguito". Niente passivi del tipo "è stato fatto".
4. **Termini tecnici esatti.** "RAG", "fine-tuning", "Incident & Problem Management" restano così anche in italiano.
5. **Specificità invece di enfasi.** Un dettaglio preciso colpisce più di un aggettivo. Le sorprese devono venire dal contenuto, non dalla forma delle frasi.

**Da evitare:** "leadership", "innovativo", "rivoluzionario", "disruptive", "sinergia", "leverage", "empowerment"; punti esclamativi; CTA aggressive; costruzioni "non solo X, ma Y"; terza persona.

**Per i testi nuovi** (sito, social, email): prima di pubblicare, controllare che non ci siano aggettivi scelti per impressionare, che ogni risultato sia etichettato, e che le frasi siano in prima persona attiva.

## 3. Sistema visivo

Il sito usa una direzione scura e sobria, con un solo accento arancione e priorità ai progetti concreti. Gli schemi nei casi studio sono concettuali, non rappresentazioni dell'infrastruttura reale. Il ritratto in home è a colori, scontornato sul nero del sito; tono e luminosità sono già nell'immagine, senza filtri CSS. Evitare effetti decorativi gratuiti e slogan.

### Palette

Un solo tema, scuro: il sito non cambia colori in base alle preferenze del sistema.

| Token | Valore | Uso |
|---|---|---|
| `--bg` | `#0D0D0E` | Sfondo di tutte le pagine, barra in alto, fondo del ritratto |
| `--bg-2` | `#0D0D0E` | Superficie secondaria (uguale allo sfondo) |
| `--ink` | `#F5F1EC` | Testo principale, bianco caldo |
| `--ink-soft` | `#C3BEC7` | Testo secondario |
| `--line` | `#262628` | Separazioni |
| `--accent` | `#FF4A11` | Arancione: firma, link, date e stati, segno d'ingresso su mobile |
| `--accent-hover` | `#FF6B3D` | Arancione al passaggio e alla pressione |

Altri valori fissi: `#18181A` per lo sfondo della striscia dei progetti al passaggio; `#0D0D0E` anche come `theme-color` delle pagine e nel manifest dell'app.

### Tipografia e comportamento

- Due famiglie: Bodoni Moda per tutti i titoli (pagina, sezione, voci), sans di sistema (Segoe UI / fallback) per testo, menu ed etichette. Non usare Inter.
- Cinque dimensioni: 15px (menu, etichette, date, note), 18px (testo), 22px (titoli delle voci), 24px (sottotitolo di pagina), 40px (titoli di sezione); il titolo di pagina scala fino a 76px.
- Destiny Signature (licenza demo, uso non commerciale) solo come firma: "NForcolin" nella barra in alto (bianco), il saluto in home e il nome sulla schermata d'ingresso su mobile (arancione). Gli altri titoli restano in Bodoni Moda.
- Arancione su un segno grafico: eccezione voluta solo per il segno d'ingresso su mobile (linea corta con punto).
- Prima i casi studio RAG e Local AI, poi bio e percorso.
- Navigazione unica, senza indici duplicati.
- I dettagli espandibili devono funzionare anche da tastiera.
- Layout fluido per desktop e mobile, con rispetto per `prefers-reduced-motion`.
- Non inventare metriche, impatti o caratteristiche tecniche.

## 4. Profili social

LinkedIn è allineato al positioning statement v1. Non ci sono altri profili pubblici attivi da allineare.
