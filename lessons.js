/* From Unidad 6 on, each unidad is taught in four classes (three new-material lessons + one revision).
   This file tags the practice sets of units 6–9 with their lesson (l: 1–4) and adds new sets so every lesson
   has its own exercises. Loaded after practice.js. Format of a set: see quiz.js. */
const LESSONS = {
  6: { first: 6, titles: ["La hora y los días", "Mi rutina diaria", "Verbos irregulares y frecuencia", "Repaso"] },
  7: { first: 10, titles: ["Comida y bebida", "En el restaurante", "lo, la, los, las y «se»", "Repaso"] },
  8: { first: 14, titles: ["Mi barrio", "¿Cómo llego?", "Comparar barrios", "Repaso"] },
  9: { first: 18, titles: ["Saber y poder", "Experiencias", "Participios y cualidades", "Repaso"] }
};

(function () {
  const tag = (set, l) => Object.assign({}, set, { l });
  const o6 = PRACTICE[6], o7 = PRACTICE[7], o8 = PRACTICE[8], o9 = PRACTICE[9];

  PRACTICE[6] = [
    /* Lesson 1 · La hora y los días */
    tag(o6[0], 1),
    { l: 1, type: "fill", t: "Telling the time", i: "Write the missing word.", items: [
      "3:30 → Son las tres y ___.|media", "11:15 → Son las once y ___.|cuarto", "8:45 → Son las nueve menos ___.|cuarto",
      "2:00 → Son las ___ en punto.|dos", "6:10 → Son las seis y ___.|diez", "4:50 → Son las cinco menos ___.|diez"] },
    { l: 1, type: "mc", t: "Days and times", items: [
      ["[[¿___ hora empieza la película?]]", ["A qué", "Qué", "Cuál"], 0],
      ["[[¿Qué hora es? — ___ las cinco.]]", ["Es", "A", "Son"], 2],
      ["[[El día después del jueves es el ___.]]", ["miércoles", "viernes", "sábado"], 1],
      ["Every Monday: [[___ lunes voy al gimnasio.]]", ["Los", "El", "En"], 0],
      ["[[a las ocho ___ la noche]]", ["por", "en", "de"], 2],
      ["In the afternoon: [[___ la tarde]]", ["por", "de", "a"], 0]] },
    { l: 1, type: "order", t: "Make sentences", i: "Tap the words in the right order.", items: [
      "La clase empieza a las nueve y media.", "¿A qué hora abre el supermercado?", "Los sábados trabajo por la mañana.", "Es la una menos cuarto.", "El lunes tengo una cita a las diez."] },

    /* Lesson 2 · Mi rutina diaria */
    tag(o6[1], 2),
    { l: 2, type: "fill", t: "Before, after and in what order", i: "Write the missing word.", items: [
      "___ de desayunar, me ducho. (before)|Antes", "Me lavo los dientes ___ de comer. (after)|después", "Antes de ___, leo un poco. (acostarse, yo)|acostarme",
      "Después de ___, me visto. (ducharse, yo)|ducharme", "Primero me levanto, ___ me ducho. (then)|luego~después", "Y al ___, salgo de casa. (in the end)|final"] },
    { l: 2, type: "order", t: "Make sentences", i: "Tap the words in the right order.", items: [
      "Me levanto a las siete menos cuarto.", "Mi hermana se ducha por la noche.", "Antes de desayunar, me visto.", "¿A qué hora te despiertas?", "Nos acostamos muy tarde los viernes."] },
    { l: 2, type: "tf", t: "Read: Julia's morning", text: "Me llamo Julia y soy estudiante. Me despierto a las siete, pero me levanto a las siete y cuarto. Primero me ducho y luego me visto. Antes de salir de casa, desayuno un café con leche y una tostada. Mi hermano se levanta más tarde, a las ocho. Por la noche, después de cenar, me lavo los dientes y me acuesto a las once.", items: [
      ["Julia se levanta a las siete.", false], ["Se ducha antes de vestirse.", true], ["Desayuna después de salir de casa.", false], ["Su hermano se levanta a las ocho.", true], ["Julia se acuesta a las once.", true]] },

    /* Lesson 3 · Verbos irregulares y frecuencia */
    tag(o6[2], 3),
    { l: 3, type: "mc", t: "How often? Me too?", items: [
      ["[[___ como carne: soy vegetariano.]]", ["Siempre", "Nunca", "A veces"], 1],
      ["[[—Juego al tenis los lunes. —Yo ___.]] (you agree)", ["también", "tampoco", "sí"], 0],
      ["[[—No salgo los domingos. —Yo ___.]] (you agree)", ["también", "sí", "tampoco"], 2],
      ["[[—Nunca hago deporte. —Yo ___.]] (you disagree)", ["tampoco", "sí", "también"], 1],
      ["[[Voy al gimnasio dos ___ por semana.]]", ["horas", "veces", "días"], 1],
      ["[[Los viernes yo ___ con mis amigos.]] (salir)", ["salo", "sale", "salgo"], 2]] },
    { l: 3, type: "order", t: "Make sentences", i: "Tap the words in the right order.", items: [
      "Siempre hago la compra los sábados.", "Mi padre nunca duerme la siesta.", "¿Vas al trabajo en metro?", "A veces juego al baloncesto con mis primos.", "Normalmente vuelvo a casa a las seis."] },

    /* Lesson 4 · Repaso */
    tag(o6[3], 4), tag(o6[4], 4), tag(o6[5], 4)
  ];

  PRACTICE[7] = [
    /* Lesson 1 · Comida y bebida */
    tag(o7[0], 1),
    { l: 1, type: "fill", t: "de, con or sin?", i: "Write de, con or sin.", items: [
      "un bocadillo ___ jamón|de", "un café ___ leche|con", "agua ___ gas (without)|sin", "una tarta ___ chocolate|de",
      "pollo ___ patatas|con", "un té ___ azúcar (without)|sin", "un zumo ___ naranja|de", "arroz ___ verduras|con"] },
    { l: 1, type: "mc", t: "What's in it? How is it cooked?", items: [
      ["Odd one out:", ["la manzana", "el plátano", "la cebolla", "la naranja"], 2],
      ["Odd one out:", ["el agua", "el zumo", "el pan", "la leche"], 2],
      ["Cooked on the grill:", ["frito", "a la plancha", "crudo"], 1],
      ["Not cooked at all:", ["asado", "frito", "crudo"], 2],
      ["[[¿Qué ___ la paella? — Arroz, marisco y verduras.]]", ["lleva", "tiene que", "pone"], 0],
      ["fried potatoes: [[unas patatas ___]]", ["fritos", "fritas", "frita"], 1]] },

    /* Lesson 2 · En el restaurante */
    tag(o7[2], 2),
    { l: 2, type: "fill", t: "Ordering, traer and poner", i: "Write the missing word.", items: [
      "¿Me ___ la carta, por favor? (traer, usted)|trae", "¿Me ___ un café con leche? (poner, usted)|pone", "Yo ___ la mesa todos los días. (poner)|pongo",
      "Yo ___ el postre a la cena. (traer)|traigo", "Una ___ para dos, por favor. (table)|mesa", "De ___, quiero el flan. (dessert)|postre"] },
    { l: 2, type: "order", t: "Make sentences", i: "Tap the words in the right order.", items: [
      "Una mesa para tres, por favor.", "De primero quiero la sopa de verduras.", "¿Me trae más pan, por favor?", "Para beber, una botella de agua.", "La cuenta, por favor."] },

    /* Lesson 3 · lo, la, los, las y «se» */
    tag(o7[1], 3),
    { l: 3, type: "fill", t: "The impersonal se", i: "Write se + the verb (two words).", items: [
      "Primero ___ las patatas. (cortar)|se cortan", "Luego ___ aceite en la sartén. (poner)|se pone", "___ las patatas en aceite caliente. (freír)|Se fríen",
      "En España ___ muy tarde. (cenar)|se cena", "En Japón ___ mucho arroz. (comer)|se come", "El gazpacho ___ frío. (servir)|se sirve"] },
    { l: 3, type: "order", t: "Make sentences", i: "Tap the words in the right order.", items: [
      "El café lo tomo sin azúcar.", "Las verduras las compro en el mercado.", "Primero se corta la cebolla.", "En mi país se come mucho arroz.", "¿La paella la haces tú?"] },

    /* Lesson 4 · Repaso */
    tag(o7[3], 4), tag(o7[4], 4), tag(o7[5], 4)
  ];

  const o8mc = Object.assign({}, o8[2], { items: o8[2].items.slice(0, 5).concat([["Go straight on:", ["Gira a la derecha.", "Sigue todo recto.", "Cruza la plaza."], 1]]) });
  PRACTICE[8] = [
    /* Lesson 1 · Mi barrio */
    tag(o8[0], 1), tag(o8[1], 1),
    { l: 1, type: "fill", t: "hay, está, están · del, de la", i: "Write the missing word(s).", items: [
      "En mi calle ___ una panadería.|hay", "La panadería ___ al lado del banco.|está", "¿___ un cajero por aquí?|Hay", "Los bares ___ en la plaza.|están",
      "Cerca de mi casa ___ dos parques.|hay", "El bar está enfrente ___ farmacia. (de + la)|de la", "El cine está al lado ___ museo. (de + el)|del"] },

    /* Lesson 2 · ¿Cómo llego? */
    tag(o8mc, 2),
    { l: 2, type: "fill", t: "Giving directions", i: "Use the word bank.", bank: ["sigue", "gira", "toma", "cruza", "al final", "la segunda"], items: [
      "___ todo recto. (go)|Sigue", "___ a la izquierda. (turn)|Gira", "___ la primera calle a la derecha. (take)|Toma",
      "___ la plaza. (cross)|Cruza", "El museo está ___ de la calle. (at the end)|al final", "Toma ___ calle a la izquierda. (second)|la segunda"] },
    { l: 2, type: "order", t: "Make sentences", i: "Tap the words in the right order.", items: [
      "Perdona, ¿hay una farmacia por aquí?", "Toma la segunda calle a la derecha.", "No hay ningún banco en esta calle.", "¿Cuántos bares hay en tu barrio?", "La estación está a diez minutos andando."] },

    /* Lesson 3 · Comparar barrios */
    tag(o8[3], 3),
    { l: 3, type: "mc", t: "Comparing and what I like most", items: [
      ["[[El transporte aquí es ___ que en mi pueblo.]] (worse)", ["más malo", "peor", "menos"], 1],
      ["[[Lo que más me gusta de mi barrio ___ los parques.]]", ["es", "son", "está"], 1],
      ["[[Lo que menos me gusta ___ el ruido.]]", ["es", "son", "hay"], 0],
      ["[[Aquí no hay ___ tiendas como en el centro.]]", ["tantos", "tantas", "tan"], 1],
      ["[[Este barrio es ___ seguro como el mío.]]", ["tan", "tanto", "más"], 0],
      ["[[Madrid es más grande ___ Valencia.]]", ["como", "que", "de"], 1],
      ["The opposite of [[tranquilo]]:", ["limpio", "ruidoso", "barato"], 1]] },
    { l: 3, type: "order", t: "Make sentences", i: "Tap the words in the right order.", items: [
      "Mi pueblo es menos caro que la ciudad.", "Lo que más me gusta es el parque.", "Aquí hay más zonas verdes que en el centro.", "El metro es mejor que el autobús.", "Este barrio es tan bonito como el mío."] },

    /* Lesson 4 · Repaso */
    { l: 4, type: "fill", t: "Mixed revision", i: "Write the missing word.", items: [
      "En mi barrio ___ dos supermercados.|hay", "¿Hay ___ farmacia cerca? (any)|alguna", "___ a la derecha en el semáforo. (turn)|Gira",
      "El centro es ___ ruidoso que las afueras. (more)|más", "Mi calle es ___ que la tuya. (better)|mejor", "¿___ gente vive en tu edificio? (how much)|Cuánta"] },
    tag(o8[4], 4), tag(o8[5], 4)
  ];

  PRACTICE[9] = [
    /* Lesson 1 · Saber y poder */
    { l: 1, type: "fill", t: "saber or poder", i: "Conjugate the verb.", items: [
      "Yo no ___ nadar. (saber)|sé", "¿___ (tú) cerrar la ventana, por favor? (poder)|Puedes", "Mis hijos ya ___ leer. (saber)|saben",
      "Hoy no ___ (nosotros) salir: tenemos que trabajar. (poder)|podemos", "¿Usted ___ conducir? (saber)|sabe", "Aquí no se ___ fumar. (poder)|puede"] },
    { l: 1, type: "match", t: "Skills", i: "Connect each skill with its meaning.", items: [
      ["conducir", "to drive"], ["nadar", "to swim"], ["dibujar", "to draw"], ["esquiar", "to ski"], ["tocar la guitarra", "to play the guitar"], ["arreglar cosas", "to fix things"], ["hablar en público", "to speak in public"], ["fatal", "really badly"]] },
    { l: 1, type: "order", t: "Make sentences", i: "Tap the words in the right order.", items: [
      "Sé tocar el piano un poco.", "¿Puedes ayudarme con la maleta?", "Mi abuela no sabe usar el móvil.", "Lo siento, mañana no puedo ir.", "¿Sabes hablar francés?"] },

    /* Lesson 2 · Experiencias */
    { l: 2, type: "fill", t: "The pretérito perfecto (regular)", i: "Write haber + participle (two words).", items: [
      "Yo ___ en Chile dos veces. (estar)|he estado", "¿Tú ___ alguna vez tango? (bailar)|has bailado", "Mi madre nunca ___ en avión. (viajar)|ha viajado",
      "Nosotros ya ___. (comer)|hemos comido", "¿Vosotros ___ a Roma? (ir)|habéis ido", "Ellos ___ en Japón tres años. (vivir)|han vivido"] },
    { l: 2, type: "mc", t: "Experiences: ya, todavía no, alguna vez", items: [
      ["[[¿Has estado ___ en Cuba?]]", ["nunca", "alguna vez", "ya no"], 1],
      ["[[—¿Has terminado? —No, ___.]]", ["todavía no", "ya", "nunca no"], 0],
      ["[[—¿Has comido? —Sí, ___ he comido.]]", ["todavía", "ya", "alguna vez"], 1],
      ["I have never eaten sushi:", ["Nunca he comido sushi.", "He nunca comido sushi.", "Nunca he comida sushi."], 0],
      ["[[Ella ___ en México dos veces.]]", ["has estado", "ha estado", "han estado"], 1],
      ["The participle of [[aprender]]:", ["aprendado", "aprendito", "aprendido"], 2]] },
    { l: 2, type: "order", t: "Make sentences", i: "Tap the words in the right order.", items: [
      "Nunca he estado en Asia.", "¿Has comido alguna vez paella?", "Ya hemos terminado el ejercicio.", "Todavía no he llamado a mi madre.", "Mis padres han viajado mucho."] },

    /* Lesson 3 · Participios y cualidades */
    tag(o9[0], 3),
    { l: 3, type: "match", t: "Qualities and flaws", i: "Connect each word with its opposite.", items: [
      ["puntual", "impuntual"], ["ordenado", "desordenado"], ["paciente", "impaciente"], ["tranquilo", "nervioso"], ["responsable", "despistado"], ["sociable", "tímido"]] },
    { l: 3, type: "fill", t: "Irregular participles and «una persona que»", i: "Write the missing word(s).", items: [
      "¿Qué ___ (tú) hoy? (hacer)|has hecho", "Nunca ___ (yo) la nieve. (ver)|he visto", "¿Dónde ___ (tú) las llaves? (poner)|has puesto",
      "Mi hijo ___ un vaso. (romper)|ha roto", "Mi jefa es una persona ___ nunca llega tarde.|que", "Todavía no ___ (ellos) a casa. (volver)|han vuelto"] },

    /* Lesson 4 · Repaso */
    tag(o9[1], 4), tag(o9[2], 4), tag(o9[3], 4), tag(o9[4], 4), tag(o9[5], 4)
  ];
})();
