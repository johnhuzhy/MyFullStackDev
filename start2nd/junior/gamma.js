const geektime = require("./gammaLib");
geektime.addListener("new lesson", (res) => {
  console.log("welcome new lesson!", res);
  if (res.price < 60) {
    console.log("suprise price!!");
  }
});
