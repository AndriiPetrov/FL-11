import "../scss/main.scss";
import computerTurn from "./computerTurn";

let result = document.getElementById("result");
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let reset = document.querySelector("#reset");

let userWin = 0;
let compWin = 0;
let rounds = 0;

rock.addEventListener("click", () => {
  playGame("rock");
});
paper.addEventListener("click", () => {
  playGame("paper");
});
scissors.addEventListener("click", () => {
  playGame("scissors");
});
reset.addEventListener("click", resetGame);
function playGame(choiceOfUser) {
  let compChoice = computerTurn();
  if (rounds < 3) {
    rounds++;
    switch (choiceOfUser + compChoice) {
      case "rockscissors":
      case "paperrock":
      case "scissorspaper":
        userWin++;
        result.innerHTML = `Round: ${rounds}, ${choiceOfUser} vs ${compChoice}. You've WON!`;
        break;
      case "rockpaper":
      case "paperscissors":
      case "scissorsrock":
        compWin++;
        result.innerHTML = `Round: ${rounds}, ${choiceOfUser} vs ${compChoice}. You've LOST!`;
        break;
      case "rockrock":
      case "paperpaper":
      case "scissorsscissors":
        result.innerHTML = `Round: ${rounds}, ${choiceOfUser} vs ${compChoice}. Draw!`;
    }
  } else {
    if (userWin > compWin) {
      result.innerHTML = "You are the winner";
    } else if (userWin < compWin) {
      result.innerHTML = "Computer is the winner";
    } else {
      result.innerHTML = "Draw";
    }
  }
}

function resetGame() {
  userWin = 0;
  compWin = 0;
  rounds = 0;
  result.innerHTML = "";
}
