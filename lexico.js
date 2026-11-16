/* Léxico: extra vocabulary for every unit, in the style of the book's "Léxico" pages.
   Merged into UNITS by app.js. Format: [spanish, english]. */
const LEXICO = {
0: [
 { g: "Saludar y despedirse (greetings)", items: [["Buenos días.","Good morning."],["Buenas tardes.","Good afternoon."],["Buenas noches.","Good evening / night."],["¡Hola!","Hello!"],["Hola, ¿qué tal?","Hi, how are you?"],["Hola, ¿cómo estás?","Hi, how are you? (tú)"],["¡Adiós!","Goodbye!"],["¡Hasta luego!","See you later!"],["¡Hasta mañana!","See you tomorrow!"]] },
 { g: "In the classroom", items: [["el profesor / la profesora","teacher"],["el alumno / la alumna","student"],["el libro","book"],["el cuaderno","notebook"],["el bolígrafo","pen"],["el lápiz","pencil"],["la pizarra","board"],["la mesa","table"],["la silla","chair"],["la mochila","backpack"],["el diccionario","dictionary"],["el ejercicio","exercise"]] },
 { g: "Classroom words you will hear", items: [["escucha","listen"],["lee","read"],["escribe","write"],["repite","repeat"],["mira","look"],["pregunta","ask"],["responde","answer"],["abre el libro","open your book"],["en parejas","in pairs"],["en grupos","in groups"],["¿Cómo se dice...?","How do you say...?"],["No entiendo.","I don't understand."]] },
 { g: "The alphabet", items: [["a, be, ce, de, e, efe","a b c d e f"],["ge, hache, i, jota, ka, ele","g h i j k l"],["eme, ene, eñe, o, pe, cu","m n ñ o p q"],["erre, ese, te, u, uve, uve doble","r s t u v w"],["equis, i griega, zeta","x y z"]] }
],
1: [
 { g: "Profesiones (jobs)", items: [["el científico / la científica","scientist"],["el cocinero / la cocinera","cook, chef"],["el estudiante / la estudiante","student"],["el diseñador de moda / la diseñadora de moda","fashion designer"],["el periodista / la periodista","journalist"],["el profesor / la profesora","teacher"],["el traductor / la traductora","translator"],["el enfermero / la enfermera","nurse"],["el camarero / la camarera","waiter / waitress"],["el secretario / la secretaria","secretary"],["el deportista / la deportista","sportsperson"],["el comercial / la comercial","sales rep"],["el médico / la médica","doctor"],["el abogado / la abogada","lawyer"],["el arquitecto / la arquitecta","architect"],["el ingeniero / la ingeniera","engineer"],["el recepcionista / la recepcionista","receptionist"],["el guía / la guía","guide"]] },
 { g: "Lugares de trabajo (workplaces)", items: [["una universidad","a university"],["un gimnasio","a gym"],["un laboratorio","a laboratory"],["un hospital","a hospital"],["un periódico","a newspaper"],["un bar","a bar"],["un restaurante","a restaurant"],["un taller","a workshop"],["un banco","a bank"],["una empresa","a company"],["un despacho","an office"],["una agencia de viajes","a travel agency"],["una tienda","a shop"],["un supermercado","a supermarket"],["una escuela de idiomas","a language school"]] },
 { g: "Nacionalidades (nationalities)", items: [["italiano / italiana","Italian"],["brasileño / brasileña","Brazilian"],["argentino / argentina","Argentinian"],["alemán / alemana","German"],["inglés / inglesa","English"],["francés / francesa","French"],["portugués / portuguesa","Portuguese"],["español / española","Spanish"],["belga","Belgian (same for both)"],["marroquí","Moroccan (same for both)"],["estadounidense","from the USA (same for both)"],["canadiense","Canadian (same for both)"],["vietnamita","Vietnamese (same for both)"],["japonés / japonesa","Japanese"],["chino / china","Chinese"],["mexicano / mexicana","Mexican"]] },
 { g: "Datos personales (personal data)", items: [["(el) nombre","first name"],["(el / los) apellido/s","surname/s"],["(la) edad","age"],["(el) móvil, (el) celular","mobile phone"],["(el) correo electrónico","email"],["(el) número de teléfono","phone number"],["la dirección","address"],["la nacionalidad","nationality"],["la profesión","job"],["soltero / soltera","single"],["casado / casada","married"]] }
],
2: [
 { g: "Idiomas (languages)", items: [["el español","Spanish"],["el inglés","English"],["el francés","French"],["el alemán","German"],["el italiano","Italian"],["el portugués","Portuguese"],["el chino","Chinese"],["el japonés","Japanese"],["el vietnamita","Vietnamese"],["el árabe","Arabic"],["el ruso","Russian"],["el coreano","Korean"]] },
 { g: "Learning a language", items: [["aprender","to learn"],["estudiar","to study"],["practicar","to practise"],["entender","to understand"],["hablar","to speak"],["leer","to read"],["escribir","to write"],["escuchar","to listen"],["la gramática","grammar"],["la pronunciación","pronunciation"],["el vocabulario","vocabulary"],["la palabra","word"],["la frase","sentence"],["el examen","exam"],["la clase","class"],["el curso","course"]] },
 { g: "Why learn Spanish?", items: [["por trabajo","for work"],["por viajes","for travel"],["por estudios","for studies"],["por mi pareja","because of my partner"],["por mi familia","because of my family"],["por curiosidad","out of curiosity"],["me gusta la cultura","I like the culture"],["conocer gente","to meet people"],["viajar","to travel"],["vivir en el extranjero","to live abroad"]] },
 { g: "Ordinal numbers and dates", items: [["lunes","Monday"],["martes","Tuesday"],["miércoles","Wednesday"],["jueves","Thursday"],["viernes","Friday"],["sábado","Saturday"],["domingo","Sunday"],["hoy","today"],["mañana","tomorrow"],["ayer","yesterday"]] }
],
3: [
 { g: "Geografía (geography)", items: [["el país","country"],["la ciudad","city"],["la capital","capital"],["la montaña","mountain"],["el río","river"],["el mar","sea"],["la isla","island"],["el desierto","desert"],["la playa","beach"],["el lago","lake"],["la frontera","border"],["el norte","north"],["el sur","south"],["el este","east"],["el oeste","west"]] },
 { g: "Países de habla hispana", items: [["España","Spain"],["México","Mexico"],["Colombia","Colombia"],["Argentina","Argentina"],["Chile","Chile"],["Perú","Peru"],["Cuba","Cuba"],["Bolivia","Bolivia"],["Ecuador","Ecuador"],["Venezuela","Venezuela"],["Uruguay","Uruguay"],["Paraguay","Paraguay"],["Costa Rica","Costa Rica"],["Panamá","Panama"],["Guatemala","Guatemala"]] },
 { g: "Clima y tiempo (weather)", items: [["hace calor","it is hot"],["hace frío","it is cold"],["hace sol","it is sunny"],["hace viento","it is windy"],["llueve","it rains"],["nieva","it snows"],["está nublado","it is cloudy"],["la temperatura","temperature"],["el verano","summer"],["el invierno","winter"],["la primavera","spring"],["el otoño","autumn"]] },
 { g: "Descubrir una ciudad", items: [["la plaza","square"],["la calle","street"],["el edificio","building"],["el monumento","monument"],["el puente","bridge"],["la catedral","cathedral"],["el mercado","market"],["el centro","city centre"],["a las afueras","on the outskirts"],["cerca de","near"],["lejos de","far from"]] }
],
4: [
 { g: "La ropa (clothes)", items: [["la camiseta","T-shirt"],["la camisa","shirt"],["el pantalón","trousers"],["los vaqueros","jeans"],["la falda","skirt"],["el vestido","dress"],["el jersey","jumper"],["la chaqueta","jacket"],["el abrigo","coat"],["los zapatos","shoes"],["las botas","boots"],["las zapatillas","trainers"],["el sombrero","hat"],["la bufanda","scarf"],["los calcetines","socks"],["el cinturón","belt"]] },
 { g: "Colores", items: [["rojo","red"],["azul","blue"],["verde","green"],["amarillo","yellow"],["negro","black"],["blanco","white"],["gris","grey"],["marrón","brown"],["naranja","orange"],["rosa","pink"],["morado","purple"]] },
 { g: "Comprar (shopping)", items: [["el precio","price"],["la talla","size (clothes)"],["el número","size (shoes)"],["barato / barata","cheap"],["caro / cara","expensive"],["la oferta","special offer"],["el descuento","discount"],["pagar","to pay"],["con tarjeta","by card"],["en efectivo","in cash"],["la caja","till"],["el recibo","receipt"],["el euro","euro"]] },
 { g: "Regalos (presents)", items: [["el regalo","present"],["el cumpleaños","birthday"],["la flor","flower"],["el libro","book"],["el perfume","perfume"],["el reloj","watch"],["las gafas de sol","sunglasses"],["la joya","jewel"],["el juguete","toy"]] }
],
5: [
 { g: "La familia (family)", items: [["el padre","father"],["la madre","mother"],["los padres","parents"],["el hermano / la hermana","brother / sister"],["el hijo / la hija","son / daughter"],["el abuelo / la abuela","grandfather / grandmother"],["el tío / la tía","uncle / aunt"],["el primo / la prima","cousin"],["el sobrino / la sobrina","nephew / niece"],["el marido, el esposo","husband"],["la mujer, la esposa","wife"],["el novio / la novia","boyfriend / girlfriend"],["el nieto / la nieta","grandson / granddaughter"],["el suegro / la suegra","father-in-law / mother-in-law"]] },
 { g: "El carácter (personality)", items: [["simpático / simpática","nice"],["antipático / antipática","unpleasant"],["tímido / tímida","shy"],["divertido / divertida","fun"],["serio / seria","serious"],["trabajador / trabajadora","hard-working"],["perezoso / perezosa","lazy"],["generoso / generosa","generous"],["inteligente","intelligent"],["abierto / abierta","open, outgoing"],["amable","kind"],["sincero / sincera","honest"]] },
 { g: "El aspecto físico (appearance)", items: [["alto / alta","tall"],["bajo / baja","short"],["delgado / delgada","slim"],["gordo / gorda","fat"],["joven","young"],["mayor","older"],["rubio / rubia","blond"],["moreno / morena","dark-haired"],["pelirrojo / pelirroja","red-haired"],["el pelo largo / corto","long / short hair"],["los ojos azules / marrones","blue / brown eyes"],["calvo / calva","bald"],["llevar gafas","to wear glasses"],["llevar barba","to have a beard"]] },
 { g: "Gustos (likes)", items: [["bailar","to dance"],["cantar","to sing"],["cocinar","to cook"],["dibujar","to draw"],["nadar","to swim"],["pasear","to walk"],["ver películas","to watch films"],["salir con amigos","to go out with friends"],["la música","music"],["el deporte","sport"],["el fútbol","football"],["la lectura","reading"]] }
],
6: [
 { g: "Las horas y el día (time of day)", items: [["la mañana","morning"],["el mediodía","midday"],["la tarde","afternoon"],["la noche","night"],["la madrugada","early hours"],["temprano","early"],["tarde","late"],["la hora","time, hour"],["el minuto","minute"],["y media","half past"],["y cuarto","quarter past"],["menos cuarto","quarter to"],["en punto","exactly"],["¿Qué hora es?","What time is it?"]] },
 { g: "Rutina diaria", items: [["despertarse","to wake up"],["levantarse","to get up"],["ducharse","to shower"],["desayunar","to have breakfast"],["ir al trabajo","to go to work"],["trabajar","to work"],["comer","to have lunch"],["volver a casa","to come back home"],["cenar","to have dinner"],["acostarse","to go to bed"],["dormir","to sleep"],["la siesta","nap"],["hacer deporte","to do sport"],["ver la tele","to watch TV"]] },
 { g: "Frecuencia (how often)", items: [["siempre","always"],["casi siempre","almost always"],["normalmente","usually"],["a menudo","often"],["a veces","sometimes"],["casi nunca","hardly ever"],["nunca","never"],["todos los días","every day"],["una vez a la semana","once a week"],["los fines de semana","at weekends"]] },
 { g: "Cuidado personal", items: [["lavarse la cara","to wash your face"],["lavarse las manos","to wash your hands"],["cepillarse los dientes","to brush your teeth"],["ponerse el pijama","to put on pyjamas"],["la ropa","clothes"],["el despertador","alarm clock"],["la cama","bed"],["el baño","bathroom"]] }
],
7: [
 { g: "La comida (food)", items: [["el pan","bread"],["el arroz","rice"],["la pasta","pasta"],["la carne","meat"],["el pollo","chicken"],["el pescado","fish"],["el huevo","egg"],["el queso","cheese"],["el jamón","ham"],["la ensalada","salad"],["la sopa","soup"],["la tortilla","omelette"],["la patata","potato"],["el tomate","tomato"]] },
 { g: "Frutas y verduras", items: [["la manzana","apple"],["la naranja","orange"],["el plátano","banana"],["la fresa","strawberry"],["la uva","grape"],["el limón","lemon"],["la cebolla","onion"],["la zanahoria","carrot"],["el pimiento","pepper"],["el ajo","garlic"],["el champiñón","mushroom"],["la verdura","vegetable"],["la fruta","fruit"]] },
 { g: "Bebidas (drinks)", items: [["el agua","water"],["el café","coffee"],["el té","tea"],["la leche","milk"],["el zumo","juice"],["el vino","wine"],["la cerveza","beer"],["el refresco","soft drink"],["con hielo","with ice"],["sin azúcar","without sugar"]] },
 { g: "En el restaurante", items: [["la carta, el menú","menu"],["el primer plato","first course"],["el segundo plato","main course"],["el postre","dessert"],["la cuenta","bill"],["la propina","tip"],["reservar una mesa","to book a table"],["el camarero / la camarera","waiter"],["¿Qué van a tomar?","What will you have?"],["La cuenta, por favor.","The bill, please."],["Está muy rico.","It's very tasty."],["picante","spicy"],["dulce","sweet"],["salado","salty"]] }
],
8: [
 { g: "La casa (house)", items: [["el salón","living room"],["la cocina","kitchen"],["el dormitorio","bedroom"],["el baño","bathroom"],["el comedor","dining room"],["el balcón","balcony"],["la terraza","terrace"],["el jardín","garden"],["el garaje","garage"],["el pasillo","corridor"],["la escalera","stairs"],["el ascensor","lift"],["la puerta","door"],["la ventana","window"]] },
 { g: "Los muebles (furniture)", items: [["el sofá","sofa"],["la cama","bed"],["el armario","wardrobe"],["la estantería","bookshelf"],["la lámpara","lamp"],["la alfombra","rug"],["el espejo","mirror"],["la nevera","fridge"],["la lavadora","washing machine"],["el horno","oven"],["la televisión","television"],["el escritorio","desk"],["la cortina","curtain"]] },
 { g: "Preposiciones de lugar", items: [["en","in, on"],["encima de","on top of"],["debajo de","under"],["delante de","in front of"],["detrás de","behind"],["al lado de","next to"],["entre","between"],["enfrente de","opposite"],["a la derecha","on the right"],["a la izquierda","on the left"],["todo recto","straight on"],["dentro de","inside"],["fuera de","outside"]] },
 { g: "En el barrio", items: [["la farmacia","pharmacy"],["el parque","park"],["el cine","cinema"],["la biblioteca","library"],["la panadería","bakery"],["la estación","station"],["el hospital","hospital"],["el colegio","school"],["la iglesia","church"],["el ayuntamiento","town hall"],["el semáforo","traffic light"],["la esquina","corner"]] }
],
9: [
 { g: "Transporte (transport)", items: [["el coche","car"],["la moto","motorbike"],["la bici","bike"],["el autobús","bus"],["el tren","train"],["el metro","underground"],["el avión","plane"],["el barco","boat"],["el taxi","taxi"],["la estación","station"],["el aeropuerto","airport"],["el billete","ticket"],["el andén","platform"],["conducir","to drive"],["aparcar","to park"]] },
 { g: "Viajes (travel)", items: [["el viaje","trip"],["las vacaciones","holidays"],["el hotel","hotel"],["la reserva","booking"],["la maleta","suitcase"],["el pasaporte","passport"],["el mapa","map"],["el turista / la turista","tourist"],["el guía / la guía","guide"],["salir","to leave"],["llegar","to arrive"],["viajar","to travel"],["visitar","to visit"],["alojarse","to stay (hotel)"]] },
 { g: "Experiencias (the perfect tense)", items: [["he viajado","I have travelled"],["has comido","you have eaten"],["ha visto","he/she has seen"],["hemos estado","we have been"],["ya","already"],["todavía no","not yet"],["alguna vez","ever"],["nunca he...","I have never..."],["esta semana","this week"],["este año","this year"],["hoy","today"],["hace poco","a short while ago"]] },
 { g: "Cualidades de una persona", items: [["responsable","responsible"],["puntual","punctual"],["paciente","patient"],["ordenado / ordenada","tidy"],["creativo / creativa","creative"],["valiente","brave"],["curioso / curiosa","curious"],["tranquilo / tranquila","calm"],["nervioso / nerviosa","nervous"],["organizado / organizada","organised"]] }
]
};

const LEXICO_GRAMMAR = {
 1: [
  { t: "Gender: nationalities and jobs", body: `
   <div class="tbl-wrap"><table><tr><th>Masculine</th><th>Feminine</th><th>Both</th></tr>
   <tr><td>-o → [[italiano]]</td><td>-a → [[italiana]]</td><td rowspan="3">[[belga]], [[marroquí]], [[estadounidense]], [[canadiense]]</td></tr>
   <tr><td>consonant → [[alemán]], [[inglés]], [[francés]]</td><td>+ a → [[alemana]], [[inglesa]], [[francesa]]</td></tr>
   <tr><td>[[español]], [[portugués]]</td><td>[[española]], [[portuguesa]]</td></tr></table></div>
   <div class="tbl-wrap"><table><tr><th>Job masculine</th><th>Job feminine</th><th>Both</th></tr>
   <tr><td>[[cocinero]], [[secretario]]</td><td>[[cocinera]], [[secretaria]]</td><td>[[periodista]], [[estudiante]]</td></tr>
   <tr><td>[[profesor]], [[juez]]</td><td>[[profesora]], [[jueza]]</td><td>[[comercial]], [[policía]], [[agente]]</td></tr></table></div>
   <p class="tip">Jobs with one form for both: [[comercial]], [[chófer]], [[policía]], [[agente]], [[modelo]].</p>` },
  { t: "ser, tener and llamarse", body: `
   <div class="tbl-wrap"><table><tr><th></th><th>ser</th><th>tener</th><th>llamarse</th></tr>
   <tr><td>yo</td><td>[[soy]]</td><td>[[tengo]]</td><td>[[me llamo]]</td></tr>
   <tr><td>tú</td><td>[[eres]]</td><td>[[tienes]]</td><td>[[te llamas]]</td></tr>
   <tr><td>él / ella / usted</td><td>[[es]]</td><td>[[tiene]]</td><td>[[se llama]]</td></tr>
   <tr><td>nosotros/as</td><td>[[somos]]</td><td>[[tenemos]]</td><td>[[nos llamamos]]</td></tr>
   <tr><td>vosotros/as</td><td>[[sois]]</td><td>[[tenéis]]</td><td>[[os llamáis]]</td></tr>
   <tr><td>ellos / ellas / ustedes</td><td>[[son]]</td><td>[[tienen]]</td><td>[[se llaman]]</td></tr></table></div>` },
  { t: "Personal pronouns (subject)", body: `
   <div class="tbl-wrap"><table><tr><th></th><th>Singular</th><th>Plural</th></tr>
   <tr><td>1st person</td><td>[[yo]]</td><td>[[nosotros]] / [[nosotras]]</td></tr>
   <tr><td>2nd person</td><td>[[tú]], [[vos]], [[usted]]</td><td>[[vosotros]] / [[vosotras]], [[ustedes]]</td></tr>
   <tr><td>3rd person</td><td>[[él]] / [[ella]]</td><td>[[ellos]] / [[ellas]]</td></tr></table></div>
   <p class="tip">[[usted]] is formal. [[vosotros]] is informal plural in Spain. In Latin America people use [[ustedes]] for every plural.</p>` },
  { t: "Talking about personal data", body: `
   <ul><li>[[¿Cómo te llamas?]] → [[Me llamo Daniel.]]</li>
   <li>[[¿Cuál es tu apellido?]] → [[Vigny.]]</li>
   <li>[[¿De dónde eres?]] → [[Soy alemán. Soy de Berlín.]]</li>
   <li>[[¿Eres francesa?]] → [[Sí, soy de París. No, soy italiana.]]</li>
   <li>[[¿Cuántos años tienes?]] → [[Tengo 23 años.]]</li>
   <li>[[¿Tienes móvil?]] → [[Sí, es el 627629047.]]</li>
   <li>[[¿En qué trabajas?]] → [[Soy estudiante y trabajo como recepcionista en un hotel.]]</li>
   <li>[[¿A qué te dedicas?]] → [[Trabajo en un banco. Soy comercial.]]</li></ul>` }
 ]
};
