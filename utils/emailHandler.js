const nodemailer = require('nodemailer')
const templateConfirm = require('./templateConfirm')

const sendEmailForm = async (newForm) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        port: 587,
        auth: {
            user: "francogiacobbe700@gmail.com",
            pass: "agyf ddzh dckv sldt"
        }
    })

    try {
        const info = await transporter.sendMail(formTemplate(newForm));
        console.log(info);
        return info;
    } catch (err) {
        console.error(err);
    }
}


const formTemplate = (newForm) => {
    return {
        from: "francogiacobbe700@gmail.com",
        to: newForm.username,
        subject: "Consulta Rolling Gran Hotel",
        html: `
        <h1>Hola ${newForm.name} ${newForm.surname}, ¡Gracias por contactar a Rolling Gran Hotel! </h1>
        <br/>
        <p>
        Esta respuesta automática es solo para informarle que recibimos su mensaje y nos pondremos en contacto con usted con una respuesta lo más rápido posible. Durante las próximas horas, hacemos todo lo posible para responder lo más rápido posible, generalmente dentro de un par de horas. Las tardes y los fines de semana pueden llevarnos un poco más de tiempo.</p>
        <br />
        <p>
        Si tiene una pregunta general sobre su estadía en Rolling Gran Hotel, le invitamos a explorar nuestro sitio web <a href="https://rolling-hotel.netlify.app/">RollinGranHotel</a> para ver información más detallada al respecto.</p>
        <br />
        <p>
        Si tiene alguna información adicional que cree que nos ayudará a ayudarlo, no dude en responder a este correo electrónico.</p>
        <hr />
        <span>¡Esperamos conversar pronto!</span>
        <span>Gracias, equipo de atención al cliente RollinGranHotel</span>
        `
    }
}

const sendEmailConfirm = async (data) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        port: 587,
        auth: {
            user: "francogiacobbe700@gmail.com",
            pass: "agyf ddzh dckv sldt"
        }
    })

    try {
        const info = await transporter.sendMail(confirmTemplate(data));
        console.log(info);
        return info;
    } catch (err) {
        console.error(err);
    }
}


const confirmTemplate = (data) => {
    
    return {
        from: "francogiacobbe700@gmail.com",
        to: user.username,
        subject: "Consulta Rolling Gran Hotel",
        html: templateConfirm(data)
    }
}

module.exports = { sendEmailForm, sendEmailConfirm }
