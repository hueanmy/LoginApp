const express = require('express');
const RegisterController = require('../controller/register-controller');
const UserExisted = require('../middleware/user-existed');
const RegisterValidator = require('../middleware/register-validator');
const LoginController = require('../controller/login-controller');
const ProfileController = require('../controller/profile-controller');
const passport = require('passport');
// const profileRouter = require('./profile-router');
let router = express.Router();

router.get('/register', RegisterController.getRegister);
router.post('/register',UserExisted, RegisterValidator, RegisterController.postRegister);

router.get('/login', LoginController.getLogin);
router.post('/login',
    passport.authenticate('local', {
        successRedirect: '/profile',
        failureRedirect: '/login',
        failureFlash: true
    } )
);
router.get('/auth/facebook', passport.authenticate('facebook'));

router.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
        successRedirect: '/profile',
        failureRedirect: '/login'
    }));

router.get('/profile', ProfileController.getProfile);
module.exports = router;