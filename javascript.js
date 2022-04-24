/* Write a function that plays a single round of Rock Paper Scissors. 
The function should take two parameters - the playerSelection and 
return and then return a string that declares the winner of 
the round like so: "You Lose! Paper beats Rock" */

let playerSelection = window.prompt("Selection: ")

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function compSelection() {
    let compRNG = getRandomInt(3); // random int between 0 & 2

    if (compRNG < 1) {
        return 'Rock';
    }
    if (compRNG < 2) {
        return 'Paper';
    }
    if (compRNG < 3 ) {
        return 'Scissor';
    }
}

function playRound(playerSelection, computerSelection) {
    console.log(`${playerSelection.toLowerCase()} ${computerSelection.toLowerCase()}`);
    }

playRound(playerSelection, compSelection());


