const express 					= require('express');
const profileController 		= require('../controller/profile-controller');
const updateProfileValidator 	= require('../middleware/update-profile-validator');
const conditionMiddleware		= require('../middleware/condition-middleware');

let router = express.Router();

router.get('/', profileController.getProfile);
router.get('/edit', profileController.getEditProfile);
router.post('/', updateProfileValidator, profileController.updateProfile);
router.get('/list', conditionMiddleware, profileController.getProfiles);

module.exports = router;