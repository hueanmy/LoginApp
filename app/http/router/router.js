const express = require('express');
const registerController = require('../controller/register-controller');
const UserExisted = require('../middleware/user-existed');
const RegisterValidator = require('../middleware/register-validator');
const LoginController = require('../controller/login-controller');
const passport = require('passport');
// const profileRouter = require('./profile-router');
let router = express.Router();

router.get('/register', registerController.getRegister);
router.post('/register',UserExisted, RegisterValidator, registerController.postRegister);

router.get('/login', LoginController.getLogin);
router.post('/login',
    passport.authenticate('local', {
        successRedirect: '/profile',
        failureRedirect: '/login',
        failureFlash: true
    } )
);
// router.use('/profile', profileRouter);

module.exports = router;