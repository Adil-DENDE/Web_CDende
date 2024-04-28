var config = require("../database/db");


// GEEFT ALLE USERS TERUG //
const getAllUsers = (req, res) => {
  const query = "SELECT * FROM user";

  config.query(query, (err, results) => {
    if (err) {
      console.error("Fout bij het uitvoeren van de query: ", err);
      res
        .status(500)
        .send("Er is een fout opgetreden bij het ophalen van de gebruikers.");
    } else {
      console.log("Gegevens succesvol opgehaald.");
      res.json(results);
    }
  });
};


// GEEFT EEN BEPAALDE USER TERUG //
const getUserOnId = (req, res) => {
  const id = req.params.id;
  const query = "SELECT * FROM user where user_id =" + id;

  config.query(query, (err, result) => {
    if (err) {
      res.send("Er is een probleem", err).status(500);
    } else {
      res.json(result[0]);
    }
  });
};

module.exports = { getAllUsers, getUserOnId };
