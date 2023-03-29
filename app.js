function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice === 1) {
        choice = "rock";
    } else if (choice === 2) {
        choice = "paper";
    } else {
        choice = "scissors";
    }
    return choice;
}

function onlyFirstLetterToUpperCase(string){
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    playerSelection = onlyFirstLetterToUpperCase(playerSelection);
    computerSelection = onlyFirstLetterToUpperCase(computerSelection);

    return calcRoundResults(playerSelection, computerSelection);
}
function calcRoundResults(playerSelection, computerSelection) {
    let result = "";
    if (playerSelection === "Rock") {
        if (computerSelection === "Paper") {
            result = `You lose! ${playerSelection} loses to ${computerSelection}`;
        } else if (computerSelection === "Scissors") {
            result = `You win! ${playerSelection} beats ${computerSelection}`;
        } else {
            result = `You draw! ${playerSelection} draws to ${computerSelection}`;
        }
    } else if (playerSelection === "Paper") {
        if (computerSelection === "Paper") {
            result = `You draw! ${playerSelection} draws to ${computerSelection}`;
        } else if (computerSelection === "Scissors") {
            result = `You lose! ${playerSelection} loses to ${computerSelection}`;
        } else {
            result = `You win! ${playerSelection} beats ${computerSelection}`;
        }
    } else {
        if (computerSelection === "Paper") {
            result = `You win! ${playerSelection} beats ${computerSelection}`;
        } else if (computerSelection === "Scissors") {
            result = `You draw! ${playerSelection} draws to ${computerSelection}`;
        } else {
            result = `You lose! ${playerSelection} loses to ${computerSelection}`;
        }
    }
    return result;
}

function game(numberOfRounds) {
    for (let i = 0; i < numberOfRounds; i++) {
        console.log(`Round ${i + 1}`)
        const playerSelection = prompt("Your choice: Rock, paper or scissors?");
        const computerSelection = getComputerChoice();

        console.log(playRound(playerSelection, computerSelection));
    }
}

game(5);