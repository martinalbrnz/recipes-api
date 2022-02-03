const mongoose = require('mongoose');
const { Schema } = mongoose;

const recipeSchema = new Schema({
    title: String,
    ingredients: [{name: String, amount: Number}],
    utensils: [{name: String, amount: Number}],
    instructions: [{description: String, order: Number}],
    vegetarian: Boolean,
    calories: Number,
    time: Number,
    dificulty: String
});

module.exports = mongoose.model('Recipe', recipeSchema);