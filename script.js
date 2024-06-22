console.log("Hello World")


// random value from 0 to 1 
// based on the value select rock, paper or scissors for the computer 
// if random value (equal or less 0.33 = rock) (equal or less 0.66 = paper) (else scissors)
let computerChoice;

function getComputerChoice() {
    const randomValue = Math.random();
    if (randomValue <= 0.33) {
        computerChoice = "rock";
    } else if (randomValue > 0.33 && randomValue <= 0.66) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice;
}



