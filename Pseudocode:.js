Pseudocode:

/*
ROCK PAPER SCISSORS (RPS):



User Interface (1. aus der library);
    Input box mit kleiner Beschreibung
    Alert box mit Antwort des Computers
    (evtl 3 Buttons mit ROCK PAPER SCISSORS)


Constanten deklarieren: ROCK PAPER SCISSORS(RPS)

function playRound:

    WENN user RPS waehlt (bestaetigen mit enter oder accept),
        DANN waehlt computer random RPS

        playerSelection und computerSelection werden in const gespeichert
    
    WENN user ROCK weahlt,
        Vergleich mit computer:

            Wenn user(ROCK) UND computer ROCK   
            DANN result an alarmBox: "It's a tie. Go again."

            Wenn user(ROCK) UND computer PAPER
            DANN result an alarmBox: "You lost, Paper beats Rock."

            Wenn user(ROCK) UND computer SCISSORS
            DANN result an alarmBox: "You won, Rock beats Scissors."

    WENN user PAPER weahlt,
        Vergleich mit computer:

            Wenn user(PAPER) UND computer ROCK   
            DANN result an alarmBox: "You won, Paper beats Rock."

            Wenn user(PAPER) UND computer PAPER   
            DANN result an alarmBox: "It's a tie. Go again."

            Wenn user(PAPER) UND computer SCISSORS   
            DANN result an alarmBox: "You lost, Scissors beat Paper."


    WENN user SCISSORS weahlt,
        Vergleich mit computer:

            Wenn user(SCISSORS) UND computer ROCK   
            DANN result an alarmBox: "You lost. Rock beats Scissors."

            Wenn user(SCISSORS) UND computer PAPER  
            DANN result an alarmBox: : "You won. Scissors beat Paper."

            Wenn user(SCISSORS) UND computer SCISSORS  
            DANN result an alarmBox: "It's a tie. Go again."





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


