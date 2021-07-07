// require
var express = require('express');
var mongoose = require('mongoose');
var User = require('./model/user');

// db connection
mongoose.connect(
  'mongodb://localhost/sample',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log(err ? err : 'Database is connected!');
  }
);

// initiating app
var app = express();

// middlewares
app.use(express.json());

// routes
app.post('/users', (req, res, next) => {
  User.create(req.body, (err, product) => {
    if (err) {
      next(err);
    } else {
      res.send(`user is inserted ${product}`);
    }
  });
});

app.get('/users/:id', (req, res, next) => {
  var id = req.params.id;
  User.findById(id, (err, product) => {
    if (err) {
      next(err);
    } else {
      res.send(product);
    }
  });
});

app.put('/users/:id', (req, res, next) => {
  var id = req.params.id;
  User.findByIdAndUpdate(id, req.body, (err, updatedProduct) => {
    if (err) {
      return next(err);
    }
    res.send(`product updated: ${updatedProduct}`);
  });
});

app.delete('/users/:id', (req, res, next) => {
    var id = req.params.id;
    User.findByIdAndDelete(id, (err, deletedProduct) => {
      if (err) {
        return next(err);
      }
      res.send(`product deleted: ${deletedProduct}`);
    });
  });

app.use((req, res, next) => {
  res.status(404).send('Page not found');
});

app.use((err, req, res, next) => {
  res.send(err);
});

app.listen(3000, () => {
  console.log('Server is listening at 3k');
});
