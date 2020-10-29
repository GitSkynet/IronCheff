var express = require("express");
var router = express.Router();
const Recipe = require('../models/Recipe');



/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("home");
});

router.get("/recipes", (req, res, next) => {
  try {
    let receta = Recipe.find()
    res.render("recipes", receta);
  } catch (error) {
    
  }
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

module.exports = router;