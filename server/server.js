const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const koalaRouter = require('./routes/koala.router');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('server/public'));

// ROUTES
app.use('/koalas', koalaRouter);

//
router.post('/', (req, res) => {
  let koala = req.body;
  console.log(`Adding book`, koala);

  let queryText = `INSERT INTO "koala_inventory" ("name", "gender", "age", "koala_inventory", "notes" )
                   VALUES ($1, $2);`;
  pool
    .query(queryText, [
      koala.name,
      koala.age,
      koala.gender,
      koala.readyForTransfer,
      koala.notes,
    ])
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Error adding new furry friend.`, error);
      res.sendStatus(500);
    });
});

// Start listening for requests on a specific port
app.listen(PORT, () => {
  console.log('listening on port', PORT);
});
