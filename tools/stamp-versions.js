/* Gives every local script and stylesheet in index.html a ?v=<content hash>, so a changed file gets a new URL
   and browsers never run an old copy after a deploy. Run before each commit (the git pre-commit hook does it):
     node tools/stamp-versions.js */
const fs = require("fs"), path = require("path"), crypto = require("crypto");
const root = path.join(__dirname, ".."), file = path.join(root, "index.html");
const html = fs.readFileSync(file, "utf8");
const out = html.replace(/(<script src="|<link rel="stylesheet" href=")([\w.\-\/]+\.(?:js|css))(?:\?v=[\w]+)?"/g, (m, pre, src) => {
  const p = path.join(root, src);
  if (!fs.existsSync(p)) return m;
  const v = crypto.createHash("sha1").update(fs.readFileSync(p)).digest("hex").slice(0, 8);
  return `${pre}${src}?v=${v}"`;
});
if (out !== html) { fs.writeFileSync(file, out); console.log("index.html: script versions updated"); }
