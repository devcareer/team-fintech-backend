const express = require('express');

const router = express.Router();

const { createWallet } = require('../controllers/walletControllers');

// route for creating wallet
router.post('/create', createWallet);

module.exports = router;
