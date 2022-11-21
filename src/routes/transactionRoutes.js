const router = require('express').Router();
const { transferFunds } = require('../controllers/transactionControllers');

// transfer money to another account
router.post('/send', transferFunds);

module.exports = router;
