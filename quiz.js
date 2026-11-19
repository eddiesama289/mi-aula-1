/* Graded exercises and unit exams.
   Data: PRACTICE[unit] (practice.js) and EXAMS[unit] (exams.js), each a list of sets:
     { type, t: title, i: instructions, items, bank?, text?, pts? }
   Types:
     fill  items: "Sentence with ___ blanks.|answer|answer2"  (alternatives inside a blank: "a~b")
     match items: [["left", "right"], ...]                     (one point per pair)
     order items: "The sentence to rebuild."                   (alternatives: "A~B")
     mc    items: [["question with [[Spanish]] marked", ["option", ...], correctIndex], ...]
           options are shown as Spanish; start an option with "=" to show it as plain English
     tf    text: "Reading text", items: [["statement", true|false], ...]
   pts = points per blank / pair / item (default 1). Loaded before app.js; uses its helpers at call time. */

const GRADES = [[90, "Sobresaliente", "Excellent"], [70, "Notable", "Very good"], [50, "Aprobado", "Pass"], [0, "Suspenso", "Not yet, review and try again"]];
const ACCENTS = ["á", "é", "í", "ó", "ú", "ü", "ñ", "¿", "¡"];

function hashStr(s) { let h = 2166136261; for (const c of s) { h ^= c.codePointAt(0); h = Math.imul(h, 16777619); } return h >>> 0; }
function seededShuffle(arr, key) {
  const a = arr.slice(); let s = hashStr(key) || 1;
  const rnd = () => { s = Math.imul(s ^ (s >>> 15), 2246822507) ^ Math.imul(s ^ (s >>> 13), 3266489909); s >>>= 0; return s / 4294967296; };
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  if (a.length > 1 && a.every((x, i) => x === arr[i])) a.push(a.shift());
  return a;
}
/* ---------- a fresh draw on every attempt ----------
   Each set shows a random selection from a pool: its own items plus same-type items from other sets
   (practice: earlier lessons of the unidad, or the whole unidad + exam for the revision lesson;
   exam: the unidad's practice; final exam: the unit exams). At most half the items come from outside the set,
   and a fill item is only swapped for one with the same number of blanks, so the points never change.
   Options, pairs and word tiles are shuffled too, and a reading may be swapped for another reading of the unidad.
   The draw is kept in memory until the set is checked (a reload or "Try again" gives a new one);
   checked sets save their draw together with the answers. */
const DRAWS = {};
function rndInt(n) { return Math.floor(Math.random() * n); }
function shuffled(arr) { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = rndInt(i + 1); [a[i], a[j]] = [a[j], a[i]]; } return a; }
const GENERIC_I = /^(write the missing word|write the correct form|complete|fill in|write the answer)/i;
function poolable(s) { return !s.bank && !s.text; }
/* Matching sets only share pairs with sets of the same kind: "word → its meaning" sets pool together,
   other kinds (opposites, numbers, nationalities, job → workplace…) only with sets that have the same instruction. */
function matchKind(s) { return /meaning|English|^Connect the words/i.test(s.i || "") ? "meaning" : s.i; }
function itemKeys(type, it) {
  return type === "match" ? [it[0], it[1]].map((x) => "m " + String(x).toLowerCase()) : [type + " " + JSON.stringify(type === "mc" ? it[0] : it).toLowerCase()];
}
/* taken (optional): keys already used by other parts of the same exam, so no question appears twice. */
function drawSet(set, sources, taken) {
  const n = set.items.length, seed = String(Math.random()).slice(2, 10);
  if (set.type === "tf") {
    const reads = [set, ...sources.filter((s) => s.text && s.items.length >= n)];
    const src = reads[rndInt(reads.length)];
    return Object.assign({}, set, { t: src.t, text: src.text, items: shuffled(src.items).slice(0, n), seed });
  }
  const keys = (it) => itemKeys(set.type, it);
  const own = set.items.map((it) => ({ it, src: set })), foreign = [];
  if (poolable(set)) {
    const seen = new Set(taken || []); own.forEach((o) => keys(o.it).forEach((k) => seen.add(k)));
    sources.filter((s) => s !== set && s.type === set.type && poolable(s) && (set.type !== "match" || matchKind(s) === matchKind(set))).forEach((s) => s.items.forEach((it) => {
      const ks = keys(it); if (ks.some((k) => seen.has(k))) return;
      ks.forEach((k) => seen.add(k)); foreign.push({ it, src: s });
    }));
  }
  const blanks = (x) => set.type === "fill" ? parseFill(x.it).blanks.length : 1;
  const all = own.concat(foreign), used = new Set(), cap = Math.floor(n / 2), picks = []; let nf = 0;
  shuffled(own).forEach((slot) => {
    const b = blanks(slot), c = all.filter((x) => !used.has(x) && blanks(x) === b && (x.src === set || nf < cap));
    const p = c[rndInt(c.length)]; used.add(p); if (p.src !== set) nf++; picks.push(p);
  });
  if (taken) picks.forEach(({ it }) => keys(it).forEach((k) => taken.add(k)));
  const items = picks.map(({ it }) => {
    if (set.type !== "mc") return it;
    const ord = shuffled(it[1].map((_, k) => k));
    return [it[0], ord.map((k) => it[1][k]), ord.indexOf(it[2])];
  });
  const hints = set.type === "fill" ? picks.map(({ src }) => src === set || src.i === set.i ? "" : (src.i && !GENERIC_I.test(src.i) ? src.i : src.t)) : null;
  return Object.assign({}, set, { items, hints, bank: set.bank && shuffled(set.bank), seed });
}
function escH(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
function cleanAns(s) { return norm(String(s || "")).replace(/[.!¡¿?,;]+$/g, "").replace(/^[¿¡]+/, "").trim(); }
function sentToks(s) { return String(s).toLowerCase().replace(/[¿?¡!.,;:"'«»“”]/g, " ").split(/\s+/).filter(Boolean); }

function parseFill(s) { const p = s.split("|"); return { text: p[0], blanks: p.slice(1).map((b) => b.split("~")) }; }
function orderAlts(s) { return s.split("~"); }
function orderTiles(s, key) {
  const toks = orderAlts(s)[0].replace(/[¿?¡!.,;:"«»“”]/g, " ").replace(/'/g, "").split(/\s+/).filter(Boolean);
  if (toks.length) toks[0] = toks[0].charAt(0).toLowerCase() + toks[0].slice(1);
  return seededShuffle(toks.map((t, i) => ({ t, i })), key);
}

/* ---------- grading ---------- */
function fillMark(val, alts) {
  const v = cleanAns(val); if (!v) return "no";
  if (alts.some((a) => cleanAns(a) === v)) return "ok";
  if (alts.some((a) => stripAcc(cleanAns(a)) === stripAcc(v))) return "acc";
  return "no";
}
function unitsOf(set) { return set.type === "fill" ? set.items.reduce((n, s) => n + parseFill(s).blanks.length, 0) : set.items.length; }
function maxOf(set) { return unitsOf(set) * (set.pts || 1); }
function gradeSet(set, ans) {
  const pts = set.pts || 1; let got = 0;
  const marks = set.items.map((it, i) => {
    const a = ans[i];
    if (set.type === "fill") return parseFill(it).blanks.map((alts, b) => { const m = fillMark(a && a[b], alts); if (m !== "no") got += pts; return m; });
    let ok = false;
    if (set.type === "match") ok = a === i;
    else if (set.type === "order") { const said = sentToks((Array.isArray(a) ? a : []).join(" ")).join(" "); ok = !!said && orderAlts(it).some((alt) => sentToks(alt).join(" ") === said); }
    else if (set.type === "mc") ok = a === it[2];
    else if (set.type === "tf") ok = a === it[1];
    if (ok) got += pts; return ok ? "ok" : "no";
  });
  return { got, max: maxOf(set), marks };
}
function gradeOf(pct) { return GRADES.find((g) => pct >= g[0]); }

/* ---------- rendering ---------- */
function accentBar() {
  return `<div class="x-tipkb"><b>No Spanish keyboard?</b> Type a letter, then a symbol:
    <span class="kbd">a'</span>→<span class="es">á</span> <span class="kbd">e'</span>→<span class="es">é</span> <span class="kbd">i'</span>→<span class="es">í</span>
    <span class="kbd">o'</span>→<span class="es">ó</span> <span class="kbd">u'</span>→<span class="es">ú</span> <span class="kbd">n~</span>→<span class="es">ñ</span>
    <span class="kbd">u"</span>→<span class="es">ü</span> <span class="kbd">?/</span>→<span class="es">¿</span> <span class="kbd">!/</span>→<span class="es">¡</span>
    <span class="muted">Or tap the letter buttons that pop up at the bottom when you click a box.</span></div>`;
}

/* Typing shortcuts for English keyboards: a' → á, n~ → ñ, u" → ü, ?/ → ¿, !/ → ¡ (curly quotes from phones work too).
   Works in every text box on the site. */
const ACC_MAP = { a: "á", e: "é", i: "í", o: "ó", u: "ú", A: "Á", E: "É", I: "Í", O: "Ó", U: "Ú" };
const ACC_RE = /([aeiouAEIOU])['’´`]|([nN])~|([uU])["”]|([?!])\//g;
function accFix(s) {
  return s.replace(ACC_RE, (m, v, n, u, p) => v ? ACC_MAP[v] : n ? (n === "n" ? "ñ" : "Ñ") : u ? (u === "u" ? "ü" : "Ü") : p === "?" ? "¿" : "¡");
}
function isTextBox(el) { return el && el.tagName === "INPUT" && (!el.type || el.type === "text" || el.type === "search") && !el.disabled && !el.readOnly; }
document.addEventListener("input", (e) => {
  const el = e.target; if (!isTextBox(el) || (e.inputType && e.inputType.startsWith("delete"))) return;
  const pos = el.selectionStart ?? el.value.length;
  const before = accFix(el.value.slice(0, pos)), after = accFix(el.value.slice(pos));
  if (before + after === el.value) return;
  el.value = before + after;
  try { el.setSelectionRange(before.length, before.length); } catch (err) {}
  el.dispatchEvent(new Event("input", { bubbles: true }));
}, true);

/* Floating letter buttons: appear at the bottom of the screen while any text box is focused */
const accBar = document.createElement("div");
accBar.id = "accbar"; accBar.setAttribute("aria-label", "Spanish letters");
accBar.innerHTML = ACCENTS.map((c) => `<button type="button" class="x-key" data-c="${c}" tabindex="-1">${c}</button>`).join("");
document.addEventListener("DOMContentLoaded", () => document.body.appendChild(accBar));
accBar.addEventListener("pointerdown", (e) => e.preventDefault()); /* keep focus in the text box */
accBar.addEventListener("mousedown", (e) => e.preventDefault());
let accHide = 0;
document.addEventListener("focusin", (e) => { if (isTextBox(e.target)) { clearTimeout(accHide); accBar.classList.add("on"); } });
document.addEventListener("focusout", () => { accHide = setTimeout(() => { if (!isTextBox(document.activeElement)) accBar.classList.remove("on"); }, 120); });
function renderSet(set, si, ans, opts) {
  const done = !!ans, res = done ? gradeSet(set, ans) : null, key = opts.key + "-" + si + (set.seed || ""), pts = set.pts || 1;
  const ptsLabel = opts.exam ? `<span class="muted">${maxOf(set)} points${pts > 1 ? ` (${pts} each)` : ""}</span>` : "";
  const scoreTag = done && !opts.hideScore ? pill(res.got, res.max) : "";
  let body = "";
  if (set.text) body += `<div class="x-text">${set.text.split("\n").map((l) => `<p>${es(l)}</p>`).join("")}</div>`;
  if (set.bank) body += `<div class="x-bank"><span class="muted">Word bank:</span> ${set.bank.map((w) => `<span class="x-chipw">${escH(w)}</span>`).join("")}</div>`;

  if (set.type === "fill") {
    body += `<ol class="x-list">${set.items.map((it, i) => {
      const f = parseFill(it); let b = 0;
      const html = rich("[[" + f.text + "]]").replace(/___/g, () => {
        const k = b++, m = res && res.marks[i][k], v = ans && ans[i] ? ans[i][k] || "" : "";
        const fix = m === "no" ? ` <span class="x-fix">${escH(f.blanks[k][0])}</span>` : m === "acc" ? ` <span class="x-note">accent: ${escH(f.blanks[k][0])}</span>` : "";
        return `<span class="x-blank"><input class="x-in ${m ? (m === "no" ? "no" : "ok") : ""}" data-i="${i}" data-b="${k}" value="${escH(v)}" ${done ? "disabled" : ""} autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Blank ${k + 1}">${fix}</span>`;
      });
      const hint = set.hints && set.hints[i] ? `<span class="x-hint">${escH(set.hints[i])}</span>` : "";
      return `<li>${hint}${html}</li>`;
    }).join("")}</ol>`;
  } else if (set.type === "match") {
    const right = seededShuffle(set.items.map((p, i) => i), key);
    if (!done) {
      body += `<div class="x-match" data-n="${set.items.length}">
        <div class="x-col">${set.items.map((p, i) => `<button type="button" class="x-ml" data-i="${i}"><span class="x-num">${i + 1}</span>${es(p[0])}</button>`).join("")}</div>
        <div class="x-col">${right.map((r) => `<button type="button" class="x-mr" data-r="${r}"><span class="x-num"></span>${escH(set.items[r][1])}</button>`).join("")}</div></div>
        <p class="muted">Click a word on the left, then its partner on the right. Click a pair again to undo it.</p>`;
    } else {
      body += `<ul class="x-review">${set.items.map((p, i) => {
        const a = ans[i], ok = res.marks[i] === "ok";
        return `<li class="${ok ? "ok" : "no"}">${es(p[0])} → ${a >= 0 && set.items[a] ? escH(set.items[a][1]) : "<i>no answer</i>"}${ok ? "" : ` <span class="x-fix">${escH(p[1])}</span>`}</li>`;
      }).join("")}</ul>`;
    }
  } else if (set.type === "order") {
    body += `<ol class="x-list">${set.items.map((it, i) => {
      if (!done) {
        const tiles = orderTiles(it, key + "-" + i);
        return `<li class="x-order" data-i="${i}"><div class="x-line" aria-label="Your sentence"></div>
          <div class="x-pool">${tiles.map((t) => `<button type="button" class="x-tile">${escH(t.t)}</button>`).join("")}</div></li>`;
      }
      const ok = res.marks[i] === "ok", said = (Array.isArray(ans[i]) ? ans[i] : []).join(" ");
      return `<li class="${ok ? "ok" : "no"} x-done"><span class="x-said ${ok ? "ok" : "no"}">${ok ? "✓ " + escH(orderAlts(it).find((alt) => sentToks(alt).join(" ") === sentToks(said).join(" ")) || said) : said ? escH(said) : "<i>no answer</i>"}</span>${ok ? "" : `<div class="x-fix">${es(orderAlts(it)[0])}</div>`}</li>`;
    }).join("")}</ol>`;
  } else if (set.type === "mc" || set.type === "tf") {
    body += `<ol class="x-list">${set.items.map((it, i) => {
      const options = set.type === "mc" ? it[1] : ["True", "False"];
      const correct = set.type === "mc" ? it[2] : (it[1] ? 0 : 1);
      const chosen = ans ? (set.type === "mc" ? ans[i] : ans[i] === true ? 0 : ans[i] === false ? 1 : -1) : -1;
      const q = set.type === "mc" ? rich(it[0]) : es(it[0]);
      return `<li class="x-choice" data-i="${i}"><div class="x-q">${q}</div><div class="x-opts">${options.map((o, k) => {
        const cls = done ? (k === correct ? "ok" : k === chosen ? "no" : "") : "";
        const label = set.type === "tf" ? o : o.startsWith("=") ? escH(o.slice(1)) : es(o);
        return `<button type="button" class="x-opt ${cls} ${done && k === chosen ? "sel" : ""}" data-k="${k}" ${done ? "disabled" : ""}>${label}</button>`;
      }).join("")}</div></li>`;
    }).join("")}</ol>`;
  }

  const foot = opts.exam ? "" : `<div class="x-foot">${done ? `<button type="button" class="btn ghost x-redo" data-s="${si}">Try again</button>` : `<button type="button" class="btn x-check" data-s="${si}">Check my answers</button>`}</div>`;
  return `<section class="card x-set" data-s="${si}" data-type="${set.type}">
    <div class="x-head"><div><div class="qn">${opts.exam ? "Part " + String.fromCharCode(65 + si) : "Exercise " + (si + 1)} · ${({ fill: "Fill in the blanks", match: "Connect the words", order: "Build the sentence", mc: "Choose the answer", tf: "Read: true or false" })[set.type]}</div>
    <h3>${set.t}</h3>${set.i ? `<p class="muted">${set.i}</p>` : ""}</div><div class="x-score">${ptsLabel}${scoreTag}</div></div>${body}${foot}</section>`;
}
function pill(got, max) {
  const pct = max ? (got / max) * 100 : 0;
  return `<span class="pill ${pct >= 80 ? "ok" : pct >= 50 ? "mid" : "no"}">${got} / ${max}</span>`;
}

/* ---------- reading answers from the page ---------- */
function collectSet(el, set) {
  return set.items.map((it, i) => {
    if (set.type === "fill") return [...el.querySelectorAll(`.x-in[data-i="${i}"]`)].map((x) => x.value.trim());
    if (set.type === "match") { const b = el.querySelector(`.x-ml[data-i="${i}"]`); return b && b.dataset.p !== undefined && b.dataset.p !== "" ? +b.dataset.p : -1; }
    if (set.type === "order") return [...el.querySelectorAll(`.x-order[data-i="${i}"] .x-line .x-tile`)].map((t) => t.textContent);
    const sel = el.querySelector(`.x-choice[data-i="${i}"] .x-opt.sel`);
    if (set.type === "mc") return sel ? +sel.dataset.k : -1;
    return sel ? sel.dataset.k === "0" : null;
  });
}
function emptyCount(set, ans) {
  return ans.reduce((n, a) => n + (Array.isArray(a) ? (set.type === "fill" ? a.filter((x) => !x).length : a.length ? 0 : 1) : a === -1 || a === null ? 1 : 0), 0);
}

/* ---------- practice tab ---------- */
function lessonInfo(u) { return typeof LESSONS !== "undefined" ? LESSONS[u] : null; }
/* Units split into lessons keep their answers under a new key, so old answers saved by set number don't land on the wrong exercise. */
function practiceKey(u) { return (lessonInfo(u) ? "pl" : "p") + u; }
function practiceStore(u) { const k = practiceKey(u); return progress[k] || (progress[k] = {}); }
/* Lessons 1–3 draw from their own lesson and earlier ones; the revision lesson (and units without lessons) from the
   whole unidad plus its exam. */
function practiceSources(uid, set) {
  const sets = PRACTICE[uid] || [], l = set.l || 4;
  const list = lessonInfo(uid) && l < 4 ? sets.filter((s) => (s.l || 4) <= l) : sets.concat((typeof EXAMS !== "undefined" && EXAMS[uid]) || []);
  return list.filter((s) => s !== set && s.type === set.type);
}
/* { set, ans } for practice set si: the checked attempt, or the current fresh draw (ans null). */
function practiceEntry(uid, si) {
  const set = PRACTICE[uid][si], saved = practiceStore(uid)[si];
  if (Array.isArray(saved)) return { set, ans: saved }; /* answers saved before draws existed */
  if (saved && saved.ans) return { set: saved.set || set, ans: saved.ans };
  const k = "p" + uid + "-" + si;
  return { set: DRAWS[k] || (DRAWS[k] = drawSet(set, practiceSources(uid, set))), ans: null };
}
function renderPracticeSets(u) {
  const sets = (typeof PRACTICE !== "undefined" && PRACTICE[u.id]) || [];
  if (!sets.length) return "";
  const key = practiceKey(u.id), L = lessonInfo(u.id), ent = sets.map((s, si) => practiceEntry(u.id, si));
  const score = (list) => list.reduce((a, { si }) => { const e = ent[si]; if (e.ans) { const r = gradeSet(e.set, e.ans); a.got += r.got; a.max += r.max; a.n++; } return a; }, { got: 0, max: 0, n: 0 });
  const all = sets.map((s, si) => ({ s, si })), tot = score(all);
  const head = `<div class="card summary"><div><h3>Exercises</h3><p>${tot.n ? `You have checked ${tot.n} of ${sets.length} exercises: ${tot.got} of ${tot.max} points.` : `${sets.length} exercises${L ? ", in 4 lessons that follow your classes" : ""}. Do one, then press <b>Check my answers</b> to get your grade.`}</p></div>
    ${tot.n ? `<button class="btn ghost" id="resetP">Clear all</button>` : ""}</div>`;
  if (!L) return head + accentBar() + sets.map((s, si) => renderSet(ent[si].set, si, ent[si].ans, { key })).join("");
  const groups = [1, 2, 3, 4].map((l) => ({ l, list: all.filter((x) => (x.s.l || 4) === l) }));
  const nav = `<nav class="x-lessons">${groups.map((g) => { const sc = score(g.list); return `<button type="button" class="x-lnav" data-jump="lesson-${u.id}-${g.l}"><b>Lesson ${g.l}</b><span>${escH(L.titles[g.l - 1])}</span><small>${sc.n ? `${sc.n}/${g.list.length} done · ${sc.got}/${sc.max}` : `${g.list.length} exercises`}</small></button>`; }).join("")}</nav>`;
  return head + nav + accentBar() + groups.map((g) => `<section class="card x-lesson" id="lesson-${u.id}-${g.l}"><span class="x-kicker">Lesson ${g.l} of 4 · ${L.book === 2 ? "Aula 2 class" : "Class"} ${L.first + g.l - 1}${g.l === 4 ? " · revision" : ""}</span><h2>${escH(L.titles[g.l - 1])}</h2>${g.l === 4 ? `<p class="muted">Mixed exercises from the whole unidad. When you finish them, try the <b>Exam</b> tab.</p>` : ""}</section>` +
    g.list.map(({ si }) => renderSet(ent[si].set, si, ent[si].ans, { key })).join("")).join("");
}

/* ---------- exam tab ---------- */
function examStore(u) { return progress["x" + u] || (progress["x" + u] = {}); }
function examSources(u, set) {
  const list = u.final ? UNITS.filter((x) => x.book === u.book && !x.final && x.n >= 1).flatMap((x) => EXAMS[x.id] || [])
    : ((typeof PRACTICE !== "undefined" && PRACTICE[u.id]) || []);
  return list.filter((s) => s.type === set.type);
}
/* The parts of the exam: the submitted attempt, or a fresh draw for a new attempt. */
function examSets(u) {
  const base = (typeof EXAMS !== "undefined" && EXAMS[u.id]) || [], st = examStore(u.id);
  if (!base.length) return base;
  if (st.ans) return st.sets || base;
  const k = "x" + u.id;
  if (!DRAWS[k]) {
    const taken = new Set(base.flatMap((s) => s.items.flatMap((it) => itemKeys(s.type, it))));
    DRAWS[k] = base.map((s) => drawSet(s, examSources(u, s), taken));
  }
  return DRAWS[k];
}
function renderExam(u) {
  const sets = examSets(u);
  if (!sets.length) return `<section class="card"><p>The exam for this unit is coming soon.</p></section>`;
  const st = examStore(u.id), total = sets.reduce((n, s) => n + maxOf(s), 0), ans = st.ans;
  let head;
  if (ans) {
    const parts = sets.map((s, si) => ({ s, si, r: gradeSet(s, ans[si] || s.items.map(() => -1)) }));
    const got = parts.reduce((n, p) => n + p.r.got, 0), pct = (got / total) * 100, g = gradeOf(pct);
    head = `<section class="card x-result" id="examResult">
      <div class="x-big"><span class="x-total">${got}<small> / ${total}</small></span><div><b>${g[1]}</b><p class="muted">${g[2]}${st.best !== undefined ? ` · Best score: ${st.best} / ${total}` : ""}</p></div></div>
      <div class="tbl-wrap"><table><tr><th>Part</th><th>Exercise</th><th>Points</th></tr>${parts.map((p) => `<tr><td>${String.fromCharCode(65 + p.si)}</td><td>${p.s.t}</td><td>${pill(p.r.got, p.r.max)}</td></tr>`).join("")}</table></div>
      <p class="muted">Corrections are shown in red under each part. Review the grammar and vocabulary tabs, then take the exam again.</p>
      <div><button class="btn" id="retakeExam">Take the exam again</button></div></section>`;
  } else {
    head = `<section class="card"><h3>${u.final ? u.en : `Unit ${u.n} exam`} · ${total} points</h3>
      <p>Answer every part, then press <b>Submit exam</b> at the bottom. You get your grade out of ${total} and the corrections. ${st.best !== undefined ? `Your best score so far: <b>${st.best} / ${total}</b>.` : ""}</p>
      <p class="muted">Grades: ${Math.ceil(total * .9)} or more Sobresaliente · ${Math.ceil(total * .7)} Notable · ${Math.ceil(total * .5)} Aprobado · under ${Math.ceil(total * .5)} Suspenso. Missing accents still count, but they are pointed out.</p></section>${accentBar()}`;
  }
  const body = sets.map((s, si) => renderSet(s, si, ans ? ans[si] || s.items.map(() => -1) : null, { key: "x" + u.id, exam: true })).join("");
  const foot = ans ? "" : `<div class="card summary"><p>Finished? Check that you answered everything.</p><button class="btn" id="submitExam">Submit exam</button></div>`;
  return head + body + foot;
}

/* ---------- interaction ---------- */
function quizClick(e) {
  const t = e.target, u = byId(state.unit);
  const jump = t.closest("[data-jump]");
  if (jump) { const el = document.getElementById(jump.dataset.jump); if (el) el.scrollIntoView({ behavior: "smooth", block: "start" }); return true; }
  const key = t.closest(".x-key");
  if (key) {
    const inp = isTextBox(document.activeElement) ? document.activeElement : null;
    if (inp) {
      const s = inp.selectionStart ?? inp.value.length, en = inp.selectionEnd ?? s;
      inp.value = inp.value.slice(0, s) + key.dataset.c + inp.value.slice(en); inp.setSelectionRange(s + 1, s + 1);
      inp.dispatchEvent(new Event("input", { bubbles: true }));
    }
    return true;
  }
  const ml = t.closest(".x-ml");
  if (ml) {
    const box = ml.closest(".x-match");
    if (ml.dataset.p !== undefined && ml.dataset.p !== "") { unpair(box, +ml.dataset.i); return true; }
    box.querySelectorAll(".x-ml.on").forEach((b) => b.classList.remove("on"));
    ml.classList.add("on"); return true;
  }
  const mr = t.closest(".x-mr");
  if (mr) {
    const box = mr.closest(".x-match"), r = mr.dataset.r;
    if (mr.dataset.p !== undefined && mr.dataset.p !== "") { unpair(box, +mr.dataset.p); return true; }
    const on = box.querySelector(".x-ml.on"); if (!on) { mr.classList.add("shake"); setTimeout(() => mr.classList.remove("shake"), 300); return true; }
    const i = +on.dataset.i; on.classList.remove("on");
    on.dataset.p = r; on.classList.add("paired"); mr.dataset.p = i; mr.classList.add("paired"); $(".x-num", mr).textContent = i + 1;
    return true;
  }
  const tile = t.closest(".x-tile");
  if (tile) {
    const li = tile.closest(".x-order"), line = $(".x-line", li), pool = $(".x-pool", li);
    (tile.parentElement === pool ? line : pool).appendChild(tile); return true;
  }
  const opt = t.closest(".x-opt");
  if (opt && !opt.disabled) { opt.closest(".x-opts").querySelectorAll(".x-opt").forEach((b) => b.classList.toggle("sel", b === opt)); return true; }
  const chk = t.closest(".x-check");
  if (chk) {
    const si = +chk.dataset.s, set = practiceEntry(u.id, si).set, el = chk.closest(".x-set");
    practiceStore(u.id)[si] = { set, ans: collectSet(el, set) }; delete DRAWS["p" + u.id + "-" + si]; save(); render();
    const again = document.querySelector(`.x-set[data-s="${si}"]`); if (again) again.scrollIntoView({ block: "start" });
    return true;
  }
  const redo = t.closest(".x-redo");
  if (redo) { delete practiceStore(u.id)[+redo.dataset.s]; delete DRAWS["p" + u.id + "-" + redo.dataset.s]; save(); render(); const again = document.querySelector(`.x-set[data-s="${redo.dataset.s}"]`); if (again) again.scrollIntoView({ block: "start" }); return true; }
  if (t.closest("#resetP")) { delete progress[practiceKey(u.id)]; Object.keys(DRAWS).forEach((k) => { if (k.startsWith("p" + u.id + "-")) delete DRAWS[k]; }); save(); render(); return true; }
  if (t.closest("#submitExam")) {
    const sets = examSets(u), ans = sets.map((s, si) => collectSet(document.querySelector(`.x-set[data-s="${si}"]`), s));
    const empty = sets.reduce((n, s, si) => n + emptyCount(s, ans[si]), 0);
    if (empty && !confirm(`You have ${empty} unanswered ${empty === 1 ? "question" : "questions"}. Submit anyway?`)) return true;
    const st = examStore(u.id), got = sets.reduce((n, s, si) => n + gradeSet(s, ans[si]).got, 0);
    st.ans = ans; st.sets = sets; delete DRAWS["x" + u.id]; st.last = got; st.best = Math.max(st.best || 0, got); st.at = Date.now(); save(); render();
    window.scrollTo({ top: $("#main").offsetTop - 10 });
    return true;
  }
  if (t.closest("#retakeExam")) { const st = examStore(u.id); delete st.ans; delete st.sets; delete DRAWS["x" + u.id]; save(); render(); window.scrollTo({ top: $("#main").offsetTop - 10 }); return true; }
  return false;
}
function unpair(box, i) {
  const l = box.querySelector(`.x-ml[data-i="${i}"]`); if (!l) return;
  const r = box.querySelector(`.x-mr[data-r="${l.dataset.p}"]`);
  l.dataset.p = ""; l.classList.remove("paired");
  if (r) { r.dataset.p = ""; r.classList.remove("paired"); $(".x-num", r).textContent = ""; }
}
