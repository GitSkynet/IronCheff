const mongoose = require('mongoose');
const Ingredient = require('../models/Ingredient');

mongoose.connect('mongodb://localhost/Proyecto2', { useNewUrlParser: true, useUnifiedTopology: true });


const Ingredients =[
    {
    name: 'Aceite de girasol',
    category: 'aceites y grasas',
},
    {
    name: 'Aceite de oliva',
    category: 'aceites y grasas',
}, 
    {
    name: 'Aceite de soja',
    category: 'aceites y grasas',
},  
     {
    name: 'Mantequilla',
    category: 'aceites y grasas',
},  
        {
    name: 'Margarina',
    category: 'aceites y grasas',
},
{
    name: 'Azúcar blanco',
    category: 'Azúcares y derivados',
},
{
    name: 'Azúcar moreno',
    category: 'Azúcares y derivados',
},
{
    name: 'Miel',
    category: 'Azúcares y derivados',
},
{
    name: 'Chocolate con leche',
    category: 'Azúcares y derivados',
},
{
    name: 'Chocolate negro',
    category: 'Azúcares y derivados',
},
{
    name: 'Coñac',
    category: 'Bebidas alcohólicas',
},
{
    name: 'Ron',
    category: 'Bebidas alcohólicas',
},
{
    name: 'Whisky',
    category: 'Bebidas alcohólicas',
},
{
    name: 'Cerveza Rubia',
    category: 'Bebidas alcohólicas',
},
{
    name: 'Sidra dulce',
    category: 'Bebidas alcohólicas',
},
{
    name: 'Cava o champán',
    category: 'Bebidas alcohólicas',
},
{
    name: 'Vino blanco',
    category: 'Bebidas alcohólicas',
},
{
    name: 'Vino dulce',
    category: 'Bebidas alcohólicas',
},
{
    name: 'Agua',
    category: 'Bebidas no alcohólicas',
},
{
    name: 'Cacao soluble',
    category: 'Bebidas no alcohólicas',
},
{
    name: 'Café molido',
    category: 'Bebidas no alcohólicas',

},
{
    name: 'Café en polvo',
    category: 'Bebidas no alcohólicas',
},
{
    name: 'Zumo de lima',
    category: 'Bebidas no alcohólicas',
},
{
    name: 'Zumo de manzana',
    category: 'Bebidas no alcohólicas',
},
{
    name: 'Zumo de piña',
    category: 'Bebidas no alcohólicas',
},
{
    name: 'Zumo de pomelo',
    category: 'Bebidas no alcohólicas',
},
{
    name: 'Zumo de tomate',
    category: 'Bebidas no alcohólicas',
},
{
    name: 'Zumo de uva',
    category: 'Bebidas no alcohólicas',
},
{
    name: 'Faisán',
    category: 'Carnes y derivados',
},
{
    name: 'Gallina con piel',
    category: 'Carnes y derivados',
},
{
    name: 'Gallina sin piel',
    category: 'Carnes y derivados',
},
{
    name: 'Oca',
    category: 'Carnes y derivados',
},
{
    name: 'Pato',
    category: 'Carnes y derivados',
},
{
    name: "Pavo, muslo",
    category: 'Carnes y derivados',
},
{
    name: "Pavo,pechuga",
    category: 'Carnes y derivados',
},
{
    name: "Pollo entero, con piel",
    category: 'Carnes y derivados',
},
{
    name: "Pollo entero, sin piel",
    category: 'Carnes y derivados',
},
{
    name: 'Pollo, muslo, con piel',
    category: 'Carnes y derivados',
},
{
    name: 'Pollo, muslo, sin piel',
    category: 'Carnes y derivados',
},
{
    name: 'Pollo, pechuga, sin piel',
    category: 'Carnes y derivados',
},
{
    name: 'Vaca/Buey, falda',
    category: 'Carnes y derivados',
},
{
    name: 'Vaca/buey, redondo',
    category: 'Carnes y derivados',
},
{
    name: 'Vaca/Buey, solomillo',
    category: 'Carnes y derivados',
},
{
    name: 'Caballo, parte',
    category: 'Carnes y derivados',
},
{
    name: 'Jabalí, parte',
    category: 'Carnes y derivados',
},
{
    name: 'Carne de Liebre',
    category: 'Carnes y derivados',
},
{
    name: 'Cerdo, chuleta',
    category: 'Carnes y derivados',
},
{
    name: 'Cerdo, costilla',
    category: 'Carnes y derivados',
},
{
    name: 'Cerdo,lomo',
    category: 'Carnes y derivados',
},
{
    name: 'Cerdo,panceta',
    category: 'Carnes y derivados',
},
{
    name: 'Cerdo,solomillo',
    category: 'Carnes y derivados',
},
{
    name: 'Cerdo,tocino',
    category: 'Carnes y derivados',
},
{
    name: 'Conejo,entero',
    category: 'Carnes y derivados',
},
{
    name: 'Cordero, costilla/chuleta',
    category: 'Carnes y derivados',
},
{
    name: 'Cordero, paletilla',
    category: 'Carnes y derivados',
},
{
    name: 'Cordero, pierna',
    category: 'Carnes y derivados',
},
{
    name: 'Bacon ahumado',
    category: 'Carnes y derivados',
},
{
    name: 'Butifarra blanca',
    category: 'Carnes y derivados',
},
{
    name: 'Foie-gras',
    category: 'Carnes y derivados',
},
{
    name: 'Jamón cocido',
    category: 'Carnes y derivados',
},
{
    name: 'Morcilla, cruda',
    category: 'Carnes y derivados',
},
{
    name: 'Morcilla, cocida',
    category: 'Carnes y derivados',
},
{
    name: 'Mortadela',
    category: 'Carnes y derivados',
},
{
    name: 'Panceta de cerdo, ahumada',
    category: 'Carnes y derivados',
},

{
    name: 'Paté, de campaña',
    category: 'Carnes y derivados',
},

{
    name: 'Paté, de higado de cerdo',
    category: 'Carnes y derivados',
},

{
    name: 'Salami',
    category: 'Carnes y derivados',
},

{
    name: 'Salchicha, tipo frankfurt',
    category: 'Carnes y derivados',
},

{
    name: 'Carne picada',
    category: 'Carnes y derivados',
},

{
    name: 'Salchicha, tipo país',
    category: 'Carnes y derivados',
},

{
    name: 'Chicharrones',
    category: 'Carnes y derivados',
},

{
    name: 'Chistorra',
    category: 'Carnes y derivados',
},

{
    name: 'Chorizo',
    category: 'Carnes y derivados',
},

{
    name: 'Fuet',
    category: 'Carnes y derivados',
},


{
    name: 'Jamón curado',
    category: 'Carnes y derivados',
},

{
    name: 'Lomo embuchado',
    category: 'Carnes y derivados',
},

{
    name: 'Salchichón',
    category: 'Carnes y derivados',
},

{
    name: 'Sobrasada',
    category: 'Carnes y derivados',
},

{
    name: 'Ternera, costilla',
    category: 'Carnes y derivados',
},

{
    name: 'Ternera, costillar',
    category: 'Carnes y derivados',
},

{
    name: 'Ternera, paletilla',
    category: 'Carnes y derivados',
},

{
    name: 'Ternera, redondo',
    category: 'Carnes y derivados',
},

{
    name: 'Ternera, solomillo',
    category: 'Carnes y derivados',
},

{
    name: 'Corazón, de vaca/buey',
    category: 'Carnes y derivados',
},

{
    name: 'Higado, de cordero',
    category: 'Carnes y derivados',
},

{
    name: 'Higado, de pollo',
    category: 'Carnes y derivados',
},

{
    name: 'Higado, de ternera',
    category: 'Carnes y derivados',
},

{
    name: 'Higado, de vaca/buey',
    category: 'Carnes y derivados',
},
{
    name: 'Lengua, de ternera',
    category: 'Carnes y derivados',
},
{
    name: 'Molleja, de ternera',
    category: 'Carnes y derivados',
},
{
    name: 'Riñón, de cerdo',
    category: 'Carnes y derivados',
},
{
    name: 'Riñón, de cordero',
    category: 'Carnes y derivados',
},
{
    name: 'Riñón, de ternera',
    category: 'Carnes y derivados',
},
{
    name: 'Sesos, de cerdo',
    category: 'Carnes y derivados',
},
{
    name: 'Sesos, de cordero',
    category: 'Carnes y derivados',
},
{
    name: 'Sesos, de ternera',
    category: 'Carnes y derivados',
},
{
    name: 'Arroz hinchado, para desayuno',
    category: 'Cereales y derivados',
},
{
    name: 'Avena en copos',
    category: 'Cereales y derivados',
},
{
    name: 'Cereales para el desayuno',
    category: 'Cereales y derivados',
},
{
    name: 'Maíz en copos',
    category: 'Cereales y derivados',
},
{
    name: 'Muesli',
    category: 'Cereales y derivados',
},
{
    name: 'Galleta crujiente',
    category: 'Cereales y derivados',
},
{
    name: 'Galleta, barquillo',
    category: 'Cereales y derivados',
},
{
    name: 'Galleta, tipo Maria',
    category: 'Cereales y derivados',
},
{
    name: 'Arroz blanco',
    category: 'Cereales y derivados',
},
{
    name: 'Arroz integral',
    category: 'Cereales y derivados',
},
{
    name: 'Fécula de maíz',
    category: 'Cereales y derivados',
},
{
    name: 'Germen de trigo',
    category: 'Cereales y derivados',
},
{
    name: 'Harina de trigo',
    category: 'Cereales y derivados',
},
{
    name: 'Harina de trigo, integral',
    category: 'Cereales y derivados',
},
{
    name: 'Harina de centeno',
    category: 'Cereales y derivados',
},
{
    name: 'Quinoa',
    category: 'Cereales y derivados',
},
{
    name: 'Sémola de trigo',
    category: 'Cereales y derivados',
},
{
    name: 'Biscote',
    category: 'Cereales y derivados',
},
{
    name: 'Pan blanco, de barra',
    category: 'Cereales y derivados',
},
{
    name: 'Pan blanco, de molde',
    category: 'Pan blanco, tipo payés',
},
{
    name: 'Pan integral, de barra',
    category: 'Cereales y derivados',
},
{
    name: 'Pan rallado',
    category: 'Cereales y derivados',
},

{
    name: 'Picatostes',
    category: 'Cereales y derivados',
},

{
    name: 'Pasta',
    category: 'Cereales y derivados',
},

{
    name: 'Bollo de leche',
    category: 'Cereales y derivados',
},

{
    name: 'Magdalena',
    category: 'Cereales y derivados',
},

{
    name: 'Masa brisa',
    category: 'Cereales y derivados',
},

{
    name: 'Masa de hojaldre',
    category: 'Cereales y derivados',
},

{
    name: 'Albaricoque, seco',
    category: 'Frutas y derivados',
},

{
    name: 'Ciruela,seca',
    category: 'Frutas y derivados',
},

{
    name: 'Dátil, seco',
    category: 'Frutas y derivados',
},

{
    name: 'Higo,seco',
    category: 'Frutas y derivados',
},

{
    name: 'Melocotón, seco',
    category: 'Frutas y derivados',
},

{
    name: 'Pasa, cruda',
    category: 'Frutas y derivados',
},

{
    name: 'Macedonia de frutas',
    category: 'Frutas y derivados',
},

{
    name: 'Melocotón el almívar',
    category: 'Frutas y derivados',
},

{
    name: 'Pera en almívar',
    category: 'Frutas y derivados',
},

{
    name: 'Piña enlatada',
    category: 'Frutas y derivados',
},

{
    name: 'Albaricoque',
    category: 'Frutas y derivados',
},

{
    name: 'Arándano',
    category: 'Frutas y derivados',
},

{
    name: 'Cereza',
    category: 'Frutas y derivados',
},
{
    name: 'Ciruela',
    category: 'Frutas y derivados',
},

{
    name: 'Frambuesa',
    category: 'Frutas y derivados',
},

{
    name: 'Fresón',
    category: 'Frutas y derivados',
},

{
    name: 'Granada',
    category: 'Frutas y derivados',
},

{
    name: 'Grosella',
    category: 'Frutas y derivados',
},
{
    name: 'Higo',
    category: 'Frutas y derivados',
},

{
    name: 'Kiwi',
    category: 'Frutas y derivados',
},

{
    name: 'Lima',
    category: 'Frutas y derivados',
},

{
    name: 'Limón',
    category: 'Frutas y derivados',
},

{
    name: 'Litchi',
    category: 'Frutas y derivados',
},
{
    name: 'Mandarina',
    category: 'Frutas y derivados',
},

{
    name: 'Mango',
    category: 'Frutas y derivados',
},

{
    name: 'Manzana',
    category: 'Frutas y derivados',
},

{
    name: 'Compota',
    category: 'Frutas y derivados',
},

{
    name: 'Maracuyá',
    category: 'Frutas y derivados',
},
{
    name: 'Melocotón',
    category: 'Frutas y derivados',
},

{
    name: 'Melón',
    category: 'Frutas y derivados',
},

{
    name: 'Membrillo',
    category: 'Frutas y derivados',
},

{
    name: 'Mora',
    category: 'Frutas y derivados',
},

{
    name: 'Naranja',
    category: 'Frutas y derivados',
},
{
    name: 'Nectarina',
    category: 'Frutas y derivados',
},

{
    name: 'Níspero',
    category: 'Frutas y derivados',
},

{
    name: 'Pera',
    category: 'Frutas y derivados',
},

{
    name: 'Papaya',
    category: 'Frutas y derivados',
},

{
    name: 'Piña',
    category: 'Frutas y derivados',
},
{
    name: 'Plátano',
    category: 'Frutas y derivados',
},
{
    name: 'Pomelo',
    category: 'Frutas y derivados',
},
{
    name: 'Sandia',
    category: 'Frutas y derivados',
},
{
    name: 'Uva negra',
    category: 'Frutas y derivados',
},
{
    name: 'Uva verde',
    category: 'Frutas y derivados',
},
{
    name: 'Aceituna negra',
    category: 'Frutas y derivados',
},
{
    name: 'Aceituna verde',
    category: 'Frutas y derivados',
},
{
    name: 'Aguacate',
    category: 'Frutas y derivados',
},
{
    name: 'Castaña',
    category: 'Frutos secos y semillas',
},
{
    name: 'Chufa',
    category: 'Frutos secos y semillas',
},
{
    name: 'ALmendra, cruda',
    category: 'Frutos secos y semillas',
},
{
    name: 'Almendra, frita',
    category: 'Frutos secos y semillas',
},
{
    name: 'Almendra, tostada',
    category: 'Frutos secos y semillas',
},
{
    name: 'Avellana',
    category: 'Frutos secos y semillas',
},
{
    name: 'Cacahuete',
    category: 'Frutos secos y semillas',
},
{
    name: 'Coco',
    category: 'Frutos secos y semillas',
},
{
    name: 'Crema de cacahuete',
    category: 'Frutos secos y semillas',
},
{
    name: 'Nuez, cruda',
    category: 'Frutos secos y semillas',
},
{
    name: 'Piñón',
    category: 'Frutos secos y semillas',
},
{
    name: 'Pipas de girasol',
    category: 'Frutos secos y semillas',
},
{
    name: 'Pistacho',
    category: 'Frutos secos y semillas',
},
{
    name: 'Sésamo',
    category: 'Frutos secos y semillas',
},
{
    name: 'Huevo de gallina',
    category: 'Huevos y derivados',
},
{
    name: 'Clara de huevo',
    category: 'Huevos y derivados',
},
{
    name: 'Huevo de pato',
    category: 'Huevos y derivados',
},
{
    name: 'Leche condensada',
    category: 'Leches y derivados',
},
{
    name: 'Leche de cabra',
    category: 'Leches y derivados',
},
{
    name: 'Leche de oveja',
    category: 'Leches y derivados',
},
{
    name: 'Leche en polvo, desnatada',
    category: 'Leches y derivados',
},
{
    name: 'Leche en polvo, entera',
    category: 'Leches y derivados',
},
{
    name: 'Leche en polvo, semidesnatada',
    category: 'Leches y derivados',
},
{
    name: 'Leche desnatada',
    category: 'Leches y derivados',
},
{
    name: 'Leche entera',
    category: 'Leches y derivados',
},
{
    name: 'Leche semidesnatada',
    category: 'Leches y derivados',
},
{
    name: 'Nata líquida, para cocinar 18%',
    category: 'Nata líquida, para montar, 35%',
},
{
    name: 'Crema pastelera',
    category: 'Leches y derivados',
},
{
    name: 'Cuajada',
    category: 'Leches y derivados',
},
{
    name: 'Flan de huevo',
    category: 'Leches y derivados',
},
{
    name: 'Natillas',
    category: 'Leches y derivados',
},
{
    name: 'Queso fresco, de cabra',
    category: 'Leches y derivados',
},
{
    name: 'Queso fresco, tipo Burgos',
    category: 'Queso fresco, vaca 0% MG',
},
{
    name: 'Requesón',
    category: 'Leches y derivados',
},
{
    name: 'Mató',
    category: 'Leches y derivados',
},
{
    name: 'Queso azul',
    category: 'Leches y derivados',
},
{
    name: 'Queso Babybel',
    category: 'Leches y derivados',
},
{
    name: 'Queso Brie',
    category: 'Leches y derivados',
},
{
    name: 'Queso Camembert 40%',
    category: 'Leches y derivados',
},
{
    name: 'Queso Camembert 20%',
    category: 'Leches y derivados',
},
{
    name: 'Queso Camembert 60%',
    category: 'Leches y derivados',
},
{
    name: 'Queso Cheddar',
    category: 'Leches y derivados',
},
{
    name: 'Queso de cabra, curado',
    category: 'Leches y derivados',
},
{
    name: 'Queso de cabrales',
    category: 'Leches y derivados',
},
{
    name: 'Queso Edam',
    category: 'Leches y derivados',
},
{
    name: 'Queso Emmental',
    category: 'Leches y derivados',
},
{
    name: 'Queso Gouda',
    category: 'Queso Gruyere',
},
{
    name: 'Queso Mahón',
    category: 'Leches y derivados',
},
{
    name: 'Queso Manchego',
    category: 'Leches y derivados',
},
{
    name: 'Queso Parmesano',
    category: 'Leches y derivados',
},
{
    name: 'Queso Roquefort',
    category: 'Leches y derivados',
},
{
    name: 'Queso en lonchas',
    category: 'Leches y derivados',
},
{
    name: 'Queso rallado, gruyere',
    category: 'Leches y derivados',
},
{
    name: 'Mozzarella',
    category: 'Leches y derivados',
},
{
    name: 'Yogur líquido, naturtal',
    category: 'Leches y derivados',
},
{
    name: 'Yogur desnatado, natural',
    category: 'Leches y derivados',
},
{
    name: 'Yogur entero, natural',
    category: 'Leches y derivados',
},
{
    name: 'Guisante',
    category: 'Legumbres y derivados',
},
{
    name: 'Alubia blanca',
    category: 'Legumbres y derivados',
},
{
    name: 'Garbanzo',
    category: 'Legumbres y derivados',
},
{
    name: 'Lenteja',
    category: 'Legumbres y derivados',
},
{
    name: 'Haba',
    category: 'Legumbres y derivados',
},
{
    name: 'Soja',
    category: 'Legumbres y derivados',
},
{
    name: 'Harina de soja',
    category: 'Legumbres y derivados',
},
{
    name: 'Tofu',
    category: 'Legumbres y derivados',
},
{
    name: 'Bogavante',
    category: 'Mariscos y derivados',
},
{
    name: 'Cangrejo',
    category: 'Mariscos y derivados',
},
{
    name: 'Cigala',
    category: 'Mariscos y derivados',
},
{
    name: 'Gamba',
    category: 'Mariscos y derivados',
},
{
    name: 'Langosta',
    category: 'Mariscos y derivados',
},
{
    name: 'Langostino',
    category: 'Mariscos y derivados',
},
{
    name: 'Almeja',
    category: 'Mariscos y derivados',
},
{
    name: 'Berberecho',
    category: 'Mariscos y derivados',
},
{
    name: 'Calamar',
    category: 'Mariscos y derivados',
},
{
    name: 'Mejillón',
    category: 'Mariscos y derivados',
},
{
    name: 'Ostra',
    category: 'Mariscos y derivados',
},
{
    name: 'Pulpo',
    category: 'Mariscos y derivados',
},
{
    name: 'Sepia',
    category: 'Mariscos y derivados',
},
{
    name: 'Vieira',
    category: 'Mariscos y derivados',
},
{
    name: 'Levadura, fresca',
    category: 'Miscelánia',
},
{
    name: 'Caviar',
    category: 'Pescados y derivados',
},
{
    name: 'Sumiri',
    category: 'Pescados y derivados',
},
{
    name: 'Trucha',
    category: 'Pescados y derivados',
},
{
    name: 'Carpa',
    category: 'Pescados y derivados',
},
{
    name: 'Anchoas, en aceite',
    category: 'Pescados y derivados',
},
{
    name: 'Anguila',
    category: 'Pescados y derivados',
},
{
    name: 'Arenque',
    category: 'Pescados y derivados',
},
{
    name: 'Atún',
    category: 'Pescados y derivados',
},
{
    name: 'Bonito',
    category: 'Pescados y derivados',
},
{
    name: 'Boquerón',
    category: 'Pescados y derivados',
},
{
    name: 'Caballa',
    category: 'Pescados y derivados',
},
{
    name: 'Pez espada',
    category: 'Pescados y derivados',
},
{
    name: 'Salmón, ahumado',
    category: 'Pescados y derivados',
},
{
    name: 'Sardina',
    category: 'Pescados y derivados',
},
{
    name: 'Abadejo',
    category: 'Pescados y derivados',
},
{
    name: 'Bacalao',
    category: 'Pescados y derivados',
},
{
    name: 'Cabracho',
    category: 'Pescados y derivados',
},
{
    name: 'Halibut',
    category: 'Pescados y derivados',
},
{
    name: 'Lenguado',
    category: 'Pescados y derivados',
},
{
    name: 'Lubina',
    category: 'Pescados y derivados',
},
{
    name: 'Merluza',
    category: 'Pescados y derivados',
},
{
    name: 'Pescadilla',
    category: 'Pescados y derivados',
},
{
    name: 'Rape',
    category: 'Pescados y derivados',
},
{
    name: 'Rodaballo',
    category: 'Pescados y derivados',
},
{
    name: 'Perejil',
    category: 'Salsas y condimentos',
},
{
    name: 'Pimentón',
    category: 'Salsas y condimentos',
},
{
    name: 'Pimienta',
    category: 'Salsas y condimentos',
},
{
    name: 'Alioli',
    category: 'Salsas y condimentos',
},
{
    name: 'Ketchup',
    category: 'Salsas y condimentos',
},
{
    name: 'Mayonesa',
    category: 'Salsas y condimentos',
},
{
    name: 'Mostaza',
    category: 'Salsas y condimentos',
},
{
    name: 'Salsa roquefort',
    category: 'Salsas y condimentos',
},
{
    name: 'Salsa barbacoa',
    category: 'Salsas y condimentos',
},
{
    name: 'Salsa bechamel',
    category: 'Salsas y condimentos',
},
{
    name: 'Salsa de soja',
    category: 'Salsas y condimentos',
},
{
    name: 'Salsa de tomate',
    category: 'Salsas y condimentos',
},
{
    name: 'Salsa holandesa',
    category: 'Salsas y condimentos',
},
{
    name: 'Salsa vinagreta',
    category: 'Salsas y condimentos',
},
{
    name: 'Sal común',
    category: 'Salsas y condimentos',
},
{
    name: 'Vinagre',
    category: 'Salsas y condimentos',
},
{
    name: 'Boniato',
    category: 'Tubérculos y derivados',
},
{
    name: 'Tapioca',
    category: 'Tubérculos y derivados',
},
{
    name: 'Patata',
    category: 'Tubérculos y derivados',
},
{
    name: 'Puré de patata',
    category: 'Tubérculos y derivados',
},
{
    name: 'Champiñón',
    category: 'Verduras y hortalizas',
},
{
    name: 'Níscalo',
    category: 'Verduras y hortalizas',
},
{
    name: 'Ajo',
    category: 'Verduras y hortalizas',
},
{
    name: 'Cebolla',
    category: 'Verduras y hortalizas',
},
{
    name: 'Puerro',
    category: 'Verduras y hortalizas',
},
{
    name: 'Acelga',
    category: 'Verduras y hortalizas',
},
{
    name: 'Apio',
    category: 'Verduras y hortalizas',
},
{
    name: 'Berro',
    category: 'Verduras y hortalizas',
},
{
    name: 'Cardo, tallo',
    category: 'Verduras y hortalizas',
},
{
    name: 'Cebollino',
    category: 'Verduras y hortalizas',
},
{
    name: 'Col blanca',
    category: 'Verduras y hortalizas',
},
{
    name: 'Col de Bruselas',
    category: 'Verduras y hortalizas',
},
{
    name: 'Col lombarda',
    category: 'Verduras y hortalizas',
},
{
    name: 'Col repollo',
    category: 'Verduras y hortalizas',
},
{
    name: 'Endibia',
    category: 'Verduras y hortalizas',
},
{
    name: 'Escarola',
    category: 'Verduras y hortalizas',
},
{
    name: 'Espárrago blanco',
    category: 'Verduras y hortalizas',
},
{
    name: 'Espárrago verde',
    category: 'Verduras y hortalizas',
},
{
    name: 'Espárrago pelado',
    category: 'Verduras y hortalizas',
},
{
    name: 'Espinaca',
    category: 'Verduras y hortalizas',
},
{
    name: 'Hinojo',
    category: 'Verduras y hortalizas',
},
{
    name: 'Palmito',
    category: 'Verduras y hortalizas',
},
{
    name: 'Soja, germinada',
    category: 'Verduras y hortalizas',
},
{
    name: 'Chirivia',
    category: 'Verduras y hortalizas',
},
{
    name: 'Nabo',
    category: 'Verduras y hortalizas',
},
{
    name: 'Rábano',
    category: 'Verduras y hortalizas',
},
{
    name: 'Zanahoria',
    category: 'Verduras y hortalizas',
},
{
    name: 'Alcachofa',
    category: 'Verduras y hortalizas',
},
{
    name: 'Berenjena',
    category: 'Verduras y hortalizas',
},
{
    name: 'Brécol',
    category: 'Verduras y hortalizas',
},
{
    name: 'Calabacín',
    category: 'Verduras y hortalizas',
},
{
    name: 'Calabaza',
    category: 'Verduras y hortalizas',
},
{
    name: 'Coliflor',
    category: 'Verduras y hortalizas',
},
{
    name: 'Judía verde',
    category: 'Verduras y hortalizas',
},
{
    name: 'Maíz, en mazorca',
    category: 'Verduras y hortalizas',
},
{
    name: 'Pepinillos',
    category: 'Verduras y hortalizas',
},
{
    name: 'Pepino',
    category: 'Verduras y hortalizas',
},
{
    name: 'Pimiento rojo',
    category: 'Verduras y hortalizas',
},
{
    name: 'Pimiento verde',
    category: 'Verduras y hortalizas',
},
{
    name: 'Tomate maduro',
    category: 'Verduras y hortalizas',
},
];

Ingredient.create(Ingredients, (error)=>{
    if(error) {throw(error)}
    mongoose.connection.close();
});
