const express = require("express");
const router = express.Router();
const { useraccount, checkexpiry } = require("../controller/useraccountController")
require("../middleware/verifytoken");

router.route("/useraccount/:uid/:bid").post(useraccount);
router.route("/checkexpiry").post(checkexpiry);
// router.route("/Booking",).post(booking);
// function verifyToken(req, res, next) {

//     const bearerheader = req.headers['authorization'];
//     if (typeof bearerheader !== undefined) {
//         res.send({ msg: "token is valid" });
//     } else {
//         res.send({ msg: "token is not valid" });
//     }

// }

module.exports = router;