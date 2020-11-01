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
    let receta = await Recipe.find()
    res.render("recipes", {receta});
  } catch (error) {
    console.log(error)
  }
});

// HALL OF FAME ROUTE
router.get("/halloffame", (req, res, next) => {
  res.render("halloffame");
});

router.use((req, res, next) => {
// if hay un usuario en sesión (si está logged in)
if (req.session.currentUser) {
  next();
} else {
  res.redirect("/login");
}
});


// UPDATE RECIPES FUNCTIONS
//Método get
router.get('/:id/edit', function (req, res, next) {
  Recipe.findOne({ _id: req.params.id }, (err, theRecipe) => {
    if (err) { return next(err); }

    res.render('auth/edit', {
      title: `Edit ${theRecipe.name}`,
      title: `Edit ${theRecipe.cuisine}`,
      findrecipe: theRecipe
    });
  });
});

router.post('/:id/edit', function (req, res, next) {
  const {name, ingredients, instructions, cuisine, image, diners, score} = req.body;
  Recipe.update({_id: {_id: req.params.id}}, { $set: {name, ingredients, instructions, cuisine, image, diners, score }})
  .then((update) => {
    res.redirect('/recipes');
  })
  .catch((error) => {
    console.log('Error actualizando la receta, prueba en unos minutos', error);
  })
});

// END UPDATE RECIPES FUNCTIONS////

// SCORE UPDATE FUNCTION
// router.get("/recipeupdate", function (req, res, next) {
  // primero cojo input desde el req.body (el puntaje que da el user) => userValue
  // busco por ID (Recipe.findById) y lo meto en variable (p.e. recipe)
  // recipeScore = recipe.score
  // recipeQuantity = recipe.IdScore

  // recipeScore = recipeScore + userValue
  // recipeQuantity++

  // let AVG = recipeScore / recipeQuantity

  // Recipe.findByIdAndUpdate(userId, { score: recipeScore, IdScore: recipeQuantity }, {new: true})
  
  // TODO ESTO ES ASINCRONO !!!! :(
// });

// DELETE RECIPES FUNCTION

// router.get('/:id/delete')

router.post('/:id/delete', async (req, res, next) =>{
  try {
    let eliminar = await Recipe.findByIdAndRemove(req.params.id )
    res.redirect('/recipes')
  } catch (error) {
    console.log('Error eliminando la receta, prueba en unos minutos');
  }
});

// FIND RECIPE BY ID
router.get('/:id', async (req, res, next) =>{
  let byId = await Recipe.findById(req.params.id)
  console.log('AWAIT RECIPES ID!!', byId)
  res.render('showrecipes', {byId})
});

module.exports = router;