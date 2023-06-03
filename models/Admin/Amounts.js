const mongoose = require('mongoose');

const AmountsSchema = new mongoose.Schema({
    days_id: {
        type:String
    },
    amount: {
        type:String
    },
    status: {
        type:Number
    },
    created_at: {
        type:Date
    },
});

module.exports =  mongoose.model('amounts', AmountsSchema);