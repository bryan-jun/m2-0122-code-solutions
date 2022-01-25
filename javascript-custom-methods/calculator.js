/* exported calculator */

var calculator = {
  add: function (x, y) {

    return x + y;
  },
  subtract: function (x, y) {

    return x - y;
  },
  multiply: function (x, y) {

    return x * y;
  },
  divide: function (x, y) {

    return x / y;
  },
  square: function (x) {

    return x * x;
  },

  sumAll: function (numbers) {
    var sum = 0;

    for (let x = 0; x <= numbers.length - 1; x++) {
      sum = sum + numbers[x];
    }

    return sum;
  },
  getAverage: function (numbers) {

    return calculator.sumAll(numbers) / numbers.length;

  }

};
