/* Carica i webfont Google della pagina. Vive in un file esterno (e non inline)
   così la CSP in vercel.json non deve conoscerne l'hash. L'URL arriva dall'attributo
   data-href dello <script> che include questo file.
   Salta il download se l'utente ha attivo il Risparmio dati: il sito resta
   leggibile grazie allo stack di font di sistema di fallback. */
(function(){
  var saveData = navigator.connection && navigator.connection.saveData;
  var href = document.currentScript && document.currentScript.dataset.href;
  if(saveData || !href) return;
  var l = document.createElement("link");
  l.rel = "stylesheet";
  l.href = href;
  document.head.appendChild(l);
})();
