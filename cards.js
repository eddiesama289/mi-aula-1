/* Word cards: a typing test on every word of a unidad's Vocabulary tab, shown under «Clase 4 · Repaso».
   Each card shows the word in Spanish or in English (mixed, or one direction only); you type the other side.
   Answers are checked leniently: missing accents, a missing article and English alternatives ("town, village",
   "to follow / to continue") count, with a note. A wrong mark can be overruled with "I was right" for synonyms.
   You can test the whole unidad, one clase or your starred words. A round's state lives in memory only.
   Loaded before app.js; uses its helpers (es, norm, stripAcc, stars, byId, state) and quiz.js (shuffled, escH) at call time. */

let WC = null; /* { uid, deck: [{es, en, dir}], i, right, missed: [], checked, last } */
const WC_PREF = { set: "all", dir: "mix" };

/* ---------- the word list ----------
   Cards test the main word only: articles are dropped (el profesor / la profesora → profesor / profesora; the word
   keeps its gender colour), grammar words on their own (en, entre, desde, más… que…) are left out, and
   «preposition + word» items are cut to the word. Set phrases where the small word changes the meaning
   (a veces, cerca de, de repente, por supuesto…) stay whole. */
const WC_SKIP = new Set(["en", "entre", "desde", "durante", "¿desde cuándo?", "desde… hasta…", "desde hace", "más… que", "menos… que", "igual de", "tan… como", "tanto… como"]);
const WC_FIX = {
  "por trabajo": ["trabajo", "work"], "por viajes": ["viajes", "trips, travel"], "por estudios": ["estudios", "studies"],
  "por mi pareja": ["pareja", "partner"], "por mi familia": ["familia", "family"], "por curiosidad": ["curiosidad", "curiosity"],
  "con tarjeta": ["tarjeta", "card"], "en efectivo": ["efectivo", "cash"], "con hielo": ["hielo", "ice"], "sin azúcar": ["azúcar", "sugar"],
  "de madera": ["madera", "wood"], "de metal": ["metal", "metal"], "de cristal": ["cristal", "glass"], "de plástico": ["plástico", "plastic"],
  "de piel": ["piel", "leather"], "de algodón": ["algodón", "cotton"], "en parejas": ["parejas", "pairs"], "en grupos": ["grupos", "groups"]
};
function wcMain(es, en) {
  const key = es.trim().toLowerCase();
  if (WC_SKIP.has(key)) return null;
  if (WC_FIX[key]) return { es: WC_FIX[key][0], en: WC_FIX[key][1] };
  const strip = (a) => a.trim().replace(/^\((?:el|la|los|las)(?: \/ (?:el|la|los|las))?\)\s*/i, "").replace(/^(el|la|los|las|un|una|unos|unas)\s+(?=\S)/i, "");
  const e = es.replace(/\((?:el|la|los|las)(?: \/ (?:el|la|los|las))?\)\s*/gi, "");
  let parts = e.split(" / ");
  parts = parts.map((p) => p.split(/,\s*/).map(strip).join(", "));
  parts = parts.filter((p, i) => parts.indexOf(p) === i);
  const main = parts.join(" / ").replace(/\/s\b/g, "");
  return { es: main, en, full: es };
}
function wcWords(u, set) {
  const map = typeof CLASE_MAP !== "undefined" && CLASE_MAP[u.id] && CLASE_MAP[u.id].vocab, st = stars(), seen = new Set(), out = [];
  u.vocab.forEach((g, gi) => {
    const c = map ? (map[gi] ?? 0) : 0;
    if (set !== "all" && set !== "star" && String(c) !== set) return;
    g.items.forEach((it) => {
      if (set === "star" && !st[it[0]]) return;
      const w = wcMain(it[0], it[1]); if (!w) return;
      const k = wcEs(w.es).join("|"); if (seen.has(k)) return; seen.add(k);
      out.push(w);
    });
  });
  return out;
}
function wcSets(u) {
  const map = typeof CLASE_MAP !== "undefined" && CLASE_MAP[u.id] && CLASE_MAP[u.id].vocab, L = typeof LESSONS !== "undefined" && LESSONS[u.id];
  const sets = [["all", "All words"]];
  if (map && L) {
    [1, 2, 3].forEach((c) => { if (map.includes(c)) sets.push([String(c), `Clase ${c}`]); });
    if (map.some((c) => !c)) sets.push(["0", "Extra"]);
  }
  sets.push(["star", "★ Starred"]);
  return sets.map(([k, label]) => ({ k, label, n: wcWords(u, k).length }));
}

/* ---------- answer checking ---------- */
const WC_ART = /^(el|la|los|las|un|una|unos|unas)\s+/;
function wcCleanEs(s) { return norm(s).replace(/[¿?¡!.,;:…"«»“”\/]/g, " ").replace(/\s+/g, " ").trim(); }
/* Accepted Spanish answers: "el primo / la prima" → both; "(el) correo" → "el correo" (the bare word is handled by the article rule) */
function wcEs(s, en) {
  const t = s.replace(/\((el|la|los|las)(?: \/ (?:el|la|los|las))?\)/g, "$1").replace(/\/s\b/g, "").replace(/[()]/g, "");
  return [...t.split(en && en.includes(",") ? /\s+\/\s+/ : /\s+\/\s+|,\s*/), t].map(wcCleanEs).filter(Boolean);
}
function wcCleanEn(s) {
  return norm(s).replace(/\([^)]*\)/g, " ").replace(/[.,;:!?¿¡"“”…]/g, " ").replace(/’/g, "'").replace(/\s+/g, " ").trim()
    .replace(/^(to|the|a|an) /, "").replace(/our\b/g, "or").replace(/is(e|ed|es|ing)\b/g, "iz$1").replace(/tre\b/g, "ter");
}
function wcEn(card) {
  const parts = card.en.replace(/\([^)]*\)/g, " ").replace(/\/s/g, "").split(card.es.includes(",") ? /[\/;]/ : /[\/;,]/);
  return [card.en, ...parts].map(wcCleanEn).filter(Boolean);
}
function wcCheck(card, typed) {
  if (card.dir === "es") { /* Spanish shown → English typed */
    const t = wcCleanEn(typed);
    return wcEn(card).includes(t) ? { r: "ok" } : { r: "no" };
  }
  const t = wcCleanEs(typed), alts = wcEs(card.es, card.en);
  if (alts.includes(t)) return { r: "ok" };
  const acc = alts.find((a) => stripAcc(a) === stripAcc(t));
  if (acc) return { r: "ok", n: `Watch the accent: ${acc}.` };
  const bare = (x) => x.replace(WC_ART, "");
  if (WC_ART.test(t) && alts.includes(bare(t))) return { r: "ok" };
  const accBare = WC_ART.test(t) && alts.find((a) => stripAcc(a) === stripAcc(bare(t)));
  if (accBare) return { r: "ok", n: `Watch the accent: ${accBare}.` };
  const art = alts.find((a) => WC_ART.test(a) && bare(a) === bare(t)) || alts.find((a) => WC_ART.test(a) && stripAcc(bare(a)) === stripAcc(bare(t)));
  if (art) return WC_ART.test(t) ? { r: "no", n: `Check the article: ${art}.` } : { r: "ok", n: `Learn it with its article: ${art}.` };
  return { r: "no" };
}

/* ---------- rendering ---------- */
function wordCards(u) {
  return `<section class="card wc" id="wc" data-u="${u.id}">${wcInner(u)}</section>`;
}
function wcInner(u) {
  if (!WC || WC.uid !== u.id) return wcStart(u);
  if (WC.i >= WC.deck.length) return wcEnd(u);
  const c = WC.deck[WC.i], showEs = c.dir === "es", canSay = "speechSynthesis" in window;
  const prompt = showEs
    ? `<div class="wc-word"><span class="${wordKind(c.full || c.es)}">${es(c.es)}</span>${canSay ? ` <button class="say" data-say="${escH(c.es.replace(/"/g, ""))}" aria-label="Listen">🔊</button>` : ""}</div>`
    : `<div class="wc-word wc-eng">${escH(c.en)}</div>`;
  const last = WC.last;
  const fb = last ? `<div class="fb ${last.r}" aria-live="polite">${last.r === "ok" ? "Correct." : "Not quite."} ${es(c.full || c.es)} = ${escH(c.en)}${last.n ? ` <span class="muted">${escH(last.n)}</span>` : ""}</div>` : `<div class="fb" aria-live="polite"></div>`;
  const btns = last
    ? `<button type="button" class="btn" data-wc="next">${WC.i + 1 === WC.deck.length ? "See my score" : "Next card"}</button>${last.r === "no" ? `<button type="button" class="btn ghost" data-wc="mine">I was right</button>` : ""}`
    : `<button type="button" class="btn" data-wc="check">Check</button><button type="button" class="btn ghost" data-wc="skip">I don't know</button>`;
  return `<div class="wc-top"><span class="qn">Card ${WC.i + 1} of ${WC.deck.length}</span><span class="pill ${WC.right ? "ok" : ""}">${WC.right} right</span>
      <button type="button" class="wc-link" data-wc="quit">Stop</button></div>
    <div class="wc-bar"><span style="width:${(WC.i / WC.deck.length) * 100}%"></span></div>
    <p class="muted wc-ask">${showEs ? "What does it mean? Type the English." : "How do you say it in Spanish? Type the Spanish word."}</p>
    ${prompt}
    <div class="wc-row"><input id="wcIn" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Your answer"
      class="${last ? last.r : ""}" ${last ? `readonly value="${escH(last.typed)}"` : ""}>${btns}</div>${fb}`;
}
function wcStart(u) {
  const sets = wcSets(u);
  if (!sets.some((s) => s.k === WC_PREF.set && s.n)) WC_PREF.set = "all";
  const chip = (group, k, label, on, dis) => `<button type="button" class="wc-chip ${on ? "on" : ""}" data-wc="${group}" data-k="${k}" ${dis ? "disabled" : ""} aria-pressed="${on}">${label}</button>`;
  const cur = sets.find((s) => s.k === WC_PREF.set);
  return `<h3>Word cards</h3>
    <p class="muted">Test yourself on the new words of this unidad. You see a word in Spanish or in English and type the other side. Missing accents and articles are accepted, with a note.</p>
    <div class="wc-opts"><span class="wc-lab">Words</span>${sets.map((s) => chip("set", s.k, `${s.label} <small>${s.n}</small>`, s.k === WC_PREF.set, !s.n)).join("")}</div>
    <div class="wc-opts"><span class="wc-lab">Show me</span>${[["mix", "Both, mixed"], ["es", "Spanish → I type English"], ["en", "English → I type Spanish"]].map(([k, l]) => chip("dir", k, l, k === WC_PREF.dir)).join("")}</div>
    <div><button type="button" class="btn" data-wc="start">Start · ${cur.n} cards</button></div>`;
}
function wcEnd(u) {
  const n = WC.deck.length, pct = n ? Math.round((WC.right / n) * 100) : 0;
  const miss = WC.missed;
  return `<h3>Word cards · done</h3>
    <div class="wc-score"><span class="pill ${pct >= 80 ? "ok" : pct >= 50 ? "mid" : "no"}">${WC.right} / ${n}</span> <span class="muted">${pct >= 90 ? "Excellent!" : pct >= 70 ? "Very good." : pct >= 50 ? "Not bad. Practise the missed words." : "Keep going: practise the missed words."}</span></div>
    ${miss.length ? `<p><b>Words to review (${miss.length})</b></p><ul class="wc-miss">${miss.map((c) => `<li>${es(c.full || c.es)} <span class="muted">= ${escH(c.en)}</span></li>`).join("")}</ul>` : `<p>You knew every word. ¡Muy bien!</p>`}
    <div class="wc-row">${miss.length ? `<button type="button" class="btn" data-wc="missed">Practise the ${miss.length} missed ${miss.length === 1 ? "word" : "words"}</button>` : ""}<button type="button" class="btn ${miss.length ? "ghost" : ""}" data-wc="again">New round</button></div>`;
}

/* ---------- actions ---------- */
function wcDeal(u, list) {
  const dir = () => WC_PREF.dir === "mix" ? (Math.random() < 0.5 ? "es" : "en") : WC_PREF.dir;
  WC = { uid: u.id, deck: shuffled(list).map((w) => ({ es: w.es, en: w.en, full: w.full, dir: dir() })), i: 0, right: 0, missed: [], last: null };
}
function wcRefresh(focus) {
  const box = document.getElementById("wc"); if (!box) return;
  box.innerHTML = wcInner(byId(+box.dataset.u));
  if (focus) { const inp = document.getElementById("wcIn"); if (inp) inp.focus({ preventScroll: true }); }
}
function wcDo(act, el) {
  const box = document.getElementById("wc"); if (!box) return;
  const u = byId(+box.dataset.u);
  if (act === "set" || act === "dir") { WC_PREF[act] = el.dataset.k; return wcRefresh(); }
  if (act === "start" || act === "again") { if (act === "again") WC = null; const w = wcWords(u, WC_PREF.set); if (!w.length) return; wcDeal(u, w); return wcRefresh(true); }
  if (act === "missed") { wcDeal(u, WC.missed); return wcRefresh(true); }
  if (act === "quit") { WC = null; return wcRefresh(); }
  if (!WC) return;
  const c = WC.deck[WC.i];
  if (act === "check" || act === "skip") {
    if (WC.last) return;
    const typed = act === "skip" ? "" : (document.getElementById("wcIn") || {}).value || "";
    if (act === "check" && !typed.trim()) return;
    const res = act === "skip" ? { r: "no" } : wcCheck(c, typed);
    WC.last = Object.assign({ typed }, res);
    if (res.r === "ok") WC.right++; else WC.missed.push(c);
    return wcRefresh(true);
  }
  if (act === "mine" && WC.last && WC.last.r === "no") { WC.last = Object.assign({}, WC.last, { r: "ok", n: "Counted as right." }); WC.right++; WC.missed = WC.missed.filter((x) => x !== c); return wcRefresh(true); }
  if (act === "next" && WC.last) { WC.i++; WC.last = null; return wcRefresh(true); }
}
document.addEventListener("click", (e) => { const b = e.target.closest("[data-wc]"); if (b && b.closest("#wc")) wcDo(b.dataset.wc, b); });
document.addEventListener("keydown", (e) => {
  if (e.key !== "Enter" || e.target.id !== "wcIn") return;
  e.preventDefault(); wcDo(WC && WC.last ? "next" : "check");
});
