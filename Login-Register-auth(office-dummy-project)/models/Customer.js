const mongoose = require("mongoose")


const CustomerSchema = new mongoose.Schema({
    name:{
        type: String
    },
    password:{
        type: String
    },
    email:{
        type: String,
    },
},
{timestamps: true}
)


const Customer = mongoose.model("Customer", CustomerSchema)

module.exports = Customer