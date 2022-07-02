const mysql = require('mysql');
const env = require('../env/env.js');


const conexion = mysql.createPool({
    host: env.DB_HOST,
    user: env.DB_USER,
    password: env.DB_PASS,
    database: env.DB_DATABASE,
   
})


conexion.getConnection((error) => {
    if(error){
        console.log(error);
        return
    }
    console.log('Conexion existosa');
})

module.exports = conexion