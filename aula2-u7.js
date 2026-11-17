/* Aula Plus 2 · Unidad 7 «¿Comes de todo?». Original material. Format: see aula2.js. */
A2({
  n: 7, es: "¿Comes de todo?", en: "Do you eat everything?",
  lessons: ["Hábitos y gustos en la comida", "En el mercado: pesos y medidas", "Recetas: se, lo, la, los, las"],
  goals: ["Talk about eating habits and food you like or can't eat", "Use soler + infinitive for habits", "Buy food with weights and measures", "Explain how to make a dish using se: se corta, se añade…", "Avoid repeating nouns with lo, la, los, las"],
  grammar: [
    { c: 1, t: "soler + infinitive", body: `
      <p>[[soler]] (o → ue) means "to usually do": [[Suelo desayunar café con tostadas.]] [[¿Qué sueles cenar?]]</p>
      <div class="tbl-wrap"><table><tr><td>yo [[suelo]]</td><td>tú [[sueles]]</td><td>él / ella [[suele]]</td></tr>
      <tr><td>nosotros [[solemos]]</td><td>vosotros [[soléis]]</td><td>ellos [[suelen]]</td></tr></table></div>
      <p class="tip">It is always followed by an infinitive: [[Los domingos solemos comer en casa de mis abuelos.]]</p>` },
    { c: 1, t: "ser and estar with food", body: `
      <p>[[ser]] = what the food is in general: [[La fruta es sana.]] [[El aguacate es caro.]] [[Este plato es de Perú.]]</p>
      <p>[[estar]] = how it is now, how it tastes: [[La sopa está fría.]] [[¡Este gazpacho está buenísimo!]] [[La carne está salada.]]</p>
      <p class="tip">[[es bueno]] = it is good (for you) · [[está bueno]] = it tastes good.</p>` },
    { c: 1, t: "Linking ideas: y, pero, además", body: `
      <p>[[y]] adds: [[Como verdura y fruta.]] ([[y]] becomes [[e]] before i-/hi-: [[pan e higos]])</p>
      <p>[[pero]] contrasts: [[Me gusta el pescado, pero no como marisco.]]</p>
      <p>[[además]] adds a new argument: [[La comida mediterránea es muy rica. Además, es sana.]]</p>
      <p>Diets: [[Soy vegetariano.]] [[No como carne.]] [[Soy alérgica a los frutos secos.]] [[No tomo lactosa.]]</p>` },
    { c: 2, t: "Weights, measures and containers", body: `
      <p>[[un kilo de]], [[medio kilo de]], [[un cuarto de kilo de]], [[cien gramos de]], [[un litro de]]</p>
      <p>[[una docena de huevos]], [[una botella de aceite]], [[una lata de atún]], [[un paquete de arroz]], [[una barra de pan]]</p>
      <p>Shopping: [[¿Qué le pongo?]] · [[Póngame un kilo de tomates.]] · [[¿Algo más?]] · [[No, nada más. ¿Cuánto es?]]</p>` },
    { c: 2, t: "se in recipes and instructions", body: `
      <p>To explain a process without saying who does it, use [[se]] + verb in the 3rd person:</p>
      <p>Singular thing: [[Se corta la cebolla.]] [[Se añade la sal.]] · Plural things: [[Se pelan las patatas.]] [[Se baten los huevos.]]</p>
      <p>[[¿Cómo se hace la tortilla?]] [[¿Cómo se dice «spoon» en español?]]</p>` },
    { c: 3, t: "Direct object pronouns: lo, la, los, las", body: `
      <p>They replace a thing you have already mentioned, so you don't repeat it:</p>
      <div class="tbl-wrap"><table><tr><th></th><th>singular</th><th>plural</th></tr>
      <tr><td>masculine</td><td>[[lo]]: [[El pan lo compro aquí.]]</td><td>[[los]]: [[Los huevos los bato.]]</td></tr>
      <tr><td>feminine</td><td>[[la]]: [[La sopa la hago yo.]]</td><td>[[las]]: [[Las patatas las frío.]]</td></tr></table></div>
      <p>Position: before the conjugated verb ([[La corto.]]) or attached to an infinitive ([[Voy a cortarla.]] = [[La voy a cortar.]]). With [[hay que]], always attach it: [[Hay que cortarla.]]</p>
      <p>With [[se]] in recipes: [[Las patatas se pelan y se cortan.]]</p>` },
    { c: 3, t: "Ordering the steps", body: `
      <p>[[primero]] → [[luego]] / [[después]] → [[a continuación]] → [[al final]] / [[por último]]</p>
      <p>Time: [[durante diez minutos]] · [[hasta que esté dorado]] (until golden) · [[a fuego lento]] (on a low heat)</p>` }
  ],
  vocab: [
    { c: 1, g: "Food", items: [["la carne","meat"],["el pescado","fish"],["el marisco","seafood"],["la verdura","vegetables"],["la fruta","fruit"],["los frutos secos","nuts"],["las legumbres","pulses"],["los lácteos","dairy products"],["el arroz","rice"],["la pasta","pasta"],["el aguacate","avocado"]] },
    { c: 1, g: "Eating habits", items: [["soler","to usually do"],["sano / sana","healthy"],["picante","spicy"],["salado / salada","salty"],["dulce","sweet"],["rico / rica","tasty"],["ser vegetariano","to be vegetarian"],["ser alérgico a","to be allergic to"],["picar entre horas","to snack between meals"],["el plato típico","typical dish"]] },
    { c: 2, g: "Weights and containers", items: [["un kilo de","a kilo of"],["medio kilo de","half a kilo of"],["cien gramos de","a hundred grams of"],["un litro de","a litre of"],["una docena de","a dozen"],["una botella de","a bottle of"],["una lata de","a tin of"],["un paquete de","a packet of"],["una barra de pan","a baguette"],["una cucharada de","a spoonful of"],["una pizca de","a pinch of"]] },
    { c: 3, g: "In the kitchen", items: [["cortar","to cut"],["pelar","to peel"],["freír","to fry"],["hervir","to boil"],["añadir","to add"],["mezclar","to mix"],["batir","to beat"],["echar","to put in, to pour"],["el horno","oven"],["la sartén","frying pan"],["la olla","pot"],["el ingrediente","ingredient"]] }
  ],
  phrases: [
    ["Suelo desayunar fruta y un café.", "I usually have fruit and a coffee for breakfast.", 1],
    ["Como de todo, pero no me gusta el marisco.", "I eat everything, but I don't like seafood.", 1],
    ["¡Esta paella está buenísima!", "This paella tastes amazing!", 1],
    ["Póngame medio kilo de tomates, por favor.", "Half a kilo of tomatoes, please.", 2],
    ["¿Algo más? — No, nada más. ¿Cuánto es?", "Anything else? — No, nothing else. How much is it?", 2],
    ["Primero se pelan las patatas.", "First you peel the potatoes.", 2],
    ["¿Cómo se hace el gazpacho?", "How do you make gazpacho?", 2],
    ["La cebolla la corto muy fina.", "I cut the onion very finely.", 3],
    ["¿Los huevos? Los bato con un tenedor.", "The eggs? I beat them with a fork.", 3]
  ],
  ex: [
    { type: "mc", q: "[[Yo ___ cenar a las nueve.]]", opts: ["suelo", "solo", "sueles", "suele"], a: 0, why: "soler, yo → suelo." },
    { type: "mc", q: "[[Esta sopa ___ muy salada.]]", opts: ["está", "es", "hay", "tiene"], a: 0, why: "How it tastes now: estar." },
    { type: "mc", q: "[[Las patatas se ___ en trozos.]]", opts: ["cortan", "corta", "corto", "cortar"], a: 0, why: "Plural noun → se cortan." },
    { type: "fill", q: "[[Una ___ de huevos.]] (dozen)", a: ["docena"], why: "una docena de = a dozen." },
    { type: "fill", q: "[[¿El pan? ___ compro en la panadería.]]", a: ["lo"], why: "el pan → lo." },
    { type: "fill", q: "[[¿Las fresas? ___ lavo con agua fría.]]", a: ["las"], why: "las fresas → las." }
  ],
  listen: [
    { c: 1, mode: "choose", es: "No como carne, soy vegetariana.", en: "I don't eat meat, I'm vegetarian." },
    { c: 2, mode: "choose", es: "Póngame un litro de aceite.", en: "A litre of oil, please." },
    { c: 3, mode: "choose", es: "La cebolla la frío con un poco de aceite.", en: "I fry the onion with a little oil." },
    { c: 1, mode: "write", es: "Solemos comer en casa.", en: "We usually eat at home." },
    { c: 2, mode: "write", es: "Primero se baten los huevos.", en: "First you beat the eggs." },
    { c: 3, mode: "write", es: "El arroz lo compro en el mercado.", en: "I buy the rice at the market." }
  ],
  talk: [
    { c: 1, q: "¿Qué sueles desayunar?", qen: "What do you usually have for breakfast?", model: "Suelo desayunar un café con leche y una tostada con tomate.", men: "I usually have a white coffee and toast with tomato." },
    { c: 2, q: "Estás en el mercado. Pide fruta para la semana.", qen: "You are at the market. Ask for fruit for the week.", model: "Buenos días. Póngame un kilo de naranjas y medio kilo de fresas, por favor.", men: "Good morning. A kilo of oranges and half a kilo of strawberries, please." },
    { c: 3, q: "¿Cómo se hace un plato típico de tu país?", qen: "How do you make a typical dish from your country?", model: "Primero se hierve el arroz. Luego se fríen las verduras y al final se mezcla todo.", men: "First you boil the rice. Then you fry the vegetables and finally you mix everything." }
  ],
  practice: [
    /* Lesson 1 · Hábitos y gustos en la comida */
    { l: 1, type: "fill", t: "soler, ser, estar", i: "Write the missing word.", items: [
      "Yo ___ (soler) comer a las dos.|suelo", "¿Tú ___ (soler) picar entre horas?|sueles", "Mis padres ___ (soler) cenar pronto.|suelen", "La verdura ___ muy sana.|es",
      "¡Este pastel ___ riquísimo!|está", "El café ___ frío, ¿me lo calienta?|está", "La paella ___ un plato típico de Valencia.|es", "Nosotros ___ (soler) ir al mercado los sábados.|solemos"] },
    { l: 1, type: "match", t: "Food", i: "Connect each word with its meaning.", items: [
      ["el marisco", "seafood"], ["los frutos secos", "nuts"], ["las legumbres", "pulses"], ["los lácteos", "dairy products"], ["picante", "spicy"], ["salado", "salty"], ["sano", "healthy"], ["dulce", "sweet"]] },
    { l: 1, type: "mc", t: "Habits and diets", items: [
      ["[[No como carne ni pescado: soy ___.]]", ["vegetariano", "alérgico", "picante"], 0],
      ["[[Soy alérgica ___ los cacahuetes.]]", ["a", "de", "con"], 0],
      ["[[Me gusta la carne, ___ no como mucha.]]", ["pero", "además", "y"], 0],
      ["[[La fruta es sana. ___, es barata.]]", ["Además", "Pero", "O"], 0],
      ["[[Pan ___ higos.]]", ["y", "e", "o"], 1],
      ["[[¿Qué sueles ___ por la noche?]]", ["cenar", "cenas", "cenado"], 0]] },
    /* Lesson 2 · En el mercado */
    { l: 2, type: "fill", t: "Weights and containers", i: "Write the missing word.", items: [
      "Un ___ de leche. (litre)|litro", "Una ___ de huevos. (dozen)|docena", "Una ___ de vino. (bottle)|botella", "Una ___ de atún. (tin)|lata",
      "Un ___ de galletas. (packet)|paquete", "___ kilo de queso. (half)|medio", "Una ___ de pan. (baguette)|barra", "Cien ___ de jamón.|gramos"] },
    { l: 2, type: "mc", t: "At the market", items: [
      ["The shop assistant asks:", ["¿Qué le pongo?", "¿Qué te pones?", "¿Cuánto es?"], 0],
      ["You want to pay:", ["¿Algo más?", "¿Cuánto es?", "¿Qué le pongo?"], 1],
      ["[[___ un kilo de manzanas, por favor.]]", ["Póngame", "Pongo", "Me pone"], 0],
      ["[[¿Algo más? — No, ___ más.]]", ["nada", "algo", "nunca"], 0],
      ["A pinch of salt:", ["una pizca de sal", "una lata de sal", "una barra de sal"], 0],
      ["[[¿Cómo ___ hace la tortilla?]]", ["se", "te", "lo"], 0]] },
    { l: 2, type: "fill", t: "Recipes with se", i: "Write the verb with se.", items: [
      "Primero ___ (pelar) las patatas.|se pelan", "Luego ___ (cortar) la cebolla.|se corta", "Después ___ (batir) los huevos.|se baten", "A continuación ___ (añadir) la sal.|se añade",
      "___ (freír) todo a fuego lento.|se fríe", "Al final ___ (mezclar) los ingredientes.|se mezclan"] },
    /* Lesson 3 · Recetas: lo, la, los, las */
    { l: 3, type: "fill", t: "lo, la, los, las", i: "Write the pronoun.", items: [
      "¿El aceite? ___ compro en el súper.|lo", "¿La leche? ___ tomo sin azúcar.|la", "¿Los tomates? ___ corto en trozos.|los", "¿Las cebollas? ___ frío primero.|las",
      "La carne hay que cocinar___ bien.|la", "¿El pescado? Voy a hacer___ al horno.|lo", "¿Dónde están las fresas? No ___ veo.|las", "¿Los huevos? Hay que batir___.|los"] },
    { l: 3, type: "match", t: "In the kitchen", i: "Connect each verb with its meaning.", items: [
      ["pelar", "to peel"], ["freír", "to fry"], ["hervir", "to boil"], ["añadir", "to add"], ["mezclar", "to mix"], ["batir", "to beat"], ["la sartén", "frying pan"], ["el horno", "oven"]] },
    { l: 3, type: "order", t: "A recipe", i: "Tap the words in the right order.", items: [
      "Primero se pelan las patatas.", "Luego se fríen en una sartén.", "Los huevos los bato con sal.", "Al final se mezcla todo.", "El arroz se hierve durante veinte minutos."] },
    /* Lesson 4 · Repaso */
    { l: 4, type: "tf", t: "Reading: «La tortilla de mi abuela»", text: "Mi abuela hace la mejor tortilla de patatas del mundo. Los domingos solemos comer en su casa y siempre la prepara.\nPrimero pela y corta las patatas y una cebolla. Luego las fríe en mucho aceite, a fuego lento, durante veinte minutos.\nMientras, bate seis huevos con un poco de sal. Después mezcla las patatas con los huevos y lo pone todo en la sartén.\nAl final le da la vuelta con un plato. ¡Siempre está buenísima! Yo lo he intentado muchas veces, pero la mía no está tan rica.", items: [
      ["Los domingos suelen comer en casa de la abuela.", true], ["La tortilla no lleva cebolla.", false], ["Las patatas se fríen a fuego lento.", true], ["La abuela bate doce huevos.", false], ["Se usa un plato para darle la vuelta.", true], ["La tortilla del narrador es mejor.", false]] },
    { l: 4, type: "fill", t: "Mixed review", i: "Write one word in each blank.", items: [
      "¿Qué ___ (soler) desayunar tú?|sueles", "Este pescado ___ un poco salado.|está", "Póngame una ___ de agua. (bottle)|botella", "Primero ___ cortan los tomates.|se",
      "¿El queso? ___ compro en el mercado.|lo", "¿Las naranjas? ___ quiero dulces.|las", "Soy alérgico ___ marisco.|al", "Me encanta la fruta. ___, es muy sana. (besides)|además"] },
    { l: 4, type: "order", t: "Make sentences", i: "Tap the words in the right order.", items: [
      "Suelo cenar una ensalada.", "Póngame medio kilo de fresas.", "¿Cómo se hace la paella?", "La sopa está muy caliente.", "Las verduras las compro en el mercado."] }
  ],
  exam: [
    { type: "match", t: "Vocabulary", i: "Connect the words.", items: [
      ["las legumbres", "pulses"], ["los frutos secos", "nuts"], ["una lata de", "a tin of"], ["una docena de", "a dozen"], ["pelar", "to peel"], ["hervir", "to boil"], ["la sartén", "frying pan"], ["picar entre horas", "to snack between meals"]] },
    { type: "mc", t: "Choose the answer", items: [
      ["[[Mis hijos ___ comer en el colegio.]]", ["suelen", "solen", "suele"], 0],
      ["[[La fruta ___ muy sana.]]", ["está", "es", "hay"], 1],
      ["[[¡Qué rico ___ el pollo!]]", ["está", "es", "hay"], 0],
      ["[[Póngame ___ kilo de uvas.]] (half)", ["media", "medio", "mitad"], 1],
      ["[[Luego se ___ los huevos.]]", ["bate", "baten", "batimos"], 1],
      ["[[¿El vino? ___ he comprado en el súper.]]", ["La", "Lo", "Le"], 1],
      ["[[¿La lechuga? Hay que lavar___.]]", ["la", "lo", "las"], 0],
      ["[[No como carne, ___ sí como pescado.]]", ["además", "pero", "y"], 1]] },
    { type: "fill", t: "Food and shopping", i: "Write one word in each blank.", items: [
      "Yo ___ (soler) comer mucha verdura.|suelo", "¿Qué ___ pongo? (shop assistant)|le", "Un ___ de leche. (litre)|litro", "Una ___ de pan, por favor. (baguette)|barra", "Cien ___ de queso.|gramos",
      "¿Algo ___? (anything else)|más", "La sopa ___ fría. ¡Qué asco!|está", "Soy ___ a los frutos secos. (allergic)|alérgico~alérgica", "La comida india es muy ___. (spicy)|picante", "Una ___ de sal. (pinch)|pizca"] },
    { type: "fill", t: "Recipes and pronouns", i: "Write one word in each blank.", items: [
      "Primero se ___ las patatas. (pelar)|pelan", "Luego se ___ la cebolla. (cortar)|corta", "Después se ___ el aceite. (añadir)|añade", "Al final se ___ todo. (mezclar)|mezcla",
      "¿Las zanahorias? ___ hiervo diez minutos.|las", "¿El pescado? ___ hago al horno.|lo", "¿Los ajos? Hay que pelar___.|los", "¿La salsa? ___ preparo con tomate.|la"] },
    { type: "tf", t: "Reading: «¿Qué comen en casa de Marcos?»", text: "En casa de Marcos comen de todo, pero cada uno tiene sus costumbres. Marcos suele desayunar fuerte: huevos, pan y fruta. Su mujer, Sofía, es vegetariana y no come ni carne ni pescado.\nSu hija Lucía es alérgica a la leche, así que en casa no suelen comprar lácteos. Además, a Lucía no le gustan nada las verduras.\nLos sábados Marcos va al mercado. Siempre compra una docena de huevos, dos kilos de fruta y legumbres. El pan lo compra en la panadería de la esquina.", items: [
      ["Marcos suele desayunar poco.", false], ["Sofía no come pescado.", true], ["Lucía es alérgica a la leche.", true], ["A Lucía le encantan las verduras.", false], ["Marcos va al mercado los sábados.", true], ["Compran el pan en el mercado.", false]] },
    { type: "order", pts: 2, t: "Build sentences", i: "Put the words in order.", items: [
      "Suelo desayunar café con tostadas.", "Póngame una docena de huevos.", "Primero se corta la cebolla.", "El pescado lo compro los viernes.", "Esta tortilla está muy buena."] }
  ]
});
