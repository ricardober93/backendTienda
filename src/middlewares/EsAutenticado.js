const jwt = require('jsonwebtoken');

EsAutenticado = (req, res, next) => {
    const token = req.headers['x-access-token'];

    if (!token) {
        return res.status(401).send('No has enviado tu token');
    }
    const descrifrado = jwt.verify(token, process.env.SECRET_TOKEN);
    req.usuarioId = descrifrado.id
    next();

};


module.exports = EsAutenticado;