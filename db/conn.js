// const mongoose = require("mongoose");
// // const uri="mongodb+srv://shohira95:Z8yONTn1vl6FCJYu@mycluster.3vfxa.mongodb.net/?retryWrites=true&w=majority&appName=mycluster"
// // const uri="mongodb://localhost:27017/db"
// const url = "mongodb://0.0.0.0:27017/busdb"
// // mongodb://127.0.0.1:27017
// const connectdb = (url) => {
//     // console.log("connect db");
//     // console.log(uri);
//     // const dbbb = mongoose.connect(url);
//     // console.log(dbbb);

//     return mongoose.connect(url);

// }
// module.exports = connectdb;

const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/studentdb",{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true}).then(()=>{
mongoose.connect("mongodb://localhost:27017/busdb").then(() => {

    console.log("connected");
}).catch((e) => {
    console.log("not connected");
})
