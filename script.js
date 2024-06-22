console.log("Hello World")

// computer choice
// random value from 0 to 1 
// based on the value, choose rock, paper or scissors for the computer 
// if random value (equal or less 0.33 = rock) (equal or less 0.66 = paper) (else scissors)

let computerChoice;
function getComputerChoice() {
    const randomValue = Math.random();
    if (randomValue <= 0.33) {
        computerChoice = "ROCK";
    } else if (randomValue > 0.33 && randomValue <= 0.66) {
        computerChoice = "PAPER";
    } else {
        computerChoice = "SCISSORS";
    }
    return computerChoice;
}

// player choice
// ask the player what he want to choose rock, paper or scissors
// store the player option in a variable 
// 
let humanChoice;
function getHumanChoice() {
    humanChoice = prompt("message").toUpperCase()
    return humanChoice; 
}

// players scores 
let humanScore = 0; 
let computerScore = 0;

// takes the computer and player choices
// play the round
// announce the winner and add to their score 
function playRound(humanSelection,ComputerSelection) {
    if (humanSelection == "ROCK" && ComputerSelection == "SCISSORS") {
        console.log ("You Win! Rock beats Scissors")
        return humanScore++;
    } else if (humanSelection == "SCISSORS" && ComputerSelection == "PAPER") {
        console.log ("You Win! Scissors beats Paper")
        return humanScore++;
    } else if (humanSelection == "PAPER" && ComputerSelection == "ROCK"){
        console.log ("You Win! Paper beats Rock")
        return humanScore++;
    } else if (ComputerSelection == "ROCK" && humanSelection == "SCISSORS"){
        console.log ("You Lose! Rock beats Scissors")
        return computerScore++;
    } else if (ComputerSelection == "SCISSORS" && humanSelection == "PAPER"){
        console.log ("You Lose! Scissors beats Paper")
        return computerScore++;
    } else if (ComputerSelection == "PAPER" && humanSelection == "ROCK"){
        console.log ("You Lose! Paper beats Rock")
        return computerScore++;
    } else {
        console.log ("It's a Tie!")
    }
}