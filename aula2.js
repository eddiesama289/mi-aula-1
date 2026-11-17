/* Aula Plus 2 (A2). Each unidad is described once with A2({...}) in aula2-u1-5.js / aula2-u6-10.js and this helper
   spreads it into the same stores Aula Plus 1 uses: A2_UNITS (merged into UNITS by app.js), SKILLS, PRACTICE, EXAMS,
   LESSONS and CLASE_MAP. Unit ids are 100 + unit number, so nothing collides with Aula Plus 1 (ids 0–9).
   Every unidad is taught in 4 classes: 3 new-material lessons + 1 revision lesson.
   Tag each grammar card, vocab group, phrase, listening sentence and speaking question with the class that teaches it
   (c: 1–3, or 0 for extra book material); tag each practice set with its lesson (l: 1–4).
   Loaded after exams.js and before app.js. All texts and exercises are original. */
const A2_UNITS = [];
function A2(d) {
  const id = 100 + d.n;
  A2_UNITS.push({ id, book: 2, n: d.n, es: d.es, en: d.en, goals: d.goals,
    grammar: d.grammar.map((g) => ({ t: g.t, body: g.body })), vocab: d.vocab.map((v) => ({ g: v.g, items: v.items })),
    phrases: d.phrases.map((p) => [p[0], p[1]]), ex: d.ex || [] });
  SKILLS[id] = { listen: d.listen, talk: d.talk };
  LESSONS[id] = { first: (d.n - 1) * 4 + 1, book: 2, titles: [...d.lessons, "Repaso"] };
  CLASE_MAP[id] = { grammar: d.grammar.map((g) => g.c), vocab: d.vocab.map((v) => v.c), phrases: d.phrases.map((p) => p[2]),
    listen: d.listen.map((x) => x.c), talk: d.talk.map((x) => x.c) };
  PRACTICE[id] = d.practice;
  EXAMS[id] = d.exam;
}
