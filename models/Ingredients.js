const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ingredientsSchema = new Schema(
    {
    image: String,
    name: String,
    category: String,
    });

    const Ingredient = mongoose.model('Ingredient', ingredientsSchema);

    module.exports = Ingredient;
