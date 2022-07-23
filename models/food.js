const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const foodSchema = new Schema({
  name: {
    type: String,
  },
  calories: {
    type: Number,
  },
  protein: {
    type: String,
  },
  fat: {
    type: String,
  },
  carbohydrate: {
    type: String,
  },
  itemWeight: {
    type: Number,
  },
  acceptedUnits: [{ type: String }],
});

module.exports = mongoose.model("Food", foodSchema);
