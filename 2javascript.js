/* Write a function that plays a single round of Rock Paper Scissors. 
The function should take two parameters - the playerSelection and 
return and then return a string that declares the gameOutcome of 
the round like so: "You Lose! Paper beats Rock" */

// function playRound(playerSelection, computerSelection) {
//   // your code here!
// }

// const playerSelection = "rock";
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));


/* Write a NEW function called game(). Call the playRound function 
inside of this one to play a 5 round game that keeps score and 
reports a gameOutcome or loser at the end. */

function playRound(playerSelection, computerSelection) {
  if ((playerSelection === 'rock' && computerSelection === 'scissor') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissor' && computerSelection === 'paper')) {
    return ROUND_OUTCOME_WIN;
  }
  else if (playerSelection == computerSelection) {
    return ROUND_OUTCOME_TIE;
  }
  else {
    return ROUND_OUTCOME_LOSE;
  }
}

function computerPlay() {
  let randomInt = Math.floor(Math.random() * 3); // random number between 0 and 2

  switch (randomInt) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissor';
      break;
    default:
      return 'something went horribly wrong'
      break;
  }
}

const playerSelection = "rock";
const computerSelection = computerPlay(); // Should this be here?

const ROUND_OUTCOME_WIN = `You win! ${playerSelection} beats ${computerSelection}`;
const ROUND_OUTCOME_TIE = `Tie! ${playerSelection} vs ${computerSelection}`;
const ROUND_OUTCOME_LOSE = `You lose! ${computerSelection} beats ${playerSelection} `;

function game() {
  let player_wins_count = 0;
  let computer_wins_count = 0;

  for (let i = 1; i <= 5; i++) {
    let match_outcome = playRound(playerSelection, computerPlay());
    if (match_outcome === ROUND_OUTCOME_WIN) {
      player_wins_count += 1;
    }
    else if (match_outcome === ROUND_OUTCOME_TIE) {
    }
    else if (match_outcome === ROUND_OUTCOME_LOSE) {
      computer_wins_count += 1;
    } else {
      console.log("SOMETHING WENT HORRIBLY WRONG");
    }
  }


  let GAME_OUTCOME_WIN = `You win! ${player_wins_count} to ${computer_wins_count}`;
  let GAME_OUTCOME_TIE = `Tie! ${player_wins_count} to ${computer_wins_count}`;
  let GAME_OUTCOME_LOSE = `You lose! ${computer_wins_count} to ${player_wins_count}`;

  if (player_wins_count > computer_wins_count) {
    return GAME_OUTCOME_WIN;
  } else if (player_wins_count === computer_wins_count) {
    return GAME_OUTCOME_TIE;
  } else if (player_wins_count < computer_wins_count) {
    return GAME_OUTCOME_LOSE;
  } else {
    return "SOMETHING WENT HORRIBLY WRONG!";
  }
}

console.log(game());