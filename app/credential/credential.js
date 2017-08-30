const mysqlConnection = require('../../database/DBConnection');

class Credential {

    constructor (username, password, provider, providerId) {
        this.username    = username;
        this.password    = password;
        this.provider    = provider;
        this.providerId  = providerId;
    }

    setId (id) {
        this.id = id;
        return this;
    }
}

module.exports = Credential;
