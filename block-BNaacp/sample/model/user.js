var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: {type : String, required : true},
    email: String,
    sports : [String]
})

module.exports = mongoose.model('User', userSchema);