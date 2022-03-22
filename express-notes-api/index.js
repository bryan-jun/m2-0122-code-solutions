var express = require('express');
var app = express();
const data = require('./data.json');
const fs = require('fs');

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});

app.get('/api/notes', (req, res) => {
  var grades2 = [];
  for (const key in data.notes) {
    grades2.push(data.notes[key]);
  }

  res.json(grades2);

});

app.get('/api/notes/:id', (req, res) => {

  var keys = [];
  for (const key in data.notes) {
    keys.push(key);
  }

  if (isPositiveInteger(req.params.id) === false) {
    var error1 = {
      error: 'id must be a positive integer'
    };
    res.status(400).send(error1);
  } else if (keys.includes(req.params.id)) {
    res.status(200).send(data.notes[req.params.id]);
  } else {
    var error2 = {
      error: 'cannont find note with id ' + String(req.params.id)
    };

    res.status(404).send(error2);

  }

});

var middle = express.json();

app.use(middle);

app.post('/api/notes', (req, res) => {

  if (req.body.content === '') {
    var error3 = {
      error: 'content is a required field'
    };
    res.status(400).send(error3);
  } else if (req.body.content !== '') {
    var newEntry = {
      id: data.nextId,
      content: req.body.content
    };
    data.notes[data.nextId] = newEntry;

    data.nextId += 1;
    fs.writeFile('data.json', JSON.stringify(data), function (err) {
      if (err === null) {
        res.status(201).send(newEntry);
      } else {
        var error4 = {
          error: 'An unexpected error occurred.'
        };
        console.error(err);
        res.status(500).send(error4);
      }
    });

  }
}
);

app.delete('/api/notes/:id', (req, res) => {
  var keys = [];
  for (const key in data.notes) {
    keys.push(key);
  }
  if (isPositiveInteger(req.params.id) === false) {
    var error1 = {
      error: 'id must be a positive integer'
    };
    res.status(400).send(error1);
  } else if (keys.includes(req.params.id) === false) {
    var error2 = {
      error: 'cannont find note with id ' + String(req.params.id)
    };

    res.status(404).send(error2);

  } else if (keys.includes(req.params.id)) {
    delete data.notes[req.params.id];
    fs.writeFile('data.json', JSON.stringify(data), function (err) {
      if (err === null) {
        res.sendStatus(204);
      } else {
        var error4 = {
          error: 'An unexpected error occurred.'
        };
        console.error(err);
        res.status(500).send(error4);
      }
    });

  }
}

);

app.post('/api/notes/:id', (req, res) => {
  var keys = [];
  for (const key in data.notes) {
    keys.push(key);
  }
  if (req.body.content === '') {
    var error5 = {
      error: 'content is a required field'
    };
    res.status(400).send(error5);
  } else if (isPositiveInteger(req.params.id) === false) {
    var error6 = {
      error: 'id must be a positive integer'

    };
    res.status(400).send(error6);
  } else if (keys.includes(req.params.id) === false) {
    var error2 = {
      error: 'cannont find note with id ' + String(req.params.id)
    };

    res.status(404).send(error2);

  } else if (req.body.content !== '' && isPositiveInteger(req.params.id)) {

    data.notes[req.params.id].content = req.body.content;
    fs.writeFile('data.json', JSON.stringify(data), function (err) {
      if (err === null) {
        res.status(201).send(data.notes[req.params.id]);
      } else {
        var error4 = {
          error: 'An unexpected error occurred.'
        };
        console.error(err);
        res.status(500).send(error4);
      }
    });

  }
}
);

function isPositiveInteger(str) {
  if (typeof str !== 'string') {
    return false;
  }

  const num = Number(str);
  if (Number.isInteger(num) && num > 0) {
    return true;
  }
  return false;
}
