const Discord = require('discord.js');
const nodeosu = require('node-osu')
const osu = new nodeosu.Api('990493715df7b15366ebdfd2853c5ff61d78624c', { //osu api key
    resAsError: true // Reject on not found instead of returning nothing. (default: true)
  })
const config = require('../config.json');

module.exports.run = async (client, message) => {
const args = message.content.split(" ").slice(1);
      let user = args.join(" ");
      const au = await osu.getUser({u: user,m: "1"})
      var uname = au.name
      .replace('_', '\\_')
      const flagnam = au.country.toLowerCase()
      const embed = new Discord.MessageEmbed()
      .setColor('#2f3136')
      .setTitle(`:flag_${flagnam}:  osu!taiko profile for ${uname}`)
      .setThumbnail(`http://s.ppy.sh/a/${au.id}`)
      .setURL(au.profileURL)
      .setDescription(`**Offical Rank:** #${au.pp.rank} (${au.country}#${au.pp.countryRank})\r\n**Level:** ${Math.round(au.level * 100) / 100}\r\n**Total PP:** ${au.pp.raw}\r\n**Accuracy:** ${Math.round(au.accuracy * 100) / 100 + '%'}\r\n**Playcount:** ${au.counts.plays}\r\n**Score**:\n- Ranked: ${au.scores.ranked}\n- Total: ${au.scores.total}`)
        .addField("Score count:", `${config.SSH} ${au.counts.SSH}\n${config.SS}  ${au.counts.SS}\n${config.SH}  ${au.counts.SH}\n${config.S}  ${au.counts[`S`]}\n${config.A}  ${au.counts.A}`, true)
        .addField("Hit count:", `${config.hit50}  ${au.counts[`50`]}\n${config.hit100}  ${au.counts[`100`]}\n${config.hit300} ${au.counts[`300`]}`, true)
      message.channel.send(embed)
    }

    module.exports.config = {
        name: "taiko",
        description: 'check user info of osu!taiko.',
        Group: 'osu!'
    }