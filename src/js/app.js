import GoblinGame from "./GoblinGame";

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded");

  const goblinGame = new GoblinGame(document.querySelector(".goblin-game"));
  goblinGame.startGame();
});
