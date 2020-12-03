
const userInfo = require('./userInfo')

module.exports = (function() {

    const commands =  {
        "Help": {
            action: function() {console.log("help")},
            description: 'test'
        },
        "Userinfo": userInfo,
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