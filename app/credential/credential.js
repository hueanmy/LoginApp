const bcrypt = require('bcrypt');

class Credential {

    constructor (username, provider, providerId) {
        this.username    = username;
        this.provider    = provider;
        this.providerId  = providerId;
    }

    setId (id) {
        this.id = id;
        return this;
    }

    hashPassWord(password) {
        let salt = bcrypt.genSaltSync(10);
        this.password = bcrypt.hashSync(password, salt);
        return this;
    }
}

module.exports = Credential;
