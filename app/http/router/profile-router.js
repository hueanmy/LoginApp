const express 					= require('express');
const profileController 		= require('../controller/profile-controller');
const updateProfileValidator 	= require('../middleware/update-profile-validator');
const conditionMiddleware		= require('../middleware/condition-middleware');
const ensureAuthenticate 		= require('../middleware/ensure-authenticate');

let router = express.Router();

router.get('/', ensureAuthenticate, profileController.getProfile);
router.get('/edit', ensureAuthenticate, profileController.getEditProfile);
router.get('/editPw', ensureAuthenticate, profileController.getEditPassword);
router.post('/', updateProfileValidator, profileController.updateProfile);
router.get('/list', conditionMiddleware, profileController.getProfiles);

module.exports = router;