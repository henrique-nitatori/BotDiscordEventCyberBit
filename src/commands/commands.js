const Help = require('./help')
module.exports = (function() {

    const commands =  {
        "Help": function(msg) {Help(commands, msg)},
        "Userinfo": function() {console.log("userinfo")},
        "Serverinfo": function() {console.log("serverinfo")},
        "Cargos": function() {console.log("cargos")},
    }

    function execute(command, msg) {
       const commandToBeExecuted = commands[command]
       if(!commandToBeExecuted) return
       commandToBeExecuted(msg)
    }

    return {
        execute: execute
    }

})()