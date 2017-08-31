const mysqlConnection = require('../../database/DBConnection');
const ProfileService = require('../../app/profile/profile-service');
const registerService = require('../../app/credential/registerService');

function getRegister(req, res, next) {
    res.render('register.html');
}

function postRegister(req, res, next) {

    registerService.postRegisterService(req.credential, req.profile).then(() => {
        req.flash('success_msg', 'Register success');
        res.redirect('/login');
    })

    // let profileService = new ProfileService(mysqlConnection);
    // let query = "INSERT INTO credential SET ?";
    // mysqlConnection.query(query, [req.credential], (err, result) => {
    //     if(err) {
    //         next(err);
    //     } else {
    //         req.profile.setCredentialId(result.insertId);
    //         profileService.create(req.profile).then(() => {
    //             req.flash('success_msg', 'Register success');
    //             res.redirect('/login');
    //         });
    //     }
    // });
    // req.credential.create().then((result) => {
    //     req.profile.setCredentialId(result.insertId);
    //     profileService.create(req.profile).then(() => {
    //         req.flash('success_msg', 'Register success');
    //         res.redirect('/login');
    //     });
    // });
}

exports.getRegister = getRegister;
exports.postRegister = postRegister;