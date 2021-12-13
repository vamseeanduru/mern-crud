const mongoose = require("mongoose")


const EcustomerSchema = new mongoose.Schema({
    name:{
        type: String,
    },
    desc:{
        type: String,
    }
},
{timestamps: true}
)

const Ecustomer = mongoose.model("Ecustomer", EcustomerSchema)

module.exports = Ecustomer