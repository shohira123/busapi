const mongoose = require("mongoose");

const bookedseatschema = new mongoose.Schema({
    scheduleid: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
    },
    bookedseat: {
        type: Array,
        required: true,
    },
});

const bookedseat = new mongoose.model('bookedseat', bookedseatschema);
module.exports = bookedseat;