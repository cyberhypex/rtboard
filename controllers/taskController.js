const Tasks=require('../Models/Tasks');

exports.createTask=async(req,res)=>{
   try{
   const { title, description, assignedUser, status, priority } = req.body;
   const task = new Tasks({
      title,
      description,
      assignedUser,
      status,
      priority
    });
    await task.save();

    res.status(201).json({
        message:"Task created Successfully",

    })
   }
   catch(err){
    res.status(500).json(err);
   }
}
