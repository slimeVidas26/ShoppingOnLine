const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CartDetailSchema = new Schema({

    product: [{
        type: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        },

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

        },

        quantity: {
            type: Number,
            required: [true, 'Quantity is required'],
            trim: true,
            default: 0
        },
        sub_total: {
            type: Number,
            required: [true, 'Total amount is required'],
            trim: true,
            default: 0
        }
    }],

    total_amount: {
        type: Number,
        required: [true, 'Total amount is required'],
        trim: true,
        default: 0
    },
    _cart: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cart',
        trim: true
    }

});

module.exports = mongoose.model(`Cartdetail`, CartDetailSchema);