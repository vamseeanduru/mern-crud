const mongoose = require("mongoose")


const EnvironmentSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    desc:{
        type: String,
        required: true,
    }
},
{timestamps: true}
)

const Environment = mongoose.model("Environment", EnvironmentSchema)

module.exports = Environment