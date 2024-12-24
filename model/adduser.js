const mongoose = require("mongoose");

const adduserschema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
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
    role: {
        type: String,

    },
    createdAt: {
        type: Date,
        default: Date.now
    }


});


const adduser = new mongoose.model('adduser', adduserschema);

// const searchbus = new mongoose.model('postbusschedule', postbusscheduleschema);
module.exports = adduser;
// module.exports = new mongoose.model("GetBusLocation", locationschema)