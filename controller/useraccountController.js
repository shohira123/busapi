
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
        const mydata = await bookingmodel.aggregate([
            {
                $match: {
                    $and: [
                        { _id: mongoose.Types.ObjectId.createFromHexString(bid) },
                        { custid: mongoose.Types.ObjectId.createFromHexString(uid) },
                    ]
                }
            },
            {
                $lookup: {
                    from: "postbusschedules", // the name of the second collection (scheduletbl)
                    localField: "scheduleid", // field from bookingmodel to match on
                    foreignField: "_id", // field in scheduletbl to match on
                    as: "location_info" // the name of the new array field that will contain the joined documents
                }
            },
            {
                $unwind: {
                    path: "$location_info", // Flatten the result
                    preserveNullAndEmptyArrays: true // Ensure documents still return even if no match is found
                }
            },
            {
                $lookup: {
                    from: "getbuslocation", // the name of the locationtable collection
                    localField: "location_info.fromLocation", // field from postbusschedule to match on
                    foreignField: "_id", // field in getbuslocation to match on (ObjectId)
                    as: "from_location_info" // new field with from location details
                }
            },
            {
                $lookup: {
                    from: "getbuslocation", // again for toLocation
                    localField: "location_info.toLocation", // field from postbusschedule to match on
                    foreignField: "_id", // field in getbuslocation to match on
                    as: "to_location_info" // new field with to location details
                }
            },
            // {
            //     $project: {
            //         _id: 1,  // Include the booking model _id
            //         scheduleDetails: "$location_info", // Include location_info from postbusschedules
            //         fromLocationName: { $arrayElemAt: ["$from_location_info.name", 0] }, // Get the location name from from_location_info
            //         toLocationName: { $arrayElemAt: ["$to_location_info.name", 0] }, // Get the location name from to_location_info
            //         // Add any other fields you need from the booking model here
            //     }
            // }
        ]);

        if (mydata) {
            res.status(200).send(mydata);
        }

    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}
// useraccount end
// account start
const account = async (req, res) => {
    try {
        uid = req.params.uid;
        console.log(uid);
        const mydata = await bookingmodel.aggregate([{
            $match: {
                $and: [

                    { custid: mongoose.Types.ObjectId.createFromHexString(uid) },
                ]
            },
            // { sort: { datetime: -1 } }
        }]).sort({ "bookingdate": -1 })
        console.log(mydata);
        res.status(200).send({ msg: "token is set to account", data: mydata })

    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}
// account end


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
module.exports = { useraccount, checkexpiry, account }