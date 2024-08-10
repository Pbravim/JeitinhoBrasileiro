const express = require('express');
const tarefaController = require('../controllers/tarefaController.js');
const { Router } = express;

// import AuthMiddleware from '../../../middlewares/auth';
// const validateResponserMiddleware = require("../../../middlewares/validateResponse");


const router = Router();


router.post('/', tarefaController.create)
router.get('/', tarefaController.getAll);
router.get('/:id', tarefaController.get);


router.put('/:id', tarefaController.update);
router.delete('/:id', tarefaController.remove);

module.exports = router;