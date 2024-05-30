const express = require('express');
const router = express.Router();
const authMiddleware = require('../Middileware/authMiddleware'); // Corrected spelling
const UserController = require('../Controllers/userController');
const authcontroller=require('../Controllers/authcontroller')
router.post('/register', authcontroller.register);
router.post('/login', authcontroller.login);
router.get('/profile', authMiddleware, UserController.getprofile);
module.exports = router;
