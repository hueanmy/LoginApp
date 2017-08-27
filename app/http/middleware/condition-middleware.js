const GetProfileCondition 			= require('../../profile/search-condition/get-profile-condition');
const GetProfileByUsernameCondition = require('../../profile/search-condition/get-profile-by-username-condition');
const GetProfileByFullnameCondition = require('../../profile/search-condition/get-profile-by-fullname-condition');

module.exports = function(req, res, next) {
	let condition = new GetProfileCondition();
	if (req.query.username) {
		req.key = 'username';
		req.value = req.query.username;
		condition = new GetProfileByUsernameCondition(req.query.username);
	}

	if (req.query.fullname) {
		req.key = 'fullname';
		req.value = req.query.fullname;
		condition = new GetProfileByFullnameCondition(req.query.fullname);
	}

	req.condition = condition;
	next();
}