let computerScore = 0;
let humanScore = 0;

const humanChoicesContainer = document.querySelector(".player-options");
const humanChoices = humanChoicesContainer.querySelectorAll("button");
const result = document.querySelector(".result-msg");
const yourScore = document.querySelector(".your-score");
const opponentScore = document.querySelector(".opponent-score");
const finalMsg = document.querySelector(".final-msg");
const endGameBanner = document.querySelector(".end-game-banner");

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

    yourScore.textContent = "Your Score: " + humanScore;
    opponentScore.textContent = "Opponent Score: " + computerScore;

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
        finalMsg.textContent = "You lost :(";
        endGameBanner.classList.add("defeat");
    } else {
        finalMsg.textContent = "You won!!!!";
        endGameBanner.classList.add("victory");
    }

    result.textContent = "";
    yourScore.textContent = "";
    opponentScore.textContent = "";
    endGameBanner.classList.remove("hidden");
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
