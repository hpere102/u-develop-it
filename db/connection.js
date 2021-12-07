const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'iSkate37!',
        database: 'election'
    },
    console.log('Connected to election database.')
);


module.exports = db;