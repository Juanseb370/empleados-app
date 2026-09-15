const db = require('../config/db');

// Obtener todos
exports.obtenerTodos = (callback) => {

    db.query(
        'SELECT * FROM empleados',
        callback
    );

};


// Obtener uno por ID
exports.obtenerPorId = (id, callback) => {

    db.query(
        'SELECT * FROM empleados WHERE id = ?',
        [id],
        callback
    );

};


// Crear empleado
exports.crear = (empleado, callback) => {

    db.query(
        `
        INSERT INTO empleados
        (
            nombre,
            apellido,
            documento,
            correo,
            telefono
        )
        VALUES (?, ?, ?, ?, ?)
        `,
        [
            empleado.nombre,
            empleado.apellido,
            empleado.documento,
            empleado.correo,
            empleado.telefono
        ],
        callback
    );

};


// EDITAR EMPLEADO
exports.editar = (id, empleado, callback) => {

    db.query(
        `
        UPDATE empleados
        SET
            nombre = ?,
            apellido = ?,
            documento = ?,
            correo = ?,
            telefono = ?
        WHERE id = ?
        `,
        [
            empleado.nombre,
            empleado.apellido,
            empleado.documento,
            empleado.correo,
            empleado.telefono,
            id
        ],
        callback
    );

};


// ELIMINAR EMPLEADO
exports.eliminar = (id, callback) => {

    db.query(
        'DELETE FROM empleados WHERE id = ?',
        [id],
        callback
    );

};