var express = require("express");
var router = express.Router();
const User = require('../models/User');
const bcrypt = require("bcryptjs");

router.get("/signup", function (req, res, next){
  res.render("auth/signup");
});

router.post("/signup", async (req, res, next) =>{
  if(req.body.email === "" || req.body.password === ""){
    res.render("auth/signup", {
      errormessage: "Enter username &/or password to sign up",
    });
    return;
  }
  //Llamamos a email y password  a través de req.body (DESECTRUCTURAMOS)
  const {email, password} = req.body;
  //Creamos el Salt y le hacemos el Hash al password
  const salt = bvrypt.genSaltSync(10);
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
      res.redirect("/");
    } else {
      res.render("auth/login", {
        errormessage: "Password incorrecto, prueba de nuevo",
      });
    }
  } catch (error) {}
});

module.exports = router;