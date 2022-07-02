const express =  require('express');
const app = express();
const dotenv = require('dotenv')
const path = require('path')
const port = 3000;
app.use(express.json())

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});



// rutas
app.use(require('./route/routes'))



// dotenv.config({ path: path.resolve(__dirname, './env/.env') });


app.listen(port)
console.log(port);

