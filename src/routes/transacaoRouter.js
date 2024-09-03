const express = require('express');
const TransacaoController = require('../controllers/transacaoController');
const authMiddleware = require('../middlewares/authJwt');

const router = express.Router();

router.get('/:id', authMiddleware, TransacaoController.getTransacao);
router.get('/', authMiddleware, TransacaoController.getAllTransacoes);

module.exports = router;
