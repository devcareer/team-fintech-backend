const express = require('express');
const router = express.Router()
const {editProfileControllers} = require('../controllers/editProfileControllers')


router.post('/edit', editProfileControllers.editProfile) 








module.exports = router