const {Router} = require('express');
const routes = Router();

const {
    obtenerProductos,
    detalleProducto,
    crearProducto,
    editarProducto,
    eliminarProducto
} = require('../controllers/producto.controller');


routes.get('/productos', obtenerProductos)

routes.get('/producto/:id', detalleProducto);

routes.post('/producto/' , crearProducto);

routes.put('/producto/:id' , editarProducto);

routes.delete('/producto/:id' ,eliminarProducto);



routes.post('/pago/' , (req, res)=> {
    res.send('pago')
});


module.exports = routes;