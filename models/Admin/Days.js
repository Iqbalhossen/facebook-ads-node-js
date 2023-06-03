const mongoose = require('mongoose');

const DaysSchema = new mongoose.Schema({
    days: {
        type:String
    },
    status: {
        type:Number
    },
    created_at: {
        type:Date
    },
});

module.exports =  mongoose.model('days', DaysSchema);