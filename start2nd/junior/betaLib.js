module.exports = function (playAction) {
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
    return 0;
  } else if (
    (playAction === "rock" && computerAction === "scissor") ||
    (playAction === "paper" && computerAction === "rock") ||
    (playAction === "scissor" && computerAction === "paper")
  ) {
    console.info("↑↑↑勝ち↑↑↑");
    return -1;
  } else {
    console.info("↓↓↓負け↓↓↓");
    return 1;
  }
};
