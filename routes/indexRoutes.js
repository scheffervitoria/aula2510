const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');


// Rota para exibir o formulário de login
router.get('/index', authController.getIndex);

// Rota para autenticar o login
router.post('/index', authController.postIndex);

// Rota protegida para o dashboard
router.get('/dashboard', (req, res) => {
    res.render('dashboard', { userId: req.session.userId });
});

// Rota para logout
router.get('/logout', authController.logout);

module.exports = router;
