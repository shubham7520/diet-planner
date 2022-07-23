require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URL, () => {
  console.log("MongoDB connected");
});
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).send("Hello World");
});

require("./routes/food")(app);
require("./routes/meal")(app);
require("./routes/user")(app);
app.get("*", (req, res) => {
  return res.status(404).send("Page Not Found");
});
app.listen(process.env.PORT || 3000, () => {
  console.log("server Started");
});
