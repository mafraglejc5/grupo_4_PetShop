/*
VALIDO EL LOGIN, SI COINCIDE TODO LO QUE INGRESA Y SE ENCUENTRA EN LA BASE DE DATOS.
*/
const {check,body} = require('express-validator');
const bcrypt = require('bcrypt');
const db = require('../database/models');
/*
REQUERIMOS LOS MODELOS DE LA BASE DE DATOS CREADAS CON SEQUELIZE Y MODIFICAMOS EL CODIGO PARA HACER USO DE ESO.
*/
module.exports = [
    
    check('email')
    .isEmail()
    .withMessage("Debes ingresar un email válido"),

    check('pass')
    .isLength({
        min:1
    })
    .withMessage("Escribe tu contraseña"),

    body('pass')
    .custom(function(value,{req}){
        return db.Users.findOne({
            where : {
                email : req.body.email
            }
        })
        .then( user => {
            if(!bcrypt.compareSync(value,user.password)){
                return Promise.reject('Credenciales inválidas')
            }
        })
        .catch(err => {
            return Promise.reject('Credenciales inválidas')
        })
    })
]