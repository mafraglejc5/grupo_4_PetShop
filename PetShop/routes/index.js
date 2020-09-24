var express = require('express');
var router = express.Router();

const mainController = require('../controllers/mainController')
const cookieCheck = require('../middlewares/cookieCheck');

/* GET home page. */
router.get('/',cookieCheck, mainController.index);
router.get('/',mainController.register);
router.post('/',mainController.register);





module.exports = router;
