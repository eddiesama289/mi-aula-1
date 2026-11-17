/* Aula Plus 2 · Unidad 2 «Una vida de película». Original material. Format: see aula2.js. */
A2({
  n: 2, es: "Una vida de película", en: "A life like a film",
  lessons: ["El pretérito indefinido", "Verbos irregulares y biografías", "¿Cuándo? ¿Cuánto tiempo?"],
  goals: ["Talk about finished events in the past with the pretérito indefinido", "Use the most common irregular verbs: fui, tuve, hice, estuve…", "Tell the story of someone's life", "Say when something started and how long it lasted: desde, hasta, durante", "Write a short biography"],
  grammar: [
    { c: 1, t: "The pretérito indefinido: regular verbs", body: `
      <p>Use it for actions that started and finished at a moment in the past: [[Ayer cené con mis padres.]]</p>
      <div class="tbl-wrap"><table><tr><th></th><th>trabajar</th><th>nacer</th><th>vivir</th></tr>
      <tr><td>yo</td><td>[[trabajé]]</td><td>[[nací]]</td><td>[[viví]]</td></tr>
      <tr><td>tú</td><td>[[trabajaste]]</td><td>[[naciste]]</td><td>[[viviste]]</td></tr>
      <tr><td>él / ella / usted</td><td>[[trabajó]]</td><td>[[nació]]</td><td>[[vivió]]</td></tr>
      <tr><td>nosotros/as</td><td>[[trabajamos]]</td><td>[[nacimos]]</td><td>[[vivimos]]</td></tr>
      <tr><td>vosotros/as</td><td>[[trabajasteis]]</td><td>[[nacisteis]]</td><td>[[vivisteis]]</td></tr>
      <tr><td>ellos / ellas / ustedes</td><td>[[trabajaron]]</td><td>[[nacieron]]</td><td>[[vivieron]]</td></tr></table></div>
      <p class="tip">The accent matters: [[trabajo]] = I work, [[trabajó]] = he worked. -er and -ir verbs share the same endings.</p>` },
    { c: 1, t: "Spelling changes in the yo form", body: `
      <p>Only the spelling changes, the sound stays the same:</p>
      <ul><li>-car → -qué: [[buscar → busqué]], [[tocar → toqué]]</li>
      <li>-gar → -gué: [[llegar → llegué]], [[jugar → jugué]]</li>
      <li>-zar → -cé: [[empezar → empecé]], [[cruzar → crucé]]</li></ul>
      <p>[[leer]] and [[oír]] use y: [[leyó, leyeron]] · [[oyó, oyeron]].</p>` },
    { c: 1, t: "Time markers for the past", body: `
      <p>[[ayer]] · [[anoche]] (last night) · [[anteayer]] (the day before yesterday) · [[el otro día]]</p>
      <p>[[el lunes pasado]] · [[la semana pasada]] · [[el mes pasado]] · [[el año pasado]]</p>
      <p>[[en 2015]] · [[en marzo]] · [[en verano]] · [[hace tres años]] (three years ago)</p>
      <p class="tip">[[hace]] + time = "ago": [[Me mudé a Lima hace dos años.]]</p>` },
    { c: 2, t: "Irregular verbs", body: `
      <div class="tbl-wrap"><table><tr><th></th><th>ser / ir</th><th>tener</th><th>estar</th><th>hacer</th></tr>
      <tr><td>yo</td><td>[[fui]]</td><td>[[tuve]]</td><td>[[estuve]]</td><td>[[hice]]</td></tr>
      <tr><td>tú</td><td>[[fuiste]]</td><td>[[tuviste]]</td><td>[[estuviste]]</td><td>[[hiciste]]</td></tr>
      <tr><td>él / ella / usted</td><td>[[fue]]</td><td>[[tuvo]]</td><td>[[estuvo]]</td><td>[[hizo]]</td></tr>
      <tr><td>nosotros/as</td><td>[[fuimos]]</td><td>[[tuvimos]]</td><td>[[estuvimos]]</td><td>[[hicimos]]</td></tr>
      <tr><td>vosotros/as</td><td>[[fuisteis]]</td><td>[[tuvisteis]]</td><td>[[estuvisteis]]</td><td>[[hicisteis]]</td></tr>
      <tr><td>ellos / ellas / ustedes</td><td>[[fueron]]</td><td>[[tuvieron]]</td><td>[[estuvieron]]</td><td>[[hicieron]]</td></tr></table></div>
      <p>Same pattern (no accents!): [[poder → pude]], [[poner → puse]], [[venir → vine]], [[querer → quise]], [[saber → supe]], [[decir → dije, dijeron]].</p>
      <p>Changes only in él and ellos: [[pedir → pidió, pidieron]] · [[dormir → durmió, durmieron]] · [[morir → murió, murieron]].</p>
      <p class="tip">[[ser]] and [[ir]] are the same: [[Fue actor.]] (was) · [[Fue a Roma.]] (went). The context tells you which.</p>` },
    { c: 2, t: "ir or irse? empezar or empezar a?", body: `
      <p>[[ir a]] + place = to go to: [[Fue a Nueva York en 1990.]]</p>
      <p>[[irse]] = to leave, to go away: [[Se fue de casa a los dieciocho años.]] [[Se fue a vivir a París.]]</p>
      <p>[[empezar]] + noun: [[Empezó la carrera en 2004.]] · [[empezar a]] + infinitive: [[Empezó a cantar de niña.]]</p>` },
    { c: 3, t: "When and for how long", body: `
      <ul><li>[[a los veinte años]] = at the age of twenty</li>
      <li>[[al año siguiente]] = the following year · [[dos años después]] / [[dos años más tarde]] = two years later</li>
      <li>[[en los años noventa]] = in the nineties</li>
      <li>[[desde 1998 hasta 2005]] = from 1998 until 2005 · [[de 1998 a 2005]]</li>
      <li>[[durante]] + period = for, during: [[Vivió en Chile durante diez años.]]</li>
      <li>[[hasta]] = until: [[Trabajó allí hasta su muerte.]]</li></ul>
      <p class="tip">With the indefinido, a finished period uses [[durante]], not [[desde hace]]: [[Estudió piano durante seis años.]]</p>` }
  ],
  vocab: [
    { c: 1, g: "Past time words", items: [["ayer","yesterday"],["anoche","last night"],["anteayer","the day before yesterday"],["el otro día","the other day"],["la semana pasada","last week"],["el año pasado","last year"],["hace dos años","two years ago"]] },
    { c: 2, g: "A life story", items: [["nacer","to be born"],["crecer","to grow up"],["estudiar la carrera","to do a university degree"],["licenciarse","to graduate"],["casarse con","to marry"],["divorciarse","to get divorced"],["tener un hijo","to have a child"],["mudarse","to move house"],["irse a vivir a","to go and live in"],["jubilarse","to retire"],["morir","to die"]] },
    { c: 2, g: "Achievements", items: [["ganar un premio","to win a prize"],["conseguir","to achieve, to get"],["el éxito","success"],["hacerse famoso","to become famous"],["grabar un disco","to record an album"],["publicar un libro","to publish a book"],["el logro","achievement"]] },
    { c: 3, g: "Cinema", items: [["el director / la directora","director"],["el actor / la actriz","actor / actress"],["rodar una película","to shoot a film"],["el papel","role"],["el estreno","premiere"],["la película","film"],["el guion","script"],["la escena","scene"]] },
    { c: 3, g: "Sequence and duration", items: [["al año siguiente","the following year"],["más tarde","later"],["después","afterwards"],["durante","for, during"],["desde… hasta…","from… until…"],["a los veinte años","at twenty"],["en los años ochenta","in the eighties"]] }
  ],
  phrases: [
    ["Ayer trabajé hasta las nueve.", "Yesterday I worked until nine.", 1],
    ["El verano pasado visitamos Cuba.", "Last summer we visited Cuba.", 1],
    ["¿Qué hiciste el fin de semana?", "What did you do at the weekend?", 1],
    ["Nació en Bogotá en 1985.", "She was born in Bogotá in 1985.", 2],
    ["A los dieciocho años se fue a vivir a Madrid.", "At eighteen she went to live in Madrid.", 2],
    ["En 2010 ganó su primer premio.", "In 2010 she won her first prize.", 2],
    ["Vivió en México durante diez años.", "He lived in Mexico for ten years.", 3],
    ["Trabajó en el teatro desde 1990 hasta 1998.", "He worked in the theatre from 1990 until 1998.", 3],
    ["Dos años después rodó su primera película.", "Two years later he shot his first film.", 3]
  ],
  ex: [
    { type: "mc", q: "[[Ayer yo ___ a las once.]] (llegar)", opts: ["llegué", "llegé", "llegó", "llego"], a: 0, why: "-gar → -gué in the yo form." },
    { type: "mc", q: "[[El año pasado ___ a Perú.]] (we went)", opts: ["fuimos", "fueron", "vamos", "íbamos"], a: 0, why: "ir, nosotros → fuimos." },
    { type: "mc", q: "[[Vivió en Roma ___ cinco años.]]", opts: ["durante", "desde hace", "hasta", "desde"], a: 0, why: "A finished period: durante." },
    { type: "fill", q: "[[¿Qué ___ (hacer, tú) anoche?]]", a: ["hiciste"], why: "hacer, tú → hiciste." },
    { type: "fill", q: "[[Mi abuela ___ (nacer) en un pueblo pequeño.]]", a: ["nació"], why: "nacer, ella → nació." },
    { type: "fill", q: "[[Mis padres ___ (tener) tres hijos.]]", a: ["tuvieron"], why: "tener, ellos → tuvieron." }
  ],
  listen: [
    { c: 1, mode: "choose", es: "Anoche cené en un restaurante japonés.", en: "Last night I had dinner at a Japanese restaurant." },
    { c: 2, mode: "choose", es: "Se casó con un actor famoso.", en: "She married a famous actor." },
    { c: 3, mode: "choose", es: "Trabajó en Londres durante tres años.", en: "He worked in London for three years." },
    { c: 1, mode: "write", es: "El sábado pasado jugué al tenis.", en: "Last Saturday I played tennis." },
    { c: 2, mode: "write", es: "Fue una actriz muy famosa.", en: "She was a very famous actress." },
    { c: 3, mode: "write", es: "Dos años después tuvo su primer hijo.", en: "Two years later he had his first child." }
  ],
  talk: [
    { c: 1, q: "¿Qué hiciste el fin de semana pasado?", qen: "What did you do last weekend?", model: "El sábado fui al cine y el domingo comí con mi familia.", men: "On Saturday I went to the cinema and on Sunday I had lunch with my family." },
    { c: 2, q: "¿Dónde y cuándo naciste?", qen: "Where and when were you born?", model: "Nací en Hanói en 1998 y a los veinte años me fui a vivir a Saigón.", men: "I was born in Hanoi in 1998 and at twenty I went to live in Saigon." },
    { c: 3, q: "¿Cuánto tiempo estudiaste en el colegio o en la universidad?", qen: "How long did you study at school or university?", model: "Estudié Económicas durante cuatro años, desde 2016 hasta 2020.", men: "I studied Economics for four years, from 2016 until 2020." }
  ],
  practice: [
    /* Lesson 1 · El pretérito indefinido */
    { l: 1, type: "fill", t: "Regular verbs", i: "Write the pretérito indefinido.", items: [
      "Ayer yo ___ (comprar) un libro.|compré", "¿Tú ___ (comer) en casa ayer?|comiste", "Mi hermano ___ (vivir) en Berlín.|vivió", "Nosotros ___ (bailar) toda la noche.|bailamos",
      "¿Vosotros ___ (ver) el partido?|visteis", "Ellas ___ (salir) muy tarde.|salieron", "Yo ___ (empezar) a trabajar a las ocho.|empecé", "Mi padre ___ (leer) el periódico.|leyó"] },
    { l: 1, type: "mc", t: "When?", items: [
      ["Last night:", ["anoche", "anteayer", "esta noche"], 0],
      ["[[Me mudé aquí ___ tres años.]] (three years ago)", ["desde", "hace", "durante"], 1],
      ["[[La semana ___ estuve enferma.]]", ["pasada", "pasado", "última"], 0],
      ["Which sentence is in the past?", ["Trabajo mucho.", "Trabajó mucho.", "Trabaja mucho."], 1],
      ["[[Yo ___ al fútbol ayer.]] (jugar)", ["jugé", "jugó", "jugué"], 2],
      ["[[¿___ visitaste Granada? — En 2019.]]", ["Cuándo", "Cuánto", "Dónde"], 0]] },
    { l: 1, type: "order", t: "Make sentences", i: "Tap the words in the right order.", items: [
      "Ayer cené con mis amigos.", "El verano pasado viajamos a Italia.", "¿Qué compraste en el mercado?", "Anoche vi una película muy buena.", "Llegué a casa a las diez."] },
    /* Lesson 2 · Verbos irregulares y biografías */
    { l: 2, type: "fill", t: "Irregular verbs", i: "Write the pretérito indefinido.", items: [
      "El año pasado yo ___ (ir) a Japón.|fui", "¿Dónde ___ (estar, tú) ayer?|estuviste", "Mis abuelos ___ (tener) seis hijos.|tuvieron", "¿Qué ___ (hacer, vosotros) en verano?|hicisteis",
      "Ella no ___ (poder) venir a la fiesta.|pudo", "Ellos me ___ (decir) la verdad.|dijeron", "Picasso ___ (ser) un pintor español.|fue", "El niño ___ (dormir) diez horas.|durmió"] },
    { l: 2, type: "match", t: "A life story", i: "Connect each Spanish expression with its meaning.", items: [
      ["nacer", "to be born"], ["crecer", "to grow up"], ["casarse", "to get married"], ["mudarse", "to move house"], ["jubilarse", "to retire"], ["ganar un premio", "to win a prize"], ["hacerse famoso", "to become famous"], ["morir", "to die"]] },
    { l: 2, type: "mc", t: "ir, irse, empezar", items: [
      ["[[A los veinte años ___ de casa de sus padres.]]", ["se fue", "fue", "irse"], 0],
      ["[[En 2003 ___ a Londres para un concierto.]]", ["fue", "se fue", "estuvo"], 0],
      ["[[Empezó ___ tocar el piano a los cinco años.]]", ["de", "a", "–"], 1],
      ["[[Empezó ___ carrera de Medicina.]]", ["a la", "la", "en la"], 1],
      ["[[Ellos ___ en un pueblo, pero viven en Madrid.]] (grew up)", ["crecieron", "crecían", "crecen"], 0],
      ["[[Mi abuelo ___ en 2015.]] (died)", ["morió", "murió", "muere"], 1]] },
    /* Lesson 3 · ¿Cuándo? ¿Cuánto tiempo? */
    { l: 3, type: "fill", t: "desde, hasta, durante…", i: "Write the missing word.", items: [
      "Vivió en Chile ___ seis años.|durante", "Trabajó allí ___ 1990 hasta 1995.|desde", "Estudió en París desde 2001 ___ 2004.|hasta", "Se casó ___ los treinta años.|a",
      "Al año ___ tuvo su primera hija.|siguiente", "Dos años ___ se divorciaron.|después~más tarde", "Fue muy famoso en los años ___.|ochenta~noventa~setenta~sesenta", "Fue profesora de 1998 ___ 2010.|a"] },
    { l: 3, type: "mc", t: "Cinema and biographies", items: [
      ["The person who directs a film:", ["el director", "el actor", "el guion"], 0],
      ["[[Penélope Cruz es una ___ española.]]", ["actor", "actriz", "actora"], 1],
      ["[[En 2008 ___ su primera película.]] (shot)", ["rodó", "rodé", "ruedó"], 0],
      ["[[Ese año consiguió el ___ más importante de su carrera.]]", ["premio", "papel", "escena"], 0],
      ["[[Trabajó en esa empresa ___ dos años.]]", ["durante", "hace", "desde hace"], 0],
      ["Which word is NOT about cinema?", ["la escena", "el estreno", "la jubilación"], 2]] },
    { l: 3, type: "order", t: "Write a biography", i: "Tap the words in the right order.", items: [
      "Nació en Sevilla en 1970.", "A los veinte años se fue a Madrid.", "Vivió en Buenos Aires durante diez años.", "Al año siguiente ganó un premio.", "Trabajó como actriz desde 1995 hasta 2010."] },
    /* Lesson 4 · Repaso */
    { l: 4, type: "tf", t: "Reading: «Lola Fuentes, directora»", text: "Lola Fuentes nació en Valparaíso (Chile) en 1972. De niña le encantaba el cine.\nA los dieciocho años se fue a estudiar a Madrid. Allí estudió Comunicación Audiovisual durante cuatro años.\nEn 1997 rodó su primer cortometraje y dos años después hizo su primera película, «El último tren». La película tuvo mucho éxito y ganó un premio en el festival de San Sebastián.\nEn 2005 se casó con un actor mexicano y se mudaron a Ciudad de México, donde vivieron hasta 2015. Hoy Lola vive otra vez en Chile.", items: [
      ["Lola nació en Chile.", true], ["Se fue a Madrid a los veinte años.", false], ["Estudió en Madrid durante cuatro años.", true], ["Hizo su primera película en 1999.", true], ["Se casó con un director chileno.", false], ["Vivió en México diez años.", true]] },
    { l: 4, type: "fill", t: "Mixed review", i: "Write the verb in the pretérito indefinido.", items: [
      "Yo ___ (buscar) piso durante un mes.|busqué", "¿Tú ___ (ir) a la boda de Carmen?|fuiste", "Ellos ___ (estar) en Perú en 2019.|estuvieron", "El camarero ___ (pedir) disculpas.|pidió",
      "Nosotros ___ (hacer) un viaje increíble.|hicimos", "Gabo ___ (escribir) muchas novelas.|escribió", "¿Vosotros ___ (venir) en coche?|vinisteis", "Yo no ___ (saber) qué decir.|supe"] },
    { l: 4, type: "order", t: "Make sentences", i: "Tap the words in the right order.", items: [
      "¿Qué hiciste el sábado pasado?", "Mi abuela nació en un pueblo de Galicia.", "Estuvimos en México durante un mes.", "En 2012 se fue a vivir a Barcelona.", "Ayer no pude ir a clase."] }
  ],
  exam: [
    { type: "match", t: "Vocabulary", i: "Connect the words.", items: [
      ["anoche", "last night"], ["anteayer", "the day before yesterday"], ["licenciarse", "to graduate"], ["divorciarse", "to get divorced"], ["el éxito", "success"], ["el estreno", "premiere"], ["rodar", "to shoot (a film)"], ["al año siguiente", "the following year"]] },
    { type: "mc", t: "Choose the answer", items: [
      ["[[Yo ___ la película en 2020.]] (ver)", ["ví", "vi", "vio"], 1],
      ["[[¿Dónde ___ (vosotros) el verano pasado?]]", ["estuvisteis", "estuvistéis", "estabais"], 0],
      ["[[Mis amigos ___ una fiesta sorpresa.]]", ["hicieron", "hacieron", "hizo"], 0],
      ["[[Cervantes ___ en 1616.]] (morir)", ["morió", "murió", "muró"], 1],
      ["[[Se fue a vivir a Japón ___ cinco años.]] (five years ago)", ["hace", "desde", "durante"], 0],
      ["[[Estuvo en la cárcel ___ 1962 ___ 1990.]]", ["desde / hasta", "durante / a", "hace / que"], 0],
      ["[[Empezó ___ escribir poemas a los doce años.]]", ["–", "a", "de"], 1],
      ["[[Yo ___ a las seis de la mañana.]] (llegar)", ["llegé", "llegué", "llegó"], 1]] },
    { type: "fill", t: "The pretérito indefinido", i: "Write the verb in the pretérito indefinido.", items: [
      "Mi madre ___ (nacer) en 1968.|nació", "Yo ___ (tocar) la guitarra en un grupo.|toqué", "¿Tú ___ (tener) problemas con el vuelo?|tuviste", "Frida Kahlo ___ (ser) una pintora mexicana.|fue", "Nosotros ___ (ir) al concierto de Shakira.|fuimos",
      "Ellos ___ (casarse) en una playa.|se casaron", "Yo ___ (poner) la mesa.|puse", "¿Qué te ___ (decir) el médico?|dijo", "Mi hijo ___ (dormir) muy mal anoche.|durmió", "Yo ___ (empezar) el curso en octubre.|empecé"] },
    { type: "fill", t: "Time and life", i: "Write one word in each blank.", items: [
      "Vivimos en Toledo ___ tres años, de 2015 a 2018.|durante", "Trabajó en la radio ___ 2001 hasta 2009.|desde", "___ los veinticinco años tuvo su primer hijo.|a", "Me mudé a esta casa ___ dos años. (two years ago)|hace",
      "Dos años ___ ganó el Óscar.|después~más tarde", "Se ___ de casa a los diecinueve años.|fue", "En los años ___ fue muy famosa. (90s)|noventa", "Trabajó en el hospital ___ su jubilación.|hasta"] },
    { type: "tf", t: "Reading: «Un músico viajero»", text: "Andrés Ríos nació en Montevideo en 1960. Empezó a tocar el piano a los seis años.\nEn 1978 se fue a vivir a Buenos Aires, donde estudió música durante cinco años. Allí conoció a su mujer, una cantante argentina.\nEn 1985 grabó su primer disco, pero no tuvo éxito. Tres años después publicó «Río abajo», que vendió miles de copias.\nDesde 1990 hasta 2010 dio conciertos por toda Europa. Murió en 2018 en Montevideo.", items: [
      ["Andrés empezó a tocar el piano de niño.", true], ["Estudió música en Montevideo.", false], ["Su mujer era cantante.", true], ["Su primer disco fue un éxito.", false], ["«Río abajo» salió en 1988.", true], ["Dio conciertos en Europa durante veinte años.", true]] },
    { type: "order", pts: 2, t: "Build sentences", i: "Put the words in order.", items: [
      "Nació en Lima en 1990.", "El año pasado fuimos a Cuba.", "Vivió en Italia durante dos años.", "¿Qué hiciste ayer por la tarde?", "A los veinte años se fue a vivir a Londres."] }
  ]
});
