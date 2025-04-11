const mongoose = require('mongoose');
const adminlogin_model = require('../model/adminlogin');

const adminlogin = async (req, res) => {
    try {
        console.log("adminlogin ");
        const emailuser = req.body.email;
        const passuser = req.body.password;
        const mydata = await adminlogin_model.findOne({ "email": emailuser, "password": passuser })
        if (mydata === undefined || mydata === null) {
            res.status(401).send({ msg: "user not match", result: false })
        }
        else {
            res.status(200).send({ msg: "User login successfully", result: true, data: mydata })
            // res.status(200).send({})
        }
    }
    catch (error) {
        console.log(error);
    }
}
module.exports = { adminlogin }
