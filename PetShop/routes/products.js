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

/*MUESTRO LISTA, DETALLE DE CADA PRODUCTO Y BUSCO*/
router.get('/',productsController.listar);
router.get('/detalle/:id',productsController.detalle);
router.get('/search',productsController.search)


/*AGREGO PRODUCTOS Y MUESTRO LISTA ACTUALIZADA */        
router.get('/productAdd',redirectAdmin,productsController.agregar);
router.post('/productAdd',upImagesProducts.any(),productValidator,productsController.publicar);

router.get('/show/:id/:flap?',redirectAdmin,productsController.show);

router.put('/edit/:id',redirectAdmin,upImagesProducts.any(),productsController.editar)
router.delete('/eliminar/:id',redirectAdmin,productsController.eliminar)

module.exports = router;