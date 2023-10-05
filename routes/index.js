const router = require("express").Router();
const { register, getAllUsers } = require("../controllers/userController")


router.get("/usuarios", getAllUsers)

router.post("/registrar", register);

module.exports = router; 