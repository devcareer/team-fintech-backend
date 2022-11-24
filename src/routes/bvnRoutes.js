const express = require('express');

const router = express.Router();

const { getBvnDetails } = require('../controllers/bvnControllers');

router.get('/', getBvnDetails);

module.exports = router;
