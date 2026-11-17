/* Listening and Speaking tabs for units 1 to 5.
   Loaded before app.js. It uses globals from app.js (state, UNITS, TABS, progress, save, $, es, norm, stripAcc) at call time. */

const SKILLS = {
  1: {
    listen: [
      { mode: "choose", es: "Me llamo Ana y soy profesora.", en: "My name is Ana and I am a teacher." },
      { mode: "choose", es: "Ellos son estudiantes de México.", en: "They are students from Mexico." },
      { mode: "choose", es: "¿Cuántos años tienes?", en: "How old are you?" },
      { mode: "write", es: "Tengo veinticinco años.", en: "I am 25 years old." },
      { mode: "write", es: "Soy vietnamita y vivo en Hanói.", en: "I am Vietnamese and I live in Hanoi." },
      { mode: "write", es: "¿De dónde eres?", en: "Where are you from?" }
    ],
    talk: [
      { q: "¿Cómo te llamas?", qen: "What is your name?", model: "Me llamo Eddie.", men: "My name is Eddie." },
      { q: "¿De dónde eres?", qen: "Where are you from?", model: "Soy de Vietnam. Soy vietnamita.", men: "I am from Vietnam. I am Vietnamese." },
      { q: "¿A qué te dedicas?", qen: "What do you do for work?", model: "Soy guía turístico.", men: "I am a tour guide." }
    ]
  },
  2: {
    listen: [
      { mode: "choose", es: "Quiero aprender español para viajar.", en: "I want to learn Spanish to travel." },
      { mode: "choose", es: "Estudio español porque me gusta la música latina.", en: "I study Spanish because I like Latin music." },
      { mode: "choose", es: "¿Quieres ver una película?", en: "Do you want to watch a film?" },
      { mode: "write", es: "Hablo un poco de español.", en: "I speak a little Spanish." },
      { mode: "write", es: "Mis amigos viven en Madrid.", en: "My friends live in Madrid." },
      { mode: "write", es: "Ella estudia inglés y francés.", en: "She studies English and French." }
    ],
    talk: [
      { q: "¿Por qué estudias español?", qen: "Why do you study Spanish?", model: "Estudio español porque me gusta la cultura hispana.", men: "I study Spanish because I like Hispanic culture." },
      { q: "¿Qué quieres hacer este fin de semana?", qen: "What do you want to do this weekend?", model: "Quiero ver una película y escuchar música.", men: "I want to watch a film and listen to music." },
      { q: "¿Hablas inglés?", qen: "Do you speak English?", model: "Sí, hablo inglés y vietnamita.", men: "Yes, I speak English and Vietnamese." }
    ]
  },
  3: {
    listen: [
      { mode: "choose", es: "Hay muchas playas en el sur.", en: "There are many beaches in the south." },
      { mode: "choose", es: "La capital está en el centro.", en: "The capital is in the centre." },
      { mode: "choose", es: "¿Qué tiempo hace en invierno?", en: "What is the weather like in winter?" },
      { mode: "write", es: "Hace mucho calor en verano.", en: "It is very hot in summer." },
      { mode: "write", es: "Santiago es la capital de Chile.", en: "Santiago is the capital of Chile." },
      { mode: "write", es: "Llueve mucho en el norte.", en: "It rains a lot in the north." }
    ],
    talk: [
      { q: "¿Dónde está tu ciudad?", qen: "Where is your city?", model: "Mi ciudad está en el norte de Vietnam.", men: "My city is in the north of Vietnam." },
      { q: "¿Qué hay en tu ciudad?", qen: "What is there in your city?", model: "Hay un lago, muchos restaurantes y mucha gente.", men: "There is a lake, many restaurants and many people." },
      { q: "¿Qué tiempo hace en verano?", qen: "What is the weather like in summer?", model: "En verano hace mucho calor y llueve mucho.", men: "In summer it is very hot and it rains a lot." }
    ]
  },
  4: {
    listen: [
      { mode: "choose", es: "¿Cuánto cuesta esta camiseta?", en: "How much is this T-shirt?" },
      { mode: "choose", es: "Prefiero los zapatos negros.", en: "I prefer the black shoes." },
      { mode: "choose", es: "Esta chaqueta es muy cara.", en: "This jacket is very expensive." },
      { mode: "write", es: "Quiero una falda roja.", en: "I want a red skirt." },
      { mode: "write", es: "Cuestan doscientos euros.", en: "They cost two hundred euros." },
      { mode: "write", es: "Me llevo estos pantalones.", en: "I'll take these trousers." }
    ],
    talk: [
      { q: "¿Qué ropa llevas hoy?", qen: "What clothes are you wearing today?", model: "Llevo una camiseta blanca y unos pantalones negros.", men: "I am wearing a white T-shirt and black trousers." },
      { q: "¿Cuál prefieres, el rojo o el azul?", qen: "Which do you prefer, the red one or the blue one?", model: "Prefiero el azul.", men: "I prefer the blue one." },
      { q: "¿Cuánto cuesta tu bolso?", qen: "How much is your bag?", model: "Cuesta cincuenta euros.", men: "It costs fifty euros." }
    ]
  },
  5: {
    listen: [
      { mode: "choose", es: "Me encanta bailar con mis amigos.", en: "I love dancing with my friends." },
      { mode: "choose", es: "A mi hermana le gustan las películas.", en: "My sister likes films." },
      { mode: "choose", es: "Tengo dos primos y una tía.", en: "I have two cousins and an aunt." },
      { mode: "write", es: "Mi madre es muy simpática.", en: "My mother is very nice." },
      { mode: "write", es: "Mi amigo es alto y lleva gafas.", en: "My friend is tall and wears glasses." },
      { mode: "write", es: "No me gusta el ruido.", en: "I don't like noise." }
    ],
    talk: [
      { q: "¿Tienes hermanos?", qen: "Do you have brothers or sisters?", model: "Sí, tengo un hermano y una hermana.", men: "Yes, I have a brother and a sister." },
      { q: "¿Cómo es tu mejor amigo?", qen: "What is your best friend like?", model: "Es alto, simpático y muy divertido.", men: "He is tall, friendly and very fun." },
      { q: "¿Qué música te gusta?", qen: "What music do you like?", model: "Me gusta mucho la música pop.", men: "I like pop music a lot." }
    ]
  }
};

const EXTRA_TABS = [["listen", "Listening"], ["speak", "Speaking"]];
function tabsFor(u) {
  if (u.final) return [["exam", "Final exam"]];
  if (!SKILLS[u.id]) return TABS;
  const t = TABS.slice();
  t.splice(3, 0, ...EXTRA_TABS); /* before Practice */
  return t;
}

/* ---------- text helpers ---------- */
function cleanSent(s) { return s.toLowerCase().replace(/[¿?¡!.,;:"“”()]/g, " ").replace(/\s+/g, " ").trim(); }
function plainSent(s) { return stripAcc(cleanSent(s)); }
function words(s) { return plainSent(s).split(" ").filter(Boolean); }
function scoreWords(target, said) {
  const a = words(target), b = words(said), m = a.length, n = b.length;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) for (let j = 1; j <= n; j++) dp[i][j] = a[i - 1] === b[j - 1] ? dp[i - 1][j - 1] + 1 : Math.max(dp[i - 1][j], dp[i][j - 1]);
  const hit = Array(m).fill(false);
  let i = m, j = n;
  while (i > 0 && j > 0) {
    if (a[i - 1] === b[j - 1]) { hit[i - 1] = true; i--; j--; }
    else if (dp[i - 1][j] >= dp[i][j - 1]) i--; else j--;
  }
  return { score: m ? Math.round((100 * dp[m][n]) / m) : 0, hit, targetWords: a };
}

/* ---------- speech output (the Spanish voice) ---------- */
let esVoice = null;
function pickVoice() {
  if (!("speechSynthesis" in window)) return;
  const vs = speechSynthesis.getVoices();
  esVoice = null;
  for (const p of ["es-ES", "es-MX", "es-US", "es-AR", "es-CO"]) {
    esVoice = vs.find((v) => v.lang.replace("_", "-") === p);
    if (esVoice) break;
  }
  if (!esVoice) esVoice = vs.find((v) => /^es/i.test(v.lang)) || null;
}
if ("speechSynthesis" in window) { pickVoice(); speechSynthesis.addEventListener("voiceschanged", pickVoice); }
function speakEs(text, rate) {
  if (!("speechSynthesis" in window)) return false;
  try {
    speechSynthesis.cancel();
    const s = new SpeechSynthesisUtterance(text);
    s.lang = esVoice ? esVoice.lang : "es-ES";
    if (esVoice) s.voice = esVoice;
    s.rate = rate || 0.9;
    speechSynthesis.speak(s);
    return true;
  } catch (e) { return false; }
}
function voiceNote() {
  if (!("speechSynthesis" in window)) return `<p class="hint">This browser cannot play speech. Try Chrome, Edge or Safari.</p>`;
  return "";
}

/* ---------- Listening ---------- */
function lprog(u) { return progress["l" + u.id] || (progress["l" + u.id] = {}); }
function lscore(u) { return Object.values(lprog(u)).filter((x) => x.r === "ok").length; }
function listenOpts(items, i) {
  const n = items.length, correct = items[i].en, d = [];
  for (let k = 1; d.length < 3 && k < n; k++) {
    const e = items[(i + k) % n].en;
    if (e !== correct && !d.includes(e)) d.push(e);
  }
  d.splice(Math.min(i % 4, d.length), 0, correct);
  return d;
}
function renderListen(u) {
  const items = SKILLS[u.id].listen, grouped = claseGroups(u.id, "listen", items.length);
  const head = `<div class="card summary"><div><h3>Listening</h3><p id="lscore"></p></div><button class="btn ghost" id="lreset">Start again</button></div>
    ${voiceNote()}<p class="hint">Press <b>Play</b> and listen. Use <b>Slow</b> if it is too fast. You can play each sentence as many times as you like. ${grouped ? "Some sentences ask you to choose the meaning, others to type what you hear." : `Sentences 1 to ${items.filter((x) => x.mode === "choose").length}: choose the meaning. The rest: type what you hear.`}</p>`;
  const pos = [];
  (grouped ? grouped.flatMap((g) => g.c ? g.idx : []).concat(grouped.flatMap((g) => g.c ? [] : g.idx)) : items.map((_, i) => i)).forEach((i, k) => { pos[i] = k + 1; });
  const pieces = items.map((it, i) => {
    const audio = `<div class="audio-row"><button class="btn lplay">Play</button><button class="btn ghost lplay" data-slow="1">Slow</button></div>`;
    const label = `<div class="qn">Sentence ${pos[i]} of ${items.length}</div>`;
    if (it.mode === "choose") {
      const opts = listenOpts(items, i);
      return `<section class="card lq" data-i="${i}">${label}<div class="qt">Listen and choose the meaning.</div>${audio}
        <div class="opts">${opts.map((o, k) => `<button class="lopt" data-k="${k}">${o}</button>`).join("")}</div>
        <div class="fb" aria-live="polite"></div></section>`;
    }
    return `<section class="card lq" data-i="${i}">${label}<div class="qt">Listen and type the sentence in Spanish.</div>${audio}
      <span class="lfill"><input type="text" id="lf${i}" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="What you heard"><button class="btn ghost lchk">Check</button></span>
      <div class="fb" aria-live="polite"></div></section>`;
  });
  return head + (byClase(u.id, "listen", pieces) ?? pieces.join(""));
}
function applyListen(u) {
  const items = SKILLS[u.id].listen, p = lprog(u);
  items.forEach((it, i) => {
    const a = p[i]; if (!a) return;
    const card = $(`.lq[data-i="${i}"]`); if (!card) return;
    if (it.mode === "choose") {
      const opts = listenOpts(items, i);
      card.querySelectorAll(".lopt").forEach((b, k) => { b.disabled = true; if (opts[k] === it.en) b.classList.add("ok"); else if (opts[k] === a.c) b.classList.add("no"); });
    } else {
      const inp = $("input", card); inp.value = a.c; inp.disabled = true; inp.classList.add(a.r); $(".lchk", card).disabled = true;
    }
    const fb = $(".fb", card);
    fb.className = "fb " + a.r;
    fb.innerHTML = (a.r === "ok" ? "Correct. " : "Not quite. ") + `The sentence is: ${es(it.es)}<br>${it.en}` + (a.n ? " " + a.n : "");
  });
  const line = $("#lscore"); if (line) line.textContent = `${lscore(u)} of ${items.length} correct`;
}
function answerListen(u, i, rec) { lprog(u)[i] = rec; save(); applyListen(u); }
function checkListenFill(u, card) {
  const i = +card.dataset.i, it = SKILLS[u.id].listen[i], raw = $("input", card).value.trim();
  if (!raw) return;
  const exact = cleanSent(raw) === cleanSent(it.es);
  const loose = !exact && plainSent(raw) === plainSent(it.es);
  answerListen(u, i, { r: exact || loose ? "ok" : "no", c: raw, n: loose ? "Watch the accents." : "" });
}

/* ---------- Speaking ---------- */
const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
let activeRec = null, mediaRec = null;
function micNote() {
  return SR
    ? `<p class="hint">Tap <b>Record</b>, allow the microphone, then say the sentence in Spanish. Chrome and Edge send your voice to a speech service to turn it into text. Nothing is saved by this site.</p>`
    : `<p class="hint">This browser cannot check your speech. You can still record yourself and play it back to compare with the model voice. Chrome or Edge will also give you a score.</p>`;
}
function renderSpeak(u) {
  const sk = SKILLS[u.id];
  const enc = (t) => encodeURIComponent(t);
  const repP = u.phrases.map((p) => `<section class="card sc" data-target="${enc(p[0])}">
    <div class="vrow"><div class="l">${es(p[0])}</div><span class="en">${p[1]}</span></div>
    <div class="audio-row"><button class="btn ghost splay" data-t="${enc(p[0])}">Play</button><button class="btn ghost splay" data-t="${enc(p[0])}" data-slow="1">Slow</button><button class="btn srec">Record</button></div>
    <div class="sres" aria-live="polite"></div></section>`);
  const rep = byClase(u.id, "phrases", repP, null, true) ?? repP.join("");
  const talkP = sk.talk.map((q) => `<section class="card sc">
    <div class="qt">${es(q.q)}</div><p class="muted">${q.qen}</p>
    <div class="audio-row"><button class="btn ghost splay" data-t="${enc(q.q)}">Hear the question</button><button class="btn srec">Record my answer</button><button class="btn ghost smodel">Show a model answer</button></div>
    <div class="sres" aria-live="polite"></div>
    <div class="model" hidden><p>${es(q.model)}</p><p class="muted">${q.men}</p><div class="audio-row"><button class="btn ghost splay" data-t="${enc(q.model)}">Play the model</button></div></div></section>`);
  const talk = byClase(u.id, "talk", talkP) ?? talkP.join("");
  return `${voiceNote()}${micNote()}
    <h3 class="sec">1. Repeat after me</h3>${rep}
    <h3 class="sec">2. Answer out loud</h3><p class="muted">Listen to the question, answer in Spanish, then open the model answer to compare.</p>${talk}`;
}
function errMsg(code) {
  if (code === "not-allowed" || code === "service-not-allowed") return "The microphone is blocked. Allow microphone access for this site in your browser settings, then try again.";
  if (code === "no-speech") return "I did not hear anything. Move closer to the microphone and try again.";
  if (code === "audio-capture") return "No microphone was found.";
  if (code === "network") return "Speech recognition needs an internet connection.";
  if (code === "aborted") return "";
  return "Speech recognition did not work (" + code + "). Try again.";
}
function showSaid(out, alts, target) {
  if (!alts.length || !alts[0].trim()) { out.textContent = "I did not catch that. Try again."; return; }
  if (!target) { out.innerHTML = `<p>I heard: <b>${alts[0]}</b></p><p class="muted">Compare it with the model answer.</p>`; return; }
  let best = null, bestAlt = alts[0];
  for (const a of alts) { const r = scoreWords(target, a); if (!best || r.score > best.score) { best = r; bestAlt = a; } }
  const verdict = best.score >= 85 ? "Great" : best.score >= 60 ? "Close" : "Try again";
  const cls = best.score >= 85 ? "ok" : best.score >= 60 ? "mid" : "no";
  out.innerHTML = `<p><span class="pill ${cls}">${verdict}: ${best.score}%</span></p>
    <p>${best.targetWords.map((w, i) => `<span class="${best.hit[i] ? "hit" : "miss"}">${w}</span>`).join(" ")}</p>
    <p class="muted">I heard: ${bestAlt}</p>`;
}
function stopAll() {
  try { if (activeRec) activeRec.stop(); } catch (e) {}
  try { if (mediaRec && mediaRec.state !== "inactive") mediaRec.stop(); } catch (e) {}
}
function startSpeak(card) {
  const out = $(".sres", card), btn = $(".srec", card);
  const idle = btn.dataset.label || (btn.dataset.label = btn.textContent);
  if (activeRec || (mediaRec && mediaRec.state === "recording")) { stopAll(); return; }
  if ("speechSynthesis" in window) speechSynthesis.cancel();
  const target = card.dataset.target ? decodeURIComponent(card.dataset.target) : null;
  if (!SR) return startRecordOnly(card, btn, out, idle);
  const r = new SR();
  r.lang = "es-ES"; r.interimResults = false; r.maxAlternatives = 3; r.continuous = false;
  activeRec = r; btn.textContent = "Listening... tap to stop"; out.textContent = "";
  r.onresult = (e) => showSaid(out, [...e.results[0]].map((a) => a.transcript), target);
  r.onerror = (e) => { out.textContent = errMsg(e.error); };
  r.onend = () => { activeRec = null; btn.textContent = idle; };
  try { r.start(); } catch (err) { activeRec = null; btn.textContent = idle; out.textContent = "Could not start the microphone. Try again."; }
}
async function startRecordOnly(card, btn, out, idle) {
  if (!navigator.mediaDevices || !window.MediaRecorder) { out.textContent = "This browser cannot record audio. Try Chrome, Edge or Safari."; return; }
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const chunks = [];
    mediaRec = new MediaRecorder(stream);
    mediaRec.ondataavailable = (e) => chunks.push(e.data);
    mediaRec.onstop = () => {
      stream.getTracks().forEach((t) => t.stop());
      const a = document.createElement("audio");
      a.controls = true; a.src = URL.createObjectURL(new Blob(chunks, { type: mediaRec.mimeType || "audio/webm" }));
      out.innerHTML = "<p>Listen to yourself, then compare with the Play button.</p>"; out.appendChild(a);
      btn.textContent = idle;
    };
    mediaRec.start(); btn.textContent = "Stop recording"; out.textContent = "";
  } catch (e) { out.textContent = "The microphone is blocked or missing. Allow microphone access and try again."; }
}

/* ---------- events ---------- */
document.addEventListener("click", (e) => {
  const t = e.target, u = byId(state.unit);
  const lp = t.closest(".lplay");
  if (lp) { const i = +lp.closest(".lq").dataset.i; if (!speakEs(SKILLS[u.id].listen[i].es, lp.dataset.slow ? 0.55 : 0.9)) lp.textContent = "No speech here"; return; }
  const lo = t.closest(".lopt");
  if (lo) {
    const card = lo.closest(".lq"), i = +card.dataset.i, items = SKILLS[u.id].listen, opts = listenOpts(items, i), pick = opts[+lo.dataset.k];
    return answerListen(u, i, { r: pick === items[i].en ? "ok" : "no", c: pick });
  }
  const lc = t.closest(".lchk"); if (lc) return checkListenFill(u, lc.closest(".lq"));
  if (t.closest("#lreset")) { delete progress["l" + u.id]; save(); return render(); }
  const sp = t.closest(".splay");
  if (sp) { speakEs(decodeURIComponent(sp.dataset.t), sp.dataset.slow ? 0.55 : 0.9); return; }
  const sr = t.closest(".srec"); if (sr) return startSpeak(sr.closest(".sc"));
  const sm = t.closest(".smodel");
  if (sm) { const m = $(".model", sm.closest(".sc")); m.hidden = !m.hidden; sm.textContent = m.hidden ? "Show a model answer" : "Hide the model answer"; }
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && e.target.matches(".lfill input")) { e.preventDefault(); checkListenFill(byId(state.unit), e.target.closest(".lq")); }
});
window.addEventListener("hashchange", () => { stopAll(); if ("speechSynthesis" in window) speechSynthesis.cancel(); });
