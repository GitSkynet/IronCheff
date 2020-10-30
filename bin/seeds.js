const mongoose = require('mongoose');
const Recipe = require('../models/Recipe');

mongoose.connect('mongodb://localhost/Proyecto2', { useNewUrlParser: true, useUnifiedTopology: true });

const recetas = [
         
];

Recipe.create(recetas, (error)=>{
    if(error) {throw(error)}
    mongoose.connection.close();
});

