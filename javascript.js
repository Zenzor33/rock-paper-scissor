/* Write a function that plays a single round of Rock Paper Scissors. 
The function should take two parameters - the playerSelection and 
return and then return a string that declares the winner of 
the round like so: "You Lose! Paper beats Rock" */

function playerSelection() {
    const playerSelection = window.prompt("Selection: ");
    return playerSelection;
}

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

let winner = undefined;
function playRound(playerSelection, computerSelection) {
    console.log(`you play: ${playerSelection.toLowerCase()} 
computer plays: ${computerSelection.toLowerCase()}`);
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();
    const playerWins = 'you win';
    const playerLoses = 'you lose';
    if ((player == 'rock' && computer == 'scissor') ||
        (player == 'paper' && computer == 'rock') ||
        (player == 'scissor' && computer == 'paper')) {
        console.log(playerWins);
        winner = true;
    }
    else if (player == computer) {
        console.log('Tie');
        winner = undefined;
    }
    else {
        console.log(playerLoses);
        winner = false;
    }
}

/* Write a NEW function called game(). Call the playRound function 
inside of this one to play a 5 round game that keeps score and 
reports a winner or loser at the end. */


function game() {
    let roundNum = 0;
    let playerWinsCount = 0;
    let cpuWinsCount = 0;
    for (i = 1; i <= 5; i++) {
        playRound(playerSelection(), compSelection());
        roundNum += 1;
        if (winner === true) {
            // console.log(`player wins round ${roundNum}!`);
            playerWinsCount += 1;
        } else if (winner === undefined) {
            // console.log(`Round ${roundNum} is a tie!`);
        }
        else {
            // console.log(`player loses round ${roundNum}!`);
            cpuWinsCount += 1;
        }
        winner = undefined;
    }

    if (playerWinsCount > cpuWinsCount) {
        console.log(`player wins the match ${playerWinsCount} to ${cpuWinsCount}`);
    } else if (playerWinsCount === cpuWinsCount) {
        console.log(`The match resulted in a ${playerWinsCount} to ${cpuWinsCount} tie`);
    } else {
        console.log(`Computer wins the match ${cpuWinsCount} to ${playerWinsCount}`);
    }
}

game();