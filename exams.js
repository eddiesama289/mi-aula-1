/* 50-point exam for every unit. Same format as practice.js (see quiz.js).
   Every exam: A match 8 · B choose 8 · C fill 10 · D fill 8 · E reading 6 · F sentences 5 × 2 = 50 points. */
const EXAMS = {
0: [
  { type: "match", t: "Vocabulary", i: "Connect the words.", items: [
    ["adiós", "goodbye"], ["la puerta", "door"], ["ocho", "eight"], ["el libro", "book"], ["buenas tardes", "good afternoon"], ["la mochila", "backpack"], ["cinco", "five"], ["el lápiz", "pencil"]] },
  { type: "mc", t: "Choose the answer", items: [
    ["Good night / good evening:", ["Buenos días", "Buenas noches", "Buenas tardes"], 1],
    ["Your teacher speaks too fast. You say:", ["¿Cómo te llamas?", "Hasta mañana.", "Más despacio, por favor."], 2],
    ["Which word has the letter eñe?", ["mañana", "manzana", "mano"], 0],
    ["[[¿Cómo se escribe?]] means:", ["=What is it?", "=How do you spell it?", "=How are you?"], 1],
    ["[[diez − tres =]]", ["seis", "ocho", "siete"], 2],
    ["The answer to [[¿Cómo te llamas?]]", ["Me llamo Ana.", "Muy bien, gracias.", "Hasta luego."], 0],
    ["Odd one out:", ["el cuaderno", "buenos días", "el lápiz", "el bolígrafo"], 1],
    ["The letter j is called:", ["ge", "hache", "jota"], 2]] },
  { type: "fill", t: "Classroom Spanish", i: "Write the missing word.", items: [
    "Hola, ¿qué ___? (how are you?)|tal", "¿Cómo te ___?|llamas", "Me ___ Carlos.|llamo", "¿Cómo se ___ 'chair' en español? — Silla.|dice", "¿Qué ___ 'puerta'? — Door.|significa",
    "No ___, más despacio, por favor.|entiendo", "Otra ___, por favor. (again)|vez", "¡Hasta ___! (see you tomorrow)|mañana", "Buenas ___. (good afternoon)|tardes", "uno, dos, tres, ___, cinco|cuatro"] },
  { type: "fill", t: "Numbers", i: "Write the answer in words.", items: [
    "2 + 2 = ___|cuatro", "5 + 5 = ___|diez", "3 + 4 = ___|siete", "1 + 1 = ___|dos", "9 − 3 = ___|seis", "4 + 5 = ___|nueve", "10 − 7 = ___|tres", "6 + 2 = ___|ocho"] },
  { type: "tf", t: "Reading: Sofía's class", text: "¡Hola! Me llamo Sofía. Mi profesor de español se llama Andrés. En la clase tenemos libros, cuadernos y un ordenador. Andrés habla muy rápido y yo siempre digo: «Más despacio, por favor». Al final de la clase decimos: «¡Hasta mañana!».", items: [
    ["La alumna se llama Sofía.", true], ["El profesor se llama Andrés.", true], ["En la clase hay un ordenador.", true], ["Andrés habla despacio.", false], ["Sofía dice «más despacio, por favor».", true], ["Al final dicen «buenas noches».", false]] },
  { type: "order", pts: 2, t: "Build sentences", i: "Put the words in order.", items: [
    "¿Cómo se dice 'pen' en español?", "Me llamo Laura, ¿y tú?", "¿Qué significa 'ventana'?", "Más despacio, por favor.", "Buenos días, ¿qué tal?"] }
],
1: [
  { type: "match", t: "Personal data and jobs", i: "Connect the words.", items: [
    ["el apellido", "surname"], ["la edad", "age"], ["el camarero", "waiter"], ["la enfermera", "nurse"], ["el abogado", "lawyer"], ["la dirección", "address"], ["el correo electrónico", "email"], ["el cocinero", "cook"]] },
  { type: "mc", t: "Choose the answer", items: [
    ["[[Nosotros ___ estudiantes.]]", ["son", "somos", "sois"], 1],
    ["[[¿Cuántos años ___ (tú)?]]", ["eres", "tiene", "tienes"], 2],
    ["[[¿Cómo ___ llama usted?]]", ["se", "te", "me"], 0],
    ["A woman from Germany is…", ["alemán", "alemana", "Alemania"], 1],
    ["73 =", ["sesenta y tres", "treinta y siete", "setenta y tres"], 2],
    ["Which nationality is the same for men and women?", ["belga", "inglés", "chino"], 0],
    ["[[Vosotros ___ de Argentina.]]", ["son", "sois", "somos"], 1],
    ["[[¿A qué te dedicas?]] asks about your…", ["=job", "=age", "=name"], 0]] },
  { type: "fill", t: "ser, tener, llamarse", i: "Write the correct form.", items: [
    "Yo ___ de Perú. (ser)|soy", "Tú ___ argentino, ¿verdad? (ser)|eres", "Ella ___ veinte años. (tener)|tiene", "Nosotras ___ médicas. (ser)|somos", "Ellos ___ dos hijos. (tener)|tienen",
    "¿Cómo ___ llamas?|te", "Mis amigos se ___ Tom y Kate. (llamarse)|llaman", "Vosotros ___ veinte años. (tener)|tenéis", "Usted ___ profesor, ¿no? (ser)|es", "Yo ___ treinta años. (tener)|tengo"] },
  { type: "fill", t: "Numbers 0 to 100", i: "Write the number in words.", items: [
    "15 = ___|quince", "22 = ___|veintidós", "38 = ___|treinta y ocho", "50 = ___|cincuenta", "64 = ___|sesenta y cuatro", "81 = ___|ochenta y uno", "99 = ___|noventa y nueve", "100 = ___|cien"] },
  { type: "tf", t: "Reading: Valentina", text: "Hola, me llamo Valentina Ruiz. Soy colombiana, de Medellín, y tengo veintiséis años. Soy arquitecta, pero ahora estudio alemán en Berlín. Mi compañero de piso se llama Lukas. Él es alemán y es periodista. Tiene treinta años.", items: [
    ["Valentina es de Bogotá.", false], ["Valentina tiene 26 años.", true], ["Valentina es arquitecta.", true], ["Lukas es colombiano.", false], ["Lukas es periodista.", true], ["Lukas tiene veinte años.", false]] },
  { type: "order", pts: 2, t: "Build sentences", i: "Put the words in order.", items: [
    "¿De dónde eres?", "Soy brasileño, de Río de Janeiro.", "¿Cuántos años tiene usted?", "Mi hermana es profesora de inglés.", "¿Cuál es tu correo electrónico?"] }
],
2: [
  { type: "match", t: "Free time and learning", i: "Connect the words.", items: [
    ["cantar", "to sing"], ["bailar", "to dance"], ["cocinar", "to cook"], ["nadar", "to swim"], ["escribir", "to write"], ["comprender", "to understand"], ["el idioma", "language"], ["el fin de semana", "the weekend"]] },
  { type: "mc", t: "Choose the answer", items: [
    ["[[___ mapa]]", ["la", "el", "las"], 1],
    ["[[Ellos ___ en Madrid.]] (vivir)", ["viven", "vivan", "vivís"], 0],
    ["[[Tú ___ mucho.]] (leer)", ["lee", "leés", "lees"], 2],
    ["[[¿Por qué estudias español? — ___ quiero vivir en España.]]", ["Por qué", "Porque", "Para"], 1],
    ["[[Estudio chino ___ hablar con mis clientes.]]", ["para", "porque", "por qué"], 0],
    ["The plural of [[la canción]]:", ["las canciónes", "los canciones", "las canciones"], 2],
    ["[[Ella ___ ser médica.]]", ["quiero", "quiere", "queres"], 1],
    ["[[Vosotros ___ inglés muy bien.]] (hablar)", ["habláis", "hablan", "hablamos"], 0]] },
  { type: "fill", t: "Verbs in the present", i: "Conjugate the verb.", items: [
    "Yo ___ en un banco. (trabajar)|trabajo", "Mi madre ___ el periódico. (leer)|lee", "Nosotros ___ en un piso pequeño. (vivir)|vivimos", "¿Tú ___ alemán? (hablar)|hablas", "Ellas ___ agua. (beber)|beben",
    "Vosotros ___ muchos correos. (escribir)|escribís", "Yo ___ estudiar medicina. (querer)|quiero", "Usted ___ inglés en una academia. (enseñar)|enseña", "Ellos ___ viajar a Perú. (querer)|quieren", "Nosotros ___ música clásica. (escuchar)|escuchamos"] },
  { type: "fill", t: "Articles", i: "Write el, la, los or las.", items: [
    "___ idioma|el", "___ canciones|las", "___ libros|los", "___ foto|la", "___ clase|la", "___ teléfono|el", "___ universidad|la", "___ mapas|los"] },
  { type: "tf", t: "Reading: Kenji", text: "Hola, soy Kenji. Soy japonés y vivo en Tokio. Trabajo en una agencia de viajes y quiero aprender español para hablar con los turistas de Latinoamérica. Estudio los lunes y los miércoles en una academia. Mi profesora se llama Elena y es de Lima. En clase hablamos, leemos textos y escuchamos canciones. Para mí el vocabulario es fácil, pero los verbos son difíciles.", items: [
    ["Kenji vive en Japón.", true], ["Trabaja en un hotel.", false], ["Estudia español para hablar con turistas.", true], ["Estudia tres días a la semana.", false], ["La profesora es peruana.", true], ["Para Kenji, los verbos son fáciles.", false]] },
  { type: "order", pts: 2, t: "Build sentences", i: "Put the words in order.", items: [
    "¿Por qué quieres aprender español?", "Quiero aprender español para viajar por Sudamérica.", "Mis padres viven en un pueblo pequeño.", "Escribo correos en inglés en el trabajo.", "¿Qué idiomas hablas?"] }
],
3: [
  { type: "match", t: "Geography", i: "Connect the words.", items: [
    ["el río", "river"], ["la montaña", "mountain"], ["la isla", "island"], ["el lago", "lake"], ["la playa", "beach"], ["el desierto", "desert"], ["la selva", "jungle"], ["el volcán", "volcano"]] },
  { type: "mc", t: "Choose the answer", items: [
    ["[[En Argentina ___ glaciares.]]", ["está", "hay", "están"], 1],
    ["[[¿Dónde ___ las islas Galápagos?]]", ["hay", "está", "están"], 2],
    ["[[Sevilla es una ciudad ___ bonita.]]", ["mucho", "muy", "mucha"], 1],
    ["[[¿___ es la capital de Venezuela? — Caracas.]]", ["Cuál", "Qué", "Dónde"], 0],
    ["[[En el norte de Chile hace ___ calor.]]", ["muy", "mucha", "mucho"], 2],
    ["[[¿___ países hay en Centroamérica?]]", ["Cuántos", "Cuántas", "Cuál"], 0],
    ["In winter it snows: [[En invierno ___.]]", ["llueve", "nieva", "hace sol"], 1],
    ["[[El Everest es la montaña ___ alta del mundo.]]", ["muy", "mucho", "más"], 2]] },
  { type: "fill", t: "ser, estar, hay and questions", i: "Write the missing word.", items: [
    "Bogotá ___ la capital de Colombia.|es", "Bogotá ___ en el centro del país.|está", "En Bogotá ___ muchos museos.|hay", "Las islas Baleares ___ en el mar Mediterráneo.|están", "Ecuador ___ un país muy diverso.|es",
    "En Ecuador ___ volcanes y playas.|hay", "El lago Titicaca ___ entre Perú y Bolivia.|está", "¿___ está Montevideo? (where)|Dónde", "¿___ habitantes tiene México? (how many)|Cuántos", "¿___ tiempo hace en Lima? (what)|Qué"] },
  { type: "fill", t: "Weather, muy and mucho", i: "Write the missing word.", items: [
    "En verano hace ___ calor. (a lot)|mucho", "Hoy está ___ nublado. (very)|muy", "En el desierto de Atacama ___ muy poco. (llover)|llueve", "En los Pirineos ___ en invierno. (nevar)|nieva",
    "Hoy hace ___. (sun)|sol", "En la playa hace ___. (wind)|viento", "En Madrid hay ___ restaurantes. (many)|muchos", "En la Patagonia hace ___ en invierno. (cold)|frío"] },
  { type: "tf", t: "Reading: Uruguay", text: "Uruguay es un país de América del Sur. Está entre Argentina y Brasil, y tiene costa en el océano Atlántico. La capital es Montevideo, una ciudad muy tranquila con muchas playas. Uruguay es un país pequeño: tiene unos tres millones y medio de habitantes. No hay montañas muy altas. En verano, de diciembre a marzo, hace calor y mucha gente va a la playa de Punta del Este.", items: [
    ["Uruguay está entre Argentina y Brasil.", true], ["La capital es Buenos Aires.", false], ["En Montevideo hay playas.", true], ["Uruguay tiene más de diez millones de habitantes.", false], ["En Uruguay hay montañas muy altas.", false], ["En verano hace calor.", true]] },
  { type: "order", pts: 2, t: "Build sentences", i: "Put the words in order.", items: [
    "¿Dónde está la catedral?", "En Perú hay muchas montañas muy altas.", "Hoy hace sol y no hace frío.", "¿Cuál es el río más largo de España?", "En el Caribe hay muchas islas bonitas."] }
],
4: [
  { type: "match", t: "Shopping", i: "Connect the words.", items: [
    ["la talla", "size"], ["el probador", "fitting room"], ["barato", "cheap"], ["caro", "expensive"], ["la tarjeta", "card"], ["el regalo", "present"], ["la tienda", "shop"], ["el vestido", "dress"]] },
  { type: "mc", t: "Choose the answer", items: [
    ["[[___ botas son muy cómodas.]]", ["Este", "Estas", "Estos"], 1],
    ["[[una camisa ___]]", ["blanco", "blancas", "blanca"], 2],
    ["[[¿___ es tu color favorito?]]", ["Cuál", "Qué", "Cuáles"], 0],
    ["300 =", ["trecientos", "trescientos", "tres cientos"], 1],
    ["[[Nosotros ___ comprar comida.]] (have to)", ["tenemos", "tienen que", "tenemos que"], 2],
    ["[[Ella ___ los pantalones negros.]] (preferir)", ["prefiere", "prefere", "prefiero"], 0],
    ["[[unos zapatos ___]] (marrón)", ["marrón", "marrones", "marrónes"], 1],
    ["In a shop, to ask the price:", ["¿Cuántos años tiene?", "¿Qué hora es?", "¿Cuánto cuesta?"], 2]] },
  { type: "fill", t: "Buying clothes", i: "Write the missing word.", items: [
    "¿Cuánto ___ este bolso? (costar)|cuesta", "¿Cuánto ___ estas gafas? (costar)|cuestan", "Yo ___ el jersey rojo. (preferir)|prefiero", "¿Tú qué ___, el azul o el verde? (preferir)|prefieres", "Para la boda ella ___ un vestido largo. (llevar)|lleva",
    "Mañana yo ___ que ir al centro comercial. (tener)|tengo", "¿___ camisa prefieres, esta o esa?|Qué", "___ zapatos son de mi hermano. (these)|Estos", "___ chaqueta es muy bonita. (this)|Esta", "Vosotros ___ que comprar los billetes. (tener)|tenéis"] },
  { type: "fill", t: "Prices", i: "Write the number in words.", items: [
    "120 = ___|ciento veinte", "200 = ___|doscientos", "350 = ___|trescientos cincuenta", "499 = ___|cuatrocientos noventa y nueve", "600 = ___|seiscientos", "715 = ___|setecientos quince", "900 = ___|novecientos", "1000 = ___|mil"] },
  { type: "tf", t: "Reading: A present for Pablo", text: "Mañana es el cumpleaños de mi hermano Pablo y tengo que comprar un regalo. Pablo tiene veinte años, le gusta mucho el deporte y siempre lleva ropa cómoda: vaqueros, camisetas y zapatillas. En la tienda hay unas zapatillas blancas muy bonitas, pero cuestan ciento cuarenta euros. Son muy caras. Al final compro una camiseta de su equipo de fútbol favorito. Cuesta cuarenta y cinco euros.", items: [
    ["Mañana es el cumpleaños de Pablo.", true], ["Pablo tiene veinticinco años.", false], ["Pablo lleva normalmente ropa elegante.", false], ["Las zapatillas cuestan 140 euros.", true], ["Compra las zapatillas.", false], ["La camiseta cuesta 45 euros.", true]] },
  { type: "order", pts: 2, t: "Build sentences", i: "Put the words in order.", items: [
    "¿Cuánto cuesta esta camisa?", "Prefiero los zapatos negros.", "Tengo que llevar ropa de invierno.", "¿Puedo pagar con tarjeta?", "¿Tienen esta camiseta en azul?"] }
],
5: [
  { type: "match", t: "Describing people", i: "Connect the words.", items: [
    ["simpático", "nice / friendly"], ["divertido", "fun"], ["tímido", "shy"], ["trabajador", "hard-working"], ["rubio", "blond"], ["delgado", "slim"], ["el bigote", "moustache"], ["la barba", "beard"]] },
  { type: "mc", t: "Choose the answer", items: [
    ["[[A mis amigos ___ gusta el rock.]]", ["le", "les", "los"], 1],
    ["[[A mí me ___ las fiestas.]]", ["encantan", "encanta", "encanto"], 0],
    ["[[—No me gusta madrugar. —A mí ___.]] (you agree)", ["también", "sí", "tampoco"], 2],
    ["[[—Me gusta el teatro. —A mí ___.]] (you disagree)", ["no", "tampoco", "también"], 0],
    ["Laura and me: [[___ casa]]", ["nuestro", "nuestra", "su"], 1],
    ["[[Mi tío ___ barba y bigote.]]", ["es", "está", "lleva"], 2],
    ["The father of your mother is your…", ["tío", "abuelo", "primo"], 1],
    ["[[Pedro parece ___, pero es muy simpático.]]", ["serio", "seria", "serios"], 0]] },
  { type: "fill", t: "gustar, ser and tener", i: "Write the missing word.", items: [
    "A mí me ___ los deportes. (encantar)|encantan", "¿A ti te ___ el chocolate? (gustar)|gusta", "A mi madre ___ interesa la política.|le", "A nosotros ___ gusta la playa.|nos", "¿A vosotros ___ gustan los museos?|os",
    "A Juan y a Pedro les ___ jugar al tenis. (gustar)|gusta", "Mi hermana ___ el pelo largo y rizado. (tener)|tiene", "Mis primos ___ muy divertidos. (ser)|son", "(tú) ¿Cómo se llaman ___ padres?|tus", "(ellos) ___ hija es arquitecta.|Su"] },
  { type: "fill", t: "The family", i: "Write the family word.", items: [
    "El hermano de mi padre es mi ___.|tío", "La madre de mi madre es mi ___.|abuela", "El hijo de mi tío es mi ___.|primo", "La hija de mi hermano es mi ___.|sobrina",
    "El padre de mi padre es mi ___.|abuelo", "La hermana de mi madre es mi ___.|tía", "Mi padre y mi madre son mis ___.|padres", "El hijo de mis padres es mi ___.|hermano"] },
  { type: "tf", t: "Reading: My best friend", text: "Mi mejor amiga se llama Inés. Tiene treinta años y es enfermera. Es baja, morena y tiene los ojos verdes. Es muy trabajadora y un poco tímida, pero con sus amigos es muy divertida. A Inés le encantan los animales: tiene dos gatos y un perro. También le gusta mucho la música; toca la guitarra. A mí no me gustan los gatos, pero me encanta la música, como a ella.", items: [
    ["Inés es enfermera.", true], ["Inés es alta y rubia.", false], ["Inés tiene los ojos verdes.", true], ["Inés tiene tres animales.", true], ["A la persona que escribe le gustan los gatos.", false], ["Inés toca el piano.", false]] },
  { type: "order", pts: 2, t: "Build sentences", i: "Put the words in order.", items: [
    "A mi hermano le encanta el fútbol.", "Mi abuela es muy simpática y habladora.", "¿Os gusta la música clásica?", "Mi novio tiene los ojos azules.", "Nuestra profesora es bastante seria."] }
],
6: [
  { type: "match", t: "Days and routine", i: "Connect the words.", items: [
    ["el lunes", "Monday"], ["el jueves", "Thursday"], ["el fin de semana", "weekend"], ["levantarse", "to get up"], ["acostarse", "to go to bed"], ["desayunar", "to have breakfast"], ["la cena", "dinner"], ["madrugar", "to get up early"]] },
  { type: "mc", t: "Choose the answer", items: [
    ["4:15", ["Son las cuatro menos cuarto.", "Son las cuatro y cuarto.", "Es las cuatro y cuarto."], 1],
    ["[[Yo ___ temprano.]] (despertarse)", ["me despierto", "me desperto", "se despierta"], 0],
    ["[[Ella ___ ocho horas.]] (dormir)", ["dorme", "duerma", "duerme"], 2],
    ["[[Yo ___ la cama todos los días.]] (hacer)", ["hace", "hago", "haco"], 1],
    ["[[Los sábados ___ al cine.]] (ir, nosotros)", ["vamos", "vais", "van"], 0],
    ["[[Me lavo los dientes ___ comer.]] (after)", ["antes de", "después", "después de"], 2],
    ["Every day:", ["nunca", "todos los días", "a veces"], 1],
    ["[[—Yo no veo la tele. —Yo ___.]] (you agree)", ["tampoco", "también", "sí"], 0]] },
  { type: "fill", t: "Daily routine verbs", i: "Write the verb. Reflexive verbs need the pronoun too.", items: [
    "¿A qué hora ___ (tú)? (levantarse)|te levantas", "Yo ___ a las once. (acostarse)|me acuesto", "Mi hermana ___ en el baño. (maquillarse)|se maquilla", "Nosotros ___ a las ocho. (salir)|salimos", "Yo ___ de casa a las siete y media. (salir)|salgo",
    "La película ___ a las nueve. (empezar)|empieza", "¿Vosotros ___ al tenis? (jugar)|jugáis", "Ellos ___ a casa a las seis. (volver)|vuelven", "Yo ___ al trabajo andando. (ir)|voy", "¿Qué ___ tú los domingos? (hacer)|haces"] },
  { type: "fill", t: "Telling the time", i: "Write the missing word.", items: [
    "2:00 → Son las ___.|dos", "9:30 → Son las nueve y ___.|media", "1:15 → Es la una y ___.|cuarto", "7:45 → Son las ocho menos ___.|cuarto",
    "12:00 → Son las ___.|doce", "10:10 → Son las diez y ___.|diez", "5:40 → Son las seis menos ___.|veinte", "11:25 → Son las once y ___.|veinticinco"] },
  { type: "tf", t: "Reading: My week", text: "Mi semana es muy organizada. De lunes a viernes me levanto a las siete, desayuno y voy a la oficina en metro. Trabajo de nueve a cinco. Los martes y los jueves, después del trabajo, voy a clase de español. Los miércoles hago yoga. El fin de semana es diferente: me levanto tarde, nunca pongo el despertador y los domingos como con mis padres.", items: [
    ["Se levanta a las siete de lunes a viernes.", true], ["Va a la oficina en autobús.", false], ["Trabaja ocho horas.", true], ["Tiene clase de español los miércoles.", false], ["El fin de semana se levanta temprano.", false], ["Los domingos come con sus padres.", true]] },
  { type: "order", pts: 2, t: "Build sentences", i: "Put the words in order.", items: [
    "Me ducho antes de desayunar.", "¿A qué hora te acuestas normalmente?", "Los viernes por la noche salgo con mis amigos.", "Nunca desayuno en casa.", "Mi hermano se levanta muy tarde."] }
],
7: [
  { type: "match", t: "Drinks and the table", i: "Connect the words.", items: [
    ["el vaso", "glass"], ["el tenedor", "fork"], ["el cuchillo", "knife"], ["la cuchara", "spoon"], ["la servilleta", "napkin"], ["el agua con gas", "sparkling water"], ["el vino tinto", "red wine"], ["el zumo", "juice"]] },
  { type: "mc", t: "Choose the answer", items: [
    ["[[—¿Quieres la sopa? —Sí, ___ quiero.]]", ["lo", "la", "las"], 1],
    ["[[—¿Compras tú los huevos? —Sí, ___ compro yo.]]", ["los", "las", "lo"], 0],
    ["[[una tarta ___ chocolate]]", ["con", "en", "de"], 2],
    ["To the waiter: [[___ un café, por favor.]]", ["Me pongo", "Me pone", "Pongo"], 1],
    ["[[Yo ___ las bebidas a la fiesta.]] (traer)", ["traigo", "traio", "trae"], 0],
    ["People in Spain have lunch late: [[En España ___ tarde.]]", ["come", "se comen", "se come"], 2],
    ["Second course:", ["de primero", "de segundo", "de postre"], 1],
    ["Cooked on the grill:", ["frito", "crudo", "a la plancha"], 2]] },
  { type: "fill", t: "Pronouns, traer, poner, se", i: "Write the missing word.", items: [
    "—¿Y el vino? —___ traigo yo.|Lo", "—¿Las naranjas? —___ compro en el mercado.|Las", "—¿Te gusta la carne? —No, no ___ como.|la", "—¿Y los platos? —___ pongo yo en la mesa.|Los", "Yo ___ la mesa todos los días. (poner)|pongo",
    "¿Me ___ (usted) un poco más de pan? (traer)|trae", "Un bocadillo ___ queso, por favor.|de", "Quiero un té ___ limón.|con", "En Italia ___ mucha pasta. (comer, se)|se come", "El gazpacho ___ frío. (tomar, se)|se toma"] },
  { type: "fill", t: "At the restaurant", i: "Use the word bank.", bank: ["mesa", "carta", "primero", "segundo", "beber", "postre", "cuenta", "tarjeta"], items: [
    "—Buenas noches, ¿tienen una ___ para dos?|mesa", "—Sí, por aquí. Aquí tienen la ___.|carta", "—De ___, yo quiero la sopa.|primero", "—Y de ___, el pollo asado.|segundo",
    "—¿Y para ___? —Agua mineral.|beber", "—¿Qué hay de ___? —Flan o fruta.|postre", "—¿Nos trae la ___, por favor?|cuenta", "—¿Puedo pagar con ___?|tarjeta"] },
  { type: "tf", t: "Reading: Who cooks at home?", text: "En mi casa cocina mi padre. Le encanta preparar platos de su país, Perú. Su plato favorito es el ceviche, que se hace con pescado crudo, limón, cebolla y un poco de chile. Los domingos prepara arroz con pollo y toda la familia come junta. Mi madre no cocina, pero siempre pone la mesa y prepara los postres. Yo no como carne, así que mi padre hace también un plato de verduras para mí.", items: [
    ["La madre cocina normalmente.", false], ["El padre es peruano.", true], ["El ceviche se hace con pescado crudo.", true], ["Los domingos comen arroz con pollo.", true], ["La madre prepara los postres.", true], ["La persona que escribe come mucha carne.", false]] },
  { type: "order", pts: 2, t: "Build sentences", i: "Put the words in order.", items: [
    "De segundo quiero pescado a la plancha.", "¿Me pone un café con leche, por favor?", "En España se cena muy tarde.", "La sopa la hago con verduras.", "¿Me trae otro vaso de agua?"] }
],
8: [
  { type: "match", t: "The house", i: "Connect the words.", items: [
    ["el sofá", "sofa"], ["la cama", "bed"], ["la cocina", "kitchen"], ["el dormitorio", "bedroom"], ["el baño", "bathroom"], ["la estantería", "shelves"], ["la lámpara", "lamp"], ["el armario", "wardrobe"]] },
  { type: "mc", t: "Choose the answer", items: [
    ["[[¿Hay ___ banco cerca?]]", ["algún", "alguno", "alguna"], 0],
    ["[[No tengo ___ libro en español.]]", ["ninguno", "ningún", "ninguna"], 1],
    ["[[¿___ parques hay en tu ciudad?]]", ["Cuánto", "Cuántas", "Cuántos"], 2],
    ["[[Valencia es ___ grande que Madrid.]]", ["más", "menos", "tan"], 1],
    ["Turn right:", ["Sigue recto.", "Gira a la derecha.", "Gira a la izquierda."], 1],
    ["[[La biblioteca ___ en la plaza Mayor.]]", ["está", "hay", "es"], 0],
    ["[[En mi barrio ___ dos supermercados.]]", ["está", "son", "hay"], 2],
    ["[[El aire de mi pueblo es ___ que el de la ciudad.]] (better)", ["más bueno", "mejor", "más mejor"], 1]] },
  { type: "fill", t: "Where things are", i: "Write the missing word.", items: [
    "El cine está ___ lado del restaurante.|al", "El gato está ___ de la mesa. (under)|debajo", "Las llaves están ___ de la mesa. (on top)|encima", "En mi barrio ___ muchos bares.|hay", "Mi casa ___ cerca del metro.|está",
    "Mi barrio ___ muy bonito y tranquilo.|es", "¿___ cuesta el alquiler? (how much)|Cuánto", "¿Hay ___ gimnasio por aquí? (any)|algún", "—No, no hay ___. (none)|ninguno", "El norte es ___ caro que el sur. (less)|menos"] },
  { type: "fill", t: "Giving directions", i: "Use the word bank.", bank: ["sigue", "gira", "cruza", "la primera", "la segunda", "al final", "enfrente", "esquina"], items: [
    "—Perdona, ¿la estación? —Sí, ___ todo recto por esta calle.|sigue", "Luego ___ a la derecha en la plaza.|gira", "___ el puente. (cross)|Cruza", "Toma ___ calle a la izquierda. (first)|la primera",
    "Después, toma ___ a la derecha. (second)|la segunda", "La estación está ___ de esa calle. (at the end)|al final", "Está ___ de un hotel muy grande. (opposite)|enfrente", "La parada de taxis está en la ___. (corner)|esquina"] },
  { type: "tf", t: "Reading: Tomás's village", text: "Me llamo Tomás y vivo en un pueblo pequeño de la sierra de Madrid. En el pueblo hay una plaza, una iglesia, dos bares, una farmacia y un supermercado pequeño. No hay ningún cine ni ningún hospital: el hospital más cercano está a veinte kilómetros. La vida aquí es más tranquila y más barata que en la ciudad, pero el transporte es peor: solo hay un autobús cada hora.", items: [
    ["Tomás vive en una ciudad grande.", false], ["En el pueblo hay dos bares.", true], ["Hay un cine en el pueblo.", false], ["El hospital está a 20 kilómetros.", true], ["La vida en el pueblo es más cara.", false], ["Hay un autobús cada hora.", true]] },
  { type: "order", pts: 2, t: "Build sentences", i: "Put the words in order.", items: [
    "¿Dónde está la parada de autobús?", "Gira a la derecha y sigue todo recto.", "Mi barrio es más bonito que el tuyo.", "Al lado de mi casa hay un parque.", "¿Hay algún supermercado por aquí?"] }
],
9: [
  { type: "match", t: "Travel and transport", i: "Connect the words.", items: [
    ["el avión", "plane"], ["el tren", "train"], ["el barco", "boat"], ["el billete", "ticket"], ["la maleta", "suitcase"], ["el extranjero", "abroad"], ["perder", "to lose / to miss"], ["ganar", "to win"]] },
  { type: "mc", t: "Choose the answer", items: [
    ["[[Nosotros ___ en Roma dos veces.]]", ["hemos estado", "han estado", "hemos estados"], 0],
    ["The participle of [[poner]]:", ["ponido", "puesto", "ponedo"], 1],
    ["The participle of [[abrir]]:", ["abrido", "abrito", "abierto"], 2],
    ["[[¿___ conducir? — Sí, tengo carné.]]", ["Puedes", "Sabes", "Conoces"], 1],
    ["[[No ___ salir esta noche, tengo que estudiar.]]", ["puedo", "sé", "sabo"], 0],
    ["[[—¿Ya has comido? —No, ___ no.]]", ["nunca", "ya", "todavía"], 2],
    ["She has never seen the sea: [[Ella ___ visto el mar.]]", ["nunca ha", "no nunca ha", "ha nunca"], 0],
    ["The participle of [[romper]]:", ["rompido", "roto", "rompto"], 1]] },
  { type: "fill", t: "Perfect tense, saber and poder", i: "Write the verb. The perfect tense needs two words.", items: [
    "Yo ___ tres veces en Londres. (estar)|he estado", "¿Alguna vez ___ (tú) un accidente? (tener)|has tenido", "Mi padre nunca ___ en barco. (viajar)|ha viajado", "Nosotros ya ___ la cena. (hacer)|hemos hecho", "¿Vosotros ___ la nueva película? (ver)|habéis visto",
    "Ellas ___ un correo al profesor. (escribir)|han escrito", "Yo no ___ nadar. (saber)|sé", "¿___ (tú) ayudarme con la maleta? (poder)|Puedes", "Mi hermano ___ hablar cuatro idiomas. (saber)|sabe", "Todavía no ___ (yo) a casa. (volver)|he vuelto"] },
  { type: "fill", t: "Participles", i: "Write the participle. Some are irregular!", items: [
    "abrir → ___|abierto", "poner → ___|puesto", "romper → ___|roto", "morir → ___|muerto", "descubrir → ___|descubierto", "leer → ___|leído", "ir → ___|ido", "tener → ___|tenido"] },
  { type: "tf", t: "Reading: Carlos", text: "Carlos tiene sesenta y cinco años y es una persona muy activa. Ha visitado más de treinta países y ha vivido dos años en la India. Sabe hablar inglés, francés y un poco de hindi. Ha corrido cuatro maratones, pero nunca ha subido una montaña muy alta. Este año se ha jubilado y quiere aprender a tocar el piano. Todavía no sabe conducir, pero dice que no le importa: le encanta ir en bicicleta.", items: [
    ["Carlos ha visitado más de 30 países.", true], ["Ha vivido en la India.", true], ["Habla hindi muy bien.", false], ["Ha subido muchas montañas altas.", false], ["Sabe tocar el piano.", false], ["No sabe conducir.", true]] },
  { type: "order", pts: 2, t: "Build sentences", i: "Put the words in order.", items: [
    "¿Has estado alguna vez en Cuba?", "Todavía no he terminado el libro.", "Sé conducir, pero no tengo coche.", "Este verano hemos viajado en tren.", "Nunca he comido comida india."] }
]
};
