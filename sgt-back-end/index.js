const pg = require('pg');
var express = require('express');
var app = express();

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

var middle = express.json();

app.use(middle);

app.get('/api/grades', (req, res) => {
  const sql = `
    select *
    from "grades"

  `;

  db.query(sql)
    .then(result => {
      const grades = result.rows;
      res.status(200);
      res.json(grades);

    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred. '
      });
    });
});

app.post('/api/grades', (req, res) => {
  if (!Number.isInteger(Number(req.body.score)) || req.body.score < 0 || req.body.score > 100 || req.body.score === '' || req.body.score === undefined || req.body.name === '' || req.body.name === undefined || req.body.course === '' || req.body.course === undefined) {
    var error3 = {
      error: 'Invalid grade entry'
    };
    res.status(400).send(error3);
    return;
  }

  const sql = `
  insert into "grades"("name", "course", "score") values($1, $2, $3) returning *
  `;
  const values = [req.body.name, req.body.course, Number(req.body.score)];

  db.query(sql, values)
    .then(result => {
      const grade = result.rows;
      res.status(201);
      res.json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred'
      });
    });
});

app.get('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  }

  const sql = `
    select "gradeId",
           "name",
           "course",
           "score",
           "createdAt"
      from "grades"
     where "gradeId" = $1
  `;

  const params = [gradeId];

  db.query(sql, params)
    .then(result => {

      const grade = result.rows[0];
      if (!grade) {

        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        res.json(grade);
      }
    })
    .catch(err => {

      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  } else if (!Number.isInteger(Number(req.body.score)) || req.body.score < 0 || req.body.score > 100 || req.body.score === '' || req.body.score === undefined || req.body.name === '' || req.body.name === undefined || req.body.course === '' || req.body.course === undefined) {
    res.status(400).json({
      error: 'Invalid grade entry'
    });
    return;
  }

  const sql = `
    update "grades"
    set "name" = $1,
        "course" = $2,
        "score" = $3
    where "gradeId" = $4
    returning *;
  `;

  const values = [req.body.name, req.body.course, Number(req.body.score), gradeId];

  db.query(sql, values)
    .then(result => {

      const grade = result.rows[0];
      if (!grade) {

        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        res.json(grade);
      }
    })
    .catch(err => {

      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  }

  const sql2 = `
    select "gradeId",
           "name",
           "course",
           "score",
           "createdAt"
      from "grades"
     where "gradeId" = $1
  `;

  const sql = `
    delete from "grades"
    where "gradeId" = $1
  `;

  const values = [gradeId];

  db.query(sql2, values)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });

      }
    });

  db.query(sql, values)
    .then(result => {

      const grade = result.rows[0];
      res.json(grade);

    })
    .catch(err => {

      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});
