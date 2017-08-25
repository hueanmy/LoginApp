module.exports = function(req, res, next) {
    let fullname = req.body.fullname;
    let username = req.body.username;
    let password = req.body.password;
    let password2 = req.body.password2;
    let email = req.body.email;
    let address = req.body.address;
    let avatar = req.body.avatar;

    req.checkBody('password2', 'Password is not match').equal(req.body.password);
};