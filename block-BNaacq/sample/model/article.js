var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
    title: String,
    description: String,
    tags: [String],
    likes: [String],
    author: Schema.Types.ObjectId,
    Comments : Schema.Types.ObjectId,
}, {timestamps: true})

module.exports = mongoose.model('Article', articleSchema)

