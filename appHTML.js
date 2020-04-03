const http = require("http");

const server = http.createServer();
//documentation shows http.server
//inherits from net.Server
//which is an eventEmitter

server.listen(3000);
server.on("connection", socket => {
  console.log("new Connection");
});
console.log("listening on Port server");
