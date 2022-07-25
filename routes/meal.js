const mealController = require("../controllers/mealController");
const meal = require("../models/meal");

module.exports = (app) => {
  app.post("/add-meal", mealController.addMeal);
  app.put("/update-meal", mealController.updateMeal);
};
