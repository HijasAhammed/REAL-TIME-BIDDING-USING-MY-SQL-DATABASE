const express= require("express")
const userController=require('../Controllers/userController');
const authcontroller=require('../Middileware/authMiddleware');

const router=express.Router();

router.get('/profile', authMiddleware.authenticate, userController.getProfile);

module.exports = router;