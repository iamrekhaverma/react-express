const mongoose = require('mongoose')
const config = require("../config");

// mongoose
//     .connect('mongodb+srv://rekha_verma:hrhkhrhk@1221@cluster0-umsme.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
//     .catch(e => {
//         console.error('Connection error', e.message)
//     })


const uri = "mongodb+srv://rekha_verma:hrhkhrhk@1221@cluster0-umsme.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(config.databaseURL, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
.then(() => {
  console.log("MongoDB Connected…")
})
.catch(err => console.log(err))
const db = mongoose.connection

module.exports = db