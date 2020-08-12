let http = require("http");
let fs = require("fs");
let events = require("events");

// http
//   .createServer((req, res) => {
//     console.log(req.url);

//     fs.readFile(`./${req.url}`, (err, data) => {
//       if (err) {
//         res.writeHead(404);
//         res.end("404 Not Found");
//       } else {
//         res.end(data);
//       }
//     });
//   })
//   .listen(8083);

var server = http.createServer();
server.on("request", function (req, res) {
  if (req.url != "/favicon.ico") {
    console.log("GETリクエスト");
  }
});
server.on("request", function (req, res) {
  if (req.url != "/favicon.ico") {
    console.log(req.url);
  }
  res.end("on request");
});
server.on("request", function (req, res) {
  if (req.url != "/favicon.ico") {
    console.log("SENDレスポンス");
  }
});
server.on('customeEvent',function(arg1,arg2,arg3){
  console.log('CustomerEvent happend');
  console.log(arg1)
  console.log(arg2)
  console.log(arg3)
})
server.emit('customeEvent','FirstParameter','SecondParameter','ThirdParameter');
server.listen(8083);
console.log(server.listeners('request'));
console.log(events.EventEmitter.listenerCount(server,"request"));
