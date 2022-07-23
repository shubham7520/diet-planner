const Meal = require("../models/meal");

const addMeal = async (req, res) => {
  const { category, name, foodItems } = req.body;
  if (!category || !name || !foodItems)
    return res.status(400).json({ msg: "Somthing is Missing" });
  try {
    const newMeal = new Meal({ category, name, foodItems });
    const data = await newMeal.save();
    return res.status(201).json({ msg: "Meal added Successfully", data });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err.message);
  }
};

const updateMeal = async (req, res) => {};

module.exports.addMeal = addMeal;
