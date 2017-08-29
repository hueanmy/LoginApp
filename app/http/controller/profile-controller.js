const DBConnection = require('../../../database/DBConnection');
const Profile = require('../../profile/profile');
const ProfileService = require('../../profile/profile-service');

let profileService = new ProfileService(DBConnection);

function getProfile (req, res, next) {
	profileService.findByCredentialId(req.user.id)
		.then((profile) => {
			res.render('profile.html', {profile: profile});
		})
		.catch(next);
}

function updateProfile (req, res, next) {
	profileService.update(req.profile)
		.then((result) => {
			req.flash('success_msg', 'update profile successfully');
			res.redirect('/profile');
		})
		.catch(next);
}

function getEditProfile(req, res, next) {
	profileService.findByCredentialId(req.user.id)
		.then((profile) => {
			res.render('changeProfile.html', {profile: profile});
		})
		.catch(next);
}

function getProfiles(req, res, next) {
	profileService.findByCondition(req.condition)
		.then((profiles) => {
			res.render('list-profile.html', {
				profiles: profiles,
				key: req.condition.getKey(),
				value: req.condition.getValue()
			});
		})
		.catch(next);	
}

exports.getProfile = getProfile;
exports.updateProfile = updateProfile;
exports.getEditProfile = getEditProfile;
exports.getProfiles = getProfiles;
