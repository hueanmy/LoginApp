const Profile = require('../../profile/profile');

function getProfile (req, res, next) {
	let profile = new Profile('username', 'fullname', 'email', 'address', 'avatar').setCredentialId(2);
	
}

exports.getProfile = getProfile;
