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
            winner = false;
        }
        else {
            console.log(playerLoses);
            winner = false;
        }
    }

playRound(playerSelection(), compSelection());