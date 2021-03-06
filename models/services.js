const mongoose = require('mongoose');
const Schema = mongoose.Schema


const servicesSchema = new Schema ({
    name:{type:String, required:true},
    store: {type:String, required:true},
    service:{type:String, required:true},
    date: String,
    time: String,
    confirmationCode: String,
    details: String,
})

const services = mongoose.model('services', servicesSchema)
module.exports = services