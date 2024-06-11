const express = require("express");
const { loginForm, registerForm } = require("../controllers/AuthController");

const router = express.Router();

router.get("/login", loginForm);
router.get("/register", registerForm);

module.exports = router;
