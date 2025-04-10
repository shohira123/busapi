const mongoose = require('mongoose');
const adminlonginSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: "string",
        required: true,
    },


}, {
    timestamps: true // Automatically adds `createdAt` and `updatedAt`
})
const adminlogin = new mongoose.model('adminlogin', adminlonginSchema);
module.exports = adminlogin;