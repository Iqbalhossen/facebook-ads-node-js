const { ObjectId } = require('mongodb');
const User = require('./../models/Users');
exports.Register = (req, res) => {

    const user = req.body;
    async function run(){

    try {
        const email = {email: `${user.email}`}
        const existsEmail = await User.findOne(email);
        // console.log(user.email);
        // console.log(existsEmail);

        if(existsEmail){
         return   res.status(400).json({
                success:false,
                message:"Email Already Exists",
            });

        }

        const users = await User.create(user);
        const userData = {id:`${(users._id).toString()}`, email:`${users.email}`}
        // console.log((users._id).toString());
        res.status(201).json({
            success:true,
            message:"Register successful",
            data: userData,
        });


        
    }catch(error){
        console.log(error);
    }
}

run().catch(error=> console.log(error));
    // res.json({message:`${users}`});
}

exports.Login = (req, res) => {

    const user = req.body;
    async function run(){

    try {
        const email = {email: `${user.email}`}
        const password = {password: `${user.password}`}
        const status = {status: 0}
        const existsStatus = await User.findOne(status);
        const existsEmail = await User.findOne(email);
        const existsEPassowrd = await User.findOne(password);
        console.log(existsEmail);
        // console.log(existsEPassowrd);

        if(!existsStatus){
         return   res.status(400).json({
                success:false,
                message:"Please contact Admin",
            });

        }
        if(!existsEmail){
         return   res.status(400).json({
                success:false,
                message:"Email Invalid",
            });

        }
        if(!existsEPassowrd){
         return   res.status(400).json({
                success:false,
                message:"Password Invailid",
            });

        }

        // const userData = {id:`${(users._id).toString()}`, email:`${users.email}`}
        // console.log((users._id).toString());
        res.status(201).json({
            success:true,
            message:"Login successful",
            data: existsEmail,
        });


        
    }catch(error){
        console.log(error);
    }
}

run().catch(error=> console.log(error));
    // res.json({message:`${users}`});
}





exports.PasswordChange = async (req, res) => {

    const user = req.body;




    try {
        const userId =req.params.id;
        const filter =  {_id : ObjectId(userId)};
        const  option = {upsert: true};

        const findUser = await User.findOne(filter);

        if(findUser.password !== user.oldPassword){
           return res.status(201).json({
                success:false,
                message:"Old Password Invalid",
            });

        }

        // console.log(page)

        const updatePassword = {
            $set: {
                password: `${user.password}`
            },
          };
        // const updatePassword = {password: `${user.password}`,update_at:`${user.update_at}`};
        // console.log(findUser);
        const results =  await User.updateOne(filter, updatePassword, option);

        // console.log(results);
        res.status(201).json({
            success:true,
            message:"Password Change successful",
        });


        
    }catch(error){
        console.log(error);
    }

}


exports.ActiveUsers = async (req, res) => {

    try {
        const id =req.params.id;

        const query =  {status : "0"};
        
        const filter =  {_id : ObjectId(id)};
        const  option = {upsert: true};
        const results =  await User.updateOne(filter, query, option);

        // console.log(results);
        res.status(201).json({
            success:true,
            message:"User Banned successfully",
            data:results
        });


        
    }catch(error){
        console.log(error);
    }

}
exports.BannedUsers = async (req, res) => {

    try {
        const id =req.params.id;

        const query =  {status : "1"};
        
        const filter =  {_id : ObjectId(id)};
        const  option = {upsert: true};
        const results =  await User.updateOne(filter, query, option);

        // console.log(results);
        res.status(201).json({
            success:true,
            message:"User Banned successfully",
            data:results
        });


        
    }catch(error){
        console.log(error);
    }

}


exports.showUser = async (req, res) => {

    const user = req.body;


    try {
        const userId =req.params.id;
        const filter =  {_id : ObjectId(userId)};


        User.findOne(filter)
        .then((results) => {
          res.send(results);
        })
        .catch();


        
    }catch(error){
        console.log(error);
    }

}