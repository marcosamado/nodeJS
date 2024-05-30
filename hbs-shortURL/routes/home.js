const express = require("express");
const {
    leerUrls,
    agregarUrl,
    eliminarUrl,
} = require("../controllers/HomeController");

const router = express.Router();

router.get("/", leerUrls);
router.post("/", agregarUrl);
router.get("/eliminar/:id", eliminarUrl);

module.exports = router;
