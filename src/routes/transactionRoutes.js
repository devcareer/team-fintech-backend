const express = require('express');

const { transferAirtime, transferData, transferFunds } = require('../controllers/transactionControllers');

const router = express.Router();

router.post('/airtime', transferAirtime);

router.post('/data', transferData);

router.post('/cash', transferFunds);
router.post('/cash', transferAirtime);

module.exports = router;
