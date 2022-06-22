const http = require("http");
const fs = require("fs");

const port = process.env.PORT;

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      fs.readFile("./server-routing/pages/index.html", (err, data) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      });

      break;
    case "/about":
      fs.readFile("./server-routing/pages/about.html", (err, data) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      });

      break;
    case "/contact":
      fs.readFile("./server-routing/pages/contact.html", (err, data) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      });

      break;

    default:
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>404 Not Found</h1>");
      res.end();
      break;
  }
});

server.listen(port);
