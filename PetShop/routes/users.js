var express = require('express');
var router = express.Router();


const usersController = require('../controllers/usersController')

const upImagesUsers = require('../middlewares/upImagesUsers')
const registerValidator = require('../validations/registerValidator')
const loginValidator = require('../validations/loginValidator');
const redirectUsers = require('../redirect/redirectUsers');
const redirectProfile = require('../redirect/redirectProfile');


router.get('/register',redirectUsers,usersController.register);
router.post('/register',upImagesUsers.any(),registerValidator,usersController.processRegister);

router.get('/login',redirectUsers,usersController.login);
router.post('/login',loginValidator,usersController.processLogin);

router.get('/profile',redirectProfile,usersController.profile);

router.get('/logout',usersController.logout);

module.exports = router;
