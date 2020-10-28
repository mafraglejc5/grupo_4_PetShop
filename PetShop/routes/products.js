const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController')
const upImagesProducts = require ('../middlewares/upImagesProducts')
const redirectAdmin = require('../redirect/redirectAdmin');


/*MUESTRO LISTA, DETALLE DE CADA PRODUCTO Y BUSCO*/
router.get('/',productsController.listar);
router.get('/detalle/:id',productsController.detalle);
router.get('/search',productsController.search)


/*AGREGO PRODUCTOS Y MUESTRO LISTA ACTUALIZADA */        
router.get('/productAdd',redirectAdmin,productsController.agregar);
router.post('/productAdd',upImagesProducts.any(),productsController.publicar);

router.get('/show/:id/:flap?',redirectAdmin,productsController.show);

router.put('/edit/:id',redirectAdmin,upImagesProducts.any(),productsController.editar)
router.delete('/eliminar/:id',redirectAdmin,productsController.eliminar)

module.exports = router;