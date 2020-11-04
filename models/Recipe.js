const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recetasSchema = new Schema(
    {
      name: String,
      ingredients: String,
      instructions: String,
      cuisine: {type: String, enum: ["Española", "Japonesa", "Argentina", "Catalana"]},
      image: {type: String, default: 'images.media-allrecipes.com/images/75131.jpg'},
      diners: Number,
      score: Number,
      creator: {type: Schema.Types.ObjectId, ref: 'User'},
      idScorer: Number,
      typefood: {type: String, enum: ["Entrantes", "Primero", "Segundo", "Postre"]},
    });
    const Recipe = mongoose.model('Recipes', recetasSchema);

    module.exports = Recipe;

    //Locro lean//
