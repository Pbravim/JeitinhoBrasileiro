const express = require('express');
const ProdutoController = require('../controllers/produtoController');
const authMiddleware = require('../middlewares/authJwt');
const upload = require('../middlewares/uploadMiddleware'); // Certifique-se de criar ou mover o upload para um middleware

const router = express.Router();

//Todos iniciam com ->    /produtos

// nome descricao preco estoque categoria_id 
router.post('/', authMiddleware, ProdutoController.create);     
router.get('/', ProdutoController.getAll);     

router.post('/:id/imagem', authMiddleware, upload.single('imagem'), ProdutoController.uploadImagem);

// ID COMO PARAMETRO  
router.get('/:id', ProdutoController.getById);  
router.put('/:id', authMiddleware, ProdutoController.update);   
router.delete('/:id', authMiddleware, ProdutoController.delete);

module.exports = router;
