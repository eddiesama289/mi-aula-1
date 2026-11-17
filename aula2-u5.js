/* Aula Plus 2 · Unidad 5 «¿Cómo va todo?». Original material. Format: see aula2.js. */
A2({
  n: 5, es: "¿Cómo va todo?", en: "How's everything going?",
  lessons: ["Saludos y presentaciones", "Pedir cosas, favores y permiso", "Excusas: estar + gerundio"],
  goals: ["Greet, introduce people and say goodbye, formally and informally", "Ask for things, actions and favours politely: ¿me pasas…?, ¿podrías…?, ¿te importa…?", "Ask for and give permission", "Form the gerundio and use estar + gerundio", "Make excuses and give reasons: es que…"],
  grammar: [
    { c: 1, t: "tú or usted?", body: `
      <p>Use [[tú]] with friends, family, children and people your age in relaxed situations. Use [[usted]] with older people, clients or in formal situations.</p>
      <div class="tbl-wrap"><table><tr><th></th><th>informal</th><th>formal</th></tr>
      <tr><td>How are you?</td><td>[[¿Qué tal estás?]]</td><td>[[¿Cómo está usted?]]</td></tr>
      <tr><td>Introducing</td><td>[[Te presento a Lucía.]]</td><td>[[Le presento a la señora Ruiz.]]</td></tr>
      <tr><td>To a group</td><td>[[Os presento a mi novio.]]</td><td>[[Les presento a mi socio.]]</td></tr></table></div>
      <p>Answers: [[Encantado / Encantada.]] [[Mucho gusto.]] [[¡Hola! ¿Qué tal?]]</p>` },
    { c: 1, t: "Greetings and goodbyes", body: `
      <p>[[¿Qué tal?]] · [[¿Cómo va todo?]] · [[¿Qué tal el trabajo?]] · [[¡Cuánto tiempo!]] (long time no see!)</p>
      <p>Answers: [[Muy bien, ¿y tú?]] · [[Tirando.]] (so-so) · [[Bien, como siempre.]]</p>
      <p>Goodbyes: [[Hasta luego.]] · [[Hasta pronto.]] · [[Nos vemos.]] · [[Que te vaya bien.]] · [[Recuerdos a tu familia.]] (say hi to your family)</p>` },
    { c: 2, t: "Asking for things", body: `
      <p>[[¿Me das]] + thing? · [[¿Me pasas la sal?]] (at the table) · [[¿Tienes un bolígrafo?]]</p>
      <p>Borrowing: [[¿Me dejas tu coche?]] · [[¿Me prestas veinte euros?]]</p>
      <p>Answers: [[Sí, claro, toma.]] · [[Sí, sí, cógelo.]] · [[Lo siento, es que no tengo.]]</p>
      <p class="tip">[[dejar]] and [[prestar]] both mean "to lend". Ask with the present: it sounds friendlier than an order.</p>` },
    { c: 2, t: "Favours and permission: poder and importar", body: `
      <p>Asking someone to do something, from direct to very polite:</p>
      <p>[[¿Puedes cerrar la ventana?]] → [[¿Podrías cerrar la ventana?]] → [[¿Te importa cerrar la ventana?]] → [[¿Te importaría cerrar la ventana?]]</p>
      <p>Asking for permission: [[¿Puedo abrir la ventana?]] · [[¿Te importa si abro la ventana?]] (si + present)</p>
      <p>Giving permission: [[Sí, claro.]] · [[Claro, claro.]] · [[Por supuesto.]] · [[No, no, adelante.]] (to ¿te importa…?, "no" means "go ahead")</p>
      <div class="tbl-wrap"><table><tr><th></th><th>poder (condicional)</th><th>importar (condicional)</th></tr>
      <tr><td>yo</td><td>[[podría]]</td><td>[[me importaría]]</td></tr><tr><td>tú</td><td>[[podrías]]</td><td>[[te importaría]]</td></tr>
      <tr><td>usted</td><td>[[podría]]</td><td>[[le importaría]]</td></tr><tr><td>vosotros</td><td>[[podríais]]</td><td>[[os importaría]]</td></tr></table></div>` },
    { c: 3, t: "The gerundio", body: `
      <p>-ar → -ando: [[hablar → hablando]] · -er / -ir → -iendo: [[comer → comiendo]], [[escribir → escribiendo]]</p>
      <p>Irregular: [[leer → leyendo]] · [[oír → oyendo]] · [[ir → yendo]] · [[dormir → durmiendo]] · [[pedir → pidiendo]] · [[decir → diciendo]] · [[venir → viniendo]]</p>` },
    { c: 3, t: "estar + gerundio · making excuses", body: `
      <p>[[estar]] + gerundio = an action happening now: [[Estoy trabajando.]] [[¿Qué estás haciendo?]] [[Están durmiendo.]]</p>
      <p>Pronouns go before [[estar]] or stuck to the gerundio: [[Me estoy duchando.]] = [[Estoy duchándome.]]</p>
      <p>Excuses start with [[es que…]]: [[¿Me ayudas? — Lo siento, es que estoy cocinando.]]</p>
      <p>Saying no politely: [[Lo siento, pero…]] · [[Me encantaría, pero…]] · [[Ahora no puedo, es que…]]</p>` }
  ],
  vocab: [
    { c: 1, g: "Greetings and introductions", items: [["¿Cómo va todo?","how's everything going?"],["¡Cuánto tiempo!","long time no see!"],["tirando","so-so"],["encantado / encantada","pleased to meet you"],["mucho gusto","nice to meet you"],["te presento a…","let me introduce…"],["el señor / la señora","Mr / Mrs"],["tutear","to use tú"]] },
    { c: 1, g: "Saying goodbye", items: [["hasta pronto","see you soon"],["nos vemos","see you"],["que te vaya bien","all the best"],["recuerdos a…","say hi to…"],["un beso","love, a kiss"],["un abrazo","a hug, best wishes"],["despedirse","to say goodbye"]] },
    { c: 2, g: "Polite verbs", items: [["poder","can, to be able to"],["importar","to mind"],["ayudar","to help"],["dar","to give"],["dejar","to lend, to let"],["prestar","to lend"],["pasar","to pass"],["poner","to put"],["tener","to have"],["coger","to take"]] },
    { c: 2, g: "Things you ask for", items: [["el cargador","charger"],["el paraguas","umbrella"],["la sal","salt"],["el bolígrafo","pen"],["el mechero","lighter"],["la llave","key"],["la ventana","window"],["la calefacción","heating"],["el aire acondicionado","air conditioning"]] },
    { c: 3, g: "Excuses and answers", items: [["es que…","the thing is…"],["lo siento","I'm sorry"],["por supuesto","of course"],["claro","sure"],["adelante","go ahead"],["me encantaría, pero…","I'd love to, but…"],["tener prisa","to be in a hurry"],["estar ocupado","to be busy"]] }
  ],
  phrases: [
    ["¡Hola, Marta! ¡Cuánto tiempo! ¿Cómo va todo?", "Hi Marta! Long time no see! How's everything going?", 1],
    ["Te presento a mi compañero Iván. — Encantado.", "This is my colleague Iván. — Pleased to meet you.", 1],
    ["Bueno, me voy. Recuerdos a tus padres.", "Well, I'm off. Say hi to your parents.", 1],
    ["¿Me pasas el agua, por favor?", "Can you pass me the water, please?", 2],
    ["¿Me dejas tu cargador un momento?", "Can I borrow your charger for a moment?", 2],
    ["¿Te importa si abro la ventana? — No, no, adelante.", "Do you mind if I open the window? — No, go ahead.", 2],
    ["¿Podrías ayudarme con la maleta?", "Could you help me with the suitcase?", 2],
    ["Lo siento, ahora no puedo, es que estoy trabajando.", "Sorry, I can't right now, I'm working.", 3],
    ["¿Qué estás haciendo? — Estoy leyendo.", "What are you doing? — I'm reading.", 3]
  ],
  ex: [
    { type: "mc", q: "Formal introduction: [[___ presento al señor Gómez.]]", opts: ["Le", "Te", "Os", "Me"], a: 0, why: "usted → le presento." },
    { type: "mc", q: "[[¿Te importa si ___ la tele?]]", opts: ["pongo", "poner", "pondría", "pone"], a: 0, why: "¿Te importa si + present (yo)?" },
    { type: "mc", q: "Gerundio of leer:", opts: ["leyendo", "leiendo", "leendo", "leído"], a: 0, why: "leer → leyendo." },
    { type: "fill", q: "[[¿___ cerrar la puerta, por favor?]] (could you, tú)", a: ["podrías"], why: "poder, condicional, tú → podrías." },
    { type: "fill", q: "[[Ahora no puedo, ___ que estoy cocinando.]]", a: ["es"], why: "Excuses: es que…" },
    { type: "fill", q: "[[Los niños están ___.]] (dormir)", a: ["durmiendo"], why: "dormir → durmiendo." }
  ],
  listen: [
    { c: 1, mode: "choose", es: "Le presento a mi jefa, la señora Morales.", en: "Let me introduce my boss, Mrs Morales." },
    { c: 2, mode: "choose", es: "¿Me prestas tu paraguas?", en: "Can you lend me your umbrella?" },
    { c: 3, mode: "choose", es: "No puedo, es que estoy estudiando.", en: "I can't, I'm studying." },
    { c: 1, mode: "write", es: "¡Cuánto tiempo! ¿Qué tal estás?", en: "Long time no see! How are you?" },
    { c: 2, mode: "write", es: "¿Te importa si me siento aquí?", en: "Do you mind if I sit here?" },
    { c: 3, mode: "write", es: "Mi hermano está haciendo la cena.", en: "My brother is making dinner." }
  ],
  talk: [
    { c: 1, q: "Te encuentras a un amigo que no ves desde hace un año. ¿Qué le dices?", qen: "You meet a friend you haven't seen for a year. What do you say?", model: "¡Hola, Juan! ¡Cuánto tiempo! ¿Cómo va todo?", men: "Hi Juan! Long time no see! How's everything going?" },
    { c: 2, q: "En el tren hace mucho calor. Pide permiso para abrir la ventana.", qen: "It is very hot on the train. Ask for permission to open the window.", model: "Perdone, ¿le importa si abro la ventana?", men: "Excuse me, do you mind if I open the window?" },
    { c: 3, q: "Un amigo te pide ayuda, pero no puedes. ¿Qué le dices?", qen: "A friend asks you for help, but you can't. What do you say?", model: "Lo siento, ahora no puedo, es que estoy trabajando. ¿Te va bien mañana?", men: "Sorry, I can't now, I'm working. Is tomorrow OK for you?" }
  ],
  practice: [
    /* Lesson 1 · Saludos y presentaciones */
    { l: 1, type: "fill", t: "Introductions", i: "Write te, le, os or les.", items: [
      "Mamá, ___ presento a mi novia, Ana.|te", "Señor López, ___ presento a mi compañera.|le", "Chicos, ___ presento a Sara, la nueva vecina.|os", "Señores, ___ presento al director del hotel.|les",
      "Paula, ___ presento a mi primo.|te", "Don Ramón, ___ presento a mi madre.|le", "Niños, ___ presento a vuestra nueva profesora.|os", "Señoras, ___ presento a nuestro guía.|les"] },
    { l: 1, type: "match", t: "Greetings and goodbyes", i: "Connect each expression with its meaning.", items: [
      ["¡Cuánto tiempo!", "long time no see!"], ["tirando", "so-so"], ["mucho gusto", "nice to meet you"], ["hasta pronto", "see you soon"], ["nos vemos", "see you"], ["recuerdos a tu madre", "say hi to your mother"], ["que te vaya bien", "all the best"], ["un abrazo", "best wishes"]] },
    { l: 1, type: "mc", t: "Formal or informal?", items: [
      ["To your grandmother's doctor:", ["¿Cómo está usted?", "¿Qué tal estás, tío?", "¿Qué pasa?"], 0],
      ["To a classmate:", ["¿Cómo está usted?", "¿Qué tal?", "Le presento a…"], 1],
      ["Someone introduces you. You say:", ["Encantado.", "Hasta pronto.", "De nada."], 0],
      ["[[¿Qué tal todo? — ___, como siempre.]]", ["Bien", "Buenos", "Bueno días"], 0],
      ["Leaving a party, to the host:", ["¡Cuánto tiempo!", "Gracias por todo, nos vemos.", "Mucho gusto."], 1],
      ["To use tú with someone:", ["tutear", "presentar", "despedirse"], 0]] },
    /* Lesson 2 · Pedir cosas, favores y permiso */
    { l: 2, type: "fill", t: "Polite requests", i: "Write the missing word.", items: [
      "¿Me ___ la sal, por favor? (pass)|pasas", "¿Me ___ tu coche el sábado? (lend)|dejas~prestas", "¿___ ayudarme con los deberes? (could you, tú)|podrías", "¿Te ___ cerrar la puerta? (do you mind)|importa",
      "¿Te importa ___ enciendo la luz?|si", "¿___ usar tu ordenador? (can I)|puedo", "¿Le ___ esperar un momento? (would you mind, usted)|importaría", "¿Me ___ un vaso de agua? (give)|das"] },
    { l: 2, type: "mc", t: "What do you say?", items: [
      ["You need a pen from a classmate:", ["¿Tienes un bolígrafo?", "¿Te importa si tengo un bolígrafo?", "¿Podrías un bolígrafo?"], 0],
      ["You want to sit next to a stranger in a café:", ["¿Me dejas la silla?", "Perdone, ¿está libre esta silla?", "¿Te importa sentarte?"], 1],
      ["[[¿Te importa si fumo? — ___]] (go ahead)", ["Sí, mucho.", "No, no, adelante.", "No, gracias."], 1],
      ["[[¿Me prestas tu paraguas? — Sí, claro, ___.]]", ["tómalo", "tómala", "toma tú"], 0],
      ["Most polite:", ["¿Abres la ventana?", "¿Puedes abrir la ventana?", "¿Te importaría abrir la ventana?"], 2],
      ["[[¿Podría ___ más despacio, por favor?]] (usted)", ["hablar", "habla", "hablando"], 0]] },
    { l: 2, type: "order", t: "Make requests", i: "Tap the words in the right order.", items: [
      "¿Me pasas el pan, por favor?", "¿Te importa si cierro la ventana?", "¿Podrías bajar la música?", "¿Me dejas tu cargador?", "¿Puedo usar tu teléfono?"] },
    /* Lesson 3 · Excusas: estar + gerundio */
    { l: 3, type: "fill", t: "The gerundio", i: "Write estar + gerundio.", items: [
      "Ahora mismo yo ___ ___ (trabajar).|estoy|trabajando", "¿Qué ___ ___ (hacer) tú?|estás|haciendo", "Mi padre ___ ___ (leer) el periódico.|está|leyendo", "Nosotros ___ ___ (comer).|estamos|comiendo",
      "Los niños ___ ___ (dormir).|están|durmiendo", "¿Vosotros ___ ___ (ver) la tele?|estáis|viendo"] },
    { l: 3, type: "mc", t: "Excuses", items: [
      ["[[¿Vienes al cine? — No puedo, ___ tengo que estudiar.]]", ["es que", "porque es", "por que"], 0],
      ["[[Me encantaría, ___ estoy muy cansada.]]", ["pero", "porque", "si"], 0],
      ["[[Me estoy duchando.]] =", ["Estoy duchándome.", "Estoy me duchando.", "Me duchando estoy."], 0],
      ["Gerundio of pedir:", ["pediendo", "pidiendo", "pedido"], 1],
      ["Gerundio of ir:", ["iendo", "yendo", "ido"], 1],
      ["[[Lo siento, ahora no puedo hablar, ___ conduciendo.]]", ["estoy", "soy", "tengo"], 0]] },
    { l: 3, type: "order", t: "Say no politely", i: "Tap the words in the right order.", items: [
      "Lo siento, es que estoy trabajando.", "Me encantaría, pero no puedo.", "¿Qué estás haciendo ahora?", "Mi hermana se está duchando.", "Ahora no puedo, es que tengo prisa."] },
    /* Lesson 4 · Repaso */
    { l: 4, type: "tf", t: "Reading: «Un día en la oficina»", text: "Hoy es el primer día de Olga en una oficina de Madrid. Su jefe le dice: «Olga, le presento a Sergio, su compañero».\nSergio contesta: «Encantado. Pero, por favor, tutéame». Olga le pregunta: «¿Me dejas un bolígrafo? Es que no tengo». Sergio le da uno.\nA las once, Olga le pregunta a Sergio: «¿Vienes a tomar un café?». Él dice: «Me encantaría, pero ahora no puedo: estoy escribiendo un informe para el jefe».\nAntes de irse, Olga dice: «Hasta mañana, Sergio. ¡Que te vaya bien!».", items: [
      ["El jefe habla de usted a Olga.", true], ["Sergio prefiere hablar de usted.", false], ["Olga no tiene bolígrafo.", true], ["Sergio va a tomar un café con Olga.", false], ["Sergio está escribiendo un informe.", true], ["Olga se despide de Sergio.", true]] },
    { l: 4, type: "fill", t: "Mixed review", i: "Write one word in each blank.", items: [
      "Ana, ___ presento a mi hermano.|te", "¿Me ___ la sal? (pass)|pasas", "¿Te importa ___ apago la luz?|si", "¿___ ayudarme, por favor? (could you, usted)|podría",
      "Lo siento, es que estoy ___ (cocinar).|cocinando", "Mis padres están ___ (oír) la radio.|oyendo", "¡Hola! ¡Cuánto ___!|tiempo", "Hasta ___. (soon)|pronto"] },
    { l: 4, type: "order", t: "Make sentences", i: "Tap the words in the right order.", items: [
      "Le presento a mi compañero de trabajo.", "¿Te importaría ayudarme con esto?", "¿Me dejas tu bici esta tarde?", "Ahora no puedo, estoy estudiando.", "Recuerdos a tu familia."] }
  ],
  exam: [
    { type: "match", t: "Vocabulary", i: "Connect the words.", items: [
      ["prestar", "to lend"], ["importar", "to mind"], ["despedirse", "to say goodbye"], ["tutear", "to use tú"], ["el cargador", "charger"], ["tener prisa", "to be in a hurry"], ["por supuesto", "of course"], ["mucho gusto", "nice to meet you"]] },
    { type: "mc", t: "Choose the answer", items: [
      ["To your new boss, formally:", ["¿Qué tal estás?", "¿Cómo está usted?", "¿Qué pasa?"], 1],
      ["[[Chicos, ___ presento a mi madre.]]", ["te", "os", "le"], 1],
      ["[[¿Me ___ tu diccionario?]] (lend)", ["prestas", "das prestado", "importas"], 0],
      ["[[¿Te importa si ___ la ventana?]]", ["abro", "abrir", "abriría"], 0],
      ["[[¿Le importa esperar? — ___]] (I don't mind)", ["Sí, claro.", "No, no, claro.", "Sí, mucho."], 1],
      ["[[Ahora no puedo, es que ___ comiendo.]]", ["estoy", "soy", "voy"], 0],
      ["Gerundio of decir:", ["deciendo", "diciendo", "dicho"], 1],
      ["Very polite request:", ["¿Me das agua?", "¿Te importaría darme agua?", "Dame agua."], 1]] },
    { type: "fill", t: "Requests and permission", i: "Write one word in each blank.", items: [
      "¿Me ___ el pan, por favor? (pass)|pasas", "¿___ cerrar la ventana? (can I)|puedo", "¿Te importa si ___ la tele? (poner, yo)|pongo", "¿___ hablar más alto, por favor? (could you, tú)|podrías", "¿Me ___ tu coche el fin de semana? (lend)|dejas~prestas",
      "¿Le ___ firmar aquí? (would you mind, usted)|importaría", "Sí, ___, toma. (sure)|claro", "No, no, ___. (go ahead)|adelante", "¿Me ___ un poco de agua? (give)|das", "Señora, le ___ a mi marido. (introduce)|presento"] },
    { type: "fill", t: "estar + gerundio and excuses", i: "Write one word in each blank.", items: [
      "Mi hermano está ___ (escribir) un correo.|escribiendo", "¿Qué estás ___ (hacer)?|haciendo", "Los vecinos están ___ (hacer) obras.|haciendo", "Estamos ___ (ir) al aeropuerto.|yendo",
      "Mi abuela está ___ (dormir) la siesta.|durmiendo", "No puedo hablar, ___ que estoy en clase.|es", "Me encantaría, ___ tengo mucho trabajo.|pero", "Lo ___, ahora no puedo.|siento"] },
    { type: "tf", t: "Reading: «Mensajes»", text: "Hola, Lucas. ¿Qué tal todo? ¡Cuánto tiempo! Te escribo porque el sábado me cambio de piso y necesito ayuda. ¿Podrías venir a las diez? Y otra cosa: ¿me dejas tu furgoneta? Mi coche es muy pequeño. Un abrazo, Irene.\n\nHola, Irene. ¡Qué alegría! El sábado por la mañana no puedo, es que estoy trabajando hasta las dos. Pero por la tarde sí puedo ir. La furgoneta, claro, no hay problema: te la llevo a las cuatro. Recuerdos a tu hermana. Lucas.", items: [
      ["Irene y Lucas se ven mucho.", false], ["Irene se muda el sábado.", true], ["Irene pide a Lucas su coche pequeño.", false], ["Lucas trabaja el sábado por la mañana.", true], ["Lucas le presta la furgoneta.", true], ["Lucas manda recuerdos a la madre de Irene.", false]] },
    { type: "order", pts: 2, t: "Build sentences", i: "Put the words in order.", items: [
      "Te presento a mi amiga Carmen.", "¿Te importa si abro la ventana?", "¿Podrías ayudarme con las maletas?", "Lo siento, es que estoy cocinando.", "¿Qué estás haciendo ahora?"] }
  ]
});
