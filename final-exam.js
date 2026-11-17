/* Final exam of Aula Plus 1: Unidades 1–9, 100 points. Shown after Unidad 9 in the Aula Plus 1 list.
   A match 10 · B choose 15 · C fill 15 · D fill 15 · E fill 15 · F reading 10 · G sentences 10 × 2 = 100 points.
   Loaded after exams.js and before app.js. Original material. */
const FINAL_UNITS = [{
  id: 99, book: 1, n: 99, final: true, es: "Examen final", en: "Final exam · Unidades 1–9",
  goals: ["Shows what you can do after the whole of Aula Plus 1", "7 parts, 100 points, about 60 minutes", "Do it without the book, then review the units where you lost points"],
  grammar: [], vocab: [], phrases: [], ex: []
}];

EXAMS[99] = [
  { type: "match", t: "Vocabulary from the whole book", i: "Connect the words. (Unidades 1–9)", items: [
    ["la abuela", "grandmother"], ["la camiseta", "T-shirt"], ["el desayuno", "breakfast"], ["la farmacia", "chemist's"], ["el abogado", "lawyer"],
    ["llover", "to rain"], ["acostarse", "to go to bed"], ["la cuenta", "the bill"], ["despistado", "absent-minded"], ["a la derecha", "on the right"]] },

  { type: "mc", t: "Choose the answer", items: [
    ["[[Ella ___ médica y ___ treinta años.]] (U1)", ["es / tiene", "está / tiene", "es / es"], 0],
    ["[[¿Por qué estudias español? — ___ quiero viajar a México.]] (U2)", ["Por qué", "Porque", "Para"], 1],
    ["[[En mi ciudad ___ un museo muy bonito.]] (U3)", ["está", "es", "hay"], 2],
    ["[[El museo ___ en el centro.]] (U3)", ["hay", "está", "es"], 1],
    ["[[Madrid es una ciudad ___ grande.]] (U3)", ["muy", "mucho", "muchas"], 0],
    ["[[¿Cuánto cuestan ___ zapatos?]] (these, U4)", ["este", "estas", "estos"], 2],
    ["[[Mañana ___ que trabajar.]] (I have to, U4)", ["tengo", "soy", "voy"], 0],
    ["[[A mis padres ___ el cine.]] (U5)", ["les gustan", "les gusta", "le gusta"], 1],
    ["[[A mí me encantan ___ películas de terror.]] (U5)", ["las", "los", "unas"], 0],
    ["[[___ hermanos de Carmen viven en Lima.]] (her brothers, U5)", ["Su", "Sus", "Tus"], 1],
    ["[[Son las ocho ___ cuarto.]] (7:45, U6)", ["y", "menos", "de"], 1],
    ["[[— ¿Tienes el pan? — Sí, ___ tengo.]] (U7)", ["lo", "la", "le"], 0],
    ["[[Mi barrio es ___ tranquilo que el centro.]] (U8)", ["tan", "más", "mucho"], 1],
    ["[[No ___ nadar, nunca he aprendido.]] (U9)", ["puedo", "sé", "conozco"], 1],
    ["[[¿Has estado ___ en Cuba?]] (ever, U9)", ["nunca", "ya", "alguna vez"], 2]] },

  { type: "fill", t: "Verbs in the present", i: "Write the verb in the present tense. (Unidades 1, 2, 5, 6, 9)", items: [
    "Nosotros ___ (vivir) en un piso pequeño.|vivimos", "¿Tú ___ (hablar) inglés?|hablas", "Mis amigos ___ (ser) colombianos.|son",
    "Yo ___ (tener) dos hermanas.|tengo", "¿Vosotros ___ (comer) en casa?|coméis", "Mi madre ___ (preferir) el té.|prefiere",
    "Yo ___ (querer) aprender a cocinar.|quiero", "Yo me ___ (levantar) a las siete.|levanto", "Ellos se ___ (acostar) muy tarde.|acuestan",
    "La clase ___ (empezar) a las nueve.|empieza", "Yo ___ (hacer) deporte los lunes.|hago", "Yo ___ (ir) al trabajo en metro.|voy",
    "Los sábados yo ___ (salir) con mis amigos.|salgo", "Mi hermano ___ (volver) a casa a las seis.|vuelve", "¿Tú ___ (saber) conducir?|sabes"] },

  { type: "fill", t: "Small words that matter", i: "Write one word in each blank. (Unidades 1–8)", items: [
    "Hola, ___ llamo Julia. (U1)|me", "Mi hermana es ___ (tall, U5).|alta", "Mis primos son muy ___ (nice, U5).|simpáticos",
    "Pedro ___ de Argentina. (U1)|es", "A Juan ___ gusta mucho bailar. (U5)|le", "¿A ti te ___ los gatos? (U5)|gustan",
    "Tengo ___ amigo en Valencia. (a, U2)|un", "La farmacia está ___ lado del banco. (next to the bank, U8)|al",
    "¿___ hay una panadería por aquí? (where, U8)|dónde", "Para mí, una ensalada y ___ segundo, pescado. (U7)|de",
    "Normalmente ___ ducho por la mañana. (U6)|me", "Esta camiseta es ___ cara que esa. (more, U4/U8)|más",
    "Hoy hace ___ calor. (a lot of, U3)|mucho", "En invierno en Moscú ___ mucho frío. (U3)|hace", "Mi casa está ___ de la estación. (near, U8)|cerca"] },

  { type: "fill", t: "Pretérito perfecto and participles", i: "Write the pretérito perfecto. (Unidad 9)", items: [
    "Yo nunca ___ (estar) en Japón.|he estado", "¿Tú ___ (probar) alguna vez el mole?|has probado", "Mi hermano ya ___ (terminar) la carrera.|ha terminado",
    "Nosotros ___ (vivir) en tres países.|hemos vivido", "¿Vosotros ___ (comer) ya?|habéis comido", "Ellos todavía no ___ (llegar).|han llegado",
    "¿Quién ___ (abrir) la ventana?|ha abierto", "Yo no ___ (hacer) los deberes.|he hecho", "¿___ (ver, tú) mis gafas?|has visto",
    "Ana ___ (escribir) un libro.|ha escrito", "Mi hijo ___ (romper) un vaso.|ha roto", "¿Dónde ___ (poner, tú) las llaves?|has puesto",
    "Mis padres ___ (volver) de vacaciones.|han vuelto", "¿Qué te ___ (decir) el médico?|ha dicho", "Yo me ___ (levantar) tarde hoy.|he levantado"] },

  { type: "tf", t: "Reading: «Un año en Sevilla»", text: "Me llamo Tomás, soy canadiense y tengo veintiocho años. Soy ingeniero, pero este año vivo en Sevilla porque quiero aprender español.\nVivo en un piso en el barrio de Triana, al lado del río. Es un barrio muy bonito y tranquilo, con muchos bares y tiendas pequeñas, pero no hay metro cerca.\nTodos los días me levanto a las siete y media, desayuno un café con tostadas y voy a la academia en bici. Las clases empiezan a las nueve y terminan a la una.\nMe encanta la comida de aquí, sobre todo el gazpacho, pero no me gusta cenar tan tarde: los españoles cenan a las diez.\nEste año he hecho muchas cosas nuevas: he aprendido a bailar sevillanas y he visitado Granada y Córdoba. Todavía no he estado en Madrid.", items: [
    ["Tomás es ingeniero.", true], ["Tomás vive en Sevilla para trabajar.", false], ["Su barrio está cerca del río.", true], ["Hay una estación de metro al lado de su casa.", false],
    ["Tomás va a clase en bicicleta.", true], ["Las clases duran cuatro horas.", true], ["A Tomás le gusta cenar a las diez.", false],
    ["Le gusta mucho el gazpacho.", true], ["Sabe bailar sevillanas.", true], ["Ya ha visitado Madrid.", false]] },

  { type: "order", pts: 2, t: "Build sentences", i: "Put the words in order. 2 points each.", items: [
    "Me llamo Ana y soy de Chile.", "Estudio español porque quiero viajar.", "¿Dónde está la estación de tren?", "Esta chaqueta es más cara que esa.",
    "A mi hermano le encanta el fútbol.", "Los domingos me levanto muy tarde.", "De primero quiero una sopa de verduras.",
    "En mi barrio hay muchos parques.~Hay muchos parques en mi barrio.", "¿Has estado alguna vez en Perú?", "Mi madre sabe tocar el piano muy bien."] }
];
