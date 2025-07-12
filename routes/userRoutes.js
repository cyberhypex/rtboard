const express=require('express');
const router=express.Router();
const router1=express.Router();
const userController=require('../controllers/userController');

router.get('/getUser',userController.getAllUsers);
router.post('/createUser',userController.createUSer);

module.exports=router;