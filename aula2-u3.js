/* Aula Plus 2 · Unidad 3 «Yo soy así». Original material. Format: see aula2.js. */
A2({
  n: 3, es: "Yo soy así", en: "That's what I'm like",
  lessons: ["¿Cómo es?", "¿Quién es quién?", "Relaciones y parecidos"],
  goals: ["Describe what people look like with ser, tener and llevar", "Identify people: este, ese, aquel · el que lleva gafas", "Use verbs with -zc-: conozco, parezco, traduzco", "Talk about relationships: llevarse bien, caer bien, parecerse a", "Describe the ideal partner for someone"],
  grammar: [
    { c: 1, t: "Describing people: ser, tener, llevar", body: `
      <div class="tbl-wrap"><table><tr><th>Verb</th><th>Use</th><th>Examples</th></tr>
      <tr><td>[[ser]]</td><td>what the person is like</td><td>[[Es alto, delgado y moreno.]] [[Es muy guapa.]]</td></tr>
      <tr><td>[[tener]]</td><td>body features</td><td>[[Tiene los ojos verdes.]] [[Tiene el pelo rizado.]] [[Tiene barba.]]</td></tr>
      <tr><td>[[llevar]]</td><td>things you wear or can change</td><td>[[Lleva gafas.]] [[Lleva el pelo corto.]] [[Lleva barba.]]</td></tr></table></div>
      <p class="tip">Both [[tiene barba]] and [[lleva barba]] are correct. With [[el pelo]], use the article: [[Tiene el pelo largo]], not "tiene pelo largo".</p>` },
    { c: 1, t: "Softening a description", body: `
      <p>[[un poco]] + a negative adjective: [[Es un poco bajo.]] (nicer than [[Es bajo.]])</p>
      <p>[[bastante]] (quite), [[muy]] (very): [[Es bastante alta.]] [[Es muy simpático.]]</p>
      <p>[[ni… ni…]] = neither… nor: [[No es ni alto ni bajo.]]</p>` },
    { c: 2, t: "este, ese, aquel", body: `
      <div class="tbl-wrap"><table><tr><th>Distance</th><th>masc.</th><th>fem.</th><th>masc. pl.</th><th>fem. pl.</th></tr>
      <tr><td>here (near me)</td><td>[[este]]</td><td>[[esta]]</td><td>[[estos]]</td><td>[[estas]]</td></tr>
      <tr><td>there (near you)</td><td>[[ese]]</td><td>[[esa]]</td><td>[[esos]]</td><td>[[esas]]</td></tr>
      <tr><td>over there (far from both)</td><td>[[aquel]]</td><td>[[aquella]]</td><td>[[aquellos]]</td><td>[[aquellas]]</td></tr></table></div>
      <p>[[¿Quién es aquella chica?]] They can also stand alone: [[¿Y ese de la foto?]]</p>` },
    { c: 2, t: "el que, la que, los que, las que", body: `
      <p>To point someone out without repeating the noun: article + [[que]] + verb.</p>
      <p>[[¿Quién es Marta? — La que lleva gafas.]] (the one who wears glasses)</p>
      <p>[[¿Cuáles son tus primos? — Los que están al lado de la puerta.]]</p>
      <p class="tip">The article agrees with the person: [[el que]] (a man), [[la que]] (a woman), [[los que]], [[las que]].</p>` },
    { c: 2, t: "Verbs with -zc- in the yo form", body: `
      <p>Verbs ending in -cer and -ducir add a z before c in the yo form only:</p>
      <p>[[conocer → conozco]] · [[parecer → parezco]] · [[traducir → traduzco]] · [[conducir → conduzco]] · [[ofrecer → ofrezco]]</p>
      <p>The rest is regular: [[conoces, conoce, conocemos…]]</p>` },
    { c: 3, t: "Relationships: llevarse, caer, parecerse", body: `
      <p>[[llevarse bien / mal con]] = to get on well / badly with: [[Me llevo muy bien con mi hermana.]] [[Mis padres se llevan fatal.]]</p>
      <p>[[caer bien / mal]] works like [[gustar]]: [[Tu novio me cae muy bien.]] [[Tus amigos me caen bien.]]</p>
      <p>[[parecerse a]] = to look like / be like: [[Me parezco a mi padre.]] [[Nos parecemos mucho.]] [[¿A quién te pareces?]]</p>` }
  ],
  vocab: [
    { c: 1, g: "Body and face", items: [["alto / alta","tall"],["bajo / baja","short"],["delgado / delgada","slim"],["gordo / gorda","fat"],["fuerte","strong, well-built"],["rubio / rubia","blond"],["moreno / morena","dark-haired"],["pelirrojo / pelirroja","red-haired"],["calvo / calva","bald"],["guapo / guapa","good-looking"]] },
    { c: 1, g: "Hair, eyes and more", items: [["el pelo largo / corto","long / short hair"],["el pelo liso","straight hair"],["el pelo rizado","curly hair"],["los ojos azules / verdes / marrones","blue / green / brown eyes"],["la barba","beard"],["el bigote","moustache"],["las gafas","glasses"],["las pecas","freckles"]] },
    { c: 2, g: "Character", items: [["simpático / simpática","nice, friendly"],["antipático / antipática","unfriendly"],["divertido / divertida","fun"],["serio / seria","serious"],["tímido / tímida","shy"],["abierto / abierta","open, outgoing"],["cariñoso / cariñosa","affectionate"],["generoso / generosa","generous"],["inteligente","intelligent"],["trabajador / trabajadora","hard-working"]] },
    { c: 3, g: "Relationships", items: [["el novio / la novia","boyfriend / girlfriend"],["la pareja","partner, couple"],["estar casado","to be married"],["estar separado","to be separated"],["salir con","to go out with"],["enamorarse de","to fall in love with"],["llevarse bien con","to get on well with"],["caer bien","to like (a person)"],["parecerse a","to look like"],["tener cosas en común","to have things in common"]] }
  ],
  phrases: [
    ["Mi hermano es alto y tiene el pelo rizado.", "My brother is tall and has curly hair.", 1],
    ["Lleva gafas y barba.", "He wears glasses and has a beard.", 1],
    ["No es ni alta ni baja.", "She is neither tall nor short.", 1],
    ["¿Quién es aquel chico? — El que lleva la camisa azul.", "Who is that boy? — The one wearing the blue shirt.", 2],
    ["Conozco a mucha gente aquí.", "I know a lot of people here.", 2],
    ["Mi jefa es muy simpática y trabajadora.", "My boss is very nice and hard-working.", 2],
    ["Me parezco mucho a mi madre.", "I look a lot like my mother.", 3],
    ["Me llevo muy bien con mis compañeros.", "I get on very well with my colleagues.", 3],
    ["Tu amigo Pablo me cae genial.", "I really like your friend Pablo.", 3]
  ],
  ex: [
    { type: "mc", q: "[[Mi padre ___ el pelo blanco.]]", opts: ["tiene", "es", "está", "hay"], a: 0, why: "tener + el pelo." },
    { type: "mc", q: "[[¿Quién es Ana? — ___ que lleva el vestido rojo.]]", opts: ["La", "El", "Que", "Lo"], a: 0, why: "Ana is a woman: la que." },
    { type: "mc", q: "[[Tus amigos me ___ muy bien.]]", opts: ["caen", "cae", "llevan", "parecen"], a: 0, why: "caer bien works like gustar: plural subject → caen." },
    { type: "fill", q: "[[Yo ___ (conocer) a tu hermano.]]", a: ["conozco"], why: "conocer, yo → conozco." },
    { type: "fill", q: "[[Me ___ mucho a mi abuela.]] (parecerse)", a: ["parezco"], why: "parecerse, yo → me parezco." },
    { type: "fill", q: "[[¿Quién es ___ señora de allí?]] (that, far)", a: ["aquella"], why: "Far from both speakers, feminine: aquella." }
  ],
  listen: [
    { c: 1, mode: "choose", es: "Es morena y tiene los ojos verdes.", en: "She has dark hair and green eyes." },
    { c: 2, mode: "choose", es: "Mi primo es el que está sentado.", en: "My cousin is the one who is sitting down." },
    { c: 3, mode: "choose", es: "Me llevo fatal con mi vecino.", en: "I get on terribly with my neighbour." },
    { c: 1, mode: "write", es: "Lleva el pelo muy corto.", en: "He wears his hair very short." },
    { c: 2, mode: "write", es: "Esta es mi hermana pequeña.", en: "This is my little sister." },
    { c: 3, mode: "write", es: "Nos parecemos mucho.", en: "We look a lot alike." }
  ],
  talk: [
    { c: 1, q: "¿Cómo es tu mejor amigo físicamente?", qen: "What does your best friend look like?", model: "Es bastante alto, tiene el pelo liso y lleva gafas.", men: "He is quite tall, has straight hair and wears glasses." },
    { c: 2, q: "¿Cómo es tu jefe o tu profesor?", qen: "What is your boss or your teacher like?", model: "Es muy simpática, divertida y un poco seria en clase.", men: "She is very nice, fun and a bit serious in class." },
    { c: 3, q: "¿A quién te pareces de tu familia?", qen: "Who do you look like in your family?", model: "Me parezco a mi padre, pero me llevo mejor con mi madre.", men: "I look like my father, but I get on better with my mother." }
  ],
  practice: [
    /* Lesson 1 · ¿Cómo es? */
    { l: 1, type: "fill", t: "ser, tener or llevar", i: "Write es, tiene or lleva.", items: [
      "Mi madre ___ rubia y muy guapa.|es", "Mi padre ___ los ojos azules.|tiene", "Mi profesor ___ gafas.|lleva", "Ana ___ el pelo largo y rizado.|tiene~lleva",
      "Carlos ___ calvo.|es", "Mi abuelo ___ bigote.|tiene~lleva", "Mi hermana ___ pelirroja y ___ pecas.|es|tiene", "Él no ___ ni alto ni bajo.|es"] },
    { l: 1, type: "match", t: "Physical description", i: "Connect each word with its meaning.", items: [
      ["calvo", "bald"], ["pelirroja", "red-haired"], ["el pelo liso", "straight hair"], ["el pelo rizado", "curly hair"], ["la barba", "beard"], ["el bigote", "moustache"], ["las pecas", "freckles"], ["delgado", "slim"]] },
    { l: 1, type: "mc", t: "Choose the best description", items: [
      ["Nicer way to say someone is short:", ["Es un poco bajo.", "Es muy bajo.", "Es bajísimo."], 0],
      ["[[Tiene ___ pelo castaño.]]", ["el", "un", "–"], 0],
      ["[[Mi hermana es ___.]] (dark-haired)", ["morena", "moreno", "morenas"], 0],
      ["[[Lleva ___ gafas de sol.]]", ["unas", "un", "una"], 0],
      ["[[No es ___ gordo ___ delgado.]]", ["ni / ni", "o / o", "y / y"], 0],
      ["[[Mis primos son ___.]] (blond)", ["rubio", "rubias", "rubios"], 2]] },
    /* Lesson 2 · ¿Quién es quién? */
    { l: 2, type: "fill", t: "este, ese, aquel · el que…", i: "Write the missing word.", items: [
      "___ chico de aquí es mi hermano. (this)|este", "¿Quién es ___ mujer de allí, al fondo? (that, far)|aquella", "¿Te gustan ___ zapatos que llevas? (those, near you)|esos", "¿Quién es Luis? — ___ que lleva barba.|el",
      "¿Cuáles son tus hijas? — ___ que están jugando.|las", "¿Quiénes son tus amigos? — ___ que están en la terraza.|los", "Yo ___ (conocer) a todos los vecinos.|conozco", "Yo ___ (traducir) libros del inglés.|traduzco"] },
    { l: 2, type: "match", t: "Character", i: "Connect each adjective with its meaning.", items: [
      ["simpático", "nice"], ["antipático", "unfriendly"], ["tímido", "shy"], ["abierto", "outgoing"], ["cariñoso", "affectionate"], ["generoso", "generous"], ["trabajador", "hard-working"], ["serio", "serious"]] },
    { l: 2, type: "order", t: "Who is who?", i: "Tap the words in the right order.", items: [
      "¿Quién es aquel señor?", "Mi tía es la que lleva el vestido verde.", "Este es mi compañero de piso.", "Conozco a esa chica de algo.", "Mis padres son los que están sentados."] },
    /* Lesson 3 · Relaciones y parecidos */
    { l: 3, type: "fill", t: "llevarse, caer, parecerse", i: "Write the missing word.", items: [
      "Me ___ muy bien con mi hermano.|llevo", "Mis padres se ___ fatal.|llevan", "Tu novia me ___ muy bien.|cae", "Tus amigos me ___ un poco mal.|caen",
      "Yo me ___ a mi abuelo.|parezco", "Mi hermana y yo nos ___ mucho.|parecemos", "¿A quién te ___ tú?|pareces", "¿Qué tal te ___ con tu jefe?|llevas"] },
    { l: 3, type: "mc", t: "Relationships", items: [
      ["[[Hace dos años que ___ con Marta.]] (I've been going out)", ["salgo", "llevo", "caigo"], 0],
      ["[[Se ___ de su compañera de trabajo.]] (fell in love)", ["enamoró", "llevó", "pareció"], 0],
      ["They don't live together any more: they are", ["casados", "separados", "novios"], 1],
      ["[[A mí tu primo me cae ___.]]", ["bien", "bueno", "bienes"], 0],
      ["[[Tenemos muchas cosas en ___.]]", ["común", "comunes", "juntos"], 0],
      ["[[Mi pareja y yo nos ___ genial.]]", ["llevamos", "caemos", "parecemos a"], 0]] },
    { l: 3, type: "order", t: "Make sentences", i: "Tap the words in the right order.", items: [
      "Me llevo muy bien con mi madre.", "Tu hermano me cae fenomenal.", "Me parezco mucho a mi padre.", "Buscamos una persona divertida y cariñosa.", "Tenemos muchas cosas en común."] },
    /* Lesson 4 · Repaso */
    { l: 4, type: "tf", t: "Reading: «Busco pareja»", text: "Me llamo Bea, tengo treinta y cuatro años y soy enfermera. Soy alta, morena y llevo el pelo corto.\nSoy bastante abierta y muy cariñosa, pero un poco desordenada. Me llevo muy bien con mi familia: me parezco mucho a mi madre, las dos somos muy habladoras.\nBusco a una persona divertida, generosa y trabajadora. Físicamente no tengo preferencias, pero no me gustan las personas muy serias.\nMis amigos dicen que soy la que siempre organiza las fiestas.", items: [
      ["Bea tiene el pelo largo.", false], ["Bea es una persona abierta.", true], ["Se lleva mal con su familia.", false], ["Bea y su madre hablan mucho.", true], ["Busca una pareja seria.", false], ["Bea organiza las fiestas de sus amigos.", true]] },
    { l: 4, type: "fill", t: "Mixed review", i: "Write one word in each blank.", items: [
      "Mi novio ___ el pelo liso y los ojos negros.|tiene", "¿Quién es tu jefa? — La ___ lleva el traje gris.|que", "___ coche de allí es de mi padre. (that, far)|aquel", "Yo ___ (conducir) muy despacio.|conduzco",
      "Mis compañeros me ___ muy bien.|caen", "Mi hermana se ___ a mi padre.|parece", "Mi abuela es un ___ sorda. (a bit)|poco", "Me ___ bien con mis vecinos.|llevo"] },
    { l: 4, type: "order", t: "Make sentences", i: "Tap the words in the right order.", items: [
      "Mi hermana es alta y lleva gafas.", "¿Quién es la chica que está con Pedro?", "No me llevo bien con mi cuñado.", "Este es mi mejor amigo.", "Es una persona muy generosa."] }
  ],
  exam: [
    { type: "match", t: "Vocabulary", i: "Connect the words.", items: [
      ["pelirrojo", "red-haired"], ["el pelo rizado", "curly hair"], ["las gafas", "glasses"], ["cariñoso", "affectionate"], ["tímido", "shy"], ["la pareja", "partner"], ["enamorarse", "to fall in love"], ["parecerse a", "to look like"]] },
    { type: "mc", t: "Choose the answer", items: [
      ["[[Mi hermano ___ muy alto.]]", ["es", "tiene", "lleva"], 0],
      ["[[Mi madre ___ los ojos marrones.]]", ["es", "tiene", "está"], 1],
      ["[[¿Quién es Pedro? — ___ que lleva sombrero.]]", ["La", "El", "Lo"], 1],
      ["[[¿Ves ___ edificio de allí, al fondo?]]", ["este", "aquel", "esta"], 1],
      ["[[Yo no ___ a nadie en esta fiesta.]]", ["conozco", "conoco", "conozo"], 0],
      ["[[Tus padres me ___ muy bien.]]", ["cae", "caen", "caigo"], 1],
      ["[[Mi hermano y yo no nos ___ nada.]]", ["parecemos", "parecen", "parecéis"], 0],
      ["[[Me llevo bien ___ mis compañeros.]]", ["a", "con", "de"], 1]] },
    { type: "fill", t: "Describing people", i: "Write one word in each blank.", items: [
      "Mi abuela ___ el pelo blanco.|tiene", "Mi novio ___ barba y gafas.|lleva~tiene", "Mi hermana no es ni gorda ___ delgada.|ni", "Mis primas son muy ___ (nice).|simpáticas", "Mi jefe es un ___ antipático. (a bit)|poco",
      "Laura es ___ (red-haired).|pelirroja", "Tiene los ___ verdes.|ojos", "Mis hijos son ___ (blond).|rubios", "Tiene el pelo ___ (straight).|liso", "Es una persona muy ___ (hard-working, f).|trabajadora"] },
    { type: "fill", t: "Who and how", i: "Write one word in each blank.", items: [
      "___ es mi novio. (this)|este", "¿Quién es ___ chica que está a tu lado? (that, near you)|esa", "¿Quiénes son tus hermanos? — Los ___ están bailando.|que", "Yo ___ (parecerse) a mi tío.|me parezco",
      "Mi cuñada me ___ fatal.|cae", "Nos ___ muy bien desde el colegio. (llevarse, nosotros)|llevamos", "Yo ___ (ofrecer) clases de guitarra.|ofrezco", "¿Con ___ te llevas mejor?|quién"] },
    { type: "tf", t: "Reading: «Mi familia en una foto»", text: "En esta foto estamos todos en la boda de mi primo. El chico alto que lleva traje negro es mi primo Diego, el novio. La que está a su lado, con el pelo rizado y un vestido blanco, es Clara, su mujer.\nEl señor calvo con bigote es mi tío Ernesto. Es muy divertido y me cae genial.\nAquella mujer rubia del fondo es mi madre. Todos dicen que me parezco mucho a ella.\nMi hermano no está en la foto: se lleva fatal con Diego y no fue a la boda.", items: [
      ["Diego es el novio.", true], ["Clara tiene el pelo liso.", false], ["Ernesto tiene bigote.", true], ["Al narrador no le cae bien su tío.", false], ["El narrador se parece a su madre.", true], ["El hermano fue a la boda.", false]] },
    { type: "order", pts: 2, t: "Build sentences", i: "Put the words in order.", items: [
      "Mi padre tiene los ojos azules.", "¿Quién es aquella chica morena?", "Me llevo muy bien con mi hermana.", "Tu primo me cae muy bien.", "Me parezco mucho a mi abuela."] }
  ]
});
