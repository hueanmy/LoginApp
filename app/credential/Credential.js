const mysqlConnection = require('../database/DBConnection');

class Credential {

    constructor (username, password, provider, providerId) {
        this.username = username;
        this.password = password;
        this.provider    = provider;
        this.providerId  = providerId;
    }

    setId (id) {
        this.id = id;
        return this;
    }

    create() {
        let query = 'insert into credential set ?';
        return new Promise((resolve, reject) => {
            this.mysqlConnection.query(query, [this], (error, result) => {
                if(error) {
                    reject(error);
                }
                else {
                    resolve(result);
                }
            })
        })
    }
}

module.exports = Profile;
