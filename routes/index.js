var express = require("express");
var router = express.Router();
const Recipe = require('../models/Recipe');


/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("home");
});

router.get("/recipes", async(req, res, next) => {
  try {
    let receta = await Recipe.find()
    res.render("recipes", {receta});
  } catch (error) {
    console.log(error)
  }
});

// router.get('/recipes', (req, res, next) => {
//   Recipe.find()
//     .then(allRecipesFromDB => {
//       // console.log('Retrieved books from DB:', allTheBooksFromDB);
//       res.render('recipes', { books: allRecipesFromDB });
//     })
//     .catch(error => {
//       console.log('Error while getting recipes from the DB: ', error);
//     })
// });

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

router.get('/:id', async (req, res, next) =>{
  let byId = await Recipe.findById(req.params.id)
  console.log('AWAIT RECIPES ID!!', byId)
  res.render('showrecipes', {byId})
})



module.exports = router;