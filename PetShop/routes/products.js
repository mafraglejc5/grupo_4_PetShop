const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController')
const upImagesProducts = require ('../middlewares/upImagesProducts')
/*MUESTRO LISTA, DETALLE DE CADA PRODUCTO Y BUSCO*/
router.get('/',productsController.listar);
router.get('/detalle/:id',productsController.detalle);
router.get('/search',productsController.search)
/*AGREGO PRODUCTOS Y MUESTRO LISTA ACTUALIZADA */
router.get('/productAdd',productsController.agregar);        
router.get('/productAdd',productsController.agregar);
router.post('/productAdd',upImagesProducts.any(),productsController.publicar);

router.get('/show/:id/:flap?',productsController.show);

router.put('/edit/:id',productsController.editar)
router.delete('/delete/:id',productsController.eliminar)

module.exports = router;