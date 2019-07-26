const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({

    name:
    {
        type:String,
        required: true,
    },

    key:
    {
        type:String,
        required: true,
    },

    text:
    {
        type:String,
        required: true,
    }

});

mongoose.model("Player", PlayerSchema);