const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
  },
  calorieRequirement: {
    type: Number,
  },
  mealPlan: [
    {
      type: Schema.Types.ObjectId,
      ref: "Meal",
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
