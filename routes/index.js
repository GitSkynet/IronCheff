var express = require("express");
var router = express.Router();
const Recipe = require('../models/Recipe');


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

// UPDATE RECIPES FUNCTION
router.post('/recipes/:id', function (req, res, next) {
  const updatedMovie = {
    title: req.body.title,
    plot: req.body.plot,
    genre: req.body.genre,
  }
  Movie.update({_id: req.params.id}, updatedMovie, (err, theMovie) => {
    if (err) {return next(err); }

    res.redirect('/movies');
  });
});

// DELETE RECIPES FUNCTION
router.post(':id/delete', async (req, res, next) =>{
  try{
    let elimina = await Recipe.findOneAndRemove({_id: req.params.id})
    console.log('CONSOLE LOG DE ELIMINAAAAAAA' , elimina )
    res.redirect('recipes');
  }catch(err){
      console.log('Error removing recipes from Data Base: ', err);
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

// SCORE UPDATE FUNCTION
router.get("/recipeupdate", function (req, res, next) {
  // primero cojo input desde el req.body (el puntaje que da el user) => userValue
  // busco por ID (Recipe.findById) y lo meto en variable (p.e. recipe)
  // recipeScore = recipe.score
  // recipeQuantity = recipe.IdScore

  // recipeScore = recipeScore + userValue
  // recipeQuantity++

  // let AVG = recipeScore / recipeQuantity

  // Recipe.findByIdAndUpdate(userId, { score: recipeScore, IdScore: recipeQuantity }, {new: true})
  
  // TODO ESTO ES ASINCRONO !!!! :(
});

// FIND RECIPE BY ID
router.get('/:id', async (req, res, next) =>{
  let byId = await Recipe.findById(req.params.id)
  console.log('AWAIT RECIPES ID!!', byId)
  res.render('showrecipes', {byId})
});

module.exports = router;