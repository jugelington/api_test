const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const { getNewsByTerm } = require('./controllers/news');

app.set('view engine', 'ejs');
app.use(bodyParser.json());

app.use('/:topic', getNewsByTerm);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ msg: 'Server Error! Oops!' });
});

module.exports = app;
