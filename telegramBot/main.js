const telegramBot = require('node-telegram-bot-api')

const telegramApi = require('../config/config').telegramApi

let startTelegramBot = () => {
     const bot = new telegramBot(telegramApi, {polling:true})
     bot.on('polling_error', console.log)
     bot.on('text', (msg,match) => {
          bot.sendMessage(msg.from.id , msg.text)
     })
}

module.exports.start = startTelegramBot()