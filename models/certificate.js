var mongoose = require("mongoose");

var certificateSchema = new mongoose.Schema({
    name: String,
    type: String,
    expiry: Date,
    note: String
});

module.exports = mongoose.model("Certificate", certificateSchema);