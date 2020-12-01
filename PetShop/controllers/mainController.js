/*
MAIN PRINCIPAL PARA USAR LOS PRODUCTOS DE LA BASE DE DATOS EN EL INDEX.
*/
//guardo la base de datos en "db", para empezar a manipularlo.
const db = require('../database/models');

module.exports = {
    index: function (req, res) {
        //recorro la base de datos "productos, y envio todos los productos a su ruta"
        let producto = db.Productos.findAll()
        //GUARDO LA CANTIDAD DE PRODUCTOS PARA PODES RECORRERLOS EN LA PESTAÑA "detalle del producto"
        let total = db.Productos.count();
        //GUARDO TODO LOS DATOS DE LA TABLA EN idCategorias
        let subCategorias = db.Subcategorias.findAll()
        //LO PASO COMO PROMESA EN UNA LLAVE A LAS VARIABLES QUE VOY A USAR
        Promise.all([producto, subCategorias, total])

            .then(([producto, subCategorias, total]) => {
                res.render('index', {
                    title: 'Petshop',
                    css: 'index.css',
                    productos: producto,
                    subCategorias: subCategorias,
                    total: total
                })
            })
            .catch(error => {
                res.send(error)
            })
    },

}