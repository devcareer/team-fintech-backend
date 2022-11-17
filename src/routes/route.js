// TODO routes
const express = require('express');

const router = express.Router();

const { createWallet } = require('../controllers/controller');

// route for creating wallet
router.post('/create/wallet', createWallet);

module.exports = { router };
