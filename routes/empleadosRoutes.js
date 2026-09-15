const express = require('express');

const router = express.Router();

const empleadosController = require('../controllers/empleadosController');
// Página principal 
router.get('/', (req, res) => { res.redirect('/empleados'); });
// Listar empleados
router.get('/empleados', empleadosController.listar);

// Consultar detalle
router.get('/empleados/:id', empleadosController.detalle);

// Crear empleado
router.post('/empleados', empleadosController.crear);

// Editar empleado
router.post('/empleados/:id/editar', empleadosController.editar);

// Eliminar empleado
router.post('/empleados/:id/eliminar', empleadosController.eliminar);

module.exports = router;
