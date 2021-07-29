const express = require('express'); // On a besoin d'express pour créer le routeur //
const router = express.Router(); // Création du routeur //

// Importation de la logique métier des controllers //
const userCtrl= require('../controllers/user');
const auth = require('../middleware/auth');

// Définition des routes authentification //
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.delete('/:id', auth, userCtrl.deleteAccount);
router.get('/:id', auth, userCtrl.getOneAccount);
router.put('/:id', auth, userCtrl.modifyAccount);
router.get('/accounts', userCtrl.getAllAccounts);

module.exports = router;

