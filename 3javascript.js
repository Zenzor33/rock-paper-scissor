/*
getRandomIntenger() 
-- returns intenger between 0 and 2
-- Generates random integer between 0 and 2

getComputerSelection() -- returns 'rock', 'paper', or 'scissor'
-- Invokes getRandomInteger for a random integer
-- Use switch statement to assign each integer to rock, paper, or scissor
-- Return the computer's selection based on the randomly generated integer

getPlayerSelection() -- returns 'rock', 'paper', or 'scissor'
-- returns 'rock'
-- hard coded selection

playRound() -- plays one round of rock, paper, scissor
-- Invokes getComputerSelection() for the computer's selection and stores it
in a variable
-- Invokes getPlayerSelection() for the player's selection and stores it in
a variable
-- Uses conditional logic to determine the winner
-- Console log a template literal to show the game outcome
-- Return a string of winner

game(numberOfRounds) -- plays numberOfRounds rounds of RPS.
-- Write a loop from 1 to numberOfRounds
-- In each loop, tally winner counts
-- After loop terminates, console.log the game outcome

*/

function getRandomInteger() {
  return Math.floor(Math.random() * 3)
}

function getComputerSelection() {
  const randomInteger = getRandomInteger();

  switch (randomInteger) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissor';
  }
}

function getPlayerSelection() {
  return 'rock';
}

function playRound() {
  const computerSelection = getComputerSelection();
  const playerSelection = getPlayerSelection();
  // console.log(`player plays ${playerSelection} vs ${computerSelection}`)

  if (playerSelection === 'rock' && computerSelection === 'scissor' || 
     playerSelection === 'paper' && computerSelection === 'rock' ||
     playerSelection === 'scissor' && computerSelection === 'paper') {
       return 'player_wins';
     } 
     else if (playerSelection === computerSelection) {
       return 'tie';
     } else {
       return 'computer_wins';
     }
}

function game(numberOfRounds) {
  let player_win_tally = 0;
  let computer_win_tally = 0;
  let tie_tally = 0;

  for (let i = 0; i < numberOfRounds; i++) {
    let round_outcome = playRound();
    if (round_outcome === 'player_wins') {
      player_win_tally ++;
    } else if (round_outcome === 'tie') {
      tie_tally ++;
    } else if (round_outcome === 'computer_wins') {
      computer_win_tally ++;
    } else {
      return 'Something is not right';
    }
  }

  if (player_win_tally > computer_win_tally) {
    return `player wins ${player_win_tally} to ${computer_win_tally}`;
  } else if (player_win_tally === computer_win_tally) {
    return `Tie ${player_win_tally} to ${computer_win_tally}`;
  } else if (player_win_tally < computer_win_tally) {
    return `Computer wins ${computer_win_tally} to ${player_win_tally}`;
  } else {
    return 'Something is not right';
  }
}

console.log(game(5));