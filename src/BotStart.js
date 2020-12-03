const Discord = require('discord.js');
const { token } = require('../bot.config.json')
const { prefix } = require('../config.json')
const client = new Discord.Client();
//Mensagem quando um boot entrar no servidor
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

//Quando for digitado no chat 
client.on('message', msg => {
  console.log(prefix)
  console.log(msg.content)
  if (!msg.content.startsWith(prefix)) return;

  msg.reply('pong');
});

//Message quando o bot disconectar
client.on('disconnect', () => {

})
client.login(token);