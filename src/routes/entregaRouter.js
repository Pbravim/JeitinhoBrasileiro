const express = require('express');
const EntregaController = require('../controllers/entregaController');
const authMiddleware = require('../middlewares/authJwt');

const router = express.Router();

router.get('/:id', authMiddleware,  EntregaController.getEntrega);
router.get('/', authMiddleware, EntregaController.getAllEntregas);

module.exports = router;
