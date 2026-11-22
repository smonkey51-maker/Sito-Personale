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

- Compare dove è un dato, un ruolo o un progetto: ruoli nel Percorso ("Service Desk, InfoCamere", "Referente del RAG aziendale, InfoCamere"), pagine dei progetti (RAG, AI in locale), ruolo di Social Ambassador, dati strutturati (`worksFor`), sezioni "In InfoCamere" e "Fuori da InfoCamere" in Progetti.
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

Il sito usa una direzione scura e sobria, con un solo accento arancione e priorità ai progetti concreti. Gli schemi nei casi studio sono concettuali, non rappresentazioni dell'infrastruttura reale. Il ritratto in home è a colori, scontornato sul nero del sito; tono e luminosità sono già nell'immagine, senza filtri CSS. Evitare effetti decorativi gratuiti e slogan.

Palette valutata e scartata: sfondo "Gunmetal Night" (`#161A1F`), testi "Fog Silver" (`#D9DEE3`), accento "Molten Orange" (`#FF5A1F`). Più fredda e più tecnica, ma con meno impatto sul ritratto; resta il nero attuale.

### Palette

Un solo tema, scuro: il sito non cambia colori in base alle preferenze del sistema. Il tema chiaro (crema `#FDF5EA` con arancione `#E85A0C`, ritratto a colori, diagramma e profilo di Padova adattati) è stato tolto il 18 novembre 2026 "per ora" e si recupera dal ramo `backup/white-mode`.

| Token | Valore | Uso |
|---|---|---|
| `--bg` | `#0E0E0F` | Sfondo di tutte le pagine, barra in alto, fondo del ritratto (provato Abyss Black `#101820` il 16 novembre 2026 e ripristinato il nero) |
| `--bg-2` | `#0E0E0F` | Superficie secondaria (uguale allo sfondo) |
| `--ink` | `#F5F1EC` | Testo principale, bianco caldo |
| `--ink-soft` | `#D2CED6` | Testo secondario |
| `--line` | `#262628` | Separazioni |
| `--accent` | `#FF4A11` | Arancione: titoli di pagina e di sezione, firma, link, date e stati |
| `--accent-hover` | `#FF6B3D` | Arancione al passaggio e alla pressione |

Altri valori fissi: `#18181A` per lo sfondo della striscia dei progetti al passaggio , con bordo `#262628`, angoli da 16px (righe e campo da 12px) e voce evidenziata `#242427`; `#0E0E0F` anche come `theme-color` delle pagine e nel manifest dell'app.

### Tipografia e comportamento

- Tre famiglie, scelta voluta da Nicolò il 16 novembre 2026: Bodoni Moda (fonts/bodoni-moda-latin-opsz.woff2, alternativa web a Didot, peso 500) per titoli di pagina, di sezione e delle voci; Montserrat (fonts/montserrat-latin-wght.woff2, pesi 400 e 500, con fallback di sistema) per tutto il resto; Destiny Signature solo per la firma. Roboto, usato in precedenza, è stato rimosso. Provati e scartati: Inter, Bodoni Moda sul testo corrente (poco leggibile), Forcolin Hand (font ricavato dalla scrittura a pennarello) e la sua unione con Destiny Signature.
- Cinque dimensioni: 16px (menu, etichette, date, note), 18px (testo), 22px (titoli delle voci), 24px (sottotitolo di pagina), 40px (titoli di sezione); il titolo di pagina scala fino a 76px.
- Destiny Signature (licenza demo, uso non commerciale) solo come firma: "Nicolò Forcolin" per intero nella barra in alto, in arancione, su ogni larghezza (18 novembre 2026). La home non ha più il saluto "Ciao, sono Nicolò Forcolin": la presentazione parte direttamente da "IT per le PA dal 2022, Tech Lover dal 1992." e il nome resta come titolo nascosto per motori di ricerca e screen reader.
- Home (mockup approvato il 14 novembre 2026): pagina continua nella colonna editoriale. Hero compatta con "Ciao, sono Nicolò Forcolin" su due righe nel carattere della firma, arancione, centrata in verticale rispetto al ritratto (su mobile testo centrato), introduzione esistente e ritratto originale a colori. Su desktop la foto sta a destra, su mobile la presentazione parte subito, con il ritratto in giacca e dolcevita (photo.webp, lo stesso su tutti gli schermi) sopra il saluto, e la barra in alto resta sempre visibile. I tre link sotto la presentazione sono rimossi: le pagine restano accessibili dalle sezioni, i contatti da Collaboriamo. Niente barra fissa in basso. Su mobile la presentazione occupa almeno la prima schermata: numeri e sezioni seguono con lo scorrimento. Seguono i numeri 35+, 14 e 1 CEO affiancato (DABO); il contributo a Sprint Forward in Golden Boots fa parte della stessa voce del CEO. Poi Progetti (RAG in produzione e AI in locale come sperimentazione), Cosa faccio, Per chi, Il mio percorso e Collaboriamo. Riferimenti testuali a InfoCamere, DABO, IdeaGrip e Assicurazioni Generali, senza loghi. L’email, il pulsante copia, il Q&A (un solo comando apre tutte le domande e risposte), i social e le tre lingue restano funzionanti. Nessuna immagine o metrica inventata.
- I titoli di sezione della home e il titolo Domande frequenti sono in Bodoni Moda (40px), arancione. Il tratto a mano sotto i titoli è stato provato e tolto.
- Invito a fine pagina: "Per parlare di un progetto" e un bottone arancione "Scrivimi" (testo scuro, angoli da 8px) che porta all'email nella sezione "Collaboriamo" della home. Un solo bottone per pagina.
- Link nel testo: sempre testo chiaro con sottolineatura arancione sottile; niente frecce. Le pagine RAG e AI in locale hanno un glossario ("Parole tecniche") prima dell'invito finale. Porta all'email nella sezione "Collaboriamo" della home. La finestra contatti non esiste più e il numero di telefono non è più sul sito; il piè di pagina riporta "Sito personale. Le attività descritte sono presentate a titolo personale." Porta all'email nella sezione "Collaboriamo" della home. Non esiste più la finestra contatti (e il numero di telefono non è più sul sito); il piè di pagina riporta "Sito personale. Le attività descritte sono presentate a titolo personale."
- Risultati dei progetti (16 novembre 2026): ogni risultato dichiara come è stato misurato e quali dati non sono pubblicabili. RAG: feedback quantitativi interni, 5 mesi, costo evitato di un modello su misura (nessuna cifra pubblicata). AI in locale: circa 100 domande di prova, circa 80 risposte corrette, con fine-tuning e quantizzazione su Google Colab e uso in locale su portatile aziendale. Le cifre sono arrotondate come le ha fornite Nicolò.
- AI delegation loop (18 novembre 2026): concetto non ancora implementato, dichiarato come tale ("Concetto in esplorazione, non ancora implementato"). Sezione in home tra "Cosa faccio" e "Per chi" e pagina ai-delegation-loop.html con cinque blocchi: come funziona (processo, strumenti, verifica), il ciclo in cinque passaggi, flussi più ampi, rischi e cautele. Titolo in inglese in tutte le lingue. Testo ricavato dalla spiegazione di Nicolò; senza fonti citate.
- Home a sette blocchi (18 novembre 2026, versione "via di mezzo", approvata da Nicolò; la home precedente a nove blocchi è nel ramo `backup/home-attuale`): presentazione con la riga "Per chi", i tre numeri, Progetti (RAG aziendale, AI in locale e AI delegation loop in righe con un risultato ciascuno), Il mio percorso (con formazione e iniziative internazionali), Su Instagram, Q&A e Collaboriamo. Tolte "Cosa faccio" e la sezione "Per chi" come blocco a sé. Spazio tra sezioni di 110px, titoli dei progetti in Bodoni Moda, email in Bodoni Moda.
- Pagina Hobby: musica, audiofilia, fotografia, orologi, libri e animali, con i link ai profili personali; testi solo con ciò che l'autore ha detto, nessun anno o dato non fornito.
- Prima i casi studio RAG e Local AI, poi bio e percorso.
- Navigazione unica, senza indici duplicati: le lingue stanno affiancate in barra e non ci sono menu a tendina né tre lineette; la ricerca nel sito è stata tolta.
- I dettagli espandibili devono funzionare anche da tastiera.
- Layout fluido per desktop e mobile, con rispetto per `prefers-reduced-motion`.
- Non inventare metriche, impatti o caratteristiche tecniche.

### Logo: firma e monogramma (21 novembre 2026)

Due segni, un ruolo ciascuno, mai insieme nello stesso spazio:
- **Firma** "Nicolò Forcolin" in Destiny Signature, arancione `#FF4A11`: è il logo quando c'è spazio per il nome. Barra in alto di ogni pagina, anteprime social, copertina LinkedIn, documenti e presentazioni. Sempre su fondo scuro, mai sotto 22 px di corpo, mai in maiuscolo né deformata.
- **Monogramma NF** (ovale avorio con la N la cui ultima asta sale nella F, e il punto come stanghetta): è il simbolo quando il nome non entra o non si legge. Favicon, icona dell’app sul telefono, avatar degli account tecnici (GitHub, Vercel), timbro su immagini e allegati. Sui social personali resta il ritratto. Ovale avorio `#F5F1EC` su nero `#0E0E0F`, tratto nero; sotto i 24 px il punto si perde ed è accettato.
- Non si affiancano firma e monogramma, non si ricolora il monogramma (niente versione arancione), non si mette il monogramma dentro le pagine al posto della firma.
- File: `favicon.svg` (vettoriale), `favicon-16.png`, `favicon-32.png`, `favicon.ico`, `apple-touch-icon.png`, `icon-192-v8.png`, `icon-512-v8.png` e le versioni maskable.

### Grafica: disegni, schemi e immagini (21 novembre 2026)

- **Disegni al tratto** (icone delle pagine progetto, schemi): solo linee, senza riempimenti, colore del testo (`currentColor`, avorio); tratto da 1,25 su una tavola larga 120 unità (circa 1,5 px a schermo), estremità e giunzioni arrotondate. L'arancione segna al massimo un elemento per disegno: quello attivo o il punto d'arrivo.
- **Schemi grandi** (la testina del RAG, il ciclo del delegation loop): stessa logica, tratto proporzionato alla tavola (0,6 sulla figura isometrica, 2–3 sul ciclo da 340), un solo elemento arancione.
- **Serigrafia di Padova** (`padova-skyline.webp`): disegno a linee chiare, in fondo alle pagine interne e nelle anteprime social, in trasparenza. Non compare mai insieme alla foto di Prato della Valle.
- **Foto**: il ritratto è sempre in bianco e nero e scontornato; le foto di luoghi stanno solo come sfondo scurito (al 92% di nero) e con il credito dell'autore se non sono mie.
- Niente icone sopra i titoli, niente forme decorative, niente illustrazioni a colori o generate.

### Anteprime social (21 novembre 2026)

Un'immagine 1200×630 per pagina, sotto i 300 KB, rigenerate con lo stile attuale: fondo nero, firma arancione in alto a sinistra, titolo della pagina in Bodoni Moda arancione, una riga in Montserrat avorio, "nforcolin.eu" in basso, serigrafia di Padova in trasparenza in basso a destra. La home usa il titolo della hero in Bodoni avorio e il ritratto al posto della serigrafia. File: `og-home.jpg`, `og-rag.jpg`, `og-ai-in-locale.jpg`, `og-loop.jpg`, `og-progetti.jpg`, `og-percorso.jpg`, `og-hobby.jpg`, `og-padova.jpg` (informativa privacy). Se cambia il titolo o la frase di una pagina, va rifatta anche la sua anteprima.

## 4. Profili social

LinkedIn va allineato al positioning statement v2.

- **Copertina (1584×396):** sfondo nero del sito, "Nicolò Forcolin" nel carattere della firma in arancione, sotto la riga "Google Cloud Innovator • Porto l'AI nel lavoro quotidiano" con nome e riga della stessa lunghezza, serigrafia di Padova a destra (sfuma verso sinistra per non attraversare il testo). Nessun riferimento a InfoCamere. Il pallino centrale è ammesso solo qui: sul sito le stringhe unite da puntini centrali restano vietate.
- **Foto profilo:** resta quella attuale.
- Non ci sono altri profili pubblici attivi da allineare. Instagram e Spotify sono profili personali e hanno un link nella pagina Hobby.
- Colonna: contenuto largo circa 990 px (contenitore da 1100 px con margini da 56), come nel sito di Otto Climan. Sopra i 1920 px il sito non si ingrandisce più, così lo zoom del browser funziona. "Cosa faccio" è su due colonne.
- Barra in alto: il nome è scritto sempre per intero ("Nicolò Forcolin", in arancione); le tre lingue stanno sempre affiancate (per esteso da 901 px in su: "Italiano", "English", "中文"; sotto, le sigle IT, EN, 中文). Non ci sono voci né menu a tre lineette su nessuna larghezza: alle pagine si arriva dai link della home.

### Schermata d'ingresso su mobile (tolta, recuperabile)

Fino al 15 novembre 2026 la home su mobile si apriva con una prima schermata a tutto schermo: ritratto in giacca e dolcevita su nero (photo-entry-mobile.webp, 1428×2560), il nome in arancione nel carattere della firma, riga e pallino come segno d'ingresso; la barra compariva solo entrando, con un tocco. È stata tolta dal sito e dal codice. Per rimetterla: il commit `79830b7` (ultimo con la schermata) contiene i file; si recupera il ritratto con `git checkout 79830b7 -- photo-entry-mobile.webp` e si riprendono dalla stessa versione la sezione `.m-entry` di index.html, le regole `.m-entry*`, `.entry-*` e `body.at-entry` di home-editorial.css, il blocco con l'IntersectionObserver in script.js e le chiavi `scroll_btn` ed `entry_label` dei dizionari. In alternativa si annulla la PR che l'ha tolta con `git revert -m 1` sul suo commit di merge.
- Contatti in home (18 novembre 2026): il titolo è "Disponibile per progetti AI con PA e PMI." (EN "Open to AI projects with government and SMEs."). Un solo modo per scrivere: l’email con il pulsante copia. Instagram e LinkedIn stanno nel piè di pagina della home, non più nella sezione.
- Su Instagram in home: su desktop le tre foto hanno la stessa altezza e stanno allineate in alto (colonne 1,25 : 1 : 1, perché la prima è quadrata e le altre 4:5); su mobile la prima occupa tutta la riga.
- Scala dei caratteri (19 novembre 2026), circa ×1,25 sopra il corpo. Desktop: 16 px (note, piè di pagina, bottoni, lingue), 18 px corpo, 22 px introduzioni e titoletti, 40 px titoli di sezione, 76 px titolo di pagina. Mobile: 16, 18, 22, 28 e 34 px (24 px per il titolo dei contatti sotto i 360 px). La firma in Destiny Signature è il logo e resta fuori dalla scala. Interlinea 1,5–1,6 per il testo, 1,15 per i titoli grandi in Bodoni. I titoli grandi in Bodoni sono spostati a sinistra di 0,05–0,08 em per allineamento ottico con il testo sotto.
- Hero della home (20 novembre 2026): la prima riga dell'intro ("IT per le PA dal 2022, Tech Lover dal 1992."; EN "Public-sector IT since 2022, tech lover since 1992.") è il titolo visibile, in Bodoni avorio a 40 px su desktop e 24 px su mobile, su due righe. Sotto, il resto dell'intro a 18 px. Il nome resta solo nella barra in alto, in arancione. Dietro la hero, a tutta larghezza, la canaletta di Prato della Valle (foto di Didier Descouens, CC BY-SA 4.0, da Wikimedia Commons) già scurita nel file al 92% (padova-prato-1920.webp e padova-prato-960.webp) e sfumata nel nero prima dei numeri; il credito sta nel piè di pagina della home. Contrasto misurato sul punto più chiaro: almeno 14:1 per il testo principale e 10:1 per quello secondario. La serigrafia di Padova resta solo in fondo alle pagine interne, così le due immagini non compaiono mai insieme.
- Contatti e domande frequenti in home (21 novembre 2026), riscritti perché non ricordino altri siti: "Raccontami che lavoro fate e dove perdete tempo ogni settimana. Ti dico se l’AI può aiutare, anche quando la risposta è no." Domande frequenti: "Lavori solo con la PA?", "I dati restano in azienda?", "Da dove si parte?", ciascuna con un fatto già presente sul sito (80 risposte su 100; meno di 15 minuti invece di circa un’ora; analisi in meno di 2 ore invece di una giornata).
- Caratteri (21 novembre 2026, scelta di Nicolò): Bodoni Moda resta per i titoli; Special Elite (fonts/special-elite-latin.woff2, licenza Apache 2.0, un solo peso) sostituisce Montserrat per tutto il testo, i bottoni, le lingue, il piè di pagina e le anteprime social. Montserrat resta solo nella pagina privata delle statistiche. Provati e scartati lo stesso giorno: Special Elite nei titoli con Montserrat nel testo, e Punk Typewriter (licenza non chiara, poco leggibile). Con un solo peso, il grassetto (per esempio 2022 e 1992 nella hero) non si distingue dal testo normale.
- Testo in Courier Prime (21 novembre 2026, scelta di Nicolò): sostituisce Special Elite, provato poche ore prima. File fonts/courier-prime-latin-400.woff2 e fonts/courier-prime-latin-700.woff2, licenza SIL Open Font License. Più pulito di Special Elite sui testi lunghi e con un grassetto vero, quindi i dati in evidenza tornano a staccarsi. I titoli restano in Bodoni Moda.
- Titoli in IBM Plex Mono (21 novembre 2026, scelta di Nicolò): sostituisce Bodoni Moda, file fonts/ibm-plex-mono-latin-500.woff2 (peso 500, licenza SIL Open Font License), spaziatura −0,02em. Il carattere è largo: titolo di pagina a 60 px su desktop, etichette della colonna sinistra a 28 px, sotto i 360 px titoli delle voci a 18 px e titoli dei blocchi a 22 px; il titolo della hero in inglese sta a 28 px (22 px sotto i 1000 px, 18 px sotto i 360 px) per restare su due righe. I titoli grandi sono spostati a sinistra di 0,06 em per allineamento ottico. La griglia Instagram su mobile usa colonne che possono restringersi, perché il testo a spaziatura fissa non va a capo da solo.
- Hero stabile tra le lingue (21 novembre 2026): su mobile il ritratto ha un’altezza fissa (tra 200 e 560 px, lo spazio dello schermo meno 360 px per il testo), così non cresce né si sposta quando cambia la lunghezza del testo; la firma nella barra ha interlinea fissa 1,6, così la barra non cambia altezza in cinese. 
- Hero (21 novembre 2026, testo di Nicolò): sotto il titolo "IT per le PA dal 2022, Tech Lover dal 1992." c’è una sola frase, "Racconto l’AI, integro tecnologie e miglioro processi aziendali. Sempre con un obiettivo: renderli utili nel lavoro di ogni giorno." Sostituisce la riga sul pubblico ("Lavoro con pubbliche amministrazioni…") e la frase "La tecnologia funziona davvero quando smetti di pensarci", tolte.
- Hero su mobile allineata a sinistra (21 novembre 2026): la frase sotto il titolo va su 4–6 righe sui telefoni, e le regole vietano paragrafi centrati oltre le tre righe.
- Hero (21 novembre 2026, testo di Nicolò): titolo "IT per le PA dal 2022. Tech Lover dal 1992." (punto al posto della virgola), poi due frasi: "Racconto l’AI e porto la tecnologia nei processi aziendali. Quelli veri, fatti di persone e problemi quotidiani." e "Lavoro con PA, enti parastatali, PMI e professionisti. Sviluppo soluzioni che funzionano anche fuori dalle presentazioni PowerPoint." Sostituiscono "Racconto l’AI, integro tecnologie e miglioro processi aziendali…".
- AI delegation loop eliminato (22 novembre 2026, scelta di Nicolò): tolti la riga in home, la pagina ai-delegation-loop.html, i testi, gli stili, l’anteprima og-loop.jpg e la voce nella sitemap. Il vecchio indirizzo rimanda alla home. In home restano due progetti: RAG aziendale e AI in locale.
- Hero (22 novembre 2026, testo di Nicolò): titolo "Informatico per le PA, racconto l’AI e la porto nei processi aziendali." (IBM Plex Mono, 30 px su desktop, 20 px su mobile, 3 righe: la frase è più lunga delle due righe previste per i titoli, scelta voluta). Sotto: "Esempio concreto: un assistente AI da me creato ed in produzione porta l’analisi post evento da una giornata a poche ore." Più piccola e grigia: "Lavoro con PA, enti parastatali, PMI e professionisti. Sviluppo soluzioni che funzionano anche fuori dalle presentazioni PowerPoint." Tolti "IT per le PA dal 2022. Tech Lover dal 1992." e "Racconto l’AI e porto la tecnologia…". Su mobile il ritratto è alto lo schermo meno 460 px (meno 520 px sotto i 380 px di larghezza), così il testo resta nella prima schermata da 320×640 in su.
- Home (22 novembre 2026): nel RAG aziendale due risultati, "Meno di 15 minuti per gestire un problema, prima circa un’ora" e "Meno di 2 ore per l’analisi post evento, prima fino a una giornata", così il dato della hero ha un riscontro. La sezione Su Instagram è dopo i contatti, in fondo alla pagina: chi cerca un professionista trova prima progetti, percorso e mail. La riga dei numeri sotto la hero resta.
