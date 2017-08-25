const FacebookStrategy = require('passport-facebook').Strategy;
const Credential = require('../../../credential/credential');
const Profile = require('../../../profile/profile');
const DBConnection = require ('../../../../database/DBConnection');
const config = require('../../../../config');

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
                    console.log(profile);
                    let credential = new Credential(null, null, profile.provider, profile.id);
                    // let profile = new Profile();
                    credential.create().then((result) => {
                        done(null, result[0]);
                    }) .catch(done);
                }
            }
        });
    }
);
