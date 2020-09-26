const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    const m = await message.channel.send("Ping....");
    m.edit(`Pong, Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms.`);
}

module.exports.config = {
    name: "ping",
    aliases: ["latency"],
    description: 'Do ping pong test and show API Latency.',
    Group: 'Utilities'
}