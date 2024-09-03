const express = require('express');
const CategoriaController = require('../controllers/categoriaController');
const authMiddleware = require('../middlewares/authJwt');

const router = express.Router();

// -> /categorias

// nome descricao
router.post('/', authMiddleware, CategoriaController.create);       
router.get('/', CategoriaController.getAll);        

// ID COMO PARAMETRO
router.get('/:id', CategoriaController.getById);   
router.put('/:id', authMiddleware, CategoriaController.update);    
router.delete('/:id', authMiddleware, CategoriaController.delete); 

module.exports = router;
