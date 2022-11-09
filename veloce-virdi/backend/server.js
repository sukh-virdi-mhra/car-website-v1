const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const multer = require("multer");
const carSchema = require("./models/car.model");
const fs = require("fs");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose
  .connect(uri, { useUnifiedTopology: true })
  .then(console.log("Connected to the server"))
  .catch((err) => console.log(err));

app.get("/cars", async (req, res) => {
  const allData = await carSchema.find();
  res.json(allData);
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/cars", upload.single("testImage"), (req, res) => {
  const saveCarSchema = new carSchema({
    name: req.body.name,
    mileage: req.body.mileage,
    year: req.body.year,
    price: req.body.price,
    summary: req.body.summary,
    description: req.body.description,
    img: {
      data: fs.readFileSync("uploads/" + req.file.filename),
      contentType: "image/png",
    },
  });
  saveCarSchema
    .save()
    .then((res) => {
      console.log("schema and image is saved");
    })
    .catch((err) => {
      console.log(err, "error has occured");
    });
  res.send("image is saved");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
