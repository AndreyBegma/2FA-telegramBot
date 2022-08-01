const mongoose = require('mongoose')
const Schema = mongoose.Schema

const usersInfo = new Schema ({
     UserID:{
          type: String
     },
     TelegramID:{
          type: String
     },
     SecondPass:{
          type: String
     },
     TimeLastAuth:{
          type: Date
     }
})

module.exports = mongoose.model('Users-Info', usersInfo)