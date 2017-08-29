const mysqlConnection = require('../../database/DBConnection');

class Profile {

    constructor (username, fullname, email, address, avatar) {
        this.username = username;
        this.fullname = fullname;
        this.email    = email;
        this.address  = address;
        this.avatar   = avatar;
    }

    setCredentialId(id) {
        this.credentialId = id;
        return this;
    }
}

module.exports = Profile;
