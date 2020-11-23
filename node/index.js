const express = require('express');
const mongodb = require('mongodb').MongoClient;

const app = express();

app.get('/', (req, res, next) => {
  // check env val
  console.log(process.env.TEST_VAL);

  res.send('hello from node!');
});

mongodb.connect('');

app.listen(5000);
