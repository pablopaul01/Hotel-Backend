const router = require("express").Router();
const { register, getAllUsers, getUserById, deleteUser } = require("../controllers/userController")


router.get("/usuarios", getAllUsers);
router.get("/usuario/:id", getUserById);
router.delete("/usuario/:id", deleteUser);
router.post("/registrar", register);

module.exports = router; 