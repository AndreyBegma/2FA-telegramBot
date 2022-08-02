const {mongoClient} = require('mongodb')

const UsersList = require('../models/usersInfo')

module.exports.createUser = async (req,res) => { 
     const newUser = new UsersList({
          UserID: req.body.UserID,
          TelegramID: 'none',
     })
     await newUser.save()
          .then(() => (res.status(200).json({
               message:"New user created"
          }))
          )
}