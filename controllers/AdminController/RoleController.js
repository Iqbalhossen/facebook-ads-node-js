const User = require('./../../models/Users');

exports.ManagerStore = async (req, res) => {

    const manager = req.body;

    // console.log(manager.role);

    try {
    
        const email = {email: `${manager.email}`}
        const existsEmail = await User.findOne(email);
        // console.log(user.email);
        // console.log(existsEmail);

        if(existsEmail){
         return   res.status(201).json({
                success:false,
                message:"Email Already Exists",
            });

        }

        const newManager = await User.create(manager);
        const managerData = {newManager}
        res.status(201).json({
            success:true,
            message:"Manager Create successfully",
            data: managerData,
        });


        
    }catch(error){
        console.log(error);
    }
     
   
}

exports.ManagerView = async (req, res) => {


    try {

      User.find({ role: 'manager'})
      .then((results) => {
        res.send(results);
        // console.log(results)
      })
      .catch();


        
    }catch(error){
        console.log(error);
    }
     
   
}



exports.StaffStore = async (req, res) => {

    const staff = req.body;

    console.log(staff);

    try {

        const email = {email: `${staff.email}`}
        const existsEmail = await User.findOne(email);
        // console.log(user.email);
        // console.log(existsEmail);

        if(existsEmail){
         return   res.status(201).json({
                success:false,
                message:"Email Already Exists",
            });

        }
    
        const newManager = await User.create(staff);
        const staffData = {newstaff}
        res.status(201).json({
            success:true,
            message:"Staff Create successfully",
            data: staffData,
        });


        
    }catch(error){
        console.log(error);
    }
     
   
}

exports.StaffView = async (req, res) => {



    try {
    
      User.find({ role: 'staff'})
      .then((results) => {
        res.send(results);
        // console.log(results)
      })
      .catch();


        
    }catch(error){
        console.log(error);
    }
     
   
}




