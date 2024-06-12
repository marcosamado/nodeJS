const User = require("../models/User");
const { nanoid } = require("nanoid");

const loginForm = (req, res) => {
    res.render("login");
};

const registerUser = async (req, res) => {
    console.log(req.body);
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

        res.json(newUser);
    } catch (error) {
        res.json({ error: error.message });
    }
};

const registerForm = (req, res) => {
    res.render("register");
};

module.exports = {
    loginForm,
    registerForm,
    registerUser,
};
