const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  name: String,
  mileage: String,
  year: String,
  price: String,
  summary: String,
  description: String,
  img: {
    data: Buffer,
    contentType: String,
  },
});

module.exports = CarModel = mongoose.model("Car", carSchema);
