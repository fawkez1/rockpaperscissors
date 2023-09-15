let playerSelection = null;
let computerSelection = null;

const inputBoxValue = document.querySelector(".inputBox");
const outputBoxValue = document.querySelector(".outputBox");
const confirmButton = document.querySelector("#confirmButton");
const gamestatus = document.querySelector(".gamestatus");


// user starts game by clicking.
confirmButton.addEventListener("click", function () {

    //.trim() erases all empty content, like spaces.
    // .toUpperCase() changes input to only uppercase letters
    let userInput = inputBoxValue.value.trim().toUpperCase(); 
    if (isValidSelection(userInput)) {
    playerSelection = userInput;

    //starts the computer selection
    computerRPS(playerSelection);

    // game starts with userselection and computerselection
    let result = playRound(playerSelection, computerSelection);
    outputBoxValue.textContent = result;
    } else {
        outputBoxValue.textContent = ("Invalid input, please choose ROCK, PAPER or SCISSORS.");
    } 
    
// functions checks userinput, if valid/true, returns to line 16/17
    function isValidSelection(userInput){
        return userInput === "ROCK" || userInput === "PAPER" || userInput === "SCISSORS";
    } 
    console.log(isValidSelection(userInput))
    })
   
    


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
    console.log(computerSelection)
    return result;
}

    