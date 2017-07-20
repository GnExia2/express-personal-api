var mongoose = require("mongoose");
    mongoose.connect( process.env.MONGODB_URI || "https://localhost:3000" );

module.exports.Travel = require("./Places_Traveled.js");
