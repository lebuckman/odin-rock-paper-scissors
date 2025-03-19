let computerScore = 0;
let humanScore = 0;

playGame();

function playGame() {
    const ROUNDS = 5;

    for (let round = 1; round <= ROUNDS; round++) {
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
        playRound(humanSelection, computerSelection);
        console.log(
            `Your Score: ${humanScore}  |  Opponent Score: ${computerScore}`
        );
    }
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("Tie!");
    } else if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            console.log("You lose! Paper beats Rock.");
            computerScore++;
        } else {
            console.log("You win! Rock beats Scissors.");
            humanScore++;
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            console.log("You lose! Scissors beats Paper.");
            computerScore++;
        } else {
            console.log("You win! Paper beats Rock.");
            humanScore++;
        }
    } else {
        if (computerChoice === "rock") {
            console.log("You lose! Rock beats Scissors.");
            computerScore++;
        } else {
            console.log("You win! Scissors beats Paper.");
            humanScore++;
        }
    }
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
