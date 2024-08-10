const express = require('express');
const { Router } = express;
const userController = require('../controllers/userController');

const AuthMiddleware = require('../middlewares/auth');

const router = Router();

// Rota para criar um novo usuário
router.post('/', userController.create);

// Rota para atualizar um usuário
router.put('/:id', AuthMiddleware, userController.update);

// Rota para deletar um usuário
router.delete('/:id', AuthMiddleware, userController.delete);

// Rota para obter todos os usuários
router.get('/', userController.getAll);

// Rota para obter um usuário sem a senha
router.get('/me', userController.getUserWithoutPassword);

// Rota para autenticar um usuário 
router.post('/authenticate', AuthMiddleware, userController.authenticate);

module.exports = router;
