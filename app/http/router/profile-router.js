const express = require('express');
const profileController = require('../controller/profile-controller');
let router = express.Router();

router.get('/', profileController.getProfile);

module.exports = router;