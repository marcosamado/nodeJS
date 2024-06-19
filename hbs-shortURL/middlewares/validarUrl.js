const { URL } = require("url");

const validarUrl = (req, res, next) => {
    try {
        const { origin } = req.body;
        const urlFrontend = new URL(origin);
        if (urlFrontend.origin !== "null") {
            if (
                urlFrontend.protocol === "http:" ||
                urlFrontend.protocol === "https:"
            ) {
                return next();
            }
        } else {
            throw new Error("Url no valida");
        }
    } catch (error) {
        res.send("URL NO VALIDA");
    }
};
module.exports = validarUrl;
