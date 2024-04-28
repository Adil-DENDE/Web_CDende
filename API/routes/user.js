const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getUserOnId,
  registerUser,
  authUser,
} = require("../controllers/UserController");

// REGISTER VAN EEN NIEUWE USER //
router.get("/register", registerUser);

// LOGIN VAN EEN USER //
router.get("/auth", authUser);

// GET ALLE USERS //
router.get("/", getAllUsers);
// GET EEN BEPAALDE USER //
router.get("/:id", getUserOnId);

// DIT MOET ALTIJD BENEDEN HET IS OM DIE TE EXPORTEREN EN KUNNEN IMPORTEREN IN ANDERE FILES NAMELIJK DE INDEX.JS //
module.exports = router;
