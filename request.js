const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
  petName: { type: String, required: true },
  username: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Request", requestSchema);
