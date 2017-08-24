class ProfileStore {
    constructor(mysqlConnection) {
        this.mysqlConnection = mysqlConnection;
    }

    getProfileByCredentialId(id) {
        let query = 'SELECT * FROM loginapp WHERE credential = ?';
        return new Promise((resolve, reject) => {
            this.mysqlConnection.query(query, [id], (error, result) => {
                if(error) {
                    reject(error);
                }
                else {
                    if(result.length) {
                        resolve(result[0]);
                    }
                    else {
                        resolve(null);
                    }
                }
            })
        })
    }
    createProfile(profile) {
        let query = 'INSERT INTO loginapp SET ?';
        return new Promise((resolve, reject) => {
            this.mysqlConnection.query(query, [profile], (error, result) => {
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