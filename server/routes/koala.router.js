const { Router } = require('express');
const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION
const pool = require('../modules/pool');


// ROUTE WILL BE /koalas FOR ALL METHODS
// GET
koalaRouter.get('/', (req, res) => {
  console.log('SERVER - GET');
  let sqlQuery = 'SELECT * FROM "koala_inventory"';

  pool
    .query(sqlQuery)
    .then((result) => {
      // SEND BACK TO CLIENT TO DISPLAY TO DOM
      res.send(results.rows);
    })
    .catch((error) => {
      // ELSE SEND BACK AN ERROR
      console.log(`SERVER - GET inside query - ERROR`, error);
      res.sendStatus(500);
    });
});

// POST
koalaRouter.post('/', (req, res) => {
  console.log('SERVER - POST inside /koalas');
});

// PUT
koalaRouter.put('/', (req, res) => {
  console.log('SERVER - PUT inside /koalas');
});

// DELETE
koalaRouter.delete('/', (req, res) => {
  console.log('SERVER - DELETE inside /koalas');
});

module.exports = koalaRouter;
