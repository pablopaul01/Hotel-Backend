const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    dni: {
        type: Number,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    role: {
        type: String,
        default: "user",
        enum: ["user", "admin"]
    },
    state: {
        type: Boolean,
        default: true,
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;