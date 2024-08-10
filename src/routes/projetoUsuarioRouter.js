// routes/projetoUsuarioRoutes.js
const express = require('express');
const { Router } = express;

const projetoUsuarioController = require('../controllers/projetoUsuarioController');
const AuthMiddleware = require('../middlewares/auth');

const router = Router();

router.post('/', AuthMiddleware, projetoUsuarioController.assignUser);
router.get('/', AuthMiddleware, projetoUsuarioController.getAll);
router.get('/:id', AuthMiddleware, projetoUsuarioController.getByProjetoId);
router.put('/:id', AuthMiddleware, projetoUsuarioController.update);
router.delete('/:id', AuthMiddleware, projetoUsuarioController.delete);

module.exports = router;
