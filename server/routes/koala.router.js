const { Router } = require('express');
const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION
const pool = require('../modules/pool');

// console.log(pool);

// ROUTE WILL BE /koalas FOR ALL METHODS
// GET
koalaRouter.get('/', (req, res) => {
  console.log('SERVER - GET');
  let sqlQuery = 'SELECT * FROM "koala_inventory"';

  pool
    .query(sqlQuery)
    .then((result) => {
      // SEND BACK TO CLIENT TO DISPLAY TO DOM
      res.send(result.rows);
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
koalaRouter.put('/put/:id', (req, res) => {
  // PASS IN AN ID
  console.log('SERVER - PUT inside /koalas/put');
  let koalaId = req.params.id;
  let queryText = `UPDATE "koala_inventory" SET "ready_to_transfer"=TRUE WHERE "id"=$1`;

  pool
    // passes in koalaId to server
    .query(queryText, [koalaId])
    .then((result) => {
      console.log('Updating a koala as ready for transfer with id:', koala);
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(`Error updating book`, error);
      res.sendStatus(500);
    });
});

// DELETE
koalaRouter.delete('/delete/:id', (req, res) => {
  console.log('SERVER - DELETE inside /koalas/delete');
  // PASS IN AN ID
  let koalaId = req.params.id;
  let queryText = `DELETE FROM "koala_inventory" WHERE "id"=$1`;

  pool
    // passes in koalaId to server
    .query(queryText, [koalaId])
    .then((result) => {
      console.log('Deleting a koala with id:', koala);
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Error deleting a koala`, error);
      res.sendStatus(500);
    });
});

module.exports = koalaRouter;
