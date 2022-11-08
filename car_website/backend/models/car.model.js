const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const carSchema = new Schema(
  {
    name: { type: String, required: true },
    mileage: { type: String, required: true },
    year: { type: Number, required: true },
    price: { type: String, required: true },
    summary: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Car = mongoose.model("Car", carSchema);

module.exports = Car;
