const User = require("../controllers/userSchema.js");

const getAllUsers = (req, res) => {

}

const register = async (req, res) => {

    const { name, username, password,  } = req.body;
    
    await User.findOne({username});
    
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