const Discord = require('discord.js');
const client = new Discord.Client();

//Mensagem quando um boot entrar no servidor
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

//Quando for digitado no chat 
client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

//Message quando o bot disconectar
client.on('disconnect', () => {

})

client.login('token');