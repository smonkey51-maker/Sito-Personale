(function(){
  var i18n = {
    it: {
      hero_greeting:"Ciao, sono Nicolò Forcolin. E ",
      hero_list_label:"Chi sono",
      hero_phrases:[
        [{t:"sono Service Desk Agent @ InfoCamere"}],
        [{t:"sono "},{t:"Google Cloud Innovator",href:"https://me.developers.google.com/u/nforcolin"}],
        [{t:"integro l’AI nei processi aziendali"}],
        [{t:"faccio parte del Google Developer Program"}],
        [{t:"sperimento con l’AI in locale"}],
        [{t:"ho fatto advisory al CEO di DABO"}]
      ],
      skip_to_content:"Vai al contenuto",
      page_title:"Nicolò Forcolin, Service Desk Agent @ InfoCamere | Progetti AI in produzione",
      page_description:"Service Desk Agent @ InfoCamere. Progetti AI in produzione, dal RAG aziendale all’AI in locale. Google Cloud Innovator.",
      rag_step1_kicker:"Fonti iniziali",
      rag_step1_title:"Documentazione e Jira",
      rag_step1_desc:"Due raccolte di conoscenza consultate separatamente.",
      rag_step2_kicker:"Prima implementazione",
      rag_step2_title:"Due sistemi RAG",
      rag_step2_desc:"Ricerca dedicata alle esigenze operative e documentali.",
      rag_step3_kicker:"Evoluzione",
      rag_step3_title:"Unificazione e nuove fonti",
      rag_step3_desc:"Un progetto più ampio per ricostruire il contesto.",
      local_step1_kicker:"Preparazione",
      local_step1_title:"Dataset controllati",
      local_step1_desc:"Dati preparati con il gruppo per le prove.",
      local_step2_kicker:"Adattamento",
      local_step2_title:"Qwen, Gemma e Llama",
      local_step2_desc:"Fine-tuning su Colab aziendale con Unsloth.",
      local_step3_kicker:"Esecuzione",
      local_step3_title:"Ollama e demo locali",
      local_step3_desc:"Inferenza e dimostrazioni in locale.",
      back_to_site:"Torna alla home",
      colophon_title:"Contatti",
      colophon_note:"Sito personale. Le attività descritte sono presentate a titolo personale.",
      new_tab_hint:" (si apre in una nuova scheda)",
      copy_phone:"Copia numero di telefono",
      copy_done:"Copiato negli appunti",
      reveal_phone:"Mostra telefono",
      footer_privacy_link:"Informativa privacy",
      privacy_title:"Informativa sulla privacy",
      privacy_intro:"Questo è il sito personale di Nicolò Forcolin. Non usa cookie né strumenti di analytics e non raccoglie dati tramite moduli. Qui sotto trovi cosa succede esattamente quando lo visiti.",
      privacy_s1_h:"Titolare del trattamento",
      privacy_s1_pre:"Nicolò Forcolin, Padova, Italia. Per qualsiasi richiesta relativa a questa informativa puoi scrivermi su ",
      privacy_s1_post:".",
      privacy_s2_h:"Nessun cookie, nessun tracciamento",
      privacy_s2_p:"Il sito non usa cookie di alcun tipo, né tecnici né di profilazione. Non integra Google Analytics, Meta Pixel o strumenti simili e non ha moduli di raccolta dati. Per questo non c’è un banner di consenso.",
      privacy_s3_h:"Log tecnici del server",
      privacy_s3_pre:"Il sito è ospitato su ",
      privacy_s3_post:", che per ragioni di sicurezza e funzionamento della rete registra in modo automatico i log tecnici standard di ogni richiesta HTTP (ad es. indirizzo IP, user agent, pagina richiesta, data e ora). Questi log sono gestiti direttamente da Vercel secondo la propria informativa privacy e non vengono utilizzati da questo sito per finalità di profilazione.",
      privacy_s4_h:"Dati mostrati sul sito",
      privacy_s4_p:"I recapiti (telefono, LinkedIn) pubblicati nella sezione Contatti sono dati personali dell'autore del sito, mostrati volontariamente per essere contattato. Il sito non li raccoglie né li elabora: sono semplicemente stampati nella pagina.",
      privacy_s5_h:"I tuoi diritti",
      privacy_s5_p:"In quanto non vengono raccolti dati personali dei visitatori, non ci sono trattamenti su cui esercitare i diritti previsti dagli articoli 15–22 del Regolamento (UE) 2016/679 (GDPR). Se ritieni comunque che qualcosa in questa pagina sia impreciso, scrivimi su LinkedIn.",
      privacy_s6_h:"Modifiche a questa informativa",
      privacy_s6_p:"Questa informativa può essere aggiornata se cambiano gli strumenti usati dal sito (ad es. l'introduzione futura di analytics). La versione in vigore è sempre quella pubblicata su questa pagina.",
      privacy_updated:"Ultimo aggiornamento: ottobre 2026.",
      cm_phone:"Telefono",
      hero_cta1:"Esplora il mio lavoro",
      sec_localai_title:"AI in locale",
      sec_lavori:"Progetti",
      club_desc:"Community professionale dedicata a relazioni rispettose e a una leadership gentile.",
      c1_summary:"Ho unificato due sistemi RAG già funzionanti per offrire un unico punto di accesso. Ho integrato Jira, UCMDB, Confluence, una wiki operativa e altre fonti. Nella webapp gli utenti pongono domande in linguaggio naturale: la risposta presenta prima le informazioni utilizzabili subito, poi possibili cause, procedure, casi simili e link alle fonti.",
      c2_summary:"Nei test, le risposte erano corrette nella maggior parte dei casi e miglioravano rispetto ai modelli di partenza. Restavano informazioni inventate, meno frequenti nei modelli più performanti. La prova si è conclusa senza un piano aziendale di adozione.",
      case_results_label:"Risultati e limiti",
      case_problem_label:"Problema",
      case_solution_label:"Soluzione",
      case_responsibility_label:"Responsabilità",
      case_learning_label:"Cosa ho imparato",
      case_context_label:"Contesto e vincoli",
      case1_title:"RAG aziendale",
      c1_status:"In produzione · 2026",
      c1_problem:"Informazioni utili distribuite tra Jira, documentazione e altri strumenti. Ricostruire il contesto di una criticità richiedeva ricerche separate.",
      c1_impact:"In diverse criticità osservate, il lavoro del Service Desk e l'analisi di Incident & Problem Management sono passati da ore a circa poco tempo.",
      c1_responsibility:"Ho realizzato l'unificazione, le integrazioni, la webapp e la logica delle risposte. Seguo test, problemi, feedback e adozione con gli utenti. Ho redatto il manuale operativo.",
      c1_learning:"Dopo il rilascio, alcuni utenti continuavano a cercare a mano. Sono emersi rallentamenti e lacune nei dati: un modello funzionante non bastava. Ho lavorato sulla documentazione operativa e parlando direttamente con gli utenti. Prima di ampliare un RAG servono fonti affidabili e istruzioni chiare sul suo uso.",
      case2_title:"Sperimentazione AI in locale",
      c2_status:"Sperimentazione conclusa · 2026",
      c2_problem:"Sperimentazione interna informale per valutare modelli specializzati su domande relative a InfoCamere. Le motivazioni erano esplorare un maggiore controllo sui dati, minori costi potenziali e meno dipendenza da fornitori esterni.",
      c2_solution:"Ho selezionato modelli Qwen, Gemma e Llama tramite Hugging Face. Con dataset specifici preparati insieme al gruppo ho svolto il fine-tuning con Unsloth su Google Colab in versione aziendale, predisposta per i dati interni sensibili, poi ho eseguito i modelli in locale con Ollama.",
      c2_learning:"Eseguire l’AI in locale significa gestire insieme infrastruttura, dati, costi e governance.",
      sec_experiences:"Iniziative",
      dabo_title:"DABO · Consulenza e candidatura internazionale",
      dabo_desc:"Ho fornito advisory al CEO di DABO su temi AI e ho fatto parte del team SCWL a “Sprint Forward”, a Shangcheng, in Cina.",
      sec_badge:"Credenziali",
      badge1_title:"Gemini Enterprise Agent Ready",
      badge1_meta:"Credenziale · 2026",
      badge2_title:"Google Cloud Innovator",
      badge2_meta:"Programma community · 2025",
      badge3_title:"Google Developer Program, Premium Tier",
      badge3_meta:"Stato del programma · 2026",
      nav_main_label:"Navigazione principale",
      nav_toggle_label:"Menu",
      c2_lead:"Modelli open specializzati su domande relative a InfoCamere, addestrati su un ambiente aziendale ed eseguiti in locale.",
      initiatives_status:"Advisory e community · 2026",
      initiatives_lead:"Attività fuori dal ruolo principale: advisory sull’AI, community professionali e le credenziali che documentano il percorso su Google Cloud.",
      advisory_label:"Advisory esterna",
      community_label:"Community",
      club_title:"Club degli Uomini Gentili",
      badge_profile:"Vedi il profilo Google Developer",
      case_flow_label:"Come si è evoluto",
      next_label:"Continua a leggere",
      close:"Chiudi",
      page_title_rag:"RAG aziendale | Nicolò Forcolin",
      page_description_rag:"Un unico punto di accesso a Jira, UCMDB, Confluence e alla wiki operativa per il Service Desk di InfoCamere, in produzione dal 2026.",
      page_title_local:"Sperimentazione AI in locale | Nicolò Forcolin",
      page_description_local:"Fine-tuning di modelli open (Qwen, Gemma, Llama) su domande relative a InfoCamere ed esecuzione in locale con Ollama.",
      page_title_initiatives:"Iniziative e credenziali | Nicolò Forcolin",
      page_description_initiatives:"Advisory esterna, community professionali e credenziali Google di Nicolò Forcolin.",
      page_title_privacy:"Informativa sulla privacy | Nicolò Forcolin",
      page_description_privacy:"Informativa sulla privacy del sito personale di Nicolò Forcolin: nessun cookie, nessun tracciamento, nessun dato raccolto tramite modulo.",
    },
    en: {
      hero_greeting:"Hi, I’m Nicolò Forcolin. And ",
      hero_list_label:"About me",
      hero_phrases:[
        [{t:"I’m Service Desk Agent @ InfoCamere"}],
        [{t:"I’m "},{t:"Google Cloud Innovator",href:"https://me.developers.google.com/u/nforcolin"}],
        [{t:"I integrate AI into business processes"}],
        [{t:"I’m part of the Google Developer Program"}],
        [{t:"I experiment with local AI"}],
        [{t:"I advised DABO’s CEO on AI"}]
      ],
      skip_to_content:"Skip to content",
      page_title:"Nicolò Forcolin, Service Desk Agent @ InfoCamere | AI Projects in Production",
      page_description:"Service Desk Agent @ InfoCamere. AI projects in production, from enterprise RAG to local AI. Google Cloud Innovator.",
      rag_step1_kicker:"Initial sources",
      rag_step1_title:"Documentation and Jira",
      rag_step1_desc:"Two separate knowledge collections.",
      rag_step2_kicker:"First implementation",
      rag_step2_title:"Two RAG systems",
      rag_step2_desc:"Dedicated retrieval for operational and documentation needs.",
      rag_step3_kicker:"Evolution",
      rag_step3_title:"Unified system and new sources",
      rag_step3_desc:"A broader project for reconstructing context.",
      local_step1_kicker:"Preparation",
      local_step1_title:"Controlled datasets",
      local_step1_desc:"Data prepared with the group for testing.",
      local_step2_kicker:"Adaptation",
      local_step2_title:"Qwen, Gemma and Llama",
      local_step2_desc:"Fine-tuning on enterprise Colab with Unsloth.",
      local_step3_kicker:"Execution",
      local_step3_title:"Ollama and local demos",
      local_step3_desc:"Local inference and demonstrations.",
      back_to_site:"Back to home",
      colophon_title:"Contact",
      colophon_note:"Personal website. The activities described here are presented in a personal capacity.",
      new_tab_hint:" (opens in a new tab)",
      copy_phone:"Copy phone number",
      copy_done:"Copied to clipboard",
      reveal_phone:"Show phone number",
      footer_privacy_link:"Privacy notice",
      privacy_title:"Privacy notice",
      privacy_intro:"This is the personal website of Nicolò Forcolin. It uses no cookies or analytics tools and collects no data through forms. Below you can see exactly what happens when you visit it.",
      privacy_s1_h:"Data controller",
      privacy_s1_pre:"Nicolò Forcolin, Padua, Italy. For any request about this notice, message me on ",
      privacy_s1_post:".",
      privacy_s2_h:"No cookies, no tracking",
      privacy_s2_p:"The site uses no cookies of any kind, technical or profiling. It does not integrate Google Analytics, Meta Pixel or similar tools, and has no data collection forms. That is why there is no consent banner.",
      privacy_s3_h:"Server technical logs",
      privacy_s3_pre:"The site is hosted on ",
      privacy_s3_post:", which for security and network operation purposes automatically records standard technical logs for every HTTP request (e.g. IP address, user agent, requested page, date and time). These logs are managed directly by Vercel under its own privacy policy and are not used by this site for profiling purposes.",
      privacy_s4_h:"Data shown on the site",
      privacy_s4_p:"The contact details (phone, LinkedIn) published in the Contact section are the site author's own personal data, shown voluntarily so people can get in touch. The site doesn't collect or process them: they're simply printed on the page.",
      privacy_s5_h:"Your rights",
      privacy_s5_p:"Since no personal data is collected from visitors, there is no processing to exercise the rights under Articles 15–22 of Regulation (EU) 2016/679 (GDPR) for. If you still believe something on this page is inaccurate, message me on LinkedIn.",
      privacy_s6_h:"Changes to this notice",
      privacy_s6_p:"This notice may be updated if the tools used by the site change (e.g. the future introduction of analytics). The version in force is always the one published on this page.",
      privacy_updated:"Last updated: October 2026.",
      cm_phone:"Phone",
      hero_cta1:"Explore my work",
      sec_localai_title:"Local AI",
      sec_lavori:"Projects",
      club_desc:"A professional community dedicated to respectful relationships and kind leadership.",
      c1_summary:"I unified two working RAG systems into one access point, integrating Jira, UCMDB, Confluence, an operational wiki and other sources. Users ask questions in natural language through a web app. Responses prioritize actionable information, followed by possible causes, procedures, similar cases and links to original sources.",
      c2_summary:"In most tests, specialized models answered correctly and improved over their base versions. They still fabricated some information, less often with higher-performing models. The experiment ended without a company adoption plan.",
      case_results_label:"Results and limitations",
      case_problem_label:"Problem",
      case_solution_label:"Solution",
      case_responsibility_label:"Responsibility",
      case_learning_label:"Learning",
      case_context_label:"Context and constraints",
      case1_title:"Enterprise Knowledge Retrieval",
      c1_status:"Production · 2026",
      c1_problem:"Useful information was scattered across Jira, documentation and other tools. Reconstructing an incident's context required separate searches.",
      c1_impact:"Across several observed incidents, Service Desk work and Incident & Problem Management analysis went from hours to about little time.",
      c1_responsibility:"I implemented the unification, source integrations, web app and response logic. I handle testing, issues, user feedback and adoption. I wrote the operating manual.",
      c1_learning:"After the release, some users kept searching by hand. Slowdowns and gaps in the data came up: a working model was not enough. I worked on the operating documentation and talked directly with users. Before expanding a RAG you need reliable sources and clear instructions on how to use it.",
      case2_title:"Local AI Experiment",
      c2_status:"Experiment completed · 2026",
      c2_problem:"An informal internal experiment to evaluate models specialized in answering questions about InfoCamere, exploring data control, potential cost reductions and less reliance on external providers.",
      c2_solution:"I selected Qwen, Gemma and Llama models through Hugging Face. Using task-specific datasets prepared with the group, I fine-tuned them with Unsloth on the enterprise edition of Google Colab, set up for sensitive internal data, then ran the models locally with Ollama.",
      c2_learning:"Running AI locally means managing infrastructure, data, cost and governance together.",
      sec_experiences:"Initiatives",
      dabo_title:"DABO · Advisory & international bid",
      dabo_desc:"I provided AI advisory to the CEO of DABO and was part of the SCWL team at “Sprint Forward”, in Shangcheng, China.",
      sec_badge:"Credentials",
      badge1_title:"Gemini Enterprise Agent Ready",
      badge1_meta:"Credential · 2026",
      badge2_title:"Google Cloud Innovator",
      badge2_meta:"Community program · 2025",
      badge3_title:"Google Developer Program, Premium Tier",
      badge3_meta:"Program status · 2026",
      nav_main_label:"Main navigation",
      nav_toggle_label:"Menu",
      c2_lead:"Open models specialised in InfoCamere-related questions, trained in a company environment and run locally.",
      initiatives_status:"Advisory and community · 2026",
      initiatives_lead:"Work outside my main role: AI advisory, professional communities and the credentials that document my path on Google Cloud.",
      advisory_label:"External advisory",
      community_label:"Community",
      club_title:"Club degli Uomini Gentili",
      badge_profile:"View the Google Developer profile",
      case_flow_label:"How it evolved",
      next_label:"Keep reading",
      close:"Close",
      page_title_rag:"Enterprise Knowledge Retrieval | Nicolò Forcolin",
      page_description_rag:"A single access point to Jira, UCMDB, Confluence and the operational wiki for InfoCamere's Service Desk, in production since 2026.",
      page_title_local:"Local AI Experiment | Nicolò Forcolin",
      page_description_local:"Fine-tuning open models (Qwen, Gemma, Llama) on InfoCamere-related questions and running them locally with Ollama.",
      page_title_initiatives:"Initiatives and credentials | Nicolò Forcolin",
      page_description_initiatives:"External advisory, professional communities and Google credentials of Nicolò Forcolin.",
      page_title_privacy:"Privacy notice | Nicolò Forcolin",
      page_description_privacy:"Privacy notice for Nicolò Forcolin's personal website: no cookies, no tracking, no data collected through forms.",
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
    contactDialog.querySelector(".contact-close").addEventListener("click", function(){ contactDialog.close(); contactTriggers[0].focus(); });
    contactDialog.addEventListener("click", function(event){ if (event.target === contactDialog) contactDialog.close(); });
  }

  var root = document.documentElement;
  var LANG_KEY = "nfLang";
  var savedLang = null;
  try{ savedLang = localStorage.getItem(LANG_KEY); }catch(e){}
  var lang = (savedLang === "en") ? "en" : "it";
  /* Ogni pagina dichiara data-page sul body; la home usa le chiavi senza suffisso. */
  var page = document.body.getAttribute("data-page");
  var suffix = (page && page !== "home") ? "_" + page : "";

  /* ---- frase che si scrive nella home ---- */
  var typedEl = document.getElementById("typed");
  var phrasesEl = document.getElementById("heroPhrases");
  var typingTimer = null;
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function phraseLength(segs){
    return segs.reduce(function(n, seg){ return n + seg.t.length; }, 0);
  }
  function renderPhrase(target, segs, count){
    target.textContent = "";
    var left = count;
    segs.forEach(function(seg){
      if(left <= 0) return;
      var part = seg.t.slice(0, left);
      left -= part.length;
      if(seg.href){
        var a = document.createElement("a");
        a.href = seg.href;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.textContent = part;
        target.appendChild(a);
      }else{
        target.appendChild(document.createTextNode(part));
      }
    });
  }
  /* L'elenco completo resta nascosto alla vista ma leggibile da screen reader. */
  function renderHeroPhrases(){
    if(!phrasesEl) return;
    phrasesEl.textContent = "";
    i18n[lang].hero_phrases.forEach(function(segs){
      var li = document.createElement("li");
      renderPhrase(li, segs, phraseLength(segs));
      phrasesEl.appendChild(li);
    });
  }
  /* La frase animata riusa gli stessi nodi mentre si scrive: se il link venisse
     ricostruito a ogni lettera, un click non lo raggiungerebbe mai. */
  function buildPhrase(segs){
    typedEl.textContent = "";
    return segs.map(function(seg){
      var node;
      if(seg.href){
        node = document.createElement("a");
        node.href = seg.href;
        node.target = "_blank";
        node.rel = "noopener noreferrer";
        node.tabIndex = -1; /* da tastiera si usa il link dell'elenco nascosto */
        typedEl.appendChild(node);
      }else{
        node = document.createTextNode("");
        typedEl.appendChild(node);
      }
      return node;
    });
  }
  function paintPhrase(nodes, segs, count){
    var left = count;
    nodes.forEach(function(node, k){
      var part = segs[k].t.slice(0, Math.max(left, 0));
      left -= part.length;
      if(node.nodeType === 3) node.nodeValue = part; else node.textContent = part;
    });
  }
  function startTyping(){
    if(!typedEl) return;
    clearTimeout(typingTimer);
    var phrases = i18n[lang].hero_phrases;
    if(reducedMotion){
      renderPhrase(typedEl, phrases[0], phraseLength(phrases[0]));
      return;
    }
    var p = 0, c = 0, deleting = false, paused = false;
    var segs = phrases[0], len = phraseLength(segs), nodes = buildPhrase(segs);
    function tick(){
      if(paused) return;
      if(!deleting){
        c++;
        paintPhrase(nodes, segs, c);
        if(c === len){ deleting = true; typingTimer = setTimeout(tick, 1600); return; }
        typingTimer = setTimeout(tick, 70);
        return;
      }
      c--;
      paintPhrase(nodes, segs, c);
      if(c === 0){
        deleting = false;
        p = (p + 1) % phrases.length;
        segs = phrases[p]; len = phraseLength(segs); nodes = buildPhrase(segs);
        typingTimer = setTimeout(tick, 300);
        return;
      }
      typingTimer = setTimeout(tick, 40);
    }
    /* Col puntatore sopra la frase si ferma completa, così si può cliccare. */
    var line = document.getElementById("hero-name");
    line.onpointerenter = function(){
      paused = true;
      clearTimeout(typingTimer);
      c = len; deleting = true;
      paintPhrase(nodes, segs, len);
    };
    line.onpointerleave = function(){
      paused = false;
      typingTimer = setTimeout(tick, 1600);
    };
    tick();
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
    });    renderHeroPhrases();
    startTyping();
  }
  document.querySelectorAll(".lang-btn").forEach(function(b){
    b.addEventListener("click", function(){
      lang = b.getAttribute("data-lang");
      try{ localStorage.setItem(LANG_KEY, lang); }catch(e){}
      applyLang();
    });
  });

  /* Mobile nav toggle: desktop-nav doubles as the collapsible menu panel. */
  var navToggle = document.querySelector(".nav-toggle");
  var navPanel = document.getElementById("desktopNav");
  if(navToggle && navPanel){
    function setNavOpen(open){
      navPanel.classList.toggle("open", open);
      navToggle.setAttribute("aria-expanded", String(open));
    }
    navToggle.addEventListener("click", function(){
      setNavOpen(!navPanel.classList.contains("open"));
    });
    navPanel.addEventListener("click", function(e){
      if(e.target.tagName === "A") setNavOpen(false);
    });
    document.addEventListener("keydown", function(e){
      if(e.key === "Escape" && navPanel.classList.contains("open")){
        setNavOpen(false);
        navToggle.focus();
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
