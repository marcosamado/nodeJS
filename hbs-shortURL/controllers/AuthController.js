const User = require("../models/User");
const { nanoid } = require("nanoid");

const registerForm = (req, res) => {
    res.render("register");
};

const registerUser = async (req, res) => {
    const { userName, email, password } = req.body;
    try {
        const userDB = await User.findOne({ email: email });
        if (userDB) throw new Error("Ya existe el usuario");

        const newUser = new User({
            userName,
            email,
            password,
            tokenConfirm: nanoid(),
        });
        await newUser.save();

        res.redirect("/auth/login");
    } catch (error) {
        res.json({ error: error.message });
    }
};

const confirmarCuenta = async (req, res) => {
    const { token } = req.params;

    try {
        const user = await User.findOne({ tokenConfirm: token });
        if (!user) throw new Error("No existe este Usuario");

        user.cuentaConfirmada = true;
        user.tokenConfirm = null;

        await user.save();

        res.redirect("/auth/login");
    } catch (error) {
        res.json({ error: error.message });
    }
};

const loginForm = (req, res) => {
    res.render("login");
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) throw new Error("No Existe ese email");

        if (!user.cuentaConfirmada)
            throw new Error("Todavia no validaste tu cuenta");

        if (!(await user.comparePassword(password)))
            throw new Error("Contraseña incorrecta");

        res.redirect("/");
    } catch (error) {
        console.log(error);
        res.send(error.message);
    }
};

module.exports = {
    loginForm,
    registerForm,
    registerUser,
    confirmarCuenta,
    loginUser,
};
