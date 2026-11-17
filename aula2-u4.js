/* Aula Plus 2 · Unidad 4 «Hogar, dulce hogar». Original material. Format: see aula2.js. */
A2({
  n: 4, es: "Hogar, dulce hogar", en: "Home, sweet home",
  lessons: ["Mi casa", "Muebles y objetos: ¿dónde está?", "Gustos y comparaciones"],
  goals: ["Describe a house or flat and its rooms", "Say where things are: encima de, debajo de, al lado de…", "Describe objects: shape, material and style", "Compare: más… que, tan… como, igual de, mejor, peor", "Talk about likes: gustar, encantar, preferir · a mí también / tampoco"],
  grammar: [
    { c: 1, t: "ser and estar for homes", body: `
      <p>[[ser]] describes what the place is like: [[El piso es grande y luminoso.]] [[Es un ático.]]</p>
      <p>[[estar]] says where it is, or its condition now: [[Está en el centro.]] [[Está reformado.]] [[La cocina está sucia.]]</p>
      <p>[[hay]] says what there is: [[Hay dos dormitorios y un baño.]]</p>
      <p class="tip">[[El piso tiene]] + rooms also works: [[Tiene una terraza enorme.]]</p>` },
    { c: 2, t: "Saying where things are", body: `
      <div class="tbl-wrap"><table><tr><th>Spanish</th><th>English</th></tr>
      <tr><td>[[encima de]]</td><td>on, on top of</td></tr><tr><td>[[debajo de]]</td><td>under</td></tr>
      <tr><td>[[al lado de]]</td><td>next to</td></tr><tr><td>[[delante de]]</td><td>in front of</td></tr>
      <tr><td>[[detrás de]]</td><td>behind</td></tr><tr><td>[[enfrente de]]</td><td>opposite</td></tr>
      <tr><td>[[entre… y…]]</td><td>between… and…</td></tr><tr><td>[[dentro de]]</td><td>inside</td></tr>
      <tr><td>[[a la derecha / izquierda de]]</td><td>to the right / left of</td></tr></table></div>
      <p>[[de + el = del]]: [[La lámpara está al lado del sofá.]] Without a noun: [[El gato está debajo.]]</p>` },
    { c: 2, t: "Describing objects", body: `
      <p>Shape: [[Es redondo / cuadrado / rectangular.]]</p>
      <p>Material with [[ser de]]: [[Es de madera.]] [[Es de cristal.]] [[Son de piel.]]</p>
      <p>Use: [[Sirve para]] + infinitive: [[Sirve para guardar ropa.]]</p>
      <p>Style: [[Es moderno / clásico / rústico.]]</p>` },
    { c: 3, t: "gustar, encantar, preferir · agreeing", body: `
      <p>[[Me gusta el salón.]] [[Me encantan las casas antiguas.]] [[Prefiero los pisos pequeños.]] ([[preferir]] e → ie)</p>
      <div class="tbl-wrap"><table><tr><th>Someone says</th><th>Same opinion</th><th>Different opinion</th></tr>
      <tr><td>[[Me gusta el campo.]]</td><td>[[A mí también.]]</td><td>[[A mí no.]]</td></tr>
      <tr><td>[[No me gusta el ruido.]]</td><td>[[A mí tampoco.]]</td><td>[[A mí sí.]]</td></tr>
      <tr><td>[[Vivo en un piso.]]</td><td>[[Yo también.]]</td><td>[[Yo no.]]</td></tr>
      <tr><td>[[No tengo jardín.]]</td><td>[[Yo tampoco.]]</td><td>[[Yo sí.]]</td></tr></table></div>
      <p class="tip">With gustar-verbs, answer with [[a mí]]; with normal verbs, answer with [[yo]].</p>` },
    { c: 3, t: "Comparing", body: `
      <p>[[más / menos]] + adjective + [[que]]: [[Mi casa es más grande que la tuya.]]</p>
      <p>[[tan]] + adjective + [[como]]: [[El salón es tan grande como la cocina.]] · [[igual de]] + adjective: [[Son igual de caros.]]</p>
      <p>[[tanto/a/os/as]] + noun + [[como]]: [[No tiene tantas habitaciones como mi piso.]]</p>
      <p>Irregular: [[mejor]] (better), [[peor]] (worse), [[mayor]] (older/bigger), [[menor]] (younger/smaller).</p>` },
    { c: 3, t: "Possessive pronouns: el mío, la tuya…", body: `
      <div class="tbl-wrap"><table><tr><th></th><th>one thing</th><th>more things</th></tr>
      <tr><td>mine</td><td>[[el mío / la mía]]</td><td>[[los míos / las mías]]</td></tr>
      <tr><td>yours</td><td>[[el tuyo / la tuya]]</td><td>[[los tuyos / las tuyas]]</td></tr>
      <tr><td>his, hers, yours (usted), theirs</td><td>[[el suyo / la suya]]</td><td>[[los suyos / las suyas]]</td></tr>
      <tr><td>ours</td><td>[[el nuestro / la nuestra]]</td><td>[[los nuestros / las nuestras]]</td></tr>
      <tr><td>yours (vosotros)</td><td>[[el vuestro / la vuestra]]</td><td>[[los vuestros / las vuestras]]</td></tr></table></div>
      <p>They agree with the thing owned: [[Mi casa es pequeña, pero la tuya es enorme.]] After [[ser]] the article often goes: [[Esta llave es mía.]]</p>` }
  ],
  vocab: [
    { c: 1, g: "Types of home", items: [["el piso","flat"],["el ático","penthouse, top-floor flat"],["el estudio","studio flat"],["la casa adosada","terraced house"],["el chalé","detached house"],["la casa de campo","country house"],["el edificio","building"],["la planta","floor (storey)"]] },
    { c: 1, g: "Parts of a home", items: [["el salón","living room"],["la cocina","kitchen"],["el dormitorio","bedroom"],["el baño","bathroom"],["el pasillo","hallway"],["la terraza","terrace"],["el balcón","balcony"],["el jardín","garden"],["el garaje","garage"],["el trastero","storage room"]] },
    { c: 1, g: "What is it like?", items: [["luminoso / luminosa","bright"],["oscuro / oscura","dark"],["amplio / amplia","spacious"],["ruidoso / ruidosa","noisy"],["tranquilo / tranquila","quiet"],["exterior","facing the street"],["interior","facing inwards"],["reformado / reformada","renovated"],["amueblado / amueblada","furnished"]] },
    { c: 2, g: "Furniture", items: [["el sofá","sofa"],["el sillón","armchair"],["la estantería","bookshelf"],["el armario","wardrobe, cupboard"],["la lámpara","lamp"],["la alfombra","rug"],["el espejo","mirror"],["la mesilla","bedside table"],["la cama","bed"],["el cuadro","painting"],["la cortina","curtain"]] },
    { c: 2, g: "Shapes and materials", items: [["redondo / redonda","round"],["cuadrado / cuadrada","square"],["rectangular","rectangular"],["de madera","wooden"],["de metal","metal"],["de cristal","glass"],["de plástico","plastic"],["de piel","leather"],["de algodón","cotton"]] },
    { c: 3, g: "Comparing", items: [["más… que","more… than"],["menos… que","less… than"],["tan… como","as… as"],["igual de","just as"],["mejor","better"],["peor","worse"],["mayor","older, bigger"],["menor","younger, smaller"]] }
  ],
  phrases: [
    ["Vivo en un piso pequeño pero muy luminoso.", "I live in a small but very bright flat.", 1],
    ["El piso está en el centro y tiene dos dormitorios.", "The flat is in the centre and has two bedrooms.", 1],
    ["El baño es interior y no tiene ventana.", "The bathroom is inside and has no window.", 1],
    ["La lámpara está encima de la mesilla.", "The lamp is on the bedside table.", 2],
    ["El gato duerme debajo del sofá.", "The cat sleeps under the sofa.", 2],
    ["Es una mesa redonda de madera.", "It is a round wooden table.", 2],
    ["Me encantan las casas antiguas. — A mí también.", "I love old houses. — Me too.", 3],
    ["Mi casa es más tranquila que la tuya.", "My house is quieter than yours.", 3],
    ["Tu cocina es tan grande como la mía.", "Your kitchen is as big as mine.", 3]
  ],
  ex: [
    { type: "mc", q: "[[El piso ___ en la cuarta planta.]]", opts: ["está", "es", "hay", "tiene"], a: 0, why: "Location: estar." },
    { type: "mc", q: "[[No me gustan los pisos interiores. — A mí ___.]] (same opinion)", opts: ["también", "tampoco", "sí", "no"], a: 1, why: "Agreeing with a negative: tampoco." },
    { type: "mc", q: "[[Mi casa es grande, pero ___ es más grande.]] (yours, casa)", opts: ["la tuya", "el tuyo", "tu", "tuya"], a: 0, why: "casa is feminine: la tuya." },
    { type: "fill", q: "[[La alfombra está ___ de la mesa.]] (under)", a: ["debajo"], why: "debajo de = under." },
    { type: "fill", q: "[[Este piso es ___ caro que el otro.]] (more)", a: ["más"], why: "más… que." },
    { type: "fill", q: "[[La mesa es ___ madera.]]", a: ["de"], why: "Material: ser de." }
  ],
  listen: [
    { c: 1, mode: "choose", es: "Es un ático con una terraza enorme.", en: "It is a penthouse with a huge terrace." },
    { c: 2, mode: "choose", es: "Las llaves están dentro del cajón.", en: "The keys are inside the drawer." },
    { c: 3, mode: "choose", es: "Prefiero vivir en el campo.", en: "I prefer living in the country." },
    { c: 1, mode: "write", es: "El salón es muy luminoso.", en: "The living room is very bright." },
    { c: 2, mode: "write", es: "El espejo está al lado de la puerta.", en: "The mirror is next to the door." },
    { c: 3, mode: "write", es: "Mi habitación es más pequeña que la tuya.", en: "My room is smaller than yours." }
  ],
  talk: [
    { c: 1, q: "¿Cómo es tu casa?", qen: "What is your home like?", model: "Vivo en un piso de tres habitaciones. Es bastante luminoso y está cerca del centro.", men: "I live in a three-bedroom flat. It is quite bright and it is near the centre." },
    { c: 2, q: "¿Qué hay en tu habitación?", qen: "What is there in your room?", model: "Hay una cama, un armario y una mesa. La lámpara está encima de la mesilla.", men: "There is a bed, a wardrobe and a table. The lamp is on the bedside table." },
    { c: 3, q: "¿Prefieres vivir en el centro o en las afueras?", qen: "Do you prefer living in the centre or the outskirts?", model: "Prefiero el centro: es más cómodo, aunque es menos tranquilo que las afueras.", men: "I prefer the centre: it is more convenient, although it is less quiet than the outskirts." }
  ],
  practice: [
    /* Lesson 1 · Mi casa */
    { l: 1, type: "fill", t: "ser, estar, hay, tener", i: "Write es, está, hay or tiene.", items: [
      "Mi piso ___ en la calle Mayor.|está", "El salón ___ muy amplio.|es", "En el piso ___ dos baños.|hay", "La casa ___ un jardín precioso.|tiene",
      "El edificio ___ muy antiguo.|es", "La cocina ___ reformada.|está", "¿___ ascensor en el edificio?|hay", "Mi estudio ___ pequeño pero cómodo.|es"] },
    { l: 1, type: "match", t: "Rooms and homes", i: "Connect each word with its meaning.", items: [
      ["el pasillo", "hallway"], ["el dormitorio", "bedroom"], ["el salón", "living room"], ["el trastero", "storage room"], ["el ático", "penthouse"], ["la casa adosada", "terraced house"], ["el chalé", "detached house"], ["la planta", "floor (storey)"]] },
    { l: 1, type: "mc", t: "Describing a home", items: [
      ["A flat with lots of light is", ["luminoso", "oscuro", "ruidoso"], 0],
      ["A flat that faces the street is", ["interior", "exterior", "amueblado"], 1],
      ["[[El piso está ___: tiene sofá, camas y mesa.]]", ["amueblado", "reformado", "amplio"], 0],
      ["[[Vivo en un ___ piso.]] (fifth)", ["quinto", "cinco", "quinta"], 0],
      ["[[La calle es muy ___: hay muchos bares.]]", ["tranquila", "ruidosa", "luminosa"], 1],
      ["[[¿Cuántas ___ tiene la casa?]]", ["habitaciones", "plantas bajas", "salones"], 0]] },
    /* Lesson 2 · Muebles y objetos */
    { l: 2, type: "fill", t: "Where is it?", i: "Write the missing word.", items: [
      "El cuadro está ___ del sofá. (above)|encima", "Las zapatillas están ___ de la cama. (under)|debajo", "La silla está ___ lado de la mesa.|al", "El coche está ___ de la casa. (in front)|delante",
      "El baño está entre el dormitorio ___ la cocina.|y", "La ropa está ___ del armario. (inside)|dentro", "El jardín está ___ de la casa. (behind)|detrás", "Mi casa está enfrente ___ parque.|del"] },
    { l: 2, type: "match", t: "Furniture", i: "Connect each word with its meaning.", items: [
      ["la estantería", "bookshelf"], ["el sillón", "armchair"], ["la alfombra", "rug"], ["el espejo", "mirror"], ["la mesilla", "bedside table"], ["la cortina", "curtain"], ["el armario", "wardrobe"], ["el cuadro", "painting"]] },
    { l: 2, type: "mc", t: "Objects", items: [
      ["A plate is usually", ["redondo", "cuadrado", "rectangular"], 0],
      ["[[Una botella ___ cristal.]]", ["de", "en", "con"], 0],
      ["[[Un armario sirve ___ guardar ropa.]]", ["por", "para", "a"], 1],
      ["A sofa made of leather:", ["un sofá de piel", "un sofá de madera", "un sofá de algodón"], 0],
      ["[[Los muebles de mi abuela son ___: muy antiguos y de madera.]]", ["rústicos", "modernos", "de plástico"], 0],
      ["[[Las sillas ___ de metal.]]", ["son", "están", "hay"], 0]] },
    /* Lesson 3 · Gustos y comparaciones */
    { l: 3, type: "fill", t: "Comparing and possessives", i: "Write the missing word.", items: [
      "Mi piso es ___ grande que el tuyo. (bigger)|más", "Tu casa es tan bonita ___ la mía.|como", "Este barrio es ___ que el otro. (better)|mejor", "Mi hermano ___ tiene tantos libros como yo.|no",
      "Mi coche es viejo, pero ___ es nuevo. (yours, coche)|el tuyo", "Estas llaves no son ___. (mine)|mías", "Nuestra casa es pequeña y ___ también. (theirs, casa)|la suya", "Los dos sofás son igual ___ cómodos.|de"] },
    { l: 3, type: "mc", t: "Me too, me neither", items: [
      ["[[Me encanta mi barrio. — A mí ___.]] (same)", ["también", "tampoco", "sí"], 0],
      ["[[No me gustan los áticos. — A mí ___.]] (different)", ["no", "sí", "también"], 1],
      ["[[Vivo con mis padres. — Yo ___.]] (different)", ["no", "tampoco", "sí"], 0],
      ["[[No tengo terraza. — Yo ___.]] (same)", ["también", "tampoco", "no"], 1],
      ["[[Yo ___ las casas modernas.]] (preferir)", ["prefiero", "prefero", "prefieres"], 0],
      ["[[A mis padres les ___ las plantas.]]", ["encanta", "encantan", "encantas"], 1]] },
    { l: 3, type: "order", t: "Make sentences", i: "Tap the words in the right order.", items: [
      "Mi casa es más tranquila que la tuya.", "Prefiero los pisos con terraza.", "Este sofá es tan cómodo como el mío.", "No me gustan los muebles modernos.", "Mi dormitorio es peor que el tuyo."] },
    /* Lesson 4 · Repaso */
    { l: 4, type: "tf", t: "Reading: «Se alquila piso»", text: "Se alquila piso en el barrio de Gràcia, en Barcelona. Está en la tercera planta de un edificio antiguo, pero el piso está reformado.\nTiene dos dormitorios, un salón amplio y muy luminoso, una cocina pequeña y un baño. El salón tiene un balcón con vistas a una plaza.\nEstá amueblado: hay un sofá de piel, una mesa redonda de madera y estanterías. El edificio no tiene ascensor.\nEs más pequeño que otros pisos de la zona, pero también es más barato: 950 euros al mes.", items: [
      ["El edificio es nuevo.", false], ["El piso tiene dos dormitorios.", true], ["El salón es oscuro.", false], ["La mesa es de madera.", true], ["Hay ascensor.", false], ["El piso es más barato que otros de la zona.", true]] },
    { l: 4, type: "fill", t: "Mixed review", i: "Write one word in each blank.", items: [
      "El piso ___ en un barrio muy tranquilo.|está", "En mi calle ___ muchas tiendas.|hay", "La lámpara es ___ cristal.|de", "El perro está ___ de la puerta. (behind)|detrás",
      "Tu piso es más luminoso ___ el mío.|que", "No me gusta el ruido. — A mí ___.|tampoco", "Mi cocina no es tan grande ___ la tuya.|como", "Esta mesa es ___. (ours, mesa)|nuestra"] },
    { l: 4, type: "order", t: "Make sentences", i: "Tap the words in the right order.", items: [
      "El piso tiene tres dormitorios y un baño.", "La alfombra está debajo de la mesa.", "Me encanta tu salón. — A mí también.", "Busco un piso cerca del centro.", "La estantería es de madera."] }
  ],
  exam: [
    { type: "match", t: "Vocabulary", i: "Connect the words.", items: [
      ["el pasillo", "hallway"], ["la estantería", "bookshelf"], ["el espejo", "mirror"], ["luminoso", "bright"], ["ruidoso", "noisy"], ["de piel", "leather"], ["redondo", "round"], ["el trastero", "storage room"]] },
    { type: "mc", t: "Choose the answer", items: [
      ["[[Mi casa ___ cerca de la playa.]]", ["es", "está", "hay"], 1],
      ["[[En el salón ___ una chimenea.]]", ["hay", "está", "es"], 0],
      ["[[El gato está ___ el sofá y la mesa.]]", ["entre", "encima", "dentro"], 0],
      ["[[Estas sillas son ___ plástico.]]", ["con", "de", "en"], 1],
      ["[[No me gusta cocinar. — A mí ___.]] (same)", ["también", "tampoco", "sí"], 1],
      ["[[Tu jardín es ___ que el mío.]] (better)", ["más bueno", "mejor", "más mejor"], 1],
      ["[[Mis padres tienen un piso. ___ es muy grande.]] (theirs)", ["El suyo", "La suya", "Su"], 0],
      ["[[Los dos pisos son ___ caros.]] (just as)", ["igual de", "tan como", "tanto"], 0]] },
    { type: "fill", t: "My home", i: "Write one word in each blank.", items: [
      "Vivo en un ___ con terraza. (penthouse)|ático", "La casa tiene un ___ con flores. (garden)|jardín", "Mi dormitorio es ___: no tiene mucha luz.|oscuro", "El piso ya tiene muebles: está ___.|amueblado", "Dejo el coche en el ___.|garaje",
      "El edificio tiene seis ___. (floors)|plantas", "La cocina está ___ del salón. (next to)|al lado", "La televisión está ___ del sofá. (opposite)|enfrente~delante", "Los platos están ___ del armario. (inside)|dentro", "La mesa es ___ (square).|cuadrada"] },
    { type: "fill", t: "Comparing and likes", i: "Write one word in each blank.", items: [
      "Mi piso es ___ caro que el tuyo. (less)|menos", "Tu habitación es tan grande ___ la mía.|como", "No tengo ___ libros como tú.|tantos", "Yo ___ (preferir) las casas antiguas.|prefiero",
      "Me ___ las plantas. (encantar)|encantan", "Me gusta este barrio. — A mí ___. (different)|no", "Mi casa es pequeña y ___ también. (yours, casa)|la tuya", "El coche rojo es ___. (mine)|mío"] },
    { type: "tf", t: "Reading: «Dos casas, dos vidas»", text: "Elena vive en un estudio en el centro de Madrid. Es pequeño, solo tiene 35 metros, pero es muy luminoso. Está al lado del metro y hay muchos bares en su calle, así que es un poco ruidoso.\nSu hermano Pablo vive en una casa de campo en un pueblo de Asturias. Su casa es mucho más grande que el estudio de Elena: tiene cuatro dormitorios y un jardín enorme. Es muy tranquila, pero está lejos de todo.\nElena dice: «Mi casa es más pequeña que la tuya, pero yo prefiero vivir en la ciudad». Pablo contesta: «Yo no».", items: [
      ["El estudio de Elena tiene mucha luz.", true], ["La calle de Elena es muy tranquila.", false], ["La casa de Pablo tiene jardín.", true], ["El estudio es más grande que la casa de Pablo.", false], ["La casa de Pablo está cerca de todo.", false], ["Pablo prefiere vivir en el campo.", true]] },
    { type: "order", pts: 2, t: "Build sentences", i: "Put the words in order.", items: [
      "El piso está en la segunda planta.", "La lámpara está encima de la mesa.", "Es una mesa de madera muy antigua.", "Mi casa es más grande que la tuya.", "No me gustan los pisos interiores."] }
  ]
});
