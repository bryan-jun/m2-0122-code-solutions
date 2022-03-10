const read = require('./read');
const delete1 = require('./delete');
const add = require('./add');
const update = require('./update');

if (process.argv[2] === 'read') {
  read();
} else if (process.argv[2] === 'delete') {
  delete1(process.argv[3]);
} else if (process.argv[2] === 'add') {
  add(process.argv[3]);
} else if (process.argv[2] === 'update') {
  update(process.argv[3], process.argv[4]);
}
