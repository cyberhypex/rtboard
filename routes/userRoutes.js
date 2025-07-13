const express=require('express');
const router=express.Router();
const router1=express.Router();
const userController=require('../controllers/userController');

router.post('/login',userController.loginUser);
router.post('/createUser',userController.createUser);

module.exports=router;