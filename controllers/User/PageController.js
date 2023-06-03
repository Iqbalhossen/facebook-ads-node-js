const { ObjectId } = require('mongodb');
const Page = require('./../../models/User/Page');
exports.PageStore = (req, res) => {

    const page = req.body;

    // console.log(page);

    async function run(){

        try {
    
            const users = await Page.create(page);
            const userData = {users}
            // console.log((users._id).toString());
            res.status(201).json({
                success:true,
                message:"Page add successfully",
                data: userData,
            });
    
    
            
        }catch(error){
            console.log(error);
        }
    }
    
    run().catch(error=> console.log(error));
        // res.json({message:`${users}`});
}


exports.PageView = (req, res) => {

    async function run(){

        try {
            const userid =req.params.userId;

        //    console.log(userid);

            // const query =  {_id : ObjectId(newid)};
    
        //  const page = await Page.find(query);
    
          Page.find({ user_id: userid})
          .then((results) => {
            res.send(results);
          })
          .catch();
    
    
            
        }catch(error){
            console.log(error);
        }
    }
    
    run().catch(error=> console.log(error));
        // res.json({message:`${users}`});
}


exports.PageViewById = async(req, res) => {

    

        try {
            const pageid =req.params.id;
            
            const query =  {_id : ObjectId(pageid)};
    
          Page.findOne(query)
          .then((results) => {
            res.send(results);
          })
          .catch();
    
    
            
        }catch(error){
            console.log(error);
        }
    

    
        // res.json({message:`${users}`});
}


exports.PageEdit = (req, res) => {

    async function run(){

        try {
    
            const newid =req.params.id;

            const query =  {_id : ObjectId(newid)};
    
         const page = await Page.findOne(query);
     
            res.status(201).json({
                success:true,
                message:"Page Delete successfully",
                data:page
            });
            
        }catch(error){
            console.log(error);
        }
    }
    
    run().catch(error=> console.log(error));
        // res.json({message:`${users}`});
}


exports.PageUpdate = (req, res) => {
    const page = req.body;

    async function run(){

        try {
    
            const newid =req.params.id;

            const filter =  {_id : ObjectId(newid)};
            const  option = {upsert: true};



            const results =  await Page.updateOne(filter, page, option);

     console.log(results);
            res.status(201).json({
                success:true,
                message:"Page Update successfully",
                data:results
            });
            
        }catch(error){
            console.log(error);
        }
    }
    
    run().catch(error=> console.log(error));
        // res.json({message:`${users}`});
}




exports.PageDelete = (req, res) => {

    async function run(){

        try {

            const newid =req.params.id;

            const query =  {_id : ObjectId(newid)};
    
         const page = await Page.findByIdAndRemove(query);
     
         res.status(201).json({
            success:true,
            message:"Page Delete successfully",
            data:page
        });
        
        // res.send(page);
            
        }catch(error){
            console.log(error);
        }
    }
    
    run().catch(error=> console.log(error));
 
}

