const Discord = require('discord.js');

const userInfo = msg => {
    const embed = new Discord.MessageEmbed()
    .setColor("#32CD32")
    .setTitle(":crown: :wumpus_basic: Eich")
    .setDescription(`
    `.replace(/\s/g, '\u00A0'))
    .setFooter("Use rpg!rituais para ver os rituais para fazer")

    msg.channel.send(embed)
}

module.exports = userInfo