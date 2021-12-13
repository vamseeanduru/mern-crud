const mongoose = require("mongoose")


const NewUserSchema = new mongoose.Schema({
    name:{
        type: String
    },
    password:{
        type: String
    },
    firstname:{
        type: String
    },
    lastname:{
        type: String
    },
    customer:{
        type: String
    },
    email:{
        type: String,
    },
},
{timestamps: true}
)


const NewUser = mongoose.model("NewUser", NewUserSchema)

module.exports = NewUser
