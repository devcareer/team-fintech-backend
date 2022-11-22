const router = require('express').Router();

const { getAccountDetails } = require('../controllers/accountControllers');

router.get('/', getAccountDetails);

module.exports = router;
