const router = require("express").Router();
const { register, getAllUsers, getUserById, deleteUser, login, userUpdate } = require("../controllers/userController")


router.get("/usuarios", getAllUsers);
router.get("/usuario/:id", getUserById);
router.delete("/usuario/:id", deleteUser);
router.post("/registrar", register);
router.post("/login", login);
router.put("/usuario/:id", userUpdate);

module.exports = router; 