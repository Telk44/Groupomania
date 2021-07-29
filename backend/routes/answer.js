// Logique de routing //
const express = require('express');
const router = express.Router();

const answerCtrl = require('../controllers/answer');
const auth = require('../middleware/auth');




// On rajoute le middleware auth sur les routes qu'on veut protéger //
router.post('/new', auth, answerCtrl.createAnswer);
router.get('/:id/display', auth, answerCtrl.getAllAnswers);
router.get('/:id', auth, answerCtrl.getOneAnswer);
router.delete('/:id', auth, answerCtrl.deleteAnswer);





module.exports = router;