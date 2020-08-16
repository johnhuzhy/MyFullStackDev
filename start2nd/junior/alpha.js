// console.log(setInterval);
// console.log(setTimeout);
// console.log(setImmediate);

// console.log(__filename);
// console.log(__dirname);

// console.log(process.argv);

var playAction = process.argv[process.argv.length - 1];
console.log("★★★ " + playAction + " ★★★");

var random = Math.random() * 3;
var computerAction;
if (random < 1) {
  computerAction = "scissor";
} else if (random > 2) {
  computerAction = "rock";
} else {
  computerAction = "paper";
}
console.log("☆☆☆ " + computerAction + " ☆☆☆");

if (playAction === computerAction) {
  console.info("===同点===");
} else if (
  (playAction === "rock" && computerAction === "scissor") ||
  (playAction === "paper" && computerAction === "rock") ||
  (playAction === "scissor" && computerAction === "paper")
) {
  console.info("↑↑↑勝ち↑↑↑");
} else {
  console.info("↓↓↓負け↓↓↓");
}
