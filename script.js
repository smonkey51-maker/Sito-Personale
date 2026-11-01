(function(){
  var i18n = {
    it: {
      local_how_privacy:"Le richieste vengono elaborate in locale, senza inviare dati all’esterno.",
      local_flow_aria:"Fasi della sperimentazione",
      local_how_note:"Lo schema riassume le fasi della sperimentazione, senza riferimenti a configurazioni interne.",
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
      menu_label:"Menu del sito",
      how_flow_aria:"Schema del funzionamento",
      how_c4:"Risposta con riferimenti alle fonti",
      how_c3:"Ricerca nei contenuti indicizzati",
      how_c2:"Elaborazione e indicizzazione",
      how_c1:"Contenuti aziendali autorizzati",
      how_p3:"Il sistema genera una risposta sintetica e contestualizzata, basata sui contenuti trovati, con riferimenti alle fonti originali per consentire la verifica e l’approfondimento.",
      how_p2:"I contenuti vengono elaborati e indicizzati per consentire una ricerca efficace. La richiesta dell’utente viene confrontata con gli indici per individuare i passaggi più rilevanti e pertinenti.",
      how_p1:"Il sistema utilizza contenuti aziendali autorizzati, provenienti da diverse aree, come documentazione tecnica, knowledge base e sistemi di gestione operativa.",
      how_note:"Lo schema mostra il funzionamento in termini generali, senza dettagli interni o informazioni riservate.",
      rag_fig_label:"Un solo punto di accesso",
      rag_fig_aria:"Figura: una testina di lettura sceglie una fra quattro fonti.",
      rag_fig_svg:"Quattro archivi in fila e una sola testina di lettura che scorre su una guida davanti a loro. Dove si ferma, l’archivio sotto la testina si apre.",
      rag_fig_hint:"Scegli una fonte:",
      rag_fig_start:"Un solo punto di accesso per le fonti aziendali.",
      rag_fig_reading:"La testina sta leggendo {name}.",
      rag_fig_src1:"Ticket",
      rag_fig_src2:"Inventario",
      rag_fig_src3:"Documenti",
      rag_fig_src4:"Procedure",
      how_lead:"Il sistema integra contenuti aziendali autorizzati, li rende ricercabili e fornisce risposte con riferimenti alle fonti.",
      case_how_label:"Come funziona",
      c1_feedback:"Oggi lo strumento è usato da un’intera Unità Operativa, che ne dà un riscontro positivo.",
      case_issues_label:"Problematiche e feedback",
      outside_desc:"Audiofilo e musicista.",
      outside_label:"Fuori dal lavoro",
      page_description_experience:"Il percorso di Nicolò Forcolin: dal Service Desk di InfoCamere alla responsabilità del RAG aziendale e all’advisory sull’AI.",
      page_title_experience:"Percorso | Nicolò Forcolin",
      experience_lead:"Dal lavoro a contatto con i clienti al Service Desk di InfoCamere, fino alla responsabilità del RAG aziendale e all’advisory sull’AI.",
      page_title_notfound:"Pagina non trovata | Nicolò Forcolin",
      page_description_notfound:"La pagina che cercavi non esiste o è stata spostata.",
      nf_title:"Pagina non trovata",
      nf_lead:"L’indirizzo non esiste o la pagina è stata spostata.",
      nf_where:"Dove andare",
      nf_home:"Home",
      nf_error:"Se pensi che sia un errore, scrivimi:",
      sec_percorso:"Percorso",
      xp5_link:"Vedi le iniziative",
      xp5_desc:"Su richiesta di colleghi di altre Unità li ho affiancati, in gruppo e singolarmente, nell’uso dell’AI: i loro tool in produzione sono migliorati, più strumenti sono stati riuniti in uno solo e sono arrivate nuove richieste. Sono Social Ambassador di InfoCamere e nel 2026 ho fornito advisory sull’AI al CEO di DABO.",
      xp5_title:"Advisory e adozione dell’AI",
      xp5_period:"Dal 2025",
      xp4_link:"Leggi il progetto RAG",
      xp4_desc:"Con il mio Responsabile ho definito le esigenze operative; ho scelto lo strumento, realizzato e messo in produzione due sistemi RAG, li ho unificati e ne seguo fonti, webapp, test e adozione, coordinandomi con altre Unità e con il middle e top management. Oggi lo usa un’intera Unità Operativa e riduce il tempo per gestire una criticità e per l’analisi post evento. In parallelo ho condotto una sperimentazione di modelli AI in locale.",
      xp4_title:"Responsabile del RAG aziendale, InfoCamere",
      xp4_period:"Dal 2026",
      xp3_desc:"Supporto operativo all’infrastruttura IT del sistema camerale italiano, con attenzione all’affidabilità del servizio.",
      xp3_title:"Service Desk, InfoCamere",
      xp3_period:"Dal 2022",
      xp2_desc:"Primo ruolo operativo nell’IT: supporto infrastrutturale e troubleshooting. Borsa di studio Google per WorkInTech, prima edizione italiana.",
      xp2_title:"Specialista IT in stage, IdeaGrip",
      xp2_period:"Feb – Set 2022",
      xp1_desc:"In contatto diretto con il cliente, in un settore molto regolamentato.",
      xp1_title:"Consulente assicurativo, Assicurazioni Generali",
      xp1_period:"Ott 2020 – Feb 2022",
      adv_internal_desc:"Su loro richiesta, in incontri di gruppo e individuali, ho mostrato come usare i propri strumenti di lavoro e l’AI per rendere più efficaci i tool in produzione. Dopo gli incontri i loro tool sono migliorati, più strumenti sono stati riuniti in uno solo e sono arrivate nuove richieste.",
      adv_internal_title:"Consulenza interna sull’AI per i colleghi",
      adv_internal_meta:"Dal 2025",
      advisory_internal_label:"Advisory interna",
      advisory_section:"Advisory",
      c1_role3_v:"test, gestione dei problemi, raccolta dei feedback e adozione.",
      c1_role3_k:"Con gli utenti:",
      c1_role2_v:"implementazione e messa in produzione dei due sistemi RAG, loro unificazione, integrazione delle fonti, webapp, logica delle risposte e manuale operativo.",
      c1_role2_k:"In prima persona:",
      c1_role1_v:"definizione delle esigenze operative.",
      c1_role0_k:"Le mie decisioni:",
      c1_role0_v:"scelta dello strumento.",
      c1_role1_k:"Con il mio Responsabile:",
      c1_role4_k:"Con altre Unità, middle e top management:",
      c1_role4_v:"coordinamento del progetto.",
      case_role_label:"Il mio ruolo",
      enablement_label:"Formazione e adozione",
      enablement_title:"Condividere l’esperienza sul campo",
      enablement_desc:"Ho partecipato come relatore a incontri interni sull’AI. Dal 2025 sono anche Social Ambassador di InfoCamere: promuovo la cultura digitale e condivido l’esperienza maturata nel lavoro.",
      credentials_note:"Questi riferimenti distinguono le credenziali dai programmi di community e dallo stato di iscrizione. Il lavoro applicato è documentato nelle pagine dei progetti.",
      hero_greeting:"Ciao, sono Nicolò Forcolin",
      hero_intro:[
        [{t:"Porto l’AI generativa nel lavoro quotidiano di InfoCamere. Ho scelto e messo in produzione l’assistente AI che oggi usa un’intera Unità Operativa: riduce i tempi di gestione delle criticità e dell’analisi post evento."}],
        [{t:"Su richiesta di colleghi di altre Unità li ho affiancati nell’uso dell’AI."}]
      ],
      skip_to_content:"Vai al contenuto",
      page_title:"Nicolò Forcolin | AI generativa in InfoCamere",
      page_description:"Porto l’AI generativa nel lavoro quotidiano di InfoCamere. L’assistente AI che ho scelto e messo in produzione oggi lo usa un’intera Unità Operativa e riduce i tempi di gestione delle criticità e dell’analisi post evento.",
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
      local_step1_desc:"Dati preparati con il top management per le prove.",
      local_step2_title:"Qwen, Gemma e Llama",
      local_step2_desc:"Fine-tuning con Unsloth in un ambiente aziendale.",
      local_step3_title:"Ollama e demo locali",
      local_step3_desc:"Inferenza e dimostrazioni in locale.",
      back_to_site:"Torna alla home",
      colophon_title:"Contatti",
      colophon_note:"Sito personale. Le attività descritte sono presentate a titolo personale.",
      new_tab_hint:" (si apre in una nuova scheda)",
      copy_phone:"Copia numero di telefono",
      copy_done:"Copiato negli appunti",
      reveal_phone:"Mostra telefono",
      footer_place:"© 2026 Nicolò Forcolin, Padova, Italia.",
      footer_privacy_link:"Informativa privacy",
      privacy_title:"Informativa sulla privacy",
      privacy_intro:"Questo sito utilizza statistiche aggregate delle visite, senza cookie di tracciamento. Non raccoglie dati tramite moduli.",
      privacy_s1_h:"Titolare del trattamento",
      privacy_s1_pre:"Nicolò Forcolin, Padova, Italia. Per qualsiasi richiesta relativa a questa informativa puoi scrivermi su ",
      privacy_s1_post:".",
      privacy_s2_h:"Statistiche aggregate",
      privacy_s2_p:"Il sito conta le pagine visitate e stima i visitatori unici di ogni giorno. Per la stima usa un identificativo pseudonimo che cambia ogni giorno e deriva da indirizzo IP e user agent, che non vengono conservati. Non usa cookie di tracciamento e non segue i visitatori da un giorno all’altro, quindi il segnale Do Not Track o Global Privacy Control del browser non cambia nulla. L’accesso amministrativo usa cookie tecnici di autenticazione. I dati aggregati sono conservati su Upstash Redis.",
      privacy_s3_h:"Log tecnici del server",
      privacy_s3_pre:"Il sito è ospitato su ",
      privacy_s3_post:", che per ragioni di sicurezza e funzionamento della rete registra in modo automatico i log tecnici standard di ogni richiesta HTTP (ad es. indirizzo IP, user agent, pagina richiesta, data e ora). Questi log sono gestiti direttamente da Vercel secondo la propria informativa privacy e non vengono utilizzati da questo sito per finalità di profilazione.",
      privacy_s3b_h:"Base giuridica, conservazione e trasferimenti",
      privacy_s3b_p:"Tratto questi dati in base al legittimo interesse a sapere quante persone visitano il sito e a tenerlo sicuro (art. 6, par. 1, lett. f, GDPR). Le statistiche aggregate sono conservate per 90 giorni e poi cancellate automaticamente. I log tecnici sono conservati da Vercel secondo la sua informativa. Vercel e Upstash possono trattare i dati anche fuori dallo Spazio economico europeo: le garanzie che adottano sono descritte nelle loro informative.",
      privacy_s4_h:"Dati mostrati sul sito",
      privacy_s4_p:"I recapiti (telefono, LinkedIn) pubblicati nella sezione Contatti sono dati personali dell’autore del sito, mostrati volontariamente per essere contattato. Il sito non li raccoglie né li elabora: sono semplicemente stampati nella pagina.",
      privacy_s5_h:"I tuoi diritti",
      privacy_s5_p:"Puoi chiedermi accesso, cancellazione, rettifica e opposizione scrivendomi su LinkedIn, nei limiti in cui si applicano a dati pseudonimi che non posso ricollegare a una persona. Hai anche il diritto di presentare reclamo al Garante per la protezione dei dati personali (garanteprivacy.it).",
      privacy_s6_h:"Modifiche a questa informativa",
      privacy_s6_p:"Questa informativa viene aggiornata se cambiano gli strumenti usati dal sito. La versione in vigore è sempre quella pubblicata su questa pagina.",
      privacy_updated:"Ultimo aggiornamento: novembre 2026.",
      cm_phone:"Telefono",
      hero_cta1:"Progetto RAG",
      hero_cta2:"Progetti ed Iniziative",
      sec_localai_title:"AI in locale",
      sec_lavori:"Progetti",
      club_desc:"Community professionale dedicata a relazioni rispettose e a una leadership gentile.",
      c1_summary:"Ho unificato due sistemi RAG già funzionanti per offrire un unico punto di accesso. Ho integrato diverse fonti aziendali. Nella webapp gli utenti pongono domande in linguaggio naturale: la risposta presenta prima le informazioni utilizzabili subito, poi possibili cause, procedure, casi simili e link alle fonti.",
      c2_summary:"Nelle prove esplorative, le risposte miglioravano rispetto ai modelli di partenza e risultavano corrette nella maggior parte delle situazioni osservate. Restavano informazioni inventate, meno frequenti nei modelli più performanti. Queste osservazioni non costituiscono una misura di accuratezza generalizzabile. Era un test: per ora si è scelto di non portarlo avanti.",
      case_results_label:"Risultati e limiti",
      case_problem_label:"Problema",
      case_solution_label:"Soluzione",
      case_learning_label:"Cosa ho imparato",
      case1_title:"RAG aziendale",
      c1_status:"In produzione dal 2026",
      c1_problem:"Informazioni utili distribuite tra strumenti diversi. Ricostruire il contesto di una criticità richiedeva ricerche separate e tempo, mentre la risoluzione doveva essere rapida. Il costo andava contenuto.",
      c1_impact:"Meno tempo per gestire una criticità e per l’analisi post evento, per il Service Desk e l’Incident & Problem Management.",
      c1_learning:"Dopo il rilascio, alcuni utenti continuavano a cercare a mano. Sono emersi rallentamenti e lacune nei dati: un modello funzionante non bastava. Ho lavorato sulla documentazione operativa e parlando direttamente con gli utenti. Prima di ampliare un RAG servono fonti affidabili e istruzioni chiare sul suo uso.",
      case2_title:"Sperimentazione AI in locale",
      c2_status:"Sperimentazione conclusa nel 2026",
      c2_problem:"Sperimentazione interna informale per valutare modelli specializzati su domande relative a InfoCamere. Le motivazioni erano esplorare un maggiore controllo sui dati, minori costi potenziali e meno dipendenza da fornitori esterni.",
      c2_solution:"Ho selezionato modelli Qwen, Gemma e Llama tramite Hugging Face. Con dataset specifici preparati insieme al top management ho svolto il fine-tuning con Unsloth in un ambiente aziendale, poi ho eseguito i modelli in locale con Ollama.",
      c2_learning:"Il fine-tuning ha migliorato le risposte sui temi provati, ma non ha eliminato le informazioni inventate. Il limite emerso è stato distinguere una risposta plausibile da una corretta. Per valutare un impiego operativo servirebbero prove ripetibili, criteri di accettazione e una verifica delle risposte rispetto alle fonti.",
      sec_experiences:"Iniziative",
      dabo_title:"DABO, consulenza e candidatura internazionale",
      dabo_desc:"Ho fornito advisory al CEO di DABO su temi di intelligenza artificiale. Dopo questa consulenza sono entrato come esperto AI nel team SCWL, candidato a “Sprint Forward”, iniziativa internazionale a Shangcheng, in Cina.",
      sec_badge:"Credenziali",
      badge1_title:"Gemini Enterprise Agent Ready",
      badge1_meta:"Credenziale, 2026",
      badge2_title:"Google Cloud Innovator",
      badge2_meta:"Programma community, 2025",
      badge3_title:"Google Developer Program, Premium Tier",
      badge3_meta:"Stato del programma, 2026",
      nav_main_label:"Navigazione principale",
      nav_toggle_label:"Menu",
      scroll_btn:"Entra nel sito",
      c2_lead:"Fine-tuning di modelli open su domande specifiche relative a InfoCamere, seguito da prove di esecuzione in locale.",
      initiatives_status:"Advisory e community, 2026",
      initiatives_lead:"Advisory sull’AI, formazione e community: le attività che affiancano il mio lavoro nei sistemi IT e il percorso di approfondimento su Google Cloud.",
      advisory_label:"Advisory esterna",
      community_label:"Community",
      club_title:"Club degli Uomini Gentili",
      badge_profile:"Vedi il profilo Google Developer",
      case_flow_label:"Come si è evoluto",
      next_label:"Continua a leggere",
      close:"Chiudi",
      page_title_rag:"RAG aziendale | Nicolò Forcolin",
      page_description_rag:"Un unico punto di accesso alle fonti aziendali per il Service Desk di InfoCamere, in produzione dal 2026.",
      page_title_local:"Sperimentazione AI in locale | Nicolò Forcolin",
      page_description_local:"Fine-tuning di modelli open (Qwen, Gemma, Llama) su domande relative a InfoCamere ed esecuzione in locale con Ollama.",
      page_title_initiatives:"Iniziative e credenziali | Nicolò Forcolin",
      page_description_initiatives:"Advisory interna ed esterna sull’AI, community professionali e credenziali Google di Nicolò Forcolin.",
      page_title_projects:"Progetti ed Iniziative | Nicolò Forcolin",
      page_description_projects:"I progetti AI in InfoCamere e le iniziative di advisory, formazione e community di Nicolò Forcolin.",
      projects_lead:"I progetti AI che seguo in InfoCamere e le iniziative di advisory, formazione e community che li affiancano.",
      c1_lead:"Un unico punto di accesso alle fonti aziendali, per ritrovare le informazioni quando si gestisce una criticità.",
      projects_initiatives_link:"Tutte le iniziative e le credenziali",
      project_read:"Leggi il progetto",
      page_title_privacy:"Informativa sulla privacy | Nicolò Forcolin",
      page_description_privacy:"Informativa sulla privacy del sito personale di Nicolò Forcolin: nessun cookie, nessun tracciamento, nessun dato raccolto tramite modulo.",
    },
    en: {
      local_how_privacy:"Requests are processed locally, without sending data outside.",
      local_flow_aria:"Stages of the experiment",
      local_how_note:"The diagram summarises the stages of the experiment, without references to internal configurations.",
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
      menu_label:"Site menu",
      how_flow_aria:"How-it-works diagram",
      how_c4:"Answer with references to the sources",
      how_c3:"Search across indexed content",
      how_c2:"Processing and indexing",
      how_c1:"Authorised company content",
      how_p3:"The system generates a concise, contextual answer based on the content found, with references to the original sources for checking and further reading.",
      how_p2:"Content is processed and indexed for effective search. The user’s request is matched against the indexes to find the most relevant passages.",
      how_p1:"The system uses authorised company content from different areas, such as technical documentation, knowledge bases and operations management systems.",
      how_note:"The diagram shows how it works in general terms, without internal details or confidential information.",
      rag_fig_label:"A single access point",
      rag_fig_aria:"Figure: a reading head picks one of four sources.",
      rag_fig_svg:"Four archives in a row and a single reading head that slides along a rail in front of them. Where it stops, the archive under the head opens.",
      rag_fig_hint:"Choose a source:",
      rag_fig_start:"A single access point for the company sources.",
      rag_fig_reading:"The head is reading {name}.",
      rag_fig_src1:"Tickets",
      rag_fig_src2:"Inventory",
      rag_fig_src3:"Documents",
      rag_fig_src4:"Procedures",
      how_lead:"The system brings together authorised company content, makes it searchable and answers with references to the sources.",
      case_how_label:"How it works",
      c1_feedback:"Today the tool is used by an entire Operating Unit, and their feedback is positive.",
      case_issues_label:"Issues and feedback",
      outside_desc:"Audiophile and musician.",
      outside_label:"Outside work",
      page_description_experience:"Nicolò Forcolin’s path: from InfoCamere’s Service Desk to owning the enterprise RAG and advising on AI.",
      page_title_experience:"Experience | Nicolò Forcolin",
      experience_lead:"From client-facing work to InfoCamere’s Service Desk, to owning the enterprise RAG and advising on AI.",
      page_title_notfound:"Page not found | Nicolò Forcolin",
      page_description_notfound:"The page you were looking for does not exist or has moved.",
      nf_title:"Page not found",
      nf_lead:"The address does not exist or the page has moved.",
      nf_where:"Where to go",
      nf_home:"Home",
      nf_error:"If you think this is a mistake, write to me:",
      sec_percorso:"Experience",
      xp5_link:"See the initiatives",
      xp5_desc:"At the request of colleagues from other units, I supported them, in groups and one to one, in using AI: their production tools improved, several tools were merged into one and new requests came in. I am an InfoCamere Social Ambassador, and in 2026 I advised the CEO of DABO on AI.",
      xp5_title:"AI advisory and adoption",
      xp5_period:"Since 2025",
      xp4_link:"Read the RAG project",
      xp4_desc:"With my manager I defined the operational needs; I chose the tool, built two RAG systems, put them into production and unified them, and I look after their sources, web app, testing and adoption, working with other units and with middle and top management. Today an entire Operating Unit uses it, and it cuts the time needed to handle an incident and to analyse it afterwards. In parallel I ran an experiment with local AI models.",
      xp4_title:"Enterprise RAG owner, InfoCamere",
      xp4_period:"Since 2026",
      xp3_desc:"Operational support for the IT infrastructure of the Italian Chambers of Commerce system, with a focus on service reliability.",
      xp3_title:"Service Desk, InfoCamere",
      xp3_period:"Since 2022",
      xp2_desc:"First hands-on IT role: infrastructure support and troubleshooting. Google scholarship for WorkInTech, first Italian edition.",
      xp2_title:"IT specialist intern, IdeaGrip",
      xp2_period:"Feb – Sep 2022",
      xp1_desc:"Working directly with clients in a heavily regulated sector.",
      xp1_title:"Insurance advisor, Assicurazioni Generali",
      xp1_period:"Oct 2020 – Feb 2022",
      adv_internal_desc:"At their request, in group and one-to-one sessions, I showed how to use their own work tools and AI to make production tools more effective. Afterwards their tools improved, several tools were merged into one and new requests came in.",
      adv_internal_title:"Internal AI advisory for colleagues",
      adv_internal_meta:"Since 2025",
      advisory_internal_label:"Internal advisory",
      advisory_section:"Advisory",
      c1_role3_v:"testing, issue handling, feedback and adoption.",
      c1_role3_k:"With users:",
      c1_role2_v:"building the two RAG systems and putting them into production, unifying them, integrating the sources, the web app, the response logic and the operating manual.",
      c1_role2_k:"Hands-on:",
      c1_role1_v:"defining the operational needs.",
      c1_role0_k:"My decisions:",
      c1_role0_v:"choosing the tool.",
      c1_role1_k:"With my manager:",
      c1_role4_k:"With other units, middle and top management:",
      c1_role4_v:"project coordination.",
      case_role_label:"My role",
      enablement_label:"Training and adoption",
      enablement_title:"Sharing practical experience",
      enablement_desc:"I have spoken at internal AI sessions. Since 2025, I have also been an InfoCamere Social Ambassador, promoting digital culture and sharing experience from my work.",
      credentials_note:"These references distinguish credentials from community programmes and membership status. Applied work is documented on the project pages.",
      hero_greeting:"Hi, I’m Nicolò Forcolin",
      hero_intro:[
        [{t:"I bring generative AI into everyday work at InfoCamere. I chose and put into production the AI assistant an entire Operating Unit now uses: it cuts the time spent handling incidents and on post-incident analysis."}],
        [{t:"At the request of colleagues from other units, I supported them in using AI."}]
      ],
      skip_to_content:"Skip to content",
      page_title:"Nicolò Forcolin | Generative AI at InfoCamere",
      page_description:"I bring generative AI into everyday work at InfoCamere. The AI assistant I chose and put into production is now used by an entire Operating Unit and cuts the time spent handling incidents and on post-incident analysis.",
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
      local_step1_desc:"Data prepared with top management for testing.",
      local_step2_title:"Qwen, Gemma and Llama",
      local_step2_desc:"Fine-tuning with Unsloth in a company environment.",
      local_step3_title:"Ollama and local demos",
      local_step3_desc:"Local inference and demonstrations.",
      back_to_site:"Back to home",
      colophon_title:"Contact",
      colophon_note:"Personal website. The activities described here are presented in a personal capacity.",
      new_tab_hint:" (opens in a new tab)",
      copy_phone:"Copy phone number",
      copy_done:"Copied to clipboard",
      reveal_phone:"Show phone number",
      footer_place:"© 2026 Nicolò Forcolin, Padua, Italy.",
      footer_privacy_link:"Privacy notice",
      privacy_title:"Privacy notice",
      privacy_intro:"This site uses aggregated visit analytics without tracking cookies and does not collect data through forms.",
      privacy_s1_h:"Data controller",
      privacy_s1_pre:"Nicolò Forcolin, Padua, Italy. For any request about this notice, message me on ",
      privacy_s1_post:".",
      privacy_s2_h:"Aggregated analytics",
      privacy_s2_p:"The site counts page views and estimates unique visitors for each day. The estimate uses a pseudonymous identifier that changes every day and is derived from IP address and user agent, which are not stored. It uses no tracking cookies and does not follow visitors from one day to the next, so a Do Not Track or Global Privacy Control signal from the browser changes nothing. Administrator login uses essential authentication cookies. Aggregates are stored on Upstash Redis.",
      privacy_s3_h:"Server technical logs",
      privacy_s3_pre:"The site is hosted on ",
      privacy_s3_post:", which for security and network operation purposes automatically records standard technical logs for every HTTP request (e.g. IP address, user agent, requested page, date and time). These logs are managed directly by Vercel under its own privacy policy and are not used by this site for profiling purposes.",
      privacy_s3b_h:"Legal basis, retention and transfers",
      privacy_s3b_p:"I process this data on the basis of my legitimate interest in knowing how many people visit the site and keeping it secure (Art. 6(1)(f) GDPR). Aggregate statistics are kept for 90 days and then deleted automatically. Technical logs are kept by Vercel under its own policy. Vercel and Upstash may process data outside the European Economic Area: the safeguards they use are described in their privacy policies.",
      privacy_s4_h:"Data shown on the site",
      privacy_s4_p:"The contact details (phone, LinkedIn) published in the Contact section are the site author’s own personal data, shown voluntarily so people can get in touch. The site doesn’t collect or process them: they’re simply printed on the page.",
      privacy_s5_h:"Your rights",
      privacy_s5_p:"You can ask me for access, deletion, correction or to object by messaging me on LinkedIn, to the extent these apply to pseudonymous data I cannot link back to a person. You also have the right to complain to the Italian data protection authority, the Garante (garanteprivacy.it).",
      privacy_s6_h:"Changes to this notice",
      privacy_s6_p:"This notice is updated if the tools used by the site change. The version in force is always the one published on this page.",
      privacy_updated:"Last updated: November 2026.",
      cm_phone:"Phone",
      hero_cta1:"RAG project",
      hero_cta2:"Projects and Initiatives",
      sec_localai_title:"Local AI",
      sec_lavori:"Projects",
      club_desc:"A professional community dedicated to respectful relationships and kind leadership.",
      c1_summary:"I unified two working RAG systems into one access point, integrating several company sources. Users ask questions in natural language through a web app. Responses prioritize actionable information, followed by possible causes, procedures, similar cases and links to original sources.",
      c2_summary:"In exploratory trials, responses improved over the base models and were correct in most observed situations. Fabricated information remained, less frequently with higher-performing models. These observations are not a generalisable accuracy measure. It was a test: for now the choice is not to take it further.",
      case_results_label:"Results and limitations",
      case_problem_label:"Problem",
      case_solution_label:"Solution",
      case_learning_label:"Learning",
      case1_title:"Enterprise Knowledge Retrieval",
      c1_status:"In production since 2026",
      c1_problem:"Useful information was scattered across different tools. Reconstructing an incident’s context took separate searches and time, while resolution had to be fast. Cost had to stay low.",
      c1_impact:"Less time spent handling incidents and analysing them afterwards, for the Service Desk and Incident & Problem Management.",
      c1_learning:"After the release, some users kept searching by hand. Slowdowns and gaps in the data came up: a working model was not enough. I worked on the operating documentation and talked directly with users. Before expanding a RAG you need reliable sources and clear instructions on how to use it.",
      case2_title:"Local AI Experiment",
      c2_status:"Experiment completed in 2026",
      c2_problem:"An informal internal experiment to evaluate models specialized in answering questions about InfoCamere, exploring data control, potential cost reductions and less reliance on external providers.",
      c2_solution:"I selected Qwen, Gemma and Llama models through Hugging Face. Using task-specific datasets prepared with top management, I fine-tuned them with Unsloth in a company environment, then ran the models locally with Ollama.",
      c2_learning:"Fine-tuning improved responses on the topics tested, but did not eliminate fabricated information. The limitation was distinguishing a plausible answer from a correct one. Assessing operational use would require repeatable evaluations, acceptance criteria and checks against source material.",
      sec_experiences:"Initiatives",
      dabo_title:"DABO, advisory and international bid",
      dabo_desc:"I provided AI advisory to the CEO of DABO. After this engagement I joined the SCWL team as its AI expert, for its application to “Sprint Forward”, an international initiative in Shangcheng, China.",
      sec_badge:"Credentials",
      badge1_title:"Gemini Enterprise Agent Ready",
      badge1_meta:"Credential, 2026",
      badge2_title:"Google Cloud Innovator",
      badge2_meta:"Community program, 2025",
      badge3_title:"Google Developer Program, Premium Tier",
      badge3_meta:"Program status, 2026",
      nav_main_label:"Main navigation",
      nav_toggle_label:"Menu",
      scroll_btn:"Enter the site",
      c2_lead:"Fine-tuning open models on specific InfoCamere-related questions, followed by local inference trials.",
      initiatives_status:"Advisory and community, 2026",
      initiatives_lead:"AI advisory, training and professional communities: activities alongside my work in IT systems and continued learning on Google Cloud.",
      advisory_label:"External advisory",
      community_label:"Community",
      club_title:"Club degli Uomini Gentili",
      badge_profile:"View the Google Developer profile",
      case_flow_label:"How it evolved",
      next_label:"Keep reading",
      close:"Close",
      page_title_rag:"Enterprise Knowledge Retrieval | Nicolò Forcolin",
      page_description_rag:"A single access point to company sources for InfoCamere’s Service Desk, in production since 2026.",
      page_title_local:"Local AI Experiment | Nicolò Forcolin",
      page_description_local:"Fine-tuning open models (Qwen, Gemma, Llama) on InfoCamere-related questions and running them locally with Ollama.",
      page_title_initiatives:"Initiatives and credentials | Nicolò Forcolin",
      page_description_initiatives:"Internal and external AI advisory, professional communities and Google credentials of Nicolò Forcolin.",
      page_title_projects:"Projects and Initiatives | Nicolò Forcolin",
      page_description_projects:"AI projects at InfoCamere and the advisory, training and community initiatives of Nicolò Forcolin.",
      projects_lead:"The AI projects I work on at InfoCamere and the advisory, training and community initiatives alongside them.",
      c1_lead:"A single access point to company sources, to find information when handling an incident.",
      projects_initiatives_link:"All initiatives and credentials",
      project_read:"Read the project",
      page_title_privacy:"Privacy notice | Nicolò Forcolin",
      page_description_privacy:"Privacy notice for Nicolò Forcolin’s personal website: no cookies, no tracking, no data collected through forms.",
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
            if(announcer) announcer.textContent = i18n[lang].copy_done || "Copiato";
          }).catch(function(){});
        }
      });
    });
  }
  function revealRow(elId, revealKey, defaultLabel, reveal){
    var el = document.getElementById(elId);
    if(!el) return;
    el.innerHTML = '<button type="button" class="reveal-btn lnk" data-i18n="' + revealKey + '">' + defaultLabel + "</button>";
    el.querySelector(".reveal-btn").addEventListener("click", function(){
      el.innerHTML = reveal();
      bindCopyButtons(el);
      applyLang();
    }, { once: true });
  }
  (function(){
    var pn = ["+39", "347", "908", "1966"];
    var phoneDisplay = pn.join(" ");
    var phoneHref = "tel:" + pn.join("");
    revealRow("cmPhone", "reveal_phone", "Mostra telefono", function(){
      return '<a href="' + phoneHref + '">' + phoneDisplay + "</a>" + copyBtn(phoneDisplay, "copy_phone");
    });
  })();

  /* One permanent visual theme; disregard preferences saved by older releases. */
  document.documentElement.setAttribute("data-theme", "dark");
  try { localStorage.removeItem("nfTheme"); } catch(e) {}

  var contactDialog = document.getElementById("contactDialog");
  var contactTriggers = Array.prototype.slice.call(document.querySelectorAll(".contact-trigger"));
  if (contactDialog && contactTriggers.length) {
    contactTriggers.forEach(function(trigger){
      trigger.addEventListener("click", function(){
        if (typeof contactDialog.showModal === "function") contactDialog.showModal();
        else contactDialog.setAttribute("open", "");
      });
    });
    contactDialog.querySelector(".contact-close").addEventListener("click", function(){ contactDialog.close(); });
    /* Contatti sta nel menu, che si chiude all'apertura della finestra: alla
       chiusura il focus torna al pulsante del menu. */
    contactDialog.addEventListener("close", function(){
      var toggle = document.querySelector(".menu-toggle");
      if(toggle) toggle.focus();
    });
    contactDialog.addEventListener("click", function(event){ if (event.target === contactDialog) contactDialog.close(); });
  }

  var root = document.documentElement;
  /* Larghezza della barra di scorrimento, per le righe a tutta larghezza (100vw). */
  function syncScrollbar(){ root.style.setProperty("--sb", (window.innerWidth - root.clientWidth) + "px"); }
  syncScrollbar();
  window.addEventListener("resize", syncScrollbar);
  var LANG_KEY = "nfLang";
  var savedLang = null;
  try{ savedLang = localStorage.getItem(LANG_KEY); }catch(e){}
  /* Senza una scelta salvata, chi non ha il browser in italiano vede il sito in inglese. */
  var browserLang = ((navigator.languages && navigator.languages[0]) || navigator.language || "it").toLowerCase();
  var lang = (savedLang === "en" || savedLang === "it") ? savedLang : (browserLang.indexOf("it") === 0 ? "it" : "en");
  /* Ogni pagina dichiara data-page sul body; la home usa le chiavi senza suffisso. */
  var page = document.body.getAttribute("data-page");
  var suffix = (page && page !== "home") ? "_" + page : "";

  /* ---- paragrafo di presentazione nella home ---- */
  var introEl = document.getElementById("heroIntro");
  function renderIntro(){
    if(!introEl) return;
    introEl.textContent = "";
    i18n[lang].hero_intro.forEach(function(segs){
      var para = document.createElement("p");
      segs.forEach(function(seg){
        if(seg.href){
          var a = document.createElement("a");
          a.href = seg.href;
          a.target = "_blank";
          a.rel = "noopener noreferrer";
          a.textContent = seg.t;
          para.appendChild(a);
        }else{
          para.appendChild(document.createTextNode(seg.t));
        }
      });
      introEl.appendChild(para);
    });
  }

  /* ---- lingua ---- */
  function applyLang(){
    root.lang = lang;
    var dict = i18n[lang];
    if(dict["page_title" + suffix]) document.title = dict["page_title" + suffix];
    var pageDescription = document.querySelector('meta[name="description"]');
    if(pageDescription && dict["page_description" + suffix]) pageDescription.setAttribute("content", dict["page_description" + suffix]);
    document.querySelectorAll("[data-i18n]").forEach(function(el){
      var k = el.getAttribute("data-i18n");
      if(dict[k] !== undefined){ el.textContent = dict[k]; }
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function(el){
      var k = el.getAttribute("data-i18n-aria");
      if(dict[k] !== undefined){ el.setAttribute("aria-label", dict[k]); }
    });
    document.querySelectorAll(".lang-btn").forEach(function(b){
      var selected = b.getAttribute("data-lang") === lang;
      b.classList.toggle("on", selected);
      b.setAttribute("aria-pressed", String(selected));
    });
    renderIntro();
  }
  document.querySelectorAll(".lang-btn").forEach(function(b){
    b.addEventListener("click", function(){
      lang = b.getAttribute("data-lang");
      try{ localStorage.setItem(LANG_KEY, lang); }catch(e){}
      applyLang();
    });
  });

  /* Menu a tre lineette: si apre sotto la barra; si chiude con Esc, con un
     clic fuori o scegliendo una voce (Contatti apre la sua finestra). */
  var menuToggle = document.querySelector(".menu-toggle");
  var siteMenu = document.getElementById("siteMenu");
  if(menuToggle && siteMenu){
    var setMenuOpen = function(open){
      siteMenu.hidden = !open;
      menuToggle.setAttribute("aria-expanded", String(open));
      if(open) siteMenu.querySelector("a, button").focus();
    };
    menuToggle.addEventListener("click", function(){ setMenuOpen(siteMenu.hidden); });
    siteMenu.addEventListener("click", function(e){
      if(e.target.closest("a, button")) setMenuOpen(false);
    });
    document.addEventListener("click", function(e){
      if(!siteMenu.hidden && !siteMenu.contains(e.target) && !menuToggle.contains(e.target)) setMenuOpen(false);
    });
    document.addEventListener("keydown", function(e){
      if(e.key === "Escape" && !siteMenu.hidden){
        setMenuOpen(false);
        menuToggle.focus();
      }
    });
  }

  /* Home su mobile: la barra in alto compare solo dopo un piccolo scroll */
  if(document.body.getAttribute("data-page") === "home"){
    document.body.classList.add("nav-auto");
    var syncNav = function(){ document.body.classList.toggle("nav-on", window.scrollY > 24); };
    window.addEventListener("scroll", syncNav, {passive:true});
    syncNav();
  }

  applyLang();
})();
