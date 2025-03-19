const express = require('express');
// const formController = require('../controllers/formController');
import {enviarFormulario} from '../controllers/formController.js'

const router = express.Router();

// Ruta para manejar el envío del formulario
router.post('/enviar-formulario', enviarFormulario);

module.exports = router;
