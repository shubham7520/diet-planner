const mealController = require("../controllers/mealController");

module.exports = (app) => {
  app.post("/add-meal", mealController.addMeal);
};
