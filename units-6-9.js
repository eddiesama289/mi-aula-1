/* Units 6 to 9. Loaded after skills.js and before app.js. */
const MORE_UNITS = [
{
  id: 6, es: "Día a día", en: "Day by day",
  goals: ["Tell the time and ask what time something happens", "Talk about your daily routine", "Use reflexive verbs: levantarse, ducharse, acostarse", "Use irregular present verbs: ir, hacer, salir, empezar, volver", "Say how often you do things"],
  grammar: [
    { t: "Telling the time", body: `
      <div class="tbl-wrap"><table><tr><th>Spanish</th><th>English</th></tr>
      <tr><td>[[¿Qué hora es?]]</td><td>What time is it?</td></tr>
      <tr><td>[[Es la una.]]</td><td>It is one o'clock.</td></tr>
      <tr><td>[[Son las dos.]] · [[Son las tres.]]</td><td>It is two o'clock · three o'clock.</td></tr>
      <tr><td>[[Son las tres y cuarto.]]</td><td>It is a quarter past three (3:15).</td></tr>
      <tr><td>[[Son las cuatro y media.]]</td><td>It is half past four (4:30).</td></tr>
      <tr><td>[[Son las cinco menos cuarto.]]</td><td>It is a quarter to five (4:45).</td></tr>
      <tr><td>[[Son las seis y diez.]]</td><td>It is ten past six.</td></tr>
      <tr><td>[[Son las siete menos veinte.]]</td><td>It is twenty to seven.</td></tr>
      <tr><td>[[Es mediodía.]] · [[Es medianoche.]]</td><td>It is noon · midnight.</td></tr></table></div>
      <p class="tip">Use [[es la]] for one o'clock only. For every other hour use [[son las]]. Add minutes with [[y]] (past) or [[menos]] (to).</p>` },
    { t: "What time? At what time?", body: `
      <p>[[¿A qué hora te levantas?]] = At what time do you get up?</p>
      <p>[[Me levanto a las siete.]] = I get up at seven. Use [[a la]] / [[a las]] for the time something happens.</p>
      <p>[[por la mañana]] = in the morning · [[por la tarde]] = in the afternoon · [[por la noche]] = at night</p>
      <p>With a clock time, say [[de la mañana]], [[de la tarde]], [[de la noche]]: [[las ocho de la mañana]].</p>` },
    { t: "Reflexive verbs", body: `
      <p>A reflexive verb has a small word ([[me, te, se...]]) that shows the action is done to yourself. The infinitive ends in -se: [[levantarse]], [[ducharse]], [[acostarse]].</p>
      <div class="tbl-wrap"><table><tr><th>Person</th><th>levantarse</th></tr>
      <tr><td>yo</td><td>[[me levanto]]</td></tr><tr><td>tú</td><td>[[te levantas]]</td></tr><tr><td>él / ella / usted</td><td>[[se levanta]]</td></tr>
      <tr><td>nosotros/as</td><td>[[nos levantamos]]</td></tr><tr><td>vosotros/as</td><td>[[os levantáis]]</td></tr><tr><td>ellos / ellas / ustedes</td><td>[[se levantan]]</td></tr></table></div>
      <p class="tip">The small word goes before the conjugated verb: [[Me ducho por la mañana.]] [[Mi hermano se acuesta tarde.]]</p>` },
    { t: "Irregular verbs in the present", body: `
      <div class="tbl-wrap"><table><tr><th></th><th>empezar (e → ie)</th><th>volver (o → ue)</th><th>ir</th></tr>
      <tr><td>yo</td><td>[[empiezo]]</td><td>[[vuelvo]]</td><td>[[voy]]</td></tr>
      <tr><td>tú</td><td>[[empiezas]]</td><td>[[vuelves]]</td><td>[[vas]]</td></tr>
      <tr><td>él / ella</td><td>[[empieza]]</td><td>[[vuelve]]</td><td>[[va]]</td></tr>
      <tr><td>nosotros/as</td><td>[[empezamos]]</td><td>[[volvemos]]</td><td>[[vamos]]</td></tr>
      <tr><td>vosotros/as</td><td>[[empezáis]]</td><td>[[volvéis]]</td><td>[[vais]]</td></tr>
      <tr><td>ellos / ellas</td><td>[[empiezan]]</td><td>[[vuelven]]</td><td>[[van]]</td></tr></table></div>
      <p>Some verbs are irregular only in the yo form: [[hacer → hago]], [[salir → salgo]], [[poner → pongo]]. [[acostarse]] changes o → ue: [[me acuesto]], [[te acuestas]].</p>
      <p>[[ir a]] + place: [[Voy a la oficina.]] [[Vamos al cine.]] ([[a + el = al]])</p>` },
    { t: "How often and in what order", body: `
      <p>[[siempre]] always · [[normalmente]] usually · [[a veces]] sometimes · [[nunca]] never · [[todos los días]] every day</p>
      <p>[[Nunca desayuno en casa.]] = I never have breakfast at home. Put [[nunca]] before the verb.</p>
      <p>[[primero]] first · [[luego]] / [[después]] then, after · [[por último]] finally</p>
      <p>[[los lunes]] = on Mondays · [[los fines de semana]] = at weekends</p>` }
  ],
  vocab: [
    { g: "Daily routine", items: [["levantarse","to get up"],["ducharse","to take a shower"],["desayunar","to have breakfast"],["ir al trabajo","to go to work"],["trabajar","to work"],["comer","to have lunch"],["cenar","to have dinner"],["acostarse","to go to bed"],["dormir","to sleep"],["hacer deporte","to do sport"],["ver la tele","to watch TV"]] },
    { g: "Days of the week", items: [["lunes","Monday"],["martes","Tuesday"],["miércoles","Wednesday"],["jueves","Thursday"],["viernes","Friday"],["sábado","Saturday"],["domingo","Sunday"],["el fin de semana","the weekend"]] },
    { g: "Time and frequency", items: [["la mañana","morning"],["la tarde","afternoon, evening"],["la noche","night"],["el mediodía","noon"],["temprano","early"],["tarde","late"],["siempre","always"],["normalmente","usually"],["a veces","sometimes"],["nunca","never"],["todos los días","every day"]] }
  ],
  phrases: [["¿Qué hora es?","What time is it?"],["Me levanto a las siete y media.","I get up at half past seven."],["Por la tarde trabajo y por la noche estudio español.","In the afternoon I work and at night I study Spanish."],["Normalmente cenamos a las nueve.","We usually have dinner at nine."],["Los sábados salgo con mis amigos.","On Saturdays I go out with my friends."],["Nunca me acuesto temprano.","I never go to bed early."]],
  ex: [
    { type: "mc", q: "It is 3:15. [[¿Qué hora es?]]", opts: ["Son las tres y cuarto.", "Son las tres menos cuarto.", "Es la tres y media.", "Son las cuatro y cuarto."], a: 0, why: "y cuarto = a quarter past." },
    { type: "mc", q: "Choose the correct form: [[Yo me ___ a las siete.]]", opts: ["levanto", "levantas", "levanta", "levantamos"], a: 0, why: "yo → me levanto." },
    { type: "mc", q: "How do you ask 'At what time do you have breakfast?'", opts: ["¿Qué hora desayunas?", "¿A qué hora desayunas?", "¿Cuándo hora desayunas?", "¿Por qué desayunas?"], a: 1, why: "A qué hora asks about the time something happens." },
    { type: "mc", q: "Choose the correct form: [[Ella ___ a trabajar a las nueve.]] (empezar)", opts: ["empezo", "empieza", "empeza", "empiezas"], a: 1, why: "e → ie in the singular forms: ella empieza." },
    { type: "mc", q: "Choose the correct form: [[Normalmente yo ___ al trabajo en moto.]] (ir)", opts: ["voy", "vo", "va", "vas"], a: 0, why: "ir, yo → voy." },
    { type: "fill", q: "[[Nosotros nos ___ a las diez.]] (we go to bed)", a: ["acostamos"], why: "nosotros → acostamos. Only the yo, tú, él and ellos forms change o → ue." },
    { type: "fill", q: "[[Yo ___ deporte los sábados.]] (hacer)", a: ["hago"], why: "hacer, yo → hago." },
    { type: "fill", q: "[[Son las cinco ___ cuarto.]] (4:45)", a: ["menos"], why: "menos cuarto = a quarter to." }
  ]
},
{
  id: 7, es: "¡A comer!", en: "Let's eat!",
  goals: ["Talk about meals and food you like", "Order in a restaurant and ask for the bill", "Use de and con with food", "Use the pronouns lo, la, los, las", "Use traer and poner, and choose between tú and usted"],
  grammar: [
    { t: "Ordering in a restaurant", body: `
      <div class="tbl-wrap"><table><tr><th>Spanish</th><th>English</th></tr>
      <tr><td>[[¿Qué desea?]] · [[¿Qué van a tomar?]]</td><td>What would you like? (waiter)</td></tr>
      <tr><td>[[Para mí, una ensalada.]]</td><td>For me, a salad.</td></tr>
      <tr><td>[[De primero, sopa. De segundo, pescado.]]</td><td>For the first course, soup. For the second, fish.</td></tr>
      <tr><td>[[¿Y para beber?]]</td><td>And to drink?</td></tr>
      <tr><td>[[¿Me trae la carta, por favor?]]</td><td>Could you bring me the menu, please?</td></tr>
      <tr><td>[[La cuenta, por favor.]]</td><td>The bill, please.</td></tr></table></div>
      <p class="tip">A menú del día is a fixed lunch with a first course, a second course, a dessert or coffee and a drink.</p>` },
    { t: "de and con", body: `
      <ul><li>[[con]] = with, along with: [[un café con leche]], [[pollo con patatas]], [[un té con limón]]</li>
      <li>[[de]] = made of, with the main ingredient or type: [[una sopa de verduras]], [[un bocadillo de jamón]], [[un helado de chocolate]]</li></ul>
      <p>Note: [[de + el = del]]: [[el sabor del queso]].</p>` },
    { t: "Pronouns: lo, la, los, las", body: `
      <p>These small words replace a thing you already mentioned, so you do not repeat it. They match the thing in gender and number.</p>
      <div class="tbl-wrap"><table><tr><th>Question</th><th>Answer</th></tr>
      <tr><td>[[¿Quieres el pan?]]</td><td>[[Sí, lo quiero.]]</td></tr>
      <tr><td>[[¿Tomas la sopa?]]</td><td>[[Sí, la tomo.]]</td></tr>
      <tr><td>[[¿Comes los huevos?]]</td><td>[[Sí, los como.]]</td></tr>
      <tr><td>[[¿Pides las patatas?]]</td><td>[[Sí, las pido.]]</td></tr></table></div>
      <p class="tip">The pronoun goes before the verb: [[Lo quiero.]] With an infinitive it can also join the end: [[Quiero comerlo.]]</p>` },
    { t: "traer and poner", body: `
      <div class="tbl-wrap"><table><tr><th></th><th>traer (to bring)</th><th>poner (to put, to serve)</th></tr>
      <tr><td>yo</td><td>[[traigo]]</td><td>[[pongo]]</td></tr><tr><td>tú</td><td>[[traes]]</td><td>[[pones]]</td></tr>
      <tr><td>él / ella / usted</td><td>[[trae]]</td><td>[[pone]]</td></tr><tr><td>nosotros/as</td><td>[[traemos]]</td><td>[[ponemos]]</td></tr>
      <tr><td>vosotros/as</td><td>[[traéis]]</td><td>[[ponéis]]</td></tr><tr><td>ellos / ellas / ustedes</td><td>[[traen]]</td><td>[[ponen]]</td></tr></table></div>
      <p>In a bar: [[¿Me pone un café?]] = Can I have a coffee? (literally: Will you put me a coffee?)</p>` },
    { t: "tú or usted?", body: `
      <p>With friends and young people: [[¿Qué quieres?]] [[¿Me traes agua?]]</p>
      <p>With the waiter, older people or strangers: [[¿Qué desea?]] [[¿Me trae la cuenta?]] [[¿Quiere más pan?]]</p>
      <p class="tip">[[Usted]] uses the same verb form as él / ella: [[usted quiere]], [[usted trae]].</p>` }
  ],
  vocab: [
    { g: "Food", items: [["el pan","bread"],["el queso","cheese"],["el jamón","ham"],["el huevo","egg"],["la carne","meat"],["el pollo","chicken"],["el pescado","fish"],["el arroz","rice"],["la pasta","pasta"],["la ensalada","salad"],["la fruta","fruit"],["la verdura","vegetable"],["las patatas","potatoes"]] },
    { g: "Drinks", items: [["el agua","water"],["el café","coffee"],["el té","tea"],["el zumo","juice"],["la cerveza","beer"],["el vino","wine"],["la leche","milk"],["el refresco","soft drink"]] },
    { g: "In the restaurant", items: [["la carta","menu"],["el menú del día","fixed-price lunch"],["el camarero / la camarera","waiter / waitress"],["el primero","first course"],["el segundo","main course"],["el postre","dessert"],["la cuenta","bill"],["la propina","tip"],["el desayuno","breakfast"],["la comida","lunch, meal"],["la cena","dinner"]] },
    { g: "Dishes", items: [["la tortilla de patatas","Spanish potato omelette"],["la paella","rice dish from Valencia"],["el gazpacho","cold tomato soup"],["los tacos","tacos"],["las empanadas","filled pastries"],["el ceviche","marinated raw fish"]] }
  ],
  phrases: [["¿Qué desea?","What would you like?"],["Para mí, una tortilla de patatas.","For me, a potato omelette."],["Un café con leche, por favor.","A coffee with milk, please."],["¿Me trae la cuenta, por favor?","Could you bring me the bill, please?"],["¿Quieres el pescado? Sí, lo quiero.","Do you want the fish? Yes, I want it."],["Normalmente desayuno pan con huevo.","I usually have bread with egg for breakfast."]],
  ex: [
    { type: "mc", q: "Choose: [[Un café ___ leche, por favor.]]", opts: ["de", "con", "en", "para"], a: 1, why: "con leche = with milk." },
    { type: "mc", q: "[[¿Quieres el pan?]] Answer: [[Sí, ___ quiero.]]", opts: ["lo", "la", "los", "las"], a: 0, why: "pan is masculine singular → lo." },
    { type: "mc", q: "[[¿Tomas las patatas?]] Answer: [[Sí, ___ tomo.]]", opts: ["lo", "la", "los", "las"], a: 3, why: "patatas is feminine plural → las." },
    { type: "mc", q: "How do you politely ask the waiter for the bill?", opts: ["¿Me trae la cuenta, por favor?", "Quiero la hora.", "¿Dónde está la cuenta tú?", "Trae cuenta."], a: 0, why: "Use me trae (usted form) and por favor." },
    { type: "mc", q: "Which question does a waiter ask (formal, usted)?", opts: ["¿Qué quieres?", "¿Qué desea?", "¿Qué tomas?", "¿Qué comes?"], a: 1, why: "desea is the usted form." },
    { type: "fill", q: "[[Yo ___ la mesa.]] (poner: I set the table)", a: ["pongo"], why: "poner, yo → pongo." },
    { type: "fill", q: "[[Camarero, ¿me ___ la carta, por favor?]] (traer, usted)", a: ["trae"], why: "usted → trae." },
    { type: "fill", q: "[[¿Quiere la sopa? Sí, ___ quiero.]]", a: ["la"], why: "sopa is feminine singular → la." }
  ]
},
{
  id: 8, es: "El barrio ideal", en: "The ideal neighbourhood",
  goals: ["Describe your neighbourhood", "Say where places are", "Talk about quantity: mucho, poco, ninguno", "Ask for and give directions", "Compare two places"],
  grammar: [
    { t: "Where things are", body: `
      <div class="tbl-wrap"><table><tr><th>Spanish</th><th>English</th></tr>
      <tr><td>[[cerca de]] · [[lejos de]]</td><td>near · far from</td></tr>
      <tr><td>[[al lado de]]</td><td>next to</td></tr>
      <tr><td>[[enfrente de]]</td><td>opposite</td></tr>
      <tr><td>[[delante de]] · [[detrás de]]</td><td>in front of · behind</td></tr>
      <tr><td>[[entre]] ... [[y]] ...</td><td>between ... and ...</td></tr>
      <tr><td>[[a la derecha de]] · [[a la izquierda de]]</td><td>to the right of · to the left of</td></tr>
      <tr><td>[[en la esquina]] · [[en el centro]]</td><td>on the corner · in the centre</td></tr></table></div>
      <p class="tip">[[de + el = del]]: [[El banco está al lado del parque.]] [[La farmacia está enfrente de la plaza.]]</p>` },
    { t: "How much? How many?", body: `
      <p>[[mucho / mucha / muchos / muchas]] a lot of · [[bastante(s)]] quite a lot of, enough · [[poco / poca / pocos / pocas]] little, few</p>
      <p>[[En mi barrio hay muchos parques y pocos cines.]]</p>
      <p>[[No hay ningún museo.]] = There is no museum at all.</p>
      <p class="tip">These words match the noun in gender and number, like adjectives.</p>` },
    { t: "uno, alguno, ninguno", body: `
      <div class="tbl-wrap"><table><tr><th>Before a masculine noun</th><th>On their own</th></tr>
      <tr><td>[[un banco]]</td><td>[[uno]]</td></tr>
      <tr><td>[[algún banco]]</td><td>[[alguno]]</td></tr>
      <tr><td>[[ningún banco]]</td><td>[[ninguno]]</td></tr></table></div>
      <p>Feminine: [[una]], [[alguna]], [[ninguna]]. Plural: [[algunos / algunas]].</p>
      <p>[[¿Hay algún banco por aquí?]] → [[Sí, hay uno en la calle Sol.]] / [[No, no hay ninguno.]]</p>
      <p>[[¿Hay alguna farmacia cerca?]] → [[Sí, hay una al lado del metro.]] / [[No, no hay ninguna.]]</p>` },
    { t: "Asking for and giving directions", body: `
      <p>[[Perdone, ¿cómo voy a la estación?]] = Excuse me, how do I get to the station?</p>
      <div class="tbl-wrap"><table><tr><th>With tú</th><th>With usted</th><th>English</th></tr>
      <tr><td>[[sigue todo recto]]</td><td>[[siga todo recto]]</td><td>keep going straight</td></tr>
      <tr><td>[[gira a la derecha]]</td><td>[[gire a la derecha]]</td><td>turn right</td></tr>
      <tr><td>[[cruza la plaza]]</td><td>[[cruce la plaza]]</td><td>cross the square</td></tr>
      <tr><td>[[toma la primera calle]]</td><td>[[tome la primera calle]]</td><td>take the first street</td></tr></table></div>` },
    { t: "Comparing", body: `
      <p>[[más]] + adjective + [[que]] = more ... than: [[Madrid es más grande que Toledo.]]</p>
      <p>[[menos]] + adjective + [[que]] = less ... than: [[Mi barrio es menos ruidoso que el centro.]]</p>
      <p>[[mejor]] better · [[peor]] worse: [[Esta zona es mejor para vivir.]]</p>` }
  ],
  vocab: [
    { g: "Places in the neighbourhood", items: [["el banco","bank"],["la farmacia","pharmacy"],["el supermercado","supermarket"],["el parque","park"],["el mercado","market"],["el hospital","hospital"],["la panadería","bakery"],["la estación","station"],["la parada de autobús","bus stop"],["el metro","metro"],["el cine","cinema"],["la biblioteca","library"],["la plaza","square"],["la calle","street"]] },
    { g: "Describing a place", items: [["tranquilo / tranquila","quiet"],["ruidoso / ruidosa","noisy"],["grande","big"],["pequeño / pequeña","small"],["seguro / segura","safe"],["bonito / bonita","pretty"],["feo / fea","ugly"],["limpio / limpia","clean"],["sucio / sucia","dirty"],["bien comunicado","with good transport"]] },
    { g: "Directions", items: [["todo recto","straight on"],["a la derecha","to the right"],["a la izquierda","to the left"],["la esquina","corner"],["cerca","near"],["lejos","far"],["girar","to turn"],["cruzar","to cross"],["seguir","to follow, to continue"]] }
  ],
  phrases: [["¿Hay algún supermercado por aquí?","Is there a supermarket around here?"],["Sí, hay uno al lado de la farmacia.","Yes, there is one next to the pharmacy."],["No, no hay ninguno.","No, there isn't one."],["Sigue todo recto y gira a la izquierda.","Keep going straight and turn left."],["Mi barrio es tranquilo, pero no tiene metro.","My neighbourhood is quiet, but it has no metro."],["Madrid es más grande que Toledo.","Madrid is bigger than Toledo."]],
  ex: [
    { type: "mc", q: "The pharmacy is next to the bank. [[La farmacia está ___ banco.]]", opts: ["al lado del", "al lado de el", "a lado del", "cerca el"], a: 0, why: "de + el = del: al lado del banco." },
    { type: "mc", q: "[[¿Hay algún parque cerca?]] Answer: [[No, no hay ___.]]", opts: ["ninguno", "alguno", "uno", "ninguna"], a: 0, why: "parque is masculine, and 'ninguno' is used on its own." },
    { type: "mc", q: "Choose: [[En mi barrio hay ___ supermercados.]] (many)", opts: ["muchos", "mucho", "muy", "mucha"], a: 0, why: "supermercados is masculine plural." },
    { type: "mc", q: "Choose: [[Madrid es más grande ___ Toledo.]]", opts: ["que", "de", "como", "a"], a: 0, why: "más + adjective + que." },
    { type: "mc", q: "Tell a friend to turn right. [[___ a la derecha.]]", opts: ["Gira", "Giro", "Girar", "Girando"], a: 0, why: "The tú command is gira." },
    { type: "fill", q: "[[¿Hay ___ banco por aquí?]] (any)", a: ["algún", "algun"], why: "algún before a masculine singular noun." },
    { type: "fill", q: "[[La estación está ___ de mi casa.]] (far from)", a: ["lejos"], why: "lejos de = far from." },
    { type: "fill", q: "[[Sigue todo ___ y gira a la izquierda.]] (straight on)", a: ["recto"], why: "todo recto = straight on." }
  ]
},
{
  id: 9, es: "¿Sabes conducir?", en: "Can you drive?",
  goals: ["Describe your personality, qualities and flaws", "Say what you can do and know how to do", "Use saber and poder", "Talk about experiences with the pretérito perfecto", "Describe people with que"],
  grammar: [
    { t: "saber and poder", body: `
      <div class="tbl-wrap"><table><tr><th></th><th>saber (to know)</th><th>poder (can)</th></tr>
      <tr><td>yo</td><td>[[sé]]</td><td>[[puedo]]</td></tr><tr><td>tú</td><td>[[sabes]]</td><td>[[puedes]]</td></tr>
      <tr><td>él / ella / usted</td><td>[[sabe]]</td><td>[[puede]]</td></tr><tr><td>nosotros/as</td><td>[[sabemos]]</td><td>[[podemos]]</td></tr>
      <tr><td>vosotros/as</td><td>[[sabéis]]</td><td>[[podéis]]</td></tr><tr><td>ellos / ellas / ustedes</td><td>[[saben]]</td><td>[[pueden]]</td></tr></table></div>
      <ul><li>[[saber]] + infinitive = to know how to, a skill you have learned: [[Sé conducir.]] [[No sé nadar.]]</li>
      <li>[[poder]] + infinitive = to be able to, a possibility or a request: [[Hoy no puedo salir.]] [[¿Puedes abrir la ventana?]]</li></ul>` },
    { t: "The pretérito perfecto", body: `
      <p>Use it to talk about experiences and about time periods that are not finished yet (today, this week, this year).</p>
      <p>It is made of [[haber]] + a past participle:</p>
      <div class="tbl-wrap"><table><tr><th>haber</th><th>Participle</th></tr>
      <tr><td>[[he]], [[has]], [[ha]]</td><td>-ar → [[-ado]]: [[hablar → hablado]]</td></tr>
      <tr><td>[[hemos]], [[habéis]], [[han]]</td><td>-er / -ir → [[-ido]]: [[comer → comido]], [[vivir → vivido]]</td></tr></table></div>
      <p>[[He trabajado mucho hoy.]] [[Hemos comido paella.]] [[Mis padres han viajado a Japón.]]</p>
      <p class="tip">Do not put anything between [[haber]] and the participle. The negative goes before: [[No he visto esa película.]]</p>` },
    { t: "Irregular participles", body: `
      <p>[[hacer → hecho]] · [[ver → visto]] · [[escribir → escrito]] · [[decir → dicho]] · [[poner → puesto]] · [[volver → vuelto]] · [[abrir → abierto]]</p>
      <p>[[¿Qué has hecho hoy?]] = What have you done today? · [[He visto una película muy buena.]]</p>` },
    { t: "Talking about experiences", body: `
      <p>[[¿Has estado alguna vez en España?]] = Have you ever been to Spain?</p>
      <p>[[Sí, he estado dos veces.]] = Yes, I have been twice. · [[No, nunca he estado.]] = No, I have never been.</p>
      <p>[[ya]] already · [[todavía no]] not yet: [[Todavía no he cenado.]]</p>
      <p>[[alguna vez]] ever · [[nunca]] never · [[una vez]] once · [[muchas veces]] many times</p>` },
    { t: "Describing people with que", body: `
      <p>[[que]] links a person with a description: [[Es una persona que trabaja mucho.]] = He or she is a person who works a lot.</p>
      <p>[[Mi amigo es un chico que habla cuatro idiomas.]] [[Me gustan las personas que son simpáticas.]]</p>` }
  ],
  vocab: [
    { g: "Personality", items: [["simpático / simpática","nice, friendly"],["tímido / tímida","shy"],["trabajador / trabajadora","hard-working"],["responsable","responsible"],["generoso / generosa","generous"],["perezoso / perezosa","lazy"],["alegre","cheerful"],["nervioso / nerviosa","nervous"],["organizado / organizada","organised"],["creativo / creativa","creative"],["paciente","patient"],["puntual","punctual"]] },
    { g: "Skills and abilities", items: [["conducir","to drive"],["cocinar","to cook"],["nadar","to swim"],["bailar","to dance"],["tocar la guitarra","to play the guitar"],["hablar idiomas","to speak languages"],["esquiar","to ski"],["montar en bici","to ride a bike"]] },
    { g: "Experiences", items: [["viajar","to travel"],["vivir en otro país","to live in another country"],["conocer a gente","to meet people"],["probar comida nueva","to try new food"],["aprender un idioma","to learn a language"],["trabajar en un hotel","to work in a hotel"],["alguna vez","ever"],["nunca","never"],["muchas veces","many times"]] }
  ],
  phrases: [["¿Sabes conducir?","Can you drive?"],["Sé nadar, pero no sé esquiar.","I can swim, but I can't ski."],["¿Has estado alguna vez en México?","Have you ever been to Mexico?"],["Nunca he probado el ceviche.","I have never tried ceviche."],["He vivido en Japón.","I have lived in Japan."],["Mi compañero es un chico que trabaja mucho.","My colleague is a guy who works hard."]],
  ex: [
    { type: "mc", q: "Do you know how to drive? [[¿___ conducir?]]", opts: ["Sabes", "Puedes", "Tienes", "Quieres"], a: 0, why: "saber + infinitive = a learned skill." },
    { type: "mc", q: "Asking for help: [[¿___ abrir la ventana, por favor?]]", opts: ["Sabes", "Puedes", "Conoces", "Tienes"], a: 1, why: "poder is used for requests." },
    { type: "mc", q: "Choose the participle: [[He ___ en Madrid.]] (vivir)", opts: ["vivido", "vivado", "viviendo", "vivió"], a: 0, why: "-ir verbs → -ido." },
    { type: "mc", q: "Choose the participle: [[Hoy he ___ pasta.]] (comer)", opts: ["comido", "comado", "comiendo", "comí"], a: 0, why: "-er verbs → -ido." },
    { type: "mc", q: "What is the participle of [[hacer]]?", opts: ["hacido", "hecho", "hacedo", "hechado"], a: 1, why: "hacer → hecho is irregular." },
    { type: "fill", q: "[[Nosotros ___ viajado a Japón.]] (we have travelled)", a: ["hemos"], why: "nosotros → hemos." },
    { type: "fill", q: "[[Nunca ___ probado el ceviche.]] (I have never tried)", a: ["he"], why: "yo → he." },
    { type: "fill", q: "[[Mi madre ___ cocinar muy bien.]] (she knows how to)", a: ["sabe"], why: "ella → sabe." }
  ]
}
];

const MORE_SKILLS = {
  6: {
    listen: [
      { mode: "choose", es: "Me levanto a las siete de la mañana.", en: "I get up at seven in the morning." },
      { mode: "choose", es: "Mi hermana trabaja por la tarde.", en: "My sister works in the afternoon." },
      { mode: "choose", es: "¿A qué hora cenas?", en: "What time do you have dinner?" },
      { mode: "write", es: "Son las ocho y media.", en: "It is half past eight." },
      { mode: "write", es: "Siempre desayuno en casa.", en: "I always have breakfast at home." },
      { mode: "write", es: "Me acuesto a las once.", en: "I go to bed at eleven." }
    ],
    talk: [
      { q: "¿A qué hora te levantas?", qen: "What time do you get up?", model: "Me levanto a las seis y media.", men: "I get up at half past six." },
      { q: "¿Qué haces por la tarde?", qen: "What do you do in the afternoon?", model: "Por la tarde trabajo y estudio español.", men: "In the afternoon I work and study Spanish." },
      { q: "¿Qué haces los fines de semana?", qen: "What do you do at weekends?", model: "Los sábados salgo con mis amigos.", men: "On Saturdays I go out with my friends." }
    ]
  },
  7: {
    listen: [
      { mode: "choose", es: "Para mí, una tortilla de patatas.", en: "For me, a potato omelette." },
      { mode: "choose", es: "¿Me trae la cuenta, por favor?", en: "Could you bring me the bill, please?" },
      { mode: "choose", es: "Quiero un café con leche.", en: "I want a coffee with milk." },
      { mode: "write", es: "Tomo el pan con queso.", en: "I have the bread with cheese." },
      { mode: "write", es: "¿Qué desea de postre?", en: "What would you like for dessert?" },
      { mode: "write", es: "Me gusta el pescado con arroz.", en: "I like fish with rice." }
    ],
    talk: [
      { q: "¿Qué desayunas normalmente?", qen: "What do you usually have for breakfast?", model: "Normalmente desayuno pan con huevo y café.", men: "I usually have bread with egg and coffee." },
      { q: "¿Qué quieres para beber?", qen: "What do you want to drink?", model: "Quiero agua, por favor.", men: "I want water, please." },
      { q: "¿Cuál es tu plato favorito?", qen: "What is your favourite dish?", model: "Mi plato favorito es la pasta con pollo.", men: "My favourite dish is pasta with chicken." }
    ]
  },
  8: {
    listen: [
      { mode: "choose", es: "La biblioteca está enfrente del parque.", en: "The library is opposite the park." },
      { mode: "choose", es: "¿Hay algún supermercado por aquí?", en: "Is there a supermarket around here?" },
      { mode: "choose", es: "Mi barrio es tranquilo y bastante bonito.", en: "My neighbourhood is quiet and quite pretty." },
      { mode: "write", es: "Gira a la derecha y sigue todo recto.", en: "Turn right and keep going straight." },
      { mode: "write", es: "No hay ninguna farmacia cerca.", en: "There is no pharmacy nearby." },
      { mode: "write", es: "El metro está al lado de la plaza.", en: "The metro is next to the square." }
    ],
    talk: [
      { q: "¿Cómo es tu barrio?", qen: "What is your neighbourhood like?", model: "Mi barrio es tranquilo y tiene muchos restaurantes.", men: "My neighbourhood is quiet and has many restaurants." },
      { q: "¿Qué hay cerca de tu casa?", qen: "What is there near your house?", model: "Cerca de mi casa hay un parque y un supermercado.", men: "Near my house there is a park and a supermarket." },
      { q: "¿Dónde está el banco?", qen: "Where is the bank?", model: "El banco está en la esquina, a la izquierda.", men: "The bank is on the corner, on the left." }
    ]
  },
  9: {
    listen: [
      { mode: "choose", es: "Sé nadar, pero no sé esquiar.", en: "I can swim, but I can't ski." },
      { mode: "choose", es: "¿Has estado alguna vez en México?", en: "Have you ever been to Mexico?" },
      { mode: "choose", es: "Mi compañero es muy responsable y puntual.", en: "My colleague is very responsible and punctual." },
      { mode: "write", es: "Hoy he trabajado mucho.", en: "Today I have worked a lot." },
      { mode: "write", es: "No sé conducir.", en: "I don't know how to drive." },
      { mode: "write", es: "Nunca he comido paella.", en: "I have never eaten paella." }
    ],
    talk: [
      { q: "¿Sabes conducir?", qen: "Can you drive?", model: "No, no sé conducir, pero sé montar en moto.", men: "No, I can't drive, but I can ride a motorbike." },
      { q: "¿Has viajado a otro país?", qen: "Have you travelled to another country?", model: "Sí, he viajado a Japón y a Tailandia.", men: "Yes, I have travelled to Japan and Thailand." },
      { q: "¿Cómo eres?", qen: "What are you like?", model: "Soy trabajador, paciente y muy organizado.", men: "I am hard-working, patient and very organised." }
    ]
  }
};
Object.assign(SKILLS, MORE_SKILLS);
