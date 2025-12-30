const readline = require("readline");

const LOWER = "abcdefghijklmnopqrstuvwxyz";
const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const DIGITS = "0123456789";
const SYMBOLS = "!@#$%^&*()_+-=[]{}|;:',.<>?";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function menu() {
  console.log("\n🔐 SMART PASSWORD SUITE");
  console.log("1. Generate Random Password");
  console.log("2. Test Password Strength");
  console.log("3. Exit");

  rl.question("Choose an option: ", choice => {
    if (choice === "1") generatePassword();
    else if (choice === "2") testPassword();
    else if (choice === "3") {
      console.log("Goodbye 👋");
      rl.close();
    } else {
      console.log("Invalid option.");
      menu();
    }
  });
}

function generatePassword() {
  rl.question("Enter desired password lenth (8–20): ", input => {
    const length = parseInt(input);

    if (length < 8 || length > 20) {
      console.log("❌ Invalid length.");
      return menu();
    }

    const allChars = LOWER + UPPER + DIGITS + SYMBOLS;
    let password = "";

    for (let i = 0; i < length; i++) {
      password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    console.log("✅ Generated Password:", password);
    menu();
  });
}

function testPassword() {
  rl.question("Enter password to test: ", password => {
    let score = 0;

    if (password.length >= 8) score++;
    if (password.length >= 12) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/\d/.test(password)) score++;
    if (/[^a-zA-Z0-9]/.test(password)) score++;

    console.log("\n📊 Password Strength:");

    if (score <= 2) {
      console.log("WEAK 😬");
      console.log("Tip: Use longer password with symbols.");
    } else if (score <= 4) {
      console.log("MEDIUM ⚠️");
      console.log("Tip: Mix uppercase, numbers & symbols.");
    } else {
      console.log("STRONG 🔥");
      console.log("Excellent password ✔️.");
    }

    menu();
  });
}

menu();
