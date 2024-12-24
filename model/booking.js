const mongoose = require("mongoose");

const bookingschema = new mongoose.Schema({

    scheduleid: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
    },
    custid: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
    },
    bookingdate: {
        type: String,
        required: true,
    },
    totalamount: {
        type: Number,
        required: true,
    },

    busbookingpassengers: [{
        // passengerid: mongoose.Schema.ObjectId,
        passengername: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            required: true,
        },
        gender: {
            type: String,
            required: true,
        },

        seatno: {
            type: Number,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        }
    }],

});

const booking = new mongoose.model('booking', bookingschema);
module.exports = booking;