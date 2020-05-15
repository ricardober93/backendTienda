ProductoCTR = {};
const ProductoModel = require('../models/Producto')


ProductoCTR.obtenerProductos = async (req, res) => {
    const productos = await ProductoModel.find();
    res.json(productos)
};


ProductoCTR.detalleProducto = async (req, res) => {
    const _id = req.params.id
    const producto = await ProductoModel.findById(_id);
    res.json(producto)
};


ProductoCTR.crearProducto = async (req, res) => {
    
    const {
        nombre,
        descripcion,
        precio,
        valoracion,
        sku,
        marca,
        estado,
        creadoPor
    } = req.body;

    const ProductoNuevo = new ProductoModel({
        nombre,
        descripcion,
        precio,
        valoracion,
        sku,
        marca,
        estado,
        creadoPor
    });

    await ProductoNuevo.save();

    res.json(ProductoNuevo)
};

ProductoCTR.editarProducto = async (req, res) => {
    const _id = req.params.id;

    const {
        nombre,
        descripcion,
        precio,
        valoracion,
        sku,
        marca,
        estado,
        creadoPor
    } = req.body;

    const productoEditado = {
        nombre : nombre,
        descripcion : descripcion,
        precio : precio,
        valoracion : valoracion,
        sku : sku,
        marca : marca,
        estado : estado,
        creadoPor: creadoPor
    };


    const producto = await ProductoModel.findOneAndUpdate(_id,  productoEditado );

    res.json(producto);
};

ProductoCTR.eliminarProducto = async (req, res) => {
    const id = req.params.id
    const producto = await ProductoModel.findByIdAndRemove(id);
    res.json(producto)
};


ProductoCTR.compraProducto = async (req, res) => {

}


module.exports = ProductoCTR;