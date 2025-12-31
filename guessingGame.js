const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

console.log("Welcome to the Number Guessing Game");
console.log("I am thinking of a number between 1 and 100.");

function askGuess() {
  rl.question("Enter your guess: ", (input) => {
    const guess = Number(input);
    attempts++;

    if (guess < secretNumber) {
      console.log("Too low. Try again.");
      askGuess();
    } else if (guess > secretNumber) {
      console.log("Too high. Try again.");
      askGuess();
    } else {
      console.log(`Correct! You guessed the number in ${attempts} attempts.`);
      rl.close();
    }
  });
}

askGuess();
