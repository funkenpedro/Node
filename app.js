const path = require("path");
var pathObject = path.parse(__filename);

const fs = require("fs");
const files = fs.readdirSync("./");

asynchfileconsts = fs.readdir("./", function(err, result) {
  if (err) {
    console.log("Error", err);
  } else console.log("asynghfiles", result);
});

console.log("dir object: ", files);

//console.log(module);
