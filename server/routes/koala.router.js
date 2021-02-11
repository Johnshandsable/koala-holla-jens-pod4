const { Router } = require('express');
const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION
const pool = require('../modules/pool');

// console.log(pool);

// ROUTE WILL BE /koalas FOR ALL METHODS
// GET
koalaRouter.get('/', (req, res) => {
  console.log('SERVER - GET inside /koalas');
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
