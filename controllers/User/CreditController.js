const Credit = require('../../models/User/Credit');
const { ObjectId } = require('mongodb');
exports.CreditStore = async (req, res) => {

    const credit = req.body;

    console.log(credit);

    try {

        const data = await Credit.create(credit);
        const newData = { data }
        // console.log((users._id).toString());
        res.status(201).json({
            success: true,
            message: "Account add successfully",
            data: newData,
        });



    } catch (error) {
        console.log(error);
    }


    // res.json({message:`${users}`});
}

exports.CreditView = async (req, res) => {

    try {
        const userid = req.params.userId;
        const account = req.params.account;

        // console.log({ user: { _id: userid } })
        const query = { user_id: userid, accounts:account };
        //  const page = await Page.find(query);

        Credit.find(query)
            .then((results) => {
                res.send(results);
            })
            .catch();



    } catch (error) {
        console.log(error);
    }

}

exports.CreditDelete = async (req, res) => {

    try {
        const id = req.params.id;

        // console.log({ user: { _id: userid } })
        const query = {_id : ObjectId(id)};
        //  const page = await Page.find(query);

        const credit = await  Credit.findByIdAndRemove(query)
        res.status(201).json({
            success:true,
            message:"Credit Requests Delete successfully",
            data:credit
            })
            .catch();



    } catch (error) {
        console.log(error);
    }

}

