require("./db/conn");
require("dotenv").config();
const Route = require("./routes/Route");
const usercontrollerRoute = require("./routes/usercontrollerRoute");
const authenticateToken = require("./middleware/verifytoken");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 1113;

var cors = require('cors');
app.use(cors({
    origin: '*' // or you can specify 'http://localhost:4200' to only allow that
}));
// console.log(dbcon);
app.get("/", (req, res) => {
    res.send("get api");
})
app.use(express.json())
app.use(cors());

app.use("/busapi", Route);
app.use("/busapi/user", authenticateToken, usercontrollerRoute);
app.use("/busapi/admin")

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/busapi`)
})