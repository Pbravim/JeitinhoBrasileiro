const express = require('express');
const tarefaController = require('../controllers/tarefaController.js');
const { Router } = express;
const AuthMiddleware = require('../middlewares/auth');



const router = Router();


router.post('/', tarefaController.create)
router.get('/', tarefaController.getAll);
router.get('/:id', tarefaController.get);


router.put('/:id', tarefaController.update);
router.delete('/:id', tarefaController.remove);

module.exports = router;