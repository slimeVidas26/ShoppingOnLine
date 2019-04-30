const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CartSchema = new Schema({
    _user: {
        type: String,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    created: {
        type: Date,
        default: Date.now()
    }

});

module.exports = mongoose.model('Cart', CartSchema);