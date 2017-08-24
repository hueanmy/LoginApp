function getRegister(req, res, next) {
    res.render('register.html');
}

function postRegister(req, res, next) {

}

exports.getRegister = getRegister;
exports.postRegister = postRegister;