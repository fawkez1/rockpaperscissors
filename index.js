let playerSelection;
let computerSelection;

console.log(computerSelection);

const inputBoxValue = document.querySelector(".inputBox");
const outputBoxValue = document.querySelector(".outputBox");

inputBoxValue.addEventListener("change", function () {
    playerSelection = inputBoxValue.value;
    const result = playRound(playerSelection, computerSelection);
    outputBoxValue.textContent = result;
})

function computerRPS () {
    if (playerSelection)  {
        let randomNum = Math.floor(Math.random() * 3) + 1;
    

        if (randomNum === 1) {
            let computerSelection = "ROCK";
        }
        else if (randomNum === 2) {
            let computerSelection = "PAPER";
        }
        else if (randomNum === 3) {
            let computerSelection = "SCISSORS";
        }
        console.log("Computer's choice: " + computerSelection);
    }
}




function playRound (playerSelection, computerSelection) {

        // Player chooses ROCK
        if (playerSelection == "ROCK" && computerSelection == "ROCK") {
            result = "It's a tie. Go again.";
        }
        else if (playerSelection == "ROCK" && computerSelection == "PAPER") {
            result = "You lost. Paper beats Rock.";
        }
        else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
            result = "You won. Rock beats Scissors.";
        }

        // Player chooses PAPER
        else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
            result = "You won. Paper beats Rock.";
        }
        else if (playerSelection == "PAPER" && computerSelection == "PAPER") {
            result = "It's a tie. Go again";
        }
        else if (playerSelection == "PAPER" && computerSelection == "SCISSORS") {
            result = "You lost. Scissors beat Paper.";
        }

        // Player chooses SCISSORS
        else if (playerSelection == "SCISSORS" && computerSelection == "ROCK") {
            result = "You lost. Rock beats Scissors."
        }
        else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
            result = "You won. Scissors beat Paper.";
        }
        else if (playerSelection == "SCISSORS" && computerSelection == "SCISSORS") {
            result = "It's a tie. Go again.";
        }
    }