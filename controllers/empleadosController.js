const Empleado = require('../models/empleadoModel');


// LISTAR EMPLEADOS
exports.listar = (req, res) => {

    Empleado.obtenerTodos((err, rows) => {

        if (err) {
            console.error(err);

            return res.status(500).json({
                error: 'Error al obtener los empleados'
            });
        }

        res.render('empleados', {
            empleados: rows
        });

    });

};


// DETALLE
exports.detalle = (req, res) => {

    const id = req.params.id;

    Empleado.obtenerPorId(id, (err, rows) => {

        if (err) {
            console.error(err);

            return res.status(500).json({
                error: 'Error al obtener el empleado'
            });
        }

        if (rows.length === 0) {

            return res.status(404).json({
                error: 'Empleado no encontrado'
            });

        }

        res.json(rows[0]);

    });

};


// CREAR
exports.crear = (req, res) => {

    const empleado = {

        nombre: req.body.nombre,

        apellido: req.body.apellido,

        documento: req.body.documento,

        correo: req.body.correo,

        telefono: req.body.telefono

    };


    Empleado.crear(empleado, (err, result) => {

        if (err) {

            console.error(err);

            return res.status(500).json({
                error: 'Error al crear el empleado'
            });

        }

        res.redirect('/empleados');

    });

};

// EDITAR EMPLEADO
exports.editar = (req, res) => {

    const id = req.params.id;

    const empleado = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        documento: req.body.documento,
        correo: req.body.correo,
        telefono: req.body.telefono
    };

    Empleado.editar(id, empleado, (err, result) => {

        if (err) {
            console.error(err);

            return res.status(500).json({
                error: 'Error al editar el empleado'
            });
        }

        res.redirect('/empleados');
    });

};


// ELIMINAR EMPLEADO
exports.eliminar = (req, res) => {

    const id = req.params.id;

    Empleado.eliminar(id, (err, result) => {

        if (err) {
            console.error(err);

            return res.status(500).json({
                error: 'Error al eliminar el empleado'
            });
        }

        res.redirect('/empleados');
    });

};