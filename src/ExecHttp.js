let http = require("http");
let fs = require("fs");

http
  .createServer((req, res) => {
    console.log(req);

    fs.readFile(`./${req.url}`, (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end("404 Not Found");
      } else {
        res.end(data);
      }
    });
  })
  .listen(8083);
