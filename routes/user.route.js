const express = require("express");
const router = express.Router();

router.get('/contact',(req,res)=>{
    res.send("<h1>Welcome to Contact Page</h1>")
});
router.get('/about',(req,res)=>{
    res.send("<h1>Welcome to about Page</h1>")
});
router.get('/blog',(req,res)=>{
    res.send("<h1>Welcome to blog Page</h1>")
});

module.exports = router;