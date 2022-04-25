/* Write a function that plays a single round of Rock Paper Scissors. 
The function should take two parameters - the playerSelection and 
return and then return a string that declares the winner of 
the round like so: "You Lose! Paper beats Rock" */

let playerSelection = window.prompt("Selection: ")

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
    if (compRNG == 2 ) {
        return 'Scissor';
    }
}

function playRound(playerSelection, computerSelection) {
    console.log(`you play: ${playerSelection.toLowerCase()} 
computer plays: ${computerSelection.toLowerCase()}`);
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    let playerWins = 'you win';
    let playerLoses = 'you lose';
    while (true) {
        if (player == 'rock' && computer == 'scissor') {
            console.log(playerWins);
            break;
        }
        if (player == 'paper' && computer == 'rock') {
            console.log(playerWins);
            break;
        }
        if (player == 'scissor' && computer == 'paper') {
            console.log(playerWins);
            break;
        }
        if (player == computer) {
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


