const Days = require('../../models/Admin/Days');
exports.daysStore = async (req, res) => {

    const days = req.body;

    // console.log(page);

    try {
    
        const adsRequest = await Days.create(days);
        const data = {adsRequest}
        console.log(adsRequest);
        res.status(201).json({
            success:true,
            message:"Ads add successfully",
            data: data,
        });


        
    }catch(error){
        console.log(error);
    }

}


exports.daysView = async (req, res) => {

    try {

//    const page = await Page.find(query);

    Days.find()
      .then((results) => {
        res.send(results);
      })
      .catch();


        
    }catch(error){
        console.log(error);
    }

}
exports.daysViewById = async (req, res) => {

    try {

        const userid =req.params.id;

        console.log(userid);

//    const page = await Page.find(query);

    Days.findOne({ _id: userid})
      .then((results) => {
        res.send(results);
      })
      .catch();


        
    }catch(error){
        console.log(error);
    }

}
