const bcrypt = require("bcryptjs");

const encryptPassword = (password) => {
    const hash = bcrypt.hashSync(password, parseInt(process.env.ROUNDS));
    return hash
}


module.exports = {
    encryptPassword
}