const mongoose=require('mongoose')

const connectDB=async()=>{
    try{
        await mongoose.connect('mongodb+srv://anshgogoi201:wYfnBhYIgglGn5dz@cluster1.ins4c3l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1',{
        
    });
    console.log("DB connected to atlas");
    }
    catch(error){
        console.log(error.message);
        process.exit(1);
    }
    
    

    
}

module.exports=connectDB;