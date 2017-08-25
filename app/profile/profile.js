const mysqlConnection = require('../../database/DBConnection');

class Profile {

    constructor (username, fullname, email, address, avatar) {
        this.username = username;
        this.fullname = fullname;
        this.email    = email;
        this.address  = address;
        this.avatar   = avatar;
    }

    setId (id) {
        this.id = id;
        return this;
    }

    setCredentialId(id) {
        this.credentialId = id;
        return this;
    }

    create() {
        let query = 'insert into profile set ?';
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

    update() {
        let query = "update profile set fullname=?, email=?, address=?, avatar=? where credentialId=?";

        return new Promise((resolve, reject) => {
            this.mysqlConnection.query(query, [this.fullname, this.email, this.address, this.avatar, this.credentialId], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(profile);
                }
            });
        });  
    }

}

module.exports = Profile;
