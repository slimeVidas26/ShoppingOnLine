const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderSchema = new Schema({
    _user : {
        type : String,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        trim : true
    },
    _cart : {
        type : String,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cart',
        trim : true
    },
    total_amount : {
        type : Number,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CartDetail',
        trim : true
    },
    city : {
        type : String,
        required : [true,'city is required'],
        trim : true,
        default:"next step"
    },
    delivery_adress : {
        type : String,
        required : [true,'adress is required'],
        trim : true,
        default : "next step"
    },
    delivery_date : {
        type: String, 
        default:Date.now()
    },
    order_date : {
        type: Date,
        default: Date.now  
    },
    payment_method : {
        type : String,
        required : [true,'Payment method is required'],
        default : "next step"
    }

});

module.exports = mongoose.model(`Order`,OrderSchema);

// order		
// _id	PK	auto
// user_id	string	objectId
// cart_id	number	objectId
// total_amount	price?	required
// city	string	required
// delivery_adress	string	required
// delivery_date	date	required
// date_order	date	required
// payment_method(4 numbers)	number	required
