const {check,validationResult,body} = require('express-validator');
const path = require('path');

module.exports = [
    check('name')
    .isLength({
        min:3
    })
    .withMessage("El nombre del producto es obligatorio."),

    check('marca')
    .isLength({
        min:3
    })
    .withMessage("La marca del producto es obligatorio."),

    check('categoria')
    .isLength({
        min:1
    })
    .withMessage("La categoria es obligatorio."),
    
    check('id_subcategoria')
    .isInt({
        min:1
    })
    .withMessage("La subcategoria es obligatorio."),

    check('price')
    .isInt({
       gt:-1
    })
    .withMessage("El producto debe tener un precio válido"),

    check('peso')
    .isInt({
        gt:-1
    })
    .withMessage("El peso debe es obligatorio o ponga 0 si pesa menos de 1kg"),

    check('discount')
    .isInt({
        gt:-1
    })
    .withMessage("El producto debe tener un descuento válido o 0 en caso que no haya"),
    
    check("description")
    .isLength({
        min:20
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
    .withMessage("Tenés que subir una imagen"),
    body('image')
    .custom((value,{req})=>{
        value = req.files[0].filename
        let extension = path.extname(value)

        return extension = '.jpg' || extension == '.jpeg' || extension == '.png' || extension == '.gif';
    })
    .withMessage("El formato de la imagen debe ser: jpg, jpeg, png o gif")
]