const app = require('./app');

const port = 3000;

app.listen(port,()=>{
    console.log(`the server is running at http://localhost:${port}`)
})