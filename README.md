# Rolling Gran Hotel API

## Introduction
Este repositorio es la representación en codigo del backend para la API de RollinGranHotel

## Run

### Configurar conexión a la base de datos
Debe ir al archivo `.env` y agregar la url de conexión a la base de datos mongoDB.
Pueden utilizar la siguiente URL, pero necesita obtener su `username`, `password` y `dbName`, incluso el nombre del `cluster` que crearon en sus base de datos.

```
mongodb+srv://<username>:<password>@<cluster>.rx2fg9h.mongodb.net/
```


### Instalar

```
git clone https://github.com/pablopaul01/Hotel-Backend.git
cd Hotel-Backend
npm install
```

### Iniciar API

```
npm run dev
```

## Routes

### Users

```
GET      /usuarios
GET      /usuario/:id
DELETE   /usuario/:id
PUT      /usuario/:id
PUT      /admin/:id
PUT      /desactivar/usuario/:id
```

#### Registrar un nuevo usuario

```
POST     /registrar
```

#### Login Routes

Para loguearse y obtener el token de autenticacion:

```
POST     /login
```

#### Categorias y habitaciones Routes


```
GET      /categorias
GET      /categoria/:id
POST     /crear/categoria
PUT      /categoria/:id
PUT      /categoria/rooms/:id
DELETE   /categoria/:id
DELETE   /categoria/:id/room/:roomId
```


# Tecnologia Principal
* [NodeJS](https://nodejs.org/es/) - FrameWork Back-End

## Frameworks adicionales y otras implementaciones
* [Express](https://expressjs.com/es/) - Infraestructura web rápida, minimalista y flexible para Node.js
* [nodemon](https://nodemon.io) - Actualiza tu servidor de Node cuando realizas cambios en algun archivo
* [Bcrypt](https://www.npmjs.com/package/bcryptjs) - Encriptación
* [JWT](https://jwt.io/) - Generar tokens
* [Mongoose](https://mongoosejs.com/) - Modelado de objetos MongoDB para Node.js
* [morgan](https://www.npmjs.com/package/morgan) - HTTP request logger middleware for node.js
* [passport](http://www.passportjs.org/) - Autenticaciones en NodeJs
* [dotenv](https://www.npmjs.com/package/dotenv) - Variables de Entorno
* [cors](https://www.npmjs.com/package/cors) - Control de Acceso HTTP
* [multer](https://www.npmjs.com/package/multer) - Manejo de archivos en NodeJS
* [cloudinary](https://cloudinary.com/documentation/node_integration) - Almacenamiento de imagenes y videos



# Base de Datos
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - Cloud



## Autores ✒️
* **Farias Eliana**
* **Giacobbe Franco Dario**
* **Salomón Juan Pablo**