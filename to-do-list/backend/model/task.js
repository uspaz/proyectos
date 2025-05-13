const mongoose = require("mongoose")

const tasksSchema = new mongoose.Schema({
    "content": {
        type: String,
        required: true,
    },
    "check": Boolean,
    "priority": {
        type: String,
        required: true
    },

})

tasksSchema.set("toJSON", {
    transform: (doc, ret) => {
        ret.id = ret._id.toString()
        delete ret._id
        delete ret.__v
     } 
})

module.exports = mongoose.model("Tasks", tasksSchema);