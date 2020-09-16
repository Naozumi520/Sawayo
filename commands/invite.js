const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    const attachment = new Discord.MessageAttachment("./files/images/Sawayo_banner.png" , 'banner.png');
    const embed = new Discord.MessageEmbed()
    .setColor('#2f3136')
    .setTitle("Sawayo#0443's Invite link")
    .setDescription(`Want to add Sawayo to your server? No problem!\n[Invite me](https://discord.com/api/oauth2/authorize?client_id=754669799195279441&permissions=0&scope=bot)`)
    .attachFiles(attachment)
    .setImage("attachment://banner.png")
    message.channel.send(embed);
}

module.exports.config = {
    name: "invite",
    aliases: ["join"],
    description: 'invite Sawayo.',
    Group: 'Utilities'
}