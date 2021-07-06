var mongoose  = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
    title: 'String',
    index: 5
})

module.exports = mongoose.model('Article', articleSchema);