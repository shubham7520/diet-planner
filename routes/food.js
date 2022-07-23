const foodController = require("../controllers/foodController");

module.exports = (app) => {
  app.post("/add-food", foodController.addFood);
};
