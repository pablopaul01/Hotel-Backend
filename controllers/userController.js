const User = require("../models/userSchema.js");

const getAllUsers = async (req, res) => {

    const users = await User.find()

    try {
        res.status(201).json({
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

const register = async (req, res) => {

    const { name, username, password, dni, cellPhone } = req.body;
    
    // await User.findOne({username});
    
    try {
        const newUser = new User({
            name,
            username,
            password,
            dni,
            cellPhone,
        })
        await newUser.save();
        res.status(201).json({
            mensaje: "Usuario creado correctamente",
            status: 201,
            newUser
        })
    } catch (error) {
        return res.status(500).json({
            mensaje: "Hubo un error, intente más tarde",
            status: 500
        })
    }
}




module.exports = {
    register,
    getAllUsers
}