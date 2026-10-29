// Build di produzione: copia il sito statico in dist/, minificando
// i CSS e script.js. Gli HTML restano invariati.
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const root = __dirname;
const dist = path.join(root, "dist");

const skip = new Set([
  "node_modules", ".git", ".github", "tests", "dist", "package.json", "package-lock.json", "playwright.config.cjs",
  "build.js", "README.md", "CLAUDE.md", "BRAND.md", "api", "ANALYTICS_SETUP.md",
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

execSync(
  `npx cleancss -o dist/pages.css pages.css`,
  { cwd: root, stdio: "inherit" }
);

execSync(
  `npx cleancss -o dist/portfolio-redesign.css portfolio-redesign.css`,
  { cwd: root, stdio: "inherit" }
);

execSync(
  `npx cleancss -o dist/admin.css admin.css`,
  { cwd: root, stdio: "inherit" }
);

// Track page views on public pages only; keep the private admin page untracked.
for (const name of fs.readdirSync(dist)) {
 if (!name.endsWith(".html") || name === "admin.html") continue;
 const file = path.join(dist,name);
 let html = fs.readFileSync(file,"utf8");
 html = html.replace(/<\/body>/i, '<script defer src="/analytics.js"></script></body>');
 fs.writeFileSync(file,html);
}
console.log("Build completata in dist/");
