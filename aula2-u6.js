/* Aula Plus 2 · Unidad 6 «Guía del ocio». Original material. Format: see aula2.js. */
A2({
  n: 6, es: "Guía del ocio", en: "Going-out guide",
  lessons: ["Experiencias y valoraciones", "¿Perfecto o indefinido?", "Planes e intenciones"],
  goals: ["Talk about experiences with the pretérito perfecto and say what you thought of them", "Choose between the pretérito perfecto and the indefinido", "Use ya and todavía no", "Talk about plans: ir a, pensar, querer, tener ganas de + infinitive", "React with exclamations: ¡Qué bonito! ¡Qué vista tan bonita!"],
  grammar: [
    { c: 1, t: "The pretérito perfecto (review)", body: `
      <p>[[haber]] ([[he, has, ha, hemos, habéis, han]]) + participle: [[-ar → -ado]], [[-er/-ir → -ido]].</p>
      <p>Irregular participles: [[hecho, visto, escrito, dicho, puesto, vuelto, abierto, roto, muerto, descubierto]].</p>
      <p>Experiences in your life: [[¿Has estado alguna vez en Cádiz?]] [[Nunca he hecho surf.]] [[He visto ese musical dos veces.]]</p>` },
    { c: 1, t: "Giving your opinion: parecer", body: `
      <p>[[parecer]] works like [[gustar]]: [[¿Qué te ha parecido la exposición? — Me ha parecido muy interesante.]]</p>
      <p>About one finished moment: [[¿Qué te pareció el concierto? — Me pareció genial.]]</p>
      <p>Opinions: [[precioso]], [[impresionante]], [[divertido]], [[aburrido]], [[un rollo]] (a drag), [[una maravilla]], [[un desastre]].</p>` },
    { c: 1, t: "Exclamations", body: `
      <p>[[¡Qué]] + adjective [[!]]: [[¡Qué bonito!]] [[¡Qué rico!]]</p>
      <p>[[¡Qué]] + noun [[!]]: [[¡Qué calor!]] [[¡Qué suerte!]] [[¡Qué pena!]]</p>
      <p>[[¡Qué]] + noun + [[tan / más]] + adjective [[!]]: [[¡Qué playa tan bonita!]] [[¡Qué ciudad más interesante!]]</p>
      <p class="tip">Written [[qué]] always has an accent in exclamations and questions.</p>` },
    { c: 2, t: "Pretérito perfecto or indefinido?", body: `
      <div class="tbl-wrap"><table><tr><th>pretérito perfecto</th><th>pretérito indefinido</th></tr>
      <tr><td>Time that is not over: [[hoy]], [[esta mañana]], [[esta semana]], [[este año]], [[últimamente]]</td><td>Time that is over: [[ayer]], [[el lunes]], [[la semana pasada]], [[en 2019]], [[hace dos años]]</td></tr>
      <tr><td>Experiences, no date: [[alguna vez]], [[nunca]], [[ya]], [[todavía no]]</td><td>A specific moment: [[¿Cuándo fuiste?]] [[Fui en mayo.]]</td></tr>
      <tr><td>[[Este verano he ido a Ibiza.]]</td><td>[[El verano pasado fui a Ibiza.]]</td></tr></table></div>
      <p class="tip">In Latin America and parts of Spain people use the indefinido much more: [[Hoy comí pescado.]] Both are understood everywhere.</p>` },
    { c: 2, t: "ya and todavía no", body: `
      <p>[[ya]] = already: [[Ya he visto la catedral.]]</p>
      <p>[[todavía no]] = not yet: [[Todavía no he probado el pulpo.]] = [[No he probado el pulpo todavía.]]</p>
      <p>[[¿Ya has comprado las entradas? — Sí, ya las he comprado. / No, todavía no.]]</p>` },
    { c: 3, t: "Plans and intentions", body: `
      <ul><li>[[ir a]] + infinitive (a plan): [[Este fin de semana voy a ir a la sierra.]]</li>
      <li>[[pensar]] + infinitive (to intend): [[Pienso visitar el museo mañana.]] (e → ie)</li>
      <li>[[querer]] + infinitive (to want): [[Quiero ver ese musical.]]</li>
      <li>[[tener ganas de]] + infinitive (to feel like): [[Tengo muchas ganas de ir a la playa.]]</li>
      <li>[[me gustaría]] + infinitive (I would like): [[Me gustaría hacer una ruta en kayak.]]</li></ul>` }
  ],
  vocab: [
    { c: 1, g: "Free-time activities", items: [["ir de tapas","to go for tapas"],["ir a un concierto","to go to a concert"],["ver una exposición","to see an exhibition"],["hacer senderismo","to go hiking"],["hacer surf","to surf"],["montar en bici","to ride a bike"],["dar un paseo","to go for a walk"],["salir de copas","to go out for drinks"],["tomar el sol","to sunbathe"],["bucear","to dive"]] },
    { c: 1, g: "Opinions", items: [["precioso / preciosa","beautiful"],["impresionante","impressive"],["divertido / divertida","fun"],["aburrido / aburrida","boring"],["un rollo","a drag"],["una maravilla","a wonder"],["parecer","to seem"],["¡qué pena!","what a shame!"],["¡qué suerte!","how lucky!"]] },
    { c: 2, g: "Places of interest", items: [["la catedral","cathedral"],["el casco antiguo","old town"],["el mercado","market"],["el mirador","viewpoint"],["el puerto","harbour"],["la playa","beach"],["el castillo","castle"],["el monumento","monument"],["el barrio","neighbourhood"]] },
    { c: 3, g: "Culture and going out", items: [["la exposición","exhibition"],["el festival","festival"],["la obra de teatro","play"],["el espectáculo","show"],["el musical","musical"],["la entrada","ticket"],["la cartelera","what's on (listings)"],["la visita guiada","guided tour"],["gratis","free"],["tener ganas de","to feel like"]] }
  ],
  phrases: [
    ["¿Has estado alguna vez en San Sebastián?", "Have you ever been to San Sebastián?", 1],
    ["¿Qué te ha parecido el museo? — Me ha parecido impresionante.", "What did you think of the museum? — I thought it was impressive.", 1],
    ["¡Qué vista tan bonita!", "What a beautiful view!", 1],
    ["Esta mañana hemos visitado el casco antiguo.", "This morning we visited the old town.", 2],
    ["El año pasado fuimos a un festival de jazz.", "Last year we went to a jazz festival.", 2],
    ["Todavía no hemos probado los pintxos.", "We haven't tried the pintxos yet.", 2],
    ["Esta noche vamos a ir al teatro.", "Tonight we are going to the theatre.", 3],
    ["Pienso hacer una ruta en bici mañana.", "I intend to do a bike route tomorrow.", 3],
    ["Tengo muchas ganas de ver ese musical.", "I really feel like seeing that musical.", 3]
  ],
  ex: [
    { type: "mc", q: "[[Esta semana ___ dos conciertos.]]", opts: ["he visto", "vi", "veo", "voy a ver ayer"], a: 0, why: "esta semana is not over: pretérito perfecto." },
    { type: "mc", q: "[[En 2018 ___ a Cuba.]]", opts: ["fui", "he ido", "voy", "iba a"], a: 0, why: "A finished year: indefinido." },
    { type: "mc", q: "[[¡Qué playa ___ bonita!]]", opts: ["tan", "muy", "tanto", "mucho"], a: 0, why: "¡Qué + noun + tan + adjective!" },
    { type: "fill", q: "[[¿Ya has comprado las entradas? — No, ___ no.]]", a: ["todavía"], why: "todavía no = not yet." },
    { type: "fill", q: "[[¿Qué te ha ___ la película?]] (parecer)", a: ["parecido"], why: "parecer → parecido." },
    { type: "fill", q: "[[Mañana ___ a ir a la playa.]] (we are going)", a: ["vamos"], why: "ir a + infinitive: vamos a ir." }
  ],
  listen: [
    { c: 1, mode: "choose", es: "Nunca he hecho submarinismo.", en: "I have never been scuba diving." },
    { c: 2, mode: "choose", es: "Ayer fuimos a un concierto en el puerto.", en: "Yesterday we went to a concert at the harbour." },
    { c: 3, mode: "choose", es: "Tengo ganas de ir a la playa.", en: "I feel like going to the beach." },
    { c: 1, mode: "write", es: "¡Qué ciudad tan bonita!", en: "What a beautiful city!" },
    { c: 2, mode: "write", es: "Ya hemos visto la catedral.", en: "We have already seen the cathedral." },
    { c: 3, mode: "write", es: "Este sábado voy a ir al teatro.", en: "This Saturday I am going to the theatre." }
  ],
  talk: [
    { c: 1, q: "¿Cuál es el mejor concierto o espectáculo que has visto?", qen: "What is the best concert or show you have seen?", model: "He visto a Rosalía en directo y me ha parecido increíble.", men: "I have seen Rosalía live and I thought it was incredible." },
    { c: 2, q: "¿Qué hiciste el fin de semana pasado? ¿Y qué has hecho esta semana?", qen: "What did you do last weekend? And what have you done this week?", model: "El sábado fui a la playa. Esta semana he trabajado mucho y no he salido.", men: "On Saturday I went to the beach. This week I have worked a lot and haven't gone out." },
    { c: 3, q: "¿Qué planes tienes para las vacaciones?", qen: "What plans do you have for the holidays?", model: "Voy a ir a Perú y pienso hacer el Camino Inca. Tengo muchas ganas.", men: "I am going to Peru and I intend to do the Inca Trail. I'm really looking forward to it." }
  ],
  practice: [
    /* Lesson 1 · Experiencias y valoraciones */
    { l: 1, type: "fill", t: "Experiences", i: "Write the pretérito perfecto.", items: [
      "¿___ (estar, tú) alguna vez en un festival?|has estado", "Yo nunca ___ (hacer) surf.|he hecho", "Mis padres ___ (ver) ese musical tres veces.|han visto", "¿Vosotros ___ (montar) alguna vez en globo?|habéis montado",
      "Nosotros ___ (visitar) muchos museos.|hemos visitado", "Ana nunca ___ (probar) el gazpacho.|ha probado", "¿Qué te ___ ___ (parecer) la obra?|ha|parecido"] },
    { l: 1, type: "mc", t: "Opinions and exclamations", items: [
      ["[[¿Qué ___ han parecido los cuadros?]]", ["te", "tú", "ti"], 0],
      ["[[Las playas me han ___ preciosas.]]", ["parecido", "parecidas", "parecen"], 0],
      ["You see a beautiful sunset:", ["¡Qué bonito!", "¡Qué pena!", "¡Qué rollo!"], 0],
      ["The concert was cancelled:", ["¡Qué suerte!", "¡Qué pena!", "¡Qué rico!"], 1],
      ["[[¡Qué museo ___ interesante!]]", ["más", "muy", "mucho"], 0],
      ["A boring film is", ["una maravilla", "un rollo", "impresionante"], 1]] },
    { l: 1, type: "match", t: "Going out", i: "Connect each expression with its meaning.", items: [
      ["ir de tapas", "to go for tapas"], ["hacer senderismo", "to go hiking"], ["dar un paseo", "to go for a walk"], ["tomar el sol", "to sunbathe"], ["bucear", "to dive"], ["salir de copas", "to go out for drinks"], ["impresionante", "impressive"], ["una maravilla", "a wonder"]] },
    /* Lesson 2 · ¿Perfecto o indefinido? */
    { l: 2, type: "fill", t: "Perfecto or indefinido?", i: "Write the verb in the right past tense.", items: [
      "Esta mañana ___ (desayunar, yo) en el mercado.|he desayunado", "Ayer ___ (ir, nosotros) al castillo.|fuimos", "Este año ___ (viajar, yo) mucho.|he viajado", "En 2020 ___ (visitar, ellos) Lisboa.|visitaron",
      "Hoy ___ (ver, yo) una exposición genial.|he visto", "La semana pasada ___ (estar, tú) en Sevilla.|estuviste", "Hace dos años ___ (hacer, ella) el Camino de Santiago.|hizo", "Últimamente ___ (salir, nosotros) poco.|hemos salido"] },
    { l: 2, type: "mc", t: "ya and todavía no", items: [
      ["[[¿___ has visto el mirador? — Sí, esta mañana.]]", ["Ya", "Todavía", "Nunca"], 0],
      ["[[Todavía no ___ la visita guiada.]]", ["hemos hecho", "hicimos", "hacemos"], 0],
      ["[[¿Has reservado el hotel? — No, ___.]]", ["ya", "todavía no", "ya no"], 1],
      ["[[El lunes ___ al teatro.]]", ["he ido", "fui", "ido"], 1],
      ["[[¿Cuándo ___ a Granada? — En marzo.]]", ["fuiste", "has ido", "vas ido"], 0],
      ["Which time marker goes with the perfecto?", ["ayer", "esta semana", "en 2015"], 1]] },
    { l: 2, type: "order", t: "Make sentences", i: "Tap the words in the right order.", items: [
      "Este verano hemos ido a la playa.", "El año pasado fui a un festival.", "Ya he comprado las entradas.", "Todavía no hemos visto el castillo.", "Ayer cenamos en el puerto."] },
    /* Lesson 3 · Planes e intenciones */
    { l: 3, type: "fill", t: "Plans", i: "Write the missing word.", items: [
      "Mañana ___ a ir al cine. (I'm going)|voy", "¿Qué ___ hacer este verano? (do you intend, tú)|piensas", "Tengo muchas ___ de ver a mis amigos.|ganas", "Me ___ visitar el Museo del Prado. (I'd like)|gustaría",
      "Nosotros ___ a hacer una ruta en kayak.|vamos", "Mis padres ___ ir a Italia. (want)|quieren", "¿Vas ___ ir a la exposición?|a", "Ellos piensan ___ el castillo. (visitar)|visitar"] },
    { l: 3, type: "match", t: "Culture", i: "Connect each word with its meaning.", items: [
      ["la entrada", "ticket"], ["la obra de teatro", "play"], ["el espectáculo", "show"], ["la cartelera", "listings"], ["la visita guiada", "guided tour"], ["gratis", "free"], ["el casco antiguo", "old town"], ["el mirador", "viewpoint"]] },
    { l: 3, type: "order", t: "Make plans", i: "Tap the words in the right order.", items: [
      "Este fin de semana voy a ir a la montaña.", "Tengo ganas de ver una obra de teatro.", "Pienso visitar el casco antiguo.", "¿Qué vas a hacer esta noche?", "Me gustaría ir a un festival de música."] },
    /* Lesson 4 · Repaso */
    { l: 4, type: "tf", t: "Reading: «Un fin de semana en Málaga»", text: "Hola, Inés. ¡Estoy en Málaga! Llegué el viernes por la tarde y esa noche fui de tapas por el centro. ¡Qué ambiente tan bueno!\nHoy he visitado el Museo Picasso y me ha parecido precioso. También he subido al castillo de Gibralfaro: ¡qué vistas tan impresionantes!\nTodavía no he ido a la playa, pero mañana pienso tomar el sol y bañarme. Por la noche voy a ir a un concierto de flamenco en el puerto. Tengo muchas ganas.\nUn beso, Carla.", items: [
      ["Carla llegó a Málaga el sábado.", false], ["El viernes fue de tapas.", true], ["Le ha gustado el Museo Picasso.", true], ["Ya ha ido a la playa.", false], ["Mañana va a ir a un concierto.", true], ["El concierto es en el castillo.", false]] },
    { l: 4, type: "fill", t: "Mixed review", i: "Write one word in each blank.", items: [
      "¿Has ___ (estar) alguna vez en Bilbao?|estado", "¡Qué día ___ bonito!|tan~más", "Ayer ___ (ver, yo) un espectáculo increíble.|vi", "Hoy ___ visitado el mercado. (nosotros)|hemos",
      "¿Ya has hecho la maleta? — No, todavía ___.|no", "¿Qué te ___ parecido el festival?|ha", "Mañana ___ a ir a la playa. (yo)|voy", "Tengo ___ de bailar.|ganas"] },
    { l: 4, type: "order", t: "Make sentences", i: "Tap the words in the right order.", items: [
      "¿Qué te ha parecido la exposición?", "Nunca he hecho senderismo.", "El sábado pasado fuimos al teatro.", "Mañana voy a ver un musical.", "¡Qué mercado tan bonito!"] }
  ],
  exam: [
    { type: "match", t: "Vocabulary", i: "Connect the words.", items: [
      ["el mirador", "viewpoint"], ["la entrada", "ticket"], ["la exposición", "exhibition"], ["bucear", "to dive"], ["hacer senderismo", "to go hiking"], ["un rollo", "a drag"], ["el casco antiguo", "old town"], ["tener ganas de", "to feel like"]] },
    { type: "mc", t: "Choose the answer", items: [
      ["[[Esta tarde ___ un museo.]]", ["he visitado", "visité", "visitaba"], 0],
      ["[[El año pasado ___ a México.]]", ["he ido", "fui", "voy"], 1],
      ["[[¿Has estado ___ en Galicia?]]", ["alguna vez", "ayer", "el año pasado"], 0],
      ["[[¿Qué te ___ el concierto de anoche?]]", ["ha parecido", "pareció", "parece"], 1],
      ["[[¡Qué ___!]] (how hot it is)", ["calor", "caliente", "calor tan"], 0],
      ["[[Todavía no ___ el castillo.]]", ["hemos visto", "vimos", "veíamos"], 0],
      ["[[Mañana ___ hacer una visita guiada.]] (I intend)", ["pienso", "pensé", "he pensado"], 0],
      ["[[El sábado ___ a ir al cine.]] (we are going)", ["vamos", "fuimos", "hemos"], 0]] },
    { type: "fill", t: "Past tenses", i: "Write the verb in the pretérito perfecto or indefinido.", items: [
      "Este fin de semana ___ (hacer, yo) muchas cosas.|he hecho", "En 2016 ___ (ir, nosotros) a un festival en Benicàssim.|fuimos", "Hoy ___ (comer, yo) paella.|he comido", "Ayer mi hermano ___ (ver) un partido.|vio", "Nunca ___ (estar, yo) en un musical.|he estado",
      "La semana pasada ___ (salir, ellos) de copas.|salieron", "Esta semana ___ (abrir, ellos) un museo nuevo.|han abierto", "¿Qué ___ (hacer, tú) ayer?|hiciste", "Ya ___ (escribir, yo) la reseña.|he escrito", "Hace un mes ___ (volver, nosotros) de Perú.|volvimos"] },
    { type: "fill", t: "Opinions and plans", i: "Write one word in each blank.", items: [
      "¿Qué ___ ha parecido la obra? (to you, tú)|te", "Me ha ___ un poco aburrida.|parecido", "¡Qué playa ___ limpia!|tan~más", "¿Ya has visitado la catedral? — No, ___ no.|todavía",
      "Este verano ___ a hacer surf. (I'm going)|voy", "Mis amigos ___ ir a Ibiza. (intend)|piensan", "Tengo muchas ___ de verte.|ganas", "Me ___ ver el espectáculo. (I'd like)|gustaría"] },
    { type: "tf", t: "Reading: «Guía rápida de Cádiz»", text: "Cádiz es una de las ciudades más antiguas de Europa. Yo la he visitado tres veces y siempre me ha parecido una maravilla.\nLa primera vez fui en 2015 con mis padres. Visitamos la catedral y subimos a la Torre Tavira, un mirador con unas vistas impresionantes.\nEste año he ido en febrero, para el Carnaval. ¡Qué ambiente tan divertido! Todavía no he visto la ciudad en verano, pero el año que viene pienso ir en agosto para tomar el sol en la playa de La Caleta.", items: [
      ["El autor ha visitado Cádiz tres veces.", true], ["La primera vez fue solo.", false], ["La Torre Tavira es un mirador.", true], ["Este año ha ido en verano.", false], ["Le ha gustado el Carnaval.", true], ["Ya ha estado en Cádiz en agosto.", false]] },
    { type: "order", pts: 2, t: "Build sentences", i: "Put the words in order.", items: [
      "¿Has estado alguna vez en Cuba?", "Ayer fuimos a un concierto de jazz.", "Todavía no he visto la exposición.", "El museo me ha parecido impresionante.", "Este verano voy a hacer el Camino de Santiago."] }
  ]
});
