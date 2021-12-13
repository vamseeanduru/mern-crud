const mongoose = require("mongoose")


const VersionSchema = new mongoose.Schema({
    name:{
        type: String,
    },
    version:{
        type: String,
        required: true
    }
},
{timestamps: true}
)

const Version = mongoose.model("Version", VersionSchema)

module.exports = Version