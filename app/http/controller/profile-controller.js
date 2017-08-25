const Profile = require('../../profile/profile');

function getProfile (req, res, next) {
	Profile.findByCredentialId(req.user.id)
		.then((profile) => {
			res.render('profile.html', {profile: profile});
		})
		.catch(next);
}

function updateProfile (req, res, next) {
	req.profile.update()
		.then((result) => {
			req.flash('success_msg', 'update profile successfully');
			res.redirect('/profile');
		})
		.catch(next);
}

function getEditProfile(req, res, next) {
	Profile.findByCredentialId(req.user.id)
		.then((profile) => {
			res.render('changeProfile.html', {profile: profile});
		})
		.catch(next);
}

function getProfiles(req, res, next) {
	Profile.findByCondition(req.condition)
		.then((profiles) => {
			console.log(profiles);
			res.render('list-profile.html', {
				profiles: profiles,
				key: req.key,
				value: req.value
			});
		})
		.catch(next);	
}

exports.getProfile = getProfile;
exports.updateProfile = updateProfile;
exports.getEditProfile = getEditProfile;
exports.getProfiles = getProfiles;
