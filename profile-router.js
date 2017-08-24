const express = require ('express');
const ProfileController = require ('./app/http/controller/profile-controller');

let router = express.Router();

router.post('/register', ProfileController.createProfile);

module.exports = router;