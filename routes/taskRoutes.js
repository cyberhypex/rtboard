const express=require('express')
const router=express.Router();
const taskController=require('../controllers/taskController');

router.get('/getTasks',taskController.tasks);
router.post('/createTasks',taskController.createTasks);

module.exports=router;