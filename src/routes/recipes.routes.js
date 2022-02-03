//  REQUIRE AND IMPORTS
const express = require('express');
const router = express.Router();

//  MODELS
const Recipe = require('../models/recipe');

//  Get all recipes
router.get('/', async (req, res) => {
    const recipes = await Recipe.find();
    res.json(recipes);
});

//  Get recipe by ID
router.get('/id/:id', async (req, res) => {
    const recipe = await Recipe.findById(req.params.id);
    res.json(recipe);
});

//  Get recipe by ingredient
router.get('/ing/:ingredient', async (req, res) => {
    const ingredient = req.params.ingredient;
    const recipes = await Recipe.find({"ingredients.name": ingredient});
    res.json(recipes);
});

//  Get favorite recipes

//  Get recipes by calories
router.get('/calories/:min/:max', async (req,res) => {
    const min = req.params.min;
    const max = req.params.max || 0;
    const recipes = await Recipe.find({
        $and: [
            {"calories": {$gte: min}}, 
            {"calories": {$lte: max}}
        ]
    });
    res.json(recipes);
});

//  Get vegetarian recipes
router.get('/vegetarian', async (req, res) => {
    const recipes = await Recipe.find({"vegetarian": true});
    res.json(recipes);
});

//  Add a new recipe
router.post('/', async (req, res) => {
    const { title, ingredients, utensils, instructions, vegetarian, calories, time } = req.body;
    const newRecipe = new Recipe({title, ingredients, utensils, instructions, vegetarian, calories, time});
    await newRecipe.save();
    res.json({status: 'Recipe added!'});
});

//  Update a recipe
router.put('/:id', async (req, res) => {
    const { title, ingredients, utensils, instructions, vegetarian, calories, time } = req.body;
    const newTask = { title, ingredients, utensils, instructions, vegetarian, calories, time };
    await Recipe.findByIdAndUpdate(req.params.id, newTask);
    res.json({status: 'Recipe updated'});
});

//   EXPORT
module.exports = router;