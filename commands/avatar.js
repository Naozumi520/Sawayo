const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    if (args[0]) {
    var member= message.mentions.members.first();  
    if (!member) {
        return message.reply('Please mention a user!'); // No member mentioned
    }
    let embed = new Discord.MessageEmbed()
    .addField(`**${member.user.tag}**`, `[URL](${member.user.avatarURL({size: 1024})})`)
    .setImage(member.user.avatarURL({size: 1024, dynamic: true}))
    .setColor('#2f3136')
    return message.channel.send(embed)
  }
  let embed = new Discord.MessageEmbed()
  .addField(`**${message.author.tag}**`, `[URL](${message.author.avatarURL({size: 1024})})`)
  .setImage(message.author.avatarURL({size: 1024, dynamic: true}))
  .setColor('#2f3136')
 return message.channel.send(embed);
}


module.exports.config = {
    name: "avatar",
    aliases: ["avt"],
    description: 'Display someone\'s avatar.'
}
