var config = require("../database/db");
const path = require("path");


// GET ALLE AUTOS //
const getAllCars = (req, res) => {
  const query = "SELECT * FROM car";

  config.query(query, (err, results) => {
    if (err) {
      console.error("Fout bij het uitvoeren van de query: ", err);
      res
        .status(500)
        .send("Er is een fout opgetreden bij het ophalen van de auto's.");
    } else {
      console.log("Gegevens succesvol opgehaald.");
      res.json({ results });
    }
  });
};


// GET IMAGE FOR A CAR //
const getImageCar = (req, res) => {
  const id = req.params.id;
  const query = "SELECT * FROM car_image WHERE id =" + id;

  config.query(query, (err, results) => {
    if (!results.length) {
      return res.status(404).json({ error: "Geen image auto" });
    }
    if (err) {
      console.error("Fout bij het uitvoeren van de query: ", err);
      res
        .status(500)
        .send("Er is een fout opgetreden bij het ophalen van de auto's.");
    } else {
      console.log("Gegevens succesvol opgehaald.");
      const imagePath = path.join(__dirname, "..", results[0].PATH);
      res.sendFile(imagePath);
    }
  });
};

module.exports = { getAllCars, getImageCar };
