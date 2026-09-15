require('dotenv').config();

const express = require('express');

const app = express();


// Configurar EJS
app.set('view engine', 'ejs');


// Permitir recibir datos JSON
app.use(express.json());


// Permitir recibir datos de formularios
app.use(express.urlencoded({
    extended: true
}));


// Archivos públicos
app.use(express.static('public'));


// Importar rutas
const empleadosRoutes = require('./routes/empleadosRoutes');


// Usar rutas
app.use('/', empleadosRoutes);


// Iniciar servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);

});