const router = require("express").Router();
const userController = require("./controller");

// Gestion des différentes routes (accès) utilisateurs
router.post("/", userController.registerNewUser);

module.exports = router;