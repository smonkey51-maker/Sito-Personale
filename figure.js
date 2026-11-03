(() => {
const stage = document.querySelector("[data-figure]");
if (!stage) return;
const carriage = stage.querySelector('[data-part="carriage"]');
const boxes = [...stage.querySelectorAll('[data-part="box"]')];
const discs = boxes.map((node) => node.querySelector('[data-part="disc"]'));
const readout = document.querySelector("[data-figure-readout]");
const startText = document.querySelector("[data-figure-start]");
const template = document.querySelector("[data-figure-template]");
const picks = [...document.querySelectorAll("[data-pick]")];
const centres = [0,24,48,72];
const X = [0.866, 0.5], Y = [0, -1];
const OUT = 40, DISC = 0.85;
const still = matchMedia("(prefers-reduced-motion: reduce)");
let x = centres[0], target = x, selected = -1;
const slide = boxes.map(() => 0);
let frame = 0, last = 0;
const move = (node, ax, ay) => node.setAttribute("transform", "translate(" + ax.toFixed(2) + " " + ay.toFixed(2) + ")");
function say() {
  readout.textContent = selected < 0 ? startText.textContent : template.textContent.replace("{name}", picks[selected].textContent);
}
function draw() {
  move(carriage, x * X[0], x * X[1]);
  boxes.forEach((node, i) => {
    move(node, slide[i] * Y[0], slide[i] * Y[1]);
    move(discs[i], 0, -slide[i] * DISC);
  });
}
function tick(now) {
  const dt = last ? Math.min((now - last) / 1000, 1 / 30) : 1 / 60;
  last = now;
  const calm = still.matches;
  x = calm ? target : x + (target - x) * (1 - Math.exp(-dt / 0.08));
  if (Math.abs(target - x) < 0.02) x = target;
  let busy = x !== target;
  boxes.forEach((_, i) => {
    const want = i === selected ? OUT : 0;
    slide[i] = calm ? want : slide[i] + (want - slide[i]) * (1 - Math.exp(-dt / 0.07));
    if (Math.abs(want - slide[i]) < 0.02) slide[i] = want; else busy = true;
  });
  draw();
  frame = busy ? requestAnimationFrame(tick) : 0;
}
function go(index) {
  if (index < 0 || index >= boxes.length) return;
  selected = index;
  target = centres[index];
  say();
  picks.forEach((button, i) => button.setAttribute("aria-pressed", String(i === index)));
  if (!frame) { last = 0; frame = requestAnimationFrame(tick); }
}
/* Over the drawing the nearest sleeve wins. */
function indexAt(event) {
  let best = 0, gap = Infinity;
  boxes.forEach((node, i) => {
    const r = node.getBoundingClientRect();
    const d = Math.abs(event.clientX - (r.left + r.right) / 2);
    if (d < gap) { gap = d; best = i; }
  });
  return best;
}
/* With a mouse the figure follows the pointer: over a button it picks that button, over the drawing it picks the box under the pointer. */
if (matchMedia("(hover:hover) and (pointer:fine)").matches) stage.addEventListener("pointermove", (event) => {
  const pick = event.target.closest("[data-pick]");
  if (pick) go(Number(pick.dataset.pick));
  else if (event.target.closest("svg")) go(indexAt(event));
});
/* The press starts the move (pointerdown), so touch does not wait for the release. */
picks.forEach((button) => {
  button.addEventListener("pointerdown", () => go(Number(button.dataset.pick)));
  button.addEventListener("click", () => go(Number(button.dataset.pick)));
});
new MutationObserver(say).observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
say();
draw();
})();
