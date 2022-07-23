const User = require("../models/user");

const addUser = async (req, res) => {
  const { name, calorieRequirement, mealPlan } = req.body;
  if (!name || !calorieRequirement || !mealPlan)
    return res.status(400).json({ msg: "Something is Missing" });
  try {
    const newUser = new User({ name, calorieRequirement, mealPlan });
    const data = await newUser.save();
    return res.status(201).json({ msg: "Meal added Successfully", data });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err.message);
  }
};

module.exports.addUser = addUser;
