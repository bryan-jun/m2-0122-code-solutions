var express = require('express');
var app = express();

var nextId = 1;

var grades = {

};

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});

app.get('/api/grades', (req, res) => {
  var grades2 = [];
  for (const key in grades) {
    grades2.push(grades[key]);
  }

  res.json(grades2);

});

var middle = express.json();

app.use(middle);

app.post('/api/grades', (req, res) => {

  var newEntry = {
    id: nextId,
    name: req.body.name,
    course: req.body.course,
    score: req.body.score

  };

  grades[nextId] = newEntry;

  res.status(201).send(newEntry);
  nextId += 1;
}
);
