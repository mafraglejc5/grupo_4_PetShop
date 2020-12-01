//MODULOS
const express = require('express');
const router = express.Router();

//CONTROLADORES
const productsController = require('../controllers/productsController')

//MIDDLEWARES
const upImagesProducts = require ('../middlewares/upImagesProducts')
const redirectAdmin = require('../middlewares/redirectAdmin');

//VALIDACIONES
const productValidator = require('../validations/productValidator.js')
const productEditValidator = require('../validations/productEditValidator.js');

/*MUESTRO LISTA, DETALLE DE CADA PRODUCTO Y BUSCO*/
router.get('/',productsController.listar);
router.get('/filtro/:id',productsController.filtro);

router.get('/detalle/:id',productsController.detalle);
router.get('/search',productsController.search)
/*CARRITO DE COMPRAS */
router.get('/productCart',productsController.carrito);


/*AGREGO PRODUCTOS Y MUESTRO LISTA ACTUALIZADA */        
router.get('/productAdd',redirectAdmin,productsController.agregar);
router.post('/productAdd',upImagesProducts.any(),productValidator,productsController.publicar);

/*EDITO EL PRODUCTO SELECCIONADO */
router.get('/edit/:id',redirectAdmin,productsController.editar);
router.put('/edit/:id',upImagesProducts.any(),productEditValidator,productsController.editado);

/*ELIMINO EL PRODUCTO SELECCIONADO */
router.delete('/eliminar/:id',redirectAdmin,productsController.eliminar)


module.exports = router;