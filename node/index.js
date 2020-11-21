const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  console.log(process.env.TEST_VAL);
  res.send('hello from node!');
});

app.listen(5000);
