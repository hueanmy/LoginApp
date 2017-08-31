const bcrypt = require('bcrypt');

class Credential {

    constructor (username, password, provider, providerId) {
        this.username    = username;
        this.provider    = provider;
        this.providerId  = providerId;
        this.password = password;
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
