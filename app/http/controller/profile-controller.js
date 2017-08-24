const DBConnection = require('../../../database/DBConnection');
const ProfileStore = require('../../profile/profile-store');

let profileStore = new ProfileStore(DBConnection);

function createProfile(request, response) {

}

exports.createProfle = createProfile;