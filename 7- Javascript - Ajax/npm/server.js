'use strict';

const express = require('express');

// Constants
const PORT = 8080;

// App
const app = express();

app.use(express.static(__dirname + '/src'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', function (req, res) {
  res.render('src/index.html');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);