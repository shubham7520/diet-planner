const Meal = require("../models/meal");
const mangoose = require("mongoose");

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

const updateMeal = async (req, res) => {
  const { category, name, foodItems, mealId } = req.body;
  if (!mangoose.Types.ObjectId.isvalid(mealId))
    return res.status(400).json({ msg: "provide valid meald" });
  const update = {
    category,
    name,
    foodItems,
  };
  const data = await Meal.findByIdAndUpdate(mealId, update, { new: true });
  res.status(200).json({
    status: "Success",
    data,
  });
};

module.exports = { addMeal, updateMeal };
