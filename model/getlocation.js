const mongoose = require("mongoose");

const locationschema = new mongoose.Schema({
    Location: {
        type: String,
        required: true,
    },
    Code: {
        type: String,
        required: true,
    },
});

// const searchbusschema=new mongoose.Schema({
//     availableSeats:{
//         type: Number,
//         required: true,
//     },
//     totalSeats:{
//         type: Number,
//         required: true,
//     },
//     price:{
//         type: Number,
//         required: true,
//     },
//     arrivalTime:{
//         type: String,
//         required: true,
//     },
//     scheduleId:{
//         type: Number,
//         required: true,
//     },
//     departureTime:{
//         type: String,
//         required: true,
//     },
//     busName:{
//         type: String,
//         required: true,
//     },
//     busVehicleNo:{
//         type: String,
//         required: true,
//     },
//     fromLocationName:{
//         type: String,
//         required: true,
//     },
//     toLocationName:{
//         type: String,
//         required: true,
//     },
//     vendorName:{
//         type: String,
//         required: true,
//     },
//     scheduleDate:{
//         type: String,
//         required: true,
//     },
//     vendorId:{
//         type: Number,
//         required: true,
//     }

// });

// const postbusscheduleschema = ({
//     scheduleId: {
//         type: Number,
//         required: true,
//     },
//     vendorId: {
//         type: Number,
//         required: true,
//     },
//     busName: {
//         type: String,
//         required: true,
//     },
//     arrivalTime: {
//         type: String,
//         required: true,
//     },
//     scheduleId: {
//         type: Number,
//         required: true,
//     },
//     departureTime: {
//         type: String,
//         required: true,
//     },
//     busName: {
//         type: String,
//         required: true,
//     },
//     busVehicleNo: {
//         type: String,
//         required: true,
//     },
//     fromLocation: {
//         type: Number,
//         required: true,
//     },
//     toLocation: {
//         type: Number,
//         required: true,
//     },
//     departureTime: {
//         type: String,
//         required: true,
//     },
//     arrivalTime: {
//         type: String,
//         required: true,
//     },
//     scheduleDate: {
//         type: String,
//         required: true,
//     },
//     price: {
//         type: Number,
//         required: true,
//     },
//     totalSeats: {
//         type: Number,
//         required: true,
//     }
// });


// const student = new mongoose.model('register', studentschema)
// module.exports = student;

const locations = new mongoose.model('getbuslocation', locationschema);

// const searchbus = new mongoose.model('postbusschedule', postbusscheduleschema);
module.exports = locations;
// module.exports = new mongoose.model("GetBusLocation", locationschema)