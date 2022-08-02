const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SecretKey = new Schema({ 
     Type:{ 
          type: String
     },
     Value:{
          type: String
     }
})

module.exports = mongoose.model("Secret Key", SecretKey)