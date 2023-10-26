const player1Guess = document.querySelector("#player1Input");
const player2Guess = document.querySelector("#player2Input");
const message = document.querySelector(".message");
const guessBtn = document.querySelector(".output");

const targetNumber = Math.floor(Math.random() * 50) + 1;
let currentPlayer = 1;
console.log(targetNumber);
let isValid = true;

function validation() {
  if (!player1Guess.value && !player2Guess.value) {
    isValid = false;
    alert("Please enter a valid number for both players.");
  } else {
    isValid = true;
  }
}

function checkGuess() {
  validation();

  if (!isValid) {
    return;
  }

  if (currentPlayer === 1) {
    const player1GuessValue = parseInt(player1Guess.value);
    if (player1GuessValue === targetNumber) {
      message.innerHTML = `<h2>&#128512;</h2> Player 1 wins! The number was ${targetNumber}`;
    } else if (player1GuessValue > targetNumber) {
      message.textContent =
        "Player 1, your guess is too high. Player 2's turn.";
      currentPlayer = 2;
    } else {
      message.textContent = "Player 1, your guess is too low. Player 2's turn.";
      currentPlayer = 2;
    }
    player1Guess.value = "";
  } else if (currentPlayer === 2) {
    const player2GuessValue = parseInt(player2Guess.value);
    if (player2GuessValue === targetNumber) {
      message.innerHTML = `<h2>&#128512;</h2> Player 2 wins! The number was ${targetNumber}`;
    } else if (player2GuessValue > targetNumber) {
      message.textContent =
        "Player 2, your guess is too high. Player 1's turn.";
      currentPlayer = 1;
    } else {
      message.textContent = "Player 2, your guess is too low. Player 1's turn.";
      currentPlayer = 1;
    }
    player2Guess.value = "";
  }
}

guessBtn.addEventListener("click", () => {
  checkGuess();
});
