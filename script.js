(function(){
  var i18n = {
    it: {
      back_to_site:'Torna al sito',
      contribution_label:"Il mio contributo",
      c1_contribution:"Ho implementato e messo in produzione i due sistemi, poi ho integrato le fonti e scritto il manuale operativo.",
      c2_contribution:"Ho preparato i dataset, fatto il fine-tuning, portato i modelli in locale e costruito le demo.",
      copy_case:"Copia link al progetto",
      case_copied:"Link copiato",
      case_copy_failed:"Copia il link dalla barra degli indirizzi.",

      page_index:'Indice', page_index_label:'Indice dei contenuti', case_index_label:'Indice del caso studio', related_label:'Contenuti collegati', theme_light:'Passa al tema chiaro', theme_dark:'Passa al tema scuro', theme_on_light:'Tema chiaro attivato', theme_on_dark:'Tema scuro attivato',
      c2_map_prose:'Le demo girano su dataset controllati e modelli in esecuzione su infrastruttura locale, quindi l’inferenza resta sotto controllo.', work_close:'Chiudi il progetto', colophon_title:'Contatti', colophon_note:'Sito personale. Le attività descritte sono presentate a titolo personale.',
      new_tab_hint:" (si apre in una nuova scheda)",
      copy_email:"Copia email", copy_phone:"Copia numero di telefono", copy_done:"Copiato negli appunti",
      reveal_email:"Mostra email", reveal_phone:"Mostra telefono",
      footer_privacy_link:"Informativa privacy",
      nav_home:"Home",
      privacy_title:"Informativa sulla privacy",
      privacy_intro:"Questo è il sito personale di Nicolò Forcolin. Non usa cookie né strumenti di analytics e non raccoglie dati tramite moduli. Qui sotto trovi cosa succede esattamente quando lo visiti.",
      privacy_s1_h:"Titolare del trattamento",
      privacy_s1_pre:"Nicolò Forcolin — Padova, Italia. Per qualsiasi richiesta relativa a questa informativa puoi scrivere a ", privacy_s1_post:".",
      privacy_s2_h:"Nessun cookie, nessun tracciamento",
      privacy_s2_p:"Il sito non usa cookie di alcun tipo, né tecnici né di profilazione. Non integra Google Analytics, Meta Pixel o strumenti simili e non ha moduli di raccolta dati. Per questo non c’è un banner di consenso.",
      privacy_s3_h:"Log tecnici del server",
      privacy_s3_pre:"Il sito è ospitato su ", privacy_s3_post:", che per ragioni di sicurezza e funzionamento della rete registra in modo automatico i log tecnici standard di ogni richiesta HTTP (ad es. indirizzo IP, user agent, pagina richiesta, data e ora). Questi log sono gestiti direttamente da Vercel secondo la propria informativa privacy e non vengono utilizzati da questo sito per finalità di profilazione.",
      privacy_s4_h:"Dati mostrati sul sito",
      privacy_s4_p:"I recapiti (email, telefono, LinkedIn) pubblicati nella sezione Contatti sono dati personali dell'autore del sito, mostrati volontariamente per essere contattato. Il sito non li raccoglie né li elabora: sono semplicemente stampati nella pagina.",
      privacy_s5_h:"I tuoi diritti",
      privacy_s5_p:"In quanto non vengono raccolti dati personali dei visitatori, non ci sono trattamenti su cui esercitare i diritti previsti dagli articoli 15–22 del Regolamento (UE) 2016/679 (GDPR). Se ritieni comunque che qualcosa in questa pagina sia impreciso, scrivi all'indirizzo sopra indicato.",
      privacy_s6_h:"Modifiche a questa informativa",
      privacy_s6_p:"Questa informativa può essere aggiornata se cambiano gli strumenti usati dal sito (ad es. l'introduzione futura di analytics). La versione in vigore è sempre quella pubblicata su questa pagina.",
      privacy_updated:"Ultimo aggiornamento: settembre 2026.", cm_phone:"Telefono", cm_cert:"Certificazioni",
      nav_contatti:"Contatti",
      hero_cta1:"Esplora il mio lavoro",
      sec_chisono:"Bio",
      chisono_p:"Ho portato in produzione due sistemi RAG che rendono accessibili documentazione e storico Jira, poi li ho uniti in un solo progetto. La parte difficile è stata capire come renderli utili a chi li usa.",
      sec_results_title:"Risultati",
      sec_work_title:"Progetto in produzione",
      sec_adoption_title:"AI in produzione e adozione",
      adoption_body:"Confronto i progetti AI con altri uffici e raccolgo feedback sulle soluzioni in uso. Le richieste riguardano le fonti di dati, i limiti alle risposte non fondate e una base di conoscenza condivisa tra uffici. Da qui si decidono le priorità tecniche e organizzative.",
      sec_localai_title:"Local AI",
      sec_path_title:"Percorso",
      proof_label:"Risultati",
      stat1_label:"Progetto in produzione", stat1_desc:"Knowledge retrieval su fonti aziendali diverse: nato da due sistemi RAG, poi unificati.", stat1_link:"Vedi i progetti",
      stat2_label:"AI Advisory", stat2_desc:"Advisory AI per due business unit interne e un CEO.", stat2_link:"Vedi il percorso",
      stat3_label:"Enablement", stat3_desc:"Cinque programmi di formazione sull’AI operativa.", stat3_link:"Vedi il percorso",
      sec_lavori:"Progetti",
      date_club:"2026",
      club_tag:"Community & affiliazioni", club_desc:"Community professionale che promuove gentilezza, rispetto e qualità delle relazioni come parte della leadership e della cultura organizzativa.",
      work_view:"Vedi il progetto",
      c1_summary:"Da un'idea sviluppata insieme al mio Responsabile, ho realizzato due sistemi RAG in produzione per la documentazione aziendale e lo storico Jira. Li ho poi unificati in un progetto più ampio, integrando ulteriori fonti di diversa provenienza.",
      c2_summary:"Ho preparato dataset, adattato modelli e costruito demo con inferenza locale, per valutare l’AI con dati sensibili.",
      case_problem_label:"Problema", case_solution_label:"Soluzione", case_approach_label:"Approccio", case_impact_label:"Impatto", case_responsibility_label:"Responsabilità", case_learning_label:"Cosa ho imparato", case_focus_label:"Focus", case_stack_label:"Stack",
      case1_title:"Enterprise Knowledge Retrieval",
      c1_status:"Production · 2026",
      c1_problem:"La conoscenza aziendale c’è, ma è frammentata. Documenti, procedure, manuali e ticket hanno informazioni utili sparse tra fonti diverse. Per rispondere a una richiesta bisogna trovarle e ricostruirne il contesto a mano.",
      c1_solution_1:"Con il mio Responsabile ho definito le esigenze operative. Ne sono nati due sistemi RAG, che ho implementato e messo in produzione.",
      c1_solution_2:"Il primo rende interrogabile la documentazione aziendale, anche per la comunicazione verso middle e top management. Il secondo rende interrogabile lo storico Jira, per il team di lavoro e per Incident & Problem Management.",
      c1_solution_3:"Poi ho unito i due sistemi in un progetto più ampio, con altre fonti di diversa provenienza. Ho scritto anche un manuale operativo per Service Desk, Incident & Problem Management e Middle Management.",
      c1_impact:"Documentazione aziendale e storico Jira si consultavano separatamente. Con i due RAG e la loro unificazione, ricostruire il contesto di una richiesta operativa è più semplice.",
      c1_responsibility:"Ho seguito il progetto dalla definizione delle esigenze con il mio Responsabile fino alla messa in produzione dei due RAG. Poi ne ho curato l’unificazione e l’estensione ad altre fonti, insieme al manuale per i diversi gruppi di utenti.",
      c1_learning:"Dopo il rilascio, alcuni utenti continuavano a cercare a mano. Sono emersi rallentamenti e lacune nei dati: un modello funzionante non bastava. Ho lavorato sulla documentazione operativa e parlando direttamente con gli utenti. Prima di ampliare un RAG servono fonti affidabili e istruzioni chiare sul suo uso.",
      case2_title:"Local AI for Sensitive Data Environments",
      c2_status:"Exploration · Mag – Giu 2026",
      c2_problem:"Capire come usare l’AI con dati sensibili, tenendo sotto controllo dati e infrastruttura e riducendo la dipendenza da provider esterni.",
      c2_solution:"Ho provato modelli in esecuzione locale, con Qwen, Gemma e Ollama. Ho preparato i dataset, fatto il fine-tuning, messo in piedi l’esecuzione in locale e costruito demo.",
      c2_learning:"Portare l'AI in un ambiente controllato comporta gestire infrastruttura, dati, costi e governance insieme all'esecuzione del modello in locale.",
      sec_percorso:"Percorso", sec_experiences:"Iniziative",
      job_current:"In corso",
      date_current:"Set 2022 — oggi", date_social_ambassador:"Mag 2025 — oggi", date_ideagrip:"Feb 2022 — Set 2022", date_generali:"Ott 2020 — Feb 2022",
      job_infocamere:"SysAdmin. Supporto all'infrastruttura mission-critical del sistema camerale, con focus su affidabilità operativa. In parallelo, sviluppo e gestione di soluzioni AI in produzione integrate con knowledge e workflow aziendali.",
      social_ambassador_desc:"Diffondo cultura digitale e adozione dell’AI in InfoCamere con advisory, formazione e comunicazione tecnologica. Traduco le tecnologie emergenti in conoscenza pratica e casi d’uso, e ho contribuito alla formazione di oltre 35 professionisti.",
      job_ideagrip:"Specialista IT in stage, primo ruolo operativo: supporto infrastrutturale, troubleshooting, passaggio dal business alla tecnologia. Borsa di studio Google (WorkInTech, prima edizione italiana).",
      job_generali:"Consulente assicurativo, in contatto diretto con il cliente in un settore molto regolamentato. Fiducia, compliance e affidabilità contano quanto il business.",
      date_dabo:"2026",
      dabo_tag:"Advisory esterna",
      dabo_title:"DABO · Advisory e candidatura internazionale",
      dabo_desc:"Ho fornito advisory al CEO di DABO su temi AI. Sono stato nel team SCWL a “Sprint Forward”, a Shangcheng, in Cina. Il team non è stato selezionato per la finale del 9 settembre.",
      date_politica:"2026",
      politica_tag:"Formazione politica",
      politica_title:"Meritare l'Europa — Scuola di Formazione Politica, Italia Viva",
      politica_desc:"Partecipante all’edizione 2026 del programma di formazione politica di Italia Viva, su affari europei, istituzioni, economia, tecnologia e politiche pubbliche.",
      date_pizz:"30 settembre 2026", pizz_tag:"Networking", pizz_title:"Pizz'n'Meet — Padova", pizz_desc:"Una serata con professionisti di settori diversi: ci si presenta, si racconta cosa si fa e si ascoltano esperienze lontane dalla propria. Guidata da una Pizz'n'Meet Ambassador. Sono tornato con nuovi contatti e qualche consiglio.",
      sec_badge:"Credenziali",
      badge1_title:"Gemini Enterprise Agent Ready", badge1_meta:"Credential · 2026",
      badge2_title:"Google Cloud Innovator", badge2_meta:"Community program · 2025",
      badge3_title:"Google Developer Program — Premium Tier", badge3_meta:"Program status · 2026",
      nav_main_label:"Navigazione principale", theme_toggle_label:"Cambia tema", hero_proof_label:"Focus professionale",
      hero_proof1:"Enterprise IT @ InfoCamere", hero_proof3:"Google Cloud Innovator",
    },
    en: {
      back_to_site:'Back to website',
      contribution_label:"My contribution",
      c1_contribution:"I implemented and put the two systems into production, then integrated the sources and wrote the operating manual.",
      c2_contribution:"I prepared the datasets, ran the fine-tuning, moved the models to local infrastructure and built the demos.",
      copy_case:"Copy project link",
      case_copied:"Link copied",
      case_copy_failed:"Copy the link from the address bar.",

      page_index:'Index', page_index_label:'Contents index', case_index_label:'Case study index', related_label:'Related content', theme_light:'Switch to light theme', theme_dark:'Switch to dark theme', theme_on_light:'Light theme enabled', theme_on_dark:'Dark theme enabled',
      c2_map_prose:'Demos run on controlled datasets and models running on local infrastructure, so inference stays under control.', work_close:'Close project', colophon_title:'Contact', colophon_note:'Personal website. The activities described here are presented in a personal capacity.',
      new_tab_hint:" (opens in a new tab)",
      copy_email:"Copy email", copy_phone:"Copy phone number", copy_done:"Copied to clipboard",
      reveal_email:"Show email", reveal_phone:"Show phone number",
      footer_privacy_link:"Privacy notice",
      nav_home:"Home",
      privacy_title:"Privacy notice",
      privacy_intro:"This is the personal website of Nicolò Forcolin. It uses no cookies or analytics tools and collects no data through forms. Below you can see exactly what happens when you visit it.",
      privacy_s1_h:"Data controller",
      privacy_s1_pre:"Nicolò Forcolin — Padua, Italy. For any request about this notice, write to ", privacy_s1_post:".",
      privacy_s2_h:"No cookies, no tracking",
      privacy_s2_p:"The site uses no cookies of any kind, technical or profiling. It does not integrate Google Analytics, Meta Pixel or similar tools, and has no data collection forms. That is why there is no consent banner.",
      privacy_s3_h:"Server technical logs",
      privacy_s3_pre:"The site is hosted on ", privacy_s3_post:", which for security and network operation purposes automatically records standard technical logs for every HTTP request (e.g. IP address, user agent, requested page, date and time). These logs are managed directly by Vercel under its own privacy policy and are not used by this site for profiling purposes.",
      privacy_s4_h:"Data shown on the site",
      privacy_s4_p:"The contact details (email, phone, LinkedIn) published in the Contact section are the site author's own personal data, shown voluntarily so people can get in touch. The site doesn't collect or process them: they're simply printed on the page.",
      privacy_s5_h:"Your rights",
      privacy_s5_p:"Since no personal data is collected from visitors, there is no processing to exercise the rights under Articles 15–22 of Regulation (EU) 2016/679 (GDPR) for. If you still believe something on this page is inaccurate, write to the address above.",
      privacy_s6_h:"Changes to this notice",
      privacy_s6_p:"This notice may be updated if the tools used by the site change (e.g. the future introduction of analytics). The version in force is always the one published on this page.",
      privacy_updated:"Last updated: September 2026.", cm_phone:"Phone", cm_cert:"Certifications",
      nav_contatti:"Contact",
      hero_cta1:"Explore my work",
      sec_chisono:"Bio",
      chisono_p:"I put two RAG systems into production, one for documentation and one for the Jira history, then merged them into a single project. The hard part was working out how to make them useful to the people who use them.",
      sec_results_title:"Results",
      sec_work_title:"Production Project",
      sec_adoption_title:"AI in Production & Adoption",
      adoption_body:"I compare AI projects with other offices and collect feedback on the solutions in use. Requests cover data sources, limits on ungrounded answers and a shared knowledge base across offices. These discussions set technical and organizational priorities.",
      sec_localai_title:"Local AI",
      sec_path_title:"Career path",
      proof_label:"Results",
      stat1_label:"Production project", stat1_desc:"Knowledge retrieval across different company sources, starting from two RAG systems later unified.", stat1_link:"View projects",
      stat2_label:"AI Advisory", stat2_desc:"AI advisory for two internal business units and one CEO.", stat2_link:"See the path",
      stat3_label:"Enablement", stat3_desc:"Five training programs on operational AI.", stat3_link:"See experience",
      sec_lavori:"Projects",
      date_club:"2026",
      club_tag:"Community & affiliations", club_desc:"A professional community that promotes kindness, respect and quality of relationships as part of leadership and organizational culture.",
      work_view:"View project",
      c1_summary:"From an idea developed together with my manager, I built two production RAG systems for corporate documentation and Jira history. I later unified them into a broader project, integrating additional sources from different origins.",
      c2_summary:"I prepared datasets, adapted models and built demos with local inference, to evaluate AI on sensitive data.",
      case_problem_label:"Problem", case_solution_label:"Solution", case_approach_label:"Approach", case_impact_label:"Impact", case_responsibility_label:"Responsibility", case_learning_label:"Learning", case_focus_label:"Focus", case_stack_label:"Stack",
      case1_title:"Enterprise Knowledge Retrieval",
      c1_status:"Production · 2026",
      c1_problem:"Company knowledge exists, but it is fragmented. Documents, procedures, manuals and tickets hold useful information spread across different sources. To answer a request, you have to find it and rebuild the context by hand.",
      c1_solution_1:"Together with my manager I defined the operational needs. Two RAG systems came out of it, which I implemented and put into production.",
      c1_solution_2:"The first makes company documentation searchable, including for communication to middle and top management. The second makes the Jira history searchable, for the working team and for Incident & Problem Management.",
      c1_solution_3:"I then merged the two systems into a broader project, adding other sources from different origins. I also wrote an operating manual for Service Desk, Incident & Problem Management and Middle Management.",
      c1_impact:"Company documents and the Jira history were consulted separately. Building the two RAG systems and merging them makes it easier to rebuild the context of an operational request.",
      c1_responsibility:"I followed the project from defining the operational needs with my manager to putting the two RAG systems into production. I then led their merger and extension to other sources, together with the operating manual for the different user groups.",
      c1_learning:"After the release, some users kept searching by hand. Slowdowns and gaps in the data came up: a working model was not enough. I worked on the operating documentation and talked directly with users. Before expanding a RAG you need reliable sources and clear instructions on how to use it.",
      case2_title:"Local AI for Sensitive Data Environments",
      c2_status:"Exploration · May – Jun 2026",
      c2_problem:"Understanding how to use AI with sensitive data, keeping data and infrastructure under control and reducing dependence on external providers.",
      c2_solution:"I tested models running locally, with Qwen, Gemma and Ollama. I prepared the datasets, ran the fine-tuning, set up local execution and built demos.",
      c2_learning:"Bringing AI into a controlled environment means managing infrastructure, data, cost and governance alongside running the model locally.",
      sec_percorso:"Career", sec_experiences:"Initiatives",
      job_current:"Ongoing",
      date_current:"Sep 2022 — today", date_social_ambassador:"May 2025 — today", date_ideagrip:"Feb 2022 — Sep 2022", date_generali:"Oct 2020 — Feb 2022",
      job_infocamere:"SysAdmin. Support for the mission-critical infrastructure of the Italian Chambers of Commerce system, with a focus on operational reliability. In parallel, I develop and operate AI solutions in production, integrated with corporate knowledge and workflows.",
      social_ambassador_desc:"I spread digital culture and AI adoption at InfoCamere through advisory, training and technology communication. I turn emerging technologies into practical knowledge and use cases, and I have contributed to upskilling over 35 professionals.",
      job_ideagrip:"IT specialist (internship), first operational role: infrastructure support, troubleshooting, moving from business to technology. Google scholarship (WorkInTech, first Italian edition).",
      job_generali:"Insurance advisor, in direct contact with clients in a heavily regulated sector. Trust, compliance and reliability count as much as the business itself.",
      date_dabo:"2026",
      dabo_tag:"External advisory",
      dabo_title:"DABO · Advisory & international bid",
      dabo_desc:"I provided AI advisory to the CEO of DABO. I was part of the SCWL team at “Sprint Forward”, in Shangcheng, China. The team was not selected for the 9 September final.",
      date_politica:"2026",
      politica_tag:"Political education",
      politica_title:"Meritare l'Europa — School of Political Education, Italia Viva",
      politica_desc:"Participant in the 2026 edition of the political training programme run by Italia Viva, covering European affairs, institutions, economics, technology and public policy.",
      date_pizz:"September 30, 2026", pizz_tag:"Networking", pizz_title:"Pizz'n'Meet — Padua", pizz_desc:"An evening with professionals from different sectors: you introduce yourself, say what you do, and hear experiences far from your own. Guided by a Pizz'n'Meet Ambassador. I came back with new contacts and some advice.",
      sec_badge:"Credentials",
      badge1_title:"Gemini Enterprise Agent Ready", badge1_meta:"Credential · 2026",
      badge2_title:"Google Cloud Innovator", badge2_meta:"Community program · 2025",
      badge3_title:"Google Developer Program — Premium Tier", badge3_meta:"Program status · 2026",
      nav_main_label:"Main navigation", theme_toggle_label:"Toggle theme", hero_proof_label:"Professional focus",
      hero_proof1:"Enterprise IT @ InfoCamere", hero_proof3:"Google Cloud Innovator",
    },
    fr: {
      back_to_site:'Retour au site',
      contribution_label:"Ma contribution",
      c1_contribution:"J’ai implémenté et mis en production les deux systèmes, puis intégré les sources et rédigé le manuel opérationnel.",
      c2_contribution:"J’ai préparé les jeux de données, réalisé le fine-tuning, déployé les modèles en local et préparé les démonstrations.",
      copy_case:"Copier le lien du projet",
      case_copied:"Lien copié",
      case_copy_failed:"Copiez le lien depuis la barre d’adresse.",

      page_index:'Sommaire', page_index_label:'Sommaire des contenus', case_index_label:'Sommaire de l’étude de cas', related_label:'Contenus associés', theme_light:'Passer au thème clair', theme_dark:'Passer au thème sombre', theme_on_light:'Thème clair activé', theme_on_dark:'Thème sombre activé',
      c2_map_prose:'Les démos utilisent des jeux de données contrôlés et des modèles exécutés sur une infrastructure locale : l’inférence reste sous contrôle.', work_close:'Fermer le projet', colophon_title:'Contact', colophon_note:'Site personnel. Les activités décrites ici sont présentées à titre personnel.',
      new_tab_hint:" (s'ouvre dans un nouvel onglet)",
      copy_email:"Copier l'e-mail", copy_phone:"Copier le numéro de téléphone", copy_done:"Copié dans le presse-papiers",
      reveal_email:"Afficher l'e-mail", reveal_phone:"Afficher le numéro",
      footer_privacy_link:"Politique de confidentialité",
      nav_home:"Accueil",
      privacy_title:"Politique de confidentialité",
      privacy_intro:"Ceci est le site personnel de Nicolò Forcolin. Il n’utilise ni cookies ni outils d’analyse et ne collecte aucune donnée via des formulaires. Vous trouverez ci-dessous ce qui se passe exactement lors de votre visite.",
      privacy_s1_h:"Responsable du traitement",
      privacy_s1_pre:"Nicolò Forcolin — Padoue, Italie. Pour toute demande relative à cette politique, vous pouvez écrire à ", privacy_s1_post:".",
      privacy_s2_h:"Aucun cookie, aucun suivi",
      privacy_s2_p:"Le site n’utilise aucun cookie, ni technique ni de profilage. Il n’intègre ni Google Analytics, ni Meta Pixel, ni outils similaires, et ne contient aucun formulaire de collecte. C’est pourquoi aucune bannière de consentement n’est présente.",
      privacy_s3_h:"Journaux techniques du serveur",
      privacy_s3_pre:"Le site est hébergé sur ", privacy_s3_post:", qui, pour des raisons de sécurité et de fonctionnement du réseau, enregistre automatiquement les journaux techniques standard de chaque requête HTTP (ex. adresse IP, user agent, page demandée, date et heure). Ces journaux sont gérés directement par Vercel selon sa propre politique de confidentialité et ne sont pas utilisés par ce site à des fins de profilage.",
      privacy_s4_h:"Données affichées sur le site",
      privacy_s4_p:"Les coordonnées (e-mail, téléphone, LinkedIn) publiées dans la section Contact sont des données personnelles de l'auteur du site, affichées volontairement pour être contacté. Le site ne les collecte ni ne les traite : elles sont simplement affichées sur la page.",
      privacy_s5_h:"Vos droits",
      privacy_s5_p:"Aucune donnée personnelle des visiteurs n'étant collectée, il n'y a pas de traitement sur lequel exercer les droits prévus aux articles 15 à 22 du Règlement (UE) 2016/679 (RGPD). Si vous pensez néanmoins qu'une information de cette page est inexacte, écrivez à l'adresse indiquée ci-dessus.",
      privacy_s6_h:"Modifications de cette politique",
      privacy_s6_p:"Cette politique peut être mise à jour si les outils utilisés par le site changent (par ex. l'introduction future d'outils d'analyse). La version en vigueur est toujours celle publiée sur cette page.",
      privacy_updated:"Dernière mise à jour : septembre 2026.", cm_phone:"Téléphone", cm_cert:"Certifications",
      nav_contatti:"Contact",
      hero_cta1:"Découvrir mon travail",
      sec_chisono:"Bio",
      chisono_p:"J’ai mis en production deux systèmes RAG qui rendent accessibles la documentation et l’historique Jira, puis je les ai réunis en un seul projet. La partie difficile a été de comprendre comment les rendre utiles à celles et ceux qui les utilisent.",
      sec_results_title:"Résultats",
      sec_work_title:"Projet en production",
      sec_adoption_title:"IA en production et adoption",
      adoption_body:"Je compare les projets IA avec d’autres bureaux et je recueille les retours sur les solutions en usage. Les demandes portent sur les sources de données, les limites aux réponses non fondées et une base de connaissances partagée entre bureaux. Ces échanges orientent les priorités techniques et organisationnelles.",
      sec_localai_title:"Local AI",
      sec_path_title:"Parcours",
      proof_label:"Résultats",
      stat1_label:"Projet en production", stat1_desc:"Recherche de connaissances sur des sources d’entreprise diverses, née de deux systèmes RAG ensuite unifiés.", stat1_link:"Voir les projets",
      stat2_label:"AI Advisory", stat2_desc:"Conseil en IA pour deux unités internes et un CEO.", stat2_link:"Voir le parcours",
      stat3_label:"Enablement", stat3_desc:"Cinq programmes de formation à l’IA opérationnelle.", stat3_link:"Voir le parcours",
      sec_lavori:"Projets",
      date_club:"2026",
      club_tag:"Communauté & affiliations", club_desc:"Une communauté professionnelle qui promeut la gentillesse, le respect et la qualité des relations, comme part du leadership et de la culture d’entreprise.",
      work_view:"Voir le projet",
      c1_summary:"Partant d’une idée développée avec mon responsable, j’ai réalisé deux systèmes RAG en production pour la documentation d’entreprise et l’historique Jira. Je les ai ensuite unifiés en un projet plus large, en intégrant d’autres sources de provenances diverses.",
      c2_summary:"J’ai préparé des jeux de données, adapté des modèles et réalisé des démos d’inférence en local, pour évaluer l’IA sur des données sensibles.",
      case_problem_label:"Problème", case_solution_label:"Solution", case_approach_label:"Approche", case_impact_label:"Impact", case_responsibility_label:"Responsabilité", case_learning_label:"Learning", case_focus_label:"Focus", case_stack_label:"Stack",
      case1_title:"Enterprise Knowledge Retrieval",
      c1_status:"Production · 2026",
      c1_problem:"La connaissance d’entreprise existe, mais elle est fragmentée. Des informations utiles sont dispersées entre documents, procédures, manuels et tickets. Pour répondre à une demande, il faut les retrouver et reconstruire le contexte à la main.",
      c1_solution_1:"Avec mon responsable, j’ai défini les besoins opérationnels. Deux systèmes RAG en sont nés, que j’ai implémentés et mis en production.",
      c1_solution_2:"Le premier rend la documentation d’entreprise interrogeable, y compris pour la communication vers le middle et le top management. Le second rend interrogeable l’historique Jira, pour l’équipe de travail et pour l’Incident & Problem Management.",
      c1_solution_3:"J’ai ensuite fusionné les deux systèmes dans un projet plus large, en ajoutant d’autres sources d’origines diverses. J’ai aussi rédigé un manuel opérationnel pour le Service Desk, l’Incident & Problem Management et le Middle Management.",
      c1_impact:"Les documents d’entreprise et l’historique Jira étaient consultés séparément. Avoir construit deux systèmes RAG et les avoir unifiés facilite la reconstitution du contexte d’une demande opérationnelle.",
      c1_responsibility:"J’ai suivi le projet de la définition des besoins opérationnels avec mon responsable jusqu’à la mise en production des deux RAG. J’en ai ensuite piloté l’unification et l’extension à d’autres sources, ainsi que le manuel opérationnel pour les différents groupes d’utilisateurs.",
      c1_learning:"Après la mise en service, certains utilisateurs continuaient à chercher à la main. Des ralentissements et des lacunes dans les données sont apparus : un modèle qui fonctionne ne suffisait pas. J’ai travaillé sur la documentation opérationnelle et échangé directement avec les utilisateurs. Avant d’élargir un RAG, il faut des sources fiables et des consignes claires sur son usage.",
      case2_title:"Local AI for Sensitive Data Environments",
      c2_status:"Exploration · Mai – juin 2026",
      c2_problem:"Comprendre comment utiliser l’IA avec des données sensibles, en gardant le contrôle des données et de l’infrastructure et en réduisant la dépendance aux fournisseurs externes.",
      c2_solution:"J’ai testé des modèles exécutés en local, avec Qwen, Gemma et Ollama. J’ai préparé les jeux de données, réalisé le fine-tuning, mis en place l’exécution en local et préparé des démonstrations.",
      c2_learning:"Amener l'IA dans un environnement contrôlé implique de gérer l'infrastructure, les données, les coûts et la gouvernance, en plus de l'exécution du modèle en local.",
      sec_percorso:"Parcours", sec_experiences:"Initiatives",
      job_current:"En cours",
      date_current:"Sept. 2022 — aujourd'hui", date_social_ambassador:"Mai 2025 — aujourd'hui", date_ideagrip:"Févr. 2022 — sept. 2022", date_generali:"Oct. 2020 — févr. 2022",
      job_infocamere:"SysAdmin. Support de l'infrastructure critique du système des Chambres de commerce italiennes, avec un accent sur la fiabilité opérationnelle. En parallèle, je développe et exploite des solutions IA en production, intégrées aux connaissances et aux workflows de l'entreprise.",
      social_ambassador_desc:"Je diffuse la culture numérique et l’adoption de l’IA chez InfoCamere par le conseil, la formation et la communication technologique. Je transforme les technologies émergentes en connaissances pratiques et en cas d’usage, et j’ai contribué à la montée en compétences de plus de 35 professionnels.",
      job_ideagrip:"Spécialiste IT (stage), premier poste opérationnel : support d’infrastructure, troubleshooting, passage du business à la technologie. Bourse Google (WorkInTech, première édition italienne).",
      job_generali:"Conseiller en assurances, en contact direct avec la clientèle dans un secteur très réglementé. La confiance, la conformité et la fiabilité comptent autant que l’activité elle-même.",
      date_dabo:"2026",
      dabo_tag:"Conseil externe",
      dabo_title:"DABO · Conseil et candidature internationale",
      dabo_desc:"J’ai fourni du conseil IA au CEO de DABO. J’ai fait partie de l’équipe SCWL à « Sprint Forward », à Shangcheng, en Chine. L’équipe n’a pas été retenue pour la finale du 9 septembre.",
      date_politica:"2026",
      politica_tag:"Formation politique",
      politica_title:"Meritare l'Europa — École de formation politique, Italia Viva",
      politica_desc:"Participant à l’édition 2026 du programme de formation politique d’Italia Viva, sur les affaires européennes, les institutions, l’économie, la technologie et les politiques publiques.",
      date_pizz:"30 septembre 2026", pizz_tag:"Réseautage", pizz_title:"Pizz'n'Meet — Padoue", pizz_desc:"Une soirée avec des professionnels de secteurs différents : on se présente, on dit ce qu’on fait et on écoute des expériences éloignées de la sienne. Animée par une Pizz'n'Meet Ambassador. Je suis reparti avec de nouveaux contacts et quelques conseils.",
      sec_badge:"Accréditations",
      badge1_title:"Gemini Enterprise Agent Ready", badge1_meta:"Credential · 2026",
      badge2_title:"Google Cloud Innovator", badge2_meta:"Community program · 2025",
      badge3_title:"Google Developer Program — Premium Tier", badge3_meta:"Program status · 2026",
      nav_main_label:"Navigation principale", theme_toggle_label:"Changer de thème", hero_proof_label:"Axes professionnels",
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
    projectDialog.addEventListener('close',function(){ if(!projectDialog.open) restoreProject(); });
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


