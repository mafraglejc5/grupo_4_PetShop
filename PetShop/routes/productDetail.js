var express = require('express');
var router = express.Router();

/* GET pagina prodcuto del detalle. */
router.get('/', function(req, res, next) {
  res.render('productDetail');
});

module.exports = router;
