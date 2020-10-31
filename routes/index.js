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

router.get('/recipes/:Id', (req, res, next) => {
  let recipeId = req.params.recipekId;
  console.log(recipeId)
  if (!/^[0-9a-fA-F]{24}$/.test(recipeId)) { 
    return res.status(404).render('not-found');
  }
  Recipe.findOne({'_id': recipeId})
    .populate('name')
    .then(recipe => {
      if (!recipe) {
          return res.status(404).render('not-found');
      }
      res.render("showrecipes", { recipeId })
    })
    .catch(next)
});


module.exports = router;