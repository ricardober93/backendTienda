const {Router} = require('express');
const routes = Router();

const {
    registroUsuario,
    ingresoUsuario,
    perfil,
    cerrarSesion
} = require('../controllers/usuario.controller')

const EsAutenticado = require('../middlewares/EsAutenticado')

routes.post('/registro', registroUsuario );

routes.post('/iniciarsesion', ingresoUsuario );

routes.get('/perfil', EsAutenticado ,perfil );

routes.get('/cerrarsesion', cerrarSesion )


module.exports = routes