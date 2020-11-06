var express = require("express");
var router = express.Router();
const Recipe = require('../models/Recipe');
const uploadCloud = require('../configs/cloudinary');


/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("home");
});



/* GET RECIPES PAGE */
router.get("/recipes", async(req, res, next) => {
  try {
    let receta = await Recipe.find().populate('creator')
    res.render("recipes", {receta});
  } catch (error) {
    console.log(error)
  }
});

// DELETE RECIPES FUNCTION

router.post('/recipes/:id/delete', async (req, res, next) =>{
  try {
    let eliminar = await Recipe.findByIdAndRemove(req.params.id )
    res.redirect('/recipes')
  } catch (error) {
    console.log('Error eliminando la receta, prueba en unos minutos');
  }
});

// FIND RECIPE BY ID
router.get('/recipes/:id', async (req, res, next) =>{
  let byId = await Recipe.findById(req.params.id)
  let isCreator = false
  if (byId.creator == res.locals.currentUserInfo._id){
    isCreator = true;
  }
  else{
    isCreator = false;
  }
  console.log('AWAIT RECIPES ID!!', byId)
  res.render('showrecipes', {byId, isCreator})
});

// UPDATE RECIPES FUNCTIONS
//Método get
router.get('/recipes/:id/edit', function (req, res, next) {
  Recipe.findOne({ _id: req.params.id }, (err, theRecipe) => {
    if (err) {
      return next(err);
    }
    res.render('auth/edit', {findrecipe: theRecipe});
  });
});

router.post('/recipes/:id/edit', uploadCloud.single("photo"), function (req, res, next) {
  const {name, ingredients, instructions, cuisine, diners, typefood, score} = req.body;
  const image = req.file.url;
  const imgName = req.file.originalname;
  Recipe.update({_id: {_id: req.params.id}}, { $set: {name, ingredients, instructions, cuisine, image, diners, typefood, score }})
  .then((update) => {
    res.redirect('/recipes');
  })
  .catch((error) => {
    console.log('Error actualizando la receta, prueba en unos minutos', error);
  })
});


router.get('/recipes/plato/:typefood', async (req, res, next)=>{
  try {
    let plato = req.params.typefood;
    let recetasObj = await Recipe.find({typefood: plato})
    console.log('PLATOOOOOOOOOOOO', recetasObj)
    res.render('recipes', {recetasObj})
    if(recetasObj.length == 0){
      res.render('recipes', {errorMessage: 'No hay platos aún, añade algunos para completar!!'})
    }
  } catch (error) {
    console.log('Error buscando platos en la base de datos, prueba en unos minutos', error)
  }
})

router.get('/recipes/cuisine/:cuisine', async (req, res, next) =>{
  try {
    let cuisine = req.params.cuisine;
    let receta = await Recipe.find({cuisine: cuisine})
    console.log('consolelog de COCINAAAAAAA', receta)
    if(receta.length == 0){
      res.render('recipes', {errorMessage: 'No hay recetas aún, añade algunas para completar!!'})
    }
    res.render("recipes", {receta})
  } catch (error) {
    console.log('Error entrando a la categoría, prueba en unos instantes', error)
  }
})

router.get("/aboutus", (req, res, next) => {
  res.render("aboutus");
})

router.use((req, res, next) => {
// if hay un usuario en sesión (si está logged in)
if (req.session.currentUser) {
  next();
} else {
  res.redirect("/login");
}
});

module.exports = router;