const { Router } = require('express')
const rutas = Router();

//IMPORTO LOS CONTROLADORES

const { registrarHabitacion } = require('../controllers/controlador.js')
const { buscarHabitacion } = require('../controllers/controlador.js')
const { buscarHabitaciones } = require('../controllers/controlador.js')
const { editarHabitacion } = require('../controllers/controlador.js')
const { eliminarHabitacion } = require('../controllers/controlador.js')
//---------------------------------------------------------------------
const { registrarReserva } = require('../controllers/controlador.js')
const { buscarReserva } = require('../controllers/controlador.js')
const { buscarReservas } = require('../controllers/controlador.js')
const { editarReserva } = require('../controllers/controlador.js')
const { eliminarReserva } = require('../controllers/controlador.js')



rutas.get('/avanzada/v1/habitaciones', buscarHabitaciones)
rutas.get('/avanzada/v1/habitaciones/:id', buscarHabitacion)
rutas.post('/avanzada/v1/habitaciones', registrarHabitacion)
rutas.put('/avanzada/v1/habitaciones/:id', editarHabitacion)
rutas.delete('/avanzada/v1/habitaciones/:id', eliminarHabitacion)
//---------------------------------------------------------------------
rutas.get('/avanzada/v1/reservas', buscarReservas)
rutas.get('/avanzada/v1/reservas/:id', buscarReserva)
rutas.post('/avanzada/v1/reservas', registrarReserva)
rutas.put('/avanzada/v1/reservas/:id', editarReserva)
rutas.delete('/avanzada/v1/reservas/:id', eliminarReserva)

module.exports = rutas
