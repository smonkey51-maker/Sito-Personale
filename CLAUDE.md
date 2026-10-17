# Regole di lavoro del repo

## Merge

Le modifiche si pubblicano con una PR verso `main`, che si mergia subito dopo la creazione senza attendere una conferma preventiva.
Se una modifica è ambigua, rischiosa o va oltre quanto richiesto, chiedere prima di procedere.

## Niente "AI slop"

Regola durevole: il sito deve restare pulito, senza i pattern tipici
dei siti generati da AI senza revisione. Prima di aggiungere testo o
markup nuovo, controllare contro questi punti (non serve installare
tool di terze parti: basta leggere il codice):

- **Colori**: niente gradienti viola/blu da default Tailwind, niente
  nero/bianco puro per il testo — palette e neutri reali.
  Niente viola/indigo, niente crema con terracotta. Accento sotto il 5%
  di una schermata e non su titoli, icone, puntini o bordi. Contrasto
  ≥4.5:1 per il corpo, ≥3:1 per il testo grande; il testo secondario
  non scende sotto questi valori. Superfici distinte da un passo di
  tono, non da linee o ombre.
- **Tipografia**: niente Inter/Roboto/Geist su tutto senza un titolo
  con carattere distintivo; corpo testo leggibile ≥16px, nessun testo
  sotto i 13px. Massimo due famiglie e cinque dimensioni. Niente
  monospace fuori dai blocchi di codice. Niente etichette piccole in
  maiuscolo con tracking. Paragrafi max ~62ch, interlinea 1.45-1.6,
  mai giustificati né centrati oltre le tre righe. Titoli su max due
  righe a ogni larghezza, `text-wrap:balance`. Nessuna parola del
  titolo stilata a parte (corsivo, colore, sottolineatura).
- **Layout**: niente badge "pill" sopra il titolo, niente grid di
  card identiche, niente card dentro card, niente numeretti
  decorativi (01/02/03) su sezioni che non sono una vera sequenza.
  Niente "eyebrow" (etichetta piccola sopra un titolo), niente icone
  sopra le card, niente vetro (`backdrop-filter`) né barre di
  navigazione flottanti a pillola, niente emoji, blob o forme
  decorative, niente finte dashboard. Ombre solo su elementi che
  fluttuano (menu, dialog), mai a riposo. Ogni sezione ha una
  composizione diversa dalle vicine; gli spazi tra sezioni sono
  nettamente più grandi di quelli interni. Su mobile bersagli
  toccabili ≥44px e margini 16-20px.
- **Movimento**: animare solo quando qualcosa cambia davvero
  (scroll reale, stato che cambia) — niente fade-in generico
  identico ovunque, niente bounce, sempre con guardia
  `prefers-reduced-motion`. Stati `:active` sui controlli, non solo
  `:hover`. Animare solo `transform`, `opacity`, `clip-path`; niente
  `ease-in`, niente loop infiniti senza significato, niente scroll
  hijacking o cursori custom. Le entrate in scroll avvengono una sola
  volta (IntersectionObserver). Gli stili `:hover` stanno dentro
  `@media (hover:hover)`. Focus visibile su tutto ciò che è
  interattivo.
- **Copy**: niente aggettivi da comunicato stampa ("cutting-edge",
  "seamless", "effortless"), niente false dicotomie ("non è solo X,
  è Y"), niente trattini lunghi usati come connettore di frase
  invece che come separatore tipografico (1-2 per pagina al massimo).
  Evitare anche: "unlock", "elevate", "empower", "streamline",
  "robust", "world-class", "all-in-one"; elenchi di tre slogan
  ("Veloce. Semplice. Sicuro."); "X, reimmaginato"; "Benvenuto";
  domande che il lettore non ha fatto; titoli con i due punti; etichette
  di sezione vaghe ("La filosofia", "I dettagli"); contorni da
  template ("Scroll", "Est. 2024", "Disponibile" con pallino, stringhe
  unite da puntini centrali). I bottoni nominano l'azione, uno
  primario per schermata, senza freccia su ogni link. Virgolette
  curve, puntini di sospensione reali, trattino en per gli intervalli.
- **Codice morto**: nessuna classe, file o regola CSS lasciata nel
  repo senza che qualcosa la usi davvero — se si rimuove una
  funzionalità, rimuovere anche ciò che la serviva.

Se emerge un dubbio su un punto specifico, chiedere invece di
decidere a sorpresa — ma il controllo va fatto di default, senza
bisogno che venga richiesto ogni volta.
