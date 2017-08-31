const Profile = require('../../app/profile/profile');
const DBConnection = require('../../database/DBConnection');

module.exports = function(req, res, next) {
    let fullname = req.body.fullname;
    let email = req.body.email;
    let address = req.body.address;
    let avatar = req.body.avatar;

    req.checkBody('fullname', 'FullName is required').notEmpty();
    req.checkBody('address', 'Address is required').notEmpty();
    req.checkBody('email', 'Email is not valid').isEmail();

    req.getValidationResult().then((result) => {
        let errors = result.array();
        if (errors.length) {
            req.flash('error_msg', errors[0].msg);
            res.redirect('/profile/edit');
        } else {
            req.profile = new Profile(null, fullname, email, address, avatar).setCredentialId(req.user.id);
            next();
        }
    });

}