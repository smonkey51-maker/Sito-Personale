// Build di produzione: copia il sito statico in dist/, minificando
// solo style.css e script.js. index.html resta invariato perché gli
// script inline in <head> sono ancorati via hash SHA-256 nella CSP
// (vercel.json) — minificarli cambierebbe quegli hash.
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const root = __dirname;
const dist = path.join(root, "dist");

const skip = new Set([
  "node_modules", ".git", "dist", "package.json", "package-lock.json",
  "build.js", "README.md", "CLAUDE.md", "BRAND.md",
]);

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist);

for (const name of fs.readdirSync(root)) {
  if (skip.has(name)) continue;
  fs.cpSync(path.join(root, name), path.join(dist, name), { recursive: true });
}

execSync(
  `npx terser script.js --compress --mangle --output dist/script.js`,
  { cwd: root, stdio: "inherit" }
);

execSync(
  `npx cleancss -o dist/style.css style.css`,
  { cwd: root, stdio: "inherit" }
);

console.log("Build completata in dist/");
