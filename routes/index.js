const router = require("express").Router();
const { register, getAllUsers, getUserById, deleteUser, login, userUpdate, changeToAdmin, userDisabled } = require("../controllers/userController");
const authenticateAdmin = require("../middlewares/authAdmin");
const authenticateUser = require("../middlewares/authUser");

//rutas de usuarios
router.get("/usuarios", getAllUsers);
router.get("/usuario/:id", authenticateAdmin, getUserById);
router.delete("/usuario/:id", deleteUser);
router.put("/usuario/:id", authenticateUser, userUpdate);
router.post("/registrar", register);
router.post("/login", login);
router.put("/admin/:id", authenticateAdmin, changeToAdmin);
router.put("/desactivar/usuario/:id", userDisabled);

module.exports = router; 