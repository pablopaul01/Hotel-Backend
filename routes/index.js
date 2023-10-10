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
router.post("/crear/categoria", upload.array("imagen", 5), createRoom);
router.get("/categorias", getCategories);
router.delete("/categoria/:id", deleteCategorie);
router.get("/categoria/:id", getCategorieById); //publica
router.put("/categoria/:id", updateCategorie);
router.delete("/categoria/:id/room/:roomId", deleteRoomFromCategory);
router.put("/categoria/rooms/:id", addRoomNumber);

module.exports = router; 