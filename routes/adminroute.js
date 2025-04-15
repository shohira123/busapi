const express = require("express");
const router = express.Router();
const { adminlogin, createbusschedule } = require("../controller/adminController");

router.route("/login").post(adminlogin);
router.route("/createBusSchecdule").post(createbusschedule);
module.exports = router;