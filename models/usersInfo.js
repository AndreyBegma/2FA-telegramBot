const mongoose = require('mongoose')
const Schema = mongoose.Shema

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

module.exports = mongoose.model('UsersInfo', usersInfo)