const FacebookStrategy = require('passport-facebook').Strategy;
const Credential       = require('../../credential/credential');
const Profile          = require('../../profile/profile');
const DBConnection     = require ('../../../database/DBConnection');
const config           = require('../../../config');
const ProfileService = require('../../profile/profile-service');

module.exports = new FacebookStrategy(config.facebookAuth,
    function(accessToken, refreshToken, profile, done){
        let query = 'SELECT * FROM credential WHERE provider= ? and providerId = ?';
        DBConnection.query(query, [profile.provider, profile.id], (err, result) => {
            if(err) {
                done(err);
            } else {
                if(result.length) {
                    done(null, result[0]);
                } else {
                    let credential = new Credential(null, null, profile.provider, profile.id);
                    let profileUser = new Profile(null, profile.displayName, profile.emails[0].value, null, profile.photos[0].value);
                    let profileService = new ProfileService(DBConnection);
                    let query = "INSERT INTO credential SET ?";
                    DBConnection.query(query, [credential], (err, result) => {
                        if(err) {
                            next(err);
                        } else {
                            credential.setId(result.insertId);
                            profileUser.setCredentialId(result.insertId);
                            profileService.create(profileUser)
                                .then(() => {
                                    done(null, credential);
                                })
                                .catch(done);
                        }
                    })
                    // credential.create().then((result) => {
                    //         credential.setId(result.insertId);
                    //         profileUser.setCredentialId(result.insertId);
                    //         profileUser.create()
                    //             .then(() => {
                    //                 done(null, credential);
                    //             })
                    //             .catch(done);
                    //     })
                }
            }
        });
    }
);
