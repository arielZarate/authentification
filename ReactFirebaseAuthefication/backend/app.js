const express = require("express");
const cors = require("cors"); //cors

//CONFIGURANDO VARIA DE ENTORNO
const dotenv = require("dotenv");
dotenv.config();

//const serviceAccount = require(process.env.GOOGLE_APPLICATION_CREDENTIALS);
const bodyParser = require("body-parser");
const app = express();
app.use(cors()); // Habilitar CORS

//routes
const rutaProtegida = require("./src/routes/rutaProtected");
const saludo = require("./src/routes/saludo");

// Middleware para procesar JSON en las solicitudes
app.use(bodyParser.json());

// Ruta protegida que requiere autenticación
app.use("/rutaProtegida", rutaProtegida);
app.use("/saludo", saludo);

module.exports = app;
