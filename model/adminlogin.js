const mongoose = require('mongoose');
const adminlonginSchema = new mongoose.Schema({
    admin_id: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
    },
    admin_email: {
        type: "string",
        required: true,
    },
    admin_password: {
        type: "string",
        required: true,
    }

})
const adminlogin = new mongoose.model('adminlogin', adminlonginSchema);
module.exports = adminlogin;