const express=require("express");
const authcontroller=require("../Controllers/authcontroller")
const router=express.Router();
router.post('/register',authcontroller.register);
router.post('/login',authcontroller.login);
module.exports=router;