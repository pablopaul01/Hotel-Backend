const Categories = require("../models/roomSchema")
const cloudinary = require("cloudinary").v2
const fs = require('fs');
const mongoose = require("mongoose");

const createRoom = async (req, res) => {
    const { title, capacidadMax, descripcion, precio, roomNumbers } = req.body;
    const room = await Categories.findOne({ title });
    const imagenes = [];
    try {
        if (room) {
            return res.status(400).json({
                mensaje: "La categoría ya se encuentra creada",
                status: 400
            })
        }
        for (const file of req.files) {
            const result = await cloudinary.uploader.upload(file.path);
            imagenes.push({
                url: result.secure_url
            });
        }

        const newRoom = new Categories({
            title,
            capacidadMax,
            descripcion,
            precio,
            imagenes,
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
            error: error.message
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
            categorie
        })
    } catch (error) {
        return  res.status(500).json({
            mensaje: "hubo un error, intentelo mas tarde",
            status: 500
        })
    }
}

const addRoomNumber = async (req, res) => {
    const { id } = req.params; 
    const { number, unavailableDates } = req.body; 
    console.log(number)
    try {
        const category = await Categories.findById(id);

        if (!category) {
            return res.status(404).json({
                mensaje: "Categoría no encontrada",
                status: 404
            });
        }
        category.roomNumbers.push({ number, unavailableDates });

        await category.save();

        return res.status(200).json({
            mensaje: "Número de habitación agregado correctamente",
            status: 200,
            category
        });
    } catch (error) {
        return res.status(500).json({
            mensaje: "Hubo un error, inténtelo más tarde",
            status: 500
        });
    }
};


const deleteRoomFromCategory = async (req, res) => {
    const { id, roomId } = req.params;

    try {
        const category = await Categories.findById(id);

        if (!category) {
            return res.status(404).json({
                mensaje: "Categoría no encontrada",
                status: 404
            });
        }
        console.log(category.roomNumbers)
        console.log(roomId)
        const roomIndex = category.roomNumbers.findIndex(room => room.id === roomId);

        if (roomIndex === -1) {
            return res.status(404).json({
                mensaje: "Número de habitación no encontrado en la categoría",
                status: 404
            });
        }

        category.roomNumbers.splice(roomIndex, 1);
        await category.save();

        return res.status(200).json({
            mensaje: "Habitación eliminada correctamente",
            status: 200,
            category
        });
    } catch (error) {
        return res.status(500).json({
            mensaje: "Hubo un error, inténtelo más tarde",
            status: 500
        });
    }
}

  module.exports = {
    createRoom,
    getCategories,
    deleteCategorie,
    getCategorieById,
    updateCategorie,
    addRoomNumber,
    deleteRoomFromCategory
  }