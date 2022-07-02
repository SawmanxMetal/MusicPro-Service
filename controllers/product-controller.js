const conexion = require('../config/db');
const { v4: uuidv4 } = require('uuid');


let sku = uuidv4();

//trae los productos
const getProduct = async(req, res) => {
    conexion.query('SELECT * FROM producto', function (error, results, fields) {
        if (error) throw error;
        console.log( results);
        res.json(results);
      });
}


const postProduct = (req, res) => {
   
    let stmt = `INSERT INTO musicpro.producto (sku, nombre, descripcion, imagen, estado, precio, stock) VALUES( ? ,?, ?, ?, ?, ?, ?)`;
   
    const { nombre, descripcion, imagen, estado, precio, stock  } = req.body;

    conexion.query(stmt, [sku, nombre, descripcion, imagen, estado, precio, stock], (err, result) => {
          if (err) throw err;
          console.log("1 record inserted");
          res.json({ message: 'producto agregado correctamente', nombre: nombre, sku: sku })
        });
     
}

const updateProduct = (req, res) => {
    const sku  = req.params.sku
const { nombre, descripcion, imagen, estado, precio, stock  } = req.body;
 let stmt = `UPDATE producto SET nombre = ?, descripcion = ?, imagen = ?, estado = ?, precio = ?, stock = ? WHERE sku = ?`;
 let data = [ nombre, descripcion, imagen, estado, precio, stock, sku];
 
 conexion.query(stmt, data , (err, results, fields) => {
    if(err) throw err
    console.log('filas: ', results);
    res.json({ message: 'producto actualizado correctamente' })
 })

}

module.exports = {
    getProduct,
    postProduct,
    updateProduct
}

