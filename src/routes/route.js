// TODO routes
const { Router } = require('express');
const authcontroller = require('../controllers/controller');

const router = Router();

// auth signin
router.post('/signin', authcontroller.postSignin);

router.get('/signin', authcontroller.getSignin);

// auth googleSignin
router.get('/auth/google', authcontroller.getGoogleSignin);

router.get('/auth/google/redirect', authcontroller.handleGoogleSignin);

// signout
router.get('/signout', authcontroller.handleSignout);

module.exports = router;
