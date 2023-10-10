const router = require("express").Router();
const { register, getAllUsers, getUserById, deleteUser, login, userUpdate, changeToAdmin } = require("../controllers/userController");
const { createRoom,getCategories, deleteCategorie, getCategorieById,updateCategorie, addRoomNumber, deleteRoomFromCategory } = require("../controllers/roomController");
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
router.post("/crear/categoria",authenticateAdmin, upload.array("imagen", 5), createRoom);
router.get("/categorias",authenticateUser, getCategories);
router.delete("/categoria/:id",authenticateAdmin, deleteCategorie);
router.get("/categoria/:id", getCategorieById); //publica
router.put("/categoria/:id",authenticateAdmin, updateCategorie);
router.delete("/categoria/:id/room/:roomId",authenticateAdmin, deleteRoomFromCategory);
router.put("/categoria/rooms/:id",authenticateAdmin, addRoomNumber);

module.exports = router; 