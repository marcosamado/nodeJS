const express = require("express");
const app = express();
const port = 5000;
const fs = require("fs");
const { fileURLToPath } = require("url");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// app.get("/formulario", (req, res) => {
//     console.log(req.query);
//     res.send("Formulario enviado...");
// });

app.post("/formulario", (req, res) => {
    console.log(req.body);

    const { nombre, apellido } = req.body;

    const data = `Nombre: ${nombre}\nApellido: ${apellido} `;
    const dir = "public/archivos";
    const filePath = `${dir}/DatosFormulario.txt`;

    if (!nombre || !apellido) return res.redirect("/error.html");
    fs.writeFile(filePath, data, (error) => {
        if (error) return res.send("Fallo al crear el archivo");

        // res.send("Se creo el archivo con exito");
        res.download(__dirname + `/${filePath}`);
    });
});

app.get("/", (req, res) => {
    res.send("visitaste la pagina de inicio");
});

app.get("/prueba", (req, res) => {
    res.send("probando otro get");
});

app.listen(port, () => {
    console.log("servidor funcionando");
});
