/* Extra material so the site follows Aula Internacional 1, Nueva edición (units 0 to 9).
   Loaded before app.js, which merges it into UNITS. New practice questions are added at the end of each unit. */
const UPDATES = {
  1: {
    es: "Nosotros", en: "Us: who we are",
    goals: ["Count from 0 to 100", "Use tú and usted when you ask personal questions", "Say your name with llamarse"],
    grammar: [
      { t: "Numbers 0 to 100", body: `
        <div class="tbl-wrap"><table>
        <tr><td>0 [[cero]]</td><td>1 [[uno]]</td><td>2 [[dos]]</td><td>3 [[tres]]</td><td>4 [[cuatro]]</td><td>5 [[cinco]]</td></tr>
        <tr><td>6 [[seis]]</td><td>7 [[siete]]</td><td>8 [[ocho]]</td><td>9 [[nueve]]</td><td>10 [[diez]]</td><td>11 [[once]]</td></tr>
        <tr><td>12 [[doce]]</td><td>13 [[trece]]</td><td>14 [[catorce]]</td><td>15 [[quince]]</td><td>16 [[dieciséis]]</td><td>17 [[diecisiete]]</td></tr>
        <tr><td>18 [[dieciocho]]</td><td>19 [[diecinueve]]</td><td>20 [[veinte]]</td><td>21 [[veintiuno]]</td><td>22 [[veintidós]]</td><td>23 [[veintitrés]]</td></tr>
        <tr><td>24 [[veinticuatro]]</td><td>25 [[veinticinco]]</td><td>26 [[veintiséis]]</td><td>27 [[veintisiete]]</td><td>28 [[veintiocho]]</td><td>29 [[veintinueve]]</td></tr>
        <tr><td>30 [[treinta]]</td><td>40 [[cuarenta]]</td><td>50 [[cincuenta]]</td><td>60 [[sesenta]]</td><td>70 [[setenta]]</td><td>80 [[ochenta]]</td></tr>
        <tr><td>90 [[noventa]]</td><td>100 [[cien]]</td><td></td><td></td><td></td><td></td></tr></table></div>
        <p>From 31 on, write three words: [[treinta y uno]], [[cuarenta y cinco]], [[noventa y nueve]].</p>
        <p class="tip">Before a noun, [[uno]] becomes [[un]] or [[una]]: [[un euro]], [[una casa]], [[veintiún años]], [[veintiuna personas]].</p>` },
      { t: "Personal questions: tú or usted", body: `
        <div class="tbl-wrap"><table><tr><th>With tú (friends)</th><th>With usted (formal)</th></tr>
        <tr><td>[[¿Cómo te llamas?]]</td><td>[[¿Cómo se llama usted?]]</td></tr>
        <tr><td>[[¿De dónde eres?]]</td><td>[[¿De dónde es usted?]]</td></tr>
        <tr><td>[[¿Cuántos años tienes?]]</td><td>[[¿Cuántos años tiene usted?]]</td></tr>
        <tr><td>[[¿A qué te dedicas?]]</td><td>[[¿A qué se dedica usted?]]</td></tr>
        <tr><td>[[¿Cuál es tu teléfono?]]</td><td>[[¿Cuál es su teléfono?]]</td></tr></table></div>
        <p class="tip">[[usted]] uses the same verb form as él / ella, and [[su]] replaces [[tu]].</p>` }
    ],
    vocab: [
      { g: "Names and data", items: [["el nombre","first name"],["el apellido","surname"],["el apodo","nickname"],["el nombre completo","full name"],["la edad","age"],["el número de teléfono","phone number"],["el correo electrónico","email"]] },
      { g: "Numbers 20 to 100", items: [["veinte","20"],["treinta","30"],["cuarenta","40"],["cincuenta","50"],["sesenta","60"],["setenta","70"],["ochenta","80"],["noventa","90"],["cien","100"]] }
    ],
    phrases: [["¿Cómo se llama usted?","What is your name? (formal)"],["¿Cuál es su apellido?","What is your surname? (formal)"],["Tengo treinta y dos años.","I am 32 years old."],["Mi hermana se llama Laura.","My sister is called Laura."]],
    ex: [
      { type: "mc", q: "What number is [[cuarenta y cinco]]?", opts: ["45", "54", "415", "405"], a: 0, why: "cuarenta = 40, y cinco = 5." },
      { type: "mc", q: "You ask a stranger his name politely: [[¿Cómo ___ usted?]]", opts: ["te llamas", "se llama", "me llamo", "llamas"], a: 1, why: "usted uses the same form as él / ella: se llama." },
      { type: "fill", q: "[[Mi hermana ___ Laura.]] (llamarse)", a: ["se llama"], why: "ella → se llama." },
      { type: "fill", q: "[[Tengo ___ años.]] (21)", a: ["veintiún", "veintiun"], why: "uno shortens to veintiún before a noun." }
    ]
  },
  2: {
    vocab: [
      { g: "How well do you speak?", items: [["muy bien","very well"],["bien","well"],["regular","so-so"],["mal","badly"],["un poco","a little"],["bastante","quite a lot"],["nada","nothing, not at all"],["entender","to understand"]] },
      { g: "Places for leisure", items: [["el cine","cinema"],["el teatro","theatre"],["el museo","museum"],["el gimnasio","gym"],["el bar","bar"],["la playa","beach"],["la montaña","mountain"],["el campo","countryside"]] }
    ],
    phrases: [["Hablo bastante bien inglés.","I speak English quite well."],["No hablo nada de francés.","I don't speak any French."]],
    ex: [
      { type: "mc", q: "'I speak a little Spanish' is:", opts: ["Hablo un poco de español.", "Hablo poco español de.", "Hablas un poco español.", "Hablan mucho español."], a: 0, why: "un poco de + language." },
      { type: "fill", q: "[[Mis padres ___ en Hanói.]] (vivir)", a: ["viven"], why: "ellos → viven." }
    ]
  },
  3: {
    goals: ["Describe places with ser, locate them with estar", "Say the most or the biggest with el / la más"],
    grammar: [
      { t: "ser, estar or hay?", body: `
        <div class="tbl-wrap"><table><tr><th>Use</th><th>Verb</th><th>Example</th></tr>
        <tr><td>What something is like</td><td>[[ser]]</td><td>[[Santiago es una ciudad muy grande.]]</td></tr>
        <tr><td>Where something is</td><td>[[estar]]</td><td>[[Santiago está en Chile.]]</td></tr>
        <tr><td>That something exists</td><td>[[hay]]</td><td>[[En Chile hay volcanes.]]</td></tr></table></div>
        <p class="tip">[[hay]] never changes, for one thing or many: [[Hay un río.]] [[Hay tres ríos.]]</p>` },
      { t: "The superlative: el / la más", body: `
        <p>[[el / la / los / las]] + noun + [[más]] + adjective = the most / the -est</p>
        <p>[[El Amazonas es el río más largo de Sudamérica.]]</p>
        <p>[[La Paz es la capital más alta del mundo.]]</p>
        <p>[[Los Andes son las montañas más largas.]]</p>` }
    ],
    vocab: [
      { g: "More geography", items: [["el océano","ocean"],["el volcán","volcano"],["la selva","jungle"],["el bosque","forest"],["el lago","lake"],["el puerto","port"],["el pueblo","town, village"],["el continente","continent"]] }
    ],
    phrases: [["El Amazonas es el río más largo.","The Amazon is the longest river."],["En Chile hay muchos volcanes.","In Chile there are many volcanoes."]],
    ex: [
      { type: "mc", q: "Choose: [[Santiago ___ una ciudad muy grande.]]", opts: ["es", "está", "hay", "son"], a: 0, why: "ser describes what a place is like." },
      { type: "mc", q: "Choose: [[El Aconcagua es la montaña ___ alta de América.]]", opts: ["más", "mucho", "muy", "tan"], a: 0, why: "la + noun + más + adjective." }
    ]
  },
  4: {
    goals: ["Choose between qué and cuál", "Say what you have to do with tener que", "Say how clothes fit you"],
    grammar: [
      { t: "qué or cuál?", body: `
        <ul><li>[[qué]] + noun: [[¿Qué color prefieres?]] [[¿Qué camiseta quieres?]]</li>
        <li>[[cuál / cuáles]] alone, to choose between things: [[¿Cuál prefieres?]] [[¿Cuáles quieres?]]</li>
        <li>[[qué]] + verb asks what something is: [[¿Qué es esto?]]</li></ul>` },
      { t: "tener que + infinitive", body: `
        <p>[[tengo que]], [[tienes que]], [[tiene que]], [[tenemos que]], [[tenéis que]], [[tienen que]] + infinitive = I have to, you have to...</p>
        <p>[[Tengo que comprar unos zapatos.]] [[Tenemos que llevar el pasaporte.]]</p>` },
      { t: "Trying on and buying", body: `
        <ul><li>[[¿Puedo probarme esta camisa?]] = Can I try on this shirt?</li>
        <li>[[Te queda bien.]] / [[Te queda mal.]] = It looks good / bad on you.</li>
        <li>[[Me queda grande.]] = It is too big for me.</li>
        <li>[[Me la llevo.]] = I'll take it.</li></ul>
        <p class="tip">When you buy something, you can use the [[usted]] form with the shop assistant: [[¿Qué desea?]] [[¿Cuánto cuesta?]]</p>` }
    ],
    vocab: [
      { g: "In the suitcase", items: [["la maleta","suitcase"],["el pasaporte","passport"],["el carné de conducir","driving licence"],["el protector solar","sunscreen"],["el neceser","toiletry bag"],["el cepillo de dientes","toothbrush"]] },
      { g: "Shops", items: [["la tienda de ropa","clothes shop"],["la zapatería","shoe shop"],["la librería","bookshop"],["la juguetería","toy shop"]] },
      { g: "Describing clothes", items: [["cómodo / cómoda","comfortable"],["elegante","elegant"],["ancho / ancha","wide, loose"],["estrecho / estrecha","narrow, tight"],["corto / corta","short"],["largo / larga","long"]] }
    ],
    phrases: [["¿Puedo probarme esta chaqueta?","Can I try this jacket on?"],["Te queda muy bien.","It looks very good on you."],["Tengo que comprar una maleta.","I have to buy a suitcase."]],
    ex: [
      { type: "mc", q: "Choose: [[¿___ prefieres, el rojo o el azul?]]", opts: ["Cuál", "Qué", "Cuántos", "Cómo"], a: 0, why: "cuál is used alone to choose between things." },
      { type: "mc", q: "Choose: [[¿___ color prefieres?]]", opts: ["Cuál", "Qué", "Cuáles", "Quién"], a: 1, why: "qué + noun." },
      { type: "mc", q: "How do you say 'It looks good on you'?", opts: ["Te queda bien.", "Te llevas bien.", "Tienes bien.", "Eres bien."], a: 0, why: "quedar bien = to suit, to fit well." },
      { type: "fill", q: "[[Tengo ___ comprar un regalo.]] (I have to buy a present)", a: ["que"], why: "tener que + infinitive." }
    ]
  },
  5: {
    goals: ["Use interesar and parecer", "Say how much with muy, bastante and un poco", "Fill in a personal data form"],
    grammar: [
      { t: "interesar and encantar", body: `
        <p>They work like [[gustar]]: [[Me interesa la historia.]] [[Me interesan los idiomas.]] [[Me encanta el jazz.]] [[Le encantan las películas.]]</p>
        <p class="tip">The thing you like or find interesting decides if the verb is singular or plural.</p>` },
      { t: "ser or parecer?", body: `
        <p>[[ser]] + adjective says what someone is like. [[parecer]] + adjective gives a first impression.</p>
        <p>[[Mi tío es simpático.]] = My uncle is nice. · [[Mi tío parece simpático.]] = My uncle seems nice.</p>
        <p>[[Tu amiga me parece muy simpática.]] = Your friend seems very nice to me.</p>` },
      { t: "How much: muy, bastante, un poco", body: `
        <p>[[muy]] very · [[bastante]] quite · [[un poco]] a little, a bit</p>
        <p>[[Es muy tímido.]] [[Es bastante divertida.]] [[Es un poco perezoso.]]</p>` },
      { t: "Adjectives with one form", body: `
        <p>Adjectives ending in -e, -ista, or -al usually have the same form for masculine and feminine: [[inteligente]], [[optimista]], [[tradicional]], [[egoísta]].</p>
        <p>[[Mi hermano es inteligente.]] [[Mi hermana es inteligente.]] Plural: [[inteligentes]], [[optimistas]].</p>
        <p>[[¿no?]] at the end of a sentence asks for agreement: [[Es simpático, ¿no?]]</p>` }
    ],
    vocab: [
      { g: "Music", items: [["el jazz","jazz"],["el flamenco","flamenco"],["el pop","pop"],["el rock","rock"],["la música clásica","classical music"],["el concierto","concert"],["el festival","festival"]] },
      { g: "Personal data form", items: [["el lugar de nacimiento","place of birth"],["el año de nacimiento","year of birth"],["el apellido","surname"],["la profesión","profession"],["las redes sociales","social networks"]] }
    ],
    phrases: [["Me interesan mucho los idiomas.","I am very interested in languages."],["Tu hermano parece muy simpático.","Your brother seems very nice."],["Mi madre es bastante tímida.","My mother is quite shy."]],
    ex: [
      { type: "mc", q: "Choose: [[Me ___ los idiomas.]] (interesar)", opts: ["interesa", "interesan", "intereso", "interesas"], a: 1, why: "idiomas is plural." },
      { type: "mc", q: "Choose: [[Mi hermana es ___ simpática.]] (quite)", opts: ["bastante", "bastantes", "mucha", "poco de"], a: 0, why: "bastante does not change before an adjective." },
      { type: "mc", q: "Which adjective has the same form for men and women?", opts: ["inteligente", "simpático", "alto", "rubio"], a: 0, why: "Adjectives in -e do not change." },
      { type: "fill", q: "[[Tu amigo ___ muy simpático.]] (seems)", a: ["parece"], why: "parecer: él / ella → parece." }
    ]
  },
  6: {
    goals: ["Use more reflexive and irregular verbs", "Say before and after with antes de and después de", "Agree with yo también and yo tampoco"],
    grammar: [
      { t: "More reflexive and irregular verbs", body: `
        <div class="tbl-wrap"><table><tr><th></th><th>vestirse (e → i)</th><th>despertarse (e → ie)</th><th>dormir (o → ue)</th></tr>
        <tr><td>yo</td><td>[[me visto]]</td><td>[[me despierto]]</td><td>[[duermo]]</td></tr>
        <tr><td>tú</td><td>[[te vistes]]</td><td>[[te despiertas]]</td><td>[[duermes]]</td></tr>
        <tr><td>él / ella</td><td>[[se viste]]</td><td>[[se despierta]]</td><td>[[duerme]]</td></tr>
        <tr><td>nosotros/as</td><td>[[nos vestimos]]</td><td>[[nos despertamos]]</td><td>[[dormimos]]</td></tr>
        <tr><td>vosotros/as</td><td>[[os vestís]]</td><td>[[os despertáis]]</td><td>[[dormís]]</td></tr>
        <tr><td>ellos / ellas</td><td>[[se visten]]</td><td>[[se despiertan]]</td><td>[[duermen]]</td></tr></table></div>
        <p>Other stem-changing verbs: [[pedir → pido]], [[jugar → juego]], [[preferir → prefiero]], [[empezar → empiezo]]. The vowel changes in every form except nosotros and vosotros.</p>` },
      { t: "antes de and después de", body: `
        <p>[[antes de]] + infinitive = before ...-ing · [[después de]] + infinitive = after ...-ing</p>
        <p>[[Antes de desayunar, me ducho.]] [[Después de comer, descanso un poco.]]</p>
        <p>[[primero]], [[luego]] / [[después]], [[por último]] put actions in order.</p>` },
      { t: "Double negation and agreeing", body: `
        <p>[[nunca]] can go before or after the verb. After the verb you need [[no]] before it: [[Nunca desayuno.]] = [[No desayuno nunca.]]</p>
        <p>[[Yo también.]] = Me too (agree with a positive). · [[Yo tampoco.]] = Me neither (agree with a negative).</p>
        <p>[[Me levanto a las siete.]] → [[Yo también.]] · [[No me levanto temprano.]] → [[Yo tampoco.]]</p>` },
      { t: "The most: el / la más", body: `
        <p>[[Mi día más largo es el lunes.]] · [[El sábado es el día más divertido.]]</p>
        <p>[[Lo que más me gusta de la mañana es el café.]] = What I like most about the morning is coffee.</p>` }
    ],
    vocab: [
      { g: "Grooming and beauty", items: [["lavarse los dientes","to brush your teeth"],["peinarse","to comb your hair"],["afeitarse","to shave"],["maquillarse","to put on make-up"],["ponerse perfume","to put on perfume"],["ir a la peluquería","to go to the hairdresser"],["planchar la ropa","to iron clothes"]] },
      { g: "Habits and character", items: [["vago / vaga","lazy"],["ambicioso / ambiciosa","ambitious"],["idealista","idealistic"],["sano / sana","healthy"],["deportista","sporty"]] }
    ],
    phrases: [["Antes de desayunar, me ducho.","Before having breakfast, I take a shower."],["Nunca me acuesto antes de las once.","I never go to bed before eleven."],["Yo duermo ocho horas.","I sleep eight hours."]],
    ex: [
      { type: "mc", q: "Choose: [[No desayuno ___ en casa.]] (never)", opts: ["nunca", "siempre", "a veces", "todos"], a: 0, why: "no + verb + nunca." },
      { type: "mc", q: "Choose: [[___ de comer, me lavo las manos.]] (Before)", opts: ["Antes", "Después", "Luego", "Primero"], a: 0, why: "antes de + infinitive." },
      { type: "mc", q: "Choose: [[Mi hermano ___ ocho horas.]] (dormir)", opts: ["duerme", "dormo", "dorme", "duermo"], a: 0, why: "o → ue: él duerme." },
      { type: "fill", q: "[[Yo me ___ rápido por la mañana.]] (vestirse: I get dressed)", a: ["visto"], why: "vestirse, yo → me visto." }
    ]
  },
  7: {
    goals: ["Say how things are cooked", "Talk about customs with se", "Use bar and restaurant expressions"],
    grammar: [
      { t: "Impersonal se: what people do", body: `
        <p>[[se]] + a third-person verb says what people in general do.</p>
        <p>[[En España se come tarde.]] = In Spain people eat late.</p>
        <p>[[En Perú se come mucho ceviche.]] · [[Aquí se cena a las nueve.]]</p>
        <p class="tip">With a plural thing, the verb is plural: [[Se comen muchas verduras.]]</p>` },
      { t: "In the bar", body: `
        <ul><li>[[¿Qué le pongo?]] = What can I get you? (to usted)</li>
        <li>[[Un bocadillo de jamón y una cerveza.]]</li>
        <li>[[Para llevar.]] = To take away. · [[Para tomar aquí.]] = To have here.</li>
        <li>[[¿Algo más?]] = Anything else? · [[Nada más, gracias.]] = Nothing else, thanks.</li></ul>` }
    ],
    vocab: [
      { g: "More food", items: [["el chorizo","spicy sausage"],["el atún","tuna"],["los calamares","squid"],["la lechuga","lettuce"],["la mayonesa","mayonnaise"],["las lentejas","lentils"],["el guacamole","guacamole"]] },
      { g: "How it is cooked", items: [["a la plancha","grilled"],["frito / frita","fried"],["cocido / cocida","boiled"],["al horno","baked"],["crudo / cruda","raw"]] },
      { g: "At the table", items: [["el vaso","glass"],["el plato","plate"],["el tenedor","fork"],["el cuchillo","knife"],["la cuchara","spoon"],["la servilleta","napkin"]] }
    ],
    phrases: [["En España se cena tarde.","In Spain people have dinner late."],["Un bocadillo de jamón, para llevar.","A ham sandwich, to take away."],["El pescado a la plancha, por favor.","The grilled fish, please."]],
    ex: [
      { type: "mc", q: "Choose: [[En España ___ cena tarde.]]", opts: ["se", "me", "te", "lo"], a: 0, why: "se + verb says what people in general do." },
      { type: "mc", q: "What does [[a la plancha]] mean?", opts: ["grilled", "fried", "boiled", "raw"], a: 0, why: "a la plancha = cooked on a hot plate, grilled." },
      { type: "mc", q: "You want your sandwich to take away. You say:", opts: ["Para llevar.", "Para tomar.", "Para aquí.", "Para mí."], a: 0, why: "para llevar = to take away." },
      { type: "fill", q: "[[Quiero el pescado ___ plancha.]] (a la)", a: ["a la"], why: "a la plancha." }
    ]
  },
  8: {
    goals: ["Say what you like most and least about a place", "Use me gustaría to say what you would like", "Talk about quality of life in a city"],
    grammar: [
      { t: "ser, estar and hay in descriptions", body: `
        <p>[[Mi barrio es tranquilo.]] (what it is like) · [[Mi barrio está en el norte.]] (where it is) · [[En mi barrio hay un parque.]] (what exists there)</p>
        <p>[[Hay]] and [[es]] can both start a description, but [[hay]] lists things and [[es]] describes the whole place.</p>` },
      { t: "What you like most and least", body: `
        <ul><li>[[Lo que más me gusta de mi barrio es el parque.]] = What I like most about my neighbourhood is the park.</li>
        <li>[[Lo que menos me gusta es el ruido.]] = What I like least is the noise.</li>
        <li>[[Me gustaría vivir en Sevilla.]] = I would like to live in Seville.</li>
        <li>[[Lo más importante es la seguridad.]] = The most important thing is safety.</li></ul>
        <p class="tip">Use [[me gustaría]] + infinitive as a fixed phrase for a wish.</p>` }
    ],
    vocab: [
      { g: "Services and places", items: [["el cajero automático","cash machine"],["la oficina de correos","post office"],["la zona peatonal","pedestrian zone"],["la parada de autobús","bus stop"],["el alquiler","rent"],["la oferta cultural","cultural activities"]] },
      { g: "Describing a neighbourhood", items: [["estrecho / estrecha","narrow"],["céntrico / céntrica","central"],["caro / cara","expensive"],["barato / barata","cheap"],["ruidoso / ruidosa","noisy"]] },
      { g: "Quality of life", items: [["la vivienda","housing"],["la asistencia sanitaria","health care"],["la educación","education"],["el medio ambiente","environment"],["la seguridad","safety"],["el transporte","transport"]] }
    ],
    phrases: [["Lo que más me gusta es el parque.","What I like most is the park."],["Me gustaría vivir en Sevilla.","I would like to live in Seville."],["Perdone, ¿sabe si hay un cajero por aquí?","Excuse me, do you know if there is a cash machine around here?"]],
    ex: [
      { type: "mc", q: "Choose: [[Me ___ vivir en Sevilla.]] (I would like)", opts: ["gustaría", "gusta", "gustan", "gustaré"], a: 0, why: "me gustaría + infinitive." },
      { type: "mc", q: "Choose: [[Mi barrio ___ tranquilo.]]", opts: ["es", "hay", "están", "tiene"], a: 0, why: "ser describes what a place is like." },
      { type: "fill", q: "[[Lo que más me ___ de mi barrio es el parque.]]", a: ["gusta"], why: "lo que más me gusta + singular noun." }
    ]
  },
  9: {
    goals: ["Say what you have to do with tener que", "Use parecer for first impressions", "Use ni in negative sentences"],
    grammar: [
      { t: "tener que + infinitive", body: `
        <p>[[tengo que]], [[tienes que]], [[tiene que]], [[tenemos que]], [[tenéis que]], [[tienen que]] + infinitive</p>
        <p>[[Tengo que estudiar hoy.]] [[Mi compañero de piso tiene que limpiar la cocina.]]</p>` },
      { t: "Adjectives with one form and first impressions", body: `
        <p>Adjectives ending in -e, -ista or -al have one form for men and women: [[responsable]], [[paciente]], [[egoísta]], [[optimista]].</p>
        <p>[[parecer]] gives a first impression: [[Parece simpático.]] [[Me parece una persona muy responsable.]]</p>
        <p>Add [[im-]] or [[in-]] to say the opposite: [[puntual → impuntual]], [[paciente → impaciente]].</p>` },
      { t: "ni: neither, nor", body: `
        <p>[[No sé conducir ni nadar.]] = I can't drive or swim.</p>
        <p>[[Ni mi hermano ni yo hablamos francés.]] = Neither my brother nor I speak French.</p>
        <p>[[No tengo coche ni moto.]] = I don't have a car or a motorbike.</p>` },
      { t: "Finding people: Busca a alguien que...", body: `
        <p>[[Busca a alguien que haya viajado a Asia.]] is a classroom game. Ask your classmates: [[¿Has viajado a Asia?]] [[¿Has probado la paella?]]</p>
        <p>Write down who says [[sí]], then report: [[Marta ha viajado a Asia.]]</p>` }
    ],
    vocab: [
      { g: "Qualities and flaws", items: [["la cualidad","quality"],["el defecto","flaw"],["egoísta","selfish"],["impuntual","not punctual"],["impaciente","impatient"],["optimista","optimistic"],["ordenado / ordenada","tidy"],["desordenado / desordenada","untidy"]] },
      { g: "At home with a flatmate", items: [["el compañero de piso / la compañera de piso","flatmate"],["limpiar","to clean"],["sacar la basura","to take out the rubbish"],["hacer la compra","to do the shopping"],["lavar los platos","to wash the dishes"]] },
      { g: "Work and the countryside", items: [["el agricultor / la agricultora","farmer"],["el maestro / la maestra","teacher"],["el comerciante / la comerciante","shopkeeper"],["el pueblo","village"],["el campo","countryside"],["el valle","valley"]] }
    ],
    phrases: [["Tengo que limpiar la cocina.","I have to clean the kitchen."],["Mi compañero parece muy responsable.","My flatmate seems very responsible."],["No sé conducir ni nadar.","I can't drive or swim."]],
    ex: [
      { type: "mc", q: "Choose: [[Tengo ___ estudiar hoy.]]", opts: ["que", "de", "a", "por"], a: 0, why: "tener que + infinitive." },
      { type: "mc", q: "Which adjective has the same form for men and women?", opts: ["responsable", "trabajador", "simpático", "divertido"], a: 0, why: "Adjectives in -e do not change." },
      { type: "mc", q: "Choose: [[Mi compañero ___ muy simpático.]] (seems)", opts: ["parece", "parecen", "es parecer", "parezco"], a: 0, why: "parecer: él → parece." },
      { type: "fill", q: "[[No sé conducir ___ nadar.]] (nor)", a: ["ni"], why: "ni = nor, or (in negative sentences)." }
    ]
  }
};
