const passport = require('passport');

function getLoginWithLocal(req, res, next) {
    res.render('login.html');
}

function postLoginWithLocal(req, res, next) {
    passport.authenticate('local', {
        successRedirect: '/profile',
        failureRedirect: '/login',
        failureFlash: true
    })(req, res, next)
}

function loginWithFacebook(req, res, next) {
    passport.authenticate('facebook', {
        successRedirect: '/profile',
        failureRedirect: '/login'
    })(req, res, next)
}

function loginWithGoogle(req, res, next) {
    passport.authenticate('google', { failureRedirect: '/login', successRedirect: '/profile' })(req, res, next);
}

function loginWithTwitter(req, res, next) {

    passport.authenticate('twitter', { successRedirect: '/profile',
        failureRedirect: '/login' })(req, res, next)
}

exports.getLoginWithLocal = getLoginWithLocal;
exports.postLoginWithLocal = postLoginWithLocal;
exports.loginWithFacebook = loginWithFacebook;
exports.loginWithGoogle = loginWithGoogle;
exports.loginWithTwitter = loginWithTwitter;