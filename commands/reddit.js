const discord = require('discord.js')
const api = require("imageapi.js")
module.exports.run = async (bot, message, args)  => {
        let Subreddit = args.join(" "); 
        if(!Subreddit)
        return message.channel.send(`<:error:759791498279125042> You did not specify your subreddit!`)
        try{
            var m = await message.channel.send("Loading random pic....")
            var e = await message.channel.send("<a:loading:762232493834764308>")
            let img = await api(Subreddit)
            const Embed = new discord.MessageEmbed()
            .setTitle(`A random image from r/${Subreddit}`)
            .setColor('2f3136')
            .setImage(img)
            .setURL(`https://reddit.com/r/${Subreddit}`)
            e.delete()
            m.edit('', Embed) //keep '',
        } catch(err) {
            e.delete()
            m.edit(`> <:error:759791498279125042> An error occurred while loading the current SBR: \`${args}\``, err)
        }   
    }
module.exports.config = {
    name: 'reddit',
    aliases: ["sbr", "subreddit"]
}