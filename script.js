(function(){
  var i18n = {
    it: {
      areas_title:"Dove lavoriamo insieme",
      area1_t:"Consulenza AI",
      area1_d:"Capire dove l’AI aiuta e dove non serve, prima di comprare qualcosa.",
      area1_res_k:"DABO",
      area1_res_v:"consulenza al CEO, poi nel team della candidatura internazionale.",
      area2_t:"Sistemi AI",
      area2_d:"Assistenti che rispondono dai documenti dell’organizzazione e citano le fonti.",
      home_rag_res_k:"15 minuti",
      home_rag_res_v:"per gestire un problema, prima un’ora.",
      area3_t:"Formazione",
      area3_d:"Affiancare le persone a usare l’AI nel proprio lavoro.",
      area3_res_k:"36 colleghi",
      area3_res_v:"affiancati, in incontri di gruppo e individuali.",
      area4_t:"Governance",
      area4_d:"Decidere cosa resta in casa e cosa si può affidare a un servizio esterno.",
      home_local_res_k:"80 risposte corrette",
      area4_res_v:"su 100 domande di prova, con modelli che girano nell’infrastruttura dell’organizzazione.",
      home_all_projects:"Tutti i progetti",
      home_career_title:"Il mio percorso",
      home_career_link:"Leggi il percorso",
      local_how_privacy:"Le richieste vengono elaborate in locale, senza inviare dati all’esterno.",
      local_hw:"I modelli giravano su un portatile aziendale, senza scheda grafica dedicata.",
      local_colab:"Il fine-tuning e la quantizzazione, con Unsloth, sono avvenuti su Google Colab: un servizio che presta in cloud RAM, GPU, TPU e vCPU, su hardware fisico di proprietà di Google e condiviso con altri utenti.",
      local_flow_aria:"Fasi della sperimentazione",
      local_how_note:"Le tre fasi: dati, modelli, esecuzione in locale. Nessun riferimento a configurazioni interne.",
      local_why_label:"Perché farlo",
      how_steps_aria:"Fasi del sistema",
      how_s5_desc:"Ogni risposta include riferimenti alle fonti originali per consentire la verifica e l’approfondimento.",
      how_s5_title:"Verifica",
      how_s4_desc:"Il sistema genera una risposta sintetica e contestualizzata, basata sui contenuti trovati.",
      how_s4_title:"Risposta",
      how_s3_desc:"La richiesta dell’utente viene confrontata con i contenuti indicizzati per individuare i passaggi più rilevanti e pertinenti.",
      how_s3_title:"Ricerca",
      how_s2_desc:"I contenuti vengono elaborati e indicizzati per consentire una ricerca efficace.",
      how_s2_title:"Elaborazione",
      how_s1_desc:"Contenuti autorizzati provenienti da diverse aree.",
      how_s1_title:"Fonti",
      how_flow_aria:"Schema del funzionamento",
      how_c4:"Risposta con riferimenti alle fonti",
      how_c3:"Ricerca nei contenuti indicizzati",
      how_c2:"Elaborazione e indicizzazione",
      how_c1:"Contenuti aziendali autorizzati",
      how_note:"Lo schema mostra il funzionamento in termini generali, senza dettagli interni o informazioni riservate.",
      rag_fig_aria:"Figura: una testina di lettura sceglie una fra quattro fonti.",
      rag_fig_svg:"Quattro dischi in una cassa e una sola testina di lettura che scorre su una guida sopra di loro. Dove si ferma, il disco sotto la testina esce dalla copertina.",
      rag_fig_hint:"Scegli una fonte: sono i quattro tipi di contenuto che l’assistente consulta.",
      rag_fig_start:"Un solo punto di accesso per le fonti aziendali.",
      rag_fig_reading:"La testina sta leggendo {name}.",
      rag_fig_src1:"Ticket",
      rag_fig_src2:"Inventario",
      rag_fig_src3:"Documenti",
      rag_fig_src4:"Procedure",
      how_lead:"Il sistema legge i contenuti aziendali autorizzati e risponde alle domande citando le fonti.",
      case_how_label:"Come funziona",
      c1_feedback:"Oggi lo strumento è usato da un’intera Unità Operativa, che ne dà un riscontro positivo, e dal suo Responsabile.",
      case_issues_label:"Dopo il lancio",
      c1_impact4_v:"secondo i riscontri degli utenti sono corrette e collegano anche lo storico dei problemi passati.",
      c1_impact5_k:"Progetto AI aziendale, dopo il RAG:",
      c1_impact5_v:"grazie al RAG sono stato selezionato come uno dei 6 dipendenti InfoCamere nel progetto di soluzioni AI aziendali, gestito da 1 direttore e 1 vicedirettore.",
      c1_impact4_k:"Risposte:",
      c1_impact3_v:"14 utenti, il Responsabile e 13 suoi collaboratori, fino a 15 domande al giorno.",
      c1_impact3_k:"Uso:",
      c1_impact2_v:"da mezza giornata o una giornata a 2 ore.",
      c1_impact2_k:"Analisi dopo un problema:",
      c1_impact_how_k:"Come l’ho misurato:",
      c1_impact_how_v:"con feedback quantitativi interni degli utenti, raccolti per 5 mesi sui casi gestiti in quel periodo.",
      c1_impact_cost_k:"Costo evitato:",
      c1_impact_cost_v:"non ho sviluppato un modello su misura: ho riusato in modo diverso gli strumenti e le risorse che l’azienda aveva già.",
      c1_impact_priv_k:"Dati non pubblicabili:",
      c1_impact_priv_v:"alcuni dati non si possono pubblicare, quindi qui trovi solo quelli che posso dichiarare.",
      c1_impact1_v:"da un’ora a 15 minuti.",
      c1_impact1_k:"Gestione di un problema:",
      case_impact_label:"Risultati",
      tech_p1:"Le fonti si aggiornano tutte insieme. Lo strumento è utilizzabile da ogni utente che ha l’accesso aziendale.",
      tech_p2:"Divido i documenti in porzioni per paragrafo, lunghezza e sezione. Oggi la ricerca funziona per parole; sto implementando la ricerca vettoriale, per significato, non ancora in uso.",
      tech_p3:"La risposta è generata da un modello in cloud, guidato da istruzioni scritte per questo uso. Controllo ogni giorno i feedback degli utenti e analizzo i log. Se lo strumento non trova risposte, sistemo il percorso verso le fonti e le istruzioni.",
      outside_label:"Fuori dal lavoro",
      sec_outside:"Hobby",
      outside_link:"Vedi gli hobby",
      outside_lead:"Musica Hi-Fi, fotografia, orologi, libri e animali.",
      page_title_outside:"Hobby | Nicolò Forcolin",
      page_description_outside:"Musica Hi-Fi, fotografia, orologi, libri e animali: gli hobby di Nicolò Forcolin fuori dal lavoro.",
      out_music_label:"Musica Hi‑Fi",
      out_music_desc:"Suono la chitarra e, a tempo perso, la batteria.",
      out_artists_desc:"Tra i miei artisti preferiti ci sono Miles Davis, Marcus Miller, YES, Bach, Black Sabbath, Jean‑Luc Ponty, Igorrr e Jack White.",
      out_music_link:"Vedi il profilo Spotify",
      out_audio_desc:"Sono un audiofilo. In cuffia ascolto con modelli Sony e HiFiMan, a casa con un impianto Sony.",
      out_photo_label:"Fotografia",
      out_photo_desc:"Sto ampliando il mio profilo Instagram con sole foto scattate da me, sistemate con preset in Lightroom Mobile. Mi piacerebbe avere una Leica Q3.",
      out_photo_link:"Vedi il profilo Instagram",
      out_books_label:"Letture",
      out_books_desc:"Leggo soprattutto biografie e autobiografie.",
      out_watch_label:"Orologi",
      out_watch_desc:"Sono appassionato di orologi. Il mio preferito in assoluto è l’Omega Speedmaster, sia nella versione base sia nella First Omega In Space.",
      out_pets_label:"Animali",
      out_pets_desc:"Amo i gatti e i rettili.",
      page_description_experience:"Il percorso di Nicolò Forcolin: dalle polizze al RAG in produzione, passando per il Service Desk.",
      page_title_experience:"Percorso | Nicolò Forcolin",
      experience_lead:"Dalle polizze al RAG in produzione, passando per il Service Desk.",
      page_title_notfound:"Pagina non trovata | Nicolò Forcolin",
      page_description_notfound:"La pagina che cercavi non esiste o è stata spostata.",
      nf_title:"Pagina non trovata",
      nf_lead:"L’indirizzo non esiste o la pagina è stata spostata.",
      nf_where:"Dove andare",
      nf_home:"Home",
      nf_error:"Se pensi che sia un errore, scrivimi:",
      sec_percorso:"Percorso",
      xp5_link:"Vedi le iniziative",
      xp5_lead:"36 colleghi di altre Unità affiancati nell’uso dell’AI, in gruppo e uno a uno, su loro richiesta.",
      xp5_desc:"Sono Social Ambassador di InfoCamere e nel 2026 ho fatto advisory sull’AI al CEO di DABO.",
      xp5_title:"Advisory e adozione dell’AI",
      xp5_period:"2025 – oggi",
      xp4_link:"Leggi il progetto RAG",
      xp4_lead:"Ho messo in produzione due sistemi RAG e poi li ho unificati. Oggi lo usa un’intera Unità Operativa con il suo Responsabile.",
      xp4_desc:"Con il mio Responsabile ho definito le esigenze operative e scelto lo strumento. Ne seguo fonti, webapp, test e adozione, insieme ad altre Unità e al middle management. Riduce il tempo per gestire una criticità e per l’analisi post evento.",
      xp4_desc2:"In parallelo ho fatto una sperimentazione di modelli AI in locale. Grazie al RAG sono stato selezionato per un progetto successivo di soluzioni AI aziendali, gestito da 1 direttore e 1 vicedirettore: sono uno dei 6 dipendenti InfoCamere coinvolti.",
      xp4_title:"Referente del RAG aziendale, InfoCamere",
      xp4_period:"2026 – oggi",
      xp3_desc:"Collaboro alla gestione dell’infrastruttura IT del sistema camerale italiano, con un occhio fisso sull’affidabilità del servizio.",
      xp3_title:"Service Desk, InfoCamere",
      xp3_period:"2022 – oggi",
      xp2_desc:"Il primo ruolo operativo nell’IT: infrastruttura e troubleshooting.",
      xp2_grant:"Borsa di studio Google per WorkInTech, prima edizione italiana.",
      xp2_title:"Specialista IT in stage, IdeaGrip",
      xp2_period:"Feb – Set 2022",
      xp1_desc:"Clienti veri, in un settore molto regolamentato.",
      xp1_title:"Consulente assicurativo, Assicurazioni Generali",
      xp1_period:"Ott 2020 – Feb 2022",
      adv_internal_desc:"Su loro richiesta ho affiancato 36 colleghi, in incontri di gruppo e individuali: ho mostrato come usare i propri strumenti di lavoro e l’AI per rendere più efficaci i tool in produzione.",
      adv_internal_title:"Consulenza interna sull’AI per i colleghi",
      advisory_internal_label:"Advisory interna",
      c1_role3_v:"diffusione tra i membri dell’Unità, test, gestione dei problemi, raccolta dei feedback in fase di test e dopo il lancio, adozione.",
      c1_role3_k:"Con gli utenti:",
      c1_role2_v:"reperimento e pulizia dei dati e delle fonti, realizzazione e lancio dei due sistemi RAG, poi la loro unificazione, la webapp, la logica delle risposte e il manuale d’uso allegato.",
      c1_role2_k:"In prima persona:",
      c1_role1_v:"definizione delle esigenze operative e condivisione dello strumento.",
      c1_role0_k:"Le mie decisioni:",
      c1_role0_v:"scelta del modello AI di partenza e progettazione dello strumento per la massima fruibilità.",
      c1_role1_k:"Con il mio Responsabile:",
      c1_role4_k:"Con altre Unità e il middle management:",
      c1_role4_v:"coordinamento del progetto.",
      case_role_label:"Il mio ruolo",
      enablement_label:"Formazione e adozione",
      enablement_title:"Condividere l’esperienza sul campo",
      enablement_desc:"Ho partecipato come relatore a incontri interni sull’AI. Dal 2025 sono anche Social Ambassador di InfoCamere: promuovo la cultura digitale e condivido l’esperienza maturata nel lavoro.",
      hero_intro:[
        [{t:"Conosco persone, parlo di cose, le faccio."}],
        [{t:"Informatico per PA e imprese, racconto l’AI e la porto nei processi aziendali."}],
        [{t:"Conosciamoci con un caffè.",href:"contatti.html"}]
      ],
      stats_label:"In numeri",
      stat1_v:"36",
      stat1_k:"colleghi affiancati e formati",
      stat2_v:"14",
      stat2_k:"utenti del RAG aziendale",
      stat3_v:"1",
      stat3_k:"CEO affiancato (DABO)",
      home_clients:"Ho lavorato con InfoCamere, DABO, IdeaGrip e Assicurazioni Generali.",
      collab_title:"Disponibile per progetti AI con PA, PMI e liberi professionisti.",
      collab_ask:"Raccontami che lavoro fate e dove perdete tempo ogni giorno.",
      faq_title:"Domande frequenti",
      faq1_q:"Lavori solo con la PA?",
      faq1_a:"No. Il mio lavoro nasce nella PA, ma gli stessi problemi li hanno PMI e professionisti.",
      problem_label:"Il problema",
      problem_text:"Documenti sparsi, domande che tornano ogni giorno, risposte che dipendono da chi è in ufficio. È lì che l’AI aiuta davvero, se parte dal lavoro di tutti i giorni e non da una presentazione.",
      how_title:"Come lavoro",
      how1_t:"Un caffè o una chiamata",
      how1_d:"Mi racconti che lavoro fate e quali attività tornano ogni giorno. Non serve preparare niente.",
      how2_t:"Un’analisi onesta",
      how2_d:"Guardo documenti, strumenti e passaggi. Ti dico dove l’AI può aiutare e dove invece non serve.",
      how3_t:"Un primo strumento piccolo",
      how3_d:"Partiamo da un caso solo, provato sul lavoro vero. Se funziona lo allarghiamo, se non funziona lo capiamo presto.",
      faq2_q:"I dati restano in azienda?",
      faq2_a:"Se serve, sì. Ho provato modelli che girano nell’infrastruttura dell’organizzazione, senza mandare documenti fuori: 80 risposte corrette su 100 domande di prova.",
      faq3_q:"Da dove si parte?",
      faq3_a:"Da un problema che vi fa perdere tempo ogni settimana. Il RAG aziendale è nato così: oggi un problema si gestisce in 15 minuti invece di un’ora, e l’analisi dopo un problema richiede 2 ore invece di una giornata.",
      skip_to_content:"Vai al contenuto",
      page_title:"Nicolò Forcolin | AI nei processi aziendali, per PA e imprese",
      page_description:"Informatico per PA e imprese, racconto l’AI e la porto nei processi aziendali. Un assistente AI che ho creato porta l’analisi post evento da una giornata a poche ore.",
      rag_step1_kicker:"Fonti iniziali",
      rag_step1_title:"Documentazione e storico delle criticità",
      rag_step1_desc:"Due raccolte di conoscenza consultate separatamente.",
      rag_step2_kicker:"Prima implementazione",
      rag_step2_title:"Due sistemi RAG",
      rag_step2_desc:"Ricerca dedicata alle esigenze operative e documentali.",
      rag_step3_kicker:"Evoluzione",
      rag_step3_title:"Unificazione e nuove fonti",
      rag_step3_desc:"Un progetto più ampio per ricostruire il contesto.",
      local_step1_title:"Dataset controllati",
      local_step1_desc:"Dati preparati con un top manager per le prove.",
      local_step2_title:"Llama e Gemma",
      local_step2_desc:"Fine-tuning con Unsloth su Google Colab, con PC, account e dati aziendali.",
      local_step3_title:"Ollama e demo locali",
      local_step3_desc:"Inferenza e dimostrazioni in locale.",
      back_to_site:"Torna alla home",
      colophon_title:"Contatti",
      cta_title:"Per parlare di un progetto",
      cta_button:"Scrivimi",
      gl_title:"Parole tecniche",
      gl_rag_t:"RAG",
      gl_rag_d:"«Retrieval-Augmented Generation». L’assistente prima cerca nei documenti dell’azienda i passaggi pertinenti, poi scrive la risposta basandosi su quelli e indicando le fonti.",
      gl_idx_t:"Indicizzazione",
      gl_idx_d:"Preparare i documenti perché si possano ritrovare in fretta, come l’indice di un libro.",
      gl_vec_t:"Ricerca vettoriale",
      gl_vec_d:"Ricerca per significato e non per parole esatte: trova anche testi che dicono la stessa cosa con altre parole.",
      gl_llm_t:"Modello AI",
      gl_llm_d:"Programma addestrato su grandi quantità di testo, capace di scrivere risposte in linguaggio naturale.",
      gl_web_t:"Webapp",
      gl_web_d:"Applicazione che si usa dal browser, senza installare nulla.",
      gl_open_t:"Modello aperto",
      gl_open_d:"Modello AI i cui file si possono scaricare e far girare sul proprio computer, senza passare da un servizio esterno.",
      gl_ft_t:"Fine-tuning",
      gl_ft_d:"Ulteriore addestramento di un modello già pronto, su esempi specifici, per specializzarlo su un tema.",
      gl_inf_t:"Inferenza",
      gl_inf_d:"L’uso del modello per produrre una risposta, che è cosa diversa dall’addestrarlo.",
      gl_par_t:"Miliardi di parametri",
      gl_par_d:"Misura la dimensione di un modello: più parametri di solito significano più capacità, ma anche più memoria e tempo per rispondere.",
      gl_hal_t:"Informazioni inventate",
      gl_hal_d:"Risposte che suonano plausibili ma non corrispondono ai fatti o alle fonti. Si chiamano anche «allucinazioni».",
      gl_loc_t:"In locale",
      gl_loc_d:"Il modello gira su computer controllati dall’organizzazione, senza inviare dati a servizi esterni.",
      gl_tools_t:"Hugging Face, Ollama, Unsloth, Google Colab",
      gl_tools_d:"Strumenti: Hugging Face è il sito da cui si scaricano i modelli aperti, Ollama è il programma che li fa girare sul proprio computer, Unsloth serve a fare il fine-tuning più velocemente, Google Colab è il servizio che presta in cloud la potenza di calcolo.",
      gl_quant_t:"Quantizzazione",
      gl_quant_d:"Ridurre la precisione dei numeri con cui un modello è scritto, così occupa meno memoria e gira su computer comuni, di solito con una lieve perdita di qualità.",
      new_tab_hint:" (si apre in una nuova scheda)",
      copy_email:"Copia indirizzo email",
      copy_done:"Copiato negli appunti",
      footer_place:"© 2026 Nicolò Forcolin, Padova, Italia.",
      colophon_note:"Sito personale. Le attività descritte sono presentate a titolo personale.",
      footer_privacy_link:"Informativa privacy",
      privacy_title:"Informativa sulla privacy",
      privacy_intro:"Questo sito utilizza statistiche aggregate delle visite, senza cookie di tracciamento. Raccoglie dati personali solo se mi scrivi dal modulo di contatto.",
      privacy_s1_h:"Titolare del trattamento",
      privacy_s1_pre:"Nicolò Forcolin, Padova, Italia. Per qualsiasi richiesta relativa a questa informativa puoi scrivermi su ",
      privacy_s1_post:".",
      privacy_s2_h:"Statistiche aggregate",
      privacy_s2_p:"Il sito conta le pagine visitate e stima i visitatori unici di ogni giorno. Per la stima usa un identificativo pseudonimo che cambia ogni giorno e deriva da indirizzo IP e user agent, che questo sito non conserva (i log tecnici del server, gestiti da Vercel, sono descritti più sotto). Registra anche, in forma aggregata, da quale sito arrivi (per esempio LinkedIn), usando solo il nome del sito di provenienza o il parametro utm_source del link, senza l’indirizzo completo. Non usa cookie di tracciamento e non segue i visitatori da un giorno all’altro, quindi il segnale Do Not Track o Global Privacy Control del browser non cambia nulla. L’accesso amministrativo usa cookie tecnici di autenticazione. I dati aggregati sono conservati su Upstash Redis.",
      privacy_s3_h:"Log tecnici del server",
      privacy_s3_pre:"Il sito è ospitato su ",
      privacy_s3_post:", che per ragioni di sicurezza e funzionamento della rete registra in modo automatico i log tecnici standard di ogni richiesta HTTP (ad es. indirizzo IP, user agent, pagina richiesta, data e ora). Questi log sono gestiti direttamente da Vercel secondo la propria informativa privacy e non vengono utilizzati da questo sito per finalità di profilazione.",
      privacy_s3b_h:"Base giuridica e conservazione",
      privacy_s3b_p:"Tratto questi dati in base al legittimo interesse a sapere quante persone visitano il sito e a tenerlo sicuro (art. 6, par. 1, lett. f, GDPR). Le statistiche aggregate sono conservate per 90 giorni e poi cancellate automaticamente. I log tecnici sono conservati da Vercel secondo la sua informativa. Vercel e Upstash possono trattare i dati anche fuori dallo Spazio economico europeo: le garanzie che adottano sono descritte nelle loro informative.",
      privacy_s4_h:"Dati mostrati sul sito",
      privacy_s4_p:"I recapiti (email, Instagram, LinkedIn) pubblicati nella home sono dati personali dell’autore del sito, mostrati volontariamente per essere contattato. Il sito non li raccoglie né li elabora: sono semplicemente stampati nella pagina. Le foto della sezione Instagram sono copie ospitate su questo sito: aprendo la pagina il sito non contatta Instagram. Seguire un link verso Instagram porta sul loro servizio, che ha una propria informativa.",
      privacy_s5_h:"I tuoi diritti",
      privacy_s5_p:"Puoi chiedermi accesso, cancellazione, rettifica e opposizione scrivendomi via email o su LinkedIn. Per i messaggi del modulo di contatto questi diritti valgono per intero; per le statistiche valgono nei limiti in cui si applicano a dati pseudonimi che non posso ricollegare a una persona. Hai anche il diritto di presentare reclamo al Garante per la protezione dei dati personali (garanteprivacy.it).",
      privacy_s6_h:"Modifiche a questa informativa",
      privacy_s6_p:"Questa informativa viene aggiornata se cambiano gli strumenti usati dal sito. La versione in vigore è sempre quella pubblicata su questa pagina.",
      privacy_updated:"Ultimo aggiornamento: novembre 2026.",
      page_title_contact:"Contatti | Nicolò Forcolin",
      page_description_contact:"Raccontami che lavoro fate e dove perdete tempo: un modulo per scrivere a Nicolò Forcolin e fissare una chiamata o un caffè.",
      contact_title:"Prendiamoci un caffè",
      contact_lead:"Raccontami che lavoro fate e dove perdete tempo ogni giorno. Leggo io ogni messaggio e ti rispondo per fissare una chiamata o un caffè. Se l’AI non serve, te lo dico.",
      contact_name:"Nome e cognome",
      contact_email:"Email",
      contact_org:"Azienda o ente",
      contact_kind:"Tipo di organizzazione",
      contact_kind_none:"Scegli",
      contact_kind_pa:"Pubblica amministrazione",
      contact_kind_pmi:"PMI",
      contact_kind_pro:"Libero professionista",
      contact_kind_other:"Altro",
      contact_phone:"Telefono, se preferisci una chiamata",
      contact_message:"Che lavoro fate e dove perdete tempo",
      contact_message_hint:"Bastano poche righe: cosa fate, quale attività porta via più tempo, quali strumenti usate oggi.",
      contact_err_name:"Scrivi il tuo nome.",
      contact_err_email:"Serve un indirizzo email valido.",
      contact_err_phone:"Controlla il numero di telefono.",
      contact_err_message:"Scrivi almeno qualche riga.",
      contact_privacy_pre:"Uso questi dati solo per risponderti e li cancello dopo 12 mesi. I dettagli sono nell’",
      contact_privacy_link:"informativa privacy",
      contact_privacy_post:".",
      contact_send:"Invia la richiesta",
      contact_status_sending:"Invio in corso…",
      contact_status_ok:"Messaggio ricevuto. Ti rispondo all’indirizzo che hai indicato.",
      contact_status_invalid:"Controlla i campi segnati.",
      contact_status_rate:"Oggi da questa rete sono già arrivati diversi messaggi. Riprova domani o scrivimi via email.",
      contact_status_error:"Il messaggio non è partito. Riprova tra poco o scrivimi via email.",
      contact_alt:"Puoi anche scrivermi via email:",
      collab_coffee:"Prendiamoci un caffè e parliamone.",
      collab_wait:"L’AI può aspettare il secondo giro.",
      privacy_form_h:"Modulo di contatto",
      privacy_form_p:"Se mi scrivi dalla pagina Contatti, salvo nome, email, azienda o ente, tipo di organizzazione, telefono (se lo indichi) e il testo del messaggio, insieme alla data e alla lingua della pagina. Li uso solo per risponderti e capire se posso aiutarti, su tua richiesta (art. 6, par. 1, lett. b, GDPR). Sono conservati su Upstash Redis, li leggo solo io e non li cedo a nessuno. Vengono cancellati dopo 12 mesi, o prima se me lo chiedi. Per limitare lo spam il sito conta i messaggi inviati in un giorno con un identificativo pseudonimo ricavato dall’indirizzo IP, che si cancella dopo 24 ore. Quando arriva un messaggio, il sito me lo inoltra per intero anche su Telegram, sul mio account personale, così lo leggo subito. Telegram può trattare i dati anche fuori dallo Spazio economico europeo, secondo la sua informativa; cancello il messaggio inoltrato entro gli stessi 12 mesi.",
      hero_cta2:"Progetti e iniziative",
      sec_localai_title:"AI in locale",
      for_whom_label:"Per chi",
      for_whom_text:"Aziende, PMI, professionisti e pubbliche amministrazioni che vogliono tenere i dati sotto controllo: ho testato modelli AI in locale su domande specifiche e dataset dedicati, e ne racconto risultati e limiti.",
      for_whom_text2:"Chi guida la trasformazione digitale: in InfoCamere sono partito dalle esigenze operative, ho lanciato un assistente AI che risponde dai documenti aziendali e lo miglioro con i riscontri degli utenti. Ho affiancato anche colleghi di altre Unità.",
      for_whom_text3:"Startup e progetti internazionali: consulenza AI al CEO di DABO, poi nel team per “Sprint Forward in Golden Boots” in Cina.",
      for_whom_link:"AI in locale",
      for_whom_profile:"Google Developer",
      sec_lavori:"Progetti",
      sec_other:"Altre iniziative",
      c1_status_ic:"InfoCamere, in produzione dal 2026",
      c2_status_ic:"InfoCamere, sperimentazione conclusa nel 2026",
      club_desc:"Community professionale dedicata a relazioni rispettose e a una leadership gentile.",
      c1_summary:"Ho unificato due sistemi RAG già funzionanti in un unico punto di accesso, con più fonti aziendali collegate. Gli utenti scrivono la domanda come la direbbero a un collega: la risposta mette prima ciò che serve subito, poi possibili cause, procedure, casi simili e i link alle fonti.",
      c2_summary:"Su 100 domande di prova, 80 risposte erano corrette e le risposte miglioravano rispetto ai modelli di partenza. Restavano però informazioni inventate, meno frequenti nei modelli più performanti. Sono osservazioni su un campione piccolo, non una misura di accuratezza valida in generale. Era un test e per ora si è scelto di non portarlo avanti.",
      c2_unpub:"Alcuni dati del test non sono pubblicabili e non compaiono qui.",
      case_results_label:"Risultati e limiti",
      case_problem_label:"Obiettivo",
      case_solution_label:"Cosa ho fatto",
      case_learning_label:"Cosa ho imparato",
      case1_title:"RAG aziendale",
      c1_status:"In produzione dal 2026",
      case_fact_status:"Stato",
      case_fact_users:"Chi lo usa",
      case_fact_users_v:"14 utenti: il Responsabile e 13 suoi collaboratori",
      c1_problem:"Ridurre il tempo per ricostruire il contesto di un problema, partendo da informazioni sparse tra strumenti diversi e con costi contenuti.",
      c1_impact:"Un assistente AI (RAG) che risponde alle domande dei team usando i documenti dell’azienda, con le fonti a vista. Gestisce più in fretta i problemi operativi e le analisi del middle management.",
      c1_learning:"Dopo il lancio, alcuni utenti continuavano a cercare a mano. Sono emersi rallentamenti e lacune nei dati: uno strumento che funziona non basta. Ho lavorato sul manuale d’uso e parlando direttamente con gli utenti. Prima di estendere un assistente così servono fonti affidabili e istruzioni chiare su come usarlo.",
      case2_title:"Sperimentazione AI in locale",
      case2_short:"AI in locale",
      c2_status:"Sperimentazione conclusa nel 2026",
      site_title:"Questo sito",
      site_status:"Online",
      site_desc:"Il sito è sviluppato con Claude Code, l’assistente AI di Anthropic per il codice. Struttura, testi e scelte grafiche sono miei e ne rivedo il risultato a ogni modifica; l’AI scrive il codice e i test.",
      c2_problem:"Un test interno e informale per valutare modelli specializzati su domande relative a InfoCamere. Gli obiettivi: più controllo sui dati, costi potenzialmente più bassi e meno dipendenza da fornitori esterni.",
      c2_solution:"Ho scelto su Hugging Face Llama 3.1 8B, Gemma 2B, Gemma 4 E2B e Gemma 4 31B, di dimensioni diverse (da 2 a 31 miliardi di parametri). Con dataset specifici preparati insieme a un top manager li ho addestrati ulteriormente (fine-tuning con Unsloth e LoRA) su Google Colab, con PC, account e dati aziendali, poi li ho fatti girare in locale con Ollama.",
      c2_learning:"L’addestramento ha migliorato le risposte sui temi provati, ma non ha eliminato le informazioni inventate. Il limite emerso: distinguere una risposta plausibile da una corretta. Per portarlo in uso servirebbero prove ripetibili, criteri di accettazione stabiliti prima e una verifica delle risposte sulle fonti.",
      dabo_title:"DABO, consulenza e candidatura internazionale",
      dabo_desc:"Consulenza al CEO di DABO, poi nel team per la candidatura a “Sprint Forward in Golden Boots Innovation & Entrepreneurship Competition” al Saichuang Weilai (SCWL) Southeast Asia InnoTech Center, in Cina. Il percorso si è fermato alla tappa internazionale di Singapore, il 12 settembre 2026.",
      c2_lead:"Un test su modelli AI aperti, addestrati su domande specifiche e usati in locale, senza inviare dati all’esterno.",
      advisory_label:"Advisory esterna",
      community_label:"Community",
      club_title:"Club degli Uomini Gentili",
      case_flow_label:"Come si è evoluto",
      page_title_rag:"RAG aziendale | Nicolò Forcolin",
      page_description_rag:"Un assistente AI che risponde dai documenti dell’azienda e cita le fonti, per gestire più in fretta problemi operativi e analisi del middle management. In produzione dal 2026.",
      page_title_local:"Sperimentazione AI in locale | Nicolò Forcolin",
      page_description_local:"Un test su modelli AI aperti (Llama, Gemma), addestrati su domande specifiche e usati in locale con Ollama, senza inviare dati all’esterno.",
      home_ig_note:"Copie ospitate su questo sito, con le visualizzazioni di novembre 2026.",
      ig_views:"visualizzazioni",
      ig_alt1:"Una strada di Bruxelles vista dall’alto, con una chiesa sullo sfondo e un cielo nuvoloso.",
      ig_alt2:"Ritratto di Nicolò Forcolin su fondo arancione, con giacca di pelle e dolcevita nero.",
      ig_alt3:"Una terrazza di sera con tavoli bianchi, lanterne accese e cuscini blu.",
      page_title_projects:"Progetti e iniziative | Nicolò Forcolin",
      page_description_projects:"I progetti AI e le iniziative di consulenza, formazione e community di Nicolò Forcolin.",
      projects_lead:"I progetti AI che seguo e le iniziative di consulenza, formazione e community che li accompagnano.",
      c1_lead:"Un assistente AI che risponde dai documenti dell’azienda e cita le fonti, per gestire più in fretta i problemi operativi e le analisi del middle management.",
      project_read:"Leggi il progetto",
      page_title_privacy:"Informativa sulla privacy | Nicolò Forcolin",
      page_description_privacy:"Informativa sulla privacy del sito personale di Nicolò Forcolin: statistiche aggregate senza cookie di tracciamento e dati raccolti solo dal modulo di contatto.",
    },
    en: {
      areas_title:"Where we work together",
      area1_t:"AI advisory",
      area1_d:"Working out where AI helps and where it does not, before buying anything.",
      area1_res_k:"DABO",
      area1_res_v:"advice to the CEO, then on the team for the international application.",
      area2_t:"AI systems",
      area2_d:"Assistants that answer from the organization’s documents and cite their sources.",
      home_rag_res_k:"15 minutes",
      home_rag_res_v:"to handle an issue, down from an hour.",
      area3_t:"Training",
      area3_d:"Helping people use AI in their own work.",
      area3_res_k:"36 colleagues",
      area3_res_v:"supported, in group and one-to-one sessions.",
      area4_t:"Governance",
      area4_d:"Deciding what stays in-house and what can go to an outside service.",
      home_local_res_k:"80 correct answers",
      area4_res_v:"out of 100 test questions, with models running within the organization’s infrastructure.",
      home_all_projects:"All projects",
      home_career_title:"My experience",
      home_career_link:"Read about my experience",
      local_how_privacy:"Requests are processed locally, without sending data outside.",
      local_hw:"The models ran on a company laptop, without a dedicated graphics card.",
      local_colab:"Fine-tuning and quantization, with Unsloth, took place on Google Colab: a service that lends RAM, GPUs, TPUs and vCPUs in the cloud, on physical hardware owned by Google and shared with other users.",
      local_flow_aria:"Stages of the experiment",
      local_how_note:"The three stages: data, models, local execution. No references to internal configurations.",
      local_why_label:"Why do it",
      how_steps_aria:"Stages of the system",
      how_s5_desc:"Every answer includes references to the original sources for checking and further reading.",
      how_s5_title:"Verification",
      how_s4_desc:"The system generates a concise, contextual answer based on the content found.",
      how_s4_title:"Answer",
      how_s3_desc:"The user’s request is matched against the indexed content to find the most relevant passages.",
      how_s3_title:"Retrieval",
      how_s2_desc:"Content is processed and indexed for effective search.",
      how_s2_title:"Processing",
      how_s1_desc:"Authorised content from different areas.",
      how_s1_title:"Sources",
      how_flow_aria:"How-it-works diagram",
      how_c4:"Answer with references to the sources",
      how_c3:"Search across indexed content",
      how_c2:"Processing and indexing",
      how_c1:"Authorised company content",
      how_note:"The diagram shows how it works in general terms, without internal details or confidential information.",
      rag_fig_aria:"Figure: a reading head picks one of four sources.",
      rag_fig_svg:"Four records in a crate and a single reading head that slides along a rail above them. Where it stops, the record under the head slides out of its sleeve.",
      rag_fig_hint:"Choose a source: these are the four kinds of content the assistant consults.",
      rag_fig_start:"A single access point for the company sources.",
      rag_fig_reading:"The head is reading {name}.",
      rag_fig_src1:"Tickets",
      rag_fig_src2:"Inventory",
      rag_fig_src3:"Documents",
      rag_fig_src4:"Procedures",
      how_lead:"The system reads the authorised company content and answers questions by citing its sources.",
      case_how_label:"How it works",
      c1_feedback:"Today the tool is used by an entire Operating Unit, whose feedback is positive, and by its Manager.",
      case_issues_label:"After the launch",
      c1_impact4_v:"according to user feedback they are correct and also link the history of past issues.",
      c1_impact5_k:"Enterprise AI project, after the RAG:",
      c1_impact5_v:"thanks to the RAG I was selected as one of 6 InfoCamere employees in the enterprise AI solutions project, run by 1 director and 1 deputy director.",
      c1_impact4_k:"Answers:",
      c1_impact3_v:"14 users, the Manager and 13 of their collaborators, up to 15 questions a day.",
      c1_impact3_k:"Usage:",
      c1_impact2_v:"from half a day or a full day to 2 hours.",
      c1_impact2_k:"Analysis after an issue:",
      c1_impact_how_k:"How I measured it:",
      c1_impact_how_v:"with internal quantitative user feedback, collected over 5 months on the cases handled in that period.",
      c1_impact_cost_k:"Cost avoided:",
      c1_impact_cost_v:"I did not build a custom model: I reused, in a different way, the tools and resources the company already had.",
      c1_impact_priv_k:"Data not published:",
      c1_impact_priv_v:"some data cannot be published, so here you only find what I can state.",
      c1_impact1_v:"from an hour to 15 minutes.",
      c1_impact1_k:"Handling an issue:",
      case_impact_label:"Results",
      tech_p1:"The sources are all updated together. The tool can be used by every user who has company access.",
      tech_p2:"I split documents into chunks by paragraph, length and section. Search works on keywords today; I am implementing vector search, by meaning, which is not in use yet.",
      tech_p3:"The answer is generated by a cloud model, guided by instructions written for this use. I review user feedback and analyse the logs every day. When the tool finds no answer, I fix the path to the sources and the instructions.",
      outside_label:"Outside work",
      sec_outside:"Hobbies",
      outside_link:"See the hobbies",
      outside_lead:"Music and Hi-Fi, photography, watches, books and animals.",
      page_title_outside:"Hobbies | Nicolò Forcolin",
      page_description_outside:"Music and Hi-Fi, photography, watches, books and animals: Nicolò Forcolin’s hobbies outside work.",
      out_music_label:"Music and Hi‑Fi",
      out_music_desc:"I play guitar and, in my spare time, drums.",
      out_artists_desc:"Among my favourite artists are Miles Davis, Marcus Miller, YES, Bach, Black Sabbath, Jean‑Luc Ponty, Igorrr and Jack White.",
      out_music_link:"See the Spotify profile",
      out_audio_desc:"I am an audiophile. I listen on Sony and HiFiMan headphones, and at home on a Sony system.",
      out_photo_label:"Photography",
      out_photo_desc:"I am growing my Instagram profile with photos I take myself, edited with Lightroom Mobile presets. I would like to own a Leica Q3.",
      out_photo_link:"See the Instagram profile",
      out_books_label:"Reading",
      out_books_desc:"I mostly read biographies and autobiographies.",
      out_watch_label:"Watches",
      out_watch_desc:"I am a watch enthusiast. My all-time favourite is the Omega Speedmaster, both the standard version and the First Omega In Space.",
      out_pets_label:"Animals",
      out_pets_desc:"I love cats and reptiles.",
      page_description_experience:"Nicolò Forcolin’s path: from insurance policies to a RAG in production, by way of the Service Desk.",
      page_title_experience:"Experience | Nicolò Forcolin",
      experience_lead:"From insurance policies to a RAG in production, by way of the Service Desk.",
      page_title_notfound:"Page not found | Nicolò Forcolin",
      page_description_notfound:"The page you were looking for does not exist or has moved.",
      nf_title:"Page not found",
      nf_lead:"The address does not exist or the page has moved.",
      nf_where:"Where to go",
      nf_home:"Home",
      nf_error:"If you think this is a mistake, write to me:",
      sec_percorso:"Experience",
      xp5_link:"See the initiatives",
      xp5_lead:"36 colleagues from other units supported in using AI, in groups and one to one, at their request.",
      xp5_desc:"I am an InfoCamere Social Ambassador, and in 2026 I advised the CEO of DABO on AI.",
      xp5_title:"AI advisory and adoption",
      xp5_period:"2025 – present",
      xp4_link:"Read the RAG project",
      xp4_lead:"I put two RAG systems into production, then unified them. Today an entire Operating Unit and its Manager use it.",
      xp4_desc:"With my manager I defined the operational needs and chose the tool. I look after sources, web app, testing and adoption, together with other units and middle management. It cuts the time needed to handle an incident and to analyse it afterwards.",
      xp4_desc2:"In parallel I ran an experiment with local AI models. Thanks to the RAG I was selected for a later enterprise AI solutions project, run by 1 director and 1 deputy director: I am one of the 6 InfoCamere employees involved.",
      xp4_title:"Enterprise RAG contact, InfoCamere",
      xp4_period:"2026 – present",
      xp3_desc:"I collaborate on managing the IT infrastructure of the Italian Chambers of Commerce system, with a close eye on service reliability.",
      xp3_title:"Service Desk, InfoCamere",
      xp3_period:"2022 – present",
      xp2_desc:"My first hands-on IT role: infrastructure support and troubleshooting.",
      xp2_grant:"Google scholarship for WorkInTech, first Italian edition.",
      xp2_title:"IT specialist intern, IdeaGrip",
      xp2_period:"Feb – Sep 2022",
      xp1_desc:"Real clients, in a heavily regulated sector.",
      xp1_title:"Insurance advisor, Assicurazioni Generali",
      xp1_period:"Oct 2020 – Feb 2022",
      adv_internal_desc:"At their request I supported 36 colleagues, in group and one-to-one sessions: I showed how to use their own work tools and AI to make production tools more effective.",
      adv_internal_title:"Internal AI advisory for colleagues",
      advisory_internal_label:"Internal advisory",
      c1_role3_v:"rollout to the members of the Unit, testing, issue handling, collecting feedback during testing and after launch, adoption.",
      c1_role3_k:"With users:",
      c1_role2_v:"sourcing and cleaning the data and sources, building and launching the two RAG systems, then unifying them, the web app, the answer logic and the attached user manual.",
      c1_role2_k:"Hands-on:",
      c1_role1_v:"defining the operational needs and sharing the tool.",
      c1_role0_k:"My decisions:",
      c1_role0_v:"choosing the starting AI model and designing the tool for maximum usability.",
      c1_role1_k:"With my manager:",
      c1_role4_k:"With other units and middle management:",
      c1_role4_v:"project coordination.",
      case_role_label:"My role",
      enablement_label:"Training and adoption",
      enablement_title:"Sharing practical experience",
      enablement_desc:"I have spoken at internal AI sessions. Since 2025, I have also been an InfoCamere Social Ambassador, promoting digital culture and sharing experience from my work.",
      hero_intro:[
        [{t:"I know people, I talk about things, I get them done."}],
        [{t:"IT specialist for public administrations and companies, I talk about AI and bring it into business processes."}],
        [{t:"Let’s get to know each other over a coffee.",href:"contatti.html"}]
      ],
      stats_label:"In numbers",
      stat1_v:"36",
      stat1_k:"colleagues supported and trained",
      stat2_v:"14",
      stat2_k:"users of the enterprise RAG",
      stat3_v:"1",
      stat3_k:"CEO advised (DABO)",
      home_clients:"I have worked with InfoCamere, DABO, IdeaGrip and Assicurazioni Generali.",
      collab_title:"Available for AI projects with public administrations, SMEs and independent professionals.",
      collab_ask:"Tell me what your team does and where it loses time every day.",
      faq_title:"FAQ",
      faq1_q:"Do you only work with the public sector?",
      faq1_a:"No. My work started in the public sector, but SMEs and professionals face the same problems.",
      problem_label:"The problem",
      problem_text:"Scattered documents, questions that come back every day, answers that depend on who is in the office. That is where AI really helps, when it starts from everyday work and not from a slide deck.",
      how_title:"How I work",
      how1_t:"A coffee or a call",
      how1_d:"You tell me what your team does and which tasks come back every day. No preparation needed.",
      how2_t:"An honest look",
      how2_d:"I look at documents, tools and steps. I tell you where AI can help and where it is not needed.",
      how3_t:"A small first tool",
      how3_d:"We start from a single case, tested on real work. If it works we extend it, if it doesn’t we find out early.",
      faq2_q:"Does the data stay in-house?",
      faq2_a:"If needed, yes. I have tested models that run on the organisation’s own infrastructure, without sending documents out: 80 correct answers out of 100 test questions.",
      faq3_q:"Where do we start?",
      faq3_a:"With a problem that costs you time every week. The enterprise RAG started that way: an issue now takes 15 minutes instead of an hour, and the analysis after an issue takes 2 hours instead of a full day.",
      skip_to_content:"Skip to content",
      page_title:"Nicolò Forcolin | AI in business processes, for public administrations and companies",
      page_description:"IT specialist for public administrations and companies, bringing AI into business processes. An AI assistant I built cuts post-incident analysis from a full day to a few hours.",
      rag_step1_kicker:"Initial sources",
      rag_step1_title:"Documentation and incident history",
      rag_step1_desc:"Two separate knowledge collections.",
      rag_step2_kicker:"First implementation",
      rag_step2_title:"Two RAG systems",
      rag_step2_desc:"Dedicated retrieval for operational and documentation needs.",
      rag_step3_kicker:"Evolution",
      rag_step3_title:"Unified system and new sources",
      rag_step3_desc:"A broader project for reconstructing context.",
      local_step1_title:"Controlled datasets",
      local_step1_desc:"Data prepared with a top manager for testing.",
      local_step2_title:"Llama and Gemma",
      local_step2_desc:"Fine-tuning with Unsloth on Google Colab, with company PCs, accounts and data.",
      local_step3_title:"Ollama and local demos",
      local_step3_desc:"Local inference and demonstrations.",
      back_to_site:"Back to home",
      colophon_title:"Contact",
      cta_title:"To talk about a project",
      cta_button:"Write to me",
      gl_title:"Technical terms",
      gl_rag_t:"RAG",
      gl_rag_d:"“Retrieval-Augmented Generation”. The assistant first looks in the company’s documents for the relevant passages, then writes the answer based on them and names the sources.",
      gl_idx_t:"Indexing",
      gl_idx_d:"Preparing the documents so they can be found quickly, like the index of a book.",
      gl_vec_t:"Vector search",
      gl_vec_d:"Search by meaning rather than exact words: it also finds texts that say the same thing in other words.",
      gl_llm_t:"AI model",
      gl_llm_d:"A program trained on large amounts of text, able to write answers in natural language.",
      gl_web_t:"Web app",
      gl_web_d:"An application used from the browser, with nothing to install.",
      gl_open_t:"Open model",
      gl_open_d:"An AI model whose files can be downloaded and run on your own computer, without going through an outside service.",
      gl_ft_t:"Fine-tuning",
      gl_ft_d:"Further training of a ready-made model on specific examples, to specialise it on a topic.",
      gl_inf_t:"Inference",
      gl_inf_d:"Using the model to produce an answer, which is different from training it.",
      gl_par_t:"Billions of parameters",
      gl_par_d:"Measures the size of a model: more parameters usually mean more capability, but also more memory and time to answer.",
      gl_hal_t:"Invented information",
      gl_hal_d:"Answers that sound plausible but do not match the facts or the sources. Also called “hallucinations”.",
      gl_loc_t:"Local",
      gl_loc_d:"The model runs on computers controlled by the organisation, without sending data to outside services.",
      gl_tools_t:"Hugging Face, Ollama, Unsloth, Google Colab",
      gl_tools_d:"Tools: Hugging Face is the site where open models are downloaded, Ollama is the program that runs them on your own computer, Unsloth makes fine-tuning faster, Google Colab is the service that lends computing power in the cloud.",
      gl_quant_t:"Quantization",
      gl_quant_d:"Reducing the precision of the numbers a model is stored in, so it takes less memory and runs on ordinary computers, usually with a slight loss of quality.",
      new_tab_hint:" (opens in a new tab)",
      copy_email:"Copy email address",
      copy_done:"Copied to clipboard",
      footer_place:"© 2026 Nicolò Forcolin, Padua, Italy.",
      colophon_note:"Personal website. The activities described here are presented in a personal capacity.",
      footer_privacy_link:"Privacy notice",
      privacy_title:"Privacy notice",
      privacy_intro:"This site uses aggregated visit analytics without tracking cookies. It collects personal data only if you write to me through the contact form.",
      privacy_s1_h:"Data controller",
      privacy_s1_pre:"Nicolò Forcolin, Padua, Italy. For any request about this notice, message me on ",
      privacy_s1_post:".",
      privacy_s2_h:"Aggregated analytics",
      privacy_s2_p:"The site counts page views and estimates unique visitors for each day. The estimate uses a pseudonymous identifier that changes every day and is derived from IP address and user agent, which this site does not store (the technical server logs kept by Vercel are described below). It also records, in aggregate form, which site you came from (for example LinkedIn), using only the name of the referring site or the utm_source parameter of the link, never the full address. It uses no tracking cookies and does not follow visitors from one day to the next, so a Do Not Track or Global Privacy Control signal from the browser changes nothing. Administrator login uses essential authentication cookies. Aggregates are stored on Upstash Redis.",
      privacy_s3_h:"Server technical logs",
      privacy_s3_pre:"The site is hosted on ",
      privacy_s3_post:", which for security and network operation purposes automatically records standard technical logs for every HTTP request (e.g. IP address, user agent, requested page, date and time). These logs are managed directly by Vercel under its own privacy policy and are not used by this site for profiling purposes.",
      privacy_s3b_h:"Legal basis and retention",
      privacy_s3b_p:"I process this data on the basis of my legitimate interest in knowing how many people visit the site and keeping it secure (Art. 6(1)(f) GDPR). Aggregate statistics are kept for 90 days and then deleted automatically. Technical logs are kept by Vercel under its own policy. Vercel and Upstash may process data outside the European Economic Area: the safeguards they use are described in their privacy policies.",
      privacy_s4_h:"Data shown on the site",
      privacy_s4_p:"The contact details (email, Instagram, LinkedIn) published on the home page are the site author’s own personal data, shown voluntarily so people can get in touch. The site doesn’t collect or process them: they’re simply printed on the page. The photos in the Instagram section are copies hosted on this site: opening the page does not contact Instagram. Following a link to Instagram takes you to their service, which has its own privacy policy.",
      privacy_s5_h:"Your rights",
      privacy_s5_p:"You can ask me for access, deletion, correction or to object by email or by messaging me on LinkedIn. For messages sent through the contact form these rights apply in full; for the analytics they apply to the extent they cover pseudonymous data I cannot link back to a person. You also have the right to complain to the Italian data protection authority, the Garante (garanteprivacy.it).",
      privacy_s6_h:"Changes to this notice",
      privacy_s6_p:"This notice is updated if the tools used by the site change. The version in force is always the one published on this page.",
      privacy_updated:"Last updated: November 2026.",
      page_title_contact:"Contact | Nicolò Forcolin",
      page_description_contact:"Tell me what your team does and where it loses time: a form to write to Nicolò Forcolin and set up a call or a coffee.",
      contact_title:"Let’s grab a coffee",
      contact_lead:"Tell me what your team does and where it loses time every day. I read every message myself and reply to set up a call or a coffee. If AI isn’t the answer, I’ll tell you.",
      contact_name:"Full name",
      contact_email:"Email",
      contact_org:"Company or organisation",
      contact_kind:"Type of organisation",
      contact_kind_none:"Choose",
      contact_kind_pa:"Public administration",
      contact_kind_pmi:"Small or medium business",
      contact_kind_pro:"Independent professional",
      contact_kind_other:"Other",
      contact_phone:"Phone, if you prefer a call",
      contact_message:"What your team does and where it loses time",
      contact_message_hint:"A few lines are enough: what you do, which task takes up the most time, which tools you use today.",
      contact_err_name:"Please enter your name.",
      contact_err_email:"Please enter a valid email address.",
      contact_err_phone:"Please check the phone number.",
      contact_err_message:"Please write at least a few lines.",
      contact_privacy_pre:"I use this data only to reply to you and delete it after 12 months. Details are in the ",
      contact_privacy_link:"privacy notice",
      contact_privacy_post:".",
      contact_send:"Send the request",
      contact_status_sending:"Sending…",
      contact_status_ok:"Message received. I’ll reply to the address you gave.",
      contact_status_invalid:"Please check the marked fields.",
      contact_status_rate:"Several messages have already come from this network today. Try again tomorrow or email me.",
      contact_status_error:"The message didn’t go through. Try again shortly or email me.",
      contact_alt:"You can also email me:",
      collab_coffee:"Let’s grab a coffee and talk it over.",
      collab_wait:"AI can wait for the second round.",
      privacy_form_h:"Contact form",
      privacy_form_p:"If you write to me from the Contact page, I store your name, email, company or organisation, type of organisation, phone number (if you give one) and the text of your message, together with the date and the page language. I use them only to reply and to see whether I can help, at your request (Art. 6(1)(b) GDPR). They are stored on Upstash Redis, only I read them and I don’t pass them on to anyone. They are deleted after 12 months, or earlier if you ask. To limit spam, the site counts the messages sent in a day using a pseudonymous identifier derived from the IP address, which is deleted after 24 hours. When a message arrives, the site also forwards it in full to my personal Telegram account so I can read it right away. Telegram may process the data outside the European Economic Area under its own privacy policy; I delete the forwarded message within the same 12 months.",
      hero_cta2:"Projects and Initiatives",
      sec_localai_title:"Local AI",
      for_whom_label:"For whom",
      for_whom_text:"Companies, SMEs, professionals and public administrations that want to keep their data under control: I tested local AI models on specific questions and dedicated datasets, and I describe the results and limits.",
      for_whom_text2:"Those leading digital transformation: at InfoCamere I started from operational needs, launched an AI assistant that answers from company documents and improve it with user feedback. I have also supported colleagues from other units.",
      for_whom_text3:"Startups and international projects: AI consulting for the CEO of DABO, then in the team for “Sprint Forward in Golden Boots” in China.",
      for_whom_link:"Local AI",
      for_whom_profile:"Google Developer",
      sec_lavori:"Projects",
      sec_other:"Other initiatives",
      c1_status_ic:"InfoCamere, in production since 2026",
      c2_status_ic:"InfoCamere, experiment completed in 2026",
      club_desc:"A professional community dedicated to respectful relationships and kind leadership.",
      c1_summary:"I unified two working RAG systems into a single access point, with more company sources connected. Users write the question the way they would ask a colleague: the answer puts what is needed right now first, then possible causes, procedures, similar cases and links to the sources.",
      c2_summary:"On 100 test questions, 80 answers were correct and answers improved on the starting models. Invented information remained, less often in the better-performing models. These are observations on a small sample, not a measure of accuracy that holds in general. It was a test, and for now it was decided not to take it further.",
      c2_unpub:"Some of the test data cannot be published and does not appear here.",
      case_results_label:"Results and limitations",
      case_problem_label:"Goal",
      case_solution_label:"What I did",
      case_learning_label:"Learning",
      case1_title:"Enterprise RAG",
      c1_status:"In production since 2026",
      case_fact_status:"Status",
      case_fact_users:"Used by",
      case_fact_users_v:"14 users: the Manager and 13 of their collaborators",
      c1_problem:"Cut the time needed to rebuild the context of an issue, starting from information scattered across different tools and keeping costs down.",
      c1_impact:"An AI assistant (RAG) that answers teams’ questions from the company’s own documents, with the sources in view. It handles operational issues and middle-management analyses faster.",
      c1_learning:"After the launch, some users kept searching by hand. Slowdowns and gaps in the data came up: a tool that works is not enough. I worked on the user manual and on talking directly with users. Before extending an assistant like this you need reliable sources and clear instructions on how to use it.",
      case2_title:"Local AI Experiment",
      case2_short:"Local AI",
      c2_status:"Experiment completed in 2026",
      site_title:"This website",
      site_status:"Online",
      site_desc:"The site is built with Claude Code, Anthropic’s AI coding assistant. Structure, copy and visual choices are mine and I review the result of every change; the AI writes the code and the tests.",
      c2_problem:"An informal internal test to evaluate specialised models on InfoCamere-related questions. The goals: more control over data, potentially lower costs and less dependence on external vendors.",
      c2_solution:"I chose Llama 3.1 8B, Gemma 2B, Gemma 4 E2B and Gemma 4 31B on Hugging Face, in different sizes (from 2 to 31 billion parameters). With specific datasets prepared together with a top manager I trained them further (fine-tuning with Unsloth and LoRA) on Google Colab, using company PCs, accounts and data, then ran them locally with Ollama.",
      c2_learning:"The further training improved answers on the topics tried, but did not remove invented information. The limit that emerged: telling a plausible answer from a correct one. To put it into use you would need repeatable tests, acceptance criteria set beforehand and a check of the answers against the sources.",
      dabo_title:"DABO, advisory and international bid",
      dabo_desc:"Consulting for the CEO of DABO, then in the team for the application to the “Sprint Forward in Golden Boots Innovation & Entrepreneurship Competition” at the Saichuang Weilai (SCWL) Southeast Asia InnoTech Center, in China. The journey ended at the international stage in Singapore, on 12 September 2026.",
      c2_lead:"A test of open AI models trained on specific questions and run locally, without sending data outside.",
      advisory_label:"External advisory",
      community_label:"Community",
      club_title:"Club degli Uomini Gentili",
      case_flow_label:"How it evolved",
      page_title_rag:"Enterprise RAG | Nicolò Forcolin",
      page_description_rag:"An AI assistant that answers from company documents and cites its sources, to handle operational issues and middle-management analyses faster. In production since 2026.",
      page_title_local:"Local AI Experiment | Nicolò Forcolin",
      page_description_local:"A test of open AI models (Llama, Gemma) trained on specific questions and run locally with Ollama, without sending data outside.",
      home_ig_note:"Copies hosted on this site, with views as of November 2026.",
      ig_views:"views",
      ig_alt1:"A street in Brussels seen from above, with a church in the background and a cloudy sky.",
      ig_alt2:"Portrait of Nicolò Forcolin on an orange background, wearing a leather jacket and a black turtleneck.",
      ig_alt3:"A terrace in the evening with white tables, lit lanterns and blue cushions.",
      page_title_projects:"Projects and Initiatives | Nicolò Forcolin",
      page_description_projects:"Nicolò Forcolin’s AI projects and consulting, training and community initiatives.",
      projects_lead:"The AI projects I follow and the consulting, training and community initiatives that go with them.",
      c1_lead:"An AI assistant that answers from the company’s documents and cites its sources, to handle operational issues and middle-management analyses faster.",
      project_read:"Read the project",
      page_title_privacy:"Privacy notice | Nicolò Forcolin",
      page_description_privacy:"Privacy notice for Nicolò Forcolin’s personal website: aggregated analytics without tracking cookies, and personal data only from the contact form.",
    }
  };

  /* Contatti: costruiti a runtime e mostrati solo dopo un click, per limitare la raccolta automatica. */
  var copyIcon = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>';
  function copyBtn(value, i18nKey){
    return '<button type="button" class="copy-btn" data-copy-value="' + value.replace(/"/g,"&quot;") + '" data-i18n-aria="' + i18nKey + '">' + copyIcon + '</button>';
  }
  function bindCopyButtons(scope){
    scope.querySelectorAll(".copy-btn").forEach(function(btn){
      btn.addEventListener("click", function(){
        var value = btn.getAttribute("data-copy-value");
        if(navigator.clipboard && navigator.clipboard.writeText){
          navigator.clipboard.writeText(value).then(function(){
            var announcer = document.getElementById("themeAnnouncer");
            if(announcer) announcer.textContent = activeDict().copy_done || "Copiato";
          }).catch(function(){});
        }
      });
    });
  }
  (function(){
    var em = ["nic.forcolin", "gmail.com"].join("@");
    function emailLink(){
      return '<a href="mailto:' + em + '">' + em + "</a>" + copyBtn(em, "copy_email");
    }
    ["homeEmail", "contactEmail"].forEach(function(id){
      var box = document.getElementById(id);
      if(box){ box.innerHTML = emailLink(); bindCopyButtons(box); }
    });
  })();

  /* Modulo della pagina contatti: controlli nel browser, invio a /api/contact/send, esito in una riga di stato. */
  (function(){
    var form = document.getElementById("contactForm");
    if(!form) return;
    var status = document.getElementById("contactStatus");
    var button = form.querySelector('button[type="submit"]');
    var FIELDS = ["name", "email", "phone", "message"];
    function say(key){ status.textContent = activeDict()[key] || ""; }
    function value(name){ return (form.elements[name].value || "").trim(); }
    function mark(name, bad){
      var input = form.elements[name], error = document.getElementById("cf-" + name + "-err");
      if(input) input.setAttribute("aria-invalid", bad ? "true" : "false");
      if(error) error.hidden = !bad;
    }
    function check(){
      var bad = [];
      if(value("name").length < 2) bad.push("name");
      if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value("email"))) bad.push("email");
      if(value("phone") && !/^[+0-9 ()./-]{6,40}$/.test(value("phone"))) bad.push("phone");
      if(value("message").length < 20) bad.push("message");
      FIELDS.forEach(function(name){ mark(name, bad.indexOf(name) >= 0); });
      return bad;
    }
    form.addEventListener("input", function(e){
      if(e.target.getAttribute("aria-invalid") === "true") mark(e.target.name, false);
    });
    form.addEventListener("submit", function(e){
      e.preventDefault();
      var bad = check();
      if(bad.length){ say("contact_status_invalid"); form.elements[bad[0]].focus(); return; }
      button.disabled = true;
      say("contact_status_sending");
      var body = { name: value("name"), email: value("email"), org: value("org"), kind: form.elements.kind.value, phone: value("phone"), message: value("message"), website: form.elements.website.value, lang: lang };
      fetch("/api/contact/send", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) })
        .then(function(r){ return r.json().catch(function(){ return {}; }).then(function(data){ return { code: r.status, data: data }; }); })
        .then(function(res){
          if(res.code === 200 && res.data.ok){ form.reset(); say("contact_status_ok"); }
          else if(res.code === 429) say("contact_status_rate");
          else if(res.code === 400 && res.data.errors){ res.data.errors.forEach(function(name){ mark(name, true); }); say("contact_status_invalid"); }
          else say("contact_status_error");
        })
        .catch(function(){ say("contact_status_error"); })
        .then(function(){ button.disabled = false; });
    });
  })();

  /* Il tema segue le preferenze del browser (CSS); si ignorano quelle salvate da versioni precedenti. */
  try { localStorage.removeItem("nfTheme"); } catch(e) {}

  var root = document.documentElement;
  /* Larghezza della barra di scorrimento, per le righe a tutta larghezza (100vw). */
  function syncScrollbar(){ root.style.setProperty("--sb", (window.innerWidth - root.clientWidth) + "px"); }
  syncScrollbar();
  window.addEventListener("resize", syncScrollbar);
  var LANG_KEY = "nfLang";
  var savedLang = null;
  /* La scelta IT/EN vale solo per la visita in corso (sessionStorage): a ogni
     nuova visita il sito segue di nuovo la lingua del browser. Le scelte salvate
     in modo permanente dalle versioni precedenti vengono cancellate. */
  try{ localStorage.removeItem(LANG_KEY); }catch(e){}
  try{ savedLang = sessionStorage.getItem(LANG_KEY); }catch(e){}
  /* Senza una scelta salvata, chi non ha il browser in italiano vede il sito in inglese. */
  var browserLang = ((navigator.languages && navigator.languages[0]) || navigator.language || "it").toLowerCase();
  /* Italiano e inglese stanno in questo file; il cinese è in un file a parte,
     caricato solo quando serve. Il cinese tradizionale non c'è: chi lo usa vede l'inglese. */
  var EXTRA_LANGS = { zh: "i18n-zh.js" };
  var HTML_LANG = { it: "it", en: "en", zh: "zh-Hans" };
  function browserChoice(){
    if(browserLang.indexOf("it") === 0) return "it";
    if(/^zh(-(cn|sg|hans))?$/.test(browserLang)) return "zh";
    return "en";
  }
  var lang = HTML_LANG[savedLang] ? savedLang : browserChoice();
  function activeDict(){
    return i18n[lang] || (window.NF_I18N && window.NF_I18N[lang]) || i18n.en;
  }
  function setLang(next){
    lang = next;
    if(i18n[lang] || !EXTRA_LANGS[lang] || (window.NF_I18N && window.NF_I18N[lang])){ applyLang(); return; }
    var tag = document.createElement("script");
    tag.src = EXTRA_LANGS[lang];
    tag.onload = applyLang;
    tag.onerror = function(){ lang = "en"; applyLang(); };
    document.head.appendChild(tag);
  }
  /* Ogni pagina dichiara data-page sul body; la home usa le chiavi senza suffisso. */
  var page = document.body.getAttribute("data-page");
  var suffix = (page && page !== "home") ? "_" + page : "";

  /* ---- paragrafo di presentazione nella home ---- */
  var introEl = document.getElementById("heroIntro");
  function renderIntro(){
    if(!introEl) return;
    introEl.textContent = "";
    activeDict().hero_intro.forEach(function(segs){
      var para = document.createElement("p");
      segs.forEach(function(seg){
        if(seg.href){
          var a = document.createElement("a");
          a.href = seg.href;
          /* Link esterni in una nuova scheda; quelli interni restano nella stessa e prendono lo stile dei link della home. */
          if(/^https?:/.test(seg.href)){
            a.target = "_blank";
            a.rel = "noopener noreferrer";
          }else{
            a.className = "home-text-link";
          }
          a.textContent = seg.t;
          para.appendChild(a);
        }else if(seg.b){
          var strong = document.createElement("strong");
          strong.textContent = seg.t;
          para.appendChild(strong);
        }else{
          para.appendChild(document.createTextNode(seg.t));
        }
      });
      introEl.appendChild(para);
    });
  }

  /* ---- lingua ---- */
  function applyLang(){
    root.lang = HTML_LANG[lang];
    var dict = activeDict();
    if(dict["page_title" + suffix]) document.title = dict["page_title" + suffix];
    var pageDescription = document.querySelector('meta[name="description"]');
    if(pageDescription && dict["page_description" + suffix]) pageDescription.setAttribute("content", dict["page_description" + suffix]);
    document.querySelectorAll("[data-i18n]").forEach(function(el){
      var k = el.getAttribute("data-i18n");
      var alt = (el.getAttribute("data-i18n-hash") || "").split(":");
      if(alt[0] && location.hash === "#" + alt[0]) k = alt[1];
      if(dict[k] !== undefined){ el.textContent = dict[k]; }
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function(el){
      var k = el.getAttribute("data-i18n-aria");
      if(dict[k] !== undefined){ el.setAttribute("aria-label", dict[k]); }
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function(el){
      var k = el.getAttribute("data-i18n-alt");
      if(dict[k] !== undefined){ el.setAttribute("alt", dict[k]); }
    });
    document.querySelectorAll(".lang-btn").forEach(function(b){
      var selected = b.getAttribute("data-lang") === lang;
      b.classList.toggle("on", selected);
      b.setAttribute("aria-pressed", String(selected));
      if(selected){
      }
    });
    renderIntro();
  }
  if(document.querySelector("[data-i18n-hash]")) window.addEventListener("hashchange", applyLang);
  document.querySelectorAll(".lang-btn").forEach(function(b){
    b.addEventListener("click", function(){
      try{ sessionStorage.setItem(LANG_KEY, b.getAttribute("data-lang")); }catch(e){}
      setLang(b.getAttribute("data-lang"));
    });
  });

  setLang(lang);
})();
