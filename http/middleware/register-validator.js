const Credential = require('../../app/credential/credential');
const Profile = require('../../app/profile/profile');
const ProfileService = require('../../app/profile/profile-service');

module.exports = function(req, res, next) {
    let fullname  = req.body.fullname;
    let username  = req.body.username;
    let password  = req.body.password;
    let password2 = req.body.password2;
    let email     = req.body.email;
    let address   = req.body.address;
    let avatar    = req.body.avatar;

    req.assert('password2', 'Password is not match').equals(req.body.password);

    req.getValidationResult().then((result) => {
        let errors = result.array();
        if(!result.isEmpty()) {
            res.render('register.html', {
                errors: errors
            });
        } else {
            req.credential = new Credential(username, password, null, null);
            req.profile = new Profile(username, fullname, email, address, avatar);
            next();
        }
    })
};