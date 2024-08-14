const {Router} = require('express')
const testeController = require('../controllers/teste')
const authMiddleware = require('../middlewares/authJWT')
const router = new Router();

router.get('/exemplo/:id', authMiddleware, testeController.getExemplo);

module.exports = router;