const router = require('express').Router();

const { verifyAccountDetails } = require('../controllers/accountControllers');

router.get('/verify', verifyAccountDetails);

module.exports = router;
