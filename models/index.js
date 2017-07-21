var mongoose = require("mongoose");
    mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/personalAPI" );

module.exports.Places = require("./Places.js");
