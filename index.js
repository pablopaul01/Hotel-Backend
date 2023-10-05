require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const router = require("./routes")
const dbConnection = require("./database/db");
// const cloudinary = require("cloudinary").v2;
// const jwtStrategy = require ("./passport/jwt")
// const passport = require ("passport")

const app = express();

//midleware
app.use(cors());
app.options('*', cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}));
app.use(morgan("dev"));


//conexion base de datos
dbConnection();

app.listen(8080, ()=>{
    console.log(`Servidor funcionando en el puerto ${8080}`)
})