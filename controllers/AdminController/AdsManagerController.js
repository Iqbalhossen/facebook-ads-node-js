const AdsManager = require('../../models/User/AdsManager');
const { ObjectId } = require('mongodb');
exports.AdsManagerView = async (req, res) => {

    try {    
        AdsManager.find()
        .then((results) => {
          res.send(results);
        })
        .catch();
        
    }catch(error){
        console.log(error);
    }

}

exports.AdsManagerViewById = async (req, res) => {

    try {
        const id =req.params.id;      
        const query =  {_id : ObjectId(id)};
    
        AdsManager.find(query)
        .then((results) => {
          res.send(results);
        })
        .catch();
        
    }catch(error){
        console.log(error);
    }

}


exports.AdsManagerPayment = async (req, res) => {

    

    try {
        const id =req.params.id;

        const query =  {status : 1};
        
        const filter =  {_id : ObjectId(id)};
        const  option = {upsert: true};



        const results =  await AdsManager.updateOne(filter, query, option);

        console.log(results);
        res.status(201).json({
            success:true,
            message:"Payment Recived successfully",
            data:results
        });
    

        
    }catch(error){
        console.log(error);
    }

}
exports.AdsManagerDone = async (req, res) => {

    

    try {
        const id =req.params.id;

        const query =  {status : 2};
        
        const filter =  {_id : ObjectId(id)};
        const  option = {upsert: true};



        const results =  await AdsManager.updateOne(filter, query, option);

        console.log(results);
        res.status(201).json({
            success:true,
            message:"Payment Recived successfully",
            data:results
        });
    

        
    }catch(error){
        console.log(error);
    }

}




