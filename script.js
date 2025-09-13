let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const guess = document.getElementById("guessInput").value;
  const message = document.getElementById("message");
  const attemptsText = document.getElementById("attempts");

  attempts++;

  if (guess == randomNumber) {
    message.textContent = `🎉 Correct! The number was ${randomNumber}`;
    message.style.color = "green";
  } else if (guess < randomNumber) {
    message.textContent = "📉 Too low! Try again.";
    message.style.color = "red";
  } else {
    message.textContent = "📈 Too high! Try again.";
    message.style.color = "red";
  }

  attemptsText.textContent = `Attempts: ${attempts}`;
}



