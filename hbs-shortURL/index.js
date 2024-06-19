const express = require("express");
const session = require("express-session");
const flash = require("connect-flash");
const { create } = require("express-handlebars");
require("dotenv").config();
require("./database/db");

const app = express();

app.use(
    session({
        secret: process.env.SESSIONSECRET,
        resave: false,
        saveUninitialized: false,
        name: "marcos",
    })
);
// ASI FUNCIONAN LAS SESSION Y LAS RUTAS PROTEGIDAS

// app.get("/ruta-protegida", (req, res) => {
//     res.json(req.session.usuario || "Sin sesion de usuario");
// });

// app.get("/registrar-session", (req, res) => {
//     req.session.usuario = "marcossss";
//     res.redirect("/ruta-protegida");
// });

// app.get("/eliminar-session", (req, res) => {
//     req.session.destroy();
//     res.redirect("/ruta-protegida");
// });
app.use(flash());

const hbs = create({
    extname: ".hbs",
    partialsDir: ["views/components"],
});

app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", "./views");

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use("/", require("./routes/home"));
app.use("/auth", require("./routes/auth"));

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Servidor Funcionando..." + port);
});
