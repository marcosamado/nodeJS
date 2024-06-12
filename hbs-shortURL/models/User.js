const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
    userName: {
        type: String,
        lowercase: true,
        require: true,
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        require: true,
        index: { index: true },
    },
    password: {
        type: String,
        require: true,
    },
    tokenConfirm: {
        type: String,
        default: null,
    },
    cuentaConfirmada: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model("User", userSchema);
