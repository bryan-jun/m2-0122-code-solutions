const data = require('./data.json');
const fs = require('fs');

module.exports = function update(uKey, uEntry) {
  var keys = [];
  for (const [key] of Object.entries(data.notes)) {
    keys.push(key);
  }
  var updateKey = String(uKey);
  if (keys.includes(updateKey)) {
    data.notes[updateKey] = uEntry;
    JSON.stringify(data, null, 2);
    fs.writeFile('data.json', JSON.stringify(data), function (err) {
      if (err) throw err;
    });
  } else {
    console.log('ID not in notes');
  }
};
