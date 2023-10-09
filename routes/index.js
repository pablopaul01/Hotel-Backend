const router = require("express").Router();
const { register, getAllUsers, getUserById, deleteUser, login, userUpdate } = require("../controllers/userController");
const authenticateAdmin = require("../middlewares/authAdmin");
const authenticateUser = require("../middlewares/authUser");

//rutas de usuarios
router.get("/usuarios", authenticateAdmin, getAllUsers);
router.get("/usuario/:id", authenticateAdmin, getUserById);
router.delete("/usuario/:id", authenticateAdmin, deleteUser);
router.put("/usuario/:id", authenticateUser, userUpdate);
router.post("/registrar", register);
router.post("/login", login);

module.exports = router; 