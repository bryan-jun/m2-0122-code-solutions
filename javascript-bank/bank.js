/* exported Bank */

function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];

}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance <= 0 || Number.isInteger(balance) === false) {
    return null;
  } else {
    var newAccount = new Account(this.nextAccountNumber, holder);
    newAccount.deposit(balance);
    this.accounts.push(newAccount);
    this.nextAccountNumber += 1;
    return newAccount.number;

  }

};

Bank.prototype.getAccount = function (number) {

  if (number >= this.nextAccountNumber) {
    return null;
  } else {
    return this.accounts[number - 1];

  }

};

Bank.prototype.getTotalAssets = function () {

  var total = 0;

  if (this.accounts.length === 0) {
    return 0;
  } else {
    for (let x = 0; x <= this.accounts.length - 1; x++) {
      var balance = this.accounts[x].getBalance();
      total = total + balance;

    }
    return total;
  }

};
