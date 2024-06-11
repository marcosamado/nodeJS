const Url = require("../models/Url");
const { nanoid } = require("nanoid");

const leerUrls = async (req, res) => {
    try {
        const urls = await Url.find().lean();
        res.render("home", { urls: urls });
    } catch (error) {
        console.log(error);
        res.send("fallo algo al cargar las urls");
    }
};

const agregarUrl = async (req, res) => {
    const { origin } = req.body;

    try {
        const url = new Url({ origin: origin, shortURL: nanoid(6) });
        console.log(url);
        await url.save();
        res.redirect("/");
    } catch (error) {
        console.log(error);
        res.send("Error , algo fallo");
    }
};

const eliminarUrl = async (req, res) => {
    const { id } = req.params;
    try {
        await Url.findByIdAndDelete(id);
        res.redirect("/");
    } catch (error) {
        console.log(error);
        res.send("Error , algo fallo");
    }
};

const editarUrlForm = async (req, res) => {
    const { id } = req.params;
    try {
        const url = await Url.findById(id).lean();
        console.log(url);
        res.render("home", { url });
    } catch (error) {
        console.log(error);
    }
};

const editarUrl = async (req, res) => {
    const { id } = req.params;
    const { origin } = req.body;
    try {
        await Url.findByIdAndUpdate(id, { origin: origin });
        res.redirect("/");
    } catch (error) {
        console.log(error);
    }
};

const redireccionamiento = async (req, res) => {
    const { shortURL } = req.params;
    try {
        const url = await Url.findOne({ shortURL: shortURL });
        res.redirect(url);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    leerUrls,
    agregarUrl,
    eliminarUrl,
    editarUrlForm,
    editarUrl,
    redireccionamiento,
};
