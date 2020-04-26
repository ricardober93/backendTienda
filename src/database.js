const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/tiendavirtual', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
});

const coneccion = mongoose.connection;

coneccion.once('open', ()=>{
    console.log('base de datos conectada')
})


