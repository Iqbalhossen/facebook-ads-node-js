// require('./../config/database');
const mongoose = require('mongoose');
// var Schema = mongoose.Schema;

const pageSchema = new mongoose.Schema({
    page_name: {
        type:String
    },
    page_link: {
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

module.exports =  mongoose.model('pages', pageSchema);