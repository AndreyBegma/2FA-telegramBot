const express = require('express')
const router = express.Router()
const controllers = require('../controllers/controllers')

router.get('/create-user',controllers.createUser)
//router.get('/confirm-telegram', controllers.confirmTelegram)

module.exports = router