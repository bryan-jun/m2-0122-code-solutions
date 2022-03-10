const data = require('./data.json');
const fs = require('fs');

module.exports = function add(addition) {
  var newEntry = addition;
  var newKey = data.nextId;
  data.notes[newKey] = newEntry;
  data.nextId = data.nextId + 1;
  JSON.stringify(data, null, 2);
  fs.writeFile('data.json', JSON.stringify(data), function (err) {
    if (err) throw err;
  });

};
