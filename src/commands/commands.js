const Help = require('./help')
const Serverinfo = require('./serverinfo')
module.exports = (function() {

    const commands =  {
        "Help": function(msg) {Help(commands, msg)},
        "Userinfo": function() {console.log("userinfo")},
        "Serverinfo": function(msg) {Serverinfo(msg)},
        "Cargos": function() {console.log("cargos")},
    }

    function execute(command, msg, client) {
       const commandToBeExecuted = commands[command]
       if(!commandToBeExecuted) return false
       return  commandToBeExecuted(msg, client)
    }

    return {
        execute: execute
    }

})()