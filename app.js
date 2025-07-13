const express = require("express");
const morgan = require("morgan");
const userRoutes = require("../server/routes/userRoutes");
const taskRoutes=require('./routes/taskRoutes');
const app = express(); // ✅ this must come after `require("express")`
const db=require('../server/config/db');


app.use(morgan("dev"));
app.use(express.json());
app.use("/api/user", userRoutes);
app.use("/api/task",taskRoutes);
 // ✅ connect the route

 db();

const port = 3000;

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});


module.exports=app;