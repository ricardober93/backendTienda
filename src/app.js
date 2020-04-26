const express = require('express');
const flash = require('connect-flash');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();


// Inicializar el servidor
const app = express();

// configuraciones

app.set('port', process.env.PORT || 4000);



// middleware
app.use(cors());
app.use(morgan('dev'))
app.use(express.json());
app.use(flash());

// Variables Globales


// rutas
app.use(require('./routes/productos.routes'))
app.use(require('./routes/user.routes'))



module.exports = app