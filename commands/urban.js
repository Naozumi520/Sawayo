const Discord = require("discord.js");
const urban = require("urban");

module.exports.run = async (client, message, args) => {
    if(args.length < 1) return message.reply("Please enter something!");
    let word = args.join(" "); 



    urban(word).first(json => {
        if(!json) return message.reply("No results found!")
        var definition = json.definition;
        var length = 1024
        let urbEmbed = new Discord.MessageEmbed()
        .setColor("2f3136")
        .setTitle(json.word)
        .setDescription(definition.substring(0, length))
        .addField("Upvotes", json.thumbs_up, true)
        .addField("Downvotes", json.thumbs_down, true)
        .setFooter(`Written by: ${json.author}`);

        message.channel.send(urbEmbed)
    });


}

module.exports.config = {
    name: "urban"
}