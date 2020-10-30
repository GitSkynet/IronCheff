const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ingredientsSchema = new Schema(
    {
    image: {type: String, default: 'images.media-allrecipes.com/images/75131.jpg'},
    name: String,
    category: String,
    });

    const Ingredient = mongoose.model('Ingredient', ingredientsSchema);

    module.exports = Ingredient;
