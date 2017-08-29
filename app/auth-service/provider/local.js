const DBConnection 	    = require('../../../database/DBConnection');
const LocalStrategy 	= require('passport-local').Strategy;

module.exports = new LocalStrategy(
    function(username, password, done) {
        DBConnection.query("select * from credential where username=?", [username], (err, result) => {
            if (err) {
                return done(err);
            }
            if (!result.length) {
                return done(null, false, { message: 'Incorrect username.' });
            }

            if (password !== result[0].password) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, result[0]);
        });
    }
);