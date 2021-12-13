const mongoose = require("mongoose")


const CappSchema = new mongoose.Schema({
    customers:{
        type: String
    },
    app:{
        type: String
    },
    environment:{
        type: String
        },
    version:{
        type: String
        },
    name:{
        type: String
    },
    desc:{
        type: String
    }
},
{timestamps: true}
)


const Capp = mongoose.model("Capp", CappSchema)

module.exports = Capp