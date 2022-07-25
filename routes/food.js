const foodController = require("../controllers/foodController");

module.exports = (app) => {
  app.post("/add-food", foodController.addFood);
  app.put("/update-food", foodController.updateFood);
};
