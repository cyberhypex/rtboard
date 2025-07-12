const User=require('../Models/user');
const users=[];

exports.getAllUsers=(req,res)=>{
    res.json(users);
}

exports.createUSer=(req,res)=>{
    const {id,name,email,tasks}=req.body; //destructuring
    const newUser=new User(id,name,email,tasks);
    users.push(newUser);
    res.status(201).json(newUser);
}