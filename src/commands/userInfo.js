const Discord = require('discord.js');

const userInfo = msg => {
    const embed = new Discord.MessageEmbed()
    .setColor("#32CD32")
    .setTitle(":crown: :wumpus_basic: Eich")
    .setDescription(`
    :bookmark: Tag do Discord   :computer: ID do Discord           :date: Conta criada há \n
    Eich#8617                         539262905980551179                  1 ano 10 meses 5 dias
    `.replace(/\s/g, '\u00A0'))
    .setFooter("Use rpg!rituais para ver os rituais para fazer")

    msg.channel.send(embed)
}

module.exports = userInfo