const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
    res.send("visitaste la pagina de inicio");
});

app.get("/prueba", (req, res) => {
    res.send("probando otro get");
});

app.listen(port, () => {
    console.log("servidor funcionando");
});
