const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  age: { type: Number, required: true },
  image: { type: String, default: "/images/default.png" }
});

module.exports = mongoose.model("Pet", petSchema);
