import * as dotenv from "dotenv";
dotenv.config();

import TelegramBot from "node-telegram-bot-api";
import express from "express";

// Replace with your bot token from BotFather
const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

// Set up Express
const app = express();
const PORT = process.env.PORT || 6000;

// Handle "/start" command
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.username;

  // Prepare the web app button
  const webAppUrl = `https://spacetaptelegram.netlify.app/?userId=${userId}`;
  const keyboard = {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Open Mini App",
            web_app: { url: webAppUrl },
          },
        ],
      ],
    },
  };

  // Send a message with a button to open the mini app
  bot.sendMessage(chatId, "Click the button below to go to space", keyboard);
});

bot.onText(/\/score/, (msg) => {
  const chatId = msg.chat.id;

  // Send a message with a button to open the mini app
  bot.sendMessage(chatId, "This feature coming soon");
});

bot.onText(/\/about/, (msg) => {
  const chatId = msg.chat.id;

  // Send a message with a button to open the mini app
  bot.sendMessage(
    chatId,
    "By Abhijeet Shrivastava telegram @cheeesus, github:@codeforabj"
  );
});
// Start Express server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
