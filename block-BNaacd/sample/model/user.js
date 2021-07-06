var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: { type: String },
  email: { type: String, lowerCase: true },
  age: { type: Number, default: 0 },
});
