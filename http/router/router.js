const express              = require('express');
const RegisterController   = require('../controller/register-controller');
const UserExisted          = require('../middleware/user-existed');
const RegisterValidator    = require('../middleware/register-validator');
const ensureUnauthenticate = require('../middleware/ensure-unauthenticate');
const LoginController      = require('../controller/login-controller');
const passport             = require('passport');
const profileRouter        = require('./profile-router');
const UploadImage          = require('../../app/upload-image/upload-image');
const path                 = require('path');
let router                 = express.Router();

router.use('/profile', profileRouter);

router.get('/register', ensureUnauthenticate, RegisterController.getRegister);
router.post('/register', UserExisted, RegisterValidator, RegisterController.postRegister);

router.get('/login', ensureUnauthenticate, LoginController.getLoginWithLocal);
router.post('/login', LoginController.postLoginWithLocal);
//facebook
router.get('/auth/facebook', LoginController.loginWithFacebook);
router.get('/auth/facebook/callback', LoginController.loginWithFacebookCallback);
//google
router.get('/auth/google', LoginController.loginWithGoogle);
router.get('/auth/google/callback', LoginController.loginWithGoogleCallback);
//twitter
router.get('/auth/twitter', LoginController.loginWithTwitter);
router.get('/auth/twitter/callback', LoginController.loginWithTwitterCallback);

router.get('/logout', (req, res, next) => {
	req.logout();
	req.flash('success_msg', 'You are logged out');
	res.redirect('/login');
});

router.post('/upload', UploadImage);

router.get('/image/:filename', (req, res, next) => {
    res.setHeader('Content-Type', 'image/jpg');
    res.status(200).sendFile(path.resolve(`./uploads/${req.params.filename}`));
});

module.exports = router;
