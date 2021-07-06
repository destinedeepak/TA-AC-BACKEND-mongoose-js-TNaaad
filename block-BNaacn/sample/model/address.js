var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var addressSchema = new Schema({
    village: {type: String},
    city: {type: String, required: true},
    state: {type: String, required: true},
    pin: {type: Number},
    user : {type: Schema.Types.ObjectId}
}, {timestamps: true})

module.exports = mongoose.model('Address', addressSchema);