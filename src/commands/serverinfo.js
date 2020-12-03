const Discord = require('discord.js');


function serverInfo(msg) {
    const date = new Date(msg.guild.createdAt)
    const month = date.toLocaleDateString('en-US', {dateStyle: 'medium'}).split(' ')[0]
    console.log(msg.guild.createdTimestamp)
    const dateString = `${date.getDay()} de ${month} ás, ${date.getHours()}:${date.getMinutes()} ()`
    embed = new Discord.MessageEmbed()
    .setColor("#5c0fd9")
    .setTitle("Help")
    .addFields(
        { name: ':computer: ID', value: 'Eich#8617', inline: true },
        { name: ':crown: Dono', value: '539262905980551179', inline: true },
        { name: ':earth_americas: Região', value: '1 ano 10 meses 5 dias', inline: true },
        { name: ':speech_balloon: Canais (3)', value: ':pencil: **Texto**: 2 \n :speaking_head: **Voz**: 1 ', inline: false },
        { name: ':date: Criado em', value: `${dateString}`, inline: false },
    )

    msg.channel.send(embed)
}

module.exports = serverInfo