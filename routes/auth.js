var express = require("express");
var router = express.Router();
const User = require('../models/User');
const bcrypt = require("bcryptjs");
const Recipe = require("../models/Ingredient");

router.get("/signup", function (req, res, next){
  res.render("auth/signup");
});

router.post("/signup", async (req, res, next) =>{
  if(req.body.name === '' || req.body.email === "" || req.body.password === ""){
    res.render("auth/signup", {
      errormessage: "Enter username &/or password to sign up",
    });
    return;
  }
  //Llamamos a email y password  a través de req.body (DESECTRUCTURAMOS)
  const {name, email, password} = req.body;
  //Creamos el Salt y le hacemos el Hash al password
  const salt = bcrypt.genSaltSync(10);
  const hashPass = bcrypt.hashSync(password, salt);
  try {
    const user = await User.findOne({email: email});
    if(user !== null){
      res.render("auth/signup", {
        errormessage: "The email exist! Try with other user",
      });
      return;
    }
    await User.create({
      name,
      email,
      password: hashPass,
    });
    res.redirect("/");
  } catch (error) {
    next(error);
  }
});

router.get("/login", (req, res, next) => {
  res.render("auth/login");
});

router.post("/login", async (req, res, next) => {
  if(req.body.email === "" || req.body.passwword === ""){
    res.render("auth/login", {
      errormessage: "Indica un username y un password para logearte",
    });
    return;
  }
  const {email, password } = req.body;
  try {
    const user = await User.findOne({email: email});
    if(!user){
      res.render("auth/login", {
        errormessage: "The email doesn't exist!",
      });
      return;
    }
    if (bcrypt.compareSync(password, user.password)){
      req.session.currentUser = user;
      console.log('CONSOLE LOOOOOOGGGGGGGG', user)
      res.redirect("/");
    } else {
      res.render("auth/login", {
        errormessage: "Password incorrecto, prueba de nuevo",
      });
    }
  } catch (error) {}
});

router.get("/dashboard", (req, res, next) => {
    res.render("auth/dashboard");
});

router.post("/dashboard", async (req, res, next) => {
  const { name, score, creator, instructions, ingredients} =  req.body
  let receta = await Recipe.findById(id)
  res.render("auth/dashboard", receta);
});



router.get('/createrecipe', (req, res, next) => {
  console.log('ESTO ES RES.LOCALS', res.locals)
  res.render('auth/createrecipes');
})

router.post('/createrecipe', async (req, res, next) => {
  const { name, ingredients, instructions, cuisine, image, diners } =  req.body;
  let creator = (res.locals.currentUserInfo._id);
  try {
    let oneIngredient = await Ingredient.find({name: ingredients});
    ingredients =[];
    ingredients.push(oneIngredient._id);
    Recipe.create({name, ingredients, instructions, cuisine, image, diners, creator});
  } catch (error) {
    console.log('Error creando la receta, prueba en unos instantes', error)
  }
});

router.post('/ingredients', async (req, res, next)=>{
  const { image, name, category } =  req.body;
  try {
    let oneIngredient = await Ingredient.find({name: ingredients});
    ingredients =[];
    ingredients.push(oneIngredient._id);
  } catch (error) {
    console.log('Error obteniendo ingredientes, prueba en unos minutos', error)
  }
});

router.get('/logout', (req, res, next) => {
  req.session.destroy((err) => {
    res.redirect('/')
  })
})

  module.exports = router;

//   const { name, ingredients, instructions, cuisine, image, diners } =  req.body

//   let ingr1 = await Ingredients.find( )
//   ingredients = []
//   ingredients.push(ingr1._id)

//   let creator = req.locals.currentUserInfo._id

//   Recipe.create({name, ingredients, instructions, cuisine, image, diners, creator})
//  let receta = await Recipe.findById(id).populate('User', 'username')
//  console.log(receta);
//  res.render('auth/createrecipes')