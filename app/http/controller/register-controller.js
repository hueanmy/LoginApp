function getRegister(req, res, next) {
    res.render('register.html');
}

function postRegister(req, res, next) {
    req.credential.create().then((result) => {
        req.profile.setCredentialId(result.insertId);
        req.profile.create().then(() => {
            res.redirect('/login');
        });
    });
}

exports.getRegister = getRegister;
exports.postRegister = postRegister;