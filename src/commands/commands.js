module.exports = (function() {

    const commands =  {
        "Help": function() {console.log("help")},
        "Userinfo": function() {console.log("userinfo")},
        "Serverinfo": function() {console.log("serverinfo")},
        "Cargos": function() {console.log("cargos")},
    }

    function execute(command) {
       const commandToBeExecuted = commands[command]
       if(!commandToBeExecuted) return
       commandToBeExecuted()
    }

    return {
        execute: execute
    }

})()