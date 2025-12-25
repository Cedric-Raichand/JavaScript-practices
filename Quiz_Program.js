const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let score = 0;

console.log(" Welcome to Cedric's Quiz (Node.js) ===\n");

function ask(question, correctAnswer, callback) {
  rl.question(question, (answer) => {
    if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
      console.log("Correct!\n");
      score++;
    } else {
      console.log(`Wrong! The correct answer is ${correctAnswer}\n`);
    }
    callback();
  });
}

ask("1. Capital of France? (a) Berlin (b) Paris (c) Madrid\nYour answer: ", "b", () => {
  ask("2. Web styling language? (a) CSS (b) Python (c) SQL\nYour answer: ", "a", () => {
    ask("3. CPU stands for? (a)Central Process Unit (b) Central Processing Unit (c) Central Personal Unit\nYour answer: ", "b", () => {
      console.log(` QUIZ COMPLETED \nYou scored ${score} out of 3!`);
      rl.close();
    });
  });
});
