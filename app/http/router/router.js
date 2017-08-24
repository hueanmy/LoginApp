const express = require('express');
const registerController = require('../controller/register-controller');
const profileRouter = require('./profile-router');
let router = express.Router();

router.get('/register', registerController.getRegister);
router.use('/profile', profileRouter);

module.exports = router;