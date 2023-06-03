// require('./../config/database');
const mongoose = require('mongoose');
// var Schema = mongoose.Schema;

const CreditSchema = new mongoose.Schema({
    user: {
        type: Object
    },
    accounts: {
        type: String
    },
    amounts: {
        type: String
    },
    credit: {
        type: String
    },
    toal_credit: {
        type: Number
    },
    PaymentMethod: {
        type: String
    },
    PaymentTransactionId: {
        type: String
    },
    comments: {
        type: String
    },
    paymentStatus: {
        type: String
    },
    user_id: {
        type: String
    },
    status: {
        type: Number
    },
    created_at: {
        type: Date
    },
    update_at: {
        type: Date
    },
});

// const User = mongoose.model('users', userSchema);

module.exports = mongoose.model('credit', CreditSchema);