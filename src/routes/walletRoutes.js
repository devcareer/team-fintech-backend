const express = require('express');

const router = express.Router();

const { createWallet, fundWallet } = require('../controllers/walletControllers');

// route for creating wallet
router.post('/create', createWallet);
router.post('/fund', fundWallet);

module.exports = router;
