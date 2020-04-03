const EventEmitter = require("events");
var url = "http://mylogger.io/log";

class Logger extends EventEmitter {
  log(message) {
    //method of the class, (replaces function declaration)
    console.log(message);

    //raise an event
    this.emit("messageLogged", { id: 1, url: "http://" });
  }
}

module.exports = Logger;
