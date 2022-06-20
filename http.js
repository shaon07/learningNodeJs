const http = require("http"); // import http core module from nodejs


// creating server http core module

const server = http.createServer((req,res)=>{

    if(req.url==="/"){ 
        
        // if user hit "/" route this block will run

        res.write("Hello User welcome to Home Page"); 
        res.end()
    }else if(req.url==="/about"){
        res.write("Hello User welcome to About Page");
        res.end()
    }else{
        res.write("404 page not Found");
        res.end()
    }
})

server.listen(3000);