let playerScore = 0, computerScore = 0;
const OPTIONS = ['Rock', 'Paper', 'Scissors'];

// Get random computer choice.
const computerPlay = () => {
  return OPTIONS[Math.floor(Math.random() * OPTIONS.length)];
}

const displayUserChoice = document.querySelector('#userchoice');
const displayComputerChoice = document.querySelector('#computerchoice');
const $userscore = document.querySelector('#userscore');
const $compscore = document.querySelector('#compscore');
const $roundtext = document.querySelector('#roundtext');
const displayPlayAgain = document.querySelector('#playagain');

// Compare player and computer input and determine who wins round.
const playRound = (playerSelection, computerSelection) => {
  displayUserChoice.textContent = `You chose ${playerSelection}`;
  displayComputerChoice.textContent = `Computer chose ${computerSelection}`;
  let message;
  if (playerSelection === computerSelection) {
    message = `You both chose ${playerSelection}, Round is a tie!`;
  } else if ((playerSelection === 'Rock' && computerSelection === 'Scissors') ||
            (playerSelection === 'Paper' && computerSelection === 'Rock') ||
            (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
    $userscore.textContent = ++playerScore;
    message = `You won the round! ${playerSelection} beats ${computerSelection}`;
  } else {
    $compscore.textContent = ++computerScore;
    message = `You lost the round! ${computerSelection} beats ${playerSelection}`;
  }
  $roundtext.textContent = message;
  
  if(playerScore === 5 || computerScore === 5) {
    endGame();
  }
}
const endGame = () => {
    let text = playerScore > computerScore ? "You win!" : "You lose!";  
    document.querySelector("#endtext").textContent = text;
    document.querySelector("#btns").classList.add('hidden');
    document.querySelector("#displayInfo").classList.add('hidden');
    displayPlayAgain.classList.remove('hidden');
    displayPlayAgain.addEventListener('click', playAgain);
}

// Reload page to start new game.
const playAgain = (e) => {
  playerScore = 0, computerScore = 0;
  location.reload();
  return false;
};

const playerChoice = (e) => {
  playRound(e.target.id, computerPlay());
}

// Add event listeners to buttons when page loads
(function() {
  $roundtext.textContent = 'Choose your weapon above to begin.';
  const $buttons = document.querySelectorAll('#btns>button');
  $buttons.forEach(button => {
    button.addEventListener('click', playerChoice);
  })  
})();