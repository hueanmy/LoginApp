const mysqlConnection = require('../../database/DBConnection');
const Credential = require('credential');
class registerService{
    /**
     *
     * @return Credential
     */
    register(credentialRawData){
        let credential = new Credential(credentialRawData.username, credentialRawData.password,
            credentialRawData.provider, credentialRawData.providerId);
        try{
            //TODO store to DB
        }catch (e){

        }
        //return a Promise
    }

}