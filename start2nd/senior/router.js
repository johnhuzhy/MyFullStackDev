const express = require("express");
const router = express.Router();

// カスタマイズ、routeレベル
function demo_middleware(req, res, next) {
    // 異常
    // 処理業務
    console.log("request from router: ", req.originalUrl);
    // 响应请求 当作路由的处理函数
    next();
}
router.use(demo_middleware);

// 異常検知
function valid_name_middleware(req, res, next) {
    let { name } = req.query;
    if (!name || !name.length) {
        res.json({
            message: "No Name Error!",
        });
    } else {
        next();
    }
}

router.all("/test", valid_name_middleware);

router.get("/test", (req, res) => {
    res.json({
        message: "test OK",
    });
});

router.use((err, req, res, next) => {
    if (err) {
        res.writeHead(404);
        res.end("404 Not Found");
    } else {
        res.end("OK");
    }
});

module.exports = router;
