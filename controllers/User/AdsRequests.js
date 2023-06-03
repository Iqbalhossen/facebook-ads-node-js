const { ObjectId } = require('mongodb');
const AdsRequests = require('./../../models/User/AdsRequests');
exports.AdsRequestsStore = async (req, res) => {

    const adsRequests = req.body;

    // console.log(adsRequests);

    try {
    
        const adsRequest = await AdsRequests.create(adsRequests);
        const data = {adsRequest}
        // console.log(adsRequest);
        res.status(201).json({
            success:true,
            message:"Ads Request add successfully",
            data: data,
        });


        
    }catch(error){
        console.log(error);
    }


        // res.json({message:`${users}`});
}


exports.AdsRequestsView = async (req, res) => {

    try {
        const userid =req.params.userId;

        const query =  {user_id: userid, status : "0"};


    AdsRequests.find(query)
      .then((results) => {
        res.send(results);
      })
      .catch();


        
    }catch(error){
        console.log(error);
    }

}
exports.AllAdsRequestsView = async (req, res) => {

    try {
        const userid =req.params.userId;

        const query =  {user_id: userid};


    AdsRequests.find(query)
      .then((results) => {
        res.send(results);
      })
      .catch();


        
    }catch(error){
        console.log(error);
    }

}


exports.AdsRequestsRcceptView = async (req, res) => {

    try {
        const userid =req.params.userId;

        const query =  {user_id: userid, status : "1"};


    AdsRequests.find(query)
      .then((results) => {
        res.send(results);
      })
      .catch();


        
    }catch(error){
        console.log(error);
    }

}

exports.AdsRequestsRejectView = async (req, res) => {

    try {
        const userid =req.params.userId;

        const query =  {user_id: userid, status : "5"};


    AdsRequests.find(query)
      .then((results) => {
        res.send(results);
      })
      .catch();


        
    }catch(error){
        console.log(error);
    }

}


exports.AdsRequestsDelete = async (req, res) => {

    try {

        const newid =req.params.id;

        const query =  {_id : ObjectId(newid)};

     const adsRequests = await AdsRequests.findByIdAndRemove(query);
 
     res.status(201).json({
        success:true,
        message:"Ads Requests Delete successfully",
        data:adsRequests
    });
    
    // res.send(page);
        
    }catch(error){
        console.log(error);
    }
 
}


exports.AdsRequestsPayment = async (req, res) => {

    const payment = req.body;
// console.log(payment);
    try {

        const newid =req.params.id;

        const filter =  {_id : ObjectId(newid)};
        const  option = {upsert: true};


     const adsRequests = await AdsRequests.updateOne(filter, payment, option);
 
     res.status(201).json({
        success:true,
        message:"Ads Requests Payment successfully",
        data:adsRequests
    });
    
    // res.send(page);
        
    }catch(error){
        console.log(error);
    }
 
}