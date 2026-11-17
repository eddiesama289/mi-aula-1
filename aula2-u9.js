/* Aula Plus 2 · Unidad 9 «Antes y ahora». Original material. Format: see aula2.js. */
A2({
  n: 9, es: "Antes y ahora", en: "Then and now",
  lessons: ["El pretérito imperfecto", "Ya no y todavía", "Antes y ahora: opinar y debatir"],
  goals: ["Describe habits, customs and situations in the past with the pretérito imperfecto", "Talk about the stages of your life: de pequeño, de joven…", "Say what has changed and what hasn't: ya no, todavía", "Compare the past and the present with time markers", "Give your opinion, agree and disagree in a debate"],
  grammar: [
    { c: 1, t: "The pretérito imperfecto", body: `
      <div class="tbl-wrap"><table><tr><th></th><th>jugar</th><th>tener</th><th>vivir</th></tr>
      <tr><td>yo</td><td>[[jugaba]]</td><td>[[tenía]]</td><td>[[vivía]]</td></tr>
      <tr><td>tú</td><td>[[jugabas]]</td><td>[[tenías]]</td><td>[[vivías]]</td></tr>
      <tr><td>él / ella / usted</td><td>[[jugaba]]</td><td>[[tenía]]</td><td>[[vivía]]</td></tr>
      <tr><td>nosotros/as</td><td>[[jugábamos]]</td><td>[[teníamos]]</td><td>[[vivíamos]]</td></tr>
      <tr><td>vosotros/as</td><td>[[jugabais]]</td><td>[[teníais]]</td><td>[[vivíais]]</td></tr>
      <tr><td>ellos / ellas / ustedes</td><td>[[jugaban]]</td><td>[[tenían]]</td><td>[[vivían]]</td></tr></table></div>
      <p>Only three irregular verbs: [[ser → era, eras, era, éramos, erais, eran]] · [[ir → iba, ibas, iba, íbamos, ibais, iban]] · [[ver → veía, veías…]]</p>
      <p class="tip">yo and él have the same form, so add the subject if it is not clear: [[Yo jugaba y él leía.]]</p>` },
    { c: 1, t: "When to use the imperfecto", body: `
      <p>Habits in the past: [[De pequeño iba al colegio andando.]] [[Los veranos los pasábamos en el pueblo.]]</p>
      <p>Describing people, places and situations: [[Mi abuelo era muy alto.]] [[La casa tenía un patio.]] [[No había internet.]]</p>
      <p>[[hay → había]]: [[Antes había muchos cines en el centro.]]</p>` },
    { c: 1, t: "Stages of life", body: `
      <p>[[de pequeño/a]] · [[de niño/a]] (as a child) · [[de joven]] · [[de mayor]] · [[de adolescente]]</p>
      <p>[[cuando era pequeño]] · [[cuando tenía diez años]] · [[cuando vivía en Quito]]</p>
      <p>[[la infancia]] → [[la adolescencia]] → [[la juventud]] → [[la edad adulta]] → [[la vejez]]</p>` },
    { c: 2, t: "ya no and todavía", body: `
      <p>[[ya no]] = not any more: [[Antes fumaba, pero ya no fumo.]] [[Ya no vivo con mis padres.]]</p>
      <p>[[todavía]] / [[aún]] = still: [[Todavía juego al fútbol con mis amigos del colegio.]]</p>
      <p>[[todavía no]] = not yet (something you expect to happen): [[Todavía no tengo coche.]]</p>
      <p>[[seguir]] + gerundio = to still do: [[Sigo viviendo en el mismo barrio.]]</p>` },
    { c: 3, t: "Time markers: then and now", body: `
      <div class="tbl-wrap"><table><tr><th>The past</th><th>The present</th></tr>
      <tr><td>[[antes]] · [[en aquella época]] · [[en aquellos tiempos]] · [[hace cincuenta años]] · [[en los años setenta]] · [[en el siglo XIX]]</td><td>[[ahora]] · [[hoy en día]] · [[actualmente]] · [[en la actualidad]] · [[ya no]]</td></tr></table></div>
      <p>[[Antes la gente escribía cartas; hoy en día mandamos mensajes.]]</p>` },
    { c: 3, t: "Giving opinions, agreeing and disagreeing", body: `
      <p>Opinion: [[Yo creo que…]] · [[Pienso que…]] · [[En mi opinión…]] · [[Para mí…]]</p>
      <p>Agree: [[Estoy de acuerdo (contigo).]] · [[Tienes razón.]] · [[Es verdad.]]</p>
      <p>Disagree: [[No estoy de acuerdo.]] · [[Yo no lo veo así.]] · [[Sí, pero…]] · [[Depende.]]</p>
      <p>Arguments: [[Por un lado… por otro…]] · [[además]] · [[en cambio]] (on the other hand)</p>` }
  ],
  vocab: [
    { c: 1, g: "Stages of life", items: [["la infancia","childhood"],["la adolescencia","adolescence"],["la juventud","youth"],["la edad adulta","adulthood"],["la vejez","old age"],["de pequeño / de pequeña","as a child"],["de joven","when young"],["crecer","to grow up"],["los recuerdos","memories"]] },
    { c: 1, g: "Childhood", items: [["el colegio","school"],["el recreo","break time"],["el patio","playground, courtyard"],["jugar a la pelota","to play ball"],["el juguete","toy"],["los dibujos animados","cartoons"],["el pueblo","village, hometown"],["portarse bien / mal","to behave well / badly"]] },
    { c: 2, g: "Changes", items: [["ya no","not any more"],["todavía","still"],["aún","still"],["seguir + gerundio","to keep doing"],["dejar de + infinitivo","to stop doing"],["cambiar","to change"],["mejorar","to improve"],["empeorar","to get worse"]] },
    { c: 3, g: "History and society", items: [["la prehistoria","prehistory"],["la Edad Media","the Middle Ages"],["el siglo","century"],["la época","era, period"],["el invento","invention"],["el descubrimiento","discovery"],["la sociedad","society"],["la tecnología","technology"],["la imprenta","printing press"],["la vacuna","vaccine"]] },
    { c: 3, g: "Debating", items: [["en mi opinión","in my opinion"],["estar de acuerdo","to agree"],["tener razón","to be right"],["depende","it depends"],["en cambio","on the other hand"],["hoy en día","nowadays"],["actualmente","currently"],["en aquella época","at that time"]] }
  ],
  phrases: [
    ["De pequeño vivía en un pueblo de Asturias.", "As a child I lived in a village in Asturias.", 1],
    ["Todos los veranos íbamos a la playa con mis abuelos.", "Every summer we went to the beach with my grandparents.", 1],
    ["Mi abuela era maestra y tenía mucha paciencia.", "My grandmother was a teacher and was very patient.", 1],
    ["Antes jugaba al tenis, pero ya no juego.", "I used to play tennis, but I don't any more.", 2],
    ["Todavía hablo con mis amigos del colegio.", "I still talk to my school friends.", 2],
    ["Sigo viviendo en el mismo barrio.", "I'm still living in the same neighbourhood.", 2],
    ["Hace cincuenta años no había teléfonos móviles.", "Fifty years ago there were no mobile phones.", 3],
    ["Hoy en día casi todo el mundo tiene internet.", "Nowadays almost everyone has the internet.", 3],
    ["Yo creo que antes la vida era más tranquila. — No estoy de acuerdo.", "I think life used to be calmer. — I don't agree.", 3]
  ],
  ex: [
    { type: "mc", q: "[[De niña yo ___ en Bogotá.]]", opts: ["vivía", "viví", "vivo", "vivió"], a: 0, why: "Past habit / situation: imperfecto." },
    { type: "mc", q: "[[Cuando éramos pequeños ___ mucho a la playa.]] (ir)", opts: ["íbamos", "ibamos", "fuimos", "vamos"], a: 0, why: "ir, nosotros, imperfecto → íbamos (with accent)." },
    { type: "mc", q: "[[Antes fumaba, pero ___ fumo.]]", opts: ["ya no", "todavía", "aún", "ya"], a: 0, why: "Not any more: ya no." },
    { type: "fill", q: "[[Mi abuelo ___ (ser) muy simpático.]]", a: ["era"], why: "ser → era." },
    { type: "fill", q: "[[Antes ___ (haber) más tiendas pequeñas.]]", a: ["había"], why: "hay → había." },
    { type: "fill", q: "[[Hoy en ___ todos tenemos móvil.]]", a: ["día"], why: "hoy en día = nowadays." }
  ],
  listen: [
    { c: 1, mode: "choose", es: "Cuando era pequeño jugaba en la calle.", en: "When I was little I used to play in the street." },
    { c: 2, mode: "choose", es: "Ya no vivo con mis padres.", en: "I don't live with my parents any more." },
    { c: 3, mode: "choose", es: "Antes no había ordenadores en las casas.", en: "Before, there were no computers in homes." },
    { c: 1, mode: "write", es: "Mi madre trabajaba en un hospital.", en: "My mother worked in a hospital." },
    { c: 2, mode: "write", es: "Todavía tengo mis juguetes de niño.", en: "I still have my toys from when I was a child." },
    { c: 3, mode: "write", es: "Yo creo que tienes razón.", en: "I think you're right." }
  ],
  talk: [
    { c: 1, q: "¿Cómo eras de pequeño o de pequeña?", qen: "What were you like as a child?", model: "Era muy tímido y me encantaba leer. Vivía con mis padres en un piso pequeño.", men: "I was very shy and I loved reading. I lived with my parents in a small flat." },
    { c: 2, q: "¿Qué cosas ya no haces? ¿Qué cosas todavía haces?", qen: "What things don't you do any more? What do you still do?", model: "Ya no juego a los videojuegos, pero todavía veo dibujos animados.", men: "I don't play video games any more, but I still watch cartoons." },
    { c: 3, q: "¿La vida era mejor antes o ahora?", qen: "Was life better before or now?", model: "En mi opinión, ahora es mejor. Antes no había tantas oportunidades.", men: "In my opinion, it's better now. Before, there weren't so many opportunities." }
  ],
  practice: [
    /* Lesson 1 · El pretérito imperfecto */
    { l: 1, type: "fill", t: "The imperfecto", i: "Write the pretérito imperfecto.", items: [
      "De niño yo ___ (jugar) al fútbol.|jugaba", "Mis abuelos ___ (vivir) en el campo.|vivían", "¿Tú ___ (tener) perro de pequeño?|tenías", "Nosotros ___ (ir) al colegio en autobús.|íbamos",
      "Mi padre ___ (ser) cartero.|era", "Antes yo ___ (ver) mucho la tele.|veía", "¿Vosotros ___ (comer) en el colegio?|comíais", "En mi pueblo no ___ (haber) cine.|había"] },
    { l: 1, type: "match", t: "Life and childhood", i: "Connect each word with its meaning.", items: [
      ["la infancia", "childhood"], ["la juventud", "youth"], ["la vejez", "old age"], ["el recreo", "break time"], ["el juguete", "toy"], ["los dibujos animados", "cartoons"], ["portarse mal", "to behave badly"], ["los recuerdos", "memories"]] },
    { l: 1, type: "mc", t: "Imperfecto or indefinido?", items: [
      ["[[De pequeña ___ todos los días al parque.]]", ["iba", "fui", "voy"], 0],
      ["[[En 2010 ___ a Londres.]] (one trip)", ["iba", "fui", "voy"], 1],
      ["[[Mi colegio ___ un patio enorme.]]", ["tenía", "tuvo", "tiene ahora"], 0],
      ["[[Cuando ___ diez años, me encantaban los cómics.]]", ["tenía", "tuve", "tengo"], 0],
      ["[[Nosotros ___ en un piso muy pequeño.]] (vivir)", ["vivíamos", "vivíais", "vivían"], 0],
      ["[[Ellos ___ muy buenos alumnos.]] (ser)", ["eran", "fueron", "erais"], 0]] },
    /* Lesson 2 · Ya no y todavía */
    { l: 2, type: "fill", t: "ya no, todavía, seguir", i: "Write the missing word.", items: [
      "Antes vivía en Lima, pero ___ no vivo allí.|ya", "___ juego con mis amigos del colegio. (still)|todavía~aún", "Sigo ___ (trabajar) en la misma empresa.|trabajando", "Mi abuelo dejó ___ fumar hace años.|de",
      "Ya ___ como carne: soy vegetariano.|no", "Mi hermana ___ estudiando en la universidad. (sigue)|sigue", "___ no tengo carné de conducir. (not yet)|todavía", "Antes mi barrio era peligroso, pero ha ___. (improved)|mejorado"] },
    { l: 2, type: "mc", t: "Changes", items: [
      ["I don't smoke any more:", ["Ya no fumo.", "Todavía fumo.", "No fumo todavía."], 0],
      ["I still live with my parents:", ["Ya no vivo con mis padres.", "Todavía vivo con mis padres.", "Ya vivo con mis padres."], 1],
      ["[[Sigo ___ en el mismo piso.]]", ["viviendo", "vivir", "vivo"], 0],
      ["[[Dejé ___ beber café.]]", ["de", "a", "–"], 0],
      ["The opposite of mejorar:", ["empeorar", "cambiar", "crecer"], 0],
      ["[[¿Todavía ___ el piano? — No, ya no.]]", ["tocas", "tocabas", "tocaste"], 0]] },
    { l: 2, type: "order", t: "Then and now", i: "Tap the words in the right order.", items: [
      "Antes jugaba al baloncesto, pero ya no.", "Todavía vivo en el pueblo de mis padres.", "Sigo trabajando en el mismo hospital.", "De pequeña tenía el pelo muy largo.", "Mi padre dejó de fumar hace diez años."] },
    /* Lesson 3 · Antes y ahora: opinar y debatir */
    { l: 3, type: "fill", t: "Then and now", i: "Write the verb in the imperfecto or the present.", items: [
      "Antes la gente ___ (escribir) cartas.|escribía", "Hoy en día ___ (mandar, nosotros) mensajes.|mandamos", "Hace cien años no ___ (haber) aviones comerciales.|había", "Actualmente casi todos ___ (tener) móvil.|tienen",
      "En aquella época las mujeres no ___ (poder) votar.|podían", "Ahora la gente ___ (vivir) más años.|vive", "En los años ochenta mis padres ___ (ir) a la discoteca.|iban", "En la Edad Media la gente no ___ (saber) leer.|sabía"] },
    { l: 3, type: "match", t: "History and debate", i: "Connect each expression with its meaning.", items: [
      ["el siglo", "century"], ["el invento", "invention"], ["la imprenta", "printing press"], ["la vacuna", "vaccine"], ["estar de acuerdo", "to agree"], ["tener razón", "to be right"], ["en cambio", "on the other hand"], ["hoy en día", "nowadays"]] },
    { l: 3, type: "mc", t: "Debating", items: [
      ["To give your opinion:", ["En mi opinión…", "Tienes razón.", "Depende."], 0],
      ["To agree:", ["Yo no lo veo así.", "Estoy de acuerdo contigo.", "Sí, pero…"], 1],
      ["To disagree politely:", ["Sí, pero no es tan fácil.", "Es verdad.", "Tienes razón."], 0],
      ["[[Yo creo ___ antes la vida era más sencilla.]]", ["que", "de", "a"], 0],
      ["[[Antes había pocos coches. Hoy, ___, hay atascos en todas partes.]]", ["en cambio", "además", "por eso"], 0],
      ["The most important discovery:", ["el descubrimiento más importante", "el descubrimiento importantísimo más", "el más descubrimiento importante"], 0]] },
    /* Lesson 4 · Repaso */
    { l: 4, type: "tf", t: "Reading: «Mi abuela Rosario»", text: "Mi abuela Rosario nació en 1945 en un pueblo de Extremadura. De pequeña no iba al colegio todos los días porque tenía que ayudar a sus padres en el campo.\nEn su casa no había agua caliente ni televisión. Por las noches, toda la familia escuchaba la radio. Los domingos iban a misa y después las chicas paseaban por la plaza.\nA los veinte años se fue a vivir a Madrid. Ahora tiene ochenta años y todavía vive en Madrid. Ya no trabaja, pero sigue siendo muy activa: hace yoga y usa el móvil mejor que yo.\nElla dice que antes la vida era más dura, pero la gente era más feliz. Yo no estoy de acuerdo.", items: [
      ["Rosario iba al colegio todos los días.", false], ["En su casa no había televisión.", true], ["La familia escuchaba la radio por la noche.", true], ["Todavía vive en su pueblo.", false], ["Rosario sigue siendo muy activa.", true], ["El narrador está de acuerdo con su abuela.", false]] },
    { l: 4, type: "fill", t: "Mixed review", i: "Write one word in each blank.", items: [
      "De pequeño yo ___ (ser) muy travieso.|era", "Mis amigos y yo ___ (jugar) en la calle.|jugábamos", "Antes ___ (haber) un mercado aquí.|había", "Ya ___ voy al gimnasio.|no",
      "___ tengo la bici de cuando era niño. (still)|todavía~aún", "Hoy en ___ todo es más rápido.|día", "Estoy de ___ contigo.|acuerdo", "Tienes ___. (you're right)|razón"] },
    { l: 4, type: "order", t: "Make sentences", i: "Tap the words in the right order.", items: [
      "Cuando era pequeño vivía en el campo.", "Antes no había internet en las casas.", "Ya no trabajo en esa empresa.", "Hoy en día la gente vive más años.", "No estoy de acuerdo contigo."] }
  ],
  exam: [
    { type: "match", t: "Vocabulary", i: "Connect the words.", items: [
      ["la infancia", "childhood"], ["la vejez", "old age"], ["el juguete", "toy"], ["el invento", "invention"], ["la época", "era"], ["empeorar", "to get worse"], ["hoy en día", "nowadays"], ["tener razón", "to be right"]] },
    { type: "mc", t: "Choose the answer", items: [
      ["[[De niño, yo ___ todos los veranos en la playa.]]", ["estaba", "estabas", "estábamos"], 0],
      ["[[Mis abuelos ___ muy trabajadores.]]", ["eran", "era", "éramos"], 0],
      ["[[Nosotros ___ al cine los domingos.]] (ir)", ["íbamos", "ibámos", "ibamos"], 0],
      ["[[Antes ___ muchos árboles aquí.]]", ["había", "habían", "hay"], 0],
      ["[[___ juego al tenis: me duele la rodilla.]]", ["Ya no", "Todavía", "Ya"], 0],
      ["[[Sigo ___ español.]]", ["estudiando", "estudiar", "estudio"], 0],
      ["To agree:", ["No lo veo así.", "Tienes razón.", "Depende."], 1],
      ["[[___ la gente viaja mucho más.]] (nowadays)", ["En aquella época", "Hoy en día", "Antes"], 1]] },
    { type: "fill", t: "The imperfecto", i: "Write the pretérito imperfecto.", items: [
      "Cuando era niña, yo ___ (vivir) en Quito.|vivía", "Mi madre ___ (cocinar) muy bien.|cocinaba", "Mis hermanos y yo ___ (pelearse) mucho.|nos peleábamos", "Antes tú ___ (llevar) gafas, ¿no?|llevabas", "En mi barrio ___ (haber) un cine.|había",
      "Mis abuelos ___ (ser) muy simpáticos.|eran", "Yo ___ (ver) los dibujos animados cada tarde.|veía", "¿Vosotros ___ (ir) al colegio andando?|ibais", "La casa ___ (tener) un jardín pequeño.|tenía", "Ellos ___ (trabajar) en una fábrica.|trabajaban"] },
    { type: "fill", t: "Changes and opinions", i: "Write one word in each blank.", items: [
      "Antes comía carne, pero ya ___ como.|no", "Mi hermano ___ viviendo en Londres. (still)|sigue", "Dejé ___ ver la tele hace un año.|de", "___ tengo amigos del colegio. (still)|todavía~aún",
      "En ___ opinión, la vida es más fácil ahora.|mi", "Yo ___ que tienes razón. (believe)|creo", "No estoy ___ acuerdo.|de", "Antes había poco tráfico; hoy, en ___, hay mucho.|cambio"] },
    { type: "tf", t: "Reading: «El descubrimiento que cambió mi vida»", text: "Me llamo Héctor y tengo setenta y dos años. Cuando era joven trabajaba en una oficina y todo se hacía con papel y máquina de escribir. Para hablar con mi familia de Argentina, les escribía cartas que tardaban un mes en llegar.\nYo creo que el descubrimiento más importante de mi vida es internet. Ahora hablo con mis nietos por videollamada todas las semanas.\nMi mujer no está de acuerdo: para ella, la vacuna contra la polio fue más importante. De pequeña, su mejor amiga tuvo esa enfermedad.", items: [
      ["De joven Héctor trabajaba en una oficina.", true], ["Usaba un ordenador en el trabajo.", false], ["Las cartas a Argentina tardaban un mes.", true], ["Ahora habla con sus nietos por videollamada.", true], ["Su mujer está de acuerdo con él.", false], ["La amiga de su mujer tuvo polio.", true]] },
    { type: "order", pts: 2, t: "Build sentences", i: "Put the words in order.", items: [
      "De pequeña vivía con mis abuelos.", "Antes no había teléfonos móviles.", "Ya no juego al fútbol los sábados.", "Hoy en día la vida es más rápida.", "Yo creo que tienes razón."] }
  ]
});
