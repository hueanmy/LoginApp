class ProfileSearch {
	constructor (mysqlConnection) {
		this.mysqlConnection = mysqlConnection;
	}

	getProfileByCredentialId(id) {
        let query = 'SELECT * FROM profile WHERE credentialId = ?';

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
}