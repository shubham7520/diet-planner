const userController = require("../controllers/userController");

module.exports = (app) => {
  app.post("/add-user", userController.addUser);
};
