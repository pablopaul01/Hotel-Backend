const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true
    },
    capacidadMax: {
        type: Number,
        trim: true,
    },
    descripcion: {
        type: String,
        trim: true
    },
    precio: {
        type: Number,
    },
    imagenes: [
      {
          url: String, 
      }
  ],
    roomNumbers: [{ number: Number, unavailableDates: {type: [Date]}}],
});

const Categories = mongoose.model("Categories", roomSchema);

module.exports = Categories;