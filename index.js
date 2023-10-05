let playerSelection = null;
let computerSelection = null;
let roundsPlayed = 0;
let playerWon = 0;
let computerWon = 0;

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const outputBoxValue = document.querySelector(".outputBox");
const gamestatus = document.querySelector(".gamestatus");

// user selects ROCK, playerselection = 'Rock'
rock.addEventListener("click", () => {
  if (roundsPlayed < 5){
  let playerSelection = "ROCK";
  computerRPS(playerSelection);
  let result = playRound(playerSelection, computerSelection);
  outputBoxValue.textContent = result;
  roundsPlayed++;
  checkGameStatus();
}
})
// user selects PAPER, playerselection = 'Paper'
paper.addEventListener("click", () => {
  if (roundsPlayed < 5){
  let playerSelection = "PAPER";
  computerRPS(playerSelection);
  let result = playRound(playerSelection, computerSelection);
  outputBoxValue.textContent = result;
  roundsPlayed++;
  checkGameStatus();
}
})
// user selects SCISSORS, playerselection = 'Scissors'
scissors.addEventListener("click", () => {
  if (roundsPlayed){
  let playerSelection = "SCISSORS";
  computerRPS(playerSelection);
  let result = playRound(playerSelection, computerSelection);
  outputBoxValue.textContent = result;
  roundsPlayed++;
  checkGameStatus();
}
})


 function checkGameStatus(){
  if(roundsPlayed < 5){
    gamestatus.innerHTML = `Game ${roundsPlayed} of 5 <br> 
    Player: ${playerWon} <br>
    Computer: ${computerWon}`; 
    
    
  }
  // Returns the result in UI after 5 rounds.
  if (roundsPlayed === 5){
    gamestatus.textContent = "You played 5 rounds.";
    // If computer wins
    if (computerWon > playerWon){
      gamestatus.innerHTML = 
      `You lost. <br>
      Player: ${playerWon} <br>
      Computer: ${computerWon}`;
      outputBoxValue.textContent = '';
    }
    // If Player wins
    if (computerWon < playerWon){
      gamestatus.innerHTML = 
      `You win. <br>
      Player: ${playerWon} <br>
      Computer: ${computerWon}`;
      outputBoxValue.textContent = '';
    }
    // If it's a tie.
    if (computerWon === playerWon){
      gamestatus.innerHTML = 
      `It's a tie. Go again <br>
      Player: ${playerWon} <br>
      Computer: ${computerWon}`;
      outputBoxValue.textContent = '';
    }
    
  }
 }

 
// computer chooses rock, paper or scissors
function computerRPS () {
    //boolean, if true, function starts
  if (playerSelection === "ROCK" || "PAPER" || "SCISSORS")  {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    if (randomNum === 1) {
      computerSelection = "ROCK";
    }
    else if (randomNum === 2) {
      computerSelection = "PAPER";
    }
    else if (randomNum === 3) {
      computerSelection = "SCISSORS";
    }
    console.log("Computer's choice: " + computerSelection);
  }
}

function playRound(playerSelection, computerSelection) {
  switch (true) {
    case playerSelection === computerSelection:
      result = "It's a tie. Go again.";
      break;

    case playerSelection === "ROCK" && computerSelection === "PAPER":
      result = "You lost. Paper beats Rock.";
      computerWon ++;
      break;

    case playerSelection === "ROCK" && computerSelection === "SCISSORS":
      result = "You won. Rock beats Scissors.";
      playerWon ++;
      break;

    case playerSelection === "PAPER" && computerSelection === "ROCK":
      result = "You won. Paper beats Rock.";
      playerWon ++;
      break;

    case playerSelection === "PAPER" && computerSelection === "SCISSORS":
      result = "You lost. Scissors beat Paper.";
      computerWon ++;
      break;

    case playerSelection === "SCISSORS" && computerSelection === "ROCK":
      result = "You lost. Rock beats Scissors.";
      computerWon ++;
      break;

    case playerSelection === "SCISSORS" && computerSelection === "PAPER":
      result = "You won. Scissors beat Paper.";
      playerWon ++;
      break;

    default:
      result = "Invalid selection. Please choose ROCK, PAPER, or SCISSORS.";
  }

  return result;
}

