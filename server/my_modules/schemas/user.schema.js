const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var validateEmail = function (email) {
    var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regexEmail.test(email)
};

var UserSchema = new Schema({
    first_name: {
        type: String,
        required: [true, 'first_name is required'],
        trim: true
    },
    last_name: {
        type: String,
        required: [true, 'last_name is required'],
        trim: true
    },
    username: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    ID: {
        type: String,
        required: [true, 'ID is required']
    },
    hash: {
        type: String,
        required: [true, 'hash is required']
    },
    city: {
        type: String,
        required: [true, 'city is required'],
        trim: true
    },
    adress: {
        type: String,
        required: [true, 'adress is required'],
        trim: true
    },
    role: {
        type: String,
        trim: true,
        default: "Customer"
    }

});

module.exports = mongoose.model(`User`, UserSchema);