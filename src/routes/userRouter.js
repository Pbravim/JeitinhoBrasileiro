const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
// Rota para criar um novo usuário
router.post('/', userController.create);

// Rota para atualizar um usuário
router.put('/:id', userController.update);

// Rota para deletar um usuário
router.delete('/:id', userController.delete);

// Rota para obter todos os usuários
router.get('/', userController.getAll);

// Rota para obter um usuário sem a senha
router.get('/me', userController.getUserWithoutPassword);

// Rota para autenticar um usuário 
router.post('/authenticate', userController.authenticate);

module.exports = router;
