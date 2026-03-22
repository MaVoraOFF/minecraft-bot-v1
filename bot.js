const mineflayer = require('mineflayer');
const { pathfinder, Movements, goals } = require('mineflayer-pathfinder');
const { GoalBlock } = goals;

const bot = mineflayer.createBot({
  host: 'localhost',
  port: 25567,
  username: 'Gera',
  version: '1.21.4'
});

bot.loadPlugin(pathfinder);

bot.on('chat', (username, message) => {
  if (username === bot.username) return;
  
  // Бот просто слушает чат
  console.log(`${username}: ${message}`);
});

bot.on('spawn', () => {
  console.log('Бот подключился');
  
  const mcData = require('minecraft-data')(bot.version);
  const movements = new Movements(bot, mcData);
  bot.pathfinder.setMovements(movements);
});

bot.on('error', (err) => {
  console.error(err);
});
