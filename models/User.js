// User model here
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {type: String, default: 'Cocinero'},
    email: String,
    password: String,
    image: {type: String, default: 'https://res.cloudinary.com/dmkhzosvq/image/upload/v1604342480/recipes/UserIcon_wsfnk9.png'},
    favourites: [],
    score: Number,
  },
  {
    timestamps: true
  }
);

const User = mongoose.model('User', userSchema);

module.exports = User;