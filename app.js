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
            console.log(`You lose! ${playerSelection} loses to ${computerSelection}`);
            result = "lost";
        } else if (computerSelection === "Scissors") {
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
            result = "won";
        } else {
            console.log(`You draw! ${playerSelection} draws to ${computerSelection}`);
            result = "drawn";
        }
    } else if (playerSelection === "Paper") {
        if (computerSelection === "Paper") {
            console.log(`You draw! ${playerSelection} draws to ${computerSelection}`);
            result = "drawn";
        } else if (computerSelection === "Scissors") {
            console.log(`You lose! ${playerSelection} loses to ${computerSelection}`);
            result = "lost";
        } else {
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
            result = "won";
        }
    } else {
        if (computerSelection === "Paper") {
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
            result = "won";
        } else if (computerSelection === "Scissors") {
            console.log(`You draw! ${playerSelection} draws to ${computerSelection}`);
            result = "drawn";
        } else {
            console.log(`You lose! ${playerSelection} loses to ${computerSelection}`);
            result = "lost";
        }
    }
    return result;
}

function game(numberOfRounds) {
    let gamesWon = 0;
    let gamesLost = 0;
    let gamesDrawn = 0;
    for (let i = 0; i < numberOfRounds; i++) {
        console.log(`Round ${i + 1}`)
        const playerSelection = prompt("Your choice: Rock, paper or scissors?");
        const computerSelection = getComputerChoice();

        let result = playRound(playerSelection, computerSelection);
        if (result === "won") {
            gamesWon++;
        } else if (result === "lost") {
            gamesLost++;
        } else {
            gamesDrawn++;
        }
    }
    if (gamesWon > gamesLost) {
        console.log("You've won!")
    } else if (gamesWon < gamesLost) {
        console.log("You've lost!");
    } else {
        console.log("You've drawn!")
    }
}

game(5);