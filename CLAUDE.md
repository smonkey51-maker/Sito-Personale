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
- **Tipografia**: niente Inter/Roboto/Geist su tutto senza un titolo
  con carattere distintivo; corpo testo leggibile ≥16px.
- **Layout**: niente badge "pill" sopra il titolo, niente grid di
  card identiche, niente card dentro card, niente numeretti
  decorativi (01/02/03) su sezioni che non sono una vera sequenza.
- **Movimento**: animare solo quando qualcosa cambia davvero
  (scroll reale, stato che cambia) — niente fade-in generico
  identico ovunque, niente bounce, sempre con guardia
  `prefers-reduced-motion`. Stati `:active` sui controlli, non solo
  `:hover`.
- **Copy**: niente aggettivi da comunicato stampa ("cutting-edge",
  "seamless", "effortless"), niente false dicotomie ("non è solo X,
  è Y"), niente trattini lunghi usati come connettore di frase
  invece che come separatore tipografico.
- **Codice morto**: nessuna classe, file o regola CSS lasciata nel
  repo senza che qualcosa la usi davvero — se si rimuove una
  funzionalità, rimuovere anche ciò che la serviva.

Se emerge un dubbio su un punto specifico, chiedere invece di
decidere a sorpresa — ma il controllo va fatto di default, senza
bisogno che venga richiesto ogni volta.
