const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const contacts = [];

function showMenu() {
  console.log("\n CONTACT BOOK ");
  console.log("1. Add Contact");
  console.log("2. View Contacts");
  console.log("3. Search Contact");
  console.log("0. Exit");
}

function ask(question) {
  return new Promise(resolve => rl.question(question, answer => resolve(answer)));
}

async function addContact() {
  const name = await ask("Enter name: ");
  const phone = await ask("Enter phone: ");
  contacts.push({ name, phone });
  console.log("Contact added successfully!");
}

function viewContacts() {
  if (contacts.length === 0) {
    console.log("No contacts yet.");
    return;
  }
  console.log("\n All Contacts ");
  for (let c of contacts) {
    console.log(`${c.name} - ${c.phone}`);
  }
}

async function searchContact() {
  const name = await ask("Enter name to search: ");
  const found = contacts.find(
    c => c.name.toLowerCase() === name.toLowerCase()
  );

  if (found) {
    console.log(`Found: ${found.name} - ${found.phone}`);
  } else {
    console.log("Contact not found.");
  }
}

async function main() {
  while (true) {
    showMenu();
    const choice = await ask("Choose: ");

    if (choice === "1") await addContact();
    else if (choice === "2") viewContacts();
    else if (choice === "3") await searchContact();
    else if (choice === "0") {
      console.log("Goodbye!");
      rl.close();
      break;
    } else {
      console.log("Invalid option.");
    }
  }
}

main();
