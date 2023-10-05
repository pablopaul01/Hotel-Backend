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
        unique: true
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
    cellPhone: {
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