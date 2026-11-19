/* Unidades 1–5 of Aula Plus 1 split into four classes each, like Unidades 6–9:
   three new-material lessons + one revision lesson.
   This file adds, for each unidad: the lesson titles (LESSONS), which clase teaches each grammar card, vocab group,
   phrase, listening sentence and speaking question (CLASE_MAP, same order as on screen), a few extra phrases /
   listening sentences / speaking questions so every clase has some, and the practice sets tagged by lesson, with new
   sets so each lesson has its own exercises. Loaded after clases.js and before app.js. All material is original. */
(function () {
  const tag = (set, l) => Object.assign({}, set, { l });
  const addPhrases = (id, list) => { const x = UPDATES[id] || (UPDATES[id] = {}); (x.phrases || (x.phrases = [])).push(...list); };

  /* ---------- lesson titles; Aula 1 classes are numbered 1–36 (Unidad 1 = classes 1–4 … Unidad 9 = 33–36) ---------- */
  Object.assign(LESSONS, {
    1: { first: 1, titles: ["Me llamo… y los números", "¿De dónde eres?", "Profesiones, edad y usted", "Repaso"] },
    2: { first: 5, titles: ["Los idiomas y los artículos", "Verbos regulares en presente", "¿Por qué? Querer y para", "Repaso"] },
    3: { first: 9, titles: ["Países y ciudades: hay y está", "¿Cómo es? Muy, mucho y preguntas", "El tiempo y las estaciones", "Repaso"] },
    4: { first: 13, titles: ["La ropa y los colores", "En la tienda: este y los precios", "¿Cuál prefieres? Tener que", "Repaso"] },
    5: { first: 17, titles: ["Gustos: gustar y encantar", "La familia y los posesivos", "¿Cómo es? Describir personas", "Repaso"] }
  });
  [6, 7, 8, 9].forEach((u, k) => { LESSONS[u].first = 21 + k * 4; });

  /* ---------- extra phrases, listening and speaking for clases that had none ---------- */
  addPhrases(1, [["¿Cuál es tu número de teléfono?", "What is your phone number?"]]);
  addPhrases(2, [["El árabe es un idioma difícil.", "Arabic is a difficult language."]]);
  addPhrases(4, [["Hoy llevo una camiseta azul.", "Today I am wearing a blue T-shirt."]]);
  SKILLS[1].listen.push(
    { mode: "choose", es: "Mi apellido es García.", en: "My surname is García." },
    { mode: "write", es: "Ella se llama Carmen.", en: "Her name is Carmen." });
  SKILLS[2].listen.push(
    { mode: "choose", es: "Los idiomas son muy interesantes.", en: "Languages are very interesting." },
    { mode: "write", es: "El examen es fácil.", en: "The exam is easy." });
  SKILLS[2].talk.push({ q: "¿Qué idioma es difícil para ti?", qen: "Which language is difficult for you?", model: "El chino es un idioma difícil para mí.", men: "Chinese is a difficult language for me." });

  /* ---------- which clase (1–3) teaches each item ---------- */
  Object.assign(CLASE_MAP, {
    1: {
      grammar: [2, 3, 1, 1, 1, 2, 2, 3, 1, 3],
      vocab:   [1, 2, 3, 3, 3, 2, 1, 1, 1],
      phrases: [2, 2, 2, 3, 3, 3, 3, 3, 3, 1, 1],
      listen:  [3, 2, 3, 3, 2, 2, 1, 1],
      talk:    [1, 2, 3]
    },
    2: {
      grammar: [1, 2, 3, 3],
      vocab:   [2, 3, 1, 1, 2, 3, 1, 2, 3],
      phrases: [3, 3, 2, 2, 2, 2, 2, 1],
      listen:  [3, 3, 3, 2, 2, 2, 1, 1],
      talk:    [3, 3, 2, 1]
    },
    3: {
      grammar: [1, 2, 2, 3, 1, 2],
      vocab:   [1, 3, 1, 1, 3, 3, 1, 2],
      phrases: [1, 1, 2, 1, 3, 2, 2],
      listen:  [2, 1, 3, 3, 1, 3],
      talk:    [1, 2, 3]
    },
    4: {
      grammar: [2, 1, 2, 1, 3, 3, 2],
      vocab:   [3, 2, 1, 1, 1, 1, 2, 3, 2, 2],
      phrases: [2, 2, 2, 3, 2, 2, 2, 3, 1],
      listen:  [2, 3, 2, 1, 2, 2],
      talk:    [1, 3, 2]
    },
    5: {
      grammar: [1, 1, 2, 3, 1, 3, 3, 3],
      vocab:   [1, 3, 3, 2, 2, 3, 3, 1, 2],
      phrases: [1, 2, 2, 3, 3, 1, 1, 3, 3],
      listen:  [1, 1, 2, 3, 3, 1],
      talk:    [2, 3, 1]
    }
  });

  /* ---------- practice, by lesson ---------- */
  const o1 = PRACTICE[1], o2 = PRACTICE[2], o3 = PRACTICE[3], o4 = PRACTICE[4], o5 = PRACTICE[5];

  PRACTICE[1] = [
    /* Lesson 1 · Me llamo… y los números */
    { l: 1, type: "fill", t: "llamarse and the pronouns", i: "Write the missing word.", items: [
      "¿Cómo te ___? — Me llamo Pedro.|llamas", "Yo me ___ Lucía.|llamo", "Mi profesora se ___ Carmen.|llama", "¿Cómo se llama ___? (you, formal)|usted",
      "___ se llama Juan. (he)|Él", "___ nos llamamos Ana y Eva. (we, all women)|Nosotras", "¿Cuál es tu ___? — García. (surname)|apellido", "¿Cuál es tu número de ___? (phone)|teléfono"] },
    { l: 1, type: "match", t: "Numbers", i: "Connect each number with its figure.", items: [
      ["quince", "15"], ["treinta y dos", "32"], ["cuarenta y ocho", "48"], ["sesenta", "60"], ["setenta y uno", "71"], ["ochenta y cinco", "85"], ["noventa y nueve", "99"], ["cien", "100"]] },
    { l: 1, type: "order", t: "Make sentences", i: "Tap the words in the right order.", items: [
      "Me llamo Marta, ¿y tú?", "¿Cuál es tu apellido?", "Mi hermano se llama Pablo.", "Ellas se llaman Rosa y Elena.", "¿Cómo se escribe tu nombre?"] },

    /* Lesson 2 · ¿De dónde eres? */
    tag(o1[1], 2),
    { l: 2, type: "fill", t: "The verb ser", i: "Write the correct form of ser.", items: [
      "Yo ___ de Colombia.|soy", "Tú ___ mexicana, ¿no?|eres", "Él ___ francés.|es", "Nosotros ___ de Brasil.|somos",
      "Vosotras ___ italianas.|sois", "Ellas ___ de Perú.|son", "Usted ___ de Argentina, ¿verdad?|es", "¿De dónde ___ ustedes?|son"] },
    { l: 2, type: "mc", t: "Where are you from?", items: [
      ["A woman from Italy is…", ["italiana", "italiano", "Italia"], 0],
      ["A man from Germany is…", ["alemán", "alemana", "Alemania"], 0],
      ["[[Ella es ___.]] (from Canada)", ["canadiense", "canadiensa", "canadienso"], 0],
      ["[[Ella es ___.]] (from England)", ["inglesa", "inglés", "Inglaterra"], 0],
      ["[[—¿De dónde eres? —___ de Cuba.]]", ["Soy", "Es", "Eres"], 0],
      ["Same form for a man and a woman:", ["marroquí", "mexicano", "portugués"], 0]] },
    { l: 2, type: "order", t: "Make sentences", i: "Tap the words in the right order.", items: [
      "Soy de Colombia, de Bogotá.", "¿De dónde es usted?", "Mi amiga es francesa.", "Ellos son de Argentina.", "¿Eres española o mexicana?"] },

    /* Lesson 3 · Profesiones, edad y usted */
    tag(o1[2], 3),
    { l: 3, type: "fill", t: "tener, age and work", i: "Write the missing word.", items: [
      "Yo ___ treinta años. (tener)|tengo", "¿Cuántos años ___ (tú)? (tener)|tienes", "Mi madre ___ cincuenta y dos años. (tener)|tiene", "¿Cuántos años ___ usted? (tener)|tiene",
      "Nosotros ___ veinte años. (tener)|tenemos", "Ellos ___ dieciocho años. (tener)|tienen", "¿A qué te ___? — Soy periodista.|dedicas", "Soy camarero y trabajo en un ___. (a place)|bar~restaurante"] },
    { l: 3, type: "match", t: "Who works where?", i: "Connect each job with its workplace.", items: [
      ["el médico", "el hospital"], ["la profesora", "la universidad"], ["el camarero", "el restaurante"], ["la periodista", "el periódico"],
      ["el científico", "el laboratorio"], ["la guía turística", "la agencia de viajes"], ["el secretario", "la empresa"]] },
    { l: 3, type: "order", t: "Make sentences", i: "Tap the words in the right order.", items: [
      "¿A qué se dedica usted?", "Soy periodista y trabajo en un periódico.", "¿Cuántos años tiene usted?", "Mi padre tiene sesenta años.", "Trabajo en una agencia de viajes."] },

    /* Lesson 4 · Repaso */
    tag(o1[0], 4), tag(o1[3], 4), tag(o1[4], 4), tag(o1[5], 4)
  ];

  PRACTICE[2] = [
    /* Lesson 1 · Los idiomas y los artículos */
    tag(o2[0], 1),
    { l: 1, type: "fill", t: "un, una, unos, unas", i: "Write the indefinite article (a / some).", items: [
      "___ libro|un", "___ palabra|una", "___ frases|unas", "___ cursos|unos", "___ examen|un", "___ clase|una", "___ idioma|un", "___ canciones|unas"] },
    { l: 1, type: "match", t: "Languages", i: "Connect each language with its meaning.", items: [
      ["el alemán", "German"], ["el italiano", "Italian"], ["el árabe", "Arabic"], ["el ruso", "Russian"], ["el coreano", "Korean"], ["el chino", "Chinese"], ["el portugués", "Portuguese"], ["el japonés", "Japanese"]] },
    { l: 1, type: "mc", t: "Gender and plural", items: [
      ["The plural of [[la ciudad]]:", ["las ciudades", "las ciudads", "los ciudades"], 0],
      ["The plural of [[el examen]]:", ["los exámenes", "los examens", "las exámenes"], 0],
      ["[[___ foto]]", ["la", "el", "los"], 0],
      ["[[___ sistema]]", ["el", "la", "las"], 0],
      ["The plural of [[el idioma]]:", ["los idiomas", "las idiomas", "los idiomes"], 0],
      ["The plural of [[la frase]]:", ["las frases", "los frases", "las frasees"], 0]] },

    /* Lesson 2 · Verbos regulares en presente */
    tag(o2[1], 2),
    { l: 2, type: "mc", t: "The present and how well you speak", items: [
      ["[[Nosotros ___ en Lima.]] (vivir)", ["vivimos", "vivemos", "viven"], 0],
      ["[[¿Tú ___ el periódico?]] (leer)", ["lees", "leas", "lee"], 0],
      ["[[Ellas ___ mucho.]] (estudiar)", ["estudian", "estudias", "estudien"], 0],
      ["I don't speak any French:", ["No hablo nada de francés.", "No hablo un poco de francés.", "Hablo nada francés."], 0],
      ["[[Hablo inglés muy ___.]]", ["bien", "bueno", "bastante"], 0],
      ["[[Vosotros ___ cartas.]] (escribir)", ["escribís", "escribéis", "escriben"], 0]] },
    { l: 2, type: "fill", t: "Days and the present", i: "Write the missing word.", items: [
      "Yo ___ español los lunes. (estudiar)|estudio", "Mi hermano ___ en un banco. (trabajar)|trabaja", "¿___ (tú) música en clase? (escuchar)|Escuchas",
      "Nosotros ___ con los amigos los sábados. (practicar)|practicamos", "El día después del lunes es el ___.|martes", "El día después del sábado es el ___.|domingo"] },
    { l: 2, type: "order", t: "Make sentences", i: "Tap the words in the right order.", items: [
      "Hablo español bastante bien.", "Practico la pronunciación todos los días.", "¿Entiendes el vocabulario?", "Mis padres viven en Hanói.", "Los martes leo en español."] },

    /* Lesson 3 · ¿Por qué? Querer y para */
    tag(o2[2], 3), tag(o2[3], 3),
    { l: 3, type: "fill", t: "querer, porque and para", i: "Write the missing word.", items: [
      "Yo ___ aprender italiano. (querer)|quiero", "¿Tú ___ ver una película? (querer)|quieres", "Mi amiga ___ vivir en Madrid. (querer)|quiere", "Nosotros ___ viajar a México. (querer)|queremos",
      "¿Vosotros ___ cocinar hoy? (querer)|queréis", "Ellos ___ salir con amigos. (querer)|quieren", "Estudio español ___ mi novio es colombiano. (because)|porque", "Estudio inglés ___ trabajar en Londres. (to, in order to)|para"] },
    { l: 3, type: "order", t: "Make sentences", i: "Tap the words in the right order.", items: [
      "Quiero ir al cine este fin de semana.", "Estudio español porque me gusta viajar.", "¿Por qué quieres aprender chino?", "Para conocer gente nueva.", "Mi hermana quiere vivir en el extranjero."] },

    /* Lesson 4 · Repaso */
    { l: 4, type: "fill", t: "Mixed revision", i: "Write the missing word.", items: [
      "___ gramática es fácil. (the)|La", "Yo ___ un poco de francés. (hablar)|hablo", "Ella ___ aprender ruso. (querer)|quiere",
      "¿___ qué estudias español? (why)|Por", "Ellos ___ en un restaurante. (comer)|comen", "Quiero practicar ___ hablar con mis amigos. (to)|para"] },
    tag(o2[4], 4), tag(o2[5], 4)
  ];

  PRACTICE[3] = [
    /* Lesson 1 · Países y ciudades: hay y está */
    tag(o3[0], 1),
    { l: 1, type: "match", t: "Geography", i: "Connect each word with its meaning.", items: [
      ["el río", "river"], ["la montaña", "mountain"], ["el mar", "sea"], ["la isla", "island"], ["el desierto", "desert"], ["la frontera", "border"], ["la capital", "capital city"], ["el puente", "bridge"]] },
    { l: 1, type: "mc", t: "ser, estar or hay?", items: [
      ["[[Lima ___ la capital de Perú.]]", ["es", "está", "hay"], 0],
      ["[[Lima ___ en Perú.]]", ["está", "es", "hay"], 0],
      ["[[En Lima ___ un mercado muy famoso.]]", ["hay", "está", "es"], 0],
      ["[[¿Dónde ___ los museos?]]", ["están", "hay", "son"], 0],
      ["[[Bogotá ___ una ciudad grande.]]", ["es", "está", "hay"], 0],
      ["[[En el centro ___ una catedral.]]", ["hay", "está", "es"], 0]] },
    { l: 1, type: "order", t: "Make sentences", i: "Tap the words in the right order.", items: [
      "Bolivia está en América del Sur.", "En mi ciudad hay un río.", "¿Dónde está la catedral?", "Cuba es una isla.", "Hanói está en el norte de Vietnam."] },

    /* Lesson 2 · ¿Cómo es? Muy, mucho y preguntas */
    tag(o3[1], 2), tag(o3[3], 2),
    { l: 2, type: "fill", t: "Question words", i: "Write qué, cuál, cuántos, cuántas, dónde or cómo.", items: [
      "¿___ es tu ciudad? — Es grande y bonita.|Cómo", "¿___ está Montevideo? — En Uruguay.|Dónde", "¿___ habitantes tiene tu ciudad?|Cuántos",
      "¿___ hay en tu ciudad? — Un río y un mercado.|Qué", "¿___ es la capital de Colombia?|Cuál", "¿___ lenguas se hablan en Perú?|Cuántas"] },
    { l: 2, type: "order", t: "Make sentences", i: "Tap the words in the right order.", items: [
      "El Aconcagua es la montaña más alta de América.", "En Madrid hay muchos museos.", "Buenos Aires es una ciudad muy grande.", "¿Cuántos habitantes tiene Chile?", "¿Cuál es el lago más grande de tu país?"] },

    /* Lesson 3 · El tiempo y las estaciones */
    tag(o3[2], 3),
    { l: 3, type: "fill", t: "Weather and seasons", i: "Write the missing word.", items: [
      "En verano ___ calor.|hace", "En invierno ___ mucho en la montaña. (it snows)|nieva", "Hoy ___ nublado.|está", "En Londres ___ mucho. (it rains)|llueve",
      "¿Qué ___ hace hoy?|tiempo", "Después del verano viene el ___.|otoño", "La estación de las flores es la ___.|primavera"] },
    { l: 3, type: "mc", t: "What's the weather like?", items: [
      ["[[Hace ___ frío.]]", ["mucho", "muy", "mucha"], 0],
      ["[[Está ___.]] (cloudy)", ["nublado", "sol", "viento"], 0],
      ["The opposite of [[el norte]]:", ["el sur", "el este", "el oeste"], 0],
      ["[[En verano hace ___.]]", ["calor", "frío", "nieve"], 0],
      ["It's windy:", ["Hace viento.", "Está viento.", "Hay viento."], 0],
      ["[[Hace 35 grados.]] is about the…", ["=temperature", "=season", "=border"], 0]] },
    { l: 3, type: "order", t: "Make sentences", i: "Tap the words in the right order.", items: [
      "En verano hace mucho calor.", "¿Qué tiempo hace en tu ciudad?", "En el norte llueve mucho en otoño.", "Hoy hace sol y no hace viento.", "En invierno nieva en las montañas."] },

    /* Lesson 4 · Repaso */
    { l: 4, type: "fill", t: "Mixed revision", i: "Write the missing word.", items: [
      "En Chile ___ muchos volcanes.|hay", "Quito ___ en Ecuador.|está", "Cartagena es ___ bonita.|muy",
      "En invierno hace ___ frío.|mucho", "¿___ tiempo hace hoy?|Qué", "El Nilo es el río ___ largo del mundo.|más"] },
    tag(o3[4], 4), tag(o3[5], 4)
  ];

  PRACTICE[4] = [
    /* Lesson 1 · La ropa y los colores */
    tag(o4[2], 1), tag(o4[1], 1),
    { l: 1, type: "mc", t: "What are you wearing?", items: [
      ["[[unos pantalones ___]] (black)", ["negros", "negro", "negras"], 0],
      ["[[una falda ___]] (yellow)", ["amarilla", "amarillo", "amarillas"], 0],
      ["[[Hoy ___ una camisa blanca.]] (I'm wearing)", ["llevo", "llevas", "lleva"], 0],
      ["[[unas zapatillas ___]] (green)", ["verdes", "verdas", "verde"], 0],
      ["[[Mi hermana ___ un vestido rosa.]] (is wearing)", ["lleva", "llevo", "llevan"], 0],
      ["You wear it round your neck in winter:", ["la bufanda", "el cinturón", "los calcetines"], 0]] },
    { l: 1, type: "order", t: "Make sentences", i: "Tap the words in the right order.", items: [
      "Llevo una camiseta azul y unos vaqueros.", "Mi madre lleva un abrigo negro.", "Las botas marrones son muy bonitas.", "¿Qué ropa llevas hoy?", "Me gusta el vestido rojo."] },

    /* Lesson 2 · En la tienda: este y los precios */
    tag(o4[0], 2),
    { l: 2, type: "match", t: "Numbers over 100", i: "Connect each number with its figure.", items: [
      ["doscientos", "200"], ["trescientos", "300"], ["quinientos", "500"], ["setecientos", "700"], ["novecientos", "900"], ["mil", "1000"], ["ciento veinte", "120"], ["seiscientos cincuenta", "650"]] },
    { l: 2, type: "mc", t: "In the shop", items: [
      ["[[¿Cuánto ___ estos zapatos?]]", ["cuestan", "cuesta", "cuestas"], 0],
      ["[[¿Cuánto ___ esta camiseta?]]", ["cuesta", "cuestan", "cuesto"], 0],
      ["It's too big for me:", ["Me queda grande.", "Me queda bien.", "Soy grande."], 0],
      ["[[¿Puedo ___ esta chaqueta?]] (try on)", ["probarme", "llevarme", "pagarme"], 0],
      ["You pay with cash:", ["en efectivo", "con tarjeta", "en la caja"], 0],
      ["[[Esta chaqueta es muy ___.]] (expensive)", ["cara", "caro", "caras"], 0]] },
    { l: 2, type: "order", t: "Make sentences", i: "Tap the words in the right order.", items: [
      "¿Cuánto cuesta este jersey?", "Me llevo esta camisa blanca.", "Esta falda me queda pequeña.", "¿Puedo pagar con tarjeta?", "Los zapatos cuestan ochenta euros."] },

    /* Lesson 3 · ¿Cuál prefieres? Tener que */
    { l: 3, type: "fill", t: "preferir and tener que", i: "Write the correct form.", items: [
      "Yo ___ el vestido azul. (preferir)|prefiero", "¿Tú ___ el café o el té? (preferir)|prefieres", "Nosotros ___ ir en tren. (preferir)|preferimos",
      "Mañana ___ trabajar. (tener que, yo)|tengo que", "Para el viaje ___ llevar el pasaporte. (tener que, tú)|tienes que", "Mi madre ___ comprar un regalo. (tener que)|tiene que"] },
    { l: 3, type: "mc", t: "qué or cuál?", items: [
      ["[[¿___ color prefieres?]]", ["Qué", "Cuál", "Cuáles"], 0],
      ["[[Tengo dos bolsos. ¿___ prefieres?]]", ["Cuál", "Qué", "Cuáles"], 0],
      ["[[Hay tres maletas. ¿___ te gustan?]]", ["Cuáles", "Cuál", "Qué"], 0],
      ["[[¿___ es tu talla?]]", ["Cuál", "Qué", "Cuáles"], 0],
      ["For the beach you have to take…", ["el bañador", "el abrigo", "la bufanda"], 0],
      ["[[Para el cumpleaños de mi madre, ___ comprar un regalo.]] (I have to)", ["tengo que", "tengo", "tiene que"], 0]] },
    { l: 3, type: "order", t: "Make sentences", i: "Tap the words in the right order.", items: [
      "¿Cuál prefieres, la camisa o el jersey?", "Prefiero los zapatos negros.", "Tengo que hacer la maleta.", "¿Qué regalo quieres para tu cumpleaños?", "Para el viaje tengo que llevar el pasaporte."] },

    /* Lesson 4 · Repaso */
    tag(o4[3], 4), tag(o4[4], 4), tag(o4[5], 4)
  ];

  PRACTICE[5] = [
    /* Lesson 1 · Gustos: gustar y encantar */
    tag(o5[0], 1),
    { l: 1, type: "mc", t: "gustar, encantar, interesar", items: [
      ["[[A mí me ___ los libros.]]", ["gustan", "gusta", "gusto"], 0],
      ["[[A mi madre ___ encanta cocinar.]]", ["le", "les", "me"], 0],
      ["[[—Me encanta el flamenco. —A mí ___.]] (you agree)", ["también", "tampoco", "no"], 0],
      ["[[—No me gusta el pop. —A mí ___.]] (you disagree)", ["sí", "también", "tampoco"], 0],
      ["[[Me ___ mucho la historia.]] (interest)", ["interesa", "interesan", "intereso"], 0],
      ["[[¿A vosotros ___ gusta el jazz?]]", ["os", "les", "nos"], 0]] },
    { l: 1, type: "order", t: "Make sentences", i: "Tap the words in the right order.", items: [
      "Me encanta la música clásica.", "A mi hermano le gusta mucho el fútbol.", "¿Te interesan los idiomas?", "A mí tampoco me gusta el ruido.", "No me gustan las películas de terror."] },

    /* Lesson 2 · La familia y los posesivos */
    tag(o5[1], 2), tag(o5[3], 2),
    { l: 2, type: "fill", t: "Who is who?", i: "Write the family word.", items: [
      "La madre de mi padre es mi ___.|abuela", "El hermano de mi padre es mi ___.|tío", "El hijo de mi tío es mi ___.|primo",
      "La hija de mi hermana es mi ___.|sobrina", "El padre de mi marido es mi ___.|suegro", "Los hijos de mis hijos son mis ___.|nietos"] },
    { l: 2, type: "order", t: "Make sentences", i: "Tap the words in the right order.", items: [
      "Tengo dos hermanos y una hermana.", "Nuestra abuela vive con nosotros.", "¿Cómo se llama tu tío?", "Sus hijos son muy pequeños.", "Mis primos viven en el norte."] },

    /* Lesson 3 · ¿Cómo es? Describir personas */
    { l: 3, type: "fill", t: "ser, tener or llevar", i: "Write es, tiene or lleva.", items: [
      "Mi padre ___ alto y moreno.|es", "Mi hermana ___ el pelo largo.|tiene", "Mi abuelo ___ gafas.|lleva",
      "Mi amiga ___ muy simpática.|es", "Mi tío ___ barba.|lleva~tiene", "Mi prima ___ los ojos verdes.|tiene"] },
    { l: 3, type: "match", t: "Opposites", i: "Connect each word with its opposite.", items: [
      ["alto", "bajo"], ["gordo", "delgado"], ["simpático", "antipático"], ["trabajador", "perezoso"], ["divertido", "serio"], ["rubio", "moreno"], ["joven", "mayor"], ["largo", "corto"]] },
    { l: 3, type: "mc", t: "What is he like? How does she seem?", items: [
      ["[[Tu hermano ___ muy simpático.]] (seems)", ["parece", "es", "lleva"], 0],
      ["[[Mi profesora es ___ seria.]] (a bit)", ["un poco", "poco un", "muy poco"], 0],
      ["[[Ella es muy ___.]]", ["inteligente", "inteligenta", "inteligentes"], 0],
      ["[[Mis amigas son ___.]]", ["optimistas", "optimistos", "optimista"], 0],
      ["[[Es ___ tímido.]] (quite)", ["bastante", "bastantes", "mucho"], 0],
      ["Someone who doesn't like working is…", ["perezoso", "generoso", "sincero"], 0]] },

    /* Lesson 4 · Repaso */
    tag(o5[2], 4), tag(o5[4], 4), tag(o5[5], 4)
  ];
})();
