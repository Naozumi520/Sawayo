const google = require('google');
const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    /*
    if (args[0]){
        var member = message.mentions.members.first();
        if (!member){
            return message.reply('Please give me a key word to search');
        }
        */
    google.resultPerPage = 1;
    let nextCounter = 0;
    google (args, function(err, res){
        if (err) message.reply(err);
    for (var i =0; i < res.links.length; ++i){
        var link = res.links[i];
    let embed = new Discord.MessageEmbed()
    .setTitle(link.title)
    .setURL(link.URL)
    .setDescription(link.description)
    .setThumbnail('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F687784174316017644%2F&psig=AOvVaw23buMvJBtpKFf8xSDN0uC-&ust=1601455308475000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPjU0oP8jewCFQAAAAAdAAAAABAJ');
    message.channel.send(embed);;
    }
    })
        }
//}

module.exports.config = {
    name: 'google',
    aliases: ['google, search']
}
