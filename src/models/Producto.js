const {Schema, model} = require('mongoose');

const ProductoModel = new Schema({
    nombre:{
        type:String, 
    },
    descripcion:{
        type:String,
    },
    precio: {
        type: Number,
    },
    imagen: {
        type:String,
    },
    valoracion:{
        type:Number
    },
    sku:{
        type:Number,
    },
    marca:{
        type:String,
    },
    estado:{
        type:String,
    },
    creadoPor:{
        type:String
    }
},{
    timestamps:true
})


module.exports = model('Producto', ProductoModel);

