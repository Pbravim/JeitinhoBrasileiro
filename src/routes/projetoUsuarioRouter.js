// routes/projetoUsuarioRoutes.js
const express = require('express');
const router = express.Router();
const projetoUsuarioController = require('../controllers/projetoUsuarioController');

router.post('/', projetoUsuarioController.assignUser);
router.get('/', projetoUsuarioController.getAll);
router.get('/:id', projetoUsuarioController.getByProjetoId);
router.put('/:id', projetoUsuarioController.update);
router.delete('/:id', projetoUsuarioController.delete);

module.exports = router;
