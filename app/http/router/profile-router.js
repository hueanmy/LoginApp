const express = require('express');
const profileController = require('../controller/profile-controller');
let router = express.Router();

router.get('/', profileController.getProfile);
router.post('/', profileController.updateProfile);
router.get('/list', profileController.getProfiles);

module.exports = router;