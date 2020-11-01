const mongoose = require('mongoose');
const Recipe = require('../models/Recipe');

mongoose.connect('mongodb://localhost/Proyecto2', { useNewUrlParser: true, useUnifiedTopology: true });

const recetas = [
   {
      name: "Paella",
      ingredients: '1 Cebolla, 5 cucharadas de aceite de oliva, 2 dientes de ajo, 2 tomates, 1 pellizco de sal, 1 cuacharadita de pimentón, unas hebras de azafrán, 4 calamares pequeños, 2 tazas de arroz, 3 tazas de caldo de pesacado, 1 vaso de vino blanco, 12 gambas, 16 mejillones.',
      instructions: 'Empezamos haciendo el sofrito. Para ello, freímos la cebolla bien picada en el aceite caliente. Removemos la cebolla con una cuchara de madera frecuentemente, para que no se queme, y lo dejamos hasta que comience a tomar color, En ese momento, añadimos el ajo bien picado y, antes de que empiece a tomar color, incorporamos los tomates también picados. Agregamos el azúcar (para neutralizar la acidez del tomate), sal a nuestro gusto, el pimentón y unas hebras de azafrán. Revolvemos todos los ingredientes y dejamos que se sofrían hasta que los tomates se reduzcan y comiencen a chisporrotear.Es el momento de cortar los calamares ya limpios. El cuerpo lo cortamos en aros y las patas las dejamos enteras. Añadimos el calamar y lo dejamos cocinar durante unos minutos. Incorporamos el arroz y lo distribuimos por toda la paellera para que los granos se adhieran a los ingredientes. Calentamos el caldo junto con el vino en un cazo aparte, y cuando esté caliente lo vertemos en la paella. Aumentamos la temperatura y añadimos más sal. Volvemos a remover todo para que el arroz quede bien cubierto por el caldo, y cuando llegue a ebullición, bajamos la temperatura y dejamos que se cueza todo a fuego lento de 18 a 20 minutos. Es importante que durante la cocción vayamos moviendo la paellera por toda la superficie de cocción, para que el arroz se cueza uniformemente. Tras 10 minutos de cocción, incorporamos las gambas cocidas por encima hasta que se pongan de color rosa, luego le damos la vuelta para que se hagan por el otro lado. Si vemos que se necesita porque está muy seco, vertemos un poco más de caldo hacia el final de la cocción. Tras los 20 minutos, probamos el arroz y si está bien hecho apagamos el fuego y cubrimos la paellera con un trapo o papel de aluminio para que repose. Cocemos los mejillones al vapor con un dedo de agua en una cazuela con la tapa puesta, y cuando se abran, los colocamos por encima de la paella (desechamos los que no se abran).Servimos la paella tras 5 minutos de reposo.',
      cuisine: "Española",
      image: 'https://recetaspaella.es/img/paella-de-marisco-331.jpg',
      diners: 4,
      score: '5',
      creator: 'Chicote',
      idScorer: '',

   },
   {
       name: 'Guisantes con jamón',
       ingredients: '400 gr de guisantes, 50 gr de jamón, 1 cebolleta, 1 diente de ajo,  1 cucharadita de harina, 3 cucharadas de aceite de oliva, sal al gusto',
       instructions: 'Pon 1 l de agua en una cazuela pequeña, añade una pizca de sal y ponla a cocer. Cuando empiece a hervir, agrega los guisantes y deja cocer a fuego medio el tiempo que indique el envase (aproximadamente 6-8 minutos). Escúrrelos y reserva el caldo. Pela y pica la cebolleta en daditos. Pela y pica el diente de ajo en láminas a lo largo, apílalas y córtalas en tiras, apílalas nuevamente y córtalas en daditos. Corta la loncha de jamón en dados. Pon el aceite en una cazuela, añade el ajo y la cebolleta (picados), rehoga durante un par de minutos, incorpora el jamón y fríelo un poco. Incorpora la harina, mezcla bien y añade los guisantes. Vierte 1/2 vaso del caldo resultante de cocer los guisantes y remueve. Cuando empiece a hervir cocina todo junto durante 3 minutos para que espese la salsa y sirve.',
       cuisine: 'Española',
       image: 'https://www.hogarmania.com/archivos/201702/guisantes-receta-668x400x80xX.jpg',
       diners: 2,
       score: '5',
       creator: 'Arguiñano',
       idScorer: '',

    },
    {
       name: 'Ratatouille',
       ingredients: '3 Zanahorias, 2 cebollas, 1 diente de ajo, 2 berenjenas, 1 calabacín, 2 tomates, 500 ml de salsa de tomate, 1 cucharada de aceite de oliva, 1 pellizco de sal, hierbas provenzales al gusto, 1 ramita de perejil',
       instructions: 'Pela las cebollas y las zanahorias y rállalas. Ponlas a pochar en una sartén con un chorrito de aceite. Cuando estén blandas, pela y pica el diente de ajo y añádelo, dale un par de vueltas y vierte la salsa de tomate. Cocina el conjunto durante 10-15 minutos. Corta las berenjenas y el calabacín en lonchas finas (medio centímetro aproximadamente). Sazona las berenjenas y deja que suelten parte del agua. Sécalas y fríelas brevemente en una sartén con aceite. Fríe también las lonchas de calabacín. Corta los tomates en lonchas. Coloca en el fondo de una tartera la mezcla de zanahoria, cebolla, ajo y salsa de tomate. Extiende bien. Coloca las lonchas de berenjena, las de calabacín y las de tomate sobre la salsa formando filas. Espolvorea con una buena cantidad de hierbas provenzales. Sazona. Hornea a 200ºC durante 30 minutos. Sirve y decora con perejil.',
       cuisine: 'Francesa',
       image: 'https://vod-hogarmania.atresmedia.com/hogarmania/images/images01/2015/10/19/5c000f4e5a2c1100017752bb/1239x697.jpg',
       diners: 4,
       score: '5',
       creator: 'Arguiñano',
       idScorer: '',

    },
    {
       name: 'Risotto a la milanesa',
       ingredients: '1500 ml de caldo de pollo, 400 gr de arroz scotti, 4 chalotas, 125 ml de vino blanco, 1 pellizco de azafrán, 45 gr de queso idiazabal, 30 gr de mantequilla, 1 cucharada de aceite de oliva, sal al gusto',
       instructions: 'Calienta el caldo en una cazuela. Coloca el azafrán en un bol y vierte un poco de caldo caliente para que se hidrate. Resérvalo. Pica finamente las chalotas y rehógalas en una cazuela con un chorrito de aceite (tienen que ablandarse pero no dorarse). Cuando las chalotas estén transparentes, agrega el arroz y rehógalo a fuego medio durante 2-3 minutos. Vierte el vino y sigue removiendo hasta que desaparezca (se evapore). Vierte un par de cucharones de caldo caliente y sigue removiéndolo sin parar. Cuando se seque, agrega otro cucharón y repite el proceso. Sazona. A media cocción incorpora el azafrán a la cazuela. Sigue removiendo y añadiendo caldo hasta que el arroz esté al punto deseado. Añade la mantequilla y remueve bien hasta que los ingredientes queden perfectamente integrados. Ralla el queso y mezcla bien. Sirve enseguida (no necesita reposo) y adorna con unas hojas de perejil. Sirve el risotto.',
       cuisine: 'Italiana',
       image: 'https://www.hogarmania.com/archivos/201802/6127-1-risotto-a-la-milanesa-vertical-xl-XxXx80.jpg',
       diners: 4,
       score: '5',
       creator: 'Binotto',
       idScorer: '',

    },   
    {
       name: 'Pretzels',
       ingredients: '2 Cucharaditas de levadura fresca, 350 ml de agua, 500 gr de haria de fuerza, 1 cucharada de sal, 1 huevo, semillas de sésamo para decorar',
       instructions: 'Esparce la levadura en un tazón con 100ml de agua. Deja 5 minutos revolviendo para que se disuelva. Mezcla la harina y la sal en un recipiente grande. Haz un hoyo en el centro y vierte el agua con levadura. Con una cuchara de madera, haz caer la harina de los costados del recipiente y mezcla con el agua con levadura para formar una pasta blanda. Tapa con un paño de cocina y deja esponjar unos 20 minutos, hasta que fermente y forme espuma. Mezcla con la harina. Añade revolviendo el resto del agua, según sea necesario, hasta formar una masa dura y pegajosa. Vuelca la masa sobre una superficie ligeramente enharinada. Amasa 10 minutos, hasta que la masa quede homogénea y elástica. Pon la masa en un recipiente y tapa con un paño de cocina. Deja fermentar de una hora y media a dos horas, hasta que doble su tamaño. Deshincha y deja reposar durante 10 minutos más.',
       cuisine: 'Alemana',
       image: 'https://www.hogarmania.com/archivos/201410/pretzels-o-lazos-salados-668x400x80xX.jpg',
       diners: 8,
       score: '5',
       creator: 'Schweinsteiger',
       idScorer: '',

    },   
    {
       name: 'BBQ Ribs New York',
       ingredients: '1500 gr de costillas de cerdo, sal al gusto, abundante salsa barbacoa',
       instructions: 'La primera parte, necesaria para que las costillas estén en su punto de sal y tiernas como ninguna, para que prácticamente se deshagan y el hueso se salga limpio sin nada de carne pegada es cocer las costillas en agua salada durante una hora y quince minutos a fuego medio. Para ello, aún contando con una buena cacerola será necesario cortar el costillas por la mitad. Tras la cocción, notaremos que las dos porciones del costillas están muy tiernas, y que los huesos empiezan a asomar al encogerse la carne como consecuencia de la cocción. Tened cuidado al sacar las costillas o se os partirán en más porciones. Precalentar el horno a 180º y disponer las dos mitades de las costillas en una fuente apta para hornear o si lo preferís, en la misma bandeja del horno. Una vez colocadas, cubrir con abundante salsa barbacoa. Mi amigo Marco me recomendó utilizar si es posible salsas americanas auténticas o al menos salsas barbacoa con ingredientes especiales como mostaza y miel. Hornear las costillas durante cuarenta minutos, hasta que la salsa barbacoa haya comenzado a burbujear, y veamos que los huesos de las costillas asoman un poco más, señal de que el plato está terminado.',
       image: 'https://i.blogs.es/95bb6f/alitas-bufalodap/1366_2000.jpg',
       diners: 4,
       score: '5',
       creator: 'Obama',
       idScorer: '', 
      },
       {
       name: 'Alitas de pollo al horno al estilo Búfalo',
       ingredients: '12 alitas de pollo, 15 gr de maicena, 10 gr de pimentón dulce, 1 cayena, 5 gr cebolla deshidratada molida',
       instructions: 'Comenzaremos precalentando el horno a 180 grados. Después forramos una bandeja de horno con papel antiadherente. Partimos en dos las alitas, retirándole la parte de la punta. Las echamos en un bol, les agregamos una cucharada de aceite de oliva y les damos una vuelta para que se impregnen bien y queden engrasadas. Por otra parte en un bol mezclamos la Maicena, el pimentón, la cayena molida, la cebolla y la sal. Mezclamos todo bien y lo echamos en una bolsa de plástico para congelados. Echamos dentro las alitas engrasadas y las rebozamos bien con la mezcla dentro de la bolsa. Las colocamos en la fuente de horno, y las horneamos durante una hora, dándoles la vuelta a los 30 minutos.',
       cuisine: 'Americana',
       image: 'https://i.blogs.es/95bb6f/alitas-bufalodap/1366_2000.jpg',
       diners: 4,
       score: '5',
       creator: 'Obama',
       idScorer: '',

    },   
    {
       name: 'Perritos calientes',
       ingredients: '2 Salchichas tipo Wiener o Frankfurt, 2 panecillos alargados, 1 cebolla, 1 pimiento verde, 2 lochas de bacon',
       instructions: 'En realidad, los perritos calientes originales tan sólo se componen de la salchicha y el panecillo, acompañada de algún tipo de salsa, como ketchup y mostaza, pero he querido hacer algo un poco más elaborado, para completar su inconfundible sabor. Lo primero que debemos hacer es picar la cebolla, el pimiento y el bacon todo muy fino. Luego lo freímos todo en aceite bien caliente, salvo el bacon, que lo doraremos en una sartén él solo. Como los trozos son muy pequeños, os recomiendo que uséis un colador para poder “rescatarlos” del aceite. Una vez tenemos los acompañantes listos, tostamos un poco el pan en la plancha y marcamos las salchichas para que adquieran un aspecto más apetecible y de paso, se calienten. Por último, colocamos la salchicha en el panecillo y rematamos con un poco de cebolla, pimiento y bacon. Como toque final, una buena dosis de ketchup y mostaza.',
       cuisine: 'Americana',
       image: 'https://i.blogs.es/10686c/1366_2000/1366_2000.jpg',
       diners: 2,
       score: '5',
       creator: 'Phelps',
       idScorer: '',
    },
    {
   
    
       name: 'Matambre de carne arrollado',
       ingredients: '2000 gr de matambre, 1 morrón rojo, 1 cebolla mediana, 1 manojo de perejil, 4 dientes de ajo, 2 zanahorias, sal al gusto, ají molido al gusto, 6 huevos duros',
       instructions: 'Primero preparamos la mise en place. Picamos la cebolla, el morrón, el perejil y el ajo. Rallamos las zanahorias. Unimos todos los ingredientes con sal y ají molido (los huevos los reservamos. Mezclamos el relleno del matambre de carne. Se extiende la mezcla por todo el matambre, ya anteriormente salado. Se colocan los huevos y enrollamos. Al enrollar el matambre casero si hay un lado más largo podemos seguir agregando huevos. Se cose con hilo y se hierve de 3 a 4 horas o hasta que al pincharlo esté tierno. Cuando esté el matambre arrollado hervido, se retira del agua y se lo prensa (yo utilicé la misma olla con agua para hacer peso). Se le saca el peso pasados los 30 minutos. Se lleva a frío. Una vez frío, retirar el hilo, y cortar en lonjas. Truco: Si se desea el matambre relleno hervido caliente, meter al horno sin retirar los hilos por 30 minutos. Servir el matambre de carne arrollado al gusto.',
       cuisine: 'Argentina',
       image: 'https://t1.rg.ltmcdn.com/es/images/0/8/7/matambre_de_carne_arrollado_64780_600.jpg',
       diners: 6,
       score: '5',
       creator: 'Messi',
       idScorer: '',

    },   
    {
       name: 'Dulce de leche',
       ingredients: '2500 ml de leche, 1000 gr de azúcar, 1 cucharada de vainilla, 5 gr de bicarbonato',
       instructions: 'Verter la leche en una cacerola, añadir el azúcar, la chaucha de vainilla, revolver bien para disolver el azúcar y llevar a fuego fuerte hasta que suelte el hervor. Cuando empiece a hervir, bajar el fuego y revolver cada tanto hasta que el dulce de leche argentino empiece a espesar. Agregar entonces el bicarbonato y continuar la cocción, revolviendo continuamente, para evitar que se pegue hasta que tome el punto deseado. Según se desee más o menos espeso, probar dejando caer una gota del dulce de leche argentino sobre un plato, y dejar enfriar soplando. Si luego no se corre, estará a punto, si no hay continuar la cocción unos minutos.',
       cuisine: 'Argentina',
       image: 'https://t1.rg.ltmcdn.com/es/images/2/3/4/img_como_hacer_dulce_de_leche_24432_paso_0_600.jpg',
       diners: 4,
       score: '5',
       creator: 'Veronica',
       idScorer: '',

    },   
    {
       name: 'Cachama frita',
       ingredients: '800 gr de pacú, 3 dientes de ajo, sal al gusto, pimienta al gusto, 1 limón, hierbas provenzales deshidratadas al gusto, 250 gr de harina de maíz, 2 cucharadas de harina de trigo',
       instructions: 'Comience por condimentar la cachama (pacú) en un recipiente con las especias, ajo, sal, hierbas, perejil, cebolleta, albahaca, jugo de limón y pimienta. Revolvemos bien y dejamos reposar durante 15 minutos. En un plato hondo, mezclamos la harina de maíz con el trigo. Estos ingredientes se usarán para empanar la cachama. Pasamos el pescado en esta mezcla, presionando ligeramente con los dedos para que se pegue bien. Calienta la sartén con aceite. Cuando esté muy caliente, se pone a freír el pescado en hasta que se dore. Se retira a un plato con papel absorbente y se deja por unos segundos, para escurrir el exceso de aceite y crujir. Sírvelo con limón y disfruta. Te sugerimos lo acompañes con una ensalada de brócoli hervido y puré de papas.',
       cuisine: 'Brasileña',
       image: 'https://www.cocina-brasilena.com/base/stock/Recipe/136-image/136-image_web.jpg',
       diners: 4,
       score: '5',
       creator: 'Pele',
       idScorer: '',

    },   
    {
       name: 'Carne de sol',
       ingredients: '500 gr de carne seca al sol, 2000 ml de leche, 3 cucharadas de mantequilla, 3 dientes de ajo',
       instructions: 'La carne secada al sol es carne que ha sido sometida a un proceso de curación por el efecto de la sal y la exposición a la luz solar.Empezamos lavando el trozo de carne bajo el agua corriente. Luego coloca la carne en un bol con 2 litros de leche y dejamos descansar durante 2 a 3 horas. La leche ayuda a suavizar las fibras de la carne y a suavizar el sabor. Después de este tiempo, retiramos la carne y secamos con toallas de papel. Luego se procede a cocinar la carne secada al sol como gustes. Sugerimos, según la tradición, tomar ajo cortado y la mantequilla en una sartén. Fría la carne secada al sol hasta que esté ligeramente dorada por fuera y aún rosada y suave por dentro. Sirva con yuca, judías, arroz o plátano frito.',
       cuisine: 'Brasileña',
       image: 'https://www.cocina-brasilena.com/base/stock/Recipe/130-image/130-image_web.jpg',
       diners: 3,
       score: '5',
       creator: 'Neymar',
       idScorer: '',
 
    },   
    {
       name: 'Tataki de atún con salsa ponzu.',
       ingredients: '75 ml de salsa de soja, 50 ml de caldo dashi hecho con alga Kombu y copos de atún katsuobushi 5 ml de zumo de limón un chorrito Jengibre fresco, 300 gr de atún fresco en un taco o lingote',
       instructions: 'Comenzamos preparando la salsa Ponzu casera. Hacemos un caldo dashi rápido, mezclando los ingredientes y llevando a ebullición. En cuanto empiece a cocer, apagamos el fuego, añadimos los copos de atún deshidratado y dejamos enfriar. Colamos y listo para mezclar con la soja, el limón y el jengibre y así obtener una salsa Ponzu casera. También podemos usar salsa Ponzu comercial. Cortamos el atún en dos lingotes y los metemos dentro de la salsa Ponzu, dejando que el pescado marine dentro de la nevera durante una hora. Una vez marinado, ponemos una plancha al fuego dejando que se caliente muy bien, durante al menos diez minutos. Cuando la plancha está muy muy caliente, marcamos cada lingote de atún escurrido, dejando que se dore la superficie, pero dejando crudo el interior. Pasamos el lingote de atún por la mezcla de semillas de sésamo blanco y negro apretando un poco para que se queden pegadas y cortamos el lingote en rodajas de medio cm de grosor, dejandolas acaballadas unas sobre otras. Servimos nuestro tataki de atún en un plato, añadiendo un poco más de salsa ponzu en el fondo y acompañamos con ensalada de algas wakame. Se puede servir en frío o templado, según nuestros gustos.',
       cuisine: 'Japonesa',
       image: 'https://i.blogs.es/9461de/tataki-atun-ponzu/1366_2000.jpg',
       diners: 4,
       score: '5',
       creator: 'Suzuki',
       idScorer: '',

    },
    {
      name: 'Tortilla de patatas',
      ingredients: '1 kg de patatas, 2 cebollas, 6 huevos, aceite de oliva, sal',
      instructions: 'Comenzamos pelando las patatas y las cebollas. Pica las cebollas en trozos no muy pequeños, y ponlas a pochar en una sartén con aceite de oliva. Según se esta cocinando la cebolla, ponte a picar las patatas en rodajas (que no sean muy finas y a ser posible todas del mismo grosor para que se hagan por igual) Junta las patatas con la cebolla en la sartén para que se haga todo junto, a fuego medio-lento, salpimentamos al gusto, hasta que las patatas estén blanditas (más que freírse, las patatas tienen que cocerse en el aceite) Escurrimos las patatas y la cebolla con un colador, para eliminar el exceso de aceite. En otro recipiente, bate los 6 huevos; una vez que estén bien batidos, añade las patatas y la cebolla. Una vez mezclado, pon un poco de aceite en la sartén, y vierte la mezcla. Cuaja un poco el huevo, primero a fuego mas fuerte y luego mas suave. A continuación, voltea la tortilla para que se dore por los 2 lados', 
      cuisine: 'Española',
      image: 'https://www.aprendiendoacomersano.com/wp-content/uploads/2020/05/Tortilla-de-patata-y-cebolla-jugosa-1-1080x675.jpg',
      diners: '4',
      score: '5',
      creator: 'Iniesta',
      idScorer: '',
    },
    {
      name: 'Gazpacho andalúz',
      ingredients: '1 kg de tomates maduros, 1 pimiento verde, 1 pepino, media cebolla, 1 diente de ajo, 1 rebanada de pan, 1 cucharadita de sal, 2 cucharaditas de vinagre, 3 cucharadas de aceite de oliva.',
      instructions: 'Lavamos muy bien los tomates y el pimiento ya que los vamos a triturar con piel. Ponemos en el vaso de la batidora o si tenéis un robot de cocina o vaso americano, el pimiento troceado, el tomate troceado, el pepino pelado y troceado, el pan y la cebolleta pelada y en cuartos. Añadimos la sal y el vinagre, trituramos todo durante varios minutos hasta obtener una crema muy fina. Añadimos un poco de aceite de oliva virgen extra y mezclamos de nuevo. En este momento lo podéis servir así o si lo queréis más líquido, añadid agua y mezclad todo de nuevo. Ya sólo queda meterlo en el frigorífico y dejar que se enfríe. Mezclar de nuevo a la hora de servir.', 
      cuisine: 'Española',
      image: 'https://www.pequerecetas.com/wp-content/uploads/2018/06/receta-gazpacho-andaluz.jpg',
      diners: '4',
      score: '5',
      creator: 'Roca',
      idScorer: '',
    },
    {
      name: 'Rodaballo a la plancha con verduras',
      ingredients: '1 rodaballo cortado en lomos, 2 zanahorias, 250 gr de esparragos trigueros, 1 pimiento rojo, 1 pimiento verde, 1 cebolla, 250 gr de champiñones, 100 ml vino blanco, 1 cucharadita de pimentón, sal al gusto, pimienta al gusto, aceito de oliva',
      instructions: 'Comenzamos la receta con la guarnición de nuestro rodaballo a la plancha con verduras En una sartén amplia o en un wok, ponemos un chorrito de aceite y lo calentamos a fuego fuerte. Cuando esté caliente, añadimos las zanahorias cortadas en láminas de tamaño de bocado y los espárragos, sin la parte blanca del tallo. Lo salpimentamos y lo cocinamos aquí durante 5 minutos, salteando o removiendo con bastante frecuencia. Añadimos más verduras a la guarnición. Pasado este tiempo, añadimos aquí el pimiento rojo, el verde, y la cebolla, todo cortado en trozos de tamaño de bocado. Cocinamos todo de la misma forma otros 10 minutos. Después, añadimos los champiñones y seguimos otros 2 minutos, manteniendo siempre el fuego fuerte y removiendo con frecuencia. Terminamos la guarnición de nuestro rodaballo a la plancha con verduras, añadiendo el pimentón y el vino blanco. Hecho esto, echamos a la sartén la cucharadita de pimentón y dejamos que se tueste unos 30 segundos, removiendo de continuo. Después, añadimos el vino blanco. Dejamos que se evapore su alcohol durante alrededor de 1 minuto. Corregimos de sal y de pimienta y removemos bien para que todo se integre. Finalmente, retiramos la sartén del fuego y la reservamos. Cocinamos el rodaballo en una plancha o sartén antiadherente. Para terminar el rodaballo a la plancha con verduras, ponemos un chorrito de aceite en una plancha o en una sartén anti-adherente. Lo calentamos a fuego fuerte y cuando esté caliente, ponemos el pescado, previamente salpimentado. Lo cocinamos durante unos 3 minutos por cada cara, hasta que ambas estén doradas. Después, lo retiramos a un plato y lo acompañamos con el salteado de verduras que teníamos reservado.', 
      cuisine: 'Española',
      image: 'https://www.cocinacaserayfacil.net/wp-content/uploads/2020/07/Rodaballo-a-la-plancha-con-verduras.jpg',
      diners: '4',
      score: '5',
      creator: 'Arguiñano',
      idScorer: '',
    },
    {
      name: 'Patatas con queso al horno',
      ingredients: '1 kg de patatas, 400 gr de queso rallado, 250 ml de nata para cocinar, sal al gusto, pimienta al gusto',
      instructions: 'Preparamos la base de este plato. En una fuente de horno, echamos la suficiente nata para cubrir el fondo, para engrasarlo. Después, sobre ella, añadimos una capa de patatas, peladas y cortadas en láminas finas, cubriendo la nata totalmente, y salpimentamos. Montamos nuestra «torre» de patatas con queso al horno. Agregamos un poco más de nata sobre las patatas, sin llegar a bañarlas. Luego, añadimos sobre ésta una capa de queso rallado. Repetimos el orden de las capas anteriores, hasta llenar la fuente, y cubrimos la última capa de papas con queso rallado, bien repartido sobre su superficie. Horneamos y servimos. Una vez montada nuestra «torre» de papas, llevamos la fuente al horno, previamente calentado a 200ºC, calor arriba, y dejamos cocinar durante unos 50 minutos. Pasado ese tiempo, pinchamos las patatas con queso al horno con un palillo. Si sale limpio, está cocinada. Finalmente, retiramos la fuente del horno, dejamos reposar 5 minutos y servimos.', 
      cuisine: 'Española',
      image: 'https://www.cocinacaserayfacil.net/wp-content/uploads/2020/06/Pastel-de-patata-con-queso.jpg',
      diners: '8',
      score: '5',
      creator: 'Pepe',
      idScorer: '',
    },    
];

Recipe.create(recetas, (error)=>{
    if(error) {throw(error)}
    mongoose.connection.close();
});

