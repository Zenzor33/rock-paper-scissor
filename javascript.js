/* Write a function that plays a single round of Rock Paper Scissors. 
The function should take two parameters - the playerSelection and 
return and then return a string that declares the gameOutcome of 
the round like so: "You Lose! Paper beats Rock" */

function playerSelection() {
  let playerSelection = window.prompt("Selection: ");
  return playerSelection;
}

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function compSelection() {
  const randomNumber = getRandomNumber(3); // random int between 0 & 2

  if (randomNumber === 0) return 'Rock';
  if (randomNumber === 1) return 'Paper';
  return 'Scissor';
}

const PLAYER_WINS = 'you win';
const PLAYER_LOSES = 'you lose';
const PLAYER_TIES = 'Tie';


function playRound(playerSelection, computerSelection) {

  const player = playerSelection.toLowerCase();
  const computer = computerSelection.toLowerCase();

  console.log(`you play: ${playerSelection.toLowerCase()} 
computer plays: ${computerSelection.toLowerCase()}`);

  if ((player == 'rock' && computer == 'scissor') ||
    (player == 'paper' && computer == 'rock') ||
    (player == 'scissor' && computer == 'paper')) {
    console.log(PLAYER_WINS);
    return gameOutcome = PLAYER_WINS;
  }
  else if (player == computer) {
    console.log(PLAYER_TIES);
    return gameOutcome = PLAYER_TIES;
  }
  else {
    console.log(PLAYER_LOSES);
    return gameOutcome = PLAYER_LOSES;
  }
}

/* Write a NEW function called game(). Call the playRound function 
inside of this one to play a 5 round game that keeps score and 
reports a gameOutcome or loser at the end. */


function game() {
  let roundNum = 0;
  let playerWinsCount = 0;
  let cpuWinsCount = 0;
  for (i = 1; i <= 5; i++) {
    playRound(playerSelection(), compSelection());
    roundNum += 1;
    if (gameOutcome === PLAYER_WINS) {
      playerWinsCount += 1;
    } else if (gameOutcome === PLAYER_TIES) {
    }
    else {
      cpuWinsCount += 1;
    }
    gameOutcome = undefined;
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