class BankAccount {
  constructor(owner, balance = 0) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited: ${amount}`);
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Insufficient funds!");
      return;
    }
    this.balance -= amount;
    console.log(`Withdrawn: ${amount}`);
  }

  getBalance() {
    console.log(`Balance for ${this.owner}: ${this.balance}`);
  }
}

// Example
let acc = new BankAccount("Cedric", 700);
acc.deposit(250);
acc.withdraw(150);
acc.getBalance();
