//Encargado de realizar las operaciones en la BD

//IMPORTAR EL MODELO DE DATOS PARA PDOER OPERAR EN BD
const HabitacionModelo = require('../models/HabitacionModelo.js')
const ReservaModelo = require('../models/ReservaModelo.js')


//1. Funcion para insertar datos
async function insertarHabitacion(datos) {

    let habitacionNuevo = new HabitacionModelo(datos)
    return await habitacionNuevo.save()

}

//2. Funcion para buscar 1 Jugador
async function leerHabitacion(id) {

    let habitacionBuscado = await HabitacionModelo.findById(id)
    return habitacionBuscado

}

//3. Funcion para buscar TODOS los Jugadores
async function leerHabitaciones() {

    let habitacionesBuscados = await HabitacionModelo.find()
    return habitacionesBuscados

}


//4. Funcion para eliminar un jugador
async function borrarHabitacion(id) {

    return await HabitacionModelo.findByIdAndDelete(id)

}

//5. Funcion para editar un jugador
async function modificarHabitacion(id, datos) {

    return await HabitacionModelo.findByIdAndUpdate(id, datos)

}

//1. Funcion para insertar datos
async function insertarReserva(datos) {

    let reservaNuevo = new ReservaModelo(datos)
    return await reservaNuevo.save()

}

//2. Funcion para buscar 1 Jugador
async function leerReserva(id) {

    let reservaBuscado = await ReservaModelo.findById(id)
    return reservaBuscado

}

//3. Funcion para buscar TODOS los Jugadores
async function leerReservas() {

    let ReservasBuscados = await ReservaModelo.find()
    return ReservasBuscados

}


//4. Funcion para eliminar un jugador
async function borrarReserva(id) {

    return await ReservaModelo.findByIdAndDelete(id)

}

//5. Funcion para editar un jugador
async function modificarReserva(id, datos) {

    return await ReservaModelo.findByIdAndUpdate(id, datos)

}

module.exports = {

    insertarHabitacion,
    leerHabitacion,
    leerHabitaciones,
    borrarHabitacion,
    modificarHabitacion,
    //-------------------
    insertarReserva,
    leerReserva,
    leerReservas,
    borrarReserva,
    modificarReserva

}