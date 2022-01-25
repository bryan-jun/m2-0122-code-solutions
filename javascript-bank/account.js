/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];

  return this;
}

Account.prototype.deposit = function (amount) {

  if (amount <= 0 || Number.isInteger(amount) === false) {
    return false;
  } else {
    var newTx = new Transaction('deposit', amount);
    this.transactions.push(newTx);
    return true;
  }

};

Account.prototype.withdraw = function (amount) {
  if (amount <= 0 || Number.isInteger(amount) === false) {
    return false;
  } else {
    var newTx = new Transaction('withdrawal', amount);
    this.transactions.push(newTx);
    return true;
  }

};

Account.prototype.getBalance = function () {
  var balance = 0;

  for (let x = 0; x <= this.transactions.length - 1; x++) {
    if (this.transactions[x].type === 'deposit') {
      balance = balance + this.transactions[x].amount;
    } else if (this.transactions[x].type === 'withdrawal') {
      balance = balance - this.transactions[x].amount;
    }
  }
  return balance;

};
