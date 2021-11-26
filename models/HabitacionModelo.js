//se importan utilidades de mongoose
const { model, Schema } = require('mongoose')

//creamos el esquema de datos
const HabitacionModelo = Schema({

    nombreHabitacion: {
        type: String,
        required: true
    },

    fotografiaHabitacion: {
        type: String,
        required: true
    },

    descripcion: {
        type: String,
        required: true
    },

    precioAdulto: {
        type: Number,
        required: true
    },

    precioNino: {
        type: Number,
        required: true
    }

})

module.exports = model('Habitaciones', HabitacionModelo)
