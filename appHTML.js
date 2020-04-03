const http = require("http");

const server = http.createServer((req, response) => {
  if (req.url === "/") {
    response.write("hello world");
    response.end();
  }
  if (req.url === "/api") {
    response.write(JSON.stringify([1, 2, 3]));
    response.end();
  }
});
//documentation shows http.server
//inherits from net.Server
//which is an eventEmitter

server.listen(3000);
server.on("connection", socket => {
  console.log("new Connection");
});
console.log("listening on Port server");
