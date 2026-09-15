-- ============================================================
-- BASE DE DATOS: Sistema de Gestión de Empleados
-- Proyecto: empleados-app
-- Motor: MySQL 8.0
-- ============================================================


-- Crear la base de datos si no existe
CREATE DATABASE IF NOT EXISTS empleados_db;

-- Seleccionar la base de datos
USE empleados_db;


-- ============================================================
-- CONFIGURACIÓN INICIAL DE MYSQL
-- ============================================================

SET FOREIGN_KEY_CHECKS = 0;


-- ============================================================
-- TABLA: empleados
-- ============================================================

DROP TABLE IF EXISTS empleados;

CREATE TABLE empleados (
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    documento VARCHAR(50) NOT NULL,
    correo VARCHAR(100) NOT NULL,
    telefono VARCHAR(50) NOT NULL,

    PRIMARY KEY (id)

) ENGINE=InnoDB
  DEFAULT CHARSET=utf8mb4
  COLLATE=utf8mb4_0900_ai_ci;


-- ============================================================
-- DATOS INICIALES
-- ============================================================

INSERT INTO empleados
    (nombre, apellido, documento, correo, telefono)
VALUES
    ('Juan', 'Perez', '1000000001', 'juan.perez@example.com', '3000000001'),
    ('Maria', 'Gomez', '1000000002', 'maria.gomez@example.com', '3000000002'),
    ('Carlos', 'Lopez', '1000000003', 'carlos.lopez@example.com', '3000000003'),
    ('Ana', 'Martinez', '1000000004', 'ana.martinez@example.com', '3000000004');


-- ============================================================
-- RESTAURAR CONFIGURACIÓN
-- ============================================================

SET FOREIGN_KEY_CHECKS = 1;


-- ============================================================
-- VERIFICACIÓN
-- ============================================================

SELECT * FROM empleados;
