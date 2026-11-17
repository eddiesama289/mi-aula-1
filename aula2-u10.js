/* Aula Plus 2 · Unidad 10 «Momentos especiales». Original material. Format: see aula2.js. */
A2({
  n: 10, es: "Momentos especiales", en: "Special moments",
  lessons: ["Más verbos irregulares", "Indefinido e imperfecto", "Contar anécdotas y emociones"],
  goals: ["Use more irregular verbs in the pretérito indefinido", "Tell a story: events (indefinido) and circumstances (imperfecto)", "Say what was happening when something happened: estaba + gerundio", "Order a story: de repente, en ese momento, al final…", "Talk about memories and how you felt"],
  grammar: [
    { c: 1, t: "More irregular verbs in the indefinido", body: `
      <div class="tbl-wrap"><table><tr><th>Infinitive</th><th>yo</th><th>él / ella</th><th>ellos</th></tr>
      <tr><td>[[traer]]</td><td>[[traje]]</td><td>[[trajo]]</td><td>[[trajeron]]</td></tr>
      <tr><td>[[conducir]]</td><td>[[conduje]]</td><td>[[condujo]]</td><td>[[condujeron]]</td></tr>
      <tr><td>[[andar]]</td><td>[[anduve]]</td><td>[[anduvo]]</td><td>[[anduvieron]]</td></tr>
      <tr><td>[[dar]]</td><td>[[di]]</td><td>[[dio]]</td><td>[[dieron]]</td></tr>
      <tr><td>[[sentir]]</td><td>[[sentí]]</td><td>[[sintió]]</td><td>[[sintieron]]</td></tr>
      <tr><td>[[construir]]</td><td>[[construí]]</td><td>[[construyó]]</td><td>[[construyeron]]</td></tr></table></div>
      <p>Remember: [[fui, tuve, estuve, hice, pude, puse, vine, quise, supe, dije]]. Verbs with -j- lose the i in ellos: [[dijeron]], [[trajeron]], [[condujeron]].</p>` },
    { c: 1, t: "Historical events", body: `
      <p>[[En 1969 el hombre llegó a la Luna.]] · [[En 1989 cayó el Muro de Berlín.]] · [[En 1992 se celebraron los Juegos Olímpicos de Barcelona.]]</p>
      <p>[[¿Dónde estabas cuando…?]] [[¿Te acuerdas de…?]] ([[acordarse de]], o → ue) · [[Me acuerdo perfectamente.]] · [[No me acuerdo.]]</p>` },
    { c: 2, t: "Indefinido or imperfecto?", body: `
      <p>In a story, the [[indefinido]] moves the action forward (what happened); the [[imperfecto]] describes the scene (what it was like, what was going on).</p>
      <div class="tbl-wrap"><table><tr><th>imperfecto: the circumstances</th><th>indefinido: the events</th></tr>
      <tr><td>[[Era sábado y hacía mucho calor.]]</td><td>[[Fuimos a la playa.]]</td></tr>
      <tr><td>[[Había mucha gente en la calle.]]</td><td>[[De repente, empezó a llover.]]</td></tr>
      <tr><td>[[Estaba muy cansada.]]</td><td>[[Me fui a casa a las nueve.]]</td></tr></table></div>
      <p class="tip">Ask yourself: can I answer "and then what happened?" → indefinido. Is it background or description? → imperfecto.</p>` },
    { c: 2, t: "Story markers", body: `
      <p>[[aquel día]] · [[esa mañana]] · [[un día]] · [[de repente]] / [[de pronto]] (suddenly) · [[en ese momento]] · [[entonces]] · [[mientras]] (while) · [[al final]] · [[por suerte]] (luckily)</p>
      <p>[[Un día, mientras paseaba por el parque, vi a una actriz famosa. En ese momento…]]</p>` },
    { c: 3, t: "estaba + gerundio", body: `
      <p>[[estar]] in the imperfecto + gerundio = an action in progress, interrupted by another one (indefinido):</p>
      <p>[[Estaba durmiendo cuando sonó el teléfono.]] · [[Estábamos cenando cuando se fue la luz.]]</p>
      <p>[[¿Qué estabas haciendo cuando te llamé?]]</p>` },
    { c: 3, t: "Emotions in the past", body: `
      <p>[[Me puse muy contento / nervioso / triste.]] (I became…) · [[Me sentí fatal.]] · [[Pasé mucho miedo.]] · [[Me llevé un susto.]]</p>
      <p>[[Fue un día inolvidable.]] · [[Fue el mejor momento de mi vida.]]</p>
      <p>Reacting to a story: [[¡Qué susto!]] [[¡Qué alegría!]] [[¡Qué vergüenza!]] [[¡Qué mala suerte!]] [[¿Y qué pasó?]] [[¿En serio?]]</p>` }
  ],
  vocab: [
    { c: 1, g: "Historical events", items: [["la llegada a la Luna","the Moon landing"],["la caída del Muro","the fall of the Wall"],["los Juegos Olímpicos","the Olympic Games"],["el Mundial","the World Cup"],["la boda real","the royal wedding"],["el acontecimiento","event"],["la noticia","news item"],["celebrarse","to take place"]] },
    { c: 1, g: "Memories", items: [["acordarse de","to remember"],["recordar","to remember"],["olvidar","to forget"],["el recuerdo","memory"],["inolvidable","unforgettable"],["la anécdota","anecdote"],["contar","to tell"],["aquel día","that day"]] },
    { c: 2, g: "Telling a story", items: [["de repente","suddenly"],["de pronto","all of a sudden"],["en ese momento","at that moment"],["entonces","then"],["mientras","while"],["al final","in the end"],["por suerte","luckily"],["por desgracia","unfortunately"]] },
    { c: 3, g: "Emotions", items: [["emocionado / emocionada","excited, moved"],["sorprendido / sorprendida","surprised"],["asustado / asustada","scared"],["avergonzado / avergonzada","embarrassed"],["orgulloso / orgullosa","proud"],["ponerse contento","to become happy"],["pasar miedo","to be scared"],["llevarse un susto","to get a fright"],["¡qué alegría!","how wonderful!"],["¡qué vergüenza!","how embarrassing!"]] }
  ],
  phrases: [
    ["Mi padre condujo toda la noche.", "My father drove all night.", 1],
    ["¿Te acuerdas de dónde estabas en el 2000?", "Do you remember where you were in 2000?", 1],
    ["Me trajeron un regalo de Japón.", "They brought me a present from Japan.", 1],
    ["Era domingo y hacía un sol precioso.", "It was Sunday and the sun was shining beautifully.", 2],
    ["De repente, apareció mi exnovio.", "Suddenly, my ex-boyfriend appeared.", 2],
    ["Al final todo salió bien.", "In the end everything turned out fine.", 2],
    ["Estaba duchándome cuando sonó el timbre.", "I was having a shower when the doorbell rang.", 3],
    ["Me puse muy nerviosa y no pude hablar.", "I got very nervous and couldn't speak.", 3],
    ["¡Qué susto! ¿Y qué pasó después?", "What a fright! And what happened next?", 3]
  ],
  ex: [
    { type: "mc", q: "[[Ellos ___ el coche toda la noche.]] (conducir)", opts: ["condujeron", "conducieron", "condujieron", "conducían"], a: 0, why: "-j- verbs: condujeron." },
    { type: "mc", q: "[[___ las diez cuando llegó Ana.]]", opts: ["Eran", "Fueron", "Son", "Fue"], a: 0, why: "Time in a story = background: imperfecto." },
    { type: "mc", q: "[[Estaba cocinando cuando ___ el teléfono.]]", opts: ["sonó", "sonaba", "suena", "ha sonado"], a: 0, why: "The interruption: indefinido." },
    { type: "fill", q: "[[Mis amigos me ___ (traer) flores.]]", a: ["trajeron"], why: "traer → trajeron." },
    { type: "fill", q: "[[De ___, se fue la luz.]] (suddenly)", a: ["repente"], why: "de repente = suddenly." },
    { type: "fill", q: "[[Cuando vi la nota, me ___ muy contenta.]] (ponerse)", a: ["puse"], why: "ponerse, yo, indefinido → me puse." }
  ],
  listen: [
    { c: 1, mode: "choose", es: "En 1992 se celebraron los Juegos Olímpicos de Barcelona.", en: "In 1992 the Barcelona Olympic Games took place." },
    { c: 2, mode: "choose", es: "Hacía frío y no había nadie en la calle.", en: "It was cold and there was nobody in the street." },
    { c: 3, mode: "choose", es: "Estábamos cenando cuando se fue la luz.", en: "We were having dinner when the power went off." },
    { c: 1, mode: "write", es: "No me acuerdo de aquel día.", en: "I don't remember that day." },
    { c: 2, mode: "write", es: "De repente, empezó a llover.", en: "Suddenly, it started to rain." },
    { c: 3, mode: "write", es: "Me puse muy nervioso.", en: "I got very nervous." }
  ],
  talk: [
    { c: 1, q: "¿Te acuerdas de un acontecimiento histórico? ¿Dónde estabas?", qen: "Do you remember a historical event? Where were you?", model: "Me acuerdo de la final del Mundial de 2010. Estaba en casa de mis primos.", men: "I remember the 2010 World Cup final. I was at my cousins' house." },
    { c: 2, q: "Cuenta un día especial de tu vida. ¿Cómo era el lugar? ¿Qué pasó?", qen: "Tell us about a special day in your life. What was the place like? What happened?", model: "Era mi graduación. Hacía mucho calor y estaba toda mi familia. Al final, mi padre lloró.", men: "It was my graduation. It was very hot and all my family was there. In the end, my father cried." },
    { c: 3, q: "¿Cuándo pasaste mucho miedo o te llevaste un susto?", qen: "When were you very scared or did you get a fright?", model: "Una noche estaba durmiendo y de repente oí un ruido en la cocina. ¡Era mi gato!", men: "One night I was sleeping and suddenly I heard a noise in the kitchen. It was my cat!" }
  ],
  practice: [
    /* Lesson 1 · Más verbos irregulares */
    { l: 1, type: "fill", t: "Irregular verbs", i: "Write the pretérito indefinido.", items: [
      "¿Qué te ___ (traer, ellos) de Cuba?|trajeron", "Yo ___ (conducir) diez horas sin parar.|conduje", "Ayer ___ (andar, nosotros) quince kilómetros.|anduvimos", "Mi abuelo me ___ (dar) un consejo.|dio",
      "Ella se ___ (sentir) muy sola en París.|sintió", "Los romanos ___ (construir) este puente.|construyeron", "¿Qué te ___ (decir, ellos)?|dijeron", "Nosotros no ___ (poder) dormir.|pudimos"] },
    { l: 1, type: "match", t: "Events and memories", i: "Connect each word with its meaning.", items: [
      ["el acontecimiento", "event"], ["la noticia", "news item"], ["acordarse de", "to remember"], ["olvidar", "to forget"], ["inolvidable", "unforgettable"], ["la anécdota", "anecdote"], ["celebrarse", "to take place"], ["el Mundial", "the World Cup"]] },
    { l: 1, type: "mc", t: "Do you remember?", items: [
      ["[[¿Te ___ de tu primer día de colegio?]]", ["acuerdas", "acordas", "recuerdas"], 0],
      ["[[No ___ acuerdo de su nombre.]]", ["me", "te", "se"], 0],
      ["[[En 1969 el hombre ___ a la Luna.]]", ["llegó", "llegaba", "ha llegado"], 0],
      ["[[Mis padres me ___ una bici por mi cumpleaños.]] (dar)", ["dieron", "dio", "daron"], 0],
      ["[[¿___ el regalo?]] (traer, tú)", ["Trajiste", "Trajistes", "Traíste"], 0],
      ["[[El Muro de Berlín ___ en 1989.]]", ["cayó", "caía", "cae"], 0]] },
    /* Lesson 2 · Indefinido e imperfecto */
    { l: 2, type: "fill", t: "Events or circumstances?", i: "Write the indefinido or the imperfecto.", items: [
      "___ (ser) las ocho de la mañana.|eran", "___ (hacer) mucho frío.|hacía", "Yo ___ (salir) de casa con prisa.|salí", "En la calle ___ (haber) mucha nieve.|había",
      "De repente, ___ (ver, yo) a un hombre en el suelo.|vi", "El hombre ___ (estar) muy pálido.|estaba", "Yo ___ (llamar) a una ambulancia.|llamé", "Al final, el hombre ___ (estar) bien.|estuvo~estaba"] },
    { l: 2, type: "mc", t: "Telling a story", items: [
      ["Suddenly:", ["de repente", "al final", "mientras"], 0],
      ["[[___ yo dormía, mi hermano veía la tele.]] (while)", ["Mientras", "De pronto", "Entonces"], 0],
      ["[[Perdí las llaves, pero ___ un vecino tenía otras.]] (luckily)", ["por suerte", "por desgracia", "de repente"], 0],
      ["[[Cuando llegamos, la casa ___ vacía.]]", ["estaba", "estuvo", "está"], 0],
      ["[[Ayer ___ a mi profesora en el metro.]]", ["veía", "vi", "he visto"], 1],
      ["[[Cuando llegué, todos ___ bailando.]]", ["estaban", "estuvieron", "están"], 0]] },
    { l: 2, type: "order", t: "Make sentences", i: "Tap the words in the right order.", items: [
      "Era sábado y hacía mucho sol.", "De repente empezó a llover.", "Había mucha gente en la plaza.", "Al final todo salió bien.", "Aquel día me levanté muy temprano."] },
    /* Lesson 3 · Contar anécdotas y emociones */
    { l: 3, type: "fill", t: "estaba + gerundio", i: "Write estaba + gerundio or the indefinido.", items: [
      "Yo ___ ___ (dormir) cuando sonó el teléfono.|estaba|durmiendo", "Nosotros ___ ___ (cenar) cuando se fue la luz.|estábamos|cenando", "¿Qué ___ ___ (hacer) tú cuando te llamé?|estabas|haciendo",
      "Mi madre estaba leyendo cuando ___ (llegar, yo).|llegué", "Ellos estaban jugando cuando ___ (empezar) la tormenta.|empezó"] },
    { l: 3, type: "match", t: "Emotions", i: "Connect each word with its meaning.", items: [
      ["emocionado", "moved, excited"], ["sorprendido", "surprised"], ["asustado", "scared"], ["avergonzado", "embarrassed"], ["orgulloso", "proud"], ["pasar miedo", "to be scared"], ["llevarse un susto", "to get a fright"], ["¡qué alegría!", "how wonderful!"]] },
    { l: 3, type: "mc", t: "Reacting", items: [
      ["Your friend fell over in front of the whole class:", ["¡Qué vergüenza!", "¡Qué alegría!", "¡Qué suerte!"], 0],
      ["Your friend won a trip to Mexico:", ["¡Qué susto!", "¡Qué suerte!", "¡Qué pena!"], 1],
      ["[[Cuando me dieron el premio me ___ a llorar.]]", ["puse", "ponía", "pongo"], 0],
      ["[[Me ___ fatal después del examen.]] (I felt)", ["sentí", "sentó", "sintí"], 0],
      ["To ask for more of the story:", ["¿Y qué pasó?", "¿Qué tal?", "¿Cuánto es?"], 0],
      ["[[Fue un viaje ___: nunca lo voy a olvidar.]]", ["inolvidable", "olvidado", "aburrido"], 0]] },
    /* Lesson 4 · Repaso */
    { l: 4, type: "tf", t: "Reading: «La boda de mi hermana»", text: "La boda de mi hermana fue el día más especial del año pasado. Era junio y hacía un tiempo perfecto. La ceremonia era en un jardín precioso, al lado del mar.\nYo estaba muy nerviosa porque tenía que leer un poema. Cuando empecé a leer, de repente, el micrófono dejó de funcionar. ¡Qué vergüenza! Entonces mi primo Álvaro me trajo otro micrófono y pude terminar.\nAl final, todo el mundo aplaudió y mi hermana se puso a llorar. Me sentí muy orgullosa. Fue un día inolvidable.", items: [
      ["La boda fue en invierno.", false], ["La ceremonia era cerca del mar.", true], ["La narradora tenía que cantar una canción.", false], ["El micrófono dejó de funcionar.", true], ["Álvaro le dio otro micrófono.", true], ["La hermana se enfadó.", false]] },
    { l: 4, type: "fill", t: "Mixed review", i: "Write one word in each blank.", items: [
      "Mis padres me ___ (traer) un regalo.|trajeron", "___ (ser) las once de la noche.|eran", "Estaba ___ (ducharse) cuando llamaron a la puerta.|duchándome", "De ___, apareció un perro enorme.|repente~pronto",
      "Me ___ un susto terrible. (llevarse, yo)|llevé", "Al ___ encontramos el hotel.|final", "¿Te ___ de aquel verano?|acuerdas", "Me ___ muy contento. (ponerse, yo)|puse"] },
    { l: 4, type: "order", t: "Make sentences", i: "Tap the words in the right order.", items: [
      "Estaba durmiendo cuando sonó el teléfono.", "Era de noche y no había nadie.", "Me puse muy nerviosa.", "¿Te acuerdas de aquel viaje?", "Fue el mejor día de mi vida."] }
  ],
  exam: [
    { type: "match", t: "Vocabulary", i: "Connect the words.", items: [
      ["de repente", "suddenly"], ["mientras", "while"], ["por suerte", "luckily"], ["acordarse de", "to remember"], ["el acontecimiento", "event"], ["orgulloso", "proud"], ["asustado", "scared"], ["inolvidable", "unforgettable"]] },
    { type: "mc", t: "Choose the answer", items: [
      ["[[El año pasado ___ por todo el país.]] (conducir, yo)", ["conduje", "conducí", "condujé"], 0],
      ["[[¿Quién ___ la tarta?]] (traer)", ["trajo", "traió", "trajó"], 0],
      ["[[Cuando salí de casa, ___ mucho calor.]]", ["hacía", "hizo un", "hace"], 0],
      ["[[Mientras ___ la cena, mi hijo hacía los deberes.]]", ["preparaba", "preparé", "preparo"], 0],
      ["[[Estábamos viendo una película cuando ___ el timbre.]]", ["sonó", "sonaba", "suena"], 0],
      ["[[¿Qué ___ haciendo cuando te llamé?]]", ["estabas", "estuviste", "estás"], 0],
      ["[[Cuando lo supe, me ___ muy triste.]]", ["puse", "ponía", "pongo"], 0],
      ["Reaction to a frightening story:", ["¡Qué susto!", "¡Qué rico!", "¡Qué bonito!"], 0]] },
    { type: "fill", t: "Past tenses", i: "Write the indefinido or the imperfecto.", items: [
      "Los vecinos ___ (construir) una piscina.|construyeron", "El camarero nos ___ (dar) la cuenta.|dio", "Ayer ___ (andar, yo) por la playa.|anduve", "Mi hermana se ___ (sentir) mal en el avión.|sintió", "Cuando yo ___ (ser) pequeña, ___ (tener) un gato.|era|tenía",
      "___ (estar, nosotros) en la playa cuando ___ (empezar) la tormenta.|estábamos|empezó", "Aquella noche no ___ (haber) luna.|había", "Mis amigos ___ (venir) a verme al hospital.|vinieron"] },
    { type: "fill", t: "Stories and feelings", i: "Write one word in each blank.", items: [
      "Yo estaba ___ (dormir) cuando sonó la alarma.|durmiendo", "De ___, se abrió la puerta.|repente~pronto", "En ese ___, llegó la policía.|momento", "Por ___, nadie se hizo daño.|suerte",
      "¿Te ___ de tu primer beso?|acuerdas", "Pasé mucho ___ en la montaña.|miedo", "Me llevé un ___ enorme.|susto", "Fue un viaje ___. (unforgettable)|inolvidable"] },
    { type: "tf", t: "Reading: «Una noche en el aeropuerto»", text: "Hace dos años volvía de Tailandia con mi novio. Era diciembre y estábamos en el aeropuerto de Estambul esperando nuestro avión a Madrid.\nDe repente, empezó a nevar muchísimo y cancelaron todos los vuelos. Había miles de personas en el aeropuerto y no había hoteles libres.\nPasamos la noche en el suelo, al lado de una familia argentina. Ellos tenían comida y nos dieron bocadillos. Mientras los niños dormían, estuvimos hablando y riendo hasta las cuatro de la mañana.\nAl día siguiente, por fin, salió nuestro avión. Fue una noche horrible, pero también inolvidable: todavía somos amigos de aquella familia.", items: [
      ["Volvían de Tailandia.", true], ["Era verano.", false], ["Cancelaron los vuelos por la nieve.", true], ["Durmieron en un hotel.", false], ["La familia argentina les dio comida.", true], ["Ya no tienen contacto con la familia.", false]] },
    { type: "order", pts: 2, t: "Build sentences", i: "Put the words in order.", items: [
      "Estaba cocinando cuando llegó mi madre.", "Era invierno y hacía mucho frío.", "De repente se fue la luz.", "Me puse muy contenta con la noticia.", "¿Te acuerdas de aquel concierto?"] }
  ]
});
