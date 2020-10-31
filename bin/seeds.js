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
];

Recipe.create(recetas, (error)=>{
    if(error) {throw(error)}
    mongoose.connection.close();
});

