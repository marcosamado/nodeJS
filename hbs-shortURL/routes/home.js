const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    const urls = [
        { origin: "www.google.com.ar1", shortURL: "asdasd1" },
        { origin: "www.google.com.ar2", shortURL: "asdasd2" },
        { origin: "www.google.com.ar3", shortURL: "asdasd3" },
    ];
    res.render("home", { urls, urls });
});

module.exports = router;
