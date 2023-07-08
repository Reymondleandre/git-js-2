function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  function playRound(playerSelection, computerSelection) {
    const playerChoice = playerSelection.toLowerCase();
    const computerChoice = computerSelection.toLowerCase();
  
    if (playerChoice === computerChoice) {
      return 'It\'s a tie!';
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      return `You win! ${playerChoice} beats ${computerChoice}.`;
    } else {
      return `You lose! ${computerChoice} beats ${playerChoice}.`;
    }
  }
  
  function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let round = 1; round <= 5; round++) {
      const playerSelection = prompt('Enter your choice (Rock, Paper, or Scissors):');
      const computerSelection = getComputerChoice();
      const result = playRound(playerSelection, computerSelection);
      console.log(`Round ${round}: ${result}`);
  
      if (result.startsWith('You win')) {
        playerScore++;
      } else if (result.startsWith('You lose')) {
        computerScore++;
      }
    }
  
    if (playerScore > computerScore) {
      console.log(`You win the game! Final Score: ${playerScore}-${computerScore}`);
    } else if (playerScore < computerScore) {
      console.log(`You lose the game! Final Score: ${playerScore}-${computerScore}`);
    } else {
      console.log(`It's a tie! Final Score: ${playerScore}-${computerScore}`);
    }
  }
  
  game();