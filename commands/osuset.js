const Discord = require('discord.js');
const config = require('./../config.json');
const req = require("request");
const con = require('../lib/database');

module.exports.run = async (client, message) => {
    const args = message.content.split(" ").slice(1);
    const embed = new Discord.MessageEmbed()
    .setColor('#2f3136');
    con.query("SELECT player_name FROM osu_users WHERE discord_id = '"+message.author.id+"'", function (err, result) {

        if (!args.length) return info();

        req(`https://osu.ppy.sh/api/get_user?k=${config.apikey}&u=${args[0]}&m=1`, function(err, res, body) {
            var body = JSON.parse(body);
            var data = body[0];
            if (!data) return error(); // []
            if (result.length == 0) {  // If the user hasn't linked the account before
                con.query("INSERT INTO osu_users (discord_id, player_name) VALUES ('"+message.author.id+"','"+data.username+"')", function (err, result) {
                    if (err) return message.channel.send("Something went wrong while updating the database!");
                    embed.setDescription(":white_check_mark: **Successfully linked your account to** `"+ data.username +"`");
                    message.channel.send(embed);
                })
            } else {
                if (data.username == result[0].player_name) { // If the users try to link the account which they have linked
                    embed.setDescription(":white_check_mark: **You have already linked to** `"+result[0].player_name+"`");
                    message.channel.send(embed);
                    return;
                }
                // Confirmation based on reaction
                embed.setDescription(":exclamation: **Are you sure want to change your linked account from** `"+result[0].player_name+"` **to** `"+data.username+"`**?**\n**React** ✅ **to confirm or** ❌ **to cancel.**");
                message.channel.send(embed).then(async confirmation => {
                    await confirmation.react("✅");
                    await confirmation.react("❌");

                    const filter = (reaction, user) => user.id !== message.client.user.id;
			        var collector = confirmation.createReactionCollector(filter, { time: 10000 }); // Timeout: 10000ms (10s)
                    
                    collector.on("collect", (reaction, user) => {
                        if (reaction.emoji.name == "✅") {
                            con.query("UPDATE osu_users SET player_name = '"+data.username+"' WHERE discord_id = '"+message.author.id+"'", function (err, result) {
                                confirmation.delete().catch();
                                if (err) return message.channel.send("Something went wrong while updating the database!");
                                embed.setDescription(":white_check_mark: **Successfully changed your linked account to** `"+ data.username +"`");
                                message.channel.send(embed);
                                return;
                            })
                        }
    
                        if (reaction.emoji.name == "❌") {
                            confirmation.delete().catch();
                            embed.setDescription(":white_check_mark: **Cancelled!**");
                            message.channel.send(embed);
                            return;
                        }
                    });

                    collector.on("end", (reaction, user) => {
                        if (reaction.size != 0) return; // If the user has reacted or send timeout message
                        confirmation.delete().catch();
                        embed.setDescription(":clock12: **Timeout! No change has made.**");
                        message.channel.send(embed);
                    })
                })
            }
        })

        function info() {
            var msg = "";
            if (result.length == 0) { // If the user hasn't linked their account yet
                msg = `\n:white_check_mark: **It doesn't seem that there is an account linked. Link your account with** ` + "`" + `${config.prefix}osuset [name]` + "`";
            }
            embed.setDescription(`:white_check_mark: **${message.author.tag}, your account has been linked to** `+"`"+ (result.length == 0 ? "none" : `${result[0].player_name}`) + "`" + msg);
            message.channel.send(embed);
        }

        function error() { // Unexisted player
            embed.setDescription(":x: **Cannot find this player. Please check your spelling again!**");
            message.channel.send(embed);
        }
    })
    
}

module.exports.config = {
    name: 'osuset',
    description: 'link your osu! account to the bot database.',
    Group: 'osu!'
}