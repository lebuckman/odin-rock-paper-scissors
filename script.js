let computerScore = 0;
let humanScore = 0;

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();
playRound(humanSelection, computerSelection);

function playRound(humanChoice, computerChoice) {
    console.log(humanChoice);
    console.log(computerChoice);
}

function getComputerChoice() {
    let computerChoice;
    const randomNum = Math.floor(Math.random() * 3) + 1;

    if (randomNum === 1) {
        computerChoice = "rock";
    } else if (randomNum === 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

function getHumanChoice() {
    return prompt("Rock, paper, or scissors?");
}
