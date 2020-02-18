const dotenv = require('dotenv').config()
const express = require('express');
const TelegramBot = require('node-telegram-bot-api');
const app = express();
const TOKEN = process.env.TOKEN;
const PORT = process.env.PORT;
const bot = new TelegramBot(TOKEN, {
  polling: true
});


app.listen(PORT, () =>{
  console.log(`Server is up on ${PORT}`);
});

bot.onText(/\/start/, function(msg, match) {
  var chatId = msg.chat.id;
  bot.sendMessage(chatId, "Hello! this is a fun bot that is currently being developed by @Merycc...");
})

bot.onText(/\/help/, function(msg, match) {
  var chatId = msg.chat.id;
  var message;
  message = "Currently available commands\necho: Echoes the message you sent back.\nmovie: Searches for a movie by title. Search in the following format to specifcy year\n\"Rush (1991)\"";
  bot.sendMessage(chatId, message);
});var hi =

bot.onText(/\/settings/, function(msg, match) {
  var chatId = msg.chat.id;
  var message;
  message = "No settings available at this point in time";
  bot.sendMessage(chatId, message);
});

bot.onText(/\/echo(.+)/, function(msg, match) {
  var chatId = msg.chat.id;
  var echo = match[1];
  bot.sendMessage(chatId, echo);
});

bot.onText(/\/god/, function(msg, match) {
  var chatId = msg.chat.id;
  var echo = "يا إلهي";
  bot.sendMessage(chatId, echo);
});

bot.onText(/دبب/, function(msg, match) {
  var chatId = msg.chat.id;
  bot.sendMessage(chatId, "دبب");
});

bot.onText(/^قول (.+)/, function(msg, match){
  var chatId = msg.chat.id;
  var echo = match[1];
  bot.sendMessage(chatId, echo);
})
