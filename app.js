const express  = require('express');
const app = express();

app.get("/users", (req, res) => {
   res.status(200).json({
       user:1,
       name:"rohan",
       food:"non veg"
   })
  })
module.exports= app;