const EventEmitter = require("events").EventEmitter;

class Geektime extends EventEmitter {
  constructor() {
    super();
    setInterval(() => {
      this.emit("new lesson", { price: Math.floor(Math.random() * 100) });
    }, 2000);
  }
}

const geektime = new Geektime();
module.exports = geektime;
