const {Router} = require('express')
const testeController = require('../controllers/teste')

const router = new Router();

router.get('/exemplo/:id',testeController.getExemplo);

module.exports = router;