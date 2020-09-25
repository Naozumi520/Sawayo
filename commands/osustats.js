const Discord = require('discord.js');
const nodeosu = require('node-osu')
const osu = new nodeosu.Api('990493715df7b15366ebdfd2853c5ff61d78624c', { //osu api key
    resAsError: true // Reject on not found instead of returning nothing. (default: true)
  })
const config = require('../config.json');

module.exports.run = async (client, message) => {
    const args = message.content.split(" ").slice(1);
      let user = args.join(" ");
      const au = await osu.getUser({u: user})

      const embed = new Discord.MessageEmbed()
      .setColor('#2f3136')
      .setImage(`https://osustats.click/playercard/${au.id}.png`)
      message.channel.send(embed)
    }


    
    module.exports.config = {
        name: "osustats",
        description: 'generate osu playercard images using osustatus.click',
        Group: 'osu!'
    }
