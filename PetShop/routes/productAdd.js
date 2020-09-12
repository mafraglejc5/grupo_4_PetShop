var express = require('express');
var router = express.Router();

/* GET pagina carga de productos. */
router.get('/', function(req, res, next) {
  res.render('productAdd');
});

module.exports = router;
