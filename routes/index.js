const router = require("express").Router();
const { register, getAllUsers, getUserById, deleteUser, login, userUpdate, changeToAdmin, userDisabled } = require("../controllers/userController");
const { createRoom, getCategories, deleteCategorie, getCategorieById, updateCategorie, addRoomNumber, deleteRoomFromCategory, reserveRoomFromCategory } = require("../controllers/roomController");
const sendForm = require("../controllers/sendFormController");
const authenticateAdmin = require("../middlewares/authAdmin");
const authenticateUser = require("../middlewares/authUser");


router.get("/usuarios", authenticateAdmin, getAllUsers);
router.get("/usuario/:id", authenticateAdmin, getUserById);
router.delete("/usuario/:id", authenticateAdmin, deleteUser);
router.put("/usuario/:id", authenticateUser, userUpdate);
router.post("/registrar", register);
router.post("/login", login);
router.put("/admin/:id", authenticateAdmin, changeToAdmin);
router.put("/desactivar/usuario/:id", authenticateAdmin, userDisabled);

const upload = require("../middlewares/multer");


router.post("/crear/categoria", authenticateAdmin, upload.array("imagenes", 5), createRoom);
router.get("/categorias", getCategories);
router.delete("/categoria/:id", authenticateAdmin, deleteCategorie);
router.get("/categoria/:id", getCategorieById); 
router.put("/categoria/:id", authenticateAdmin, updateCategorie);
router.delete("/categoria/:id/room/:roomId", authenticateAdmin, deleteRoomFromCategory);
router.put("/categoria/rooms/:id", authenticateAdmin, addRoomNumber);
router.put("/categoria/:id/room/:roomId", authenticateUser, reserveRoomFromCategory);


router.post("/formulario", sendForm)


module.exports = router; 