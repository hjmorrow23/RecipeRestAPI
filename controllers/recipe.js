const db = require("../models");
const Recipe = db.recipe;
exports.addRecipe = async (req, res) => {
    const recipe = new Recipe({
        name: req.body.name,
        ingredients: req.body.ingredients,
        steps: req.body.steps,
        tags: req.body.tags
    })
    try {
        const dataToSave = await recipe.save();
        res.status(200).json(dataToSave)
    } catch(err) {
        res.status(400).json({message: err.message})
    }
};