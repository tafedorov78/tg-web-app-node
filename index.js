
const TelegramBot = require('node-telegram-bot-api');

const token = '5630182011:AAE4IFgWTaQO1DD9QEjkxntjw-C5ObiIIsU';
const webAppUrl = 'https://sunny-travesseiro-84b8e8.netlify.app'
const bot = new TelegramBot(token, { polling: true });

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text
    if (text === '/start') {
        await bot.sendMessage(chatId, 'donate for Ukraine', {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'donate 5 pounds', web_app: { url: webAppUrl } }]
                ]
            }
        })
    }
});