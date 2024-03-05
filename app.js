const TelegramBot = require('node-telegram-bot-api');

const token = '6855278297:AAFlCIuOUeD-BY6gN5I_WL3Ulvnohu2scWw';

const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;
  const userName = msg.chat.username
  console.log(msg)
  console.log(msg.text)
  if (messageText === '/start') {
    bot.sendMessage(chatId, 'Assalomu aleykum  Farruh Zoirovning  botiman, Familiyangizni kiriting: ')
    return;
  }

  if (messageText && userName) {
    bot.sendMessage(chatId, `Demak sizning familiyangiz ${messageText} va sizning usernamingiz: @${userName}`);
  }
  if (messageText && !userName) {
    bot.sendMessage(chatId, `Demak sizning familiyang ${messageText} va afsuski sizning usernamingiz yo'q ekan`);
  }
})
