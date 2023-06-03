// require('./../config/database');
const mongoose = require('mongoose');
// var Schema = mongoose.Schema;

const adsManagersSchema = new mongoose.Schema({
    page: {
        type:String
    },
    days: {
        type:String
    },
    budget: {
        type:String
    },
    PaymentType: {
        type:String
    },
    PaymentTransactionId: {
        type:String
    },
    PaymentScreenShort: {
        type:String
    },
    comments: {
        type:String
    },
    paymentStatus: {
        type:String
    },   
    user_id: {
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

module.exports =  mongoose.model('adsManagers', adsManagersSchema);