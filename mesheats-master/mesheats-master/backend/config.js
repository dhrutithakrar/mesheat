require("dotenv").config();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE || "mongodb://localhost:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection
    .once("open", () => console.log("DB CONNECTED"))
    .on("error", (err) => console.log("Error while connecting DB"));

module.exports = { mongoose }