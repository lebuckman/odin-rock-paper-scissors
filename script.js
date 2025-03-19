let computerScore = 0;
let humanScore = 0;

playGame();

function playGame() {
    const ROUNDS = 5;

    for (let round = 1; round <= ROUNDS; round++) {
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();

        playRound(humanSelection, computerSelection);
    }
    displayFinalScoreMsg();
}

function playRound(humanChoice, computerChoice) {
    console.log("human: " + humanChoice);
    console.log("computer: " + computerChoice);

    if (humanChoice === computerChoice) {
        console.log(`Tie! You both chose ${humanChoice}!`);
    } else if (didHumanWin(humanChoice, computerChoice)) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
    }

    console.log(
        `Your Score: ${humanScore}  |  Opponent Score: ${computerScore}`
    );
}

function didHumanWin(humanChoice, computerChoice) {
    return (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Scissors" && computerChoice === "Paper") ||
        (humanChoice === "Paper" && computerChoice === "Rock")
    );
}

function displayFinalScoreMsg() {
    console.log("Final Score");
    if (computerScore > humanScore) {
        console.log("You lost :(");
    } else if (computerScore < humanScore) {
        console.log("You won!!!!");
    } else {
        console.log("Tie!? :O");
    }
}

function getComputerChoice() {
    let computerChoice;
    const randomNum = Math.floor(Math.random() * 3) + 1;

    if (randomNum === 1) {
        computerChoice = "Rock";
    } else if (randomNum === 2) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }
    return computerChoice;
}

function getHumanChoice() {
    let answer = prompt("Rock, paper, or scissors?").toLowerCase();
    return answer[0].toUpperCase() + answer.slice(1);
}
