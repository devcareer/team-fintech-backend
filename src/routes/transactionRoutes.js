const express = require('express');

const { transferAirtime, transferData } = require('../controllers/transactionControllers');

const router = express.Router();

router.post('/airtime', transferAirtime);

router.post('/data', transferData);

module.exports = router;
