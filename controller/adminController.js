const mongoose = require('mongoose');
const adminlogin_model = require('../model/adminlogin');
const schedule = require("../model/schedulebus");

const adminlogin = async (req, res) => {
    try {
        console.log("adminlogin ");
        const emailuser = req.body.email;
        const passuser = req.body.password;
        const mydata = await adminlogin_model.findOne({ "email": emailuser, "password": passuser })
        if (mydata === undefined || mydata === null) {
            res.send({ msg: "user not match", result: false })
        }
        else {
            res.status(200).send({ msg: "User login successfully", result: true, data: mydata })
            // res.status(200).send({})
        }
    }
    catch (error) {
        res.status(400).send(error);
    }
}
// schedulebus start
const createbusschedule = async (req, res) => {
    try {
        const reqbody = new schedule(req.body);
        console.log(reqbody);
        const insertquery = await reqbody.save();
        if (insertquery) {
            res.status(200).send({ msg: "schedule inserted successfully", result: true })

        }

    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}
// schedulebus end
// create schedule end
module.exports = { adminlogin, createbusschedule }
