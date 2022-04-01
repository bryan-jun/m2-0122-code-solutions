const takeAChance = require('./take-a-chance');

var chance = takeAChance('Bryan');

chance.then(value => {
  console.log(value);
});

chance.catch(error => {
  console.error(error.message);
});
