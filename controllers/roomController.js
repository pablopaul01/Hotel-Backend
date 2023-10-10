const Categories = require("../models/roomSchema")
const cloudinary = require("cloudinary").v2

const createRoom = async (req, res) => {
    const { title, capacidadMax, descripcion, precio, roomNumbers } = req.body;
    console.log("roomNumbers", roomNumbers);
    // const { path } = req.file;
    const room = await Categories.findOne({ title });
    // const cloudimg = await cloudinary.uploader.upload(path)
    try {
        if (room) {
            return res.status(400).json({
                mensaje: "La categoría ya se encuentra creada",
                status: 400
            })
        }
        const newRoom = new Categories({
            title,
            capacidadMax,
            descripcion,
            precio,
            // imagen: cloudimg.secure_url,
            roomNumbers,
        })
        await newRoom.save();
        return res.status(201).json({
            mensaje: "Categoria creada correctamente",
            status: 201,
            newRoom
        })
    } catch (error) {
        return res.status(500).json({
            mensaje: "Hubo un error, intente más tarde",
            status: 500,
            error
        })
    }
}

const getCategories = async (req, res) => {

    const categories = await Categories.find()

    try {
        if (!categories) {
            return res.status(404).json({
                mensaje: "No se encontraron la categoria",
                status: 404
            })
        }
        return res.status(201).json({
            mensaje: "Las categorias se encontraron exitosamente",
            status: 201,
            categories
        })
    } catch (error) {
        return res.status(500).json({
            mensaje: "Hubo un error, intente más tarde",
            status: 500
        })
    }
}


const deleteCategorie = async (req, res) => {
    const { id } = req.params;
    const categorie = await Categories.findByIdAndDelete(id);

    try {
        if (!mongoose.isValidObjectId(id)) {
            return res.status(400).json({
                mensaje: "Id de la categoria no válido",
                status: 400
            })
        }
        if (!categorie) {
            return res.status(404).json({
                mensaje: "Categoria no encontrada",
                status: 404
            })
        }
        return res.status(200).json({
            mensaje: "Categoria eliminada correctamente",
            status: 200,
            categorie
        })

    } catch (error) {
        return res.status(500).json({
            mensaje: "Hubo un error, intente más tarde",
            status: 500,
        })
    }
}

const getCategorieById = async (req, res) => {

    const { id } = req.params;

    const categorie = await Categories.findById(id);
    try {
        if (!categorie) {
            return res.status(400).json({
                mensaje: "Categoria no encontrado",
                status: 400
            })
        }
        return res.status(201).json({
            mensaje: "Categoria encontrado",
            status: 201,
            categorie
        })

    } catch (error) {
        return res.status(500).json({
            mensaje: "Hubo un error, intente más tarde",
            status: 500
        })
    }
}

const updateCategorie = async (req, res) => {
    const { id } = req.params;
    const { title, capacidadMax, descripcion, precio, roomNumbers } = req.body
    try {
        // if (!mongoose.isValidObjectId(id)){
        //     return res.status(400).json({
        //         mensaje: "El id no es valido",
        //         status: 400
        //     })
        // }
        const categorie = await Categories.findByIdAndUpdate(id,{
            title,
            capacidadMax,
            descripcion,
            precio,
            roomNumbers,
        }, {new: true})

        console.log(categorie)
        if (!categorie){
                return res.status(404).json({
                    mensaje: "Categoria no encontrado",
                    status:404
                })
            }
        return res.status(200).json({
            mensaje: "Categoria actualizada correctamente",
            status: 200,
            curso
        })
    } catch (error) {
        return  res.status(500).json({
            mensaje: "hubo un error, intentelo mas tarde",
            status: 500
        })
    }
}


const updateRoom = async (req, res, next) => {
    try {
      const updatedRoom = await Room.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedRoom);
    } catch (err) {
      next(err);
    }
  };
const updateRoomAvailability = async (req, res, next) => {
    try {
      await Room.updateOne(
        { "roomNumbers._id": req.params.id },
        {
          $push: {
            "roomNumbers.$.unavailableDates": req.body.dates
          },
        }
      );
      res.status(200).json("Room status has been updated.");
    } catch (err) {
      next(err);
    }
  };
const deleteRoom = async (req, res, next) => {
    const hotelId = req.params.hotelid;
    try {
      await Room.findByIdAndDelete(req.params.id);
      try {
        await Hotel.findByIdAndUpdate(hotelId, {
          $pull: { rooms: req.params.id },
        });
      } catch (err) {
        next(err);
      }
      res.status(200).json("Room has been deleted.");
    } catch (err) {
      next(err);
    }
  };
const getRoom = async (req, res, next) => {
    try {
      const room = await Room.findById(req.params.id);
      res.status(200).json(room);
    } catch (err) {
      next(err);
    }
  };
const getRooms = async (req, res, next) => {
    try {
      const rooms = await Room.find();
      res.status(200).json(rooms);
    } catch (err) {
      next(err);
    }
  };

  module.exports = {
    // getRooms,
    // getRoom,
    // deleteRoom,
    // updateRoomAvailability,
    // updateRoom,
    createRoom,
    getCategories,
    deleteCategorie,
    getCategorieById,
    updateCategorie
  }