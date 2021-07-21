const mongoose = require("mongoose");

const schema = mongoose.Schema({
    webId: String,
    location: {
        lat: Number,
        lng: Number
    },
    token: String
});

module.exports = mongoose.model("User", schema);