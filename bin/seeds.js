const mongoose = require('mongoose');
const Recipe = require('../models/Recipe');

mongoose.connect('mongodb://localhost/Proyecto2', { useNewUrlParser: true, useUnifiedTopology: true });

const recetas = [
   {
      name: "Paella",
      ingredients: [{name:'cebolla', quantity: 1, unit: 'unidad'}, {name: 'aceite de oliva', quantity: 5, unit: 'cucharadas'}, {name: 'ajo', quantity: 2, unit: 'dientes'}, {name: 'tomates', quantity: 2, unit: 'unidades'}, {name: 'sal', quantity: 1, unit: 'pellizco'}, {name: 'pimenton', quantity: 1, unit: 'cucharadita'}, {name: 'azafrán', quantity: 4, unit: 'hebras'}, {name: 'calamares', quantity: 4, unit: 'pequeños'}, {name: 'arroz', quantity: 2, unit: 'tazas'}, {name: 'caldo de pescado', quantity: 3, unit: 'tazas'}, {name: 'vino blanco', quantity: 1, unit: 'vaso'}, {name: 'gambas', quantity: 12, unit: 'unidades'}, {name: 'mejillones', quantity: 16, unit: 'unidades'}],
      instructions: 'Empezamos haciendo el sofrito. Para ello, freímos la cebolla bien picada en el aceite caliente. Removemos la cebolla con una cuchara de madera frecuentemente, para que no se queme, y lo dejamos hasta que comience a tomar color, En ese momento, añadimos el ajo bien picado y, antes de que empiece a tomar color, incorporamos los tomates también picados. Agregamos el azúcar (para neutralizar la acidez del tomate), sal a nuestro gusto, el pimentón y unas hebras de azafrán. Revolvemos todos los ingredientes y dejamos que se sofrían hasta que los tomates se reduzcan y comiencen a chisporrotear.Es el momento de cortar los calamares ya limpios. El cuerpo lo cortamos en aros y las patas las dejamos enteras. Añadimos el calamar y lo dejamos cocinar durante unos minutos. Incorporamos el arroz y lo distribuimos por toda la paellera para que los granos se adhieran a los ingredientes. Calentamos el caldo junto con el vino en un cazo aparte, y cuando esté caliente lo vertemos en la paella. Aumentamos la temperatura y añadimos más sal. Volvemos a remover todo para que el arroz quede bien cubierto por el caldo, y cuando llegue a ebullición, bajamos la temperatura y dejamos que se cueza todo a fuego lento de 18 a 20 minutos. Es importante que durante la cocción vayamos moviendo la paellera por toda la superficie de cocción, para que el arroz se cueza uniformemente. Tras 10 minutos de cocción, incorporamos las gambas cocidas por encima hasta que se pongan de color rosa, luego le damos la vuelta para que se hagan por el otro lado. Si vemos que se necesita porque está muy seco, vertemos un poco más de caldo hacia el final de la cocción. Tras los 20 minutos, probamos el arroz y si está bien hecho apagamos el fuego y cubrimos la paellera con un trapo o papel de aluminio para que repose. Cocemos los mejillones al vapor con un dedo de agua en una cazuela con la tapa puesta, y cuando se abran, los colocamos por encima de la paella (desechamos los que no se abran).Servimos la paella tras 5 minutos de reposo.',
      cuisine: "Española",
      image: 'https://recetaspaella.es/img/paella-de-marisco-331.jpg',
      diners: 4,
      score: '',
      creator: 'Chicote',
      idScorer: '',

   },
   {
       name: 'Guisantes con jamón',
       ingredients: [{name: 'guisantes', quantity: 400, unit: 'gramos'}, {name: 'jamón serrano', quantity: 50, unit: 'gramos'}, {name: 'cebolleta', quantity: 1, unit: 'unit'}, {name: 'ajo', quantity: 1, unit: 'diente'}, {name: 'harina', quantity: 1, unit: 'cucharadita'}, {name: 'aceite de oliva', quantity: 3, unit: 'cucharadas'}, {name: 'sal', quantity: 1, unit: 'al gusto'}],
       instructions: 'Pon 1 l de agua en una cazuela pequeña, añade una pizca de sal y ponla a cocer. Cuando empiece a hervir, agrega los guisantes y deja cocer a fuego medio el tiempo que indique el envase (aproximadamente 6-8 minutos). Escúrrelos y reserva el caldo. Pela y pica la cebolleta en daditos. Pela y pica el diente de ajo en láminas a lo largo, apílalas y córtalas en tiras, apílalas nuevamente y córtalas en daditos. Corta la loncha de jamón en dados. Pon el aceite en una cazuela, añade el ajo y la cebolleta (picados), rehoga durante un par de minutos, incorpora el jamón y fríelo un poco. Incorpora la harina, mezcla bien y añade los guisantes. Vierte 1/2 vaso del caldo resultante de cocer los guisantes y remueve. Cuando empiece a hervir cocina todo junto durante 3 minutos para que espese la salsa y sirve.',
       cuisine: 'Española',
       image: 'https://www.hogarmania.com/archivos/201702/guisantes-receta-668x400x80xX.jpg',
       diners: 2,
       score: '',
       creator: 'Arguiñano',
       idScorer: '',

    },
    {
       name: 'Ratatouille',
       ingredients: [{name: 'zanahoria', quantity: 3, unit: 'unidades'}, {name: 'cebollas', quantity: 2, unit: 'unidades'}, {name: 'ajo', quantity: 1, unit: 'diente'}, {name: 'berenjena', quantity: 2, unit: 'unidades'}, {name: 'calabacín', quantity: 1, unit: 'unidad'}, {name: 'tomates', quantity: 2, unit: 'unidades'}, {name: 'salsa de tomate', quantity: 500, unit: 'ml'}, {name: 'aceite de oliva', quantity: 1, unit: 'cucharada'}, {name: 'sal', quantity: 1, unit: 'pellizco'}, {name: 'hierbas provenzales', quantity: 1, unit: 'al gusto'}, {name: 'perejil', quantity: 1, unit: 'ramita'}],
       instructions: 'Pela las cebollas y las zanahorias y rállalas. Ponlas a pochar en una sartén con un chorrito de aceite. Cuando estén blandas, pela y pica el diente de ajo y añádelo, dale un par de vueltas y vierte la salsa de tomate. Cocina el conjunto durante 10-15 minutos. Corta las berenjenas y el calabacín en lonchas finas (medio centímetro aproximadamente). Sazona las berenjenas y deja que suelten parte del agua. Sécalas y fríelas brevemente en una sartén con aceite. Fríe también las lonchas de calabacín. Corta los tomates en lonchas. Coloca en el fondo de una tartera la mezcla de zanahoria, cebolla, ajo y salsa de tomate. Extiende bien. Coloca las lonchas de berenjena, las de calabacín y las de tomate sobre la salsa formando filas. Espolvorea con una buena cantidad de hierbas provenzales. Sazona. Hornea a 200ºC durante 30 minutos. Sirve y decora con perejil.',
       cuisine: 'Francesa',
       image: 'https://vod-hogarmania.atresmedia.com/hogarmania/images/images01/2015/10/19/5c000f4e5a2c1100017752bb/1239x697.jpg',
       diners: 4,
       score: '',
       creator: 'Arguiñano',
       idScorer: '',

    },
    {
       name: 'Risotto a la milanesa',
       ingredients:[{name: 'caldo de pollo', quantity: 1500, unit: 'ml'}, {name: 'arroz scotti', quantity: 400, unit: 'gramos'}, {name: 'chalota', quantity: 4, unit: 'unidades'}, {name: 'vino blanco', quantity: 125, unit: 'ml'}, {name: 'azafrán', quantity: 1/2, unit: 'cucharada'}, {name: 'queso idiazabal', quantity: 45, unit: 'gramos'}, {name: 'mantequilla', quantity: 30, unit: 'gramos'}, {name: 'aceite de oliva', quantity: 1, unit: 'cucharada'}, {name: 'sal', quantity: 1, unit: 'al gusto'}],
       instructions: 'Calienta el caldo en una cazuela. Coloca el azafrán en un bol y vierte un poco de caldo caliente para que se hidrate. Resérvalo. Pica finamente las chalotas y rehógalas en una cazuela con un chorrito de aceite (tienen que ablandarse pero no dorarse). Cuando las chalotas estén transparentes, agrega el arroz y rehógalo a fuego medio durante 2-3 minutos. Vierte el vino y sigue removiendo hasta que desaparezca (se evapore). Vierte un par de cucharones de caldo caliente y sigue removiéndolo sin parar. Cuando se seque, agrega otro cucharón y repite el proceso. Sazona. A media cocción incorpora el azafrán a la cazuela. Sigue removiendo y añadiendo caldo hasta que el arroz esté al punto deseado. Añade la mantequilla y remueve bien hasta que los ingredientes queden perfectamente integrados. Ralla el queso y mezcla bien. Sirve enseguida (no necesita reposo) y adorna con unas hojas de perejil. Sirve el risotto.',
       cuisine: 'Italiana',
       image: 'https://www.hogarmania.com/archivos/201802/6127-1-risotto-a-la-milanesa-vertical-xl-XxXx80.jpg',
       diners: 4,
       score: '',
       creator: 'Binotto',
       idScorer: '',

    },   
    {
       name: 'Pretzels',
       ingredients: [{name: 'levadura fresca', quantity: 2, unit: 'cucharaditas'}, {name: 'agua', quantity: 350, unit: 'ml'}, {name: 'harina de fuerza', quantity: 500, unit: 'gramos'}, {name: 'sal', quantity: 1, unit: 'cucharada'}, {name: 'huevo', quantity: 1, unit: 'unidad'}, {name: 'semillas de sésamo', quantity:1, unit: 'al gusto'}],
       instructions: 'Esparce la levadura en un tazón con 100ml de agua. Deja 5 minutos revolviendo para que se disuelva. Mezcla la harina y la sal en un recipiente grande. Haz un hoyo en el centro y vierte el agua con levadura. Con una cuchara de madera, haz caer la harina de los costados del recipiente y mezcla con el agua con levadura para formar una pasta blanda. Tapa con un paño de cocina y deja esponjar unos 20 minutos, hasta que fermente y forme espuma. Mezcla con la harina. Añade revolviendo el resto del agua, según sea necesario, hasta formar una masa dura y pegajosa. Vuelca la masa sobre una superficie ligeramente enharinada. Amasa 10 minutos, hasta que la masa quede homogénea y elástica. Pon la masa en un recipiente y tapa con un paño de cocina. Deja fermentar de una hora y media a dos horas, hasta que doble su tamaño. Deshincha y deja reposar durante 10 minutos más.',
       cuisine: 'Alemana',
       image: 'https://www.hogarmania.com/archivos/201410/pretzels-o-lazos-salados-668x400x80xX.jpg',
       diners: 8,
       score: '',
       creator: 'Schweinsteiger',
       idScorer: '',

    },   
    {
       name: 'BBQ Ribs New York',
       ingredients: [{name: 'costilla de cerdo', quantity: 1500, unit: 'gramos'}, {name: 'sal', quantity: 1, unit: 'al gusto'}, {name: 'salsa barbacoa', quantity: 1, unit: 'abundante'}],
       instructions: 'La primera parte, necesaria para que las costillas estén en su punto de sal y tiernas como ninguna, para que prácticamente se deshagan y el hueso se salga limpio sin nada de carne pegada es cocer las costillas en agua salada durante una hora y quince minutos a fuego medio. Para ello, aún contando con una buena cacerola será necesario cortar el costillas por la mitad. Tras la cocción, notaremos que las dos porciones del costillas están muy tiernas, y que los huesos empiezan a asomar al encogerse la carne como consecuencia de la cocción. Tened cuidado al sacar las costillas o se os partirán en más porciones. Precalentar el horno a 180º y disponer las dos mitades de las costillas en una fuente apta para hornear o si lo preferís, en la misma bandeja del horno. Una vez colocadas, cubrir con abundante salsa barbacoa. Mi amigo Marco me recomendó utilizar si es posible salsas americanas auténticas o al menos salsas barbacoa con ingredientes especiales como mostaza y miel. Hornear las costillas durante cuarenta minutos, hasta que la salsa barbacoa haya comenzado a burbujear, y veamos que los huesos de las costillas asoman un poco más, señal de que el plato está terminado.',
       cuisine: 'Americana',
       image: 'https://i.blogs.es/7b876b/bbq-ribs-new-york-la-receta-definitiva-de-costillas-de-cerdo-a-la-barbacoa/1366_2000.jpg',
       diners: 4,
       score: '',
       creator: 'Trump',
       idScorer: '',

    },   
    {
       name: 'Alitas de pollo al horno al estilo Búfalo',
       ingredients: [{name: 'alitas de pollo', quantity: 12, unit: 'unidades'}, {name: 'maicena', quantity: 15, unit: 'gramos'}, {name: 'pimenton dulce', quantity: 10, unit: 'gramos'}, {name: 'cayena', quantity: 1, unit: 'unidad'}, {name: 'cebolla deshidratada molida', quantity: 5, unit: 'gramos'}],
       instructions: 'Comenzaremos precalentando el horno a 180 grados. Después forramos una bandeja de horno con papel antiadherente. Partimos en dos las alitas, retirándole la parte de la punta. Las echamos en un bol, les agregamos una cucharada de aceite de oliva y les damos una vuelta para que se impregnen bien y queden engrasadas. Por otra parte en un bol mezclamos la Maicena, el pimentón, la cayena molida, la cebolla y la sal. Mezclamos todo bien y lo echamos en una bolsa de plástico para congelados. Echamos dentro las alitas engrasadas y las rebozamos bien con la mezcla dentro de la bolsa. Las colocamos en la fuente de horno, y las horneamos durante una hora, dándoles la vuelta a los 30 minutos.',
       cuisine: 'Americana',
       image: 'https://i.blogs.es/95bb6f/alitas-bufalodap/1366_2000.jpg',
       diners: 4,
       score: '',
       creator: 'Obama',
       idScorer: '',

    },   
    {
       name: 'Perritos calientes',
       ingredients: [{name: 'salchichas tipo Wiener o Frankfurt', quantity: 2, unit: 'unidades'}, {name: 'panecillos alargados', quantity: 2, unit: 'unidades'}, {name: 'cebolla', quantity: 1, unit: 'unidad'}, {name: 'pimiento verde', quantity: 1, unit: 'unidad'}, {name: 'lonchas de bacon', quantity: 2, unit: 'unidades'}],
       instructions: 'En realidad, los perritos calientes originales tan sólo se componen de la salchicha y el panecillo, acompañada de algún tipo de salsa, como ketchup y mostaza, pero he querido hacer algo un poco más elaborado, para completar su inconfundible sabor. Lo primero que debemos hacer es picar la cebolla, el pimiento y el bacon todo muy fino. Luego lo freímos todo en aceite bien caliente, salvo el bacon, que lo doraremos en una sartén él solo. Como los trozos son muy pequeños, os recomiendo que uséis un colador para poder “rescatarlos” del aceite. Una vez tenemos los acompañantes listos, tostamos un poco el pan en la plancha y marcamos las salchichas para que adquieran un aspecto más apetecible y de paso, se calienten. Por último, colocamos la salchicha en el panecillo y rematamos con un poco de cebolla, pimiento y bacon. Como toque final, una buena dosis de ketchup y mostaza.',
       cuisine: 'Americana',
       image: 'https://i.blogs.es/10686c/1366_2000/1366_2000.jpg',
       diners: 2,
       score: '',
       creator: 'Phelps',
       idScorer: '',

    },   
    {
       name: 'Matambre de carne arrollado',
       ingredients: [{name: 'matambre', quantity: 2000, unit: 'gramos'}, {name: 'morron rojo', quantity: 1, unit: 'unidad'}, {name: 'cebolla mediana', quantity: 1, unit: 'unidad'}, {name: 'perejil', quantity: 1, unit: 'manojo'}, {name: 'ajo', quantity: 4, unit: 'dientes'}, {name: 'zanahoria', quantity: 2, unit: 'unidades'}, {name: 'sal', quantity: 1, unit: 'al gusto'}, {name: 'ají molido', quantity: 1, unit: 'al gusto'}, {name: 'huevos duros', quantity: 6, unit: 'unidades'}],
       instructions: 'Primero preparamos la mise en place. Picamos la cebolla, el morrón, el perejil y el ajo. Rallamos las zanahorias. Unimos todos los ingredientes con sal y ají molido (los huevos los reservamos. Mezclamos el relleno del matambre de carne. Se extiende la mezcla por todo el matambre, ya anteriormente salado. Se colocan los huevos y enrollamos. Al enrollar el matambre casero si hay un lado más largo podemos seguir agregando huevos. Se cose con hilo y se hierve de 3 a 4 horas o hasta que al pincharlo esté tierno. Cuando esté el matambre arrollado hervido, se retira del agua y se lo prensa (yo utilicé la misma olla con agua para hacer peso). Se le saca el peso pasados los 30 minutos. Se lleva a frío. Una vez frío, retirar el hilo, y cortar en lonjas. Truco: Si se desea el matambre relleno hervido caliente, meter al horno sin retirar los hilos por 30 minutos. Servir el matambre de carne arrollado al gusto.',
       cuisine: 'Argentina',
       image: 'https://t1.rg.ltmcdn.com/es/images/0/8/7/matambre_de_carne_arrollado_64780_600.jpg',
       diners: 6,
       score: '',
       creator: 'Messi',
       idScorer: '',

    },   
    {
       name: 'Dulce de leche',
       ingredients: [{name: 'leche', quantity: 2500, unit: 'ml'}, {name: 'azucar', quantity: 1000, unit: 'gramos'}, {name: 'vainilla', quantity: 1, unit: 'cucharada'}, {name: 'bicarbonato', quantity: 5, unit: 'gramos'}],
       instructions: 'Verter la leche en una cacerola, añadir el azúcar, la chaucha de vainilla, revolver bien para disolver el azúcar y llevar a fuego fuerte hasta que suelte el hervor. Cuando empiece a hervir, bajar el fuego y revolver cada tanto hasta que el dulce de leche argentino empiece a espesar. Agregar entonces el bicarbonato y continuar la cocción, revolviendo continuamente, para evitar que se pegue hasta que tome el punto deseado. Según se desee más o menos espeso, probar dejando caer una gota del dulce de leche argentino sobre un plato, y dejar enfriar soplando. Si luego no se corre, estará a punto, si no hay continuar la cocción unos minutos.',
       cuisine: 'Argentina',
       image: 'https://t1.rg.ltmcdn.com/es/images/2/3/4/img_como_hacer_dulce_de_leche_24432_paso_0_600.jpg',
       diners: 4,
       score: '',
       creator: 'Veronica',
       idScorer: '',

    },   
    {
       name: 'Cachama frita',
       ingredients: [{name: 'pacú', quantity: 800, unit: 'gramos'}, {name: 'ajo', quantity: 3, unit: 'unidades'}, {name: 'sal', quantity: 1, unit: 'al gusto'}, {name: 'pimienta', quantity: 1, unit: 'al gusto'}, {name: 'limon', quantity: 1, unit: 'unidad'}, {name: 'hiervas provenzales deshidratadas', quantity: 1, unit: 'al gusto'}, {name: 'harina de maiz', quantity: 250, unit: 'gramos'}, {name: 'harina de trigo', quantity: 2, unit: 'cucharadas'}],
       instructions: 'Comience por condimentar la cachama (pacú) en un recipiente con las especias, ajo, sal, hierbas, perejil, cebolleta, albahaca, jugo de limón y pimienta. Revolvemos bien y dejamos reposar durante 15 minutos. En un plato hondo, mezclamos la harina de maíz con el trigo. Estos ingredientes se usarán para empanar la cachama. Pasamos el pescado en esta mezcla, presionando ligeramente con los dedos para que se pegue bien. Calienta la sartén con aceite. Cuando esté muy caliente, se pone a freír el pescado en hasta que se dore. Se retira a un plato con papel absorbente y se deja por unos segundos, para escurrir el exceso de aceite y crujir. Sírvelo con limón y disfruta. Te sugerimos lo acompañes con una ensalada de brócoli hervido y puré de papas.',
       cuisine: 'Brasileña',
       image: 'https://www.cocina-brasilena.com/base/stock/Recipe/136-image/136-image_web.jpg',
       diners: 4,
       score: '',
       creator: 'Pele',
       idScorer: '',

    },   
    {
       name: 'Carne de sol',
       ingredients: [{name: 'carne secada al sol', quantity: 500, unit: 'gramos'}, {name: 'leche', quantity: 2000, unit: 'ml'}, {name: 'mantequilla', quantity: 3, unit: 'cucharadas'}, {name: 'ajo', quantity: 3, unit: 'unidades'}],
       instructions: 'La carne secada al sol es carne que ha sido sometida a un proceso de curación por el efecto de la sal y la exposición a la luz solar.Empezamos lavando el trozo de carne bajo el agua corriente. Luego coloca la carne en un bol con 2 litros de leche y dejamos descansar durante 2 a 3 horas. La leche ayuda a suavizar las fibras de la carne y a suavizar el sabor. Después de este tiempo, retiramos la carne y secamos con toallas de papel. Luego se procede a cocinar la carne secada al sol como gustes. Sugerimos, según la tradición, tomar ajo cortado y la mantequilla en una sartén. Fría la carne secada al sol hasta que esté ligeramente dorada por fuera y aún rosada y suave por dentro. Sirva con yuca, judías, arroz o plátano frito.',
       cuisine: 'Brasileña',
       image: 'https://www.cocina-brasilena.com/base/stock/Recipe/130-image/130-image_web.jpg',
       diners: 3,
       score: '',
       creator: 'Neymar',
       idScorer: '',

    },   
    {
       name: 'Tataki de atún con salsa ponzu.',
       ingredients: [{name: 'salsa de soja', quantity: 75, unit: 'ml'}, {name: 'Caldo dashi hecho con alga Kombu y copos de atún katsuobushi', quantity: 50, unit: 'ml'}, {name: 'Zumo de limón un chorrito Jengibre fresco', quantity: 5, unit: 'ml'}, {name: 'Atún fresco en un taco o lingote', quantity: 300, unit: 'ml'}],
       instructions: 'Comenzamos preparando la salsa Ponzu casera. Hacemos un caldo dashi rápido, mezclando los ingredientes y llevando a ebullición. En cuanto empiece a cocer, apagamos el fuego, añadimos los copos de atún deshidratado y dejamos enfriar. Colamos y listo para mezclar con la soja, el limón y el jengibre y así obtener una salsa Ponzu casera. También podemos usar salsa Ponzu comercial. Cortamos el atún en dos lingotes y los metemos dentro de la salsa Ponzu, dejando que el pescado marine dentro de la nevera durante una hora. Una vez marinado, ponemos una plancha al fuego dejando que se caliente muy bien, durante al menos diez minutos. Cuando la plancha está muy muy caliente, marcamos cada lingote de atún escurrido, dejando que se dore la superficie, pero dejando crudo el interior. Pasamos el lingote de atún por la mezcla de semillas de sésamo blanco y negro apretando un poco para que se queden pegadas y cortamos el lingote en rodajas de medio cm de grosor, dejandolas acaballadas unas sobre otras. Servimos nuestro tataki de atún en un plato, añadiendo un poco más de salsa ponzu en el fondo y acompañamos con ensalada de algas wakame. Se puede servir en frío o templado, según nuestros gustos.',
       cuisine: 'Japonesa',
       image: 'https://i.blogs.es/9461de/tataki-atun-ponzu/1366_2000.jpg',
       diners: 4,
       score: '',
       creator: 'Suzuki',
       idScorer: '',

    },    
];

Recipe.create(recetas, (error)=>{
    if(error) {throw(error)}
    mongoose.connection.close();
});

