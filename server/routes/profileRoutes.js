import express from 'express';
const profileAuth = express.Router();
import profileController from '../controllers/profileController.js';

import checkUserAuthentication from '../middleware/auth-checkAuthentication.js'

// profile Change Data Routes
profileAuth.get('/get-user-info',checkUserAuthentication, profileController.getUserAllInfo);

profileAuth.post('/add-education', checkUserAuthentication, profileController.addEducation);
profileAuth.post('/add-experience', checkUserAuthentication, profileController.addExperience);

profileAuth.put('/update-personal-info/:id', checkUserAuthentication, profileController.updatePersonalInfo);
profileAuth.put('/update-bio/:id', checkUserAuthentication, profileController.updateBio);
profileAuth.put('/update-language/:id', checkUserAuthentication, profileController.updateLanguage);
profileAuth.put('/update-intrested-topic/:id', checkUserAuthentication, profileController.updateIntrestedTopic);
profileAuth.put('/update-social-media/:id', checkUserAuthentication, profileController.updateSocialMedia);
profileAuth.put('/update-education/:id', checkUserAuthentication, profileController.updateEducation);
profileAuth.put('/update-experience/:id', checkUserAuthentication, profileController.updateExperience);

profileAuth.delete('/delete-education/:id', checkUserAuthentication, profileController.deleteEducation);
profileAuth.delete('/delete-experience/:id', checkUserAuthentication, profileController.deleteExperience);










export default profileAuth;
