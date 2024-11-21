const mysql = require('mysql2');
require('dotenv').config();  // Cargar las variables de entorno desde el archivo .env

// Crear la conexión usando las variables de entorno
const connection = mysql.createConnection({
    host: process.env.DB_HOST,        // Usar la variable de entorno DB_HOST
    user: process.env.DB_USER,        // Usar la variable de entorno DB_USER
    password: process.env.DB_PASSWORD, // Usar la variable de entorno DB_PASSWORD
    database: process.env.DB_DATABASE // Usar la variable de entorno DB_DATABASE
});

// Conectar a la base de datos
connection.connect((err) => {
    if (err) {
        console.error('Error conectando a la base de datos:', err);
        return;
    }
    console.log('Conexión exitosa a la base de datos MySQL.');
});

module.exports = connection;
