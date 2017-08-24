const express = require('express');
const registerController = require('../controller/register-controller');
let router = express.Router();

router.get('/register', registerController.getRegister);

module.exports = router;