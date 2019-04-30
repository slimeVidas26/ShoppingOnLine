const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategorySchema = new Schema({
    category_name: {
        type: String,
        required: [true, 'category_name is required'],
        trim: true
    }

});

module.exports = mongoose.model(`Category`, CategorySchema);