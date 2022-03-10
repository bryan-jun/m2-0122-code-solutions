const data = require('./data.json');

module.exports = function read() {
  for (const [key, value] of Object.entries(data.notes)) {
    console.log(key, ': ', value);
  }
};
