var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    name: String,
    age: Number,
    favorites: [String],
    marks: [Number],
    password: { type: String, min: 5, max: 15 },
    date: { type: date, default: new Date() },
  },
  { timestamps: true }
);
