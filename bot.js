const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("684429834340139009")
setInterval(function() {
channel.send(`I.CAN.F*U*.THE.PRO.BOT.I.CAN.F*U*.THE.PRO.BOT.I.CAN.F*U*.THE.PRO.BOT`);
}, 30)
})

client.login(process.env.BOT_TOKEN);