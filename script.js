(function(){
  var i18n = {
    // ... [Il tuo oggetto i18n originale rimane intatto qui, ometto di rimetterlo parola per parola solo in questo commento ma nel codice effettivo gira completo] ...
    it: {
      c1_map_prose:'La documentazione aziendale e lo storico Jira alimentano due percorsi di ricerca per Service Desk, Incident & Problem Management e management.', c2_map_prose:'Dataset controllati e modelli eseguiti su infrastruttura locale hanno supportato demo con inferenza sotto controllo.', work_close:'Chiudi il progetto', colophon_title:'Contatti', colophon_note:'Sito personale. Le attività descritte sono presentate a titolo personale.',
      new_tab_hint:" (si apre in una nuova scheda)",
      copy_email:"Copia email", copy_phone:"Copia numero di telefono", copy_done:"Copiato negli appunti",
      cm_title:"Informazioni di contatto", cm_phone:"Telefono", cm_cert:"Certificazioni", cm_linkedin:"LinkedIn",
      nav_contatti:"Contatti",
      hero_cta1:"Esplora il mio lavoro",
      sec_chisono:"Bio",
      chisono_p:"Professionista IT che ha esteso il proprio contributo all’AI in produzione e alla sua adozione organizzativa.",
      sec_results_title:"Risultati",
      sec_work_title:"Progetti",
      sec_path_title:"Percorso",
      proof_label:"Risultati",
      p5k:"Sistemi in produzione", p5d:"Documentazione aziendale e storico Jira, con un manuale operativo per l’adozione.", p5_link:"Vedi i progetti →",
      p1k:"AI Advisory", p1d:"Advisory AI per due business unit interne e un CEO.", p1_link:"Vedi il percorso →",
      p2k:"Enablement", p2d:"Cinque programmi di formazione sull’AI operativa.", p2_link:"Vedi il percorso →",
      sec_lavori:"Progetti",
      tdabo:"2026", dabo_tag:"Esperienza internazionale", dabo_desc:"Su invito del CEO di DABO, coinvolgimento nel team SCWL per il contest “Sprint Forward” a Shangcheng, Cina, in un contesto internazionale di innovazione e confronto tecnologico.",
      club_tag:"Community & affiliazioni", club_desc:"Membro di una community professionale orientata a promuovere gentilezza, rispetto e qualità delle relazioni come elementi di leadership e cultura organizzativa.",
      work_view:"Vedi il progetto →",
      c1_summary:"La conoscenza era distribuita tra documenti e ticket Jira. Ho implementato due sistemi RAG in produzione e un manuale operativo per i diversi contesti d’uso.",
      c2_summary:"Per valutare l’AI in contesti a dati sensibili, ho preparato dataset, adattato modelli e realizzato demo con inferenza locale.",
      case_problem_label:"Problema", case_solution_label:"Soluzione", case_approach_label:"Approccio", case_impact_label:"Impatto", case_learning_label:"Learning", case_focus_label:"Focus", case_stack_label:"Stack",
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
      sec_percorso:"Percorso", sec_experiences:"Iniziative",
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
      sec_badge:"Credenziali",
      badge1_title:"Gemini Enterprise Agent Ready", badge1_meta:"Credential · 2026",
      badge2_title:"Google Cloud Innovator", badge2_meta:"Community program · 2025",
      badge3_title:"Google Developer Program — Premium Tier", badge3_meta:"Program status · 2026",
      nav_main_label:"Navigazione principale", theme_toggle_label:"Cambia tema", hero_proof_label:"Focus professionale", modal_close_label:"Chiudi",
      hero_proof1:"Enterprise IT @ InfoCamere", hero_proof2:"AI per il Management", hero_proof3:"Google Cloud Innovator",
    },
    en: {
      c1_map_prose:'Corporate documents and Jira history feed two retrieval systems for Service Desk, Incident & Problem Management and management.', c2_map_prose:'Controlled datasets and models running on local infrastructure supported demos with controlled inference.', work_close:'Close project', colophon_title:'Contact', colophon_note:'Personal website. The activities described here are presented in a personal capacity.',
      new_tab_hint:" (opens in a new tab)",
      copy_email:"Copy email", copy_phone:"Copy phone number", copy_done:"Copied to clipboard",
      cm_title:"Contact information", cm_phone:"Phone", cm_cert:"Certifications", cm_linkedin:"LinkedIn",
      nav_contatti:"Contact",
      hero_cta1:"Explore my work",
      sec_chisono:"Bio",
      chisono_p:"IT professional who has expanded his contribution to AI in production and its organizational adoption.",
      sec_results_title:"Results",
      sec_work_title:"Projects",
      sec_path_title:"Career path",
      proof_label:"Results",
      p5k:"Production Systems", p5d:"Corporate documentation and Jira history, with an operating manual to support adoption.", p5_link:"View projects →",
      p1k:"AI Advisory", p1d:"AI advisory for two internal business units and one CEO.", p1_link:"See the path →",
      p2k:"Enablement", p2d:"Five training programs on operational AI.", p2_link:"See experience →",
      sec_lavori:"Projects",
      tdabo:"2026", dabo_tag:"International experience", dabo_desc:"At the invitation of DABO’s CEO, involvement with the SCWL team for the “Sprint Forward” contest in Shangcheng, China, within an international technology and innovation context.",
      club_tag:"Community & affiliations", club_desc:"Member of a professional community focused on kindness, respect and quality of relationships as elements of leadership and organizational culture.",
      work_view:"View project →",
      c1_summary:"Knowledge was spread across documents and Jira tickets. I implemented two production RAG systems and an operating manual for different use cases.",
      c2_summary:"To assess AI in sensitive-data environments, I prepared datasets, adapted models and built demos with local inference.",
      case_problem_label:"Problem", case_solution_label:"Solution", case_approach_label:"Approach", case_impact_label:"Impact", case_learning_label:"Learning", case_focus_label:"Focus", case_stack_label:"Stack",
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
      sec_percorso:"Career", sec_experiences:"Initiatives",
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
      sec_badge:"Credentials",
      badge1_title:"Gemini Enterprise Agent Ready", badge1_meta:"Credential · 2026",
      badge2_title:"Google Cloud Innovator", badge2_meta:"Community program · 2025",
      badge3_title:"Google Developer Program — Premium Tier", badge3_meta:"Program status · 2026",
      nav_main_label:"Main navigation", theme_toggle_label:"Toggle theme", hero_proof_label:"Professional focus", modal_close_label:"Close",
      hero_proof1:"Enterprise IT @ InfoCamere", hero_proof2:"AI for Management", hero_proof3:"Google Cloud Innovator",
    },
    fr: {
      c1_map_prose:'La documentation d’entreprise et l’historique Jira alimentent deux systèmes de recherche pour le Service Desk, l’Incident & Problem Management et le management.', c2_map_prose:'Des jeux de données contrôlés et des modèles exécutés sur une infrastructure locale ont permis des démonstrations avec une inférence maîtrisée.', work_close:'Fermer le projet', colophon_title:'Contact', colophon_note:'Site personnel. Les activités décrites ici sont présentées à titre personnel.',
      new_tab_hint:" (s'ouvre dans un nouvel onglet)",
      copy_email:"Copier l'e-mail", copy_phone:"Copier le numéro de téléphone", copy_done:"Copié dans le presse-papiers",
      cm_title:"Coordonnées", cm_phone:"Téléphone", cm_cert:"Certifications", cm_linkedin:"LinkedIn",
      nav_contatti:"Contact",
      hero_cta1:"Découvrir mon travail",
      sec_chisono:"Bio",
      chisono_p:"Professionnel IT qui a élargi sa contribution à l’IA en production et à son adoption organisationnelle.",
      sec_results_title:"Résultats",
      sec_work_title:"Projets",
      sec_path_title:"Parcours",
      proof_label:"Résultats",
      p5k:"Production Systems", p5d:"Documentation d’entreprise et historique Jira, avec un manuel opérationnel pour accompagner l’adoption.", p5_link:"Voir les projets →",
      p1k:"AI Advisory", p1d:"Conseil en IA pour deux unités internes et un CEO.", p1_link:"Voir le parcours →",
      p2k:"Enablement", p2d:"Cinq programmes de formation à l’IA opérationnelle.", p2_link:"Voir le parcours →",
      sec_lavori:"Projets",
      tdabo:"2026", dabo_tag:"Expérience internationale", dabo_desc:"À l’invitation du CEO de DABO, participation à l’équipe SCWL pour le concours « Sprint Forward » à Shangcheng, en Chine, dans un contexte international d’innovation et de technologie.",
      club_tag:"Communauté & affiliations", club_desc:"Membre d’une communauté professionnelle centrée sur la gentillesse, le respect et la qualité des relations comme éléments de leadership et de culture organisationnelle.",
      work_view:"Voir le projet →",
      c1_summary:"Les connaissances étaient réparties entre documents et tickets Jira. J’ai mis en production deux systèmes RAG et rédigé un manuel opérationnel adapté aux usages.",
      c2_summary:"Pour évaluer l’IA dans des environnements à données sensibles, j’ai préparé des jeux de données, adapté des modèles et réalisé des démonstrations en local.",
      case_problem_label:"Problème", case_solution_label:"Solution", case_approach_label:"Approche", case_impact_label:"Impact", case_learning_label:"Learning", case_focus_label:"Focus", case_stack_label:"Stack",
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
      sec_percorso:"Parcours", sec_experiences:"Initiatives",
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
      sec_badge:"Accréditations",
      badge1_title:"Gemini Enterprise Agent Ready", badge1_meta:"Credential · 2026",
      badge2_title:"Google Cloud Innovator", badge2_meta:"Community program · 2025",
      badge3_title:"Google Developer Program — Premium Tier", badge3_meta:"Program status · 2026",
      nav_main_label:"Navigation principale", theme_toggle_label:"Changer de thème", hero_proof_label:"Axes professionnels", modal_close_label:"Fermer",
      hero_proof1:"Enterprise IT @ InfoCamere", hero_proof2:"IA pour le Management", hero_proof3:"Google Cloud Innovator",
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
    document.querySelectorAll("[data-project-toggle][aria-expanded=\"true\"]").forEach(function(btn){ btn.textContent = dict.work_close; });
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
    if(themeColorMeta) themeColorMeta.setAttribute("content", dark ? "#1B1A17" : "#F8F7F4");
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

  /* ---- progetti: espansione nel flusso della pagina ---- */
  document.querySelectorAll("[data-project-toggle]").forEach(function(btn){
    btn.addEventListener("click", function(){
      var panel = document.getElementById(btn.getAttribute("aria-controls"));
      var opening = panel.hidden;
      panel.hidden = !opening;
      btn.setAttribute("aria-expanded", String(opening));
      btn.textContent = i18n[lang][opening ? "work_close" : "work_view"];
      if(!opening) btn.focus();
    });
  });
  document.querySelectorAll("[data-card-href]").forEach(function(card){
    card.addEventListener("click", function(e){
      if(e.target.closest("button, a")) return;
      var target = document.querySelector(card.getAttribute("data-card-href"));
      if(target) target.scrollIntoView({behavior: window.matchMedia("(prefers-reduced-motion:reduce)").matches ? "auto" : "smooth", block: "start"});
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

  /* ---- navigation feedback & reading progress ---- */
  var progress = document.querySelector(".scroll-progress");
  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".desktop-nav a"));
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

  applyLang();
})();
