const express = require("express");
const {
    loginForm,
    registerForm,
    registerUser,
    confirmarCuenta,
    loginUser,
} = require("../controllers/AuthController");

const router = express.Router();

router.get("/login", loginForm);
router.post("/login", loginUser);
router.post("/register", registerUser);
router.post("/register", registerUser);
router.get("/confirmar/:token", confirmarCuenta);
router.get("/register", registerForm);

module.exports = router;
