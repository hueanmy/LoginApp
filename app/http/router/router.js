const express = require('express');
const RegisterController = require('../controller/register-controller');
const UserExisted = require('../middleware/user-existed');
const RegisterValidator = require('../middleware/register-validator');
const ensureUnauthenticate = require('../middleware/ensure-unauthenticate');
const LoginController = require('../controller/login-controller');
const ProfileController = require('../controller/profile-controller');
const passport = require('passport');
const profileRouter = require('./profile-router');
let router = express.Router();

router.use('/profile', profileRouter);

router.get('/register', ensureUnauthenticate, RegisterController.getRegister);
router.post('/register', UserExisted, RegisterValidator, RegisterController.postRegister);

router.get('/login', ensureUnauthenticate, LoginController.getLogin);
router.post('/login',
    passport.authenticate('local', {
        successRedirect: '/profile',
        failureRedirect: '/login',
        failureFlash: true
    } )
);
//facebook
router.get('/auth/facebook', passport.authenticate('facebook', {scope: 'email'}));
router.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
        successRedirect: '/profile',
        failureRedirect: '/login'
    }));

router.get('/logout', (req, res, next) => {
	req.logout();
	req.flash('success_msg', 'You are logged out');
	res.redirect('/login');
})

module.exports = router;
