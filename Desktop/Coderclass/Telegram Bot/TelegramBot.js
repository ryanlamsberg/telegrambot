const TeleBot = require('telebot');

const bot = new TeleBot({
    token: '468814688:AAGjPJ_irCzgB6iC4CcFgz4gCdVVV1eOOmk'
});

bot.on(/start/, function (msg) {
  return bot.sendMessage(msg.from.id, "Hoeveel pret beleef jij op een dag?");
});
bot.on(/wie ben jij/, function (msg) {
  return bot.sendMessage(msg.from.id, "Ik ben een vervelend bolletje uit Star Wars.");
});
bot.on(/Joli-Coeur/, function (msg) {
  return bot.sendMessage(msg.from.id, "Hij is cool!");
});
bot.on(/in bed$/, function (msg) {
  return bot.sendMessage(msg.from.id, "heb je heel veel pret!");
});
bot.on(/hoe gaat het$/, function (msg) {
  return bot.sendMessage(msg.from.id, "zeer goed met jou?");
});
















bot.on(/(.+)/, function (msg, props) {
  var text = props.match[1];
  console.log(msg.from.first_name + " " + msg.from.last_name + ": " + text);
});

bot.start();
