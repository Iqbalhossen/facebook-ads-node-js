const { ObjectId } = require('mongodb');
const AdsManager = require('../../models/User/AdsManager');

exports.AdsStore =  async (req, res) => {

    const adsManager = req.body;

    // console.log(adsManager);

    try {
    
        const adsRequest = await AdsManager.create(adsManager);
        // const data = {adsRequest}
        // console.log((users._id).toString());
        res.status(201).json({
            success:true,
            message:"Ads add successfully",
            data: adsRequest,
        });


        
    }catch(error){
        console.log(error);
    }


        // res.json({message:`${users}`});
}


exports.AdsView = async (req, res) => {

    try {
        const userid =req.params.userId;

    //    console.log(userid);

        // const query =  {_id : ObjectId(newid)};

    //  const page = await Page.find(query);

    AdsManager.find({ user_id: userid})
      .then((results) => {
        res.send(results);
      })
      .catch();


        
    }catch(error){
        console.log(error);
    }

}


exports.AdsDelete = async (req, res) => {

    try {

        const newid =req.params.id;
// console.log(newid);
        const query =  {_id : ObjectId(newid)};

     const adsRequests = await AdsManager.findByIdAndRemove(query);
//  console.log(adsRequests)
     res.status(201).json({
        success:true,
        message:"Ads Delete successfully",
        data:adsRequests
    });
    
    res.send(page);
        
    }catch(error){
        console.log(error);
    }
 
}