let computerScore = 0;
let humanScore = 0;

const result = document.querySelector(".result-msg");
const score = document.querySelector(".current-score");
const humanChoicesContainer = document.querySelector(".player-options");
const humanChoices = humanChoicesContainer.querySelectorAll("button");

humanChoices.forEach((choice) => {
    choice.addEventListener("click", () => {
        playRound(choice.id, getComputerChoice());
    });
});

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        result.textContent = `Tie! You both chose ${humanChoice}!`;
    } else if (didHumanWin(humanChoice, computerChoice)) {
        result.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
        humanScore++;
    } else {
        result.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
        computerScore++;
    }

    score.textContent = `Your Score: ${humanScore}  |  Opponent Score: ${computerScore}`;

    if (didPlayerWin()) {
        displayFinalScoreMsg();
    }
}

function didPlayerWin() {
    return computerScore === 5 || humanScore === 5;
}

function didHumanWin(humanChoice, computerChoice) {
    return (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Scissors" && computerChoice === "Paper") ||
        (humanChoice === "Paper" && computerChoice === "Rock")
    );
}

function displayFinalScoreMsg() {
    if (computerScore > humanScore) {
        score.textContent = "You lost :(";
    } else if (computerScore < humanScore) {
        score.textContent = "You won!!!!";
    } else {
        score.textContent = "Tie!? :O";
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
