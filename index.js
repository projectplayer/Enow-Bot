const Bot = require('anony-mpp-client');

const bot = new Bot({
    name: "Huh???",
    color: "#ff9a7c",
    channel: "✧𝓓𝓔𝓥 𝓡𝓸𝓸𝓶✧",
    logDisconnectReason: true || false, //this thing logs the reason to console if bots got disconnect
    avoidServerCrash: true || false, //this thing can handle server chrashes
    onlineMessage: 'Online', //this is optional
    logOnConnect: 'Connected' //this is optional, this thing log to the console bot got connect, by default its Connected to {room}

    //uri is optional, default: mppclone.com:8443
}, 'mppclone.com:8443').login('a227a43ca6287ffc72042cf3.f0eb27e4-bce1-4656-8bb0-7eda584dc9a5')

var prefix = "e"

bot.client.on('a', msg => {
    let cmd =  msg.a.split(' ')[0]

    if (cmd === `${prefix}ping`) {
        bot.chat("Pong!");
    }
})
