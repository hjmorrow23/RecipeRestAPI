const express = require('express');
const controller = require("../../controllers/recipe");

const router = express.Router()

//Post Method
router.post('/', controller.addRecipe)

//Get all Method
router.get('/', controller.getAllRecipes)

//Get by ID Method
router.get('/:id', controller.getRecipeById)

//Update by ID Method
router.put('/:id', controller.updateRecipe)

//Delete by ID Method
router.delete('/:id', controller.deleteRecipe)

module.exports = router;