const TelegramBot = require('node-telegram-bot-api')
const TOKEN = ''
const bot = new TelegramBot(TOKEN, {
    polling: {
        interval: 300,
        autostart: true,
        params: {
            timeout: 10
        }

    }
})
