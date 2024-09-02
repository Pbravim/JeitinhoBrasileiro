const express = require('express');
const UserController = require('../controllers/userController');
const { authMiddleware } = require('../middlewares/authJwt');

const router = express.Router();

router.post('/login', UserController.login);
router.post('/register', UserController.register);

router.get('/profile', authMiddleware, UserController.profile);

module.exports = router;
