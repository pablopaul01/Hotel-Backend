const mongoose = require("mongoose");
const User = require("../models/userSchema.js");
const { encryptPassword, comparePassword } = require("../utils/passwordHandler.js");
const jwt = require("jsonwebtoken");

const getAllUsers = async (req, res) => {

    const users = await User.find()

    try {
        if (!users) {
            return res.status(404).json({
                mensaje: "No se encontraron los usuarios",
                status: 404
            })
        }
        return res.status(201).json({
            mensaje: "Los usuarios se encontraron exitosamente",
            status: 201,
            users
        })
    } catch (error) {
        return res.status(500).json({
            mensaje: "Hubo un error, intente más tarde",
            status: 500
        })
    }
}

const getUserById = async (req, res) => {

    const { id } = req.params;

    const user = await User.findById(id);

    try {
        if (!mongoose.isValidObjectId(id)) {
            return res.status(400).json({
                mensaje: "Id del usuario no válido",
                status: 400
            })
        }
        if (!user) {
            return res.status(400).json({
                mensaje: "Usuario no encontrado",
                status: 400
            })
        }
        return res.status(201).json({
            mensaje: "Usuario encontrado",
            status: 201,
            user
        })

    } catch (error) {
        return res.status(500).json({
            mensaje: "Hubo un error, intente más tarde",
            status: 500
        })
    }
}

const register = async (req, res) => {

    const { name, username, password, dni, phone } = req.body;

    const user = await User.findOne({ username });

    try {
        if (user) {
            return res.status(400).json({
                mensaje: "El usuario ya se encuentra registrado",
                status: 400
            })
        }
        const newUser = new User({
            name,
            username,
            password: encryptPassword(password),
            dni,
            phone,
        })
        await newUser.save();
        return res.status(201).json({
            mensaje: "Usuario creado correctamente",
            status: 201,
            newUser
        })
    } catch (error) {
        return res.status(500).json({
            mensaje: "Hubo un error, intente más tarde",
            status: 500,
            error
        })
    }
}

const deleteUser = async (req, res) => {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);

    try {
        if (!mongoose.isValidObjectId(id)) {
            return res.status(400).json({
                mensaje: "Id del usuario no válido",
                status: 400
            })
        }
        if (!user) {
            return res.status(404).json({
                mensaje: "Usuario no encontrado",
                status: 404
            })
        }
        return res.status(200).json({
            mensaje: "Usuario eliminado correctamente",
            status: 200,
            user
        })

    } catch (error) {
        return res.status(500).json({
            mensaje: "Hubo un error, intente más tarde",
            status: 500,
        })
    }
}

const login = async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne(username);
    const secret = process.env.JWT_SECRET;

    try {
        if (!user) {
            return res.status(404).json({
                mensaje: "Usuario no encontrado",
                status: 404
            })
        }
        comparePassword
    } catch (error) {
        return res.status(500).json({
            mensaje: "Hubo un error, intente más tarde",
            status: 500,
        })
    }
}




module.exports = {
    register,
    getAllUsers,
    getUserById,
    deleteUser
}