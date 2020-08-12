var express = require("express");
var app = express();
var path = require("path");
var fs = require("fs");

var http = require("http");
var https = require("https");

//SSL証明書
var ssl_server_key = "./certificate/server_key.pem";
var ssl_server_crt = "./certificate/server_crt.pem";
var privateKey = fs.readFileSync(ssl_server_key);
var certificate = fs.readFileSync(ssl_server_crt);
var options = { key: privateKey, cert: certificate };

var httpServer = http.createServer(app);
var httpsServer = https.createServer(options, app);

//ポートを設定
var PORT = 8084;
var SSLPORT = 8085;

// HTTPサーバを生成
httpServer.listen(PORT, function () {
  console.log("HTTP Server is running on: http://localhost:%s", PORT);
});

// HTTPSサーバを生成
httpsServer.listen(SSLPORT, function () {
  console.log("HTTPS Server is running on: https://localhost:%s", SSLPORT);
});

// リクエストにより判断する
app.get("/", function (req, res) {
  if (req.protocol === "https") {
    res.status(200).send("This is https visit!");
  } else {
    res.status(200).send("This is http visit!");
  }
});
