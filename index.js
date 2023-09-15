let playerSelection = null;
let computerSelection = null;

const inputBoxValue = document.querySelector(".inputBox");
const outputBoxValue = document.querySelector(".outputBox");
const confirmButton = document.querySelector("#confirmButton");



confirmButton.addEventListener("click", function () {
    //.trim() erases all empty content, like spaces.
    // .toUpperCase() changes input to only uppercase letters
    let userInput = inputBoxValue.value.trim().toUpperCase(); 
    if (isValidSelection(userInput)) {
    playerSelection = userInput;
    let result = playRound(playerSelection, computerSelection);
    outputBoxValue.textContent = result;
    } else {
        outputBoxValue.textContent = ("Invalid input, please choose ROCK, PAPER or SCISSORS.");
    } 
    

    function isValidSelection(userInput){
        return userInput === "ROCK" || userInput === "PAPER" || userInput === "SCISSORS";
    } 
    console.log(isValidSelection(userInput))
    })
   
    


// computer chooses rock, paper or scissors
function computerRPS () {
    //boolean, if true, function starts
    if (playerSelection)  {
        let randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(playerSelection)

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



/*
function playRound (playerSelection, computerSelection) {

        let result;

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

        return result;
    }
*/
   // switch

   function playRound(playerSelection, computerSelection) {
    let result;

    switch (true) {
        case playerSelection === computerSelection:
            result = "It's a tie. Go again.";
            break;

        case playerSelection === "ROCK" && computerSelection === "PAPER":
            result = "You lost. Paper beats Rock.";
            break;

        case playerSelection === "ROCK" && computerSelection === "SCISSORS":
            result = "You won. Rock beats Scissors.";
            break;

        case playerSelection === "PAPER" && computerSelection === "ROCK":
            result = "You won. Paper beats Rock.";
            break;

        case playerSelection === "PAPER" && computerSelection === "SCISSORS":
            result = "You lost. Scissors beat Paper.";
            break;

        case playerSelection === "SCISSORS" && computerSelection === "ROCK":
            result = "You lost. Rock beats Scissors.";
            break;

        case playerSelection === "SCISSORS" && computerSelection === "PAPER":
            result = "You won. Scissors beat Paper.";
            break;

        default:
            result = "Invalid selection. Please choose ROCK, PAPER, or SCISSORS.";
    }

    return result;
}

    