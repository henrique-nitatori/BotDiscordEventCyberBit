const Discord = require('discord.js');

function help(commands) {
    let commandWithDescription = []
    Object.keys(commands).map(command => setDescription(command, commandWithDescription))
    
}
function setDescription(command, commandWithDescription) {
    const commandDescription = {
        Help: 'O comando Help mostra todos os comandos disponíveis',
        Userinfo: "O comando Userinfo devolve as informações de usuários",
        Serverinfo: "O comando Serverinfo devolve as informações do servidor",
        Cargos: "O comando Cargo exibe as informações de cargo do usuário",
    }
    const description = commandDescription[command]
    commandWithDescription.push({command: command, description: description ||  ''})
}
module.exports = help