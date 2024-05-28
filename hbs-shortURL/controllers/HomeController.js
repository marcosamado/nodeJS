const Url = require("../models/Url");

const leerUrls = async (req, res) => {
    const urls = [
        { origin: "www.google.com.ar1", shortURL: "asdasd1" },
        { origin: "www.google.com.ar2", shortURL: "asdasd2" },
        { origin: "www.google.com.ar3", shortURL: "asdasd3" },
    ];
    res.render("home", { urls, urls });
};

const agregarUrl = async (req, res) => {
    try {
        const url = new Url({
            origin: "estatico",
        });
        console.log(url);
        res.send(url);
    } catch (error) {
        console.log(error);
        res.send("Error , algo fallo");
    }
};

module.exports = {
    leerUrls,
    agregarUrl,
};
