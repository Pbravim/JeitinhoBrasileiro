const express = require('express');
const CarrinhoController = require('../controllers/carrinhoController');
const authMiddleware = require('../middlewares/authJwt');

const router = express.Router();

//COMECAO COM -> /carrinho

router.post('/adicionar', authMiddleware, CarrinhoController.addItem);
router.get('/', authMiddleware, CarrinhoController.getCarrinho);
router.post('/checkout', authMiddleware, CarrinhoController.checkout);
router.delete('/limpar', authMiddleware, CarrinhoController.clearCarrinho);

module.exports = router;
