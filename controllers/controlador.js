//EL CONTROLADOR ES EL ENCARGADO
//DE ADMINISTRAR LAS PETICIONES Y RESPUESTAS

//IMPORTACIONES
const { request, response } = require('express')

const { insertarHabitacion } = require('../services/servicio.js')
const { leerHabitacion } = require('../services/servicio.js')
const { leerHabitaciones } = require('../services/servicio.js')
const { borrarHabitacion } = require('../services/servicio.js')
const { modificarHabitacion } = require('../services/servicio.js')
//---------------------------------------------------------------------
const { insertarReserva } = require('../services/servicio.js')
const { leerReserva } = require('../services/servicio.js')
const { leerReservas } = require('../services/servicio.js')
const { borrarReserva } = require('../services/servicio.js')
const { modificarReserva } = require('../services/servicio.js')



//crear una funcion para cada operacion del servidor
async function registrarHabitacion(peticion = request, respuesta = response) {

    try {

        let datosPeticion = peticion.body

        await insertarHabitacion(datosPeticion)
        respuesta.status(200).json({
            estado: true,
            mensaje: "Exito registrando la habitacion"
        })


    } catch (error) {
        respuesta.status(400).json({
            estado: false,
            mensaje: "Upss... tenemos un problema: " + error
        })
    }


}

async function buscarHabitacion(peticion = request, respuesta = response) {

    try {

        let id = peticion.params.id

        let habitacion = await leerHabitacion(id)

        respuesta.status(200).json({
            estado: true,
            mensaje: habitacion
        })


    } catch (error) {
        respuesta.status(400).json({
            estado: false,
            mensaje: "Upss... tenemos un problema: " + error
        })
    }

}

async function buscarHabitaciones(peticion = request, respuesta = response) {

    try {

        let habitaciones = await leerHabitaciones()

        respuesta.status(200).json({
            estado: true,
            mensaje: habitaciones
        })


    } catch (error) {
        respuesta.status(400).json({
            estado: false,
            mensaje: "Upss... tenemos un problema: " + error
        })
    }

}


async function editarHabitacion(peticion = request, respuesta = response) {


    try {

        let id = peticion.params.id
        let datosPeticion = peticion.body

        await modificarHabitacion(id, datosPeticion)

        respuesta.status(200).json({
            estado: true,
            mensaje: "Exito editando la habitacion"
        })


    } catch (error) {
        respuesta.status(400).json({
            estado: false,
            mensaje: "Upss... tenemos un problema: " + error
        })
    }

}

async function eliminarHabitacion(peticion = request, respuesta = response) {

    try {

        let id = peticion.params.id

        await borrarHabitacion(id)

        respuesta.status(200).json({
            estado: true,
            mensaje: "Exito al eliminar la habitacion"
        })


    } catch (error) {
        respuesta.status(400).json({
            estado: false,
            mensaje: "Upss... tenemos un problema: " + error
        })
    }

}

//-----------------------------------------------------------------------------------------------------------

async function registrarReserva(peticion = request, respuesta = response) {

    try {

        let datosPeticion = peticion.body

        await insertarReserva(datosPeticion)
        respuesta.status(200).json({
            estado: true,
            mensaje: "Exito registrando la reserva"
        })


    } catch (error) {
        respuesta.status(400).json({
            estado: false,
            mensaje: "Upss... tenemos un problema: " + error
        })
    }


}

async function buscarReserva(peticion = request, respuesta = response) {

    try {

        let id = peticion.params.id

        let reserva = await leerReserva(id)

        respuesta.status(200).json({
            estado: true,
            mensaje: reserva
        })


    } catch (error) {
        respuesta.status(400).json({
            estado: false,
            mensaje: "Upss... tenemos un problema: " + error
        })
    }

}

async function buscarReservas(peticion = request, respuesta = response) {

    try {

        let reservas = await leerReservas()

        respuesta.status(200).json({
            estado: true,
            mensaje: reservas
        })


    } catch (error) {
        respuesta.status(400).json({
            estado: false,
            mensaje: "Upss... tenemos un problema: " + error
        })
    }

}


async function editarReserva(peticion = request, respuesta = response) {


    try {

        let id = peticion.params.id
        let datosPeticion = peticion.body

        await modificarReserva(id, datosPeticion)

        respuesta.status(200).json({
            estado: true,
            mensaje: "Exito editando la reserva"
        })


    } catch (error) {
        respuesta.status(400).json({
            estado: false,
            mensaje: "Upss... tenemos un problema: " + error
        })
    }

}

async function eliminarReserva(peticion = request, respuesta = response) {

    try {

        let id = peticion.params.id

        await borrarReserva(id)

        respuesta.status(200).json({
            estado: true,
            mensaje: "Exito al eliminar la reserva"
        })


    } catch (error) {
        respuesta.status(400).json({
            estado: false,
            mensaje: "Upss... tenemos un problema: " + error
        })
    }

}

module.exports = {

    registrarHabitacion,
    buscarHabitacion,
    buscarHabitaciones,
    editarHabitacion,
    eliminarHabitacion,
    //----------------
    registrarReserva,
    buscarReserva,
    buscarReservas,
    editarReserva,
    eliminarReserva

}