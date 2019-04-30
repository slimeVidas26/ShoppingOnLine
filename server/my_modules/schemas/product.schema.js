const mongoose = require('mongoose');
require('mongoose-type-url');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({

    product_name: {
        type: String,
        required: [true, 'product_name is required'],
        trim: true
    },
    _category: {
        type: String,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        trim: true
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        trim: true
    },

    picture: {
        type: String,
        required: [true, 'Picture is required']

    }

});

module.exports = mongoose.model(`Product`, ProductSchema);