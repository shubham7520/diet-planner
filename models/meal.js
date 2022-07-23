const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mealSchema = new Schema({
  category: {
    type: String,
  },
  name: { type: String },
  foodItems: [
    {
      type: Schema.Types.ObjectId,
      ref: "Food",
    },
  ],
});

module.exports = mongoose.model("Meal", mealSchema);
