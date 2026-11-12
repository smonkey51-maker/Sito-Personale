# Brand: Nicolò Forcolin

Riferimento interno, non pubblicato. Raccoglie posizionamento, tono e sistema visivo del sito nforcolin.eu.
Tutto ciò che è scritto qui corrisponde a scelte già presenti nel sito.

## 1. Posizionamento

**Pubblico principale:** top management. Il sito lo legge anche chi non è del settore, quindi ogni termine tecnico va usato con precisione e spiegato solo quando serve.

**Obiettivo:** lasciare un lettore che vuole saperne di più e decide di contattare l'autore. Non sembrare affidabili in astratto.

**Chi è il protagonista:** l'autore. Il sito racconta Nicolò, il suo saper fare, i suoi risultati e i suoi obiettivi. InfoCamere è il luogo dove le cose sono accadute e la garanzia che lo certifica; non è la sua personalità e non è lui.

**Positioning statement (v2):**

> Per chi deve decidere se un professionista IT sa portare l'AI dalla demo alla produzione: i progetti AI portati in produzione sono la prova concreta, e l'azienda dove sono avvenuti ne è la garanzia.

La v1 metteva al centro "il lavoro al Service Desk di InfoCamere"; è superata.

**Dove InfoCamere compare e dove no:**

- Compare dove è un dato, un ruolo o un progetto: ruoli nel Percorso ("Service Desk, InfoCamere", "Referente operativo del RAG Aziendale, InfoCamere"), pagine dei progetti (RAG, AI in locale), ruolo di Social Ambassador, dati strutturati (`worksFor`), sezioni "In InfoCamere" e "Fuori da InfoCamere" in Progetti.
- Non compare nel titolo della scheda del browser ("Nicolò Forcolin | AI nel lavoro quotidiano"), nella prima frase della bio ("Porto l'AI nel lavoro quotidiano."), nelle introduzioni e descrizioni di Percorso e Progetti, nella descrizione del manifest, nella copertina LinkedIn.
- Nelle frasi l'ordine è prima l'autore, poi il luogo: "In InfoCamere sono partito dalle esigenze operative", non "InfoCamere ha…".
- Non usare "AI generativa" come titolo.

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

Palette valutata e scartata: sfondo "Gunmetal Night" (`#161A1F`), testi "Fog Silver" (`#D9DEE3`), accento "Molten Orange" (`#FF5A1F`). Più fredda e più tecnica, ma con meno impatto sul ritratto; resta il nero attuale.

### Palette

Un solo tema, scuro: il sito non cambia colori in base alle preferenze del sistema.

| Token | Valore | Uso |
|---|---|---|
| `--bg` | `#0D0D0E` | Sfondo di tutte le pagine, barra in alto, fondo del ritratto |
| `--bg-2` | `#0D0D0E` | Superficie secondaria (uguale allo sfondo) |
| `--ink` | `#F5F1EC` | Testo principale, bianco caldo |
| `--ink-soft` | `#D2CED6` | Testo secondario |
| `--line` | `#262628` | Separazioni |
| `--accent` | `#FF4A11` | Arancione: titoli di pagina e di sezione, firma, link, date e stati, segno d'ingresso su mobile |
| `--accent-hover` | `#FF6B3D` | Arancione al passaggio e alla pressione |

Altri valori fissi: `#18181A` per lo sfondo della striscia dei progetti al passaggio e dei pannelli che si aprono dalla barra (menu, lingue, ricerca), con bordo `#262628`, angoli da 16px (righe e campo da 12px) e voce evidenziata `#242427`; `#0D0D0E` anche come `theme-color` delle pagine e nel manifest dell'app.

### Tipografia e comportamento

- Due famiglie: Bodoni Moda per tutti i titoli (pagina, sezione, voci), sans di sistema (Segoe UI / fallback) per testo, menu ed etichette. Non usare Inter.
- Cinque dimensioni: 16px (menu, etichette, date, note), 18px (testo), 22px (titoli delle voci), 24px (sottotitolo di pagina), 40px (titoli di sezione); il titolo di pagina scala fino a 76px.
- Destiny Signature (licenza demo, uso non commerciale) solo come firma: "NForcolin" nella barra in alto (bianco), il saluto in home e il nome sulla schermata d'ingresso su mobile (arancione). Gli altri titoli restano in Bodoni Moda.
- Arancione su un segno grafico: eccezione voluta solo per il segno d'ingresso su mobile (linea corta con punto).
- Home: saluto su due righe, "Ciao, sono" al 78% del nome e sopra di esso (entrambi nel carattere della firma, arancione); bio in tre frasi; sotto, una sola riga con Progetti, Per chi e Contattami, solo testo arancione, su ogni larghezza (su mobile centrate nella barra in basso). Niente sezioni aggiuntive: la home resta il più minimale possibile.
- "Contattami" a fine pagina: testo nel carattere dei titoli, chiaro, con sottolineatura arancione; un solo invito per schermata.
- Pagina Hobby: musica, audiofilia, fotografia, orologi, libri e animali, con i link ai profili personali; testi solo con ciò che l'autore ha detto, nessun anno o dato non fornito.
- Prima i casi studio RAG e Local AI, poi bio e percorso.
- Navigazione unica, senza indici duplicati. Lente, lingua (sigla attiva con freccia) e tre lineette sono icone semplici senza riquadro; i pannelli che aprono hanno tutti lo stesso aspetto e le voci dei menu sono centrate.
- I dettagli espandibili devono funzionare anche da tastiera.
- Layout fluido per desktop e mobile, con rispetto per `prefers-reduced-motion`.
- Non inventare metriche, impatti o caratteristiche tecniche.

## 4. Profili social

LinkedIn va allineato al positioning statement v2.

- **Copertina (1584×396):** sfondo nero del sito, "Nicolò Forcolin" nel carattere della firma in arancione, sotto la riga "Google Cloud Innovator • Porto l'AI nel lavoro quotidiano" con nome e riga della stessa lunghezza, serigrafia di Padova a destra (sfuma verso sinistra per non attraversare il testo). Nessun riferimento a InfoCamere. Il pallino centrale è ammesso solo qui: sul sito le stringhe unite da puntini centrali restano vietate.
- **Foto profilo:** resta quella attuale.
- Non ci sono altri profili pubblici attivi da allineare. Instagram e Spotify sono profili personali e hanno un link nella pagina Hobby.
