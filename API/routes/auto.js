const express = require("express");
const router = express.Router();
const { getAllCars, getImageCar } = require("../controllers/CarController");

// GET ALLE AUTOS //
router.get("/", getAllCars);

// GET IMAGE FOR A CAR //
router.get("/image/:id", getImageCar);

// DIT MOET ALTIJD BENEDEN HET IS OM DIE TE EXPORTEREN EN KUNNEN IMPORTEREN IN ANDERE FILES NAMELIJK DE INDEX.JS //
module.exports = router;
