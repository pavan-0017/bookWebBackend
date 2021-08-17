const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const signupSchema = new Schema({
    firstName : {
        type : String,
        required : true

    },
    lastName: {
        type : String,
        required : true

    },
    email : {
        type : String,
        required : true

    },
    password : {
        type : String,
        required : true

    },
    date : {
        type : Date,
        default : Date.now
    }

});

const User = new mongoose.model('SignUpDetailsTable',signupSchema);

module.exports = User