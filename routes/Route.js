const express = require("express");
const router = express.Router();

const { getAllLocation, createLocation, createVendor, createbusschedule, searchbus, searchallbus, searchbusbyid, searchSeatById, booking, addnewuser, loginuser, updateSeatById, postBookSeat } = require("../controller/Controller");

router.route("/getLocations").get(getAllLocation);
router.route("/createLocation").post(createLocation);
router.route("/createVendor").post(createVendor);
router.route("/createBusSchecdule").post(createbusschedule);
https://projectapi.gerasim.in/api/BusBooking/searchBus?fromLocation=1&toLocation=2&travelDate=2024-08-18
router.route("/searchBus/:fromLocation/:toLocation/:travelDate").get(searchbus);
router.route("/searchAllBus").get(searchallbus);
router.route("/searchScheduleById/:id").get(searchbusbyid);
router.route("/searchBookSeatById/:id").get(searchSeatById);
router.route("/postBookSeatArray").post(postBookSeat);
router.route("/updateBookSeatById").put(updateSeatById);
router.route("/Booking",).post(booking);
router.route("/adduser").post(addnewuser);
router.route("/login").post(loginuser);
// router.route("/testing").get(getAllProductsTesting);



module.exports = router;