(function(){
  var i18n = {
    // ... [Il tuo oggetto i18n originale rimane intatto qui, ometto di rimetterlo parola per parola solo in questo commento ma nel codice effettivo gira completo] ...
    it: {
      new_tab_hint:" (si apre in una nuova scheda)",
      copy_email:"Copia email", copy_phone:"Copia numero di telefono", copy_done:"Copiato negli appunti",
      cm_title:"Informazioni di contatto", cm_phone:"Telefono", cm_cert:"Certificazioni",
      nav_contatti:"Contatti",
      nav_profilo:"Profilo",
      eyebrow_role:"InfoCamere · Padova",
      hero_cta1:"Esplora il mio lavoro",
      sec_chisono:"Chi sono",
      chisono_p:"Professionista IT che ha esteso il proprio contributo all’AI in produzione e alla sua adozione organizzativa.",
      sec_results_title:"Che risultati ho prodotto",
      sec_work_title:"Case Studies",
      sec_skills_title:"Con quali competenze",
      sec_path_title:"Percorso",
      sec_thinking_title:"Come ragiono",
      proof_label:"Risultati",
      p5k:"Sistemi in produzione", p5d:"2 sistemi RAG in produzione presso InfoCamere per knowledge documentale e storico Jira, con manuale operativo dedicato.", p5_link:"Vedi i case studies →",
      p1k:"AI Advisory", p1d:"3 coinvolgimenti di advisory AI: 2 business unit interne + 1 CEO.", p1_link:"Vedi il percorso →",
      p2k:"Enablement", p2d:"5 programmi di formazione sull'AI operativa, per oltre 35 professionisti.", p2_link:"Vedi le competenze →",
      sec_lavori:"Case Studies",
      tdabo:"2026", dabo_tag:"Esperienza internazionale", dabo_desc:"Su invito del CEO di DABO, coinvolgimento nel team SCWL per il contest “Sprint Forward” a Shangcheng, Cina, in un contesto internazionale di innovazione e confronto tecnologico.",
      club_tag:"Community & affiliazioni", club_desc:"Membro di una community professionale orientata a promuovere gentilezza, rispetto e qualità delle relazioni come elementi di leadership e cultura organizzativa.",
      work_view:"Vedi il case study →",
      c1_summary:"Due sistemi RAG in produzione per documentazione aziendale e storico Jira, accompagnati da un manuale operativo per Service Desk, Incident & Problem Management e Middle Management.",
      c2_summary:"Esplorazione della fattibilità di AI locale e sicura per contesti a dati sensibili.",
      sec_perspectives:"Articoli",
      persp1_meta:"Prospettiva 01 · 2026",
      persp_read:"Leggi →",
      persp1_title:"Quando un problema AI smette di essere un problema AI",
      persp1_excerpt:"Due sistemi RAG in produzione hanno mostrato che il retrieval enterprise richiede anche di progettare come la conoscenza viene organizzata, collegata e governata.",
      persp1_body:"Implementando due sistemi RAG in produzione pensavo che la parte più difficile sarebbe stata far funzionare bene il modello.\n\nÈ successo quasi il contrario.\n\nProcedure e manuali, anche quando condividono lo stesso formato, organizzano le informazioni in modi diversi. I ticket Jira non contengono sempre tutto il contesto necessario. Parte della conoscenza vive nei documenti, parte nei sistemi e parte nelle persone.\n\nA quel punto la domanda cambia: non solo quanto bene recupera il sistema, ma quale conoscenza deve essere resa disponibile, come deve essere strutturata, quali fonti devono essere collegate e quali confini informativi devono essere rispettati.\n\nLa qualità del retrieval conta. Il modello conta. Ma in un contesto enterprise una parte sostanziale del lavoro riguarda l'architettura dell'informazione che rende possibile il retrieval stesso.\n\nÈ qui che RAG diventa interessante dal punto di vista Enterprise IT: non perché recupera documenti, ma perché obbliga a progettare come la conoscenza aziendale viene organizzata, collegata e governata.\n\nA quel punto, l'affidabilità del sistema dipende tanto dall'architettura informativa quanto dal modello.",
      persp2_meta:"Prospettiva 02 · 2026",
      persp2_title:"Il valore arriva dopo il go-live",
      persp2_excerpt:"Il deployment rende disponibile uno strumento. Il valore arriva quando affidabilità dei dati, adozione e processi operativi iniziano a convergere.",
      persp2_body:"A due settimane dal go-live dei sistemi RAG sono emersi alcuni segnali che i test iniziali non avevano evidenziato: tempi di risposta non sempre coerenti, dati incompleti e comportamenti d'uso molto diversi da quelli previsti in fase di sviluppo.\n\nIn produzione, la variabilità delle query ha reso visibili incoerenze informative e limiti di contesto. Anche quando le risposte erano corrette, parte degli utenti continuava a preferire la ricerca manuale. Il problema non era più soltanto tecnico: entravano in gioco fiducia, abitudini operative e qualità percepita dello strumento.\n\nIl valore ha iniziato a emergere quando abbiamo lavorato contemporaneamente su tre dimensioni.\n\nLa prima: qualità e coerenza dei dati. Non serviva perseguire una perfezione teorica, ma rendere le informazioni sufficientemente strutturate, affidabili e coerenti da sostenere l'utilizzo quotidiano.\n\nLa seconda: comprensione dei comportamenti d'uso. Abbiamo osservato come le persone interrogavano realmente il sistema e adattato supporto e documentazione alle esigenze operative. Da qui è nato un manuale articolato su tre livelli: Service Desk, Incident & Problem Management e Middle Management, con obiettivi diversi ma complementari — velocità operativa, gestione delle criticità, analisi e reporting.\n\nLa terza: adozione. Quando qualità dei dati e affidabilità delle risposte sono diventate più consistenti, anche il comportamento degli utenti ha iniziato a cambiare. La fiducia nello strumento non è arrivata con il deployment, ma attraverso l'esperienza d'uso ripetuta e la progressiva integrazione nei processi.\n\nIl deployment rende disponibile uno strumento. L'adozione lo rende utile. Il valore emerge quando affidabilità dei dati, comportamento degli utenti e processi operativi iniziano a convergere.",
      case_problem_label:"Problema", case_solution_label:"Soluzione", case_approach_label:"Approccio", case_impact_label:"Impatto", case_learning_label:"Learning", case_focus_label:"Focus", case_stack_label:"Stack", system_view_label:"System view", c1_map_sources:"Documentazione aziendale · Storico Jira", c1_map_layer:"Retrieval · RAG · Knowledge layer", c1_map_users:"Service Desk · Incident/Problem · Management", c1_map_caption:"Il sistema collega fonti distribuite, retrieval e contesti d’uso operativi: l’affidabilità dipende dall’intera catena, non dal solo modello.", c2_map_data:"Dati sensibili · Dataset controllati", c2_map_runtime:"Infrastruttura locale · Ollama · Modelli", c2_map_output:"Inferenza controllata · Demo operative", c2_map_caption:"L’esplorazione considera insieme dati, runtime, infrastruttura, costi e governance per valutare dove il controllo locale crea valore reale.",
      c1t:"Enterprise Knowledge Retrieval",
      c1_status:"Production · 2026",
      c1_problem:"La conoscenza aziendale esiste, ma spesso è frammentata: documenti, procedure, manuali e ticket contengono informazioni utili che vivono in fonti diverse e non sempre comunicano tra loro.",
      c1_solution_1:"Ho implementato e portato in produzione due sistemi RAG nati da esigenze operative emerse insieme al mio Responsabile.",
      c1_solution_2:"Il primo rende la knowledge documentale aziendale rapidamente interrogabile, facilitando il reperimento e la relazione delle informazioni anche a supporto della comunicazione verso middle e top management.",
      c1_solution_3:"Il secondo trasforma lo storico Jira in una knowledge base interrogabile per il team di lavoro, supportando il recupero dell’esperienza accumulata e le attività di Incident & Problem Management. I due RAG sono accompagnati da un manuale operativo strutturato per Service Desk, Incident & Problem Management e Middle Management.",
      c1_impact:"I due sistemi riducono il lavoro necessario per cercare, collegare e interpretare manualmente informazioni distribuite tra fonti aziendali diverse.",
      c1_learning:"Portarli in produzione ha evidenziato che la sfida principale di un sistema RAG enterprise non è soltanto il modello: qualità e struttura dei dati, contesto, istruzioni, information boundaries e modalità di utilizzo incidono direttamente sull'affidabilità del sistema.",
      c2t:"Local AI for Sensitive Data Environments",
      c2_status:"Exploration · Mag – Giu 2026",
      c2_problem:"Come utilizzare modelli AI in contesti sensibili mantenendo maggiore controllo su dati, infrastruttura e dipendenza da provider esterni?",
      c2_solution:"Ho esplorato la fattibilità di modelli AI eseguiti localmente, lavorando con Qwen, Gemma e architetture basate su Ollama. Il progetto ha incluso preparazione dei dataset, fine-tuning, deployment locale e dimostrazioni pratiche.",
      c2_learning:"Portare l'AI in un ambiente controllato non significa semplicemente eseguire un modello in locale. Infrastruttura, gestione dei dati, costi e governance diventano parte integrante della soluzione.",
      sec_percorso:"Percorso", sec_experiences:"Altre esperienze",
      job_current:"In corso",
      t1:"Set 2022 — oggi", tsa:"Mag 2025 — oggi", t2:"Feb 2022 — Set 2022", t3:"Ott 2020 — Feb 2022",
      pr1s:"SysAdmin. Supporto all'infrastruttura mission-critical del sistema camerale, con focus su affidabilità operativa. In parallelo, sviluppo e gestione di soluzioni AI in produzione integrate con knowledge e workflow aziendali.",
      prsa:"Diffusione di cultura digitale e adozione dell'AI in InfoCamere attraverso advisory, formazione e comunicazione tecnologica. Aiuto a tradurre tecnologie emergenti in conoscenza pratica e casi d'uso, contribuendo all'upskilling di oltre 35 professionisti.",
      pr2:"Specialista IT (stage). Primo ruolo IT operativo: supporto infrastrutturale, troubleshooting, la transizione dal business alla tecnologia — con una borsa di studio Google (WorkInTech, prima edizione italiana).",
      pr3:"Consulente assicurativo. Ruolo a contatto con il cliente in un settore fortemente regolamentato, dove fiducia, compliance e affidabilità pesano quanto il business stesso.",
      tpolitica:"2026",
      politica_tag:"Formazione selettiva",
      politica_title:"Meritare l'Europa — Scuola di Formazione Politica, Italia Viva",
      politica_desc:"Selezionato per il percorso 2026 dedicato a cittadinanza attiva, istituzioni e leadership pubblica, con focus su Europa, processi decisionali, innovazione tecnologica e AI.",
      sec_competenze:"Competenze",
      sk_cat1:"Enterprise IT", sk1:"Systems Integration · Reliability · Linux/Windows · Automation",
      sk_cat2:"Enterprise AI", sk2:"RAG · Local AI · LLM · Knowledge Retrieval",
      sk_cat3:"Cloud & Development", sk3:"Python · GCP · APIs · Application Integration",
      sk_cat4:"AI Adoption & Governance", sk4:"AI Adoption · Data Protection · Knowledge Management",
      sk_cat5:"Technology Enablement", sk5:"Advisory · Training · Public Speaking",
      cap_link_exp:"→ Esperienza", cap_link_work:"→ Caso studio", cap_link_projects:"→ Caso studio",
      cap_core_label:"Competenze core", cap_ext_label:"Competenze estese",
      sec_badge:"Credenziali",sec_contacts:"Contatti", contact_linkedin_meta:"Profilo professionale", contact_email_meta:"Contatto diretto", contact_skills_meta:"Certificazioni e learning profile",
      badge1_title:"Gemini Enterprise Agent Ready", badge1_meta:"Credential · 2026",
      badge2_title:"Google Cloud Innovator", badge2_meta:"Community program · 2025",
      badge3_title:"Google Developer Program — Premium Tier", badge3_meta:"Program status · 2026",
      nav_main_label:"Navigazione principale", theme_toggle_label:"Cambia tema", hero_proof_label:"Focus professionale", hero_nav_label:"Sezioni della pagina", modal_close_label:"Chiudi",
      hero_proof1:"Enterprise IT @ InfoCamere", hero_proof2:"AI in produzione", hero_proof3:"Google Cloud Innovator", hero_proof4:"Selezionato per Meritare l’Europa 2026",
    },
    en: {
      new_tab_hint:" (opens in a new tab)",
      copy_email:"Copy email", copy_phone:"Copy phone number", copy_done:"Copied to clipboard",
      cm_title:"Contact information", cm_phone:"Phone", cm_cert:"Certifications",
      nav_contatti:"Contact",
      nav_profilo:"Profile",
      eyebrow_role:"InfoCamere · Padova",
      hero_cta1:"Explore my work",
      sec_chisono:"About",
      chisono_p:"IT professional who has expanded his contribution to AI in production and its organizational adoption.",
      sec_results_title:"What I’ve delivered",
      sec_work_title:"Case Studies",
      sec_skills_title:"The capabilities behind it",
      sec_path_title:"Career path",
      sec_thinking_title:"How I think",
      proof_label:"Results",
      p5k:"Production Systems", p5d:"2 RAG systems in production at InfoCamere for corporate knowledge and Jira history, with a dedicated operating manual.", p5_link:"View case studies →",
      p1k:"AI Advisory", p1d:"3 AI advisory engagements: 2 internal business units + 1 CEO.", p1_link:"See the path →",
      p2k:"Enablement", p2d:"5 operational-AI training programs, reaching 35+ professionals.", p2_link:"See capabilities →",
      sec_lavori:"Case Studies",
      tdabo:"2026", dabo_tag:"International experience", dabo_desc:"At the invitation of DABO’s CEO, involvement with the SCWL team for the “Sprint Forward” contest in Shangcheng, China, within an international technology and innovation context.",
      club_tag:"Community & affiliations", club_desc:"Member of a professional community focused on kindness, respect and quality of relationships as elements of leadership and organizational culture.",
      work_view:"View case study →",
      c1_summary:"Two RAG systems in production for corporate documentation and Jira history, supported by an operational manual for Service Desk, Incident & Problem Management and Middle Management.",
      c2_summary:"Explored the feasibility of secure, locally-run AI for sensitive-data environments.",
      sec_perspectives:"Articles",
      persp1_meta:"Perspective 01 · 2026",
      persp_read:"Read →",
      persp1_title:"When an AI problem stops being an AI problem",
      persp1_excerpt:"Two RAG systems in production showed that enterprise retrieval also requires designing how knowledge is organized, connected and governed.",
      persp1_body:"Implementing two RAG systems in production, I expected the hardest part to be making the model work well.\n\nWhat happened was almost the opposite.\n\nProcedures and manuals, even when they share the same format, organize information differently. Jira tickets do not always contain all the context required. Part of the knowledge lives in documents, part in systems, and part in people.\n\nAt that point, the question changes: not only how well the system retrieves information, but which knowledge should be made available, how it should be structured, which sources should be connected, and which information boundaries must be respected.\n\nRetrieval quality matters. The model matters. But in an enterprise context, a substantial part of the work is the information architecture that makes retrieval possible in the first place.\n\nThis is where RAG becomes interesting from an Enterprise IT perspective: not because it retrieves documents, but because it forces decisions about how enterprise knowledge is organized, connected and governed.\n\nAt that point, system reliability depends as much on information architecture as it does on the model.",
      persp2_meta:"Perspective 02 · 2026",
      persp2_title:"Value comes after go-live",
      persp2_excerpt:"Deployment makes a tool available. Value arrives when data reliability, adoption and operational processes begin to converge.",
      persp2_body:"Two weeks after the RAG systems went live, several signals appeared that initial testing had not exposed: inconsistent response times, incomplete data and usage patterns that differed significantly from those anticipated during development.\n\nIn production, the variability of real queries made information inconsistencies and context gaps visible. Even when answers were correct, some users still preferred manual search. The issue was no longer purely technical: trust, operational habits and perceived reliability had become part of the system.\n\nValue began to emerge when we worked on three dimensions at the same time.\n\nFirst: data quality and consistency. The goal was not theoretical perfection, but information structured and reliable enough to support everyday use.\n\nSecond: understanding actual usage. We observed how people queried the system and adapted support and documentation to operational needs. This led to an operating manual structured across three levels: Service Desk, Incident & Problem Management and Middle Management — supporting operational speed, issue management, analysis and reporting.\n\nThird: adoption. As data quality and answer reliability became more consistent, user behavior started to change as well. Trust did not arrive with deployment; it developed through repeated use and progressive integration into operational processes.\n\nDeployment makes a tool available. Adoption makes it useful. Value emerges when data reliability, user behavior and operational processes begin to converge.",
      case_problem_label:"Problem", case_solution_label:"Solution", case_approach_label:"Approach", case_impact_label:"Impact", case_learning_label:"Learning", case_focus_label:"Focus", case_stack_label:"Stack", system_view_label:"System view", c1_map_sources:"Corporate documentation · Jira history", c1_map_layer:"Retrieval · RAG · Knowledge layer", c1_map_users:"Service Desk · Incident/Problem · Management", c1_map_caption:"The system connects distributed sources, retrieval and operational contexts: reliability depends on the whole chain, not on the model alone.", c2_map_data:"Sensitive data · Controlled datasets", c2_map_runtime:"Local infrastructure · Ollama · Models", c2_map_output:"Controlled inference · Operational demos", c2_map_caption:"The exploration considers data, runtime, infrastructure, costs and governance together to evaluate where local control creates real value.",
      c1t:"Enterprise Knowledge Retrieval",
      c1_status:"Production · 2026",
      c1_problem:"Enterprise knowledge exists, but it's often fragmented: documents, procedures, manuals and tickets hold useful information that lives across different sources that don't always talk to each other.",
      c1_solution_1:"I implemented and brought into production two RAG systems, born from operational needs identified together with my manager.",
      c1_solution_2:"The first makes corporate documentation quickly searchable, easing information retrieval and cross-referencing — also supporting communication toward middle and top management.",
      c1_solution_3:"The second turns Jira history into a queryable knowledge base for the team, supporting access to accumulated experience and Incident & Problem Management. The two RAG systems are accompanied by an operational manual structured for Service Desk, Incident & Problem Management and Middle Management.",
      c1_impact:"The two systems reduce the work needed to manually search, connect and interpret information scattered across different corporate sources.",
      c1_learning:"Bringing them into production made clear that the main challenge of an enterprise RAG system isn't just the model: data quality and structure, context, instructions, information boundaries and usage patterns directly affect the system's reliability.",
      c2t:"Local AI for Sensitive Data Environments",
      c2_status:"Exploration · May – Jun 2026",
      c2_problem:"How can AI models be used in sensitive contexts while keeping greater control over data, infrastructure and dependency on external providers?",
      c2_solution:"I explored the feasibility of locally-run AI models, working with Qwen, Gemma and Ollama-based architectures. The project included dataset preparation, fine-tuning, local deployment and practical demos.",
      c2_learning:"Bringing AI into a controlled environment isn't just about running a model locally. Infrastructure, data management, cost and governance become an integral part of the solution.",
      sec_percorso:"Career", sec_experiences:"Other experiences",
      job_current:"Ongoing",
      t1:"Sep 2022 — today", tsa:"May 2025 — today", t2:"Feb 2022 — Sep 2022", t3:"Oct 2020 — Feb 2022",
      pr1s:"SysAdmin. Support for the mission-critical infrastructure of the Italian Chambers of Commerce system, with a focus on operational reliability. In parallel, I develop and operate AI solutions in production, integrated with corporate knowledge and workflows.",
      prsa:"Driving digital culture and AI adoption across InfoCamere through advisory, training and technology communication. I help translate emerging technologies into practical knowledge and use cases, contributing to the upskilling of 35+ professionals.",
      pr2:"IT Specialist (internship). First hands-on IT role: infrastructure support, troubleshooting, the transition from business to technology — with a Google scholarship (WorkInTech, first Italian edition).",
      pr3:"Insurance consultant. Client-facing role in a highly regulated industry, where trust, compliance and reliability matter as much as the business itself.",
      tpolitica:"2026",
      politica_tag:"Selective education",
      politica_title:"Meritare l'Europa — School of Political Education, Italia Viva",
      politica_desc:"Selected for the 2026 program focused on active citizenship, institutions and public leadership, with a focus on Europe, decision-making processes, technological innovation and AI.",
      sec_competenze:"Skills",
      sk_cat1:"Enterprise IT", sk1:"Systems Integration · Reliability · Linux/Windows · Automation",
      sk_cat2:"Enterprise AI", sk2:"RAG · Local AI · LLM · Knowledge Retrieval",
      sk_cat3:"Cloud & Development", sk3:"Python · GCP · APIs · Application Integration",
      sk_cat4:"AI Adoption & Governance", sk4:"AI Adoption · Data Protection · Knowledge Management",
      sk_cat5:"Technology Enablement", sk5:"Advisory · Training · Public Speaking",
      cap_link_exp:"→ Experience", cap_link_work:"→ Case study", cap_link_projects:"→ Case study",
      cap_core_label:"Core capabilities", cap_ext_label:"Extended capabilities",
      sec_badge:"Credentials",sec_contacts:"Contacts", contact_linkedin_meta:"Professional profile", contact_email_meta:"Direct contact", contact_skills_meta:"Credentials and learning profile",
      badge1_title:"Gemini Enterprise Agent Ready", badge1_meta:"Credential · 2026",
      badge2_title:"Google Cloud Innovator", badge2_meta:"Community program · 2025",
      badge3_title:"Google Developer Program — Premium Tier", badge3_meta:"Program status · 2026",
      nav_main_label:"Main navigation", theme_toggle_label:"Toggle theme", hero_proof_label:"Professional focus", hero_nav_label:"Page sections", modal_close_label:"Close",
      hero_proof1:"Enterprise IT @ InfoCamere", hero_proof2:"Building AI in Production", hero_proof3:"Google Cloud Innovator", hero_proof4:"Selected for Meritare l’Europa 2026",
    },
    fr: {
      new_tab_hint:" (s'ouvre dans un nouvel onglet)",
      copy_email:"Copier l'e-mail", copy_phone:"Copier le numéro de téléphone", copy_done:"Copié dans le presse-papiers",
      cm_title:"Coordonnées", cm_phone:"Téléphone", cm_cert:"Certifications",
      nav_contatti:"Contact",
      nav_profilo:"Profil",
      eyebrow_role:"InfoCamere · Padova",
      hero_cta1:"Découvrir mon travail",
      sec_chisono:"À propos",
      chisono_p:"Professionnel IT qui a élargi sa contribution à l’IA en production et à son adoption organisationnelle.",
      sec_results_title:"Ce que j’ai produit",
      sec_work_title:"Case Studies",
      sec_skills_title:"Les compétences mobilisées",
      sec_path_title:"Parcours",
      sec_thinking_title:"Ma façon de penser",
      proof_label:"Résultats",
      p5k:"Production Systems", p5d:"2 systèmes RAG en production chez InfoCamere pour la connaissance documentaire et l’historique Jira, avec un manuel opérationnel dédié.", p5_link:"Voir les case studies →",
      p1k:"AI Advisory", p1d:"3 missions d'advisory IA : 2 business units internes + 1 CEO.", p1_link:"Voir le parcours →",
      p2k:"Enablement", p2d:"5 programmes de formation à l'IA opérationnelle, pour plus de 35 professionnels.", p2_link:"Voir les compétences →",
      sec_lavori:"Case Studies",
      tdabo:"2026", dabo_tag:"Expérience internationale", dabo_desc:"À l’invitation du CEO de DABO, participation à l’équipe SCWL pour le concours « Sprint Forward » à Shangcheng, en Chine, dans un contexte international d’innovation et de technologie.",
      club_tag:"Communauté & affiliations", club_desc:"Membre d’une communauté professionnelle centrée sur la gentillesse, le respect et la qualité des relations comme éléments de leadership et de culture organisationnelle.",
      work_view:"Voir le case study →",
      c1_summary:"Deux systèmes RAG en production pour la documentation d’entreprise et l’historique Jira, accompagnés d’un manuel opérationnel pour le Service Desk, l’Incident & Problem Management et le Middle Management.",
      c2_summary:"Exploration de la faisabilité d'une IA locale et sécurisée pour des environnements à données sensibles.",
      sec_perspectives:"Articles",
      persp1_meta:"Perspective 01 · 2026",
      persp_read:"Lire →",
      persp1_title:"Quand un problème d'IA cesse d'être un problème d'IA",
      persp1_excerpt:"Deux systèmes RAG en production ont montré que le retrieval d’entreprise exige aussi de concevoir comment la connaissance est organisée, reliée et gouvernée.",
      persp1_body:"En mettant en œuvre deux systèmes RAG en production, je pensais que la partie la plus difficile serait de faire fonctionner correctement le modèle.\n\nC'est presque l'inverse qui s'est produit.\n\nLes procédures et les manuels, même lorsqu'ils partagent le même format, organisent l'information de façons différentes. Les tickets Jira ne contiennent pas toujours tout le contexte nécessaire. Une partie de la connaissance vit dans les documents, une partie dans les systèmes et une partie dans les personnes.\n\nÀ ce stade, la question change : il ne s'agit plus seulement de savoir si le système récupère bien l'information, mais de décider quelles connaissances doivent être rendues disponibles, comment les structurer, quelles sources relier et quelles frontières informationnelles respecter.\n\nLa qualité du retrieval compte. Le modèle compte. Mais dans un contexte d'entreprise, une part substantielle du travail concerne l'architecture de l'information qui rend ce retrieval possible.\n\nC'est là que le RAG devient intéressant du point de vue de l'IT d'entreprise : non parce qu'il récupère des documents, mais parce qu'il oblige à décider comment la connaissance de l'organisation doit être structurée, reliée et gouvernée.\n\nÀ ce stade, la fiabilité du système dépend autant de l'architecture de l'information que du modèle.",
      persp2_meta:"Perspective 02 · 2026",
      persp2_title:"La valeur arrive après la mise en production",
      persp2_excerpt:"Le déploiement rend un outil disponible. La valeur apparaît lorsque fiabilité des données, adoption et processus opérationnels commencent à converger.",
      persp2_body:"Deux semaines après la mise en production des systèmes RAG, plusieurs signaux sont apparus que les tests initiaux n'avaient pas révélés : des temps de réponse irréguliers, des données incomplètes et des usages sensiblement différents de ceux anticipés pendant le développement.\n\nEn production, la variété des requêtes réelles a rendu visibles des incohérences informationnelles et des lacunes de contexte. Même lorsque les réponses étaient correctes, certains utilisateurs continuaient à préférer la recherche manuelle. Le sujet n'était plus seulement technique : la confiance, les habitudes opérationnelles et la fiabilité perçue faisaient désormais partie du système.\n\nLa valeur a commencé à émerger lorsque nous avons travaillé simultanément sur trois dimensions.\n\nPremièrement : la qualité et la cohérence des données. L'objectif n'était pas une perfection théorique, mais des informations suffisamment structurées et fiables pour soutenir l'usage quotidien.\n\nDeuxièmement : la compréhension des usages réels. Nous avons observé la manière dont les personnes interrogeaient le système et adapté l'accompagnement et la documentation aux besoins opérationnels. Cela a conduit à un manuel structuré sur trois niveaux : Service Desk, Incident & Problem Management et Middle Management — pour soutenir rapidité opérationnelle, gestion des incidents, analyse et reporting.\n\nTroisièmement : l'adoption. À mesure que la qualité des données et la fiabilité des réponses devenaient plus constantes, les comportements ont commencé à évoluer. La confiance n'est pas arrivée avec le déploiement ; elle s'est construite par l'usage répété et l'intégration progressive dans les processus.\n\nLe déploiement rend un outil disponible. L'adoption le rend utile. La valeur apparaît lorsque fiabilité des données, usages et processus opérationnels commencent à converger.",
      case_problem_label:"Problème", case_solution_label:"Solution", case_approach_label:"Approche", case_impact_label:"Impact", case_learning_label:"Learning", case_focus_label:"Focus", case_stack_label:"Stack", system_view_label:"System view", c1_map_sources:"Documentation d’entreprise · Historique Jira", c1_map_layer:"Retrieval · RAG · Knowledge layer", c1_map_users:"Service Desk · Incident/Problem · Management", c1_map_caption:"Le système relie des sources distribuées, le retrieval et les contextes opérationnels : la fiabilité dépend de toute la chaîne, pas seulement du modèle.", c2_map_data:"Données sensibles · Jeux de données contrôlés", c2_map_runtime:"Infrastructure locale · Ollama · Modèles", c2_map_output:"Inférence contrôlée · Démonstrations opérationnelles", c2_map_caption:"L’exploration considère ensemble les données, le runtime, l’infrastructure, les coûts et la gouvernance afin d’évaluer où le contrôle local crée une valeur réelle.",
      c1t:"Enterprise Knowledge Retrieval",
      c1_status:"Production · 2026",
      c1_problem:"La connaissance d'entreprise existe, mais elle est souvent fragmentée : documents, procédures, manuels et tickets contiennent des informations utiles réparties dans différentes sources qui ne communiquent pas toujours entre elles.",
      c1_solution_1:"J'ai mis en œuvre et déployé en production deux systèmes RAG, nés de besoins opérationnels identifiés avec mon responsable.",
      c1_solution_2:"Le premier rend la documentation d'entreprise rapidement interrogeable, facilitant la recherche et la mise en relation des informations, en soutenant aussi la communication vers le management intermédiaire et supérieur.",
      c1_solution_3:"Le second transforme l’historique Jira en une base de connaissances interrogeable pour l’équipe, facilitant l’accès à l’expérience accumulée et l’Incident & Problem Management. Les deux systèmes RAG sont accompagnés d’un manuel opérationnel structuré pour le Service Desk, l’Incident & Problem Management et le Middle Management.",
      c1_impact:"Les deux systèmes réduisent le travail nécessaire pour rechercher, relier et interpréter manuellement des informations réparties entre différentes sources d'entreprise.",
      c1_learning:"Leur mise en production a montré que le principal défi d'un système RAG enterprise n'est pas seulement le modèle : la qualité et la structure des données, le contexte, les instructions, les limites de l'information et les modes d'utilisation influencent directement la fiabilité du système.",
      c2t:"Local AI for Sensitive Data Environments",
      c2_status:"Exploration · Mai – juin 2026",
      c2_problem:"Comment utiliser des modèles d'IA dans des contextes sensibles tout en gardant un meilleur contrôle sur les données, l'infrastructure et la dépendance aux fournisseurs externes ?",
      c2_solution:"J'ai exploré la faisabilité de modèles d'IA exécutés localement, en travaillant avec Qwen, Gemma et des architectures basées sur Ollama. Le projet a inclus la préparation des jeux de données, le fine-tuning, le déploiement local et des démonstrations pratiques.",
      c2_learning:"Amener l'IA dans un environnement contrôlé ne consiste pas simplement à exécuter un modèle en local. L'infrastructure, la gestion des données, les coûts et la gouvernance font partie intégrante de la solution.",
      sec_percorso:"Parcours", sec_experiences:"Autres expériences",
      job_current:"En cours",
      t1:"Sept. 2022 — aujourd'hui", tsa:"Mai 2025 — aujourd'hui", t2:"Févr. 2022 — sept. 2022", t3:"Oct. 2020 — févr. 2022",
      pr1s:"SysAdmin. Support de l'infrastructure critique du système des Chambres de commerce italiennes, avec un accent sur la fiabilité opérationnelle. En parallèle, je développe et exploite des solutions IA en production, intégrées aux connaissances et aux workflows de l'entreprise.",
      prsa:"Promotion de la culture numérique et de l'adoption de l'IA chez InfoCamere à travers le conseil, la formation et la communication technologique. J'aide à traduire les technologies émergentes en connaissances pratiques et cas d'usage, contribuant à l'upskilling de plus de 35 professionnels.",
      pr2:"Spécialiste IT (stage). Premier rôle IT concret : support infrastructure, troubleshooting, la transition du business vers la technologie — avec une bourse Google (WorkInTech, première édition italienne).",
      pr3:"Consultant assurance. Rôle au contact du client dans un secteur fortement réglementé, où la confiance, la conformité et la fiabilité comptent autant que le business lui-même.",
      tpolitica:"2026",
      politica_tag:"Formation sélective",
      politica_title:"Meritare l'Europa — École de formation politique, Italia Viva",
      politica_desc:"Sélectionné pour le programme 2026 consacré à la citoyenneté active, aux institutions et au leadership public, avec un focus sur l'Europe, les processus décisionnels, l'innovation technologique et l'IA.",
      sec_competenze:"Compétences",
      sk_cat1:"Enterprise IT", sk1:"Systems Integration · Reliability · Linux/Windows · Automation",
      sk_cat2:"Enterprise AI", sk2:"RAG · Local AI · LLM · Knowledge Retrieval",
      sk_cat3:"Cloud & Development", sk3:"Python · GCP · APIs · Application Integration",
      sk_cat4:"AI Adoption & Governance", sk4:"AI Adoption · Data Protection · Knowledge Management",
      sk_cat5:"Technology Enablement", sk5:"Advisory · Training · Public Speaking",
      cap_link_exp:"→ Experience", cap_link_work:"→ Case study", cap_link_projects:"→ Case study",
      cap_core_label:"Compétences clés", cap_ext_label:"Compétences complémentaires",
      sec_badge:"Accréditations",sec_contacts:"Contacts", contact_linkedin_meta:"Profil professionnel", contact_email_meta:"Contact direct", contact_skills_meta:"Certifications et profil de formation",
      badge1_title:"Gemini Enterprise Agent Ready", badge1_meta:"Credential · 2026",
      badge2_title:"Google Cloud Innovator", badge2_meta:"Community program · 2025",
      badge3_title:"Google Developer Program — Premium Tier", badge3_meta:"Program status · 2026",
      nav_main_label:"Navigation principale", theme_toggle_label:"Changer de thème", hero_proof_label:"Axes professionnels", hero_nav_label:"Sections de la page", modal_close_label:"Fermer",
      hero_proof1:"Enterprise IT @ InfoCamere", hero_proof2:"IA en production", hero_proof3:"Google Cloud Innovator", hero_proof4:"Sélectionné pour Meritare l’Europa 2026",
    }
  };

  /* ---- contatti: costruiti a runtime per non esporli in chiaro nel sorgente ---- */
  var copyIcon = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>';
  function copyBtn(value, i18nKey){
    return '<button type="button" class="copy-btn" data-copy-value="' + value.replace(/"/g,"&quot;") + '" data-i18n-aria="' + i18nKey + '">' + copyIcon + '</button>';
  }
  (function(){
    var eu = "nicolo.forcolin", ed = "infocamere.it";
    var email = eu + "@" + ed;
    document.getElementById("cmEmail").innerHTML = '<a href="mailto:' + email + '">' + email + "</a>" + copyBtn(email, "copy_email");
    var pn = ["+39", "347", "908", "1966"];
    var phoneDisplay = pn.join(" ");
    var phoneHref = "tel:" + pn.join("").replace(/\s/g, "");
    document.getElementById("cmPhone").innerHTML = '<a href="' + phoneHref + '">' + phoneDisplay + "</a>" + copyBtn(phoneDisplay, "copy_phone");
    document.querySelectorAll(".copy-btn").forEach(function(btn){
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
  })();

  var root = document.documentElement;
  var LANG_KEY = "nfLang";
  var savedLang = null;
  try{ savedLang = localStorage.getItem(LANG_KEY); }catch(e){}
  var lang = (savedLang && i18n[savedLang]) ? savedLang : "it";
  var dynamicPalette = null;

  /* ---- lingua ---- */
  function applyLang(){
    root.lang = lang;
    var dict = i18n[lang];
    document.querySelectorAll("[data-i18n]").forEach(function(el){
      var k = el.getAttribute("data-i18n");
      if(dict[k] !== undefined){ el.textContent = dict[k]; }
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function(el){
      var k = el.getAttribute("data-i18n-aria");
      if(dict[k] !== undefined){ el.setAttribute("aria-label", dict[k]); }
    });
    document.querySelectorAll(".lang-btn").forEach(function(b){
      b.classList.toggle("on", b.getAttribute("data-lang") === lang);
    });
  }
  document.querySelectorAll(".lang-btn").forEach(function(b){
    b.addEventListener("click", function(){
      lang = b.getAttribute("data-lang");
      try{ localStorage.setItem(LANG_KEY, lang); }catch(e){}
      applyLang();
    });
  });

  /* ---- tema ---- */
  var toggles = Array.prototype.slice.call(document.querySelectorAll(".theme-toggle"));
  function current(){
    return root.getAttribute("data-theme") || "light";
  }
  var themeColorMeta = document.getElementById("themeColorMeta");
  function paintTheme(){
    var dark = current() === "dark";
    toggles.forEach(function(t){
      t.textContent = dark ? "☀" : "☾";
      t.setAttribute("aria-label", dark ? "Passa al tema chiaro" : "Passa al tema scuro");
    });
    if(dynamicPalette){
      var vars = dynamicPalette[dark ? "dark" : "light"];
      Object.keys(vars).forEach(function(k){ root.style.setProperty(k, vars[k]); });
      if(themeColorMeta) themeColorMeta.setAttribute("content", vars["--bg"]);
    } else if(themeColorMeta){
      themeColorMeta.setAttribute("content", dark ? "#0B0E17" : "#F7F8FC");
    }
  }
  var themeAnnouncer = document.getElementById("themeAnnouncer");
  function announceTheme(dark){
    if(themeAnnouncer) themeAnnouncer.textContent = dark ? "Tema scuro attivato" : "Tema chiaro attivato";
  }
  toggles.forEach(function(t){
    t.addEventListener("click", function(){
      var next = current() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try{ localStorage.setItem("nfTheme", next); }catch(e){}
      paintTheme();
      announceTheme(next === "dark");
    });
  });
  paintTheme();

  /* ---- Material 3 dynamic color: estrae un colore "seme" dalla foto e ne
     deriva una palette in stile Material You. Se la foto non ha un colore
     dominante riconoscibile (es. bianco e nero) resta la palette statica.
     Il risultato viene messo in cache in localStorage (vedi script in
     <head>, che la applica subito ad ogni caricamento per evitare il
     flash), e ogni tono neutro è corretto per rispettare il contrasto
     minimo WCAG AA rispetto allo sfondo generato. */
  (function(){
    var avatarImg = document.getElementById("avatarPhoto");
    if(!avatarImg || !window.HTMLCanvasElement) return;
    var CACHE_KEY = "nfPalette";
    var DYNAMIC_KEYS = ["--bg","--ink","--ink-soft","--line","--accent","--accent-soft","--on-accent-soft","--case-bg","--on-case","--status-explore","--status-explore-soft"];

    function rgbToHsl(r, g, b){
      r /= 255; g /= 255; b /= 255;
      var max = Math.max(r, g, b), min = Math.min(r, g, b);
      var h = 0, s = 0, l = (max + min) / 2;
      if(max !== min){
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max){
          case r: h = (g - b) / d + (g < b ? 6 : 0); break;
          case g: h = (b - r) / d + 2; break;
          default: h = (r - g) / d + 4;
        }
        h /= 6;
      }
      return [h * 360, s * 100, l * 100];
    }
    function hslToHex(h, s, l){
      h = ((h % 360) + 360) % 360; h /= 360; s = Math.max(0, Math.min(100, s)) / 100; l = Math.max(0, Math.min(100, l)) / 100;
      function hue2rgb(p, q, t){
        if(t < 0) t += 1;
        if(t > 1) t -= 1;
        if(t < 1/6) return p + (q - p) * 6 * t;
        if(t < 1/2) return q;
        if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
      }
      var r, g, b;
      if(s === 0){ r = g = b = l; }
      else{
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
      }
      function ch(v){ return Math.round(v * 255).toString(16).padStart(2, "0"); }
      return "#" + ch(r) + ch(g) + ch(b);
    }

    /* Contrasto WCAG: https://www.w3.org/TR/WCAG21/#contrast-minimum */
    function hexToRgb(hex){
      var n = parseInt(hex.slice(1), 16);
      return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
    }
    function relLuminance(hex){
      var rgb = hexToRgb(hex).map(function(v){
        v /= 255;
        return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
      });
      return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
    }
    function contrastRatio(hexA, hexB){
      var lA = relLuminance(hexA), lB = relLuminance(hexB);
      var lighter = Math.max(lA, lB), darker = Math.min(lA, lB);
      return (lighter + 0.05) / (darker + 0.05);
    }
    /* Genera il colore in HSL e, se il contrasto con lo sfondo non basta,
       scurisce/schiarisce (dir -1/+1) finché non raggiunge minRatio. */
    function ensureContrast(h, s, l, bgHex, minRatio, dir){
      var hex = hslToHex(h, s, l);
      var guard = 0;
      while(contrastRatio(hex, bgHex) < minRatio && guard < 40 && l > 0 && l < 100){
        l = Math.max(0, Math.min(100, l + dir * 2));
        hex = hslToHex(h, s, l);
        guard++;
      }
      return hex;
    }

    function extractSeed(img){
      var size = 48;
      var canvas = document.createElement("canvas");
      canvas.width = canvas.height = size;
      var ctx = canvas.getContext("2d");
      var data;
      try{
        ctx.drawImage(img, 0, 0, size, size);
        data = ctx.getImageData(0, 0, size, size).data;
      } catch(e){ return null; }

      var buckets = {};
      for(var i = 0; i < data.length; i += 4){
        if(data[i + 3] < 128) continue;
        var hsl = rgbToHsl(data[i], data[i + 1], data[i + 2]);
        var h = hsl[0], s = hsl[1], l = hsl[2];
        if(l < 8 || l > 92 || s < 12) continue;
        var key = Math.round(h / 15);
        var bucket = buckets[key] || (buckets[key] = { count: 0, h: 0, s: 0 });
        bucket.count++; bucket.h += h; bucket.s += s;
      }
      var best = null;
      Object.keys(buckets).forEach(function(k){
        var b = buckets[k];
        if(!best || b.count > best.count) best = b;
      });
      if(!best || best.count < 12) return null;
      var avgS = best.s / best.count;
      if(avgS < 16) return null;
      return { h: best.h / best.count, s: Math.min(Math.max(avgS, 28), 55) };
    }

    /* Il blu resta il colore-guida fisso del brand: qui adattiamo solo i
       toni neutri (sfondo, testo, bordi, etichetta "in esplorazione") in
       base al colore dominante della foto, mentre accent/case restano blu. */
    function buildPalette(seed){
      var h = seed.h, s = seed.s;
      var hComp = (h + 45) % 360;
      var neutralS = Math.min(s * 0.28, 14);
      var complS = Math.min(Math.max(s, 25), 45);

      var bgLight = hslToHex(h, neutralS * 0.6, 96);
      var bgDark = hslToHex(h, neutralS * 0.9, 8);

      return {
        light: {
          "--bg": bgLight,
          "--ink": ensureContrast(h, neutralS * 0.5, 12, bgLight, 4.5, -1),
          "--ink-soft": ensureContrast(h, neutralS * 0.4, 34, bgLight, 3, -1),
          "--line": hslToHex(h, neutralS * 0.7, 85),
          "--accent": "#003399",
          "--accent-soft": "#DCE4FF",
          "--on-accent-soft": "#0B1F57",
          "--case-bg": "#1F4E96",
          "--on-case": "#F5F7FF",
          "--status-explore": hslToHex(hComp, complS, 38),
          "--status-explore-soft": hslToHex(hComp, complS * 0.7, 90)
        },
        dark: {
          "--bg": bgDark,
          "--ink": ensureContrast(h, neutralS * 0.4, 92, bgDark, 4.5, 1),
          "--ink-soft": ensureContrast(h, neutralS * 0.5, 68, bgDark, 3, 1),
          "--line": hslToHex(h, neutralS * 0.8, 20),
          "--accent": "#AFC2FF",
          "--accent-soft": "#0C2D7A",
          "--on-accent-soft": "#E3EAFF",
          "--case-bg": "#214E97",
          "--on-case": "#F4F7FF",
          "--status-explore": hslToHex(hComp, complS * 0.7, 74),
          "--status-explore-soft": hslToHex(hComp, complS * 0.6, 22)
        }
      };
    }

    function onReady(){
      var seed = extractSeed(avatarImg);
      if(!seed){
        /* Foto senza colore dominante riconoscibile (es. bianco e nero):
           rimuove eventuali variabili applicate da una cache di una foto
           precedente e torna alla palette statica del foglio di stile. */
        dynamicPalette = null;
        DYNAMIC_KEYS.forEach(function(k){ root.style.removeProperty(k); });
        try{ localStorage.removeItem(CACHE_KEY); } catch(e){}
        paintTheme();
        return;
      }
      dynamicPalette = buildPalette(seed);
      paintTheme();
      try{ localStorage.setItem(CACHE_KEY, JSON.stringify(dynamicPalette)); } catch(e){}
    }

    if(avatarImg.complete && avatarImg.naturalWidth){ onReady(); }
    else{ avatarImg.addEventListener("load", onReady); }
  })();

  /* ---- modali (contatti, perspectives) — <dialog> nativo ---- */
  var modalOpener = null;
  function openModal(id, opener){
    var dlg = document.getElementById(id);
    if(!dlg) return;
    modalOpener = opener || document.activeElement;
    document.body.style.overflow = "hidden";
    dlg.showModal();
  }
  document.querySelectorAll("[data-open-contacts]").forEach(function(el){ el.addEventListener("click", function(){ openModal("contactModal", el); }); });
  document.querySelectorAll("[data-open-modal]").forEach(function(el){ el.addEventListener("click", function(){ openModal(el.getAttribute("data-open-modal"), el); }); });
  document.querySelectorAll("[data-card-modal]").forEach(function(card){
    card.addEventListener("click", function(e){
      if(e.target.closest("button, a")) return;
      openModal(card.getAttribute("data-card-modal"), card);
    });
  });
  document.querySelectorAll("[data-card-href]").forEach(function(card){
    card.addEventListener("click", function(e){
      if(e.target.closest("button, a")) return;
      var target = document.querySelector(card.getAttribute("data-card-href"));
      if(target) target.scrollIntoView({behavior: window.matchMedia("(prefers-reduced-motion:reduce)").matches ? "auto" : "smooth", block: "start"});
    });
  });
  document.querySelectorAll("dialog [data-close]").forEach(function(btn){
    btn.addEventListener("click", function(){
      var dlg = btn.closest("dialog");
      if(dlg) dlg.close();
    });
  });
  document.querySelectorAll("dialog").forEach(function(dlg){
    dlg.addEventListener("click", function(e){
      var r = dlg.getBoundingClientRect();
      var inside = r.top <= e.clientY && e.clientY <= r.top + r.height && r.left <= e.clientX && e.clientX <= r.left + r.width;
      if(!inside) dlg.close();
    });
    dlg.addEventListener("close", function(){
      document.body.style.overflow = "";
      if(modalOpener && typeof modalOpener.focus === "function"){ modalOpener.focus(); }
      modalOpener = null;
    });
  });

  /* ---- contatori animati ---- */
  function setCountsFinal(scope){
    scope.querySelectorAll(".num").forEach(function(n){ n.textContent = n.getAttribute("data-count"); });
  }
  function animateCounts(scope){
    setCountsFinal(scope);
  }

  /* ---- reveal allo scroll ---- */
  var tiles = document.querySelectorAll(".rv");
  if("IntersectionObserver" in window){
    var io = new IntersectionObserver(function(entries){
      var batch = entries.filter(function(en){ return en.isIntersecting; });
      batch.forEach(function(en, i){
        var d = 150 + (i % 4) * 120;
        setTimeout(function(){
          en.target.classList.add("in");
          animateCounts(en.target);
        }, d);
        io.unobserve(en.target);
      });
    }, {threshold:0.12, rootMargin:"0px 0px -40px 0px"});
    var startObserving = function(){ tiles.forEach(function(t){ io.observe(t); }); };
    if(document.readyState === "complete"){ startObserving(); }
    else{ window.addEventListener("load", startObserving); }
  }else{
    tiles.forEach(function(t){ t.classList.add("in"); setCountsFinal(t); });
  }

  /* ---- fab: visibile solo oltre la hero, dove il pulsante Contatti non è più a vista ---- */
  (function(){
    var fab = document.querySelector(".fab");
    var hero = document.getElementById("profilo");
    if(!fab || !hero) return;
    if(!("IntersectionObserver" in window)){ fab.classList.add("visible"); return; }
    var heroIO = new IntersectionObserver(function(entries){
      entries.forEach(function(en){ fab.classList.toggle("visible", !en.isIntersecting); });
    }, {threshold:0});
    heroIO.observe(hero);
  })();

  /* ---- navigation feedback & reading progress ---- */
  var progress = document.querySelector(".scroll-progress");
  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".desktop-nav a, .hero-nav a"));
  var observedSections = navLinks.map(function(a){ return document.querySelector(a.getAttribute("href")); }).filter(Boolean);
  function updateProgress(){
    var doc = document.documentElement;
    var max = doc.scrollHeight - doc.clientHeight;
    progress.style.width = (max > 0 ? (doc.scrollTop / max) * 100 : 0) + "%";
  }
  window.addEventListener("scroll", updateProgress, {passive:true});
  updateProgress();
  if("IntersectionObserver" in window){
    var navIO = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          navLinks.forEach(function(a){
            var isActive = a.getAttribute("href") === "#" + entry.target.id;
            a.classList.toggle("active", isActive);
            if(isActive){ a.setAttribute("aria-current", "location"); } else { a.removeAttribute("aria-current"); }
          });
        }
      });
    }, {rootMargin:"-20% 0px -70% 0px",threshold:0});
    observedSections.forEach(function(sec){ navIO.observe(sec); });
  }

  /* ---- Material 3 Ripple Effect Logic ---- */
  function createRipple(event) {
    const button = event.currentTarget;
    const point = event.touches ? event.touches[0] : event;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${point.clientX - button.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${point.clientY - button.getBoundingClientRect().top - radius}px`;
    circle.classList.add("md-ripple");

    const existingRipple = button.querySelector(".md-ripple");
    if (existingRipple) {
      existingRipple.remove();
    }

    button.appendChild(circle);
  }

  /* Ripple disabled: the site now uses a single restrained interaction language. */

  applyLang();
})();

/* final mobile polish: hide FAB near footer */
(function(){
  var fab=document.querySelector('.fab');
  var footer=document.querySelector('footer');
  if(!fab||!footer||!('IntersectionObserver' in window)) return;
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(entry){fab.classList.toggle('near-footer',entry.isIntersecting);});
  },{rootMargin:'0px 0px 110px 0px',threshold:0});
  io.observe(footer);
})();
