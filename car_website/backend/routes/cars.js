const router = require("express").Router();
let Car = require("../models/car.model");

router.route("/").get((req, res) => {
  Car.find()
    .then((cars) => res.json(cars))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const mileage = req.body.mileage;
  const year = req.body.year;
  const price = req.body.price;
  const summary = req.body.summary;
  const description = req.body.description;

  const newCar = new Car({
    name,
    mileage,
    year,
    price,
    summary,
    description,
  });

  newCar
    .save()
    .then(() => res.json("Car added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Car.findById(req.params.id)
    .then((car) => res.json(car))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
