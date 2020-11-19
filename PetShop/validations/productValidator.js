const {check,validationResult,body} = require('express-validator');

module.exports = [
    check('name')
    .isLength({
        min:1
    })
    .withMessage("El nombre del producto es obligatorio."),

    check('marca')
    .isLength({
        min:1
    })
    .withMessage("La marca del producto es obligatorio."),

    check('categoria')
    .isLength({
        min:1
    })
    .withMessage("La categoria es obligatorio."),
    //desde aca marca el error, por mas que el campo subcategoria esté lleno.
    check('subcategoria')
    .isInt({
        min:1
    })
    .withMessage("La subcategoria es obligatorio."),

    check('price')
    .isInt({
        min:1
    })
    .withMessage("El producto debe tener un precio válido"),

    check('peso')
    .isInt({
        min:1
    })
    .withMessage("El peso debe es obligatorio o ponga 0 si pesa menos de 1kg"),

    check('discount')
    .isInt({
        min:1
    })
    .withMessage("El producto debe tener un descuento válido"),
    
    check("description")
    .isLength({
        min:1
    })
    .withMessage("La descripción es obligatorio, minimo 20 caracteres"),

    body('image')
    .custom((value,{req})=>{
        if(!req.files[0]){
            return false
        }else{
            return true
        }
    })
    .withMessage("Tenés que subir una imagen")
]