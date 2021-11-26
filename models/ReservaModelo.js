//se importan utilidades de mongoose
const { model, Schema } = require('mongoose')

//creamos el esquema de datos
const ReservaModelo = Schema({

    nombreCliente: {
        type: String,
        required: true
    },

    apellidoCliente: {
        type: String,
        required: true
    },

    telefonoCliente: {
        type: Number,
        required: true
    },

    fechaInicio: {
        type: String,
        required: true
    },

    fechaFinal: {
        type: String,
        required: true
    },

    numeroPersonas: {
        type: Number,
        required: true
    }

})

module.exports = model('Reservas', ReservaModelo)