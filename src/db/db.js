const mongoose = require("mongoose");
const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

async function connectDB(){

    await mongoose.connect("mongodb+srv://Vedant:tbCnVvPwkl6zzI7b@backend2.piw64en.mongodb.net/notes");
    console.log("connected to DB")
}

module.exports = connectDB;