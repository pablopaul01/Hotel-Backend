const Form = require("../models/formSchema.js");
const sendEmail = require("../utils/emailHandler.js");


const sendForm = async (req, res) => {

    const { name, surname, username, description } = req.body;


    try {      
        const newForm = new Form({
            name,
            username,
            surname,
            description
        })
        await newForm.save();
        sendEmail(newForm);
        return res.status(201).json({
            mensaje: "Formulario enviado correctamente",
            status: 201,
            newForm
        })
    } catch (error) {
        return res.status(500).json({
            mensaje: "Hubo un error, intente más tarde",
            status: 500,
            error
        })
    }
}

module.exports = sendForm