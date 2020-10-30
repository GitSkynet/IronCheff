const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recetasSchema = new Schema(
    {
      name: String,
      ingredients: [{type: Schema.Types.ObjectId, ref: 'Ingredients'}],
      instructions: String,
      cuisine: String,
      image: {type: String, default: 'images.media-allrecipes.com/images/75131.jpg'},
      diners: Number,
      score: Number,
      creator: {type: Schema.Types.ObjectId, ref: 'User'},
      idScorer: Number
    });
    const Recipe = mongoose.model('Recipes', recetasSchema);

    module.exports = Recipe;
