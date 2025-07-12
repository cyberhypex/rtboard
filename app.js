const express = require("express");
const morgan = require("morgan");
const userRoutes = require("../server/routes/userRoutes");
const taskRoutes=require('./routes/taskRoutes');
const app = express(); // ✅ this must come after `require("express")`

app.use(morgan("dev"));
app.use(express.json());
app.use("/api/user", userRoutes);
 // ✅ connect the route
 app.use("/api/tasks",taskRoutes);

const port = 3000;

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});


module.exports=app;