const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: {type: String, required: true},
  category: {type: String, required: true},
  description: {type: String, required: true},
});

module.exports = Menu = mongoose.model("Menu", itemSchema);
