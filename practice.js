/* Graded practice exercises for every unit. Format is described at the top of quiz.js.
   Original material that follows the topics of each unit. */
const PRACTICE = {
0: [
  { type: "fill", t: "Classroom Spanish", i: "Write the missing word.", items: [
    "Hola, ¿cómo te ___? (llamarse)|llamas", "___ llamo Lucía.|Me", "Buenos ___. (morning)|días", "¿Cómo se ___ 'book' en español?|dice",
    "¿Qué ___ 'mesa'? (mean)|significa", "No ___. ¿Puedes repetir? (understand)|entiendo", "¿Cómo se ___ tu nombre? (spell)|escribe", "Más ___, por favor. (slowly)|despacio"] },
  { type: "match", t: "Numbers and things", i: "Connect each Spanish word with its meaning.", items: [
    ["siete", "seven"], ["nueve", "nine"], ["cuatro", "four"], ["la ventana", "window"], ["la pizarra", "board"], ["el cuaderno", "notebook"], ["la silla", "chair"], ["el bolígrafo", "pen"]] },
  { type: "order", t: "Make sentences", i: "Tap the words in the right order.", items: [
    "¿Cómo te llamas?", "Me llamo Pedro, ¿y tú?", "¿Cómo se dice 'window' en español?", "No entiendo, otra vez, por favor.", "Hasta mañana, profesora."] },
  { type: "mc", t: "Choose the best answer", items: [
    ["It is 9 in the morning and you meet your teacher. You say:", ["Buenas noches.", "Buenos días.", "Hasta luego."], 1],
    ["Which letter is silent in Spanish?", ["j", "h", "ñ"], 1],
    ["How do you spell [[casa]] letter by letter?", ["ce, a, ese, a", "ka, a, ese, a", "ce, a, zeta, a"], 0],
    ["[[¿Qué significa...?]] asks:", ["=How do you say...?", "=What does ... mean?", "=How do you spell...?"], 1],
    ["[[seis + tres =]]", ["ocho", "diez", "nueve"], 2],
    ["Odd one out:", ["la silla", "la mesa", "adiós", "la puerta"], 2]] },
  { type: "tf", t: "Read: Marta's class", text: "Hola, me llamo Marta y soy profesora de español. En mi clase hay diez alumnos. En mi mesa tengo un libro, un cuaderno y dos bolígrafos. ¡Hasta mañana!", items: [
    ["Marta es alumna.", false], ["En la clase hay diez alumnos.", true], ["Marta tiene tres bolígrafos.", false], ["Marta tiene un libro.", true], ["Marta dice «hasta luego».", false]] }
],
1: [
  { type: "fill", t: "ser, tener and llamarse", i: "Write the correct form of the verb.", items: [
    "Yo ___ estudiante. (ser)|soy", "Ella ___ 25 años. (tener)|tiene", "¿Cómo ___ llama usted?|se", "Nosotros ___ de México. (ser)|somos",
    "¿Cuántos años ___ tú? (tener)|tienes", "Ellos ___ médicos. (ser)|son", "¿De dónde ___ (tú)? (ser)|eres", "Mi correo electrónico ___ ana@mail.com. (ser)|es"] },
  { type: "match", t: "Countries and nationalities", i: "Connect the country with the nationality.", items: [
    ["Alemania", "alemán"], ["Francia", "francés"], ["Italia", "italiano"], ["Japón", "japonés"], ["Brasil", "brasileño"], ["Estados Unidos", "estadounidense"], ["China", "chino"], ["Inglaterra", "inglés"]] },
  { type: "fill", t: "Masculine and feminine", i: "Write the feminine form.", items: [
    "Él es español. Ella es ___.|española", "Él es alemán. Ella es ___.|alemana", "Él es francés. Ella es ___.|francesa", "Él es profesor. Ella es ___.|profesora",
    "Él es camarero. Ella es ___.|camarera", "Él es estudiante. Ella es ___.|estudiante", "Él es marroquí. Ella es ___.|marroquí", "Él es cantante. Ella es ___.|cantante"] },
  { type: "order", t: "Make sentences", i: "Tap the words in the right order.", items: [
    "¿Cómo se llama usted?", "¿A qué te dedicas?", "Soy enfermera y trabajo en un hospital.", "Tengo veintiocho años.", "¿Cuál es tu número de teléfono?"] },
  { type: "mc", t: "Numbers, tú and usted", items: [
    ["47 =", ["cuarenta siete", "cuarenta y siete", "catorce y siete"], 1],
    ["16 =", ["dieciséis", "diez y seis", "sesenta"], 0],
    ["You ask an older stranger his name, politely:", ["¿Cómo te llamas?", "¿Cómo llamas?", "¿Cómo se llama usted?"], 2],
    ["A man from Portugal is…", ["portugués", "portuguesa", "Portugal"], 0],
    ["Where does a [[camarero]] work?", ["en un hospital", "en un restaurante", "en una escuela"], 1],
    ["100 =", ["ciento", "mil", "cien"], 2],
    ["[[Ellas ___ de Colombia.]]", ["es", "son", "somos"], 1]] },
  { type: "tf", t: "Read: Hiroshi", text: "Me llamo Hiroshi Tanaka. Soy japonés, de Osaka, pero vivo en Madrid. Tengo treinta y dos años y soy cocinero. Trabajo en un restaurante japonés. Mi mujer se llama Carmen; es española y es profesora de inglés.", items: [
    ["Hiroshi es de Madrid.", false], ["Tiene 32 años.", true], ["Es camarero.", false], ["Carmen es española.", true], ["Carmen es profesora de japonés.", false]] }
],
2: [
  { type: "fill", t: "el, la, los or las?", i: "Write the article.", items: [
    "___ libro|el", "___ casa|la", "___ idiomas|los", "___ playa|la", "___ problema|el", "___ ciudades|las", "___ mano|la", "___ días|los"] },
  { type: "fill", t: "Regular verbs in the present", i: "Conjugate the verb.", items: [
    "Yo ___ inglés y francés. (hablar)|hablo", "Tú ___ en una oficina. (trabajar)|trabajas", "Ella ___ muchos libros. (leer)|lee", "Nosotros ___ en Valencia. (vivir)|vivimos",
    "Vosotros ___ español en la escuela. (estudiar)|estudiáis", "Ellos ___ cartas a sus amigos. (escribir)|escriben", "¿Usted ___ café? (beber)|bebe", "Yo ___ música en el metro. (escuchar)|escucho"] },
  { type: "match", t: "Why learn Spanish?", i: "Connect the Spanish with the English.", items: [
    ["viajar", "to travel"], ["conocer gente", "to meet people"], ["por trabajo", "for work"], ["ver películas", "to watch films"], ["chatear", "to chat online"], ["leer", "to read"], ["la gramática", "grammar"], ["la pronunciación", "pronunciation"]] },
  { type: "mc", t: "Why? Because, to… and querer", items: [
    ["[[¿___ estudias español? — Porque quiero viajar.]]", ["Por qué", "Porque", "Para"], 0],
    ["[[Estudio español ___ mi novia es mexicana.]]", ["por qué", "porque", "para"], 1],
    ["[[Aprendo inglés ___ trabajar en Londres.]]", ["porque", "por qué", "para"], 2],
    ["[[Yo ___ aprender japonés.]]", ["quiere", "quiero", "queremos"], 1],
    ["[[Nosotros ___ ir a Cuba.]]", ["queremos", "queréis", "quieren"], 0],
    ["Which word is feminine?", ["el idioma", "el mapa", "la lengua"], 2]] },
  { type: "order", t: "Make sentences", i: "Tap the words in the right order.", items: [
    "Quiero aprender español para viajar.", "¿Por qué estudias alemán?", "Hablo inglés muy bien y un poco de francés.", "Mi amigo vive en Sevilla.", "Leo el periódico todos los días."] },
  { type: "tf", t: "Read: Ahmed", text: "Me llamo Ahmed y vivo en Lyon. Hablo árabe, francés e inglés. Ahora estudio español porque quiero trabajar en una empresa en Barcelona. Estudio en una escuela de idiomas tres días a la semana. En casa veo series en español y escucho pódcasts. La gramática es fácil para mí, pero la pronunciación es difícil.", items: [
    ["Ahmed habla tres idiomas, sin contar el español.", true], ["Estudia español para trabajar en Barcelona.", true], ["Estudia cinco días a la semana.", false], ["En casa ve series en español.", true], ["Para Ahmed, la pronunciación es fácil.", false]] }
],
3: [
  { type: "fill", t: "hay, está or están?", i: "Write hay, está or están.", items: [
    "En Perú ___ muchas montañas.|hay", "Madrid ___ en el centro de España.|está", "Las islas Canarias ___ en el océano Atlántico.|están", "En mi ciudad ___ un museo muy bonito.|hay",
    "¿Dónde ___ Cartagena?|está", "En México ___ playas muy famosas.|hay", "Los Andes ___ en América del Sur.|están", "¿___ un hotel por aquí?|Hay"] },
  { type: "fill", t: "muy or mucho?", i: "Write muy, mucho, mucha, muchos or muchas.", items: [
    "Buenos Aires es una ciudad ___ grande.|muy", "En Madrid hay ___ museos.|muchos", "En verano hace ___ calor.|mucho", "En Lima hay ___ gente.|mucha",
    "Cuba es ___ bonita.|muy", "En Barcelona hay ___ playas.|muchas", "Este país tiene ___ turismo.|mucho", "En invierno hace ___ frío.|mucho"] },
  { type: "match", t: "The weather", i: "Connect each sentence with its meaning.", items: [
    ["Hace calor.", "It's hot."], ["Hace frío.", "It's cold."], ["Llueve.", "It's raining."], ["Nieva.", "It's snowing."], ["Hace sol.", "It's sunny."], ["Hace viento.", "It's windy."], ["Está nublado.", "It's cloudy."], ["el invierno", "winter"]] },
  { type: "mc", t: "Question words and superlatives", items: [
    ["[[¿___ está Bolivia? — En América del Sur.]]", ["Qué", "Dónde", "Cuántos"], 1],
    ["[[¿___ habitantes tiene Chile?]]", ["Cuántos", "Cuántas", "Cuál"], 0],
    ["[[¿___ es la capital de Uruguay?]]", ["Qué", "Dónde", "Cuál"], 2],
    ["[[¿___ tiempo hace hoy?]]", ["Cuál", "Qué", "Cómo"], 1],
    ["[[¿___ lenguas se hablan en España?]]", ["Cuántos", "Cuál", "Cuántas"], 2],
    ["[[El Aconcagua es la montaña ___ alta de América.]]", ["más", "muy", "mucho"], 0]] },
  { type: "order", t: "Make sentences", i: "Tap the words in the right order.", items: [
    "¿Dónde está Santiago de Chile?", "En mi ciudad hay muchos parques.", "En invierno hace mucho frío.", "El Amazonas es el río más largo de América.", "¿Qué tiempo hace en tu país?"] },
  { type: "tf", t: "Read: Costa Rica", text: "Costa Rica es un país pequeño de América Central. Está entre Nicaragua y Panamá. La capital es San José. En Costa Rica hay playas en el mar Caribe y en el océano Pacífico, y también hay volcanes y muchos parques naturales. El clima es tropical: hace calor casi todo el año y llueve mucho de mayo a noviembre. La lengua oficial es el español.", items: [
    ["Costa Rica está en América del Sur.", false], ["La capital es San José.", true], ["Hay playas en el Caribe y en el Pacífico.", true], ["Hace frío casi todo el año.", false], ["Llueve mucho de mayo a noviembre.", true]] }
],
4: [
  { type: "fill", t: "este, esta, estos, estas", i: "Write the right demonstrative (this / these).", items: [
    "¿Cuánto cuesta ___ camisa?|esta", "___ zapatos son muy caros.|Estos", "Me gusta ___ jersey azul.|este", "___ gafas de sol son bonitas.|Estas", "¿Prefieres ___ falda o esa?|esta", "___ pantalones son pequeños.|Estos"] },
  { type: "fill", t: "Colours that agree", i: "Write the colour in the right form.", items: [
    "una camiseta ___ (rojo)|roja", "unos zapatos ___ (negro)|negros", "una chaqueta ___ (verde)|verde", "unas botas ___ (blanco)|blancas",
    "un vestido ___ (amarillo)|amarillo", "unos calcetines ___ (gris)|grises", "una bufanda ___ (azul)|azul", "unas camisas ___ (azul)|azules"] },
  { type: "match", t: "Clothes", i: "Connect each item of clothing with its meaning.", items: [
    ["la camisa", "shirt"], ["los pantalones", "trousers"], ["la falda", "skirt"], ["los zapatos", "shoes"], ["el abrigo", "coat"], ["el bañador", "swimsuit"], ["las gafas de sol", "sunglasses"], ["el jersey", "jumper / sweater"]] },
  { type: "mc", t: "Shopping", items: [
    ["[[¿___ prefieres, el rojo o el negro?]]", ["Qué", "Cuál", "Cuáles"], 1],
    ["[[¿___ es esto? — Es un regalo.]]", ["Qué", "Cuál", "Cuáles"], 0],
    ["150 € =", ["cien cincuenta euros", "ciento y cincuenta euros", "ciento cincuenta euros"], 2],
    ["[[Para ir a la playa ___ llevar un bañador.]]", ["tengo", "tengo que", "tienes"], 1],
    ["[[Yo ___ la camisa azul.]] (preferir)", ["prefiero", "prefero", "preferimos"], 0],
    ["500 € =", ["cincocientos euros", "quinientas euros", "quinientos euros"], 2]] },
  { type: "order", t: "Make sentences", i: "Tap the words in the right order.", items: [
    "¿Cuánto cuestan estos zapatos?", "¿Puedo probarme esta chaqueta?", "Prefiero la camiseta verde.", "Tengo que comprar un regalo para mi madre.", "¿Tienen esta falda en otro color?"] },
  { type: "tf", t: "Read: In the shop", text: "Dependienta: Hola, ¿qué desea?\nCliente: Hola, busco una chaqueta para el invierno.\nDependienta: ¿De qué color?\nCliente: Negra o gris.\nDependienta: Tenemos esta, negra, y esta, gris.\nCliente: ¿Cuánto cuesta la gris?\nDependienta: Ciento veinte euros. La negra cuesta noventa y cinco.\nCliente: Prefiero la negra. ¿Puedo pagar con tarjeta?\nDependienta: Sí, claro.", items: [
    ["El cliente busca una chaqueta.", true], ["Quiere una chaqueta roja.", false], ["La chaqueta gris cuesta 120 euros.", true], ["El cliente compra la chaqueta gris.", false], ["Paga con tarjeta.", true]] }
],
5: [
  { type: "fill", t: "gustar and encantar", i: "Write the missing word.", items: [
    "A mí me ___ el cine.|gusta", "A mí me ___ los perros.|gustan", "¿A ti ___ gusta bailar?|te", "A mi padre ___ gusta el fútbol.|le",
    "A nosotros ___ encantan las películas de terror.|nos", "A ellos les ___ viajar.|gusta", "¿Os ___ los videojuegos?|gustan", "A Marta le ___ mucho la música clásica. (encantar)|encanta"] },
  { type: "match", t: "The family", i: "Connect each family word with its meaning.", items: [
    ["el abuelo", "grandfather"], ["la tía", "aunt"], ["el primo", "cousin (male)"], ["la hermana", "sister"], ["los padres", "parents"], ["el hijo", "son"], ["la sobrina", "niece"], ["el marido", "husband"]] },
  { type: "mc", t: "Agreeing, possessives and descriptions", items: [
    ["[[—Me gusta el jazz. —A mí ___.]] (you agree)", ["también", "tampoco", "sí"], 0],
    ["[[—No me gusta el fútbol. —A mí ___.]] (you agree)", ["también", "tampoco", "no"], 1],
    ["[[—Me encanta cocinar. —Pues a mí ___.]] (you disagree)", ["tampoco", "sí", "no"], 2],
    ["[[—No me gustan los gatos. —A mí ___.]] (you disagree)", ["sí", "también", "no"], 0],
    ["Ana and Luis's car: [[___ coche]]", ["sus", "su", "suyo"], 1],
    ["my parents: [[___ padres]]", ["mi", "mis", "mío"], 1],
    ["[[Mi hermano ___ alto y moreno.]]", ["tiene", "lleva", "es"], 2],
    ["[[Mi abuela ___ el pelo blanco.]]", ["es", "tiene", "está"], 1]] },
  { type: "fill", t: "Possessives", i: "Write the possessive. The person is in brackets.", items: [
    "(yo) ___ hermana|mi", "(tú) ___ amigos|tus", "(él) ___ casa|su", "(nosotros) ___ profesora|nuestra", "(nosotros) ___ hijos|nuestros", "(vosotros) ___ padre|vuestro", "(ellos) ___ perros|sus", "(yo) ___ primos|mis"] },
  { type: "order", t: "Make sentences", i: "Tap the words in the right order.", items: [
    "A mi hermana le encanta bailar salsa.", "Mi padre es alto y un poco serio.", "¿Te gustan las películas de acción?", "A mí tampoco me gusta el café.", "Nuestros abuelos viven en el campo."] },
  { type: "tf", t: "Read: My family", text: "Te presento a mi familia. Mi madre se llama Rosa; es profesora y es muy simpática. Mi padre, Jorge, es médico. Es bastante serio, pero le encanta contar chistes. Tengo un hermano, Diego. Es alto, moreno y lleva gafas. A Diego le gustan mucho los videojuegos; a mí no, a mí me gusta leer. Mis abuelos viven con nosotros y tenemos un perro que se llama Toby.", items: [
    ["La madre es médica.", false], ["Al padre le encanta contar chistes.", true], ["Diego lleva gafas.", true], ["A la persona que escribe le gustan los videojuegos.", false], ["Los abuelos viven en otra casa.", false]] }
],
6: [
  { type: "match", t: "What time is it?", i: "Connect each time with the clock.", items: [
    ["Son las tres y media.", "3:30"], ["Es la una y cuarto.", "1:15"], ["Son las ocho menos cuarto.", "7:45"], ["Son las diez en punto.", "10:00"],
    ["Son las seis y veinte.", "6:20"], ["Son las nueve menos diez.", "8:50"], ["Es mediodía.", "12:00 (midday)"], ["Son las cinco y cinco.", "5:05"]] },
  { type: "fill", t: "Reflexive verbs", i: "Write the pronoun and the verb (two words).", items: [
    "Yo ___ a las siete. (levantarse)|me levanto", "Mi hermano ___ por la noche. (ducharse)|se ducha", "¿A qué hora ___ tú? (acostarse)|te acuestas",
    "Nosotros ___ los dientes después de comer. (lavarse)|nos lavamos", "Ellos ___ muy tarde los domingos. (despertarse)|se despiertan", "¿Vosotros ___ antes de desayunar? (vestirse)|os vestís"] },
  { type: "fill", t: "Irregular verbs", i: "Conjugate the verb. Careful: these are irregular!", items: [
    "Yo ___ a trabajar en metro. (ir)|voy", "Yo ___ los deberes por la tarde. (hacer)|hago", "Mi padre ___ ocho horas. (dormir)|duerme", "Las clases ___ a las nueve. (empezar)|empiezan",
    "Yo ___ de casa a las ocho. (salir)|salgo", "¿Tú ___ al fútbol los sábados? (jugar)|juegas", "Mi madre ___ del trabajo a las seis. (volver)|vuelve", "Yo ___ la tele después de cenar. (ver)|veo"] },
  { type: "mc", t: "Days, frequency and order", items: [
    ["Never: [[___ como carne.]]", ["Siempre", "Nunca", "A veces"], 1],
    ["[[Me ducho ___ desayunar.]] (before)", ["después de", "antes", "antes de"], 2],
    ["[[¿Qué día va después del martes?]]", ["lunes", "miércoles", "jueves"], 1],
    ["[[—No me levanto temprano. —Yo ___.]] (you agree)", ["tampoco", "también", "sí"], 0],
    ["[[¿___ hora te levantas?]]", ["Qué", "Cuál", "A qué"], 2],
    ["1:00", ["Son la una.", "Es la una.", "Es las una."], 1]] },
  { type: "order", t: "Make sentences", i: "Tap the words in the right order.", items: [
    "Normalmente me levanto a las siete y media.", "¿A qué hora empieza la clase?", "Los domingos no hago nada.", "Después de cenar, veo la tele.", "Voy al gimnasio dos veces por semana."] },
  { type: "tf", t: "Read: A baker's day", text: "Lucas es panadero y su día empieza muy temprano. Se levanta a las tres y media de la mañana, se ducha y desayuna un café. A las cuatro empieza a trabajar. Termina a mediodía y vuelve a casa en bicicleta. Después de comer, duerme la siesta una hora. Por la tarde va al gimnasio o lee. Se acuesta a las nueve y media. Los domingos no trabaja.", items: [
    ["Lucas se levanta a las tres y media.", true], ["Desayuna un té.", false], ["Vuelve a casa en coche.", false], ["Duerme la siesta después de comer.", true], ["Se acuesta antes de las diez.", true], ["Trabaja todos los días de la semana.", false]] }
],
7: [
  { type: "match", t: "Food", i: "Connect each food with its meaning.", items: [
    ["el pescado", "fish"], ["la carne", "meat"], ["las verduras", "vegetables"], ["el pollo", "chicken"], ["el arroz", "rice"], ["la manzana", "apple"], ["el queso", "cheese"], ["los huevos", "eggs"]] },
  { type: "fill", t: "lo, la, los, las", i: "Write the pronoun that replaces the food.", items: [
    "—¿Y el pan? —___ compro yo.|Lo", "—¿Te gusta la paella? —Sí, ___ como mucho.|la", "—¿Dónde están los tomates? —___ tengo en la nevera.|Los",
    "—¿Quién trae las bebidas? —___ traigo yo.|Las", "—¿Cómo tomas el café? —___ tomo con leche.|Lo", "—¿Y las patatas? —Yo ___ pongo en la tortilla.|las"] },
  { type: "mc", t: "In the restaurant", items: [
    ["The waiter asks [[¿Qué van a tomar?]] You say:", ["Soy de primero.", "De primero, sopa.", "La cuenta, primero."], 1],
    ["To ask for the bill:", ["¿Qué cuenta es?", "¿Tiene cuenta?", "¿Me trae la cuenta, por favor?"], 2],
    ["[[un bocadillo ___ jamón]]", ["de", "con", "en"], 0],
    ["[[un café ___ leche]]", ["de", "con", "a"], 1],
    ["[[En España ___ mucho aceite de oliva.]]", ["usa", "se usan", "se usa"], 2],
    ["[[Yo ___ la mesa.]] (poner)", ["pono", "pongo", "pone"], 1]] },
  { type: "fill", t: "traer, poner and se", i: "Write the verb in the right form.", items: [
    "¿Me ___ un vaso de agua, por favor? (traer, usted)|trae", "Yo ___ el postre a la fiesta. (traer)|traigo", "¿Nos ___ dos cafés, por favor? (poner, usted)|pone",
    "En México ___ mucho maíz. (comer, se)|se come", "En España ___ la cena muy tarde. (tomar, se)|se toma", "La tortilla ___ con huevos y patatas. (hacer, se)|se hace"] },
  { type: "order", t: "Make sentences", i: "Tap the words in the right order.", items: [
    "De primero quiero una ensalada mixta.", "¿Me trae la cuenta, por favor?", "Para beber, agua sin gas.", "El pollo lo preparo con limón.", "¿Qué lleva este plato?"] },
  { type: "tf", t: "Read: Casa Pepa", text: "El restaurante Casa Pepa está en el centro de Valencia. Abre de martes a domingo y tiene un menú del día por quince euros. El menú incluye primer plato, segundo plato, postre, pan y bebida. De primero hay ensalada o sopa de verduras; de segundo, paella o pescado a la plancha. De postre se puede tomar fruta o flan. Los lunes el restaurante está cerrado.", items: [
    ["El restaurante abre los lunes.", false], ["El menú cuesta 15 euros.", true], ["La bebida no está incluida en el menú.", false], ["Hay pescado de segundo.", true], ["De postre hay helado.", false]] }
],
8: [
  { type: "match", t: "Places in the neighbourhood", i: "Connect each place with its meaning.", items: [
    ["la farmacia", "pharmacy"], ["la panadería", "bakery"], ["el ayuntamiento", "town hall"], ["la parada de autobús", "bus stop"], ["el supermercado", "supermarket"], ["la biblioteca", "library"], ["el parque", "park"], ["el cajero automático", "cash machine"]] },
  { type: "fill", t: "Where is it?", i: "Use the word bank. The English is in brackets.", bank: ["al lado del", "enfrente del", "entre", "cerca de", "lejos de", "detrás del"], items: [
    "El banco está ___ supermercado. (next to)|al lado del", "La farmacia está ___ la panadería y el bar. (between)|entre", "El parque está ___ colegio. (opposite)|enfrente del",
    "Mi casa está ___ el centro: a dos minutos. (near)|cerca de", "El aeropuerto está ___ la ciudad. (far from)|lejos de", "El jardín está ___ edificio. (behind)|detrás del"] },
  { type: "mc", t: "alguno, ninguno, cuánto", items: [
    ["[[¿Hay ___ farmacia por aquí?]]", ["algún", "alguna", "ninguna"], 1],
    ["[[No hay ___ cine en mi barrio.]]", ["algún", "ninguno", "ningún"], 2],
    ["[[¿___ habitantes tiene tu pueblo?]]", ["Cuántos", "Cuántas", "Cuánto"], 0],
    ["[[¿___ gente vive aquí?]]", ["Cuánto", "Cuánta", "Cuántos"], 1],
    ["[[—¿Hay algún museo? —No, no hay ___.]]", ["ningún", "ninguno", "alguno"], 1],
    ["[[Mi barrio es ___ tranquilo que el centro.]]", ["muy", "mucho", "más"], 2]] },
  { type: "fill", t: "Comparing", i: "Write the missing word.", items: [
    "Madrid es ___ grande que Sevilla. (more)|más", "Mi barrio es ___ ruidoso que el tuyo. (less)|menos", "El centro es ___ caro como el norte. (as)|tan",
    "Este parque es ___ que el otro. (better)|mejor", "Aquí hay ___ tiendas como en mi barrio. (as many)|tantas", "El transporte es ___ que antes. (worse)|peor"] },
  { type: "order", t: "Make sentences", i: "Tap the words in the right order.", items: [
    "¿Hay una farmacia por aquí cerca?", "Sigue todo recto y gira a la izquierda.", "El museo está al final de la calle.", "Mi barrio es más tranquilo que el centro.", "En mi calle no hay ningún supermercado."] },
  { type: "tf", t: "Read: Gràcia", text: "Vivo en Gràcia, un barrio de Barcelona. Es un barrio antiguo, con calles estrechas y muchas plazas. Hay bares, restaurantes y tiendas pequeñas. Mi piso está en una calle tranquila, enfrente de un cine. Al lado de mi casa hay una panadería. No hay ninguna estación de metro en mi calle, pero hay una muy cerca, a cinco minutos. Para mí, el único problema es que por la noche hay bastante ruido.", items: [
    ["Gràcia es un barrio moderno.", false], ["Hay muchas plazas.", true], ["Enfrente de su piso hay un cine.", true], ["Hay una estación de metro en su calle.", false], ["El barrio es muy silencioso por la noche.", false]] }
],
9: [
  { type: "fill", t: "Participles", i: "Write the participle (hablar → hablado).", items: [
    "hablar → ___|hablado", "comer → ___|comido", "vivir → ___|vivido", "hacer → ___|hecho", "ver → ___|visto", "escribir → ___|escrito", "decir → ___|dicho", "volver → ___|vuelto"] },
  { type: "fill", t: "The pretérito perfecto", i: "Write haber + participle (two words).", items: [
    "Yo ___ en Japón. (estar)|he estado", "¿Tú ___ alguna vez paella? (comer)|has comido", "Mi hermana nunca ___ en avión. (viajar)|ha viajado",
    "Nosotros ___ esa película tres veces. (ver)|hemos visto", "¿Vosotros ___ ya los deberes? (hacer)|habéis hecho", "Ellos ___ un libro. (escribir)|han escrito"] },
  { type: "mc", t: "saber, poder and experiences", items: [
    ["Do you know how to swim? [[¿___ nadar?]]", ["Sabes", "Puedes", "Conoces"], 0],
    ["[[Hoy no ___ ir a clase: estoy enfermo.]]", ["sé", "puedo", "sabo"], 1],
    ["[[Yo no ___ cocinar muy bien.]]", ["sabo", "puedo", "sé"], 2],
    ["[[¿Has estado ___ en México?]]", ["nunca", "alguna vez", "todavía"], 1],
    ["[[—¿Has leído el libro? —No, ___ no.]]", ["todavía", "ya", "nunca"], 0],
    ["[[—¿Has ido a Japón? —No, ___.]]", ["ya", "nunca", "alguna vez"], 1]] },
  { type: "match", t: "Skills and qualities", i: "Connect each word with its meaning.", items: [
    ["conducir", "to drive"], ["paciente", "patient"], ["ordenado", "tidy"], ["puntual", "punctual"], ["tocar un instrumento", "to play an instrument"], ["dibujar", "to draw"], ["despistado", "absent-minded"], ["hablar en público", "to speak in public"]] },
  { type: "order", t: "Make sentences", i: "Tap the words in the right order.", items: [
    "¿Has estado alguna vez en Argentina?", "Nunca he montado en globo.", "Sé tocar la guitarra, pero no sé cantar.", "Todavía no he visto esa película.", "Mi hermano ha escrito tres libros."] },
  { type: "tf", t: "Read: Looking for a flatmate", text: "Busco compañero de piso. Me llamo Raquel, tengo veintinueve años y soy diseñadora. Soy muy ordenada y bastante tranquila. He vivido en tres países: Francia, Irlanda y Chile, así que hablo francés e inglés. No sé cocinar muy bien, pero sé hacer una tortilla de patatas buenísima. Busco a una persona limpia, simpática y que no fume. El piso está en el centro y tiene dos habitaciones.", items: [
    ["Raquel es diseñadora.", true], ["Ha vivido en cuatro países.", false], ["Sabe cocinar muy bien.", false], ["Busca a una persona que no fume.", true], ["El piso tiene tres habitaciones.", false]] }
]
};
