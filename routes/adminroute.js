const express = require("express");
const router = express.Router();
const { adminController } = require("../controller/adminController");

router.route("/login").post(adminController);
module.exports = router;