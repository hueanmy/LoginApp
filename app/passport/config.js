const local = require('./provider/local');
const facebook = require('./provider/facebook');
const google = require('./provider/google');
const twitter = require('./provider/twitter');
const DBConnection 	= require('../../database/DBConnection');

module.exports = function(passport) {
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        DBConnection.query("select * from credential where id=?", [id], (err, result) => {
            done(err, result[0]);
        });
    });
    
    passport.use(local);
    passport.use(facebook);
    passport.use(google);
    passport.use(twitter);
};