/* Which daily class (clase 1–3 of the unidad) teaches each item of units 6–9 (units 1–5: lessons-1-5.js).
   One number per item, in the order the item appears in UNITS / SKILLS. 0 = extra material from the book that the
   classes do not cover. Clase 4 of every unidad is revision, so it has no items of its own.
   Loaded after lessons.js (uses LESSONS for the titles) and before app.js. */
const CLASE_MAP = {
  6: {
    grammar: [1, 1, 2, 3, 3, 3, 2, 3, 0],
    vocab:   [2, 3, 2, 1, 2, 1, 1, 2, 0],
    phrases: [1, 2, 1, 2, 3, 3, 2, 3, 3],
    listen:  [2, 1, 1, 1, 3, 2],
    talk:    [2, 1, 3]
  },
  7: {
    grammar: [2, 1, 3, 2, 2, 3, 2],
    vocab:   [2, 1, 1, 1, 1, 1, 2, 1, 0, 1, 2],
    phrases: [2, 2, 1, 2, 3, 1, 3, 2, 1],
    listen:  [2, 2, 1, 1, 2, 1],
    talk:    [1, 2, 1]
  },
  8: {
    grammar: [1, 2, 2, 2, 3, 1, 3],
    vocab:   [1, 1, 0, 0, 1, 3, 2, 2, 3, 0],
    phrases: [2, 2, 2, 2, 1, 3, 3, 0, 2],
    listen:  [1, 2, 1, 2, 2, 1],
    talk:    [1, 1, 2]
  },
  9: {
    grammar: [1, 2, 3, 2, 3, 0, 3, 0, 0],
    vocab:   [3, 2, 0, 0, 3, 1, 2, 3, 3, 0],
    phrases: [1, 1, 2, 2, 2, 3, 0, 3, 0],
    listen:  [1, 2, 3, 2, 1, 2],
    talk:    [1, 2, 3]
  }
};

/* Groups the indexes 0..n-1 of one tab by clase: [{c: 1, idx: [...]}, ..., {c: 0, idx: [...]}].
   Returns null for units that are not split into classes, so callers keep their normal layout. */
function claseGroups(uid, kind, n) {
  const map = CLASE_MAP[uid] && CLASE_MAP[uid][kind];
  if (!map || typeof LESSONS === "undefined" || !LESSONS[uid]) return null;
  const order = [1, 2, 3, 0];
  return order.map((c) => ({ c, idx: [...Array(n).keys()].filter((i) => (map[i] ?? 0) === c) })).filter((g) => g.idx.length);
}
function claseLine(uid, c) {
  const L = LESSONS[uid];
  if (c === 0) return `<div class="clase-line extra"><span>Extra from the book</span><small>Not covered in class. Read it on your own if you want more.</small></div>`;
  return `<div class="clase-line"><span>Clase ${c} · ${escH(L.titles[c - 1])}</span></div>`;
}
function claseEnd(uid) {
  return `<div class="clase-line"><span>Clase 4 · Repaso</span><small>No new material: revise everything above, then do Practice → Lesson 4 and the Exam.</small></div>`;
}
/* Wraps the rendered pieces of a tab with the clase lines. pieces[i] is the HTML of item i ("" to skip it). */
function byClase(uid, kind, pieces, wrap, noEnd) {
  const groups = claseGroups(uid, kind, pieces.length);
  if (!groups) return null;
  const part = (g) => { const inner = g.idx.map((i) => pieces[i]).join(""); return inner ? claseLine(uid, g.c) + (wrap ? wrap(inner) : inner) : ""; };
  return groups.filter((g) => g.c).map(part).join("") + (noEnd ? "" : claseEnd(uid)) + groups.filter((g) => !g.c).map(part).join("");
}
