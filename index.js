const Bot = require('anony-mpp-client');

const bot = new Bot({
    name: "Huh???",
    color: "#b1c8ff",
    channel: "Enow",
    logDisconnectReason: true || false, //this thing logs the reason to console if bots got disconnect
    avoidServerCrash: true || false, //this thing can handle server chrashes
    onlineMessage: 'Online', //this is optional
    logOnConnect: 'Connected' //this is optional, this thing log to the console bot got connect, by default its Connected to {room}

    //uri is optional, default: mppclone.com:8443
}, 'mppclone.com:8443').login('6d87643e1369080f41e8ccaa.e1989d0d-112b-43f3-887a-409da7b86aab')

var prefix = "e"

bot.client.on('a', msg => {
    let cmd =  msg.a.split(' ')[0]

    if (cmd === `${prefix}ping`) {
        bot.chat("Pong!");
    }
})
