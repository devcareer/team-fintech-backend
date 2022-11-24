const express = require('express');

const { sendAirtime } = require('../controllers/airtimeControllers');

const router = express.Router();

router.post('/', sendAirtime);

module.exports = router;
