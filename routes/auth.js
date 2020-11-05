var express = require("express");
var router = express.Router();
const User = require('../models/User');
const bcrypt = require("bcryptjs");
const Ingredient = require("../models/Ingredient");
const Recipe = require("../models/Recipe");
const uploadCloud = require('../configs/cloudinary');


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
    const user = await User.findOne({email: email})
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


router.get('/dashboard', async function (req, res, next) {
  console.log('consolelog3333333333333333', res.locals.currentUserInfo)
  let theUser = await User.findById(res.locals.currentUserInfo._id)
    res.render('auth/dashboard', {theUser});
  });

router.get('/:id/editprofile', function (req, res, next){
  let userProfile = res.locals.currentUserInfo
  res.render('auth/editprofile', {userProfile})
})

router.post('/:id/editprofile', uploadCloud.single("photo"), function (req, res, next){
  const {name} = req.body;
  console.log('NAMEEEEEEEEEEEEEEEEEEEEEE', name)
  const image = req.file.url;
  const imgName = req.file.originalname;
<<<<<<< HEAD
  let userProfile = res.locals.currentUserInfo
User.findByIdAndUpdate({_id: req.params.id}, { $set: {name, image, imgName}})
=======
  let nombre = req.body.name;
  console.log('NOPMBRENUEVOOOOOOOOOOOOOOOOOOOOOOOOO', nombre)
User.findByIdAndUpdate({_id: req.params.id}, { $set: {name, image, imgName}}, {new:true})
>>>>>>> 6a5eed52c227cb0ed6f0cf8cec2d89a5b5c9b732
  .then((updateUser) => {
    console.log('consolelooooogggggggg', res.locals.currentUserInfo)
    res.locals.currentUserInfo = updateUser;
    console.log('consolelooooog22222222222222', res.locals.currentUserInfo)
    res.redirect('/dashboard');
  })
  .catch((error) => {
    console.log('Error actualizando usuario, prueba en unos minutos', error);
  })
})


router.get('/createrecipe', uploadCloud.single("photo"), (req, res, next) => {
  res.render('auth/createrecipes');
})

router.post('/createrecipe', uploadCloud.single("photo"), async (req, res, next) => {
  const { name, instructions, cuisine, diners, typefood, ingredients } = await req.body;
  const image = await req.file.url;
  const imgName = await req.file.originalname;
  try {
    let creator = res.locals.currentUserInfo
    await Recipe.create({name, ingredients, instructions, cuisine, imgName, image, diners, typefood, creator});
    res.redirect('recipes')
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

///////////////////////////////////////////---BACKLOG---///////////////////////////////////////////////////////
// router.get('/ingredients', (req, res, next) => {
//   res.render('auth/createrecipes');
// })

// router.post('/ingredients', async (req, res, next)=>{
//   try {
//     const ingredients = req.body.ingredients;
//     console.log('INGREDIENTEEEEEEEEEEEEEEEEEEEEESSSSSSSSSSSS', ingredients)
//     let oneIngredient = await Ingredient.find({name: ingredients});
//     console.log('INGREDIENTES AÑADIDOOOOOOOSSSSS', oneIngredient)
//     let ingredientsArray =[];
//     oneIngredient.map(el=>{
//       ingredientsArray.push(el.name, el.image, el.category)
//     });
//     // ingredientsArray.push(oneIngredient);
//     console.log('----------------------ingredientsArray------------------------------------', ingredientsArray)
//   } catch (error) {
//     console.log(error);
//   }
// });