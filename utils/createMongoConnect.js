const mongoose = require('mongoose')
const config = require('../config/config')
const connect = () => { 
     mongoose.connect(config.mongoDB)
          .then(() => (console.log('MongoDB connected')))
          .catch(error => console.log(error))
}

module.exports.connect = connect