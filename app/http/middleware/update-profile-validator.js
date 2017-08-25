const Profile = require('../../profile/profile');
const DBConnection = require('../../../database/DBConnection');

module.exports = function(req, res, next) {
    let username = req.user.username;
    let fullname = req.body.fullname;
    let email = req.body.email;
    let address = req.body.address;
    let avatar = req.body.avatar;

    let query = "select * from credential where username=?";

    req.checkBody('fullname', 'FullName is required').notEmpty();
    req.checkBody('username', 'Username is required').notEmpty();
    req.checkBody('email', 'Email is not valid').isEmail();

    DBConnection.query(query, [username], (err, result) => {
        req.getValidationResult().then((result) => {
            let errors = result.array();

            if (result.length) {
                errors.push({msg: "username is existed"})
            }
            if (!errors.length) {
                res.render('changeProfile.html', {
                    errors: errors
                });
            } else {
                req.profile = new Profile(username, fullname, email, address, avatar).setCredentialId(req.user.id);
                next();
            }
        });

    });
}