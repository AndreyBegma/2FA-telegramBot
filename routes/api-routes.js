const express = require('express')
const router = express.Router()
const controllers = require('../controllers/controllers')

router.get('/create-user',controllers.createUser)

module.exports = router