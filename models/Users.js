// require('./../config/database');
const mongoose = require('mongoose');
// var Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    name: {
        type:String
    },
    email: {
        type:String,
        unique : true 
    },
    phone: {
        type:Number
    },
    picture: {
        type:String
    },
    password: {
        type:String
    },
    role : {
        type:String
    },
    status: {
        type:Number
    },
    created_at: {
        type:Date
    },
    update_at: {
        type:Date
    },
});

// const User = mongoose.model('users', userSchema);

module.exports =  mongoose.model('users', userSchema);