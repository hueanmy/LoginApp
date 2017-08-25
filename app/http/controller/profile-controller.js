const Profile = require('../../profile/profile');

function getProfile (req, res, next) {
	Profile.findByCredentialId(7)
		.then((profile) => {
			res.render('profile.html', {profile: profile});
		})
		.catch(next);
}

function updateProfile (req, res, next) {
	

}

exports.getProfile = getProfile;
exports.updateProfile = updateProfile;
