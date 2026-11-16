const UNITS = [
{
  id: 0, es: "En el aula", en: "In the classroom",
  goals: ["Say hello and goodbye", "Say your name and ask someone's name", "Spell words with the Spanish alphabet", "Ask for help in class", "Count from 1 to 10"],
  grammar: [
    { t: "Greetings and goodbyes", body: `
      <div class="tbl-wrap"><table><tr><th>Spanish</th><th>English</th></tr>
      <tr><td>[[Hola]]</td><td>Hello</td></tr>
      <tr><td>[[Buenos días]]</td><td>Good morning</td></tr>
      <tr><td>[[Buenas tardes]]</td><td>Good afternoon</td></tr>
      <tr><td>[[Buenas noches]]</td><td>Good evening / good night</td></tr>
      <tr><td>[[¿Qué tal?]]</td><td>How are you? (informal)</td></tr>
      <tr><td>[[Adiós]] · [[Hasta luego]] · [[Hasta mañana]]</td><td>Goodbye · See you later · See you tomorrow</td></tr></table></div>
      <p class="tip">Spanish questions and exclamations start with an upside-down mark: [[¿Cómo estás?]] [[¡Hola!]]</p>` },
    { t: "Say your name", body: `
      <p>[[Me llamo Eddie.]] = My name is Eddie. (literally: I call myself Eddie)</p>
      <p>[[¿Cómo te llamas?]] = What is your name? (to a friend or classmate)</p>
      <p>[[¿Y tú?]] = And you?</p>
      <p class="tip">Spanish pronouns are often dropped. You say [[Me llamo Ana]], not "Yo me llamo Ana", unless you want to stress "I".</p>` },
    { t: "The Spanish alphabet", body: `
      <p>Spanish has 27 letters. Say each letter name out loud:</p>
      <div class="tbl-wrap"><table>
      <tr><td>[[a]] a</td><td>[[b]] be</td><td>[[c]] ce</td><td>[[d]] de</td><td>[[e]] e</td><td>[[f]] efe</td><td>[[g]] ge</td></tr>
      <tr><td>[[h]] hache</td><td>[[i]] i</td><td>[[j]] jota</td><td>[[k]] ka</td><td>[[l]] ele</td><td>[[m]] eme</td><td>[[n]] ene</td></tr>
      <tr><td>[[ñ]] eñe</td><td>[[o]] o</td><td>[[p]] pe</td><td>[[q]] cu</td><td>[[r]] erre</td><td>[[s]] ese</td><td>[[t]] te</td></tr>
      <tr><td>[[u]] u</td><td>[[v]] uve</td><td>[[w]] uve doble</td><td>[[x]] equis</td><td>[[y]] ye</td><td>[[z]] zeta</td><td></td></tr></table></div>
      <p class="tip">The letter [[h]] is silent: [[hola]] sounds like "ola". The [[j]] is a strong breathy sound, like a harder English "h".</p>` },
    { t: "Ask for help in class", body: `
      <ul>
      <li>[[¿Cómo se dice "book" en español?]] = How do you say "book" in Spanish?</li>
      <li>[[¿Qué significa "mesa"?]] = What does "mesa" mean?</li>
      <li>[[¿Cómo se escribe?]] = How do you spell it?</li>
      <li>[[Más despacio, por favor.]] = More slowly, please.</li>
      <li>[[No entiendo.]] = I don't understand.</li>
      <li>[[Otra vez, por favor.]] = Again, please.</li></ul>` }
  ],
  vocab: [
    { g: "Numbers 1 to 10", items: [["uno","one"],["dos","two"],["tres","three"],["cuatro","four"],["cinco","five"],["seis","six"],["siete","seven"],["ocho","eight"],["nueve","nine"],["diez","ten"]] },
    { g: "Things in the classroom", items: [["la mesa","table"],["la silla","chair"],["el libro","book"],["el cuaderno","notebook"],["el bolígrafo","pen"],["la pizarra","board"],["la puerta","door"],["la ventana","window"],["el ordenador","computer"],["el profesor / la profesora","teacher"]] }
  ],
  phrases: [["Buenos días, profesora.","Good morning, teacher."],["Me llamo Eddie. ¿Y tú?","My name is Eddie. And you?"],["Mucho gusto.","Nice to meet you."],["Gracias.","Thank you."],["De nada.","You're welcome."],["Perdón.","Sorry / excuse me."],["Hasta mañana.","See you tomorrow."]],
  ex: [
    { type: "mc", q: "You meet your teacher at 9 a.m. What do you say?", opts: ["Buenas noches", "Buenos días", "Hasta luego", "Adiós"], a: 1, why: "Buenos días is used in the morning." },
    { type: "mc", q: "What does [[¿Cómo te llamas?]] ask?", opts: ["How are you?", "Where are you from?", "What is your name?", "How old are you?"], a: 2, why: "Llamarse is the verb for names." },
    { type: "mc", q: "How do you say 'more slowly, please'?", opts: ["Otra vez, por favor", "Más despacio, por favor", "No entiendo", "De nada"], a: 1, why: "Despacio means slowly." },
    { type: "mc", q: "What is the name of the letter [[h]]?", opts: ["hache", "jota", "ache", "ge"], a: 0, why: "h is hache, and it is silent." },
    { type: "mc", q: "Which number is [[siete]]?", opts: ["6", "7", "8", "9"], a: 1, why: "uno, dos, tres, cuatro, cinco, seis, siete." },
    { type: "fill", q: "[[Me ___ Eddie.]] (My name is Eddie.)", a: ["llamo"], why: "Me llamo = I am called." },
    { type: "fill", q: "[[Buenas ___.]] (said when you leave in the evening)", a: ["noches"], why: "Buenas noches is used after dark." },
    { type: "fill", q: "[[Cuatro y tres son ___.]] (4 + 3 = ?)", a: ["siete"], why: "4 + 3 = 7." }
  ]
},
{
  id: 1, es: "Nosotros y nosotras", en: "Us: who we are",
  goals: ["Say your job and nationality", "Give personal information: age, phone, email", "Use the verbs ser and tener", "Use subject pronouns: yo, tú, él, ella..."],
  grammar: [
    { t: "Subject pronouns", body: `
      <div class="tbl-wrap"><table><tr><th>Spanish</th><th>English</th></tr>
      <tr><td>[[yo]]</td><td>I</td></tr><tr><td>[[tú]] · [[usted]]</td><td>you (informal) · you (formal)</td></tr>
      <tr><td>[[él]] · [[ella]]</td><td>he · she</td></tr>
      <tr><td>[[nosotros]] / [[nosotras]]</td><td>we (masculine or mixed / feminine)</td></tr>
      <tr><td>[[vosotros]] / [[vosotras]] · [[ustedes]]</td><td>you all (Spain, informal) · you all (Latin America, and formal in Spain)</td></tr>
      <tr><td>[[ellos]] / [[ellas]]</td><td>they</td></tr></table></div>
      <p class="tip">Use [[tú]] with friends and classmates, [[usted]] with older people or in formal situations. In some countries, such as Argentina, people also say [[vos]].</p>` },
    { t: "The verb ser (to be)", body: `
      <div class="tbl-wrap"><table><tr><th>Person</th><th>Form</th></tr>
      <tr><td>[[yo]]</td><td>[[soy]]</td></tr><tr><td>[[tú]]</td><td>[[eres]]</td></tr><tr><td>[[él / ella / usted]]</td><td>[[es]]</td></tr>
      <tr><td>[[nosotros/as]]</td><td>[[somos]]</td></tr><tr><td>[[vosotros/as]]</td><td>[[sois]]</td></tr><tr><td>[[ellos / ellas / ustedes]]</td><td>[[son]]</td></tr></table></div>
      <p>Use [[ser]] for identity, job and nationality: [[Soy vietnamita.]] [[Ella es guía turística.]]</p>` },
    { t: "Nationalities: masculine and feminine", body: `
      <ul>
      <li>Ends in -o: change to -a. [[argentino → argentina]], [[mexicano → mexicana]]</li>
      <li>Ends in a consonant: add -a. [[español → española]], [[japonés → japonesa]], [[francés → francesa]]</li>
      <li>Ends in -a, -e or -ista: no change. [[vietnamita]], [[estadounidense]]</li></ul>
      <p>Plural: add -s or -es. [[Somos vietnamitas.]] [[Son españoles.]]</p>
      <p class="tip">Nationalities are written with a small letter in Spanish: [[soy vietnamita]].</p>` },
    { t: "Age and contact details with tener", body: `
      <p>[[¿Cuántos años tienes?]] → [[Tengo veinticinco años.]] (Spanish says "I have 25 years".)</p>
      <p>[[tengo]], [[tienes]], [[tiene]], [[tenemos]], [[tenéis]], [[tienen]]</p>
      <p>[[¿Cuál es tu teléfono?]] [[¿Cuál es tu correo electrónico?]] [[¿De dónde eres?]] [[¿A qué te dedicas?]]</p>` }
  ],
  vocab: [
    { g: "Jobs", items: [["el profesor / la profesora","teacher"],["el estudiante / la estudiante","student"],["el médico / la médica","doctor"],["el camarero / la camarera","waiter"],["el ingeniero / la ingeniera","engineer"],["el guía turístico / la guía turística","tour guide"],["el abogado / la abogada","lawyer"],["el cocinero / la cocinera","cook"]] },
    { g: "Countries and nationalities", items: [["España / español","Spain / Spanish"],["México / mexicano","Mexico / Mexican"],["Argentina / argentino","Argentina / Argentine"],["Colombia / colombiano","Colombia / Colombian"],["Vietnam / vietnamita","Vietnam / Vietnamese"],["Japón / japonés","Japan / Japanese"],["Francia / francés","France / French"],["Estados Unidos / estadounidense","United States / American"]] },
    { g: "Personal information", items: [["el nombre","first name"],["el apellido","surname"],["la edad","age"],["el teléfono","phone number"],["el correo electrónico","email"],["la nacionalidad","nationality"],["la profesión","profession"],["el año","year"]] }
  ],
  phrases: [["Soy vietnamita y vivo en Hanói.","I am Vietnamese and I live in Hanoi."],["¿De dónde eres?","Where are you from?"],["Soy de Vietnam.","I am from Vietnam."],["¿A qué te dedicas?","What do you do for work?"],["Soy guía turístico.","I am a tour guide."],["Tengo veintiocho años.","I am 28 years old."]],
  ex: [
    { type: "mc", q: "Choose the correct form: [[Yo ___ estudiante.]]", opts: ["eres", "es", "soy", "son"], a: 2, why: "yo → soy." },
    { type: "mc", q: "Choose the correct form: [[Nosotros ___ de México.]]", opts: ["somos", "son", "sois", "es"], a: 0, why: "nosotros → somos." },
    { type: "mc", q: "Maria is from Japan. [[María es ___.]]", opts: ["japonés", "japonesa", "japoneso", "japón"], a: 1, why: "A woman: japonesa." },
    { type: "mc", q: "How do you ask 'How old are you?'", opts: ["¿Cómo te llamas?", "¿De dónde eres?", "¿Cuántos años tienes?", "¿A qué te dedicas?"], a: 2, why: "Spanish uses tener for age." },
    { type: "mc", q: "What does [[camarero]] mean?", opts: ["doctor", "waiter", "teacher", "lawyer"], a: 1, why: "El camarero works in a bar or restaurant." },
    { type: "fill", q: "[[Ella ___ ingeniera.]] (She is an engineer.)", a: ["es"], why: "ella → es." },
    { type: "fill", q: "[[Yo ___ veinte años.]] (I am 20 years old.)", a: ["tengo"], why: "yo → tengo." },
    { type: "fill", q: "[[Ustedes ___ colombianos.]] (You all are Colombian.)", a: ["son"], why: "ustedes → son." }
  ]
},
{
  id: 2, es: "Quiero aprender español", en: "I want to learn Spanish",
  goals: ["Say what you want to do and why", "Talk about hobbies and free time", "Use masculine, feminine and plural nouns", "Conjugate regular verbs in the present", "Use the verb querer"],
  grammar: [
    { t: "Masculine, feminine and articles", body: `
      <div class="tbl-wrap"><table><tr><th></th><th>the</th><th>a / an</th></tr>
      <tr><td>masculine singular</td><td>[[el libro]]</td><td>[[un libro]]</td></tr>
      <tr><td>feminine singular</td><td>[[la casa]]</td><td>[[una casa]]</td></tr>
      <tr><td>masculine plural</td><td>[[los libros]]</td><td>[[unos libros]]</td></tr>
      <tr><td>feminine plural</td><td>[[las casas]]</td><td>[[unas casas]]</td></tr></table></div>
      <ul><li>Most nouns ending in -o are masculine, and most ending in -a are feminine.</li>
      <li>Nouns ending in -ción or -dad are feminine: [[la canción]], [[la ciudad]].</li>
      <li>Some are exceptions: [[el día]], [[el mapa]], [[el problema]], [[la mano]].</li></ul>
      <p>Plural: after a vowel add -s ([[libro → libros]]). After a consonant add -es ([[ciudad → ciudades]]).</p>` },
    { t: "Regular verbs in the present", body: `
      <div class="tbl-wrap"><table><tr><th></th><th>-ar: hablar</th><th>-er: comer</th><th>-ir: vivir</th></tr>
      <tr><td>yo</td><td>[[hablo]]</td><td>[[como]]</td><td>[[vivo]]</td></tr>
      <tr><td>tú</td><td>[[hablas]]</td><td>[[comes]]</td><td>[[vives]]</td></tr>
      <tr><td>él / ella</td><td>[[habla]]</td><td>[[come]]</td><td>[[vive]]</td></tr>
      <tr><td>nosotros/as</td><td>[[hablamos]]</td><td>[[comemos]]</td><td>[[vivimos]]</td></tr>
      <tr><td>vosotros/as</td><td>[[habláis]]</td><td>[[coméis]]</td><td>[[vivís]]</td></tr>
      <tr><td>ellos / ellas</td><td>[[hablan]]</td><td>[[comen]]</td><td>[[viven]]</td></tr></table></div>
      <p class="tip">Remove -ar, -er or -ir to get the stem, then add the ending that matches the person.</p>` },
    { t: "Querer + infinitive", body: `
      <p>[[quiero]], [[quieres]], [[quiere]], [[queremos]], [[queréis]], [[quieren]]</p>
      <p>The vowel changes e → ie in every form except nosotros and vosotros.</p>
      <p>[[Quiero aprender español.]] = I want to learn Spanish.</p>
      <p>[[¿Quieres ver una película?]] = Do you want to watch a film?</p>` },
    { t: "Why? Because / to", body: `
      <ul><li>[[¿Por qué estudias español?]] = Why do you study Spanish?</li>
      <li>[[Porque me gusta la cultura hispana.]] = Because I like Hispanic culture.</li>
      <li>[[Para viajar a España.]] = In order to travel to Spain.</li></ul>
      <p class="tip">[[por qué]] (two words) asks the question. [[porque]] (one word) gives the reason. [[para]] + infinitive gives the purpose.</p>` }
  ],
  vocab: [
    { g: "Verbs for learning", items: [["aprender","to learn"],["estudiar","to study"],["practicar","to practise"],["hablar","to speak"],["escribir","to write"],["leer","to read"],["escuchar","to listen"],["entender","to understand"]] },
    { g: "Free time", items: [["ver una película","to watch a film"],["escuchar música","to listen to music"],["leer libros","to read books"],["viajar","to travel"],["cocinar","to cook"],["bailar","to dance"],["salir con amigos","to go out with friends"],["el cine","cinema"]] },
    { g: "Languages", items: [["el inglés","English"],["el español","Spanish"],["el francés","French"],["el japonés","Japanese"],["el vietnamita","Vietnamese"],["el chino","Chinese"]] }
  ],
  phrases: [["Quiero aprender español para viajar.","I want to learn Spanish to travel."],["Estudio español porque me gusta.","I study Spanish because I like it."],["¿Hablas inglés?","Do you speak English?"],["Hablo un poco de español.","I speak a little Spanish."],["Practico todos los días.","I practise every day."]],
  ex: [
    { type: "mc", q: "Which is feminine? ", opts: ["el libro", "la ciudad", "el día", "el mapa"], a: 1, why: "Words ending in -dad are feminine." },
    { type: "mc", q: "Plural of [[la ciudad]]:", opts: ["las ciudads", "las ciudades", "los ciudades", "las ciudade"], a: 1, why: "After a consonant, add -es." },
    { type: "mc", q: "Choose the correct form: [[Ella ___ español en la universidad.]]", opts: ["estudio", "estudias", "estudia", "estudian"], a: 2, why: "ella → estudia." },
    { type: "mc", q: "Choose the correct form: [[Nosotros ___ en Hanói.]]", opts: ["vivo", "viven", "vivimos", "vives"], a: 2, why: "nosotros + -ir verb → -imos." },
    { type: "mc", q: "'Why do you study Spanish?' is:", opts: ["¿Porque estudias español?", "¿Por qué estudias español?", "¿Para qué estudias?", "¿Qué estudias?"], a: 1, why: "Two words with a question mark: por qué." },
    { type: "fill", q: "[[Yo ___ aprender español.]] (I want to learn Spanish.)", a: ["quiero"], why: "yo → quiero." },
    { type: "fill", q: "[[Ellos ___ viajar a Colombia.]] (They want to travel to Colombia.)", a: ["quieren"], why: "ellos → quieren." },
    { type: "fill", q: "[[Estudio español ___ me gusta la música latina.]] (...because I like Latin music.)", a: ["porque"], why: "One word, to give a reason." }
  ]
},
{
  id: 3, es: "¿Dónde está Santiago?", en: "Where is Santiago?",
  goals: ["Describe places and say what exists there", "Say where things are", "Talk about the weather and the seasons", "Use hay, está / están, muy and mucho", "Ask with qué, cuál, cuántos, dónde, cómo"],
  grammar: [
    { t: "hay or está / están?", body: `
      <p>[[hay]] = there is / there are. It introduces something new, usually with [[un]], [[una]], [[unos]], [[unas]], numbers or no article.</p>
      <p>[[Hay un río en la ciudad.]] [[Hay muchas playas.]]</p>
      <p>[[está]] / [[están]] = is / are located. It talks about something we already know, usually with [[el]], [[la]], [[los]], [[las]], or a name.</p>
      <p>[[El río está en el centro.]] [[Las playas están en el sur.]] [[Santiago está en Chile.]]</p>
      <p class="tip">Never say "hay el río". If there is a "the", use está.</p>` },
    { t: "muy and mucho", body: `
      <ul><li>[[muy]] + adjective or adverb: [[muy grande]], [[muy lejos]]. It never changes.</li>
      <li>[[mucho / mucha / muchos / muchas]] + noun, matching it: [[mucho calor]], [[mucha gente]], [[muchos turistas]], [[muchas montañas]].</li>
      <li>After a verb, [[mucho]] does not change: [[Llueve mucho.]] [[Me gusta mucho.]]</li></ul>` },
    { t: "Question words", body: `
      <div class="tbl-wrap"><table><tr><th>Spanish</th><th>English</th><th>Example</th></tr>
      <tr><td>[[qué]]</td><td>what</td><td>[[¿Qué hay en tu ciudad?]]</td></tr>
      <tr><td>[[cuál / cuáles]]</td><td>which</td><td>[[¿Cuál es la capital?]]</td></tr>
      <tr><td>[[cuántos / cuántas]]</td><td>how many</td><td>[[¿Cuántos habitantes tiene?]]</td></tr>
      <tr><td>[[dónde]]</td><td>where</td><td>[[¿Dónde está Lima?]]</td></tr>
      <tr><td>[[cómo]]</td><td>how, what is it like</td><td>[[¿Cómo es el clima?]]</td></tr></table></div>
      <p class="tip">Question words always carry an accent mark.</p>` },
    { t: "Weather", body: `
      <p>Use [[hace]] with nouns: [[Hace calor.]] [[Hace frío.]] [[Hace sol.]] [[Hace viento.]]</p>
      <p>Use one-word verbs for rain and snow: [[Llueve.]] [[Nieva.]]</p>
      <p>Use [[está]] with: [[Está nublado.]] [[Está despejado.]]</p>
      <p>[[¿Qué tiempo hace en Hanói en verano?]] → [[Hace mucho calor y llueve mucho.]]</p>` }
  ],
  vocab: [
    { g: "Weather", items: [["hace calor","it is hot"],["hace frío","it is cold"],["hace sol","it is sunny"],["hace viento","it is windy"],["llueve","it rains"],["nieva","it snows"],["está nublado","it is cloudy"],["el clima","climate"]] },
    { g: "Seasons and directions", items: [["la primavera","spring"],["el verano","summer"],["el otoño","autumn"],["el invierno","winter"],["el norte","north"],["el sur","south"],["el este","east"],["el oeste","west"]] },
    { g: "Places and geography", items: [["la capital","capital city"],["el país","country"],["la ciudad","city"],["el río","river"],["la montaña","mountain"],["el mar","sea"],["la playa","beach"],["la isla","island"],["el desierto","desert"],["los habitantes","inhabitants"]] }
  ],
  phrases: [["¿Dónde está Santiago?","Where is Santiago?"],["Santiago es la capital de Chile.","Santiago is the capital of Chile."],["En Vietnam hay muchas montañas.","In Vietnam there are many mountains."],["Hanói está en el norte.","Hanoi is in the north."],["En invierno hace frío.","In winter it is cold."]],
  ex: [
    { type: "mc", q: "Choose: [[___ un museo en mi barrio.]]", opts: ["Hay", "Está", "Están", "Son"], a: 0, why: "New information with 'un' → hay." },
    { type: "mc", q: "Choose: [[El museo ___ en el centro.]]", opts: ["hay", "está", "están", "es"], a: 1, why: "'El museo' is known, so use está." },
    { type: "mc", q: "Choose: [[Las montañas ___ en el oeste.]]", opts: ["hay", "está", "están", "es"], a: 2, why: "Plural: están." },
    { type: "mc", q: "Choose: [[Hay ___ turistas en verano.]]", opts: ["mucho", "mucha", "muchos", "muy"], a: 2, why: "turistas is masculine plural." },
    { type: "mc", q: "'It is very cold' is:", opts: ["Hace mucho frío.", "Es mucho frío.", "Hace muy frío.", "Está frío."], a: 0, why: "Frío here is a noun, so mucho." },
    { type: "fill", q: "[[¿___ está la playa?]] (Where is the beach?)", a: ["dónde", "donde"], why: "dónde = where." },
    { type: "fill", q: "[[En invierno ___ frío en Madrid.]] (It is cold.)", a: ["hace"], why: "hace frío." },
    { type: "fill", q: "[[La casa es ___ grande.]] (The house is very big.)", a: ["muy"], why: "muy goes before adjectives." }
  ]
},
{
  id: 4, es: "¿Cuál prefieres?", en: "Which one do you prefer?",
  goals: ["Name clothes and colours", "Buy things in a shop and ask prices", "Point to things with este, esta, estos, estas", "Count from 100 upward", "Say what you prefer"],
  grammar: [
    { t: "This and these: demonstratives", body: `
      <div class="tbl-wrap"><table><tr><th></th><th>this / these (near)</th><th>that / those (far)</th></tr>
      <tr><td>masculine singular</td><td>[[este]] libro</td><td>[[ese]] libro</td></tr>
      <tr><td>feminine singular</td><td>[[esta]] camisa</td><td>[[esa]] camisa</td></tr>
      <tr><td>masculine plural</td><td>[[estos]] zapatos</td><td>[[esos]] zapatos</td></tr>
      <tr><td>feminine plural</td><td>[[estas]] botas</td><td>[[esas]] botas</td></tr></table></div>
      <p>[[Esto]] means "this thing" when you do not know the word: [[¿Qué es esto?]]</p>` },
    { t: "Colours and agreement", body: `
      <p>Colours go after the noun and match it: [[una camiseta roja]], [[unos pantalones negros]].</p>
      <p>Colours ending in -o change in four ways: [[rojo, roja, rojos, rojas]]. Colours like [[azul]], [[verde]], [[gris]] only add -es in the plural: [[azules]].</p>
      <p>[[rosa]] and [[naranja]] usually stay the same.</p>
      <p>To avoid repeating the noun: [[¿Cuál prefieres? La azul.]] = Which do you prefer? The blue one. Use [[el, la, los, las]] + adjective.</p>` },
    { t: "Prices and numbers over 100", body: `
      <p>[[¿Cuánto cuesta?]] (one thing) · [[¿Cuánto cuestan?]] (many things)</p>
      <p>[[Cuesta veinte euros.]] [[Cuestan cien mil dongs.]]</p>
      <p>[[100 cien]] · [[200 doscientos]] · [[300 trescientos]] · [[400 cuatrocientos]] · [[500 quinientos]] · [[600 seiscientos]] · [[700 setecientos]] · [[800 ochocientos]] · [[900 novecientos]] · [[1000 mil]]</p>
      <p class="tip">The hundreds change gender: [[doscientas camisetas]], [[doscientos libros]]. [[Cien]] becomes [[ciento]] before another number: [[ciento veinte]].</p>` },
    { t: "Wearing and preferring", body: `
      <p>[[llevar]] = to wear / to carry: [[Llevo una chaqueta negra.]]</p>
      <p>[[preferir]] (e → ie like querer): [[prefiero]], [[prefieres]], [[prefiere]], [[preferimos]], [[preferís]], [[prefieren]]</p>
      <p>[[Prefiero el rojo.]] [[¿Prefieres esta o esa?]]</p>` }
  ],
  vocab: [
    { g: "Clothes", items: [["la camiseta","T-shirt"],["la camisa","shirt"],["los pantalones","trousers"],["la falda","skirt"],["el vestido","dress"],["la chaqueta","jacket"],["el abrigo","coat"],["los zapatos","shoes"],["las botas","boots"],["el bolso","bag"]] },
    { g: "Colours", items: [["rojo","red"],["azul","blue"],["verde","green"],["amarillo","yellow"],["negro","black"],["blanco","white"],["gris","grey"],["marrón","brown"],["rosa","pink"],["naranja","orange"]] },
    { g: "In the shop", items: [["la tienda","shop"],["el precio","price"],["caro / cara","expensive"],["barato / barata","cheap"],["pagar","to pay"],["la talla","size"],["el euro","euro"],["quiero comprar...","I want to buy..."]] }
  ],
  phrases: [["¿Cuánto cuesta esta camiseta?","How much is this T-shirt?"],["Cuesta quince euros.","It costs fifteen euros."],["Me gusta, pero es cara.","I like it, but it is expensive."],["Prefiero la negra.","I prefer the black one."],["Me llevo estos zapatos.","I'll take these shoes."]],
  ex: [
    { type: "mc", q: "Choose: [[___ camisa es azul.]] (this shirt, near me)", opts: ["Este", "Esta", "Estos", "Estas"], a: 1, why: "camisa is feminine singular." },
    { type: "mc", q: "Choose: [[Quiero ___ zapatos negros.]] (these)", opts: ["este", "esta", "estos", "estas"], a: 2, why: "zapatos is masculine plural." },
    { type: "mc", q: "Choose the correct colour: [[Una falda ___.]]", opts: ["rojo", "roja", "rojos", "rojas"], a: 1, why: "falda is feminine singular." },
    { type: "mc", q: "How do you ask the price of several things?", opts: ["¿Cuánto cuesta?", "¿Cuánto cuestan?", "¿Cuántos cuestan?", "¿Cuál cuesta?"], a: 1, why: "Plural things use cuestan." },
    { type: "mc", q: "What number is [[quinientos]]?", opts: ["50", "150", "500", "5000"], a: 2, why: "quinientos = 500." },
    { type: "fill", q: "[[Yo ___ una chaqueta marrón.]] (I am wearing a brown jacket.)", a: ["llevo"], why: "llevar, yo → llevo." },
    { type: "fill", q: "[[¿Cuál ___, el rojo o el verde?]] (Which do you prefer? to a friend)", a: ["prefieres"], why: "tú → prefieres." },
    { type: "fill", q: "[[200 = ___ ]] (type the number in Spanish)", a: ["doscientos"], why: "dos + cientos." }
  ]
},
{
  id: 5, es: "Tus amigos son mis amigos", en: "Your friends are my friends",
  goals: ["Say what you like and love with gustar and encantar", "Agree and disagree about likes", "Talk about your family", "Use possessives: mi, tu, su...", "Describe people: looks and personality"],
  grammar: [
    { t: "gustar: to like", body: `
      <p>Think of gustar as "to be pleasing". The thing you like decides the verb ending.</p>
      <div class="tbl-wrap"><table><tr><th>Who likes</th><th>One thing / an action</th><th>Several things</th></tr>
      <tr><td>[[a mí]]</td><td>[[me gusta el cine]]</td><td>[[me gustan los gatos]]</td></tr>
      <tr><td>[[a ti]]</td><td>[[te gusta bailar]]</td><td>[[te gustan las películas]]</td></tr>
      <tr><td>[[a él / ella / usted]]</td><td>[[le gusta la música]]</td><td>[[le gustan los libros]]</td></tr>
      <tr><td>[[a nosotros/as]]</td><td>[[nos gusta viajar]]</td><td>[[nos gustan los museos]]</td></tr>
      <tr><td>[[a vosotros/as]]</td><td>[[os gusta cocinar]]</td><td>[[os gustan las playas]]</td></tr>
      <tr><td>[[a ellos / ellas / ustedes]]</td><td>[[les gusta el fútbol]]</td><td>[[les gustan los coches]]</td></tr></table></div>
      <p>[[encantar]] works the same and means "to love": [[Me encanta el café.]] [[Me encantan los mercados.]]</p>
      <p>Add [[mucho]] or [[bastante]] for degree, and [[no]] before [[me gusta]] for dislike: [[No me gusta nada el ruido.]]</p>` },
    { t: "Agreeing and disagreeing", body: `
      <div class="tbl-wrap"><table><tr><th>Someone says</th><th>You agree</th><th>You disagree</th></tr>
      <tr><td>[[Me gusta el jazz.]] (positive)</td><td>[[A mí también.]]</td><td>[[A mí no.]]</td></tr>
      <tr><td>[[No me gusta el jazz.]] (negative)</td><td>[[A mí tampoco.]]</td><td>[[A mí sí.]]</td></tr></table></div>
      <p>For other verbs: [[Yo también.]] [[Yo tampoco.]] [[Yo sí.]] [[Yo no.]]</p>` },
    { t: "Possessives", body: `
      <div class="tbl-wrap"><table><tr><th>Owner</th><th>one thing</th><th>several things</th></tr>
      <tr><td>yo</td><td>[[mi hermano]]</td><td>[[mis hermanos]]</td></tr>
      <tr><td>tú</td><td>[[tu hermana]]</td><td>[[tus hermanas]]</td></tr>
      <tr><td>él / ella / usted</td><td>[[su padre]]</td><td>[[sus padres]]</td></tr>
      <tr><td>nosotros/as</td><td>[[nuestro hijo / nuestra hija]]</td><td>[[nuestros / nuestras]]</td></tr>
      <tr><td>vosotros/as</td><td>[[vuestro / vuestra]]</td><td>[[vuestros / vuestras]]</td></tr>
      <tr><td>ellos / ellas / ustedes</td><td>[[su casa]]</td><td>[[sus casas]]</td></tr></table></div>
      <p class="tip">The possessive agrees with the thing owned, not with the owner: [[mis amigas]] even if "I" am a man.</p>` },
    { t: "Describing people", body: `
      <p>With [[ser]]: [[Mi madre es simpática y trabajadora.]]</p>
      <p>With [[tener]] for hair and eyes: [[Tiene el pelo largo y los ojos marrones.]]</p>
      <p>With [[llevar]] for what someone wears: [[Lleva gafas y barba.]]</p>
      <p>Adjectives match the noun: [[un chico simpático]], [[una chica simpática]], [[unos amigos simpáticos]].</p>` }
  ],
  vocab: [
    { g: "Family", items: [["el padre / la madre","father / mother"],["los padres","parents"],["el hermano / la hermana","brother / sister"],["el hijo / la hija","son / daughter"],["el abuelo / la abuela","grandfather / grandmother"],["el tío / la tía","uncle / aunt"],["el primo / la prima","cousin"],["el marido / la mujer","husband / wife"],["el amigo / la amiga","friend"]] },
    { g: "Appearance", items: [["alto / alta","tall"],["bajo / baja","short"],["joven","young"],["rubio / rubia","blond"],["moreno / morena","dark-haired"],["el pelo largo / corto","long / short hair"],["los ojos","eyes"],["las gafas","glasses"],["la barba","beard"]] },
    { g: "Personality", items: [["simpático / simpática","nice, friendly"],["tímido / tímida","shy"],["trabajador / trabajadora","hard-working"],["divertido / divertida","fun"],["serio / seria","serious"],["inteligente","intelligent"],["generoso / generosa","generous"],["bastante","quite"]] }
  ],
  phrases: [["Me encanta la música española.","I love Spanish music."],["¿Tienes hermanos?","Do you have brothers or sisters?"],["Tengo una hermana y dos primos.","I have a sister and two cousins."],["Mi madre es muy simpática.","My mother is very nice."],["Mi amigo es alto y lleva gafas.","My friend is tall and wears glasses."],["A mí también.","Me too."]],
  ex: [
    { type: "mc", q: "Choose: [[Me ___ el cine.]]", opts: ["gusta", "gustan", "gusto", "gustas"], a: 0, why: "One thing → gusta." },
    { type: "mc", q: "Choose: [[Me ___ las películas.]]", opts: ["gusta", "gustan", "gusto", "gustamos"], a: 1, why: "Plural thing → gustan." },
    { type: "mc", q: "Your friend says [[No me gusta el ruido.]] You also dislike noise. You say:", opts: ["A mí también.", "A mí tampoco.", "A mí sí.", "A mí no."], a: 1, why: "Agree with a negative → tampoco." },
    { type: "mc", q: "Choose: [[Tengo dos hermanos. ___ hermanos son simpáticos.]]", opts: ["Mi", "Mis", "Tus", "Su"], a: 1, why: "hermanos is plural, owner is me." },
    { type: "mc", q: "Describe: [[Mi madre es ___.]]", opts: ["simpático", "simpática", "simpáticos", "simpáticas"], a: 1, why: "madre is feminine singular." },
    { type: "fill", q: "[[A ella le ___ bailar.]] (She likes dancing.)", a: ["gusta"], why: "An action uses the singular: gusta." },
    { type: "fill", q: "[[A nosotros ___ gusta viajar.]] (We like travelling.)", a: ["nos"], why: "a nosotros → nos." },
    { type: "fill", q: "[[Mi tía tiene el pelo ___.]] (long)", a: ["largo"], why: "pelo is masculine: largo." }
  ]
}
];
UNITS.push(...MORE_UNITS);
const WR = "https://www.wordreference.com/es/en/translation.asp?spen=";
const TABS = [["grammar", "Grammar"], ["vocabulary", "Vocabulary"], ["phrases", "Phrases"], ["practice", "Practice"]];
const $ = (s, r = document) => r.querySelector(s);
const state = { unit: 1, tab: "grammar", hideEn: false };
let progress = {};
try { progress = JSON.parse(localStorage.getItem("mi-aula-1") || "{}") || {}; } catch (e) { progress = {}; }
function save() { try { localStorage.setItem("mi-aula-1", JSON.stringify(progress)); } catch (e) {} }

function wrapWords(t) { return t.replace(/[\p{L}\p{M}]+/gu, (m) => `<span class="w">${m}</span>`); }
function rich(html) { return html.replace(/\[\[([\s\S]+?)\]\]/g, (_, t) => `<span class="es">${wrapWords(t)}</span>`); }
function es(t) { return `<span class="es">${wrapWords(t)}</span>`; }
function stripAcc(s) { return s.normalize("NFD").replace(/[̀-ͯ]/g, ""); }
function norm(s) { return s.trim().toLowerCase().replace(/\s+/g, " "); }

function unitProg(u) { return progress["u" + u] || (progress["u" + u] = {}); }
function score(u) { const p = unitProg(u); return Object.values(p).filter((x) => x.r === "ok").length; }

function renderNav() {
  $("#units").innerHTML = UNITS.map((u) => `
    <button class="unit-chip" data-u="${u.id}" aria-current="${u.id === state.unit}">
      <small>Unit ${u.id}</small><b>${u.es}</b>
      <span class="score">${score(u.id)} / ${u.ex.length} correct</span>
    </button>`).join("");
}

function renderGrammar(u) {
  return u.grammar.map((g) => `<section class="card"><h3>${g.t}</h3>${rich(g.body)}</section>`).join("");
}
function renderVocab(u) {
  const canSay = "speechSynthesis" in window;
  const tools = `<div class="vocab-tools"><p>Tap a Spanish word to look it up.</p>
    <label><input type="checkbox" id="hideEn" ${state.hideEn ? "checked" : ""}> Hide English (test yourself)</label></div>`;
  const groups = u.vocab.map((g) => `<section class="card"><h3>${g.g}</h3><div class="grid">${g.items.map((it) => `
    <div class="vrow"><div class="l">${es(it[0])}${canSay ? `<button class="say" data-say="${it[0].replace(/"/g, "")}" aria-label="Listen to ${it[0]}">Listen</button>` : ""}</div>
    <span class="en">${it[1]}</span></div>`).join("")}</div></section>`).join("");
  return tools + groups;
}
function renderPhrases(u) {
  return `<section class="card"><h3>Useful sentences</h3><div>${u.phrases.map((p) => `
    <div class="vrow"><div class="l">${es(p[0])}</div><span class="en">${p[1]}</span></div>`).join("")}</div></section>`;
}
function renderPractice(u) {
  const p = unitProg(u.id);
  const qs = u.ex.map((q, i) => {
    const head = `<div class="qn">Question ${i + 1} of ${u.ex.length}</div>`;
    if (q.type === "mc") {
      return `<section class="card q" data-i="${i}">${head}<div class="qt">${rich(q.q)}</div>
        <div class="opts">${q.opts.map((o, k) => `<button class="opt" data-k="${k}">${o}</button>`).join("")}</div>
        <div class="fb" aria-live="polite"></div></section>`;
    }
    const q2 = rich(q.q.replace("___", "\u0001")).replace("\u0001", `<span class="fillrow"><input type="text" id="f${i}" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Your answer"><button class="btn ghost chk">Check</button></span>`);
    return `<section class="card q" data-i="${i}">${head}<div class="qt">${q2}</div><div class="fb" aria-live="polite"></div></section>`;
  }).join("");
  return `<div class="card summary"><div><h3>Practice</h3><p id="scoreLine"></p></div><button class="btn ghost" id="resetU">Start again</button></div>${qs}`;
}
function applyAnswered(u) {
  const p = unitProg(u.id);
  u.ex.forEach((q, i) => {
    const a = p[i]; if (!a) return;
    const card = $(`.q[data-i="${i}"]`); if (!card) return;
    const fb = $(".fb", card);
    if (q.type === "mc") {
      card.querySelectorAll(".opt").forEach((b, k) => { b.disabled = true; if (k === q.a) b.classList.add("ok"); else if (k === a.c) b.classList.add("no"); });
    } else {
      const inp = $("input", card); inp.value = a.c; inp.disabled = true; inp.classList.add(a.r); $(".chk", card).disabled = true;
    }
    fb.className = "fb " + a.r;
    fb.innerHTML = (a.r === "ok" ? "Correct. " : "Not quite. The answer is <b>" + (q.type === "mc" ? q.opts[q.a] : q.a[0]) + "</b>. ") + q.why + (a.n ? " " + a.n : "");
  });
  const line = $("#scoreLine"); if (line) line.textContent = `${score(u.id)} of ${u.ex.length} correct`;
}
function answer(u, i, rec) {
  unitProg(u.id)[i] = rec; save(); applyAnswered(u); renderNav();
}

function render() {
  const u = UNITS[state.unit];
  renderNav();
  if ((state.tab === "listen" || state.tab === "speak") && !SKILLS[u.id]) state.tab = "grammar";
  const body = ({ grammar: renderGrammar, vocabulary: renderVocab, phrases: renderPhrases, listen: renderListen, speak: renderSpeak, practice: renderPractice })[state.tab](u);
  $("#main").innerHTML = `
    <div class="unit-head"><h2>Unit ${u.id}: <span class="es">${wrapWords(u.es)}</span></h2><p class="en">${u.en}</p>
      <ul class="goals">${u.goals.map((g) => `<li>${g}</li>`).join("")}</ul></div>
    <div class="tabs" role="tablist">${tabsFor(u).map((t) => `<button class="tab" role="tab" data-t="${t[0]}" aria-selected="${t[0] === state.tab}">${t[1]}</button>`).join("")}</div>
    <div class="panel ${state.hideEn ? "hide-en" : ""}" id="panel">${body}</div>`;
  if (state.tab === "practice") applyAnswered(u);
  if (state.tab === "listen") applyListen(u);
}
function go(unit, tab) {
  state.unit = unit; state.tab = tab;
  const h = `#unit-${unit}-${tab}`;
  if (location.hash !== h) location.hash = h; else render();
}
function readHash() {
  const m = /^#unit-(\d)-(grammar|vocabulary|phrases|listen|speak|practice)$/.exec(location.hash);
  if (m && UNITS[+m[1]]) { state.unit = +m[1]; state.tab = m[2]; }
  render();
}
window.addEventListener("hashchange", readHash);

document.addEventListener("click", (e) => {
  const t = e.target;
  const chipU = t.closest(".unit-chip"); if (chipU) return go(+chipU.dataset.u, state.tab);
  const tab = t.closest(".tab"); if (tab) return go(state.unit, tab.dataset.t);
  const u = UNITS[state.unit];
  const opt = t.closest(".opt");
  if (opt) { const i = +opt.closest(".q").dataset.i, k = +opt.dataset.k; return answer(u, i, { r: k === u.ex[i].a ? "ok" : "no", c: k }); }
  const chk = t.closest(".chk"); if (chk) return checkFill(u, chk.closest(".q"));
  if (t.closest("#resetU")) { delete progress["u" + u.id]; save(); return render(); }
  const say = t.closest(".say");
  if (say) { try { speechSynthesis.cancel(); const s = new SpeechSynthesisUtterance(say.dataset.say.replace(/ \/ /g, ", ")); s.lang = "es-ES"; speechSynthesis.speak(s); } catch (err) {} return; }
  const en = t.closest(".hide-en .en"); if (en) en.classList.toggle("show");
  const w = t.closest(".w");
  if (w) { const sel = getSelection(); if (sel && sel.isCollapsed) { const r = document.createRange(); r.selectNodeContents(w); sel.removeAllRanges(); sel.addRange(r); } }
});
document.addEventListener("change", (e) => { if (e.target.id === "hideEn") { state.hideEn = e.target.checked; $("#panel").classList.toggle("hide-en", state.hideEn); } });
document.addEventListener("keydown", (e) => { if (e.key === "Enter" && e.target.matches(".fillrow input")) { e.preventDefault(); checkFill(UNITS[state.unit], e.target.closest(".q")); } });

function checkFill(u, card) {
  const i = +card.dataset.i, q = u.ex[i], val = norm($("input", card).value);
  if (!val) return;
  const exact = q.a.map(norm).includes(val);
  const loose = !exact && q.a.map((x) => stripAcc(norm(x))).includes(stripAcc(val));
  answer(u, i, { r: exact || loose ? "ok" : "no", c: $("input", card).value.trim(), n: loose ? "Watch the accent: " + q.a[0] + "." : "" });
}

/* WordReference lookup chip for selected text */
const chip = $("#chip");
function cleanTerm(s) { return s.replace(/[¿?¡!.,;:"“”()]/g, " ").replace(/\s+/g, " ").trim(); }
function placeChip() {
  const sel = getSelection();
  if (!sel || sel.isCollapsed || !sel.rangeCount) return chip.classList.remove("on");
  const node = sel.anchorNode && (sel.anchorNode.nodeType === 1 ? sel.anchorNode : sel.anchorNode.parentElement);
  if (!node || !node.closest("#main") || node.closest("input")) return chip.classList.remove("on");
  const term = cleanTerm(sel.toString());
  if (!term || term.length > 60 || !/\p{L}/u.test(term)) return chip.classList.remove("on");
  chip.href = WR + encodeURIComponent(term);
  chip.textContent = `Look up "${term.length > 28 ? term.slice(0, 28) + "…" : term}" on WordReference`;
  chip.classList.add("on");
  const r = sel.getRangeAt(0).getBoundingClientRect();
  const cw = chip.offsetWidth, ch = chip.offsetHeight;
  let top = r.bottom + 8; if (top + ch > innerHeight - 8) top = Math.max(8, r.top - ch - 8);
  chip.style.top = top + "px";
  chip.style.left = Math.min(Math.max(8, r.left), innerWidth - cw - 8) + "px";
}
document.addEventListener("selectionchange", () => requestAnimationFrame(placeChip));
window.addEventListener("scroll", () => { if (chip.classList.contains("on")) placeChip(); }, { passive: true });
window.addEventListener("resize", placeChip);
chip.addEventListener("pointerdown", (e) => e.preventDefault());
chip.addEventListener("mousedown", (e) => e.preventDefault());

/* Header search box */
const li = $("#lookupInput"), lb = $("#lookupBtn");
li.addEventListener("input", () => { lb.href = WR + encodeURIComponent(cleanTerm(li.value)); });
$("#lookupForm").addEventListener("submit", (e) => { e.preventDefault(); if (cleanTerm(li.value)) { try { lb.click(); } catch (err) {} } });

readHash();
