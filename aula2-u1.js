/* Aula Plus 2 · Unidad 1 «El español y tú». Original material. Format: see aula2.js. */
A2({
  n: 1, es: "El español y tú", en: "Spanish and you",
  lessons: ["Hábitos y el presente", "¿Desde cuándo?", "Sentimientos y consejos"],
  goals: ["Talk about your habits and how you learn", "Review regular and irregular verbs in the present", "Say how long you have been doing something: desde, desde hace, hace… que", "Talk about difficulties and feelings: me cuesta, me siento, me da vergüenza", "Give advice for learning a language"],
  grammar: [
    { c: 1, t: "The present tense: regular verbs (review)", body: `
      <div class="tbl-wrap"><table><tr><th></th><th>hablar</th><th>aprender</th><th>escribir</th></tr>
      <tr><td>yo</td><td>[[hablo]]</td><td>[[aprendo]]</td><td>[[escribo]]</td></tr>
      <tr><td>tú</td><td>[[hablas]]</td><td>[[aprendes]]</td><td>[[escribes]]</td></tr>
      <tr><td>él / ella / usted</td><td>[[habla]]</td><td>[[aprende]]</td><td>[[escribe]]</td></tr>
      <tr><td>nosotros/as</td><td>[[hablamos]]</td><td>[[aprendemos]]</td><td>[[escribimos]]</td></tr>
      <tr><td>vosotros/as</td><td>[[habláis]]</td><td>[[aprendéis]]</td><td>[[escribís]]</td></tr>
      <tr><td>ellos / ellas / ustedes</td><td>[[hablan]]</td><td>[[aprenden]]</td><td>[[escriben]]</td></tr></table></div>
      <p class="tip">-er and -ir verbs are the same except nosotros and vosotros: [[aprendemos / escribimos]], [[aprendéis / escribís]].</p>` },
    { c: 1, t: "Irregular verbs you use every day", body: `
      <div class="tbl-wrap"><table><tr><th>Type</th><th>Examples</th></tr>
      <tr><td>e → ie</td><td>[[querer → quiero]], [[entender → entiendo]], [[empezar → empiezo]], [[preferir → prefiero]]</td></tr>
      <tr><td>o → ue</td><td>[[poder → puedo]], [[recordar → recuerdo]], [[volver → vuelvo]]</td></tr>
      <tr><td>e → i</td><td>[[pedir → pido]], [[repetir → repito]]</td></tr>
      <tr><td>only yo</td><td>[[hacer → hago]], [[salir → salgo]], [[saber → sé]], [[conocer → conozco]], [[traducir → traduzco]]</td></tr>
      <tr><td>yo + vowel change</td><td>[[tener → tengo, tienes]], [[decir → digo, dices]], [[venir → vengo, vienes]]</td></tr>
      <tr><td>fully irregular</td><td>[[ser → soy, eres, es]], [[ir → voy, vas, va]], [[estar → estoy, estás, está]]</td></tr></table></div>
      <p class="tip">The vowel changes never happen in nosotros and vosotros: [[queremos]], [[podéis]], [[pedimos]].</p>` },
    { c: 1, t: "Talking about habits", body: `
      <p>[[siempre]] → [[normalmente]] → [[a menudo]] (often) → [[a veces]] → [[de vez en cuando]] (now and then) → [[casi nunca]] → [[nunca]]</p>
      <p>[[una vez a la semana]] · [[dos veces al mes]] · [[todos los días]] · [[cada día]]</p>
      <p>[[Nunca leo en español.]] = [[No leo nunca en español.]] With [[no]] in front of the verb, [[nunca]] goes after it.</p>` },
    { c: 2, t: "How long? desde, desde hace, hace… que", body: `
      <div class="tbl-wrap"><table><tr><th>Structure</th><th>Use</th><th>Example</th></tr>
      <tr><td>[[desde]] + a moment</td><td>since a date or event</td><td>[[Estudio español desde 2023.]] · [[desde enero]] · [[desde el verano]]</td></tr>
      <tr><td>[[desde hace]] + a period</td><td>for (still true now)</td><td>[[Estudio español desde hace dos años.]]</td></tr>
      <tr><td>[[hace]] + period + [[que]] + present</td><td>the same idea, period first</td><td>[[Hace dos años que estudio español.]]</td></tr></table></div>
      <p>Questions: [[¿Desde cuándo estudias español?]] · [[¿Cuánto tiempo hace que vives aquí?]]</p>
      <p class="tip">English uses "I have been studying"; Spanish uses the present: [[Vivo aquí desde hace un año]], not "he vivido".</p>` },
    { c: 3, t: "costar: when something is hard for you", body: `
      <p>[[costar]] works like [[gustar]]: the person goes in front with [[me, te, le, nos, os, les]].</p>
      <p>[[Me cuesta]] + infinitive: [[Me cuesta entender a los nativos.]]</p>
      <p>[[Me cuesta]] + singular noun · [[Me cuestan]] + plural noun: [[Me cuesta la pronunciación.]] [[Me cuestan los verbos irregulares.]]</p>
      <p>The opposite: [[Me resulta fácil]] + infinitive: [[Me resulta fácil leer.]]</p>` },
    { c: 3, t: "Feelings: sentirse, dar vergüenza, dar miedo", body: `
      <p>[[sentirse]] (e → ie) + adjective: [[me siento]], [[te sientes]], [[se siente]]…</p>
      <p>[[Cuando hablo en clase me siento ridículo.]] · [[Mi hermana se siente segura.]] The adjective agrees: [[ridículo / ridícula]].</p>
      <p>[[Me da vergüenza]] + infinitive or singular noun · [[me dan miedo]] + plural noun: [[Me da vergüenza hablar por teléfono.]] [[Me dan miedo los exámenes orales.]]</p>
      <p>[[ponerse nervioso/a]] = to get nervous: [[Me pongo nervioso en los exámenes.]]</p>` },
    { c: 3, t: "Giving advice", body: `
      <ul><li>[[Te recomiendo]] + infinitive: [[Te recomiendo ver series en español.]]</li>
      <li>[[Es bueno / útil / importante]] + infinitive: [[Es útil escribir un diario.]]</li>
      <li>[[Puedes]] + infinitive: [[Puedes hacer un intercambio.]]</li>
      <li>[[¿Por qué no]] + present? [[¿Por qué no escuchas podcasts?]]</li></ul>` }
  ],
  vocab: [
    { c: 1, g: "Ways to learn a language", items: [["leer en voz alta","to read aloud"],["ver series con subtítulos","to watch series with subtitles"],["escuchar pódcasts","to listen to podcasts"],["hacer un intercambio","to do a language exchange"],["buscar palabras en el diccionario","to look up words"],["tomar apuntes","to take notes"],["repasar","to revise"],["memorizar","to memorise"],["hacer los deberes","to do homework"],["escribir un diario","to keep a diary"],["cantar canciones","to sing songs"]] },
    { c: 1, g: "How often", items: [["a menudo","often"],["de vez en cuando","now and then"],["casi nunca","hardly ever"],["una vez a la semana","once a week"],["dos veces al mes","twice a month"],["cada día","every day"]] },
    { c: 2, g: "How long", items: [["desde","since"],["desde hace","for (until now)"],["¿desde cuándo?","since when?"],["¿cuánto tiempo hace que…?","how long have you…?"],["el principio","the beginning"],["todavía","still"]] },
    { c: 3, g: "Feelings", items: [["sentirse","to feel"],["seguro / segura","confident"],["inseguro / insegura","insecure"],["ridículo / ridícula","silly, ridiculous"],["frustrado / frustrada","frustrated"],["cómodo / cómoda","comfortable"],["motivado / motivada","motivated"],["la vergüenza","embarrassment"],["el miedo","fear"],["ponerse nervioso","to get nervous"],["la paciencia","patience"]] },
    { c: 3, g: "What is difficult", items: [["la pronunciación","pronunciation"],["la gramática","grammar"],["el vocabulario","vocabulary"],["la ortografía","spelling"],["los verbos irregulares","irregular verbs"],["entender a los nativos","to understand native speakers"],["equivocarse","to make a mistake"],["el error","mistake"]] }
  ],
  phrases: [
    ["Normalmente estudio español por la noche.", "I usually study Spanish at night.", 1],
    ["Veo series en español con subtítulos.", "I watch series in Spanish with subtitles.", 1],
    ["Una vez a la semana hago un intercambio.", "Once a week I do a language exchange.", 1],
    ["Estudio español desde hace dos años.", "I have been studying Spanish for two years.", 2],
    ["Hace seis meses que vivo en Madrid.", "I have been living in Madrid for six months.", 2],
    ["¿Desde cuándo trabajas aquí? — Desde enero.", "Since when have you worked here? — Since January.", 2],
    ["Me cuesta mucho entender a los nativos.", "It is very hard for me to understand native speakers.", 3],
    ["Me da vergüenza hablar en público.", "Speaking in public embarrasses me.", 3],
    ["Te recomiendo escuchar pódcasts en el metro.", "I recommend listening to podcasts on the metro.", 3]
  ],
  ex: [
    { type: "mc", q: "[[Yo no ___ bien el subjuntivo.]] (entender)", opts: ["entiendo", "entendo", "entiende", "entendemos"], a: 0, why: "e → ie: yo entiendo." },
    { type: "mc", q: "[[Vivo en Lima ___ tres años.]]", opts: ["desde", "desde hace", "hace", "por"], a: 1, why: "A period of time that continues now: desde hace." },
    { type: "mc", q: "[[A mí me ___ los verbos irregulares.]]", opts: ["cuesta", "cuestan", "cuesto", "cuestas"], a: 1, why: "Plural noun → cuestan." },
    { type: "fill", q: "[[Yo ___ la tele en español todos los días.]] (ver)", a: ["veo"], why: "ver, yo → veo." },
    { type: "fill", q: "[[___ dos años que estudio español.]]", a: ["hace"], why: "Hace + period + que + present." },
    { type: "fill", q: "[[Cuando hablo en clase me ___ ridícula.]] (sentirse)", a: ["siento"], why: "sentirse, yo → me siento." }
  ],
  listen: [
    { c: 1, mode: "choose", es: "Normalmente leo el periódico en español.", en: "I usually read the newspaper in Spanish." },
    { c: 2, mode: "choose", es: "Trabajo en esta empresa desde hace cinco años.", en: "I have worked at this company for five years." },
    { c: 3, mode: "choose", es: "Me cuesta mucho la pronunciación.", en: "Pronunciation is very hard for me." },
    { c: 1, mode: "write", es: "Una vez a la semana hago un intercambio.", en: "Once a week I do a language exchange." },
    { c: 2, mode: "write", es: "Vivo aquí desde enero.", en: "I have lived here since January." },
    { c: 3, mode: "write", es: "Me da vergüenza hablar por teléfono.", en: "Speaking on the phone embarrasses me." }
  ],
  talk: [
    { c: 1, q: "¿Qué haces para aprender español?", qen: "What do you do to learn Spanish?", model: "Veo series con subtítulos y una vez a la semana hago un intercambio.", men: "I watch series with subtitles and once a week I do a language exchange." },
    { c: 2, q: "¿Desde cuándo estudias español?", qen: "Since when have you been studying Spanish?", model: "Estudio español desde hace un año y medio.", men: "I have been studying Spanish for a year and a half." },
    { c: 3, q: "¿Qué te cuesta más del español?", qen: "What do you find hardest about Spanish?", model: "Me cuestan los verbos irregulares y me da vergüenza hablar por teléfono.", men: "Irregular verbs are hard for me and speaking on the phone embarrasses me." }
  ],
  practice: [
    /* Lesson 1 · Hábitos y el presente */
    { l: 1, type: "fill", t: "Regular and irregular presents", i: "Write the verb in the present.", items: [
      "Yo ___ (leer) mucho en español.|leo", "Mis compañeros ___ (hablar) muy rápido.|hablan", "¿Tú ___ (entender) las canciones?|entiendes", "Nosotros ___ (repetir) las palabras nuevas.|repetimos",
      "Yo ___ (hacer) los deberes por la noche.|hago", "¿Vosotros ___ (escribir) un diario?|escribís", "Yo no ___ (recordar) los verbos.|recuerdo", "Yo ___ (conocer) a muchos chicos colombianos.|conozco"] },
    { l: 1, type: "mc", t: "How often?", items: [
      ["Once a week: [[una ___ a la semana]]", ["vez", "veces", "día"], 0],
      ["[[No ___ nunca en español.]]", ["escribo", "escribe", "escribir"], 0],
      ["Hardly ever:", ["a menudo", "casi nunca", "siempre"], 1],
      ["Now and then:", ["de vez en cuando", "cada vez", "todos los días"], 0],
      ["[[Mi profesora ___ que es importante leer.]] (decir)", ["dice", "dece", "digo"], 0],
      ["[[Yo ___ salir los viernes.]] (preferir)", ["prefero", "prefiero", "prefiere"], 1]] },
    { l: 1, type: "order", t: "Make sentences", i: "Tap the words in the right order.", items: [
      "Normalmente estudio por la mañana.", "Leo en voz alta para practicar.", "Casi nunca veo la tele en español.", "Una vez a la semana voy a clase.", "¿Con qué frecuencia escuchas pódcasts?"] },
    /* Lesson 2 · ¿Desde cuándo? */
    { l: 2, type: "fill", t: "desde, desde hace or hace", i: "Write desde, desde hace or hace.", items: [
      "Estudio francés ___ 2022.|desde", "Vivo en Bogotá ___ tres años.|desde hace", "___ un mes que trabajo aquí.|hace", "Conozco a Marta ___ el colegio.|desde",
      "Toco la guitarra ___ mucho tiempo.|desde hace", "___ dos semanas que no veo a mis padres.|hace", "No como carne ___ el verano.|desde", "Juego al tenis ___ seis meses.|desde hace"] },
    { l: 2, type: "mc", t: "Questions about time", items: [
      ["[[¿___ cuándo vives aquí?]]", ["Desde", "Hace", "Cuánto"], 0],
      ["[[¿Cuánto tiempo ___ que estudias inglés?]]", ["desde", "hace", "es"], 1],
      ["[[Hace un año que ___ en esta casa.]]", ["vivo", "he vivido", "viví"], 0],
      ["[[— ¿Desde cuándo trabajas aquí? — ___ marzo.]]", ["Hace", "Desde", "Desde hace"], 1],
      ["[[Estudio español ___ ocho meses.]]", ["desde", "desde hace", "hace que"], 1],
      ["Which sentence is correct?", ["Hace dos años que vivo aquí.", "Hace dos años vivo que aquí.", "Desde dos años vivo aquí."], 0]] },
    { l: 2, type: "order", t: "Make sentences", i: "Tap the words in the right order.", items: [
      "Vivo en esta ciudad desde hace cinco años.", "¿Desde cuándo estudias español?", "Hace tres meses que hago yoga.", "Trabajo en un hotel desde 2021.", "¿Cuánto tiempo hace que conoces a Pablo?"] },
    /* Lesson 3 · Sentimientos y consejos */
    { l: 3, type: "fill", t: "costar, sentirse, dar…", i: "Write the missing word.", items: [
      "A mí me ___ mucho la gramática.|cuesta", "A Luis le ___ los verbos irregulares.|cuestan", "Cuando hablo español me ___ insegura.|siento", "Me ___ vergüenza cantar en público.|da",
      "A mi hermano le dan ___ los perros.|miedo", "En los exámenes me ___ muy nervioso.|pongo", "A nosotros nos ___ fácil leer.|resulta", "¿Tú te ___ cómodo en clase?|sientes"] },
    { l: 3, type: "match", t: "Feelings", i: "Connect each word with its meaning.", items: [
      ["seguro", "confident"], ["frustrado", "frustrated"], ["ridículo", "silly"], ["la vergüenza", "embarrassment"], ["el miedo", "fear"], ["cómodo", "comfortable"], ["equivocarse", "to make a mistake"], ["la paciencia", "patience"]] },
    { l: 3, type: "mc", t: "Giving advice", items: [
      ["[[Te recomiendo ___ pódcasts.]]", ["escuchar", "escuchas", "escucho"], 0],
      ["[[Es útil ___ un diario.]]", ["escribes", "escribir", "escribe"], 1],
      ["[[¿Por qué no ___ un intercambio?]]", ["hacer", "haces", "hago"], 1],
      ["Your friend can't understand films. You say:", ["Puedes verlas con subtítulos.", "Me da miedo el cine.", "Desde hace dos años."], 0],
      ["Your friend is shy in class. You say:", ["Me cuesta la gramática.", "Es normal equivocarse, no pasa nada.", "Leo en voz alta."], 1],
      ["[[Es importante ___ paciencia.]]", ["tener", "tienes", "tengo"], 0]] },
    /* Lesson 4 · Repaso */
    { l: 4, type: "tf", t: "Reading: Kenji's Spanish", text: "Me llamo Kenji, soy japonés y estudio español desde hace tres años. Hace un año que vivo en Valencia.\nTodos los días escucho pódcasts en el metro y una vez a la semana hago un intercambio con una chica española que aprende japonés.\nMe resulta fácil leer, pero me cuesta mucho entender a la gente en los bares: ¡hablan muy rápido! Y me da vergüenza hablar por teléfono.\nMi consejo: no tener miedo a los errores. Equivocarse es normal.", items: [
      ["Kenji estudia español desde hace un año.", false], ["Vive en Valencia.", true], ["Escucha pódcasts todos los días.", true], ["Su compañera de intercambio aprende japonés.", true], ["Le cuesta mucho leer.", false], ["Kenji piensa que equivocarse es normal.", true]] },
    { l: 4, type: "fill", t: "Mixed review", i: "Write one word in each blank.", items: [
      "Yo ___ (ir) a clase los martes.|voy", "Estudio alemán ___ hace dos años.|desde", "___ cinco meses que vivo aquí.|hace", "Me ___ la pronunciación.|cuesta",
      "Te ___ (recomendar) leer cómics.|recomiendo", "Yo ___ (salir) de casa a las ocho.|salgo", "Me ___ miedo los exámenes.|dan", "Mi madre ___ (sentirse) feliz aquí.|se siente"] },
    { l: 4, type: "order", t: "Make sentences", i: "Tap the words in the right order.", items: [
      "Me cuesta mucho hablar por teléfono.", "Te recomiendo ver películas en español.", "Estudio español desde hace un año.", "Me da vergüenza cantar delante de la gente.", "Es útil repasar las palabras nuevas."] }
  ],
  exam: [
    { type: "match", t: "Vocabulary", i: "Connect the words.", items: [
      ["tomar apuntes", "to take notes"], ["repasar", "to revise"], ["a menudo", "often"], ["de vez en cuando", "now and then"], ["inseguro", "insecure"], ["la ortografía", "spelling"], ["leer en voz alta", "to read aloud"], ["el error", "mistake"]] },
    { type: "mc", t: "Choose the answer", items: [
      ["[[Yo ___ ir al cine en versión original.]] (preferir)", ["prefiero", "prefero", "preferimos"], 0],
      ["[[Nosotros ___ las palabras difíciles.]] (repetir)", ["repitemos", "repetimos", "repiten"], 1],
      ["[[Estudio portugués ___ el año 2020.]]", ["desde", "desde hace", "hace"], 0],
      ["[[___ cuatro años que vivo en Quito.]]", ["Desde", "Hace", "Desde hace"], 1],
      ["[[A Marta le ___ mucho los exámenes orales.]]", ["cuesta", "cuestan", "cuestas"], 1],
      ["[[Me da ___ hablar en público.]]", ["vergüenza", "nervioso", "segura"], 0],
      ["[[¿Por qué no ___ series en español?]]", ["ver", "ves", "veo"], 1],
      ["[[Ella se siente muy ___.]]", ["seguro", "seguros", "segura"], 2]] },
    { type: "fill", t: "The present tense", i: "Write the verb in the present.", items: [
      "Yo ___ (saber) tres idiomas.|sé", "Mis amigos ___ (venir) a clase en bici.|vienen", "¿Tú ___ (poder) repetir, por favor?|puedes", "Yo ___ (traducir) textos para mi empresa.|traduzco", "Ana ___ (pedir) ayuda al profesor.|pide",
      "Nosotros ___ (empezar) a las nueve.|empezamos", "Yo ___ (tener) clase los lunes.|tengo", "¿Vosotros ___ (leer) el periódico?|leéis", "Yo siempre ___ (decir) la verdad.|digo", "Ellos ___ (volver) a casa tarde.|vuelven"] },
    { type: "fill", t: "Time, difficulties and feelings", i: "Write one word in each blank.", items: [
      "¿Desde ___ vives en Sevilla?|cuándo", "Trabajo aquí desde ___ un año.|hace", "Hace un mes ___ hago natación.|que", "A mí me ___ fácil escribir.|resulta",
      "Me ___ muy nerviosa antes de hablar.|pongo", "A mis padres les ___ miedo volar.|da", "Te ___ (recomendar) hacer un intercambio.|recomiendo", "No ___ nunca la tele en inglés. (ver, yo)|veo"] },
    { type: "tf", t: "Reading: «Mi diario de español»", text: "Hola, soy Amira. Soy egipcia y hace dos años que estudio español en una academia de El Cairo.\nVoy a clase dos veces a la semana, los lunes y los jueves. En casa escribo un diario en español y de vez en cuando veo películas mexicanas con subtítulos.\nLa gramática me resulta fácil, pero me cuestan mucho las preposiciones. Cuando hablo con nativos me siento un poco ridícula, porque me equivoco mucho.\nMi profesor dice que es normal y me recomienda hablar todos los días.", items: [
      ["Amira estudia español desde hace dos años.", true], ["Va a clase tres veces a la semana.", false], ["Escribe un diario en español.", true], ["Ve películas mexicanas todos los días.", false], ["Le cuestan las preposiciones.", true], ["Su profesor le recomienda no hablar con nativos.", false]] },
    { type: "order", pts: 2, t: "Build sentences", i: "Put the words in order.", items: [
      "Estudio español desde hace tres años.", "Me cuestan mucho los verbos irregulares.", "Hace dos meses que vivo en Lima.", "Te recomiendo escuchar la radio en español.", "Me siento insegura cuando hablo inglés."] }
  ]
});
