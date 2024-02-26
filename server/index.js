const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const CustomersModel = require('./models/customers')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/customers")

app.post("/login", (req, res) => {
    const {email, password} = req.body;
    CustomersModel.findOne({email: email})
    .then(user => {
        if(user) {
            if(user.password === password) {
                res.json("Success")
            } else {
                res.json("the password is incorrect")
            } 
        }
        else {
            res.json("No record existed")
        }
    })
})

app.post('/register', (req, res) => {
    CustomersModel.create(req.body)
    .then(customers => res.json(customers))
     .catch(err => res.json(err))
})



app.listen(3005, () => {
    console.log("server is running")
})