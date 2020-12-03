const express = require("express");
const dateformat = require("dateformat");

const app = express();
const router = require("./router");

// ログ出力、APPレベル
app.use(function (req, res, next) {
    console.log(
        dateformat(Date.now(), "yyyy年mm月dd日 HH時MM分ss秒"),
        "Request URL:",
        req.originalUrl
    );
    next();
});

// static load
app.use(
    express.static("static", {
        // default static file
        extensions: ["html", "html"],
    })
);

// next demo 展示
app.use(
    "/user/:id",
    function (req, res, next) {
        console.log("Request URL:", req.originalUrl);
        next();
    },
    function (req, res, next) {
        console.log("Request Type:", req.method);
        next();
    },
    function (req, res, next) {
        let id = req.params.id;
        res.json({
            ID: id,
        });
    }
);

app.use(router);

app.listen(3000, () => {
    console.log("～サーバー起動成功～");
});
