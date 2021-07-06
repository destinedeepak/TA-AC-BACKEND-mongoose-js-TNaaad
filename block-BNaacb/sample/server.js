var mongoose = require('mongoose');
var express = require('express');

var app = express()

mongoose.connect('mongodb:localhost/sample',
{useNewUrlParser: true, useUnifiedTopology : true},
(err) => err ? err : 'Connected to db'
)

app.listen(3000, () => {
    console.log('Server is listening at 3k');
})