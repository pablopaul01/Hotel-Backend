const router = require("express").Router();
const { register, getAllUsers, getUserById, deleteUser, login, userUpdate, changeToAdmin } = require("../controllers/userController");
const { createRoom,getCategories, deleteCategorie, getCategorieById,updateCategorie } = require("../controllers/roomController");
const authenticateAdmin = require("../middlewares/authAdmin");
const authenticateUser = require("../middlewares/authUser");

//rutas de usuarios
router.get("/usuarios", authenticateAdmin, getAllUsers);
router.get("/usuario/:id", authenticateAdmin, getUserById);
router.delete("/usuario/:id", authenticateAdmin, deleteUser);
router.put("/usuario/:id", authenticateUser, userUpdate);
router.post("/registrar", register);
router.post("/login", login);
router.put("/admin/:id", authenticateAdmin, changeToAdmin);
const upload = require("../middlewares/multer")

//rutas de roos
router.post("/crear/categoria", upload.single("imagen"), createRoom);
router.get("/categorias", getCategories);
router.delete("/categoria/:id", deleteCategorie);
router.get("/categoria/:id", getCategorieById);
router.put("/categoria/:id", updateCategorie);
// router.delete("/rooms/:id", authenticateAdmin, deleteUser);
// router.post("/login", login);
// router.put("/admin/:id", authenticateAdmin, changeToAdmin);

module.exports = router; 