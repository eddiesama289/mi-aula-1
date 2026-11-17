/* Aula Plus 2 · Unidad 8 «Estamos muy bien». Original material. Format: see aula2.js. */
A2({
  n: 8, es: "Estamos muy bien", en: "We are very well",
  lessons: ["El cuerpo y los síntomas", "Estados de ánimo: ser y estar", "Consejos: el imperativo"],
  goals: ["Name the parts of the body and say what hurts: me duele, me duelen", "Describe symptoms and common illnesses", "Talk about moods and choose between ser and estar", "Give advice and instructions with the affirmative imperative", "Present a modern health problem and how to fight it"],
  grammar: [
    { c: 1, t: "doler: saying what hurts", body: `
      <p>[[doler]] (o → ue) works like [[gustar]]: the part of the body is the subject.</p>
      <p>[[Me duele la cabeza.]] (one thing) · [[Me duelen los pies.]] (more things)</p>
      <p>[[¿Qué te pasa? — Me duele la espalda.]] · [[¿Te duele mucho?]] · [[A mi hijo le duelen los oídos.]]</p>
      <p class="tip">Spanish uses the article, not "my": [[Me duele la rodilla]], not "mi rodilla".</p>` },
    { c: 1, t: "Symptoms: tener, estar, doler", body: `
      <div class="tbl-wrap"><table><tr><th>Verb</th><th>Examples</th></tr>
      <tr><td>[[tener]] + noun</td><td>[[Tengo fiebre.]] [[Tengo tos.]] [[Tengo gripe.]] [[Tengo dolor de muelas.]] [[Tengo náuseas.]]</td></tr>
      <tr><td>[[estar]] + adjective</td><td>[[Estoy resfriado.]] [[Estoy mareada.]] [[Estoy enfermo.]]</td></tr>
      <tr><td>[[doler]]</td><td>[[Me duele la garganta.]]</td></tr></table></div>` },
    { c: 2, t: "ser or estar with moods", body: `
      <p>[[ser]] = how a person is (character): [[Mi hermano es muy nervioso.]] [[Es una persona alegre.]]</p>
      <p>[[estar]] = how a person feels now (state): [[Hoy estoy nervioso por el examen.]] [[Está triste porque su perro está enfermo.]]</p>
      <p>Some adjectives change meaning: [[ser aburrido]] (boring) / [[estar aburrido]] (bored) · [[ser listo]] (clever) / [[estar listo]] (ready)</p>
      <p>[[estar de buen / mal humor]] = to be in a good / bad mood</p>` },
    { c: 2, t: "ponerse: changes of mood", body: `
      <p>[[ponerse]] + adjective = to get, to become (for a short time):</p>
      <p>[[Me pongo nervioso cuando hablo en público.]] [[Se pone muy contenta cuando la llamas.]] [[Nos ponemos tristes con las películas de animales.]]</p>` },
    { c: 3, t: "The affirmative imperative", body: `
      <div class="tbl-wrap"><table><tr><th></th><th>tomar</th><th>beber</th><th>subir</th></tr>
      <tr><td>tú</td><td>[[toma]]</td><td>[[bebe]]</td><td>[[sube]]</td></tr>
      <tr><td>usted</td><td>[[tome]]</td><td>[[beba]]</td><td>[[suba]]</td></tr>
      <tr><td>vosotros/as</td><td>[[tomad]]</td><td>[[bebed]]</td><td>[[subid]]</td></tr>
      <tr><td>ustedes</td><td>[[tomen]]</td><td>[[beban]]</td><td>[[suban]]</td></tr></table></div>
      <p>tú = the él form of the present: [[descansa]], [[duerme]], [[cierra]]. usted swaps the vowel: -ar → [[-e]], -er/-ir → [[-a]].</p>
      <p>Irregular tú forms: [[haz]] (hacer), [[pon]] (poner), [[sal]] (salir), [[ten]] (tener), [[ven]] (venir), [[di]] (decir), [[ve]] (ir), [[sé]] (ser).</p>
      <p>usted forms come from the yo form: [[hago → haga]], [[tengo → tenga]], [[pongo → ponga]]. Irregular: [[ir → vaya]], [[ser → sea]].</p>` },
    { c: 3, t: "Pronouns with the imperative · giving advice", body: `
      <p>Pronouns go at the end, joined to the verb, and an accent often appears: [[tómate esta pastilla]], [[acuéstate]], [[siéntese]], [[dúchate]].</p>
      <p>Other ways to give advice: [[Tienes que]] + infinitive · [[Deberías]] + infinitive (you should) · [[Es bueno]] + infinitive · [[¿Por qué no]] + present?</p>
      <p>[[Si te duele la cabeza, tómate un ibuprofeno y descansa.]]</p>` }
  ],
  vocab: [
    { c: 1, g: "The body", items: [["la cabeza","head"],["el cuello","neck"],["la espalda","back"],["el brazo","arm"],["la mano","hand"],["el dedo","finger, toe"],["la pierna","leg"],["la rodilla","knee"],["el pie","foot"],["el estómago","stomach"],["la garganta","throat"],["los oídos","ears (inner)"],["las muelas","back teeth"]] },
    { c: 1, g: "Illnesses and symptoms", items: [["la gripe","flu"],["el resfriado","cold"],["la fiebre","fever"],["la tos","cough"],["la alergia","allergy"],["estar resfriado","to have a cold"],["estar mareado","to feel dizzy"],["tener náuseas","to feel sick"],["el dolor de cabeza","headache"],["estar enfermo","to be ill"]] },
    { c: 2, g: "Moods", items: [["contento / contenta","happy"],["triste","sad"],["preocupado / preocupada","worried"],["estresado / estresada","stressed"],["enfadado / enfadada","angry"],["aburrido / aburrida","bored, boring"],["relajado / relajada","relaxed"],["cansado / cansada","tired"],["de buen humor","in a good mood"],["de mal humor","in a bad mood"],["ponerse nervioso","to get nervous"]] },
    { c: 3, g: "Health and sport", items: [["hacer ejercicio","to exercise"],["llevar una vida sana","to lead a healthy life"],["descansar","to rest"],["el médico / la médica","doctor"],["la pastilla","pill"],["el jarabe","cough syrup"],["la receta","prescription"],["el estrés","stress"],["el sedentarismo","sedentary lifestyle"],["el insomnio","insomnia"]] }
  ],
  phrases: [
    ["¿Qué te pasa? — Me duele mucho la cabeza.", "What's wrong? — I have a bad headache.", 1],
    ["Tengo fiebre y me duele la garganta.", "I have a fever and a sore throat.", 1],
    ["Estoy resfriado desde el lunes.", "I've had a cold since Monday.", 1],
    ["Hoy estoy de mal humor.", "Today I'm in a bad mood.", 2],
    ["Mi hermana es muy tranquila, pero hoy está nerviosa.", "My sister is very calm, but today she's nervous.", 2],
    ["Me pongo nervioso antes de los exámenes.", "I get nervous before exams.", 2],
    ["Bebe mucha agua y descansa.", "Drink lots of water and rest.", 3],
    ["Tómese esta pastilla cada ocho horas.", "Take this pill every eight hours.", 3],
    ["Deberías hacer más ejercicio.", "You should do more exercise.", 3]
  ],
  ex: [
    { type: "mc", q: "[[Me ___ los pies.]]", opts: ["duelen", "duele", "duelo", "dolen"], a: 0, why: "Plural: los pies → duelen." },
    { type: "mc", q: "[[Hoy ___ muy cansada.]]", opts: ["estoy", "soy", "tengo", "me duele"], a: 0, why: "A state now: estar." },
    { type: "mc", q: "Imperative, tú, hacer:", opts: ["haz", "hace", "haga", "hacé"], a: 0, why: "hacer → haz (tú)." },
    { type: "fill", q: "[[Tengo ___ y no puedo dejar de toser.]] (cough)", a: ["tos"], why: "la tos = cough." },
    { type: "fill", q: "[[___ esta pastilla, señora.]] (tomar, usted)", a: ["tome"], why: "usted: -ar → -e: tome." },
    { type: "fill", q: "[[Cuando veo películas tristes me ___ triste.]] (ponerse)", a: ["pongo"], why: "ponerse, yo → me pongo." }
  ],
  listen: [
    { c: 1, mode: "choose", es: "Me duele el estómago desde ayer.", en: "My stomach has hurt since yesterday." },
    { c: 2, mode: "choose", es: "Mi jefe está de muy mal humor.", en: "My boss is in a very bad mood." },
    { c: 3, mode: "choose", es: "Tómate un té y acuéstate pronto.", en: "Have a tea and go to bed early." },
    { c: 1, mode: "write", es: "Tengo fiebre y estoy mareada.", en: "I have a fever and feel dizzy." },
    { c: 2, mode: "write", es: "Estoy preocupado por mi madre.", en: "I'm worried about my mother." },
    { c: 3, mode: "write", es: "Haz deporte tres veces por semana.", en: "Do sport three times a week." }
  ],
  talk: [
    { c: 1, q: "¿Qué te pasa? ¿Estás bien?", qen: "What's wrong? Are you OK?", model: "No mucho. Estoy resfriado y me duele la garganta.", men: "Not really. I have a cold and a sore throat." },
    { c: 2, q: "¿Cuándo te pones nervioso o nerviosa?", qen: "When do you get nervous?", model: "Me pongo nerviosa cuando tengo que hablar en público.", men: "I get nervous when I have to speak in public." },
    { c: 3, q: "Un amigo duerme muy mal. ¿Qué consejos le das?", qen: "A friend sleeps badly. What advice do you give?", model: "Toma una infusión por la noche, haz ejercicio y apaga el móvil antes de dormir.", men: "Have a herbal tea at night, do exercise and switch off your phone before sleeping." }
  ],
  practice: [
    /* Lesson 1 · El cuerpo y los síntomas */
    { l: 1, type: "fill", t: "doler", i: "Write duele or duelen.", items: [
      "Me ___ la cabeza.|duele", "Me ___ las piernas.|duelen", "¿Te ___ los ojos?|duelen", "A mi padre le ___ la espalda.|duele",
      "Nos ___ los pies de tanto andar.|duelen", "¿Os ___ el estómago?|duele", "A Ana le ___ las muelas.|duelen", "Me ___ mucho la rodilla.|duele"] },
    { l: 1, type: "match", t: "The body", i: "Connect each word with its meaning.", items: [
      ["la espalda", "back"], ["el cuello", "neck"], ["la rodilla", "knee"], ["la garganta", "throat"], ["el estómago", "stomach"], ["las muelas", "back teeth"], ["el dedo", "finger"], ["la pierna", "leg"]] },
    { l: 1, type: "mc", t: "Symptoms", items: [
      ["[[Tengo 39 grados: tengo ___.]]", ["fiebre", "tos", "alergia"], 0],
      ["[[Estoy ___: tengo mocos y me duele la cabeza.]]", ["resfriado", "contento", "relajado"], 0],
      ["[[___ náuseas.]]", ["Tengo", "Estoy", "Me duele"], 0],
      ["[[Estoy ___: todo da vueltas.]]", ["mareado", "aburrido", "listo"], 0],
      ["[[¿Qué te ___? — Me duele la espalda.]]", ["pasa", "duele", "tienes"], 0],
      ["[[Mi hijo tiene dolor ___ oídos.]]", ["de", "en los", "con"], 0]] },
    /* Lesson 2 · Estados de ánimo: ser y estar */
    { l: 2, type: "fill", t: "ser or estar", i: "Write the right form of ser or estar.", items: [
      "Mi abuela ___ una persona muy alegre.|es", "Hoy (yo) ___ muy cansado.|estoy", "Mis padres ___ preocupados por mí.|están", "Esta película ___ muy aburrida.|es",
      "(Nosotros) ___ aburridos: no hay nada que hacer.|estamos", "Marta ___ de muy buen humor hoy.|está", "¿(Tú) ___ listo? Nos vamos.|estás", "Tu hijo ___ muy listo: saca muy buenas notas.|es"] },
    { l: 2, type: "match", t: "Moods", i: "Connect each word with its meaning.", items: [
      ["preocupado", "worried"], ["enfadado", "angry"], ["estresado", "stressed"], ["relajado", "relaxed"], ["triste", "sad"], ["contento", "happy"], ["de mal humor", "in a bad mood"], ["cansado", "tired"]] },
    { l: 2, type: "mc", t: "How do you feel?", items: [
      ["[[Me ___ nerviosa en el dentista.]]", ["pongo", "soy", "estoy"], 0],
      ["[[Mi hermano se ___ triste cuando pierde su equipo.]]", ["pone", "pongo", "es"], 0],
      ["[[Estoy ___ porque mañana es mi cumpleaños.]]", ["contento", "enfadado", "preocupado"], 0],
      ["Boring class:", ["La clase está aburrida.", "La clase es aburrida.", "La clase tiene aburrida."], 1],
      ["[[Hoy Luis está ___ mal humor.]]", ["de", "con", "en"], 0],
      ["[[¿Por qué estás ___? — Porque he perdido el tren.]]", ["enfadado", "listo", "relajado"], 0]] },
    /* Lesson 3 · Consejos: el imperativo */
    { l: 3, type: "fill", t: "Imperative: tú", i: "Write the imperative for tú.", items: [
      "___ (beber) mucha agua.|bebe", "___ (descansar) un poco.|descansa", "___ (hacer) ejercicio.|haz", "___ (salir) a pasear.|sal",
      "___ (tener) paciencia.|ten", "___ (venir) aquí.|ven", "___ (ir) al médico.|ve", "___ (dormir) ocho horas.|duerme"] },
    { l: 3, type: "fill", t: "Imperative: usted and pronouns", i: "Write the imperative.", items: [
      "Señora, ___ (tomar, usted) este jarabe.|tome", "___ (beber, usted) mucho líquido.|beba", "___ (abrir, usted) la boca, por favor.|abra", "___ (hacer, usted) dieta.|haga",
      "___ (acostarse, tú) pronto.|acuéstate", "___ (tomarse, tú) un té.|tómate", "___ (sentarse, usted) aquí.|siéntese", "___ (comer, vosotros) más fruta.|comed"] },
    { l: 3, type: "order", t: "Give advice", i: "Tap the words in the right order.", items: [
      "Bebe mucha agua y descansa.", "Tómese una pastilla cada ocho horas.", "Deberías hacer más deporte.", "Si te duele la cabeza, acuéstate.", "Tienes que ir al médico."] },
    /* Lesson 4 · Repaso */
    { l: 4, type: "tf", t: "Reading: «En el médico»", text: "— Buenos días, doctora. — Buenos días. ¿Qué le pasa?\n— Desde hace tres días me duele mucho la garganta y tengo tos. Además, estoy muy cansado y un poco mareado.\n— ¿Tiene fiebre? — Sí, ayer tuve 38 grados.\n— Bueno, tiene gripe. Tómese este jarabe tres veces al día y beba mucha agua. Quédese en casa y descanse. Si tiene fiebre, tome un paracetamol.\n— ¿Puedo ir al gimnasio? — No, esta semana descanse.", items: [
      ["El paciente habla de usted con la doctora.", true], ["Le duele la garganta desde hace una semana.", false], ["Está mareado.", true], ["Tiene un resfriado.", false], ["Tiene que tomar el jarabe tres veces al día.", true], ["Puede ir al gimnasio.", false]] },
    { l: 4, type: "fill", t: "Mixed review", i: "Write one word in each blank.", items: [
      "Me ___ los brazos.|duelen", "Tengo ___ de muelas. (pain)|dolor", "Hoy (yo) ___ muy contenta.|estoy", "Mi profesor ___ muy serio.|es",
      "Me ___ nervioso en las entrevistas.|pongo", "___ (tú, hacer) los ejercicios.|haz", "___ (usted, beber) agua.|beba", "___ (tú, ducharse) con agua caliente.|dúchate"] },
    { l: 4, type: "order", t: "Make sentences", i: "Tap the words in the right order.", items: [
      "Me duele mucho la espalda.", "Estoy resfriada desde el domingo.", "Hoy mi jefe está de buen humor.", "Haz ejercicio todos los días.", "Me pongo triste cuando llueve."] }
  ],
  exam: [
    { type: "match", t: "Vocabulary", i: "Connect the words.", items: [
      ["la rodilla", "knee"], ["la garganta", "throat"], ["la tos", "cough"], ["mareado", "dizzy"], ["preocupado", "worried"], ["el jarabe", "cough syrup"], ["descansar", "to rest"], ["el estrés", "stress"]] },
    { type: "mc", t: "Choose the answer", items: [
      ["[[Me ___ la cabeza.]]", ["duele", "duelen", "dolor"], 0],
      ["[[A mis hijos les ___ los oídos.]]", ["duele", "duelen", "duelo"], 1],
      ["[[___ gripe desde el martes.]]", ["Tengo", "Estoy", "Soy"], 0],
      ["[[Mi madre ___ muy preocupada por mi abuelo.]]", ["es", "está", "tiene"], 1],
      ["[[Esta clase ___ muy aburrida.]] (boring)", ["es", "está", "pone"], 0],
      ["Imperative, tú, poner:", ["pone", "pon", "ponga"], 1],
      ["Imperative, usted, descansar:", ["descansa", "descanse", "descansad"], 1],
      ["[[___ ahora mismo.]] (acostarse, tú)", ["Acuéstate", "Te acuesta", "Acostate"], 0]] },
    { type: "fill", t: "Health", i: "Write one word in each blank.", items: [
      "Me ___ mucho las piernas.|duelen", "¿Qué te ___? — Estoy mareado.|pasa", "Tengo 38 de ___.|fiebre", "Estoy ___ y no paro de estornudar. (have a cold)|resfriado~resfriada", "Tengo ___ y no puedo comer nada. (feel sick)|náuseas",
      "A mi padre le duele la ___ de estar sentado. (back)|espalda", "La médica me ha dado una ___. (prescription)|receta", "Tome dos ___ al día. (pills)|pastillas", "Hay que llevar una vida ___.|sana", "El ___ es un problema del siglo XXI. (stress)|estrés"] },
    { type: "fill", t: "Moods and advice", i: "Write one word in each blank.", items: [
      "Mi novio ___ muy tranquilo, nunca se enfada.|es", "Hoy (nosotros) ___ muy estresados.|estamos", "Me ___ nerviosa en los aviones.|pongo", "___ (tú, salir) a correr por las mañanas.|sal",
      "___ (tú, decir) la verdad.|di", "___ (usted, tener) cuidado.|tenga", "___ (tú, tomarse) un café.|tómate", "___ hacer más ejercicio. (you should)|deberías"] },
    { type: "tf", t: "Reading: «El mal del siglo XXI»", text: "Según los médicos, el sedentarismo es uno de los grandes problemas del siglo XXI. Pasamos muchas horas sentados delante del ordenador y nos movemos muy poco.\nPor eso hoy muchas personas tienen dolor de espalda y de cuello. Además, el sedentarismo nos pone de mal humor y aumenta el estrés.\nLos expertos dan estos consejos: levántate cada hora y camina cinco minutos; usa las escaleras, no el ascensor; haz deporte tres veces por semana y duerme al menos siete horas.", items: [
      ["El sedentarismo es un problema moderno.", true], ["Pasamos mucho tiempo de pie.", false], ["El sedentarismo puede producir dolor de cuello.", true], ["Nos pone de buen humor.", false], ["Los expertos recomiendan usar el ascensor.", false], ["Recomiendan dormir al menos siete horas.", true]] },
    { type: "order", pts: 2, t: "Build sentences", i: "Put the words in order.", items: [
      "Me duele mucho la garganta.", "Hoy estoy de muy buen humor.", "Bebe mucha agua y descansa.", "Me pongo nervioso cuando hablo en público.", "Tómese este jarabe por la noche."] }
  ]
});
