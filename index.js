const express = require("express");
const mongoose = require("mongoose");
const key = require("./keys/keys");

mongoose
  .connect(key.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(console.log("connected to mongoDB"))
  .catch(err => console.log(err));

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

require('./routers/auth')(app)
require('./routers/content.js')(app)
const PORT = process.env.PORT || 5600
app.listen(PORT,()=>console.log(`listening to port : ${PORT}`))