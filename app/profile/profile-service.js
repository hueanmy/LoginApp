class ProfileService {
	constructor(mysqlConnection) {
		this.mysqlConnection = mysqlConnection;		
	}

	create(profile) {
        let query = 'insert into profile set ?';
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

    update(profile) {
        let query = "update profile set fullname=?, email=?, address=?, avatar=? where credentialId=?";

        return new Promise((resolve, reject) => {
            this.mysqlConnection.query(query, [profile.fullname, profile.email, profile.address, profile.avatar, profile.credentialId], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(profile);
                }
            });
        });  
    }

    findByCredentialId(id) {
        let query = "select * from profile where credentialId=?";

        return new Promise((resolve, reject) => {
            this.mysqlConnection.query(query, [id], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    if (result.length) {
                        resolve(result[0]);
                    }
                    else {
                        resolve(null);
                    }                    
                }
            });
        });  
    }

    findByCondition(condition) {
        return new Promise((resolve, reject) => {
            this.mysqlConnection.query(condition.getSQL(), condition.getParameter(), (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });  
    }

}

module.exports = ProfileService;
