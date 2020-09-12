const express = require('express');
const router = express.Router();


const adminController = require('../controllers/adminController');

router.get('/',adminController.agregar);
router.post('/',adminController.publicar)
module.exports = router;