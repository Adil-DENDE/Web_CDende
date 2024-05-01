var config = require("../database/db"); // DB CONN
const jwt = require("jsonwebtoken"); // JWT TOKEN
const Joi = require("joi");

// REGISTER VAN EEN NIEUWE USER //
const registerUser = (req, res) => {
  const { email, paswoord, username } = req.body;

  const queryCheck = `SELECT email FROM user WHERE EXISTS (SELECT email FROM user WHERE email = '${email}')`;

  config.query(queryCheck, (err, results) => {
    if (err) {
      res.json({ error: "Iets is foutgelopen !" }).status(404);
    } else {
      if (results.length === 0) {
        const query = `INSERT INTO user VALUES (null, '${username}', 0, '${email}', '${paswoord}')`;
        config.query(query, req.body, (err) => {
          if (err) {
            console.error("Fout bij het uitvoeren van de query: ", err);
            return res.status(500).send("Error");
          } else {
            return res
              .json({ message: "User succesvol toegevoegd !" })
              .status(202);
          }
        });
      } else {
        return res
          .json({ message: "Een account met deze email bestaat !" })
          .status(404);
      }
    }
  });
};

// LOGIN VAN EEN USER //

const authUser = (req, res) => {
  const signupSchema = Joi.object({
    email: Joi.string().email().required(),
    paswoord: Joi.string().min(3).max(10).required(),
    username: Joi.string().required(),
  });

  const { error, result } = signupSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  } else {
    return res.send({ message: "Het is gelukt !" }).status(400);
  }
};

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
    if (!result.length) {
      return res.status(404).json({ error: "Geen user met dit id" });
    }
    if (err) {
      res.send("Er is een probleem", err).status(500);
    } else {
      res.json(result[0]);
    }
  });
};

module.exports = { getAllUsers, getUserOnId, registerUser, authUser };
