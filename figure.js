(() => {
const stage = document.querySelector("[data-figure]");
if (!stage) return;
const carriage = stage.querySelector('[data-part="carriage"]');
const boxes = [...stage.querySelectorAll('[data-part="box"]')];
const readout = document.querySelector("[data-figure-readout]");
const startText = document.querySelector("[data-figure-start]");
const template = document.querySelector("[data-figure-template]");
const picks = [...document.querySelectorAll("[data-pick]")];
const centres = [-74,-16,42,100];
const X = [1.2549, 0.6969], Y = [-1.3937, 0.6275];
const OUT = 12;
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
  boxes.forEach((node, i) => move(node, slide[i] * Y[0], slide[i] * Y[1]));
}
function tick(now) {
  const dt = last ? Math.min((now - last) / 1000, 1 / 30) : 1 / 60;
  last = now;
  const calm = still.matches;
  x = calm ? target : x + (target - x) * (1 - Math.exp(-dt / 0.14));
  if (Math.abs(target - x) < 0.02) x = target;
  let busy = x !== target;
  boxes.forEach((_, i) => {
    const want = i === selected && Math.abs(target - x) < 6 ? OUT : 0;
    slide[i] = calm ? want : slide[i] + (want - slide[i]) * (1 - Math.exp(-dt / 0.12));
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
function indexAt(event) {
  const box = stage.querySelector("svg").getBoundingClientRect();
  const share = (event.clientX - box.left) / box.width;
  return Math.min(boxes.length - 1, Math.max(0, Math.round((share - 0.2) / 0.6 * (boxes.length - 1))));
}
if (matchMedia("(hover:hover) and (pointer:fine)").matches) stage.addEventListener("pointermove", (event) => go(indexAt(event)));
picks.forEach((button) => button.addEventListener("click", () => go(Number(button.dataset.pick))));
new MutationObserver(say).observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
say();
draw();
})();
