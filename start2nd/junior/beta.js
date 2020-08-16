var playAction = process.argv[process.argv.length - 1];
console.log("★★★ " + playAction + " ★★★");

const betaGame = require("./betaLib");

let count = 0;
process.stdin.on("data", (e) => {
  const playAction = e.toString().trim();
  const result = betaGame(playAction);
  if (result === -1) {
    count++;
  }
  if (count === 3) {
    console.info("◆◆◆ すごい！ ◆◆◆");
    process.exit();
  }
});
