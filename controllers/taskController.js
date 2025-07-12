const Tasks=require('../Models/Tasks');

const tasks=[];

exports.tasks=(req,res)=>{
    res.json(tasks);
}

exports.createTasks=(req,res)=>{
    const {title,description,assignedUser,status,priority}=req.body;
    const  task=new Tasks(title,description,assignedUser,status,priority);
    tasks.push(task);
    res.status(201).json(task);
}