
const mongoose = require("mongoose");
// const jwt = require("jsonwebtoken");
// const location = require("../model/getlocation");
// const vendor = require("../model/vendormodel");
// const schedule = require("../model/schedulebus");
// const bookedseat = require("../model/getbookedseat");
const bookingmodel = require("../model/booking");
const addusermodel = require("../model/adduser");




// useraccount start
const useraccount = async (req, res) => {
    try {
        // console.log(req.body);
        console.log(req.params);
        uid = req.params.uid;
        bid = req.params.bid;
        const mydata = await bookingmodel.aggregate([{
            $match: {
                $and: [
                    { _id: mongoose.Types.ObjectId.createFromHexString(bid) },
                    { custid: mongoose.Types.ObjectId.createFromHexString(uid) },
                ]
            }
        }])
        if (mydata) {
            res.status(200).send(mydata);
        }

    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}
// useraccount end
// checkexpiry start
const checkexpiry = async (req, res) => {
    try {
        console.log(req.body);
        res.status(200).send({ "msg": "token is set" });
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}
// checkexpiry end

// const booking = async (req, res) => {
//     try {
//         const reqbody = new bookingmodel(req.body);
//         console.log(reqbody);
//         const insertquery = await reqbody.save();
//         if (insertquery) {
//             res.status(200).send({ msg: "booking has done successfully", result: true, data: insertquery })

//         }

//     } catch (error) {
//         console.log(error);
//         res.status(400).send(error);
//     }
// }
module.exports = { useraccount, checkexpiry }