const AdsRequest = require('./../../models/User/AdsRequests');
const { ObjectId } = require('mongodb');
exports.AdsRequestView = async (req, res) => {

    try {

        const query =  {status : "0"};
    
        AdsRequest.find(query)
        .then((results) => {
          res.send(results);
        })
        .catch();
        
    }catch(error){
        console.log(error);
    }

}

exports.AdsRequestById = async (req, res) => {

    try {
        const id =req.params.id;      
        const query =  {_id : ObjectId(id)};
    
        AdsRequest.find(query)
        .then((results) => {
          res.send(results);
        })
        .catch();
        
    }catch(error){
        console.log(error);
    }

}

exports.AllAdsRequestView = async (req, res) => {

    try {

        AdsRequest.find()
        .then((results) => {
          res.send(results);
        })
        .catch();
        
    }catch(error){
        console.log(error);
    }

}



exports.AdsRequestAccept = async (req, res) => {

    

    try {
        const id =req.params.id;

        const query =  {status : "1"};
        
        const filter =  {_id : ObjectId(id)};
        const  option = {upsert: true};



        const results =  await AdsRequest.updateOne(filter, query, option);

        console.log(results);
        res.status(201).json({
            success:true,
            message:"Ads Request Accept successfully",
            data:results
        });
    

        
    }catch(error){
        console.log(error);
    }

}
exports.AdsRequestReject = async (req, res) => {

    

    try {
        const id =req.params.id;

        const query =  {status : "5"};
        
        const filter =  {_id : ObjectId(id)};
        const  option = {upsert: true};



        const results =  await AdsRequest.updateOne(filter, query, option);

        console.log(results);
        res.status(201).json({
            success:true,
            message:"Ads Request Reject successfully",
            data:results
        });
    

        
    }catch(error){
        console.log(error);
    }

}


exports.AdsRequestProccesing = async (req, res) => {

    

    try {
        const id =req.params.id;

        const query =  {status : "3"};
        
        const filter =  {_id : ObjectId(id)};
        const  option = {upsert: true};



        const results =  await AdsRequest.updateOne(filter, query, option);

        console.log(results);
        res.status(201).json({
            success:true,
            message:"Ads Request Reject successfully",
            data:results
        });
    

        
    }catch(error){
        console.log(error);
    }

}


exports.AdsRequestDone = async (req, res) => {

    

    try {
        const id =req.params.id;

        const query =  {status : "4"};
        
        const filter =  {_id : ObjectId(id)};
        const  option = {upsert: true};



        const results =  await AdsRequest.updateOne(filter, query, option);

        console.log(results);
        res.status(201).json({
            success:true,
            message:"Ads Request Reject successfully",
            data:results
        });
    

        
    }catch(error){
        console.log(error);
    }

}


