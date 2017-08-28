const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const Credential     = require('../../credential/credential');
const Profile        = require('../../profile/profile');
const DBConnection   = require ('../../../database/DBConnection');
const config         = require('../../../config');

module.exports = new GoogleStrategy(config.googleAuth,
    function(token, tokenSecret, profile, done) {
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
                    credential.create()
                        .then((result) => {
                            credential.setId(result.insertId);
                            profileUser.setCredentialId(result.insertId);
                            profileUser.create()
                                .then(() => {
                                    done(null, credential);
                                })
                                .catch(done);
                        })
                        .catch(done);
                }
            }
        })
    });