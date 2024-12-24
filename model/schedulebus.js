const mongoose = require("mongoose");

const postbusscheduleschema = new mongoose.Schema({

    vendorId: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
    },
    busName: {
        type: String,
        required: true,
    },
    busVehicleNo: {
        type: String,
        required: true,
    },
    fromLocation: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
    },
    toLocation: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
    },
    departureTime: {
        type: String,
        required: true,
    },
    arrivalTime: {
        type: String,
        required: true,
    },
    departureTime: {
        type: String,
        required: true,
    },
    arrivalTime: {
        type: String,
        required: true,
    },
    scheduleDate: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    totalSeats: {
        type: Number,
        required: true,
    }
});

const schedulebus = new mongoose.model('postbusschedule', postbusscheduleschema);
module.exports = schedulebus;