const data = require('./data.json');
const fs = require('fs');

module.exports = function delete1(deletion) {
  var deleteKey = String(deletion);
  delete data.notes[deleteKey];
  JSON.stringify(data, null, 2);
  fs.writeFile('data.json', JSON.stringify(data), function (err) {
    if (err) throw err;
  });

};
