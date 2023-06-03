const Accounts = require('../../models/User/Accounts');
const { ObjectId } = require('mongodb');
exports.AccountsStore = async (req, res) => {

    const AddAccounts = req.body;

    console.log(AddAccounts);

    try {

        const data = await Accounts.create(AddAccounts);
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

exports.AccountsView = async (req, res) => {

    try {
        const userid = req.params.userId;

        // console.log({ user: { _id: userid } })
        const query = { user_id: userid };
        //  const page = await Page.find(query);

        Accounts.find(query)
            .then((results) => {
                res.send(results);
            })
            .catch();



    } catch (error) {
        console.log(error);
    }

}
exports.AccountsViewById = async (req, res) => {

    try {
        const userid = req.params.userId;
        const newid = req.params.id;

        // console.log({ user: { _id: userid } })
        const query = { _id : ObjectId(newid), user_id: userid };
        //  const page = await Page.find(query);

        Accounts.find(query)
            .then((results) => {
                res.send(results);
                console.log(results)
            })
            .catch();



    } catch (error) {
        console.log(error);
    }

}

