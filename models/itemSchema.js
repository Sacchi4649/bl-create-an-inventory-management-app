const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
