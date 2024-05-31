const express = require("express");
const {
    leerUrls,
    agregarUrl,
    eliminarUrl,
    editarUrl,
} = require("../controllers/HomeController");
const validarUrl = require("../middlewares/validarUrl");

const router = express.Router();

router.get("/", leerUrls);
router.post("/", validarUrl, agregarUrl);
router.get("/eliminar/:id", eliminarUrl);
router.get("/editar/:id", editarUrl);

module.exports = router;
