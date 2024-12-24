require("./db/conn");
require("dotenv").config();
const express = require("express");

const app = express();
const PORT = process.env.PORT || 1113;
const getlocationsRoute = require("./routes/getlocationsRoute");
const usercontrollerRoute = require("./routes/usercontrollerRoute");
const authenticateToken = require("./middleware/verifytoken");
var cors = require('cors');

// console.log(dbcon);
app.get("/", (req, res) => {
    res.send("get api");
})
app.use(express.json())
app.use(cors());

app.use("/busapi", getlocationsRoute);
app.use("/busapi/user", authenticateToken, usercontrollerRoute);

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/busapi`)
})