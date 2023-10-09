const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    username: {
        type: String,
        require: true,
        trim: true,
    },
    password: {
        type: String,
        require: true,
        trim: true
    },
    dni: {
        type: Number,
        require: true
    },
    phone: {
        type: Number,
        require: true
    },
    role: {
        type: String,
        default: "user",
        enum: ["user", "admin"]
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;