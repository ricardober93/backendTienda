userCTR = {}
const jwt = require('jsonwebtoken');
const moment = require('moment')
const UsuarioModel = require('../models/Usuario');

userCTR.registroUsuario = async (req, res) => {

    const {
        nombre,
        email,
        password
    } = req.body

    const usuario = new UsuarioModel({
        email,
        nombre,
        password,
    });
    usuario.password = await usuario.encriptarContrasenia(usuario.password);

    await usuario.save((err) => {
        if (err) res.status(500).send({
            mensaje: `Error al crear el usuario ${err}`
        })
    });

    const token = jwt.sign({
        id: usuario.id
    }, process.env.SECRET_TOKEN, {
        expiresIn: moment().add('14', 'day').unix()
    });

    res.send({
        auth: true,
        token
    })
}

userCTR.perfil = async (req, res) => {

    
    const usuario = await UsuarioModel.findById(req.usuarioId, {
        password: 0
    })
    if (!usuario) {
        return res.status(404).send('Usuario no encontrado');
    }
    res.send({
        usuario
    })
}


userCTR.ingresoUsuario = async (req, res) => {
    const {
        email,
        password
    } = req.body;
    const usuario = await UsuarioModel.findOne({
        email: email
    });
    if (!usuario) {
        return res.status(404).send('El usuario no existe');
    }
    const esValido = await usuario.relacionar(password)
    if (!esValido) {
        return res.status(401).send({
            auth: 'No autozado',
            token: null
        });
    }

   const token = jwt.sign({
        id: usuario._id
    }, process.env.SECRET_TOKEN, {
        expiresIn: moment().add('14', 'day').unix()
    })
    res.send({
        auth:true,
        token,
    })
}

userCTR.cerrarSesion = (req, res) => {
    res.redirect('/iniciarsesion')
};



module.exports = userCTR;