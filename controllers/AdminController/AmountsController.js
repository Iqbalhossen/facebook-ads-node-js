const Amounts = require('../../models/Admin/Amounts');
exports.AmountsStore = async (req, res) => {

    const days = req.body;

    // console.log(page);

    try {
    
        const adsRequest = await Amounts.create(days);
        const data = {adsRequest}
        // console.log(adsRequest);
        res.status(201).json({
            success:true,
            message:"Ads add successfully",
            data: data,
        });


        
    }catch(error){
        console.log(error);
    }

}


exports.AmountsView = async (req, res) => {

    try {

//    const page = await Page.find(query);

Amounts.find()
      .then((results) => {
        res.send(results);
      })
      .catch();


        
    }catch(error){
        console.log(error);
    }

}

exports.AmountsViewById = async (req, res) => {

    try {


        const amountid =req.params.id;

        // console.log(amountid);
 
         // const query =  {_id : ObjectId(newid)};
 
     //  const page = await Page.find(query);
 
     Amounts.findOne({ days_id: amountid})
       .then((results) => {
         res.send(results);
       })
       .catch();

//    const page = await Page.find(query);



        
    }catch(error){
        console.log(error);
    }

}
