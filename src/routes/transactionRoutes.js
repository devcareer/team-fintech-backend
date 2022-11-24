const express = require('express');

const { transferAirtime } = require('../controllers/transactionControllers');

const router = express.Router();

router.post('/airtime', transferAirtime);

module.exports = router;
