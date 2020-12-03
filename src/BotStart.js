const Discord = require('discord.js');
const Commands = require('./commands/commands')
const { token } = require('../bot.config.json')
const { prefix } = require('../config.json')
const client = new Discord.Client();
//Mensagem quando um boot entrar no servidor
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

//Quando for digitado no chat 
client.on('message', msg => {
  if (!msg.content.startsWith(prefix)) return;
  const command = msg.content.split(' ')[1]
  
  Commands.execute(command)

  msg.reply('pong');
});

//Message quando o bot disconectar
client.on('disconnect', () => {

})
client.login(token);