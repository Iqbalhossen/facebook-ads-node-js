require('dotenv').config();
const mongoose = require('mongoose');
// Database connected 

  const database =  mongoose.connect(process.env.DATABASE,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=>console.log('database connect New Version'))
    .catch((error) => console.log(error));

 
    module.exports = database;


