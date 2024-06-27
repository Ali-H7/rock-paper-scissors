let humanScore = 0; 
let computerScore = 0;
let round = 0;

function updateScores () {
    const updateRound = document.querySelector(".round");
    const updatePlayerScore = document.querySelector(".pScore");
    const updatepComputerScore = document.querySelector(".cScore");
    updateRound.textContent = `Round: ${round}`;
    updatePlayerScore.textContent = `Player: ${humanScore}`;
    updatepComputerScore.textContent = `Computer: ${computerScore}`;
}

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

let announceText;
function playRound(humanSelection,ComputerSelection) {
    round = round += 1
    if (humanSelection == "ROCK" && ComputerSelection == "SCISSORS") {
        announceText = "You Win! Rock beats Scissors";
        createText (announceText);
         humanScore++;
    } else if (humanSelection == "SCISSORS" && ComputerSelection == "PAPER") {
        announceText = "You Win! Scissors beats Paper";
        createText (announceText);
         humanScore++;
    } else if (humanSelection == "PAPER" && ComputerSelection == "ROCK"){
        announceText = "You Win! Paper beats Rock";
        createText (announceText);
         humanScore++;
    } else if (ComputerSelection == "ROCK" && humanSelection == "SCISSORS"){
        announceText = "You Lose! Rock beats Scissors";
        createText (announceText);
         computerScore++;
    } else if (ComputerSelection == "SCISSORS" && humanSelection == "PAPER"){
        announceText = "You Lose! Scissors beats Paper";
        createText (announceText);
         computerScore++;
    } else if (ComputerSelection == "PAPER" && humanSelection == "ROCK"){
        announceText = "You Lose! Paper beats Rock";
        createText (announceText);
         computerScore++;
    } else {
        announceText = "It's a Tie!"
        createText (announceText);
    }
}


function winner() {
    if (humanScore > computerScore) {
        announceText = `You Won the game! ${humanScore} out of 5 rounds`;
        createText (announceText);
    } else if (computerScore > humanScore){
        announceText = `You Lose the game! The computer won by ${computerScore} out of 5 rounds`;
        createText (announceText);
    } else {
        announceText = "It's a Tie! No winner";
        createText (announceText);
    }
}

function checkWinner() {
    if (round >= 5) {
        restartGame();
    }
}

const btnChoice = document.querySelectorAll("button");
btnChoice.forEach(choice => {
    choice.addEventListener("click", (e) => {
        const humanChoice = e.target.innerText.toUpperCase();
        if (humanChoice == "ROCK" || humanChoice == "PAPER" || humanChoice == "SCISSORS") {
            getComputerChoice();
            playRound(humanChoice,computerChoice);
            updateScores();
            checkWinner();
        } else {

        }

    })
}); 


const gameText = document.querySelector(".game-text");
function createText (text) {
    const resultText = document.createElement("h4");
    resultText.textContent = text;
    resultText.style.textAlign = "center";
    resultText.classList.add("results");
    gameText.prepend(resultText);
}

function restartGame() {
    const restartBtn = document.createElement("button");
    const buttonContainer = document.querySelector(".button-container");
    restartBtn.textContent = "Restart Game";
    buttonContainer.appendChild(restartBtn);
    btnChoice.forEach(button =>{
        button.style.display = "none";
    })
    winner();
    restartBtn.addEventListener("click", ()=> {
        humanScore = 0; 
        computerScore = 0;
        round = 0;
        updateScores();
        restartBtn.style.display = "none";
        btnChoice.forEach(button =>{
            button.style.display = "inline-block";
        })
        const results = document.querySelectorAll(".results");
        results.forEach(result => {
            result.remove();
        })
    })
}