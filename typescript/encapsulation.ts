// Bank Account class

// Depositin money
//Withdrawing money

//Balance - should be only modifyable by withdrawl or depositing money (hidden)

class BankAccount {
  private _balance: number;

  constructor(initialBalance: number) {
    this._balance = initialBalance;
  }

  //Getter to get the balance of the bank account

  public get balance(): number {
    return this._balance;
  }

  //Method Deposit Money

  public deposit(amount: number): void {
    if (amount < 0) {
      console.log("Invalid deposit amount");
      return;
    }
    this._balance += amount;
  }

  //Method to withdraw money

  public withdraw(amount: number): void {
    if (amount < 0) {
      console.log("Invalid withdrawal amount");
      return;
    }
    if (this._balance - amount < 0) {
      console.log("Insufficient funds");
      return;
    }
    this._balance -= amount;
  }
}

const myAccount = new BankAccount(1000);
myAccount.deposit(500);
myAccount.withdraw(200);
console.log("Current balance: ",myAccount.balance)
