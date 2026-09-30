(function(){
  var i18n = {
    it: {
      back_to_site:'Torna al sito',
      contribution_label:"Il mio contributo",
      c1_contribution:"Implementazione e messa in produzione, unificazione dei sistemi, integrazione delle fonti e manuale operativo.",
      c2_contribution:"Preparazione dei dataset, fine-tuning, deployment locale e dimostrazioni pratiche.",
      copy_case:"Copia link al progetto",
      case_copied:"Link copiato",
      case_copy_failed:"Copia il link dalla barra degli indirizzi.",

      page_index:'Indice', page_index_label:'Indice dei contenuti', case_index_label:'Indice del caso studio', related_label:'Contenuti collegati', theme_light:'Passa al tema chiaro', theme_dark:'Passa al tema scuro', theme_on_light:'Tema chiaro attivato', theme_on_dark:'Tema scuro attivato',
      c2_map_prose:'Dataset controllati e modelli eseguiti su infrastruttura locale hanno supportato demo con inferenza sotto controllo.', work_close:'Chiudi il progetto', colophon_title:'Contatti', colophon_note:'Sito personale. Le attività descritte sono presentate a titolo personale.',
      new_tab_hint:" (si apre in una nuova scheda)",
      copy_email:"Copia email", copy_phone:"Copia numero di telefono", copy_done:"Copiato negli appunti",
      reveal_email:"Mostra email", reveal_phone:"Mostra telefono",
      footer_privacy_link:"Informativa privacy",
      nav_home:"Home",
      privacy_title:"Informativa sulla privacy",
      privacy_intro:"Questo è il sito personale di Nicolò Forcolin. Non usa cookie, non installa strumenti di tracciamento o analytics e non raccoglie dati tramite moduli: qui sotto trovi esattamente cosa succede quando lo visiti.",
      privacy_s1_h:"Titolare del trattamento",
      privacy_s1_pre:"Nicolò Forcolin — Padova, Italia. Per qualsiasi richiesta relativa a questa informativa puoi scrivere a ", privacy_s1_post:".",
      privacy_s2_h:"Nessun cookie, nessun tracciamento",
      privacy_s2_p:"Il sito non utilizza cookie di alcun tipo (né tecnici, né di profilazione), non integra Google Analytics, Meta Pixel o strumenti equivalenti, e non contiene moduli di raccolta dati. Non è quindi presente alcun banner di consenso perché non c'è nulla da richiedere il consenso.",
      privacy_s3_h:"Log tecnici del server",
      privacy_s3_pre:"Il sito è ospitato su ", privacy_s3_post:", che per ragioni di sicurezza e funzionamento della rete registra in modo automatico i log tecnici standard di ogni richiesta HTTP (ad es. indirizzo IP, user agent, pagina richiesta, data e ora). Questi log sono gestiti direttamente da Vercel secondo la propria informativa privacy e non vengono utilizzati da questo sito per finalità di profilazione.",
      privacy_s4_h:"Dati mostrati sul sito",
      privacy_s4_p:"I recapiti (email, telefono, LinkedIn) pubblicati nella sezione Contatti sono dati personali dell'autore del sito, mostrati volontariamente per essere contattato. Il sito non li raccoglie né li elabora: sono semplicemente stampati nella pagina.",
      privacy_s5_h:"I tuoi diritti",
      privacy_s5_p:"In quanto non vengono raccolti dati personali dei visitatori, non ci sono trattamenti su cui esercitare i diritti previsti dagli articoli 15–22 del Regolamento (UE) 2016/679 (GDPR). Se ritieni comunque che qualcosa in questa pagina sia impreciso, scrivi all'indirizzo sopra indicato.",
      privacy_s6_h:"Modifiche a questa informativa",
      privacy_s6_p:"Questa informativa può essere aggiornata se cambiano gli strumenti usati dal sito (ad es. l'introduzione futura di analytics). La versione in vigore è sempre quella pubblicata su questa pagina.",
      privacy_updated:"Ultimo aggiornamento: settembre 2026.",
      cm_title:"Informazioni di contatto", cm_phone:"Telefono", cm_cert:"Certificazioni", cm_linkedin:"LinkedIn",
      nav_contatti:"Contatti",
      hero_cta1:"Esplora il mio lavoro",
      sec_chisono:"Bio",
      chisono_p:"Professionista IT che ha esteso il proprio contributo all’AI in produzione e alla sua adozione organizzativa.",
      sec_results_title:"Risultati",
      sec_work_title:"Progetto in produzione",
      sec_adoption_title:"AI in produzione e adozione",
      adoption_body:"Mi confronto con altri uffici sui loro progetti AI e raccolgo feedback sulle soluzioni in uso. Le richieste riguardano la gestione delle fonti di dati, i limiti alle risposte non fondate e la possibilità di costruire una base di conoscenza condivisa tra più uffici. Questo confronto contribuisce a definire le priorità di evoluzione tecnica e organizzativa.",
      sec_localai_title:"Local AI",
      sec_path_title:"Percorso",
      proof_label:"Risultati",
      p5k:"Progetto in produzione", p5d:"Knowledge retrieval su fonti aziendali di diversa provenienza, nato da due sistemi RAG successivamente unificati.", p5_link:"Vedi i progetti",
      p1k:"AI Advisory", p1d:"Advisory AI per due business unit interne e un CEO.", p1_link:"Vedi il percorso",
      p2k:"Enablement", p2d:"Cinque programmi di formazione sull’AI operativa.", p2_link:"Vedi il percorso",
      sec_lavori:"Progetti",
      tclub:"2026",
      club_tag:"Community & affiliazioni", club_desc:"Membro di una community professionale orientata a promuovere gentilezza, rispetto e qualità delle relazioni come elementi di leadership e cultura organizzativa.",
      work_view:"Vedi il progetto",
      c1_summary:"Da un'idea sviluppata insieme al mio Responsabile, ho realizzato due sistemi RAG in produzione per la documentazione aziendale e lo storico Jira. Li ho poi unificati in un progetto più ampio, integrando ulteriori fonti di diversa provenienza.",
      c2_summary:"Per valutare l’AI in contesti a dati sensibili, ho preparato dataset, adattato modelli e realizzato demo con inferenza locale.",
      case_problem_label:"Problema", case_solution_label:"Soluzione", case_approach_label:"Approccio", case_impact_label:"Impatto", case_responsibility_label:"Responsabilità", case_learning_label:"Cosa ho imparato", case_focus_label:"Focus", case_stack_label:"Stack",
      c1t:"Enterprise Knowledge Retrieval",
      c1_status:"Production · 2026",
      c1_problem:"La conoscenza aziendale esiste, ma è spesso frammentata. Documenti, procedure, manuali e ticket contengono informazioni utili distribuite tra fonti diverse. Per rispondere a una richiesta occorre cercarle, collegarle e ricostruirne il contesto.",
      c1_solution_1:"Da esigenze operative individuate insieme al mio Responsabile sono nati due sistemi RAG, che ho implementato e portato in produzione.",
      c1_solution_2:"Il primo rende interrogabile la documentazione aziendale, anche a supporto della comunicazione verso middle e top management. Il secondo rende interrogabile lo storico Jira per il team di lavoro e per le attività di Incident & Problem Management.",
      c1_solution_3:"Successivamente ho unificato i due sistemi in un progetto più ampio e vi ho integrato ulteriori fonti di diversa provenienza. Ho inoltre realizzato un manuale operativo strutturato per Service Desk, Incident & Problem Management e Middle Management.",
      c1_impact:"Un punto di accesso comune alla conoscenza aziendale: informazioni prima distribuite tra fonti separate possono essere reperite e collegate nel contesto delle attività operative e di management.",
      c1_responsibility:"Ho seguito il progetto dalla definizione delle esigenze operative con il mio Responsabile alla messa in produzione dei due RAG. Ne ho curato poi l'unificazione e l'ampliamento a fonti di diversa provenienza, insieme al manuale operativo per i diversi gruppi di utenti.",
      c1_learning:"L'evoluzione dai due sistemi iniziali a un progetto con fonti più numerose e diverse ha reso evidente che l'affidabilità di un RAG enterprise dipende anche dalla qualità e dalla struttura dei dati, dal contesto disponibile, dalle istruzioni, dai confini delle informazioni e dalle modalità di utilizzo. Mettere un sistema in produzione è solo una parte del lavoro: renderlo utile richiede attenzione continua a questi elementi e all'adozione da parte delle persone.",
      c2t:"Local AI for Sensitive Data Environments",
      c2_status:"Exploration · Mag – Giu 2026",
      c2_problem:"Valutare l’utilizzo di modelli AI in contesti sensibili mantenendo maggiore controllo su dati, infrastruttura e dipendenza da provider esterni.",
      c2_solution:"Ho esplorato la fattibilità di modelli AI eseguiti localmente, lavorando con Qwen, Gemma e architetture basate su Ollama. Il progetto ha incluso preparazione dei dataset, fine-tuning, deployment locale e dimostrazioni pratiche.",
      c2_learning:"Portare l'AI in un ambiente controllato non significa semplicemente eseguire un modello in locale. Infrastruttura, gestione dei dati, costi e governance diventano parte integrante della soluzione.",
      sec_percorso:"Percorso", sec_experiences:"Iniziative",
      job_current:"In corso",
      t1:"Set 2022 — oggi", tsa:"Mag 2025 — oggi", t2:"Feb 2022 — Set 2022", t3:"Ott 2020 — Feb 2022",
      pr1s:"SysAdmin. Supporto all'infrastruttura mission-critical del sistema camerale, con focus su affidabilità operativa. In parallelo, sviluppo e gestione di soluzioni AI in produzione integrate con knowledge e workflow aziendali.",
      prsa:"Diffusione di cultura digitale e adozione dell'AI in InfoCamere attraverso advisory, formazione e comunicazione tecnologica. Aiuto a tradurre tecnologie emergenti in conoscenza pratica e casi d'uso, contribuendo all'upskilling di oltre 35 professionisti.",
      pr2:"Specialista IT (stage). Primo ruolo IT operativo: supporto infrastrutturale, troubleshooting, la transizione dal business alla tecnologia — con una borsa di studio Google (WorkInTech, prima edizione italiana).",
      pr3:"Consulente assicurativo. Ruolo a contatto con il cliente in un settore fortemente regolamentato, dove fiducia, compliance e affidabilità pesano quanto il business stesso.",
      tdabo:"2026",
      dabo_tag:"Advisory esterna",
      dabo_title:"DABO · Advisory e candidatura internazionale",
      dabo_desc:"Ho fornito advisory al CEO di DABO su temi AI e sono stato parte del team SCWL a “Sprint Forward”, Shangcheng, in Cina. Il team non è stato selezionato per la finale del 9 settembre.",
      tpolitica:"2026",
      politica_tag:"Formazione selettiva",
      politica_title:"Meritare l'Europa — Scuola di Formazione Politica, Italia Viva",
      politica_desc:"Selezionato per il percorso 2026 dedicato a cittadinanza attiva, istituzioni e leadership pubblica, con focus su Europa, processi decisionali, innovazione tecnologica e AI.",
      sec_badge:"Credenziali",
      badge1_title:"Gemini Enterprise Agent Ready", badge1_meta:"Credential · 2026",
      badge2_title:"Google Cloud Innovator", badge2_meta:"Community program · 2025",
      badge3_title:"Google Developer Program — Premium Tier", badge3_meta:"Program status · 2026",
      nav_main_label:"Navigazione principale", theme_toggle_label:"Cambia tema", hero_proof_label:"Focus professionale", modal_close_label:"Chiudi",
      hero_proof1:"Enterprise IT @ InfoCamere", hero_proof3:"Google Cloud Innovator",
    },
    en: {
      back_to_site:'Back to website',
      contribution_label:"My contribution",
      c1_contribution:"Implementation and production deployment, system unification, source integration and an operating manual.",
      c2_contribution:"Dataset preparation, fine-tuning, local deployment and practical demonstrations.",
      copy_case:"Copy project link",
      case_copied:"Link copied",
      case_copy_failed:"Copy the link from the address bar.",

      page_index:'Index', page_index_label:'Contents index', case_index_label:'Case study index', related_label:'Related content', theme_light:'Switch to light theme', theme_dark:'Switch to dark theme', theme_on_light:'Light theme enabled', theme_on_dark:'Dark theme enabled',
      c2_map_prose:'Controlled datasets and models running on local infrastructure supported demos with controlled inference.', work_close:'Close project', colophon_title:'Contact', colophon_note:'Personal website. The activities described here are presented in a personal capacity.',
      new_tab_hint:" (opens in a new tab)",
      copy_email:"Copy email", copy_phone:"Copy phone number", copy_done:"Copied to clipboard",
      reveal_email:"Show email", reveal_phone:"Show phone number",
      footer_privacy_link:"Privacy notice",
      nav_home:"Home",
      privacy_title:"Privacy notice",
      privacy_intro:"This is the personal website of Nicolò Forcolin. It doesn't use cookies, doesn't install tracking or analytics tools, and doesn't collect data through forms: here's exactly what happens when you visit it.",
      privacy_s1_h:"Data controller",
      privacy_s1_pre:"Nicolò Forcolin — Padua, Italy. For any request about this notice, write to ", privacy_s1_post:".",
      privacy_s2_h:"No cookies, no tracking",
      privacy_s2_p:"The site doesn't use cookies of any kind (technical or profiling), doesn't integrate Google Analytics, Meta Pixel or similar tools, and has no data-collection forms. So there's no consent banner, because there's nothing to ask consent for.",
      privacy_s3_h:"Server technical logs",
      privacy_s3_pre:"The site is hosted on ", privacy_s3_post:", which for security and network operation purposes automatically records standard technical logs for every HTTP request (e.g. IP address, user agent, requested page, date and time). These logs are managed directly by Vercel under its own privacy policy and are not used by this site for profiling purposes.",
      privacy_s4_h:"Data shown on the site",
      privacy_s4_p:"The contact details (email, phone, LinkedIn) published in the Contact section are the site author's own personal data, shown voluntarily so people can get in touch. The site doesn't collect or process them: they're simply printed on the page.",
      privacy_s5_h:"Your rights",
      privacy_s5_p:"Since no personal data is collected from visitors, there is no processing to exercise the rights under Articles 15–22 of Regulation (EU) 2016/679 (GDPR) for. If you still believe something on this page is inaccurate, write to the address above.",
      privacy_s6_h:"Changes to this notice",
      privacy_s6_p:"This notice may be updated if the tools used by the site change (e.g. the future introduction of analytics). The version in force is always the one published on this page.",
      privacy_updated:"Last updated: September 2026.",
      cm_title:"Contact information", cm_phone:"Phone", cm_cert:"Certifications", cm_linkedin:"LinkedIn",
      nav_contatti:"Contact",
      hero_cta1:"Explore my work",
      sec_chisono:"Bio",
      chisono_p:"IT professional who has expanded his contribution to AI in production and its organizational adoption.",
      sec_results_title:"Results",
      sec_work_title:"Production Project",
      sec_adoption_title:"AI in Production & Adoption",
      adoption_body:"I work with other offices on their AI projects and gather feedback on solutions already in use. Their requests cover data source management, limiting unfounded answers, and the possibility of building a knowledge base shared across multiple offices. This exchange helps define technical and organizational priorities going forward.",
      sec_localai_title:"Local AI",
      sec_path_title:"Career path",
      proof_label:"Results",
      p5k:"Production project", p5d:"Knowledge retrieval across enterprise sources of different origins, born from two RAG systems later unified.", p5_link:"View projects",
      p1k:"AI Advisory", p1d:"AI advisory for two internal business units and one CEO.", p1_link:"See the path",
      p2k:"Enablement", p2d:"Five training programs on operational AI.", p2_link:"See experience",
      sec_lavori:"Projects",
      tclub:"2026",
      club_tag:"Community & affiliations", club_desc:"Member of a professional community focused on kindness, respect and quality of relationships as elements of leadership and organizational culture.",
      work_view:"View project",
      c1_summary:"From an idea developed together with my manager, I built two production RAG systems for corporate documentation and Jira history. I later unified them into a broader project, integrating additional sources from different origins.",
      c2_summary:"To assess AI in sensitive-data environments, I prepared datasets, adapted models and built demos with local inference.",
      case_problem_label:"Problem", case_solution_label:"Solution", case_approach_label:"Approach", case_impact_label:"Impact", case_responsibility_label:"Responsibility", case_learning_label:"Learning", case_focus_label:"Focus", case_stack_label:"Stack",
      c1t:"Enterprise Knowledge Retrieval",
      c1_status:"Production · 2026",
      c1_problem:"Enterprise knowledge exists, but it's often fragmented. Documents, procedures, manuals and tickets hold useful information scattered across different sources. Answering a request means searching for it, connecting it and reconstructing its context.",
      c1_solution_1:"Two RAG systems came out of operational needs identified together with my manager, which I implemented and brought into production.",
      c1_solution_2:"The first makes corporate documentation searchable, also supporting communication toward middle and top management. The second makes Jira history searchable for the team and for Incident & Problem Management.",
      c1_solution_3:"I later unified the two systems into a broader project and integrated additional sources from different origins. I also built an operating manual structured for Service Desk, Incident & Problem Management and Middle Management.",
      c1_impact:"A shared access point to enterprise knowledge: information that used to live in separate sources can now be found and connected in the context of operational and management activities.",
      c1_responsibility:"I followed the project from defining operational needs with my manager through to bringing the two RAG systems into production. I then led their unification and expansion to sources of different origins, together with the operating manual for the different user groups.",
      c1_learning:"The evolution from the two initial systems into a project with more numerous and varied sources made it clear that the reliability of an enterprise RAG also depends on data quality and structure, available context, instructions, information boundaries and usage patterns. Bringing a system into production is only part of the work: making it useful requires ongoing attention to these elements and to adoption by the people who use it.",
      c2t:"Local AI for Sensitive Data Environments",
      c2_status:"Exploration · May – Jun 2026",
      c2_problem:"Evaluate AI models in sensitive contexts while keeping greater control over data, infrastructure and dependency on external providers.",
      c2_solution:"I explored the feasibility of locally-run AI models, working with Qwen, Gemma and Ollama-based architectures. The project included dataset preparation, fine-tuning, local deployment and practical demos.",
      c2_learning:"Bringing AI into a controlled environment isn't just about running a model locally. Infrastructure, data management, cost and governance become an integral part of the solution.",
      sec_percorso:"Career", sec_experiences:"Initiatives",
      job_current:"Ongoing",
      t1:"Sep 2022 — today", tsa:"May 2025 — today", t2:"Feb 2022 — Sep 2022", t3:"Oct 2020 — Feb 2022",
      pr1s:"SysAdmin. Support for the mission-critical infrastructure of the Italian Chambers of Commerce system, with a focus on operational reliability. In parallel, I develop and operate AI solutions in production, integrated with corporate knowledge and workflows.",
      prsa:"Driving digital culture and AI adoption across InfoCamere through advisory, training and technology communication. I help translate emerging technologies into practical knowledge and use cases, contributing to the upskilling of 35+ professionals.",
      pr2:"IT Specialist (internship). First hands-on IT role: infrastructure support, troubleshooting, the transition from business to technology — with a Google scholarship (WorkInTech, first Italian edition).",
      pr3:"Insurance consultant. Client-facing role in a highly regulated industry, where trust, compliance and reliability matter as much as the business itself.",
      tdabo:"2026",
      dabo_tag:"External advisory",
      dabo_title:"DABO · Advisory & international bid",
      dabo_desc:"I provided AI advisory to DABO's CEO and was part of the SCWL team for “Sprint Forward” in Shangcheng, China. The team wasn't selected for the September 9 final.",
      tpolitica:"2026",
      politica_tag:"Selective education",
      politica_title:"Meritare l'Europa — School of Political Education, Italia Viva",
      politica_desc:"Selected for the 2026 program focused on active citizenship, institutions and public leadership, with a focus on Europe, decision-making processes, technological innovation and AI.",
      sec_badge:"Credentials",
      badge1_title:"Gemini Enterprise Agent Ready", badge1_meta:"Credential · 2026",
      badge2_title:"Google Cloud Innovator", badge2_meta:"Community program · 2025",
      badge3_title:"Google Developer Program — Premium Tier", badge3_meta:"Program status · 2026",
      nav_main_label:"Main navigation", theme_toggle_label:"Toggle theme", hero_proof_label:"Professional focus", modal_close_label:"Close",
      hero_proof1:"Enterprise IT @ InfoCamere", hero_proof3:"Google Cloud Innovator",
    },
    fr: {
      back_to_site:'Retour au site',
      contribution_label:"Ma contribution",
      c1_contribution:"Implémentation et mise en production, unification des systèmes, intégration des sources et manuel opérationnel.",
      c2_contribution:"Préparation des jeux de données, fine-tuning, déploiement local et démonstrations pratiques.",
      copy_case:"Copier le lien du projet",
      case_copied:"Lien copié",
      case_copy_failed:"Copiez le lien depuis la barre d’adresse.",

      page_index:'Sommaire', page_index_label:'Sommaire des contenus', case_index_label:'Sommaire de l’étude de cas', related_label:'Contenus associés', theme_light:'Passer au thème clair', theme_dark:'Passer au thème sombre', theme_on_light:'Thème clair activé', theme_on_dark:'Thème sombre activé',
      c2_map_prose:'Des jeux de données contrôlés et des modèles exécutés sur une infrastructure locale ont permis des démonstrations avec une inférence maîtrisée.', work_close:'Fermer le projet', colophon_title:'Contact', colophon_note:'Site personnel. Les activités décrites ici sont présentées à titre personnel.',
      new_tab_hint:" (s'ouvre dans un nouvel onglet)",
      copy_email:"Copier l'e-mail", copy_phone:"Copier le numéro de téléphone", copy_done:"Copié dans le presse-papiers",
      reveal_email:"Afficher l'e-mail", reveal_phone:"Afficher le numéro",
      footer_privacy_link:"Politique de confidentialité",
      nav_home:"Accueil",
      privacy_title:"Politique de confidentialité",
      privacy_intro:"Ceci est le site personnel de Nicolò Forcolin. Il n'utilise pas de cookies, n'installe pas d'outils de suivi ou d'analyse et ne collecte aucune donnée via un formulaire : voici exactement ce qui se passe lorsque vous le visitez.",
      privacy_s1_h:"Responsable du traitement",
      privacy_s1_pre:"Nicolò Forcolin — Padoue, Italie. Pour toute demande relative à cette politique, vous pouvez écrire à ", privacy_s1_post:".",
      privacy_s2_h:"Aucun cookie, aucun suivi",
      privacy_s2_p:"Le site n'utilise aucun cookie (ni technique, ni de profilage), n'intègre pas Google Analytics, Meta Pixel ou des outils équivalents, et ne contient aucun formulaire de collecte de données. Aucune bannière de consentement n'est donc présente, car il n'y a rien pour lequel demander un consentement.",
      privacy_s3_h:"Journaux techniques du serveur",
      privacy_s3_pre:"Le site est hébergé sur ", privacy_s3_post:", qui, pour des raisons de sécurité et de fonctionnement du réseau, enregistre automatiquement les journaux techniques standard de chaque requête HTTP (ex. adresse IP, user agent, page demandée, date et heure). Ces journaux sont gérés directement par Vercel selon sa propre politique de confidentialité et ne sont pas utilisés par ce site à des fins de profilage.",
      privacy_s4_h:"Données affichées sur le site",
      privacy_s4_p:"Les coordonnées (e-mail, téléphone, LinkedIn) publiées dans la section Contact sont des données personnelles de l'auteur du site, affichées volontairement pour être contacté. Le site ne les collecte ni ne les traite : elles sont simplement affichées sur la page.",
      privacy_s5_h:"Vos droits",
      privacy_s5_p:"Aucune donnée personnelle des visiteurs n'étant collectée, il n'y a pas de traitement sur lequel exercer les droits prévus aux articles 15 à 22 du Règlement (UE) 2016/679 (RGPD). Si vous pensez néanmoins qu'une information de cette page est inexacte, écrivez à l'adresse indiquée ci-dessus.",
      privacy_s6_h:"Modifications de cette politique",
      privacy_s6_p:"Cette politique peut être mise à jour si les outils utilisés par le site changent (par ex. l'introduction future d'outils d'analyse). La version en vigueur est toujours celle publiée sur cette page.",
      privacy_updated:"Dernière mise à jour : septembre 2026.",
      cm_title:"Coordonnées", cm_phone:"Téléphone", cm_cert:"Certifications", cm_linkedin:"LinkedIn",
      nav_contatti:"Contact",
      hero_cta1:"Découvrir mon travail",
      sec_chisono:"Bio",
      chisono_p:"Professionnel IT qui a élargi sa contribution à l’IA en production et à son adoption organisationnelle.",
      sec_results_title:"Résultats",
      sec_work_title:"Projet en production",
      sec_adoption_title:"IA en production et adoption",
      adoption_body:"J'échange avec d'autres services sur leurs projets IA et je recueille des retours sur les solutions déjà en usage. Leurs demandes portent sur la gestion des sources de données, la limitation des réponses non fondées et la possibilité de construire une base de connaissances partagée entre plusieurs services. Ces échanges contribuent à définir les priorités techniques et organisationnelles à venir.",
      sec_localai_title:"Local AI",
      sec_path_title:"Parcours",
      proof_label:"Résultats",
      p5k:"Projet en production", p5d:"Recherche de connaissances sur des sources d’entreprise de provenances diverses, née de deux systèmes RAG ensuite unifiés.", p5_link:"Voir les projets",
      p1k:"AI Advisory", p1d:"Conseil en IA pour deux unités internes et un CEO.", p1_link:"Voir le parcours",
      p2k:"Enablement", p2d:"Cinq programmes de formation à l’IA opérationnelle.", p2_link:"Voir le parcours",
      sec_lavori:"Projets",
      tclub:"2026",
      club_tag:"Communauté & affiliations", club_desc:"Membre d’une communauté professionnelle centrée sur la gentillesse, le respect et la qualité des relations comme éléments de leadership et de culture organisationnelle.",
      work_view:"Voir le projet",
      c1_summary:"Partant d’une idée développée avec mon responsable, j’ai réalisé deux systèmes RAG en production pour la documentation d’entreprise et l’historique Jira. Je les ai ensuite unifiés en un projet plus large, en intégrant d’autres sources de provenances diverses.",
      c2_summary:"Pour évaluer l’IA dans des environnements à données sensibles, j’ai préparé des jeux de données, adapté des modèles et réalisé des démonstrations en local.",
      case_problem_label:"Problème", case_solution_label:"Solution", case_approach_label:"Approche", case_impact_label:"Impact", case_responsibility_label:"Responsabilité", case_learning_label:"Learning", case_focus_label:"Focus", case_stack_label:"Stack",
      c1t:"Enterprise Knowledge Retrieval",
      c1_status:"Production · 2026",
      c1_problem:"La connaissance d'entreprise existe, mais elle est souvent fragmentée. Documents, procédures, manuels et tickets contiennent des informations utiles réparties entre différentes sources. Répondre à une demande implique de les chercher, de les relier et d'en reconstituer le contexte.",
      c1_solution_1:"De besoins opérationnels identifiés avec mon responsable sont nés deux systèmes RAG, que j'ai mis en œuvre et déployés en production.",
      c1_solution_2:"Le premier rend la documentation d'entreprise interrogeable, en soutenant aussi la communication vers le management intermédiaire et supérieur. Le second rend l'historique Jira interrogeable pour l'équipe et pour l'Incident & Problem Management.",
      c1_solution_3:"J'ai ensuite unifié les deux systèmes en un projet plus large et j'y ai intégré d'autres sources de provenances diverses. J'ai également conçu un manuel opérationnel structuré pour le Service Desk, l'Incident & Problem Management et le Middle Management.",
      c1_impact:"Un point d'accès commun à la connaissance d'entreprise : des informations auparavant réparties entre sources séparées peuvent désormais être retrouvées et reliées dans le contexte des activités opérationnelles et de management.",
      c1_responsibility:"J'ai suivi le projet depuis la définition des besoins opérationnels avec mon responsable jusqu'à la mise en production des deux RAG. J'ai ensuite piloté leur unification et leur extension à des sources de provenances diverses, avec le manuel opérationnel pour les différents groupes d'utilisateurs.",
      c1_learning:"L'évolution des deux systèmes initiaux vers un projet aux sources plus nombreuses et diverses a rendu évident que la fiabilité d'un RAG enterprise dépend aussi de la qualité et de la structure des données, du contexte disponible, des instructions, des limites de l'information et des modes d'utilisation. Mettre un système en production n'est qu'une partie du travail : le rendre utile demande une attention continue à ces éléments et à son adoption par les personnes.",
      c2t:"Local AI for Sensitive Data Environments",
      c2_status:"Exploration · Mai – juin 2026",
      c2_problem:"Évaluer les modèles d'IA dans des contextes sensibles en gardant un meilleur contrôle sur les données, l'infrastructure et la dépendance aux fournisseurs externes.",
      c2_solution:"J'ai exploré la faisabilité de modèles d'IA exécutés localement, en travaillant avec Qwen, Gemma et des architectures basées sur Ollama. Le projet a inclus la préparation des jeux de données, le fine-tuning, le déploiement local et des démonstrations pratiques.",
      c2_learning:"Amener l'IA dans un environnement contrôlé ne consiste pas simplement à exécuter un modèle en local. L'infrastructure, la gestion des données, les coûts et la gouvernance font partie intégrante de la solution.",
      sec_percorso:"Parcours", sec_experiences:"Initiatives",
      job_current:"En cours",
      t1:"Sept. 2022 — aujourd'hui", tsa:"Mai 2025 — aujourd'hui", t2:"Févr. 2022 — sept. 2022", t3:"Oct. 2020 — févr. 2022",
      pr1s:"SysAdmin. Support de l'infrastructure critique du système des Chambres de commerce italiennes, avec un accent sur la fiabilité opérationnelle. En parallèle, je développe et exploite des solutions IA en production, intégrées aux connaissances et aux workflows de l'entreprise.",
      prsa:"Promotion de la culture numérique et de l'adoption de l'IA chez InfoCamere à travers le conseil, la formation et la communication technologique. J'aide à traduire les technologies émergentes en connaissances pratiques et cas d'usage, contribuant à l'upskilling de plus de 35 professionnels.",
      pr2:"Spécialiste IT (stage). Premier rôle IT concret : support infrastructure, troubleshooting, la transition du business vers la technologie — avec une bourse Google (WorkInTech, première édition italienne).",
      pr3:"Consultant assurance. Rôle au contact du client dans un secteur fortement réglementé, où la confiance, la conformité et la fiabilité comptent autant que le business lui-même.",
      tdabo:"2026",
      dabo_tag:"Conseil externe",
      dabo_title:"DABO · Conseil et candidature internationale",
      dabo_desc:"J'ai fourni du conseil en IA au CEO de DABO et j'ai fait partie de l'équipe SCWL pour « Sprint Forward » à Shangcheng, en Chine. L'équipe n'a pas été sélectionnée pour la finale du 9 septembre.",
      tpolitica:"2026",
      politica_tag:"Formation sélective",
      politica_title:"Meritare l'Europa — École de formation politique, Italia Viva",
      politica_desc:"Sélectionné pour le programme 2026 consacré à la citoyenneté active, aux institutions et au leadership public, avec un focus sur l'Europe, les processus décisionnels, l'innovation technologique et l'IA.",
      sec_badge:"Accréditations",
      badge1_title:"Gemini Enterprise Agent Ready", badge1_meta:"Credential · 2026",
      badge2_title:"Google Cloud Innovator", badge2_meta:"Community program · 2025",
      badge3_title:"Google Developer Program — Premium Tier", badge3_meta:"Program status · 2026",
      nav_main_label:"Navigation principale", theme_toggle_label:"Changer de thème", hero_proof_label:"Axes professionnels", modal_close_label:"Fermer",
      hero_proof1:"Enterprise IT @ InfoCamere", hero_proof3:"Google Cloud Innovator",
    }
  };

  /* ---- contatti: costruiti a runtime e mostrati solo dopo un click, per limitare la raccolta automatica ---- */
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
    }, { once: true });
  }
  (function(){
    var eu = "nicolo.forcolin", ed = "infocamere.it";
    var email = eu + "@" + ed;
    var pn = ["+39", "347", "908", "1966"];
    var phoneDisplay = pn.join(" ");
    var phoneHref = "tel:" + pn.join("").replace(/\s/g, "");
    revealRow("cmEmail", "reveal_email", "Mostra email", function(){
      return '<a href="mailto:' + email + '">' + email + "</a>" + copyBtn(email, "copy_email");
    });
    revealRow("cmPhone", "reveal_phone", "Mostra telefono", function(){
      return '<a href="' + phoneHref + '">' + phoneDisplay + "</a>" + copyBtn(phoneDisplay, "copy_phone");
    });
  })();

  var root = document.documentElement;
  var LANG_KEY = "nfLang";
  var savedLang = null;
  try{ savedLang = localStorage.getItem(LANG_KEY); }catch(e){}
  var lang = (savedLang && i18n[savedLang]) ? savedLang : "it";

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
      var selected = b.getAttribute("data-lang") === lang;
      b.classList.toggle("on", selected);
      b.setAttribute("aria-pressed", String(selected));
    });
    paintTheme();
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
      t.setAttribute("aria-label", i18n[lang][dark ? "theme_light" : "theme_dark"]);
      t.setAttribute("aria-pressed", String(dark));
    });
    if(themeColorMeta) themeColorMeta.setAttribute("content", dark ? "#1B1A17" : "#F8F7F4");
  }
  var themeAnnouncer = document.getElementById("themeAnnouncer");
  function announceTheme(dark){
    if(themeAnnouncer) themeAnnouncer.textContent = i18n[lang][dark ? "theme_on_dark" : "theme_on_light"];
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

  /* Native readers remain usable without JavaScript. Hashes open the
     appropriate reader before navigation, including direct entry and Back. */
  var menu = document.getElementById("pageIndex");
  var readers = Array.prototype.slice.call(document.querySelectorAll(".case-reader"));
  function hashTarget(hash){
    try{ return hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null; }
    catch(e){ return null; }
  }
  var projectDialog = null;
  var activeReader = null;
  var activeLayout = null;
  function restoreProject(){
      if(!activeReader) return;
      var reader = activeReader;
      var target = hashTarget(location.hash);
      if(target && projectDialog.contains(target)) history.replaceState(null,'','#'+reader.getAttribute('aria-labelledby'));
      reader.appendChild(activeLayout);
      reader.open = false;
      activeReader = null; activeLayout = null;
      root.classList.remove('reading-project');
      reader.querySelector('summary').focus();
  }
  function closeProject(){
    if(!projectDialog || !projectDialog.open) return;
    restoreProject();
    projectDialog.close();
  }
  function openProject(reader){
    if(!projectDialog || activeReader === reader) return;
    if(activeReader) closeProject();
    activeReader = reader;
    activeLayout = reader.querySelector('.reader-layout');
    var card = reader.closest('.work-card');
    var title = card.querySelector('.work-title');
    var status = card.querySelector('.work-meta');
    var intro = card.querySelector('[data-i18n="c1_impact"], [data-i18n="c2_summary"]');
    var head = projectDialog.querySelector('.project-reader-head');
    head.textContent = '';
    [status, title, intro].forEach(function(source){
      if(!source) return;
      var el = document.createElement(source === title ? 'h2' : 'p');
      el.className = source === title ? 'project-reader-title' : source === status ? 'work-meta' : 'project-reader-intro';
      el.textContent = source.textContent;
      if(source.hasAttribute('data-i18n')) el.setAttribute('data-i18n', source.getAttribute('data-i18n'));
      if(source === title) el.id = 'project-reader-title';
      head.appendChild(el);
    });
    reader.open = true;
    projectDialog.appendChild(activeLayout);
    root.classList.add('reading-project');
    projectDialog.showModal();
    projectDialog.scrollTop = 0;
    projectDialog.querySelector('.project-reader-back').focus();
  }
  if(typeof HTMLDialogElement !== 'undefined' && readers.length){
    projectDialog = document.createElement('dialog');
    projectDialog.className = 'project-reader';
    projectDialog.setAttribute('aria-labelledby','project-reader-title');
    projectDialog.innerHTML = '<button type="button" class="work-link project-reader-back" data-i18n="back_to_site">Torna al sito</button><header class="project-reader-head"></header>';
    document.body.appendChild(projectDialog);
    projectDialog.querySelector('button').addEventListener('click',closeProject);
    projectDialog.addEventListener('close',restoreProject);
    readers.forEach(function(reader){
      reader.querySelector('summary').addEventListener('click',function(event){
        event.preventDefault(); openProject(reader);
        history.pushState(null,'','#'+reader.id);
      });
    });
  }
  function expose(target){
    if(!target) return;
    var reader = target.closest(".case-reader");
    if(reader){ reader.open = true; if(projectDialog) openProject(reader); }
  }
  function navigateHash(){
    var target = hashTarget(location.hash);
    if(activeReader && (!target || (!projectDialog.contains(target) && target !== activeReader))) closeProject();
    expose(target);
    if(target) requestAnimationFrame(function(){ target.scrollIntoView({block:"start", behavior:"instant"}); });
  }
  document.querySelectorAll('a[href^="#"]').forEach(function(link){
    link.addEventListener("click", function(){
      var target = hashTarget(link.getAttribute("href"));
      if(activeReader && target && !projectDialog.contains(target) && target !== activeReader) closeProject();
      expose(target);
      if(menu) menu.open = false;
      if(target){
        if(!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
        requestAnimationFrame(function(){ target.focus({preventScroll:true}); });
      }
    });
  });
  window.addEventListener("hashchange", navigateHash);
  document.querySelectorAll("[data-reader-close]").forEach(function(button){
    button.addEventListener("click", function(){
      var reader = document.getElementById(button.getAttribute("data-reader-close"));
      if(activeReader === reader){ closeProject(); return; }
      reader.open = false;
      if(hashTarget(location.hash) && reader.contains(hashTarget(location.hash))){
        history.replaceState(null, "", "#" + reader.getAttribute("aria-labelledby"));
      }
      reader.querySelector("summary").focus();
    });
  });
  if(menu){
    document.addEventListener("click", function(event){ if(!menu.contains(event.target)) menu.open = false; });
    document.addEventListener("keydown", function(event){
      if(event.key === "Escape" && menu.open){ menu.open = false; menu.querySelector("summary").focus(); }
    });
  }

  /* The same section index drives desktop and mobile navigation feedback. */
  var progress = document.querySelector(".scroll-progress");
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.desktop-nav a, .page-index-links a, .section-rail-links a'));
  var sectionIds = Array.from(new Set(navLinks.map(function(a){ return a.hash.slice(1); })));
  var sections = sectionIds.map(function(id){ return document.getElementById(id); }).filter(Boolean);
  var queued = false;
  function updateNavigation(){
    queued = false;
    var bar = document.getElementById("topbar");
    var offset = bar ? Math.ceil(bar.getBoundingClientRect().height) + 16 : 80;
    root.style.setProperty("--nav-offset", offset + "px");
    var top = offset + 12;
    var active = null;
    sections.forEach(function(section){ if(section.getBoundingClientRect().top <= top) active = section.id; });
    navLinks.forEach(function(link){
      var selected = link.hash === "#" + active;
      link.classList.toggle("active", selected);
      if(selected) link.setAttribute("aria-current", "location"); else link.removeAttribute("aria-current");
    });
    document.querySelectorAll(".case-index a").forEach(function(link){ link.removeAttribute("aria-current"); });
    readers.forEach(function(reader){
      if(!reader.open) return;
      var scope = activeReader === reader ? projectDialog : reader;
      var links = Array.prototype.slice.call(scope.querySelectorAll(".case-index a"));
      var selected = null;
      links.forEach(function(link){ var target = hashTarget(link.hash); if(target && target.getBoundingClientRect().top <= top + 18) selected = link; });
      if(selected) selected.setAttribute("aria-current", "location");
    });
    var max = root.scrollHeight - root.clientHeight;
    if(progress) progress.style.width = (max > 0 ? root.scrollTop / max * 100 : 0) + "%";
  }
  function queueNavigation(){ if(!queued){ queued = true; requestAnimationFrame(updateNavigation); } }
  window.addEventListener("scroll", queueNavigation, {passive:true});
  window.addEventListener("resize", queueNavigation);
  readers.forEach(function(reader){ reader.addEventListener("toggle", function(){
    var target = hashTarget(location.hash);
    if(!reader.open && target && reader.contains(target)){
      history.replaceState(null, "", "#" + reader.getAttribute("aria-labelledby"));
    }
    queueNavigation();
  }); });
  if("ResizeObserver" in window){
    var bar = document.getElementById("topbar");
    if(bar) new ResizeObserver(queueNavigation).observe(bar);
  }
  if(projectDialog) projectDialog.addEventListener('scroll',queueNavigation,{passive:true});
  updateNavigation();
  navigateHash();

  document.querySelectorAll('[data-copy-case]').forEach(function(button){
    button.addEventListener('click', async function(){
      var id = button.getAttribute('data-copy-case');
      var url = new URL(location.href); url.hash = id;
      var feedback = button.nextElementSibling;
      try { await navigator.clipboard.writeText(url.href); feedback.textContent = i18n[lang].case_copied; }
      catch(e) { location.hash = id; feedback.textContent = i18n[lang].case_copy_failed; }
    });
  });
  applyLang();
})();


