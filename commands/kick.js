const Discord = require('discord.js');
const config = require("../config.json");

module.exports.run = async (client, message, args) => {
    let member = message.mentions.members.first() || member.guild.member.cache.get(args[0]);
    if(!message.member.hasPermission("KICK_MEMBER")){
        message.channel.send('You DO NOT have permission to use this command.');
    }
    else{
        if (!member)
            return message.channel.send('Please mention a vaild user in the server');
        if (!member.kickable)
            return message.channel.send("I can't kick this user. Do they have higher role ? Do they have higher permission ?");
    let reasons = args.slice().join(' ');
    if(!reasons)
        reasons = "No reasons provided";
    member.kick(reasons).catch(error => message.channel.send(`Sorry ${message.author}, I could not kick because of: ${error}`));
    message.channel.send(`${member.user.tag} has been kicked by ${message.author.tag}. **Because**: ${reasons}`);
    }
}


module.exports.config = {
    name: 'kick'
}

