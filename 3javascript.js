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

// Revisiting rock paper scissor

// For now, remove the logic that plays exactly 5 rounds.

/*
 Add an event listener to the buttons that call your playRound 
 function with the correct playerSelection every time a button is 
 clicked. (you can keep the console.logs for this step)

 Display the running score, and announce a winner of the game once 
 one player reaches 5 points.
  1. Create global variables for:
  player_win_tally
  computer_win_tally
  tie_tally

  2. Add logic to new function updateGameScore(winner)

  3. Display the running score in a div
*/

let btnList = document.getElementById('main');
btnList.addEventListener('click', playRound);

let resultsDiv = document.createElement('div');
btnList.appendChild(resultsDiv);

let player_win_tally = 0;
let computer_win_tally = 0;
let tie_tally = 0;

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

function getPlayerSelection(e) {
  return e.target.id;
}

function playRound(e) {
  if(e.target.tagName === 'DIV') {
    return;
  }

  e.preventDefault();
  const computerSelection = getComputerSelection();
  const playerSelection = getPlayerSelection(e);

  let outcome;

  if (playerSelection === 'rock' && computerSelection === 'scissor' || 
     playerSelection === 'paper' && computerSelection === 'rock' ||
     playerSelection === 'scissor' && computerSelection === 'paper') {
       console.log(`Player wins! Player: ${playerSelection} vs Computer: ${computerSelection}`);
       outcome = 'player_wins';
     } 
     else if (playerSelection === computerSelection) {
      console.log(`Tie: Player ${playerSelection} vs Computer: ${computerSelection}`);
      outcome = 'tie';
     } else {
      console.log(`Player loses: Player ${playerSelection} vs Computer: ${computerSelection}`);
      outcome = 'computer_wins';
     }

     updateGameScore(outcome);
     return outcome;
}

function updateGameScore(outcome) {
  let strPlayerWinsMatch = `Player wins match ${player_win_tally} to ${computer_win_tally}`;
  let strComputerWinsMatch = `Computer wins match ${computer_win_tally} to ${player_win_tally}`;
  // Announce winner if one score is already 5
  if (player_win_tally === 5) {
    console.log(strPlayerWinsMatch);
    return;
  }
  if (computer_win_tally === 5) {
    console.log(strComputerWinsMatch);
    return;
  }


  // Increment outcome & announce winner if score reaches 5
  if (outcome === 'player_wins') {
    player_win_tally++;
    if (player_win_tally === 5) {
      console.log(strPlayerWinsMatch);
    }
  } else if (outcome === 'tie') {
    tie_tally++;
  } else if (outcome === 'computer_wins') {
    computer_win_tally++;
    if (computer_win_tally === 5) {
      console.log(strComputerWinsMatch);
    }
  } else {
    console.log(`ERROR: updateGameScore() invalid input`);
  }

  updateHTML();
}

function getResults(str) {
  if (str === 'player') {
    console.log(player_win_tally);
    return player_win_tally;
  } else if (str === 'computer') {
    return computer_win_tally;
  } else {
    console.log('getResults() invalid parameter');
    return 'error';
  }
}

function updateHTML() {
  resultsDiv.classList = 'results';
  resultsDiv.textContent = `player wins: ${getResults('player')} computer wins: ${getResults('computer')}`;
}

// function game(numberOfRounds) {
  // let player_win_tally = 0;
  // let computer_win_tally = 0;
  // let tie_tally = 0;

//   for (let i = 0; i < numberOfRounds; i++) {
//     let round_outcome = playRound();
//     if (round_outcome === 'player_wins') {
//       player_win_tally ++;
//     } else if (round_outcome === 'tie') {
//       tie_tally ++;
//     } else if (round_outcome === 'computer_wins') {
//       computer_win_tally ++;
//     } else {
//       return 'Something is not right';
//     }
//   }

//   if (player_win_tally > computer_win_tally) {
//     return `player wins ${player_win_tally} to ${computer_win_tally}`;
//   } else if (player_win_tally === computer_win_tally) {
//     return `Tie ${player_win_tally} to ${computer_win_tally}`;
//   } else if (player_win_tally < computer_win_tally) {
//     return `Computer wins ${computer_win_tally} to ${player_win_tally}`;
//   } else {
//     return 'Something is not right';
//   }
// }

