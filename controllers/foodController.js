const Food = require("../models/food");
const mongoose = require("mongoose");

const addFood = async (req, res) => {
  const { name, calories, protein, fat, carbohydrate, water, vitamins } =
    req.body;
  if (!name || !calories || !protein || !fat)
    return res.status(400).json({ msg: "Something is missing" });
  try {
    const newFood = new Food({
      name,
      calories,
      protein,
      fat,
      carbohydrate,
      water,
      vitamins,
    });
    const data = await newFood.save();
    return res
      .status(201)
      .json({ msg: "Food Item created Successfully", data });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err.message);
  }
};
const updateFood = async (req, res) => {
  const {
    name,
    calories,
    protein,
    fat,
    carbohydrate,
    itemWeight,
    acceptedUnits,
    foodId,
  } = req.body;

  if (!mongoose.Types.ObjectId.isValid(foodId))
    return res.status(400).json({ msg: "Please provide the valid foodId" });

  const data = {};
  if (name) data.name = name;
  if (calories) data.calories = calories;
  if (protein) data.protein = protein;
  if (fat) data.fat = fat;
  if (carbohydrate) data.carbohydrate = carbohydrate;
  if (itemWeight) data.itemWeight = itemWeight;
  if (acceptedUnits) data.acceptedUnits = acceptedUnits;

  const updateFood = await Food.findByIdAndUpdate(foodId, data, { new: true });

  res.status(200).json({
    status: "Success",
    data: {
      updateFood,
    },
  });
};

module.exports = {
  addFood,
  updateFood,
};
