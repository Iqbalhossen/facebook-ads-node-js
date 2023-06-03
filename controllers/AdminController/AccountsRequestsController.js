const Accounts = require('../../models/User/Accounts');
const { ObjectId } = require('mongodb');
exports.AccountsView = async (req, res) => {

    try {    
        Accounts.find({status:'0'})
        .then((results) => {
          res.send(results);
        })
        .catch();
        
    }catch(error){
        console.log(error);
    }

}
exports.AccountsAssign = async (req, res) => {

    const assign = req.body;
    console.log(assign);

    try {
        const id =req.params.id;

        const query =  {status:1, accounts : assign.accounts, update_at:assign.update_at};
        
        const filter =  {_id : ObjectId(id)};
        const  option = {upsert: true};



        const results =  await Accounts.updateOne(filter, query, option);

        console.log(results);
        res.status(201).json({
            success:true,
            message:"Ads Account Assign successfully",
            data:results
        });
    

        
    }catch(error){
        console.log(error);
    }

}


exports.AccountDelete = async (req, res) => {

    try {
        const id = req.params.id;

        // console.log({ user: { _id: userid } })
        const query = {_id : ObjectId(id)};
        //  const page = await Page.find(query);

        const accounts = await  Accounts.findByIdAndRemove(query)
        res.status(201).json({
            success:true,
            message:"Accounts Requests Delete successfully",
            data:accounts
            })
            .catch();



    } catch (error) {
        console.log(error);
    }

}




