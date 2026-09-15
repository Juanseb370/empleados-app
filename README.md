# Sistema de Gestión de Empleados

Aplicación web desarrollada en Node.js como parte de una prueba técnica para la gestión básica de empleados de una empresa.

El sistema permite registrar, consultar, editar y eliminar empleados mediante una interfaz web conectada a una base de datos MySQL.

La aplicación utiliza una arquitectura organizada por rutas, controladores y modelos, facilitando la separación de responsabilidades y el mantenimiento del código.

---

## Descripción del proyecto

El sistema permite administrar información básica de los empleados de una empresa.

Cada empleado cuenta con los siguientes datos:

- ID
- Nombre
- Apellido
- Número de documento
- Correo electrónico
- Teléfono

La información es almacenada en una base de datos MySQL y puede ser consultada y gestionada desde la aplicación web.

El proyecto también implementa una consulta de detalle mediante una ruta dinámica y JavaScript `fetch`, permitiendo obtener la información de un empleado sin necesidad de recargar la página.

---

## Funcionalidades

### Listado de empleados

Permite visualizar todos los empleados registrados en la base de datos mediante una tabla.

Ruta:

```text
GET /empleados
```

### Consulta de detalle

Permite consultar la información completa de un empleado mediante su identificador.

La aplicación utiliza una ruta dinámica:

```text
GET /empleados/:id
```

La información es obtenida mediante JavaScript utilizando `fetch` y se muestra dinámicamente en la interfaz.

### Registro de empleados

Permite registrar nuevos empleados proporcionando la siguiente información:

- Nombre
- Apellido
- Número de documento
- Correo electrónico
- Teléfono

Ruta:

```text
POST /empleados
```

### Edición de empleados

Permite modificar la información de un empleado existente.

Ruta:

```text
POST /empleados/:id/editar
```

### Eliminación de empleados

Permite eliminar un empleado registrado en la base de datos.

Ruta:

```text
POST /empleados/:id/eliminar
```

Antes de realizar la eliminación, el sistema solicita una confirmación al usuario.

---

## Tecnologías utilizadas

- **Node.js** – Entorno de ejecución para JavaScript.
- **Express.js** – Framework utilizado para construir el servidor y gestionar las rutas.
- **MySQL** – Sistema de gestión de base de datos.
- **mysql2** – Librería utilizada para la conexión entre Node.js y MySQL.
- **EJS** – Motor de plantillas utilizado para generar la interfaz web.
- **JavaScript** – Lógica del lado del cliente y comunicación mediante fetch.
- **Bootstrap** – Framework utilizado para el diseño y la interfaz responsive.
- **dotenv** – Gestión de variables de entorno.
- **Git / GitHub** – Control de versiones y almacenamiento del proyecto.

---

## Arquitectura del proyecto

El proyecto está organizado siguiendo una estructura basada en:

- **Routes**: definición de las rutas de la aplicación.
- **Controllers**: procesamiento de las solicitudes y respuestas.
- **Models**: comunicación con la base de datos.
- **Views**: interfaz visual de la aplicación.
- **Public**: archivos JavaScript utilizados en el cliente.
- **Config**: configuración de la conexión a MySQL.

Esta organización permite separar las responsabilidades de cada componente.

### Estructura del proyecto

```text
empleados-app/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── empleadosController.js
│
├── models/
│   └── empleadoModel.js
│
├── public/
│   └── js/
│       └── empleados.js
│
├── routes/
│   └── empleadosRoutes.js
│
├── views/
│   └── empleados.ejs
│
├── .env
├── .gitignore
├── app.js
├── database.sql
├── package.json
├── package-lock.json
└── README.md
```

---

## Requisitos

Antes de ejecutar el proyecto es necesario tener instalado:

- Node.js
- MySQL
- Git

También es necesario contar con una instancia de MySQL disponible para ejecutar la aplicación.

---

## Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/Juanseb370/empleados-app.git
```

Ingresar a la carpeta del proyecto:

```bash
cd empleados-app
```

### 2. Instalar las dependencias

Ejecutar:

```bash
npm install
```

Esto instalará las dependencias necesarias definidas en `package.json`.

---

## Configuración de la base de datos

El proyecto incluye el archivo:

```text
database.sql
```

Este archivo contiene la estructura y los datos iniciales necesarios para ejecutar la aplicación.

### Crear la base de datos

Desde MySQL Workbench o desde la consola de MySQL, ejecutar:

```sql
CREATE DATABASE empleados_db;
```

Seleccionar la base de datos:

```sql
USE empleados_db;
```

Posteriormente, ejecutar el contenido del archivo `database.sql`.

La tabla principal utilizada por la aplicación es:

```text
empleados
```

y contiene los siguientes campos:

| Campo      | Tipo    | Descripción              |
|------------|---------|---------------------------|
| id         | INT     | Identificador único       |
| nombre     | VARCHAR | Nombre del empleado       |
| apellido   | VARCHAR | Apellido del empleado     |
| documento  | VARCHAR | Número de documento       |
| correo     | VARCHAR | Correo electrónico        |
| telefono   | VARCHAR | Número telefónico         |

---

## Variables de entorno

La aplicación utiliza variables de entorno para configurar la conexión con MySQL.

Crear un archivo llamado `.env` en la raíz del proyecto.

Agregar:

```env
PORT=3000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=TU_CONTRASEÑA
DB_NAME=empleados_db
```

Reemplazar `TU_CONTRASEÑA` por la contraseña correspondiente al usuario de MySQL.

> **Importante:** el archivo `.env` contiene información de configuración que no debe publicarse en el repositorio. Por este motivo se encuentra incluido en `.gitignore`.

---

## Ejecución del proyecto

Una vez configurada la base de datos y las variables de entorno, ejecutar:

```bash
npm start
```

También se puede ejecutar utilizando Nodemon durante el desarrollo:

```bash
npm run dev
```

Si el servidor inicia correctamente, aparecerá un mensaje similar a:

```text
Servidor ejecutándose en http://localhost:3000
MySQL conectado correctamente
```

La aplicación estará disponible en:

```text
http://localhost:3000/empleados
```

---

## Rutas principales

| Método | Ruta                       | Descripción                    |
|--------|----------------------------|---------------------------------|
| GET    | /empleados                 | Lista todos los empleados       |
| GET    | /empleados/:id             | Consulta el detalle de un empleado |
| POST   | /empleados                 | Registra un nuevo empleado      |
| POST   | /empleados/:id/editar      | Actualiza un empleado           |
| POST   | /empleados/:id/eliminar    | Elimina un empleado             |

---

## Comunicación mediante Fetch

La consulta del detalle de cada empleado utiliza JavaScript y la función `fetch`.

Al seleccionar la opción "Ver detalle", se realiza una solicitud al servidor utilizando la ruta:

```text
GET /empleados/:id
```

El servidor responde con información en formato JSON.

Ejemplo:

```json
{
    "id": 1,
    "nombre": "Juan",
    "apellido": "Perez",
    "documento": "123",
    "correo": "juan@gmail.com",
    "telefono": "3001111111"
}
```

Posteriormente, JavaScript utiliza esta información para actualizar dinámicamente la sección de detalle de la página.

---

## Base de datos

La aplicación utiliza MySQL como sistema de almacenamiento.

La conexión se configura mediante variables de entorno y se administra desde:

```text
config/db.js
```

Las consultas relacionadas con los empleados se encuentran en:

```text
models/empleadoModel.js
```

El modelo contiene las operaciones necesarias para:

- Obtener todos los empleados.
- Obtener un empleado por ID.
- Crear empleados.
- Editar empleados.
- Eliminar empleados.

---

## Controladores

La lógica de las solicitudes se encuentra en:

```text
controllers/empleadosController.js
```

Los controladores reciben las solicitudes realizadas por el usuario, interactúan con el modelo correspondiente y generan la respuesta.

Entre las operaciones principales se encuentran:

- Listar empleados.
- Consultar un empleado.
- Crear empleados.
- Editar empleados.
- Eliminar empleados.

---

## Vistas

La interfaz principal se encuentra en:

```text
views/empleados.ejs
```

En esta vista se encuentran:

- Formulario de registro.
- Tabla de empleados.
- Botón para consultar detalle.
- Botón para editar.
- Botón para eliminar.
- Sección para mostrar el detalle del empleado.

Para el diseño de la interfaz se utiliza Bootstrap.

---

## JavaScript del cliente

El código JavaScript utilizado en el navegador se encuentra en:

```text
public/js/empleados.js
```

Este archivo contiene principalmente la lógica necesaria para consultar dinámicamente la información de los empleados mediante fetch.

---

## Seguridad y buenas prácticas

El proyecto utiliza algunas prácticas básicas para mantener separada la configuración del código fuente.

### Variables de entorno

Las credenciales de la base de datos se almacenan en `.env` y no se incluyen en el repositorio.

### Gitignore

El archivo `.gitignore` evita subir archivos y carpetas que no deben formar parte del repositorio, como:

```text
node_modules/
.env
```

### Consultas parametrizadas

Las consultas SQL utilizan parámetros en lugar de concatenar directamente los valores recibidos por el usuario.

Ejemplo:

```sql
SELECT * FROM empleados WHERE id = ?
```

Esto ayuda a reducir riesgos relacionados con inyección SQL.

---

## Scripts disponibles

En `package.json` se encuentran los siguientes comandos:

### Iniciar la aplicación

```bash
npm start
```

### Ejecutar en modo desarrollo

```bash
npm run dev
```

El segundo comando utiliza Nodemon para reiniciar automáticamente el servidor cuando se detectan cambios en el código.

---

## Solución de problemas

### Error de conexión con MySQL

Si aparece un error relacionado con la conexión a MySQL, verificar:

- Que el servicio de MySQL esté iniciado.
- Que el usuario configurado en `.env` sea correcto.
- Que la contraseña sea correcta.
- Que la base de datos `empleados_db` exista.
- Que el nombre de la base de datos coincida con `DB_NAME`.

### Error "Table doesn't exist"

Si aparece un error indicando que la tabla `empleados` no existe, verificar que el archivo `database.sql` haya sido ejecutado correctamente en la base de datos `empleados_db`.

### Error de módulo no encontrado

Si Node.js indica que no encuentra algún módulo, ejecutar nuevamente:

```bash
npm install
```

---

## Repositorio

El código fuente del proyecto se encuentra disponible en GitHub:

[https://github.com/Juanseb370/empleados-app](https://github.com/Juanseb370/empleados-app)

Para obtener una copia del proyecto:

```bash
git clone https://github.com/Juanseb370/empleados-app.git
```

---

## Autor

**Juan Sebastián Almendra**

Proyecto desarrollado como parte de una prueba técnica para un cargo relacionado con desarrollo y soporte de sistemas.

---

## Consideraciones finales

Este proyecto fue desarrollado con el objetivo de demostrar conocimientos en:

- Desarrollo backend con Node.js y Express.
- Manejo de bases de datos MySQL.
- Desarrollo de rutas dinámicas.
- Operaciones CRUD.
- Comunicación entre frontend y backend mediante fetch.
- Manejo de datos en formato JSON.
- Uso de variables de entorno.
- Organización del código mediante rutas, controladores y modelos.
- Control de versiones mediante Git y GitHub.
