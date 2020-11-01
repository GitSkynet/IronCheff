// User model here
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {type: String, default: 'Cocinero'},
    email: String,
    password: String,
    image: {type: String, default: 'images.media-allrecipes.com/images/75131.jpg'},
    favourites: []
  },
  {
    timestamps: true
  }
);

const User = mongoose.model('User', userSchema);

module.exports = User;