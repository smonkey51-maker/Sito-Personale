# Brand: Nicolò Forcolin

Riferimento interno, non pubblicato. Raccoglie posizionamento, tono e sistema visivo del sito nforcolin.eu.
Tutto ciò che è scritto qui corrisponde a scelte già presenti nel sito.

## 1. Posizionamento

**Pubblico:** tutti, non più solo il top management (cambio di target di novembre 2026). Il sito lo legge anche chi non è del settore, quindi ogni termine tecnico va usato con precisione e spiegato solo quando serve.

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

00. **Linguaggio da chi compra e misura.** Il sito parla come media planner e direttori marketing: obiettivo, cosa ho fatto, risultati, tempi, lancio, adozione. Gli stessi fatti di prima, senza gergo da sistemista ("criticità" diventa "problema", "rilascio" diventa "lancio"). I termini tecnici restano dove servono, con il loro equivalente di business accanto. I dati sono solo quelli già approvati.
0. **Leggero quando serve.** Il tono scherzoso è ammesso (per esempio "Tech Lover dal 1992"), purché i fatti restino precisi.
1. **Fattuale.** Nessun superlativo ("rivoluzionario", "innovativo", "cutting-edge"). Un esito non ideale si dichiara.
2. **Stato esplicito.** Ogni risultato è marcato come prodotto, in corso o esplorazione. Non lasciare l'etichetta ambigua.
3. **Prima persona attiva.** "Ho realizzato", "ho seguito". Niente passivi del tipo "è stato fatto".
4. **Termini tecnici esatti.** "RAG", "fine-tuning", "Incident & Problem Management" restano così anche in italiano.
5. **Specificità invece di enfasi.** Un dettaglio preciso colpisce più di un aggettivo. Le sorprese devono venire dal contenuto, non dalla forma delle frasi.

**Da evitare:** "leadership", "innovativo", "rivoluzionario", "disruptive", "sinergia", "leverage", "empowerment"; punti esclamativi; CTA aggressive; costruzioni "non solo X, ma Y"; terza persona.

**Per i testi nuovi** (sito, social, email): prima di pubblicare, controllare che non ci siano aggettivi scelti per impressionare, che ogni risultato sia etichettato, e che le frasi siano in prima persona attiva.

## 3. Sistema visivo

Il sito usa una direzione scura e sobria, con un solo accento (Warm Sand nello scuro, Crimson nel chiaro) e priorità ai progetti concreti. Gli schemi nei casi studio sono concettuali, non rappresentazioni dell'infrastruttura reale. Il ritratto in home è a colori, scontornato sul nero del sito; tono e luminosità sono già nell'immagine, senza filtri CSS. Evitare effetti decorativi gratuiti e slogan.

Palette valutata e scartata: sfondo "Gunmetal Night" (`#161A1F`), testi "Fog Silver" (`#D9DEE3`), accento "Molten Orange" (`#FF5A1F`). Più fredda e più tecnica, ma con meno impatto sul ritratto; resta il nero attuale.

### Palette

Due temi, scelti in automatico dalle preferenze del browser (`prefers-color-scheme`), senza interruttore. Palette in uso dal 16 novembre 2026: Obsidian Black `#161616`, Soft Pearl `#F2F1ED`, Warm Sand `#B38F6F`, Crimson Depth `#710014`, più un colore vivo per i pulsanti. Prima si usava il nero `#0E0E0F` con arancione `#FF4A11` (scuro) e crema `#FDF5EA` con arancione `#E85A0C` (chiaro): per tornare indietro c'è il ramo `backup/palette-arancione`.

**Tema scuro**

| Token | Valore | Uso |
|---|---|---|
| `--bg`, `--bg-2` | `#161616` | Sfondo di tutte le pagine, barra in alto, fondo del ritratto; `theme-color` del browser |
| `--ink` | `#F2F1ED` | Testo principale (16:1) |
| `--ink-soft` | `#BDB9B2` | Testo secondario (9,3:1) |
| `--line` | `#2B2B2B` | Separazioni |
| `--accent` | `#B38F6F` | Warm Sand: titoli, firma, sottolineature dei link (6,1:1) |
| `--accent-hover` | `#C9A88B` | Warm Sand al passaggio |
| `--cta` | `#FF5E36` | Fondo dei pulsanti, corallo (testo `--on-cta` `#161616`, 5,95:1) |
| `--cta-hover` | `#FF7A57` | Pulsante al passaggio |

**Tema chiaro**

| Token | Valore | Uso |
|---|---|---|
| `--bg`, `--bg-2` | `#F2F1ED` | Sfondo di tutte le pagine; `theme-color` del browser |
| `--ink` | `#161616` | Testo principale (16:1) |
| `--ink-soft` | `#4F4A45` | Testo secondario (7,8:1) |
| `--line` | `#D9CFC4` | Separazioni |
| `--accent` | `#710014` | Crimson Depth: titoli, firma, sottolineature (10,9:1) |
| `--accent-hover` | `#8F1A2C` | Crimson al passaggio |
| `--cta` | `#D61C22` | Fondo dei pulsanti, vermiglio (testo `--on-cta` `#F2F1ED`, 4,6:1) |
| `--cta-hover` | `#BF181E` | Pulsante al passaggio |

Anche il diagramma RAG ha una palette chiara (`figure.css`) e il profilo di Padova in fondo alle pagine interne ha una versione a tratto scuro (`padova-skyline-light.webp`). La pagina admin resta scura con i colori precedenti. Nel tema chiaro il ritratto in home è a colori (`photo-color.webp`, servito con `<picture>` e `prefers-color-scheme`); nel tema scuro resta in bianco e nero (`photo.webp`).

### Tipografia e comportamento

- Tre famiglie, scelta voluta da Nicolò il 16 novembre 2026: Bodoni Moda (fonts/bodoni-moda-latin-opsz.woff2, alternativa web a Didot, peso 500) per titoli di pagina, di sezione e delle voci; Montserrat (fonts/montserrat-latin-wght.woff2, pesi 400 e 500, con fallback di sistema) per tutto il resto; Destiny Signature solo per la firma e il saluto in home. Roboto, usato in precedenza, è stato rimosso. Provati e scartati: Inter, Bodoni Moda sul testo corrente (poco leggibile), Forcolin Hand (font ricavato dalla scrittura a pennarello) e la sua unione con Destiny Signature.
- Cinque dimensioni: 16px (menu, etichette, date, note), 18px (testo), 22px (titoli delle voci), 24px (sottotitolo di pagina), 40px (titoli di sezione); il titolo di pagina scala fino a 76px.
- Destiny Signature (licenza demo, uso non commerciale) solo come firma: "NForcolin" nella barra in alto (colore dell'accento). Il saluto della home conserva la firma originale: "Ciao, sono Nicolò Forcolin", in Destiny Signature e arancione.
- Home (mockup approvato il 14 novembre 2026): pagina continua nella colonna editoriale. Hero compatta con "Ciao, sono Nicolò Forcolin" su due righe nel carattere della firma, nel colore dell'accento, centrata in verticale rispetto al ritratto (su mobile testo centrato), introduzione esistente e ritratto originale a colori. Su desktop la foto sta a destra, su mobile la presentazione parte subito, con il ritratto in giacca e dolcevita (photo.webp, lo stesso su tutti gli schermi) sopra il saluto, e la barra in alto resta sempre visibile. I tre link sotto la presentazione sono rimossi: le pagine restano accessibili dalle sezioni, i contatti da Collaboriamo. Niente barra fissa in basso. Su mobile la presentazione occupa almeno la prima schermata: numeri e sezioni seguono con lo scorrimento. Seguono i numeri 35+, 14 e 1 CEO affiancato (DABO); il contributo a Sprint Forward in Golden Boots fa parte della stessa voce del CEO. Poi Progetti (RAG in produzione e AI in locale come sperimentazione), Cosa faccio, Per chi, Il mio percorso e Collaboriamo. Riferimenti testuali a InfoCamere, DABO, IdeaGrip e Assicurazioni Generali, senza loghi. L’email, il pulsante copia, il Q&A (un solo comando apre tutte le domande e risposte), i social e le tre lingue restano funzionanti. Nessuna immagine o metrica inventata.
- I titoli di sezione della home e il titolo Q&A sono in Bodoni Moda (40px), nel colore dell'accento. Il tratto a mano sotto i titoli è stato provato e tolto.
- Invito a fine pagina: "Per parlare di un progetto" e un bottone "Scrivimi" (corallo nello scuro, vermiglio nel chiaro, angoli da 8px) che porta all'email nella sezione "Collaboriamo" della home. Un solo bottone per pagina.
- Link nel testo: sempre testo del colore principale con sottolineatura sottile nel colore dell'accento; niente frecce. Le pagine RAG e AI in locale hanno un glossario ("Parole tecniche") prima dell'invito finale. Porta all'email nella sezione "Collaboriamo" della home. La finestra contatti non esiste più e il numero di telefono non è più sul sito; il piè di pagina riporta "Sito personale. Le attività descritte sono presentate a titolo personale." Porta all'email nella sezione "Collaboriamo" della home. Non esiste più la finestra contatti (e il numero di telefono non è più sul sito); il piè di pagina riporta "Sito personale. Le attività descritte sono presentate a titolo personale."
- Risultati dei progetti (16 novembre 2026): ogni risultato dichiara come è stato misurato e quali dati non sono pubblicabili. RAG: feedback quantitativi interni, 5 mesi, costo evitato di un modello su misura (nessuna cifra pubblicata). AI in locale: circa 100 domande di prova, circa 80 risposte corrette, con fine-tuning e quantizzazione su Google Colab e uso in locale su portatile aziendale. Le cifre sono arrotondate come le ha fornite Nicolò.
- Pagina Hobby: musica, audiofilia, fotografia, orologi, libri e animali, con i link ai profili personali; testi solo con ciò che l'autore ha detto, nessun anno o dato non fornito.
- Prima i casi studio RAG e Local AI, poi bio e percorso.
- Navigazione unica, senza indici duplicati: le lingue stanno affiancate in barra e non ci sono menu a tendina né tre lineette; la ricerca nel sito è stata tolta.
- I dettagli espandibili devono funzionare anche da tastiera.
- Layout fluido per desktop e mobile, con rispetto per `prefers-reduced-motion`.
- Non inventare metriche, impatti o caratteristiche tecniche.

## 4. Profili social

LinkedIn va allineato al positioning statement v2.

- **Copertina (1584×396):** sfondo nero del sito, "Nicolò Forcolin" nel carattere della firma in arancione, sotto la riga "Google Cloud Innovator • Porto l'AI nel lavoro quotidiano" con nome e riga della stessa lunghezza, serigrafia di Padova a destra (sfuma verso sinistra per non attraversare il testo). Nessun riferimento a InfoCamere. Il pallino centrale è ammesso solo qui: sul sito le stringhe unite da puntini centrali restano vietate.
- **Foto profilo:** resta quella attuale.
- Non ci sono altri profili pubblici attivi da allineare. Instagram e Spotify sono profili personali e hanno un link nella pagina Hobby.
- Colonna: contenuto largo circa 990 px (contenitore da 1100 px con margini da 56), come nel sito di Otto Climan. Sopra i 1920 px il sito non si ingrandisce più, così lo zoom del browser funziona. "Cosa faccio" è su due colonne.
- Barra in alto: il nome è scritto per intero da 701 px in su ("Nicolò Forcolin") e come "NForcolin" sotto; le tre lingue stanno sempre affiancate (per esteso da 901 px in su: "Italiano", "English", "中文"; sotto, le sigle IT, EN, 中文). Non ci sono voci né menu a tre lineette su nessuna larghezza: alle pagine si arriva dai link della home.

### Schermata d'ingresso su mobile (tolta, recuperabile)

Fino al 15 novembre 2026 la home su mobile si apriva con una prima schermata a tutto schermo: ritratto in giacca e dolcevita su nero (photo-entry-mobile.webp, 1428×2560), il nome in arancione nel carattere della firma, riga e pallino come segno d'ingresso; la barra compariva solo entrando, con un tocco. È stata tolta dal sito e dal codice. Per rimetterla: il commit `79830b7` (ultimo con la schermata) contiene i file; si recupera il ritratto con `git checkout 79830b7 -- photo-entry-mobile.webp` e si riprendono dalla stessa versione la sezione `.m-entry` di index.html, le regole `.m-entry*`, `.entry-*` e `body.at-entry` di home-editorial.css, il blocco con l'IntersectionObserver in script.js e le chiavi `scroll_btn` ed `entry_label` dei dizionari. In alternativa si annulla la PR che l'ha tolta con `git revert -m 1` sul suo commit di merge.
