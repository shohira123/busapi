const mongoose = require('mongoose');
const adminlogin_model = require('../model/adminlogin');

const adminlogin = async (req, res) => {
    try {
        console.log("adminlogin ");
        console.log(req.params);
    }
    catch (error) {
        console.log(error);
    }
}
module.exports = { adminlogin }
