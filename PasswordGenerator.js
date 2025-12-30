const readline = require("readline");

// Create interface to read user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to generate password
function generatePassword(length) {
    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
        "abcdefghijklmnopqrstuvwxyz" +
        "0123456789" +
        "!@#$%^&*()-_=+[]{}|;:,.<>?/";

    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    return password;
}


function ask(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}


async function main() {
    console.log(" RANDOM PASSWORD GENERATOR ");

    while (true) {
        let lengthInput = await ask("Enter password length (e.g. 8, 12, 16): ");

        let length = parseInt(lengthInput);

        if (isNaN(length) || length <= 0) {
            console.log("Please enter a valid positive number.\n");
            continue;
        }

        let password = generatePassword(length);
        console.log("\nYour password is: " + password + "\n");

        let again = (await ask("Generate another? (y/n): "))
            .trim()
            .toLowerCase();

        if (again !== "y") {
            console.log("\nGoodbye! Stay safe online!");
            rl.close();
            break;
        }

        console.log(""); 
    }
}

main();
