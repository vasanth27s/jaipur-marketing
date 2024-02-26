const mongoose = require('mongoose')

const CustomerSchema = new mongoose.Schema({
    fullname: String,
    phone: String,
    email: String,
    password: String
})

const CustomersModel = mongoose.model("customers", CustomerSchema)
module.exports = CustomersModel