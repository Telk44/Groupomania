// Logique de routing //
const express = require('express');
const router = express.Router();
const messageCtrl = require('../controllers/message');
const auth = require('../middleware/auth');
/* const multer = require('../middleware/multer-config'); */

// On rajoute le middleware auth sur les routes qu'on veut protéger //
router.post('/new', auth, /* multer, */ messageCtrl.createMessage);
router.delete('/:id', auth, messageCtrl.deleteMessage);
router.get('/:id', auth, messageCtrl.getOneMessage);
router.get('/', auth, messageCtrl.getAllMessages);





module.exports = router;