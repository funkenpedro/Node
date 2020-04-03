const EventEmitter = require("events");

const Logger = require("./logger");

const logger = new Logger();

logger.on("messageLogged", arg => {       
  //logger.on is the same ass logger.addListener
  console.log("Listener called", arg);
});

logger.log("message");
