const mysqlConnection = require('../../database/DBConnection');
// const Credential = require('credential');
const ProfileService = require('../profile/profile-service');

function postRegisterService(credential, profile){

    let profileService = new ProfileService(mysqlConnection);
    let query = "INSERT INTO credential SET ?";
    return new Promise((resolve, reject) => {
        mysqlConnection.query(query, [credential], (err, result) => {
            if(err) {
                reject(err);
            } else {
                profile.setCredentialId(result.insertId);
                profileService.create(profile).then(() => {
                    resolve(result);
                });
            }
        });
    });



    // register(credentialRawData){
    //     let credential = new Credential(credentialRawData.username, credentialRawData.password,
    //         credentialRawData.provider, credentialRawData.providerId);
    //     try{
    //         //TODO store to DB
    //     }catch (e){
    //
    //     }
    //     //return a Promise
    // }

}

exports.postRegisterService = postRegisterService;