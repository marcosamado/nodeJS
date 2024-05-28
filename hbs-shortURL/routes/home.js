const express = require("express");
const { leerUrls, agregarUrl } = require("../controllers/HomeController");

const router = express.Router();

router.get("/", leerUrls);
router.post("/", agregarUrl);

module.exports = router;
