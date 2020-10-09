const ms = require('ms'); //also know as 'milisecond', more information: https://www.npmjs.com/package/ms

module.exports.run = async (bot, message, args) => {
    let tobedeafen = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
    if(!tobedeafen) return message.reply("<:error:759791498279125042> I can't found this user."); //If user not found then it will send "I can't found this user."
    if(tobedeafen.hasPermission("MANAGE_MESSAGES")) return message.reply("<:error:759791498279125042> Can't deafen this user."); //If the role has MANAGE_MESSAGE then the bot can't deafen the user.
    let deafenrole = message.guild.members.cache.find(r => r.name === "Deafened");//This will find deafend role which has no SEND_MESSAGE permisson and ADD_REACTIONS
    if (!deafenrole) {
        try {
            deafenrole = await message.guild.roles.create({
                data: {
                name: "Deafened",
                color: "#000000",
                permissions: []
            },
            });

            message.guild.channels.cache.forEach(async (channel, id) => {
                await channel.updateOverwrite(deafenrole, {
                    LISTEN: false
                });
            });
            console.log('Created deafend role');
        } catch (error) {
            console.log(error.stack);
        }
    }
   


//End of role creating

let deafentime = args[1];
if (!deafentime) return message.reply("> <:error:759791498279125042> You didn't specify a time"); // Time has not been entered.

await(tobedeafen.roles.add(deafenrole.id));
message.reply(`> <@${tobedeafen.id}> has been deafend for ${ms(ms(deafentime))}`);


setTimeout(function(){
    tobedeafen.roles.remove(deafenrole.id);
    message.channel.send(`> <@${tobedeafen.id}> has been undeafend.`);

}, ms(deafentime)) }

module.exports.config = {
    name: 'deafen'
}