const express = require('express');
const UserController = require('../controllers/userController');
const authMiddleware  = require('../middlewares/authJwt');

const router = express.Router();

//TODOS INCIAM COM ->    /user

//email senha
router.post('/login', UserController.login);

//nome email senha
router.post('/register', UserController.register);

router.get('/profile', authMiddleware, UserController.profile);

module.exports = router;
