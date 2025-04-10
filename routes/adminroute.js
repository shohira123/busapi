const express = require("express");
const router = express.Router();
const { adminlogin } = require("../controller/adminController");

router.route("/login").post(adminlogin);
module.exports = router;