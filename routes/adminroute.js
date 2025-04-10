const express = require("express");
const router = express.Router();
const { adminController } = require("../controller/adminController");

router.routes("/login").post("adminController");
module.exports = router;