var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
  content: String,
  author: Schema.Types.ObjectId,
  article: Schema.Types.ObjectId,
},{timestamps: true});

module.exports = mongoose.model('Comment', commentSchema)
