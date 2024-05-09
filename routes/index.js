const express = require('express');
const router = express.Router();


const indexcontroller = require('../controllers/index')
const editController = require('../controllers/Edit')
router.get('/', indexcontroller.getIndex);



router.post('/ajouter',indexcontroller.PostIndex );

router.delete('/supprimer/:id', indexcontroller.deleteIndex);

router.get('/editer/:id', editController.getEdit);

router.put('/editer/:id', editController.PutEdit);

module.exports = router;