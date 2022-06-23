const express = require("express");
const app = express();
const userRouter = require('./routes/user.route')

app.get('/',(req,res)=>{
    res.send("<h1>Welcome to Homepage</h1>")
})

app.use('/api/user',userRouter)

app.use((req,res)=>{
    res.send("<h1>404 page not found</h1>")
})

module.exports = app;