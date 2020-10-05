/*
VALIDO EL LOGIN, SI COINCIDE TODO LO QUE INGRESA Y SE ENCUENTRA EN LA BASE DE DATOS.
*/
const dbUsers = require('../data/dbUsers');

const {check,body} = require('express-validator');
const bcrypt = require('bcrypt');

module.exports = [
    
    check('email')
    .isEmail()
    .withMessage("Debes ingresar un email válido"),
    body('email')
    .custom(function(value){
        let usuario = dbUsers.filter(user=>{
            return user.email == value
        })
        if(usuario == false){
            return false
        }else{
            return true
        }
    })
    .withMessage("El ususario no está registrado"),
    
    check('pass')
    .isLength({
        min:1
    })
    .withMessage("Escribe tu contraseña"),

   

    body('pass')
    .custom(function(value,{req}){
        let result = true;
        dbUsers.forEach(user => {
            if(user.email == req.body.email){
                if(!bcrypt.compareSync(value,user.password)){
                    result = false
                }
            }
        });
        if (result == false){
            return false
        }else{
            return true
        }
    })
    .withMessage('Contraseña incorrecta')
]