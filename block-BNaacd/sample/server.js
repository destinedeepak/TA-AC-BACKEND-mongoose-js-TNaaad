var mongoose = require('mongoose');
var express = require('express');

var app = express();

mongoose.connect('mongodb://localhost/sample', 
{useUnifiedTopology: true, useNewUrlParser : true},
(err) => {
    console.log(err ? err : 'Connected to database');
}
)

app.get('/', (req, res) => {
    res.send('Welcome');
})

app.listen(3000, () => {
  console.log('Server is listening at 3k');
});