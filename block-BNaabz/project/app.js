// require
var express = require('express');
var mongoose = require('mongoose');

// db connection
mongoose.connect(
  'mongodb://localhost/sample',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log(err ? err : 'Connected to database');
  }
);

// instatntiate the app
var app = express();

// middlewares

// routes 
app.get('/', (req, res) => {
    res.send('Welcome');
})

app.listen(3000, () => {
    console.log('Server is listening at 3000');
})
