let express = require('express');
var router = express.Router();

const homeController = require('../controllers/homeController')
/* GET home page. */
router.get('/',homeController.index);

router.post('/contato', homeController.contato);

router.post('/newsletter',homeController.newsletter);


router.get('/listar-contatos',homeController.contatos)

router.get('/cadastro',homeController.cadastro)

router.post('/cadastro',homeController.usuario)

module.exports = router;
