const express = require('express');
const registerController = require('../controller/register-controller');
let router = express.Router();

router.get('/register', registerController.getRegister);
router.post('/register', registerController.postRegister);

module.exports = router;
