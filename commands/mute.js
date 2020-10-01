const ms = require('ms'); //also know as 'milisecond', more information: https://www.npmjs.com/package/ms

module.exports.run = async (bot, message, args) => {
    let tobemute = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
    if(!tobemute) return message.reply("I can't found this user."); //If user not found then it will send "I can't found this user."
    if(tobemute.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't mute this user."); //If the role has MANAGE_MESSAGE then the bot can't mute the user.
    let muterole = message.guild.members.cache.find(r => r.name === "Muted");//This will find muted role which has no SEND_MESSAGE permisson and ADD_REACTIONS
    if (!muterole) {
        try {
            muterole = await message.guild.roles.create({
                data: {
                name: "Muted",
                color: "#000000",
                permissions: []
            },
            });

            message.guild.channels.cache.forEach(async (channel, id) => {
                await channel.updateOverwrite(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
            console.log('Created muted role');
        } catch (error) {
            console.log(error.stack);
        }
    }
   


//End of role creating

let mutetime = args[1];
if (!mutetime) return message.reply("You didn't specify a time"); // Time has not been entered.

await(tobemute.roles.add(muterole.id));
message.reply(`<@${tobemute.id}> has been muted for ${ms(ms(mutetime))}`);


setTimeout(function(){
    tobemute.roles.remove(muterole.id);
    message.channel.send(`<@${tobemute.id}> has been unmuted.`);

}, ms(mutetime)) }

module.exports.config = {
    name: 'mute'
}