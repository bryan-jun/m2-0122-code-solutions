const data = require('./data.json');
const fs = require('fs');

module.exports = function update(uKey, uEntry) {
  var updateKey = String(uKey);
  data.notes[updateKey] = uEntry;
  JSON.stringify(data, null, 2);
  fs.writeFile('data.json', JSON.stringify(data), function (err) {
    if (err) throw err;
  });

};
