const mongoose = require("mongoose")


const AppSchema = new mongoose.Schema({
    name:{
        type: String,
    },
    desc:{
        type: String,
    }
},
{timestamps: true}
)

const App = mongoose.model("App", AppSchema)

module.exports = App