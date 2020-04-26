const {
    Schema,
    model
} = require('mongoose');

const bycript = require('bcryptjs')

const usuarioEsquema = new Schema({
    nombre: { type: String },
    apellido: { type: String  },
    password: {  type: String },
    email: { type: String },
    edad: {  type: Number },
    imagen: { type: String },
    rol: { type: String }

}, {
    timestamps: true
});

usuarioEsquema.methods.encriptarContrasenia = async (password) => {
    const salt = await bycript.genSalt(10);
    return bycript.hash(password, salt);
}

usuarioEsquema.methods.relacionar = async function(password) {
    return await bycript.compare(password, this.password)
}



module.exports = model('Usuario', usuarioEsquema);