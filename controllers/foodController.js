const Food = require("../models/food");

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

module.exports.addFood = addFood;
