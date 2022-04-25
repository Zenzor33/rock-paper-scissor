/* Write a function that plays a single round of Rock Paper Scissors. 
The function should take two parameters - the playerSelection and 
return and then return a string that declares the winner of 
the round like so: "You Lose! Paper beats Rock" */

const playerSelection = window.prompt("Selection: ")

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function compSelection() {
    const compRNG = getRandomInt(3); // random int between 0 & 2

    if (compRNG == 0) {
        return 'Rock';
    }
    if (compRNG == 1) {
        return 'Paper';
    }
    if (compRNG == 2) {
        return 'Scissor';
    }
}

function playRound(playerSelection, computerSelection) {
    console.log(`you play: ${playerSelection.toLowerCase()} 
computer plays: ${computerSelection.toLowerCase()}`);
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();
    const playerWins = 'you win';
    const playerLoses = 'you lose';
    while (true) {
        if ((player == 'rock' && computer == 'scissor') ||
            (player == 'paper' && computer == 'rock') ||
            (player == 'scissor' && computer == 'paper')) {
            console.log(playerWins);
            break;
        }
        else if (player == computer) {
            console.log('Tie');
            break;
        }
        else {
            console.log(playerLoses);
            break;
        }
    }
}

playRound(playerSelection, compSelection());


