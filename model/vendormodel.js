const mongoose = require("mongoose");
const postbusvendorchema = new mongoose.Schema({

    vendorName: {
        type: String,
        required: true,
    },
    contactNo: {
        type: String,
        required: true,
    },
    emailId: {
        type: String,
        required: true,
    }
})
const vendor = new mongoose.model('postbusvendor', postbusvendorchema);
module.exports = vendor;