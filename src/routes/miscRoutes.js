const express = require('express');

const router = express.Router();

const { getBvnDetails, webHookHandler } = require('../controllers/miscControllers');

router.get('/', getBvnDetails);
router.post('/', webHookHandler);

module.exports = router;
