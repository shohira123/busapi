
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const location = require("../model/getlocation");
const vendor = require("../model/vendormodel");
const schedule = require("../model/schedulebus");
const bookedseat = require("../model/getbookedseat");
const bookingmodel = require("../model/booking");
const addusermodel = require("../model/adduser");

const privateKey = "mykey123";
const getAllLocation = async (req, res) => {
    try {
        const mydata = await location.find({})
        console.log(mydata);
        // res.status(200).json({msg:"get All products"})
        res.status(200).json(mydata)
    } catch (error) {
        console.log(error)
    }
}
const createLocation = async (req, res) => {
    try {
        const reqbody = new location(req.body);
        console.log(reqbody);
        const insertquery = await reqbody.save();
        if (insertquery) {
            res.status(200).send({ msg: "data inserted successfully", result: true })

        }

    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}

// vendor start
const createVendor = async (req, res) => {
    try {
        const reqbody = new vendor(req.body);
        console.log(reqbody);
        const insertquery = await reqbody.save();
        if (insertquery) {
            res.status(200).send({ msg: "vendor inserted successfully", result: true })

        }

    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}
// vendor end
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

// search bus start
const searchbus = async (req, res) => {
    try {
        console.log(req.params);
        fromLocation = req.params.fromLocatgition;
        toLocation = req.params.toLocation;
        travelDate = req.params.travelDate;
        // fromLocation = fromLocation;
        // toLocation = toLocation;
        // travelDate = travelDate;
        // console.log("#####################")
        // console.log(fromLocation);
        // console.log(toLocation);
        // console.log(travelDate);
        // const mydata = await schedule.find({ fromLocation: fromLocation, toLocation: toLocation, scheduleDate: travelDate });
        const mydata = await schedule.aggregate([
            // { $match: { "fromLocation": fromLocation, "toLocation": toLocation, "scheduleDate": travelDate } },
            // { $match: { $or: [ { score: { $gt: 70, $lt: 90 } }, { views: { $gte: 1000 } } ] } },
            {
                $match: {
                    $and: [
                        { fromLocation: mongoose.Types.ObjectId(fromLocation) },
                        { toLocation: mongoose.Types.ObjectId(toLocation) },
                        { scheduleDate: travelDate }
                    ]
                }
            },
            {
                $lookup:
                {
                    from: "getbuslocations",
                    localField: "fromLocation",
                    foreignField: "_id",
                    as: "Locationfrom",
                }
            },
            // {
            //     "$unwind": "$Locationfrom"
            // },
            {
                $lookup:
                {
                    from: "getbuslocations",
                    localField: "toLocation",
                    foreignField: "_id",
                    as: "Locationto",
                }
            },
            // {
            //     "$unwind": "$Locationto"
            // },
            {
                $lookup:
                {
                    from: "postbusvendors",
                    localField: "vendorId",
                    foreignField: "_id",
                    as: "vendorname",
                }
            },
            // {
            //     "$unwind": "$vendorname"
            // },


        ]);

        // const mydata = await schedule.find();
        console.log(mydata);
        // res.status(200).json({msg:"get All products"})
        res.status(200).json(mydata)
    } catch (error) {
        console.log(error)
    }
}

const searchallbus = async (req, res) => {
    try {
        // console.log(req.params);
        // fromLocation = req.params.fromLocation;
        // toLocation = req.params.toLocation;
        // scheduleDate = req.params.scheduleDate;
        const mydata = await schedule.find();
        console.log(mydata);
        // res.status(200).json({msg:"get All products"})
        res.status(200).json(mydata)
    } catch (error) {
        console.log(error);
        res.status(401).json(error);
    }
}
const searchbusbyid = async (req, res) => {
    try {
        console.log(req.params);
        sid = req.params.id;
        // const mydata = await schedule.find({ fromLocation: fromLocation, toLocation: toLocation, scheduleDate: travelDate });
        const mydata = await schedule.findById(sid);
        res.status(200).json(mydata)
    } catch (error) {
        console.log(error);
        res.status(401).json(error);
    }
}
// book seat search start
const searchSeatById = async (req, res) => {
    try {
        console.log(req.params);
        sid = req.params.id;
        // const mydata = await schedule.find({ fromLocation: fromLocation, toLocation: toLocation, scheduleDate: travelDate });
        const mydata = await bookedseat.findOne({ "scheduleid": sid }, { bookedseat: 1, _id: 0 });
        // res.send(json.parse(mydata));
        // res.send(Array.from(Object.values(mydata)));
        // const arr = Object.entries(mydata);
        res.status(200).json(mydata)
        // res.status(200).json(mydata)
    } catch (error) {
        console.log(error);
        res.status(401).json(error);
    }
}
// book seat search start

// booking save start

const booking = async (req, res) => {
    try {
        const reqbody = new bookingmodel(req.body);
        console.log(reqbody);
        const insertquery = await reqbody.save();
        console.log(insertquery);
        if (insertquery) {
            res.status(200).send({ msg: "booking has done successfully", result: true, data: insertquery })

        }

    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}

// adduser start
const addnewuser = async (req, res) => {
    try {
        const reqbody = new addusermodel(req.body);
        console.log(reqbody);
        const userData = await addusermodel.findOne({ email: req.body.email });

        if (userData) {
            res.status(400).send({ result: false, msg: "this email is already exist" });
        }
        else {
            const insertquery = await reqbody.save();
            if (insertquery) {
                res.status(200).send({ msg: "User register successfully", result: true })

            }
        }
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}
// adduserend
// login start
const loginuser = async (req, res) => {
    try {

        // const logindetails = new addusermodel(req.body);
        const emailuser = req.body.emaillogin;
        const passuser = req.body.passwordlogin;
        // console.log(emailuser);
        // console.log(passuser);
        const mydata = await addusermodel.findOne({ "email": emailuser, "password": passuser });


        // if (mydata !== null && mydata !== undefined) {
        if (mydata === undefined || mydata === null) {
            res.status(401).json({ msg: "user not match", result: false })
        }
        else {
            const paylaod = {
                _id: mydata._id,
                fullname: mydata.fullname,
                email: mydata.email
            };
            jwt.sign({ paylaod }, privateKey, { expiresIn: '1d' }, function (err, token) {
                // console.log(token);
                console.log(paylaod);

                res.status(200).json({ msg: "User login successfully", result: true, token: token, data: mydata })
                // res.status(200).send({ msg: "User login successfully", result: true })
            });
        }
        // const logindetails = new addusermode(req.body);
        // console.log(logindetails.email);
        // console.log(logindetails.password);
        // const searchlogin = await logindetails.find({ "email": sid });
        // if (searchlogin) {
        //     res.status(200).json(searchlogin)
        //     // res.status(200).send({ msg: "User login successfully", result: true })

        // }
    } catch (error) {
        res.status(400).send(error);
    }
}

// verify token start

// verify token end
// update booked seat array start
const updateSeatById = async (req, res) => {
    try {
        sid = req.body.scheduleid;
        bookedseatarr = req.body.bookedseat;
        console.log(sid);
        console.log(bookedseatarr);
        // id = req.params.id;
        // seatno = req.params.seatno;
        // const mydata = await schedule.find({ fromLocation: fromLocation, toLocation: toLocation, scheduleDate: travelDate });
        const mydata = await bookedseat.updateOne({ "scheduleid": sid }, {
            // $push: {bookedseat: bookedseatarr}
            $push: { bookedseat: { $each: bookedseatarr } }



        });
        if (mydata) {
            res.status(200).json({ msg: "seat no push to array", result: true });
        }
    } catch (error) {
        res.status(401).json(error)
    }
}
const postBookSeat = async (req, res) => {
    try {
        // const { items } = req.body;
        // console.log(items);
        // sid = req.body.scheduleid;
        // bookedseatarr = req.body.bookedseat;
        // console.log(sid);
        // console.log(bookedseatarr);
        // console.log(req.body);
        const bookedbody = new bookedseat(req.body);
        // console.log(bookedbody);
        // console.log("****************");

        // const mydata = await schedule.find({ fromLocation: fromLocation, toLocation: toLocation, scheduleDate: travelDate });
        // const mydata = await bookedseat.save({ "scheduleid": sid }, {
        //     $push: { bookedseat: { $each: bookedseatarr } }
        // });
        const insertqueryseat = await bookedbody.save();
        if (insertqueryseat) {
            res.status(200).json({ msg: "seat no added to array", result: true, data: insertqueryseat })
        }


    } catch (error) {
        res.status(401).json(error)
    }
}
// update booked seat array end
// login end
// booking save end
// search bus end
// const getAllProductsTesting=async(req,res)=>{
//     res.status(200).json({msg:"get All products Testing"})
// }

module.exports = { getAllLocation, createLocation, createVendor, createbusschedule, searchbus, searchallbus, searchbusbyid, searchSeatById, booking, addnewuser, loginuser, updateSeatById, postBookSeat }