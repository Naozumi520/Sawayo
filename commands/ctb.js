const Discord = require('discord.js');
const nodeosu = require('node-osu');
const config = require('./../config.json');
const osu = new nodeosu.Api(config.apikey, { // Set your API Key in config.json
    resAsError: true // Reject on not found instead of returning nothing. (default: true)
  })
const emo_config = require('../emoji_config.json');

module.exports.run = async (client, message) => {
const args = message.content.split(" ").slice(1);
      let user = args.join(" ");
      const au = await osu.getUser({u: user,m: "2"})
      var uname = au.name
      .replace('_', '\\_')
      const flagnam = au.country.toLowerCase()
      const embed = new Discord.MessageEmbed()
      .setColor('#2f3136')
      .setTitle(`:flag_${flagnam}:  osu!ctb profile for ${uname}`)
      .setThumbnail(`http://s.ppy.sh/a/${au.id}`)
      .setURL(au.profileURL)
      .setDescription(`**Offical Rank:** #${au.pp.rank} (${au.country}#${au.pp.countryRank})\r\n**Level:** ${Math.round(au.level * 100) / 100}\r\n**Total PP:** ${au.pp.raw}\r\n**Accuracy:** ${Math.round(au.accuracy * 100) / 100 + '%'}\r\n**Playcount:** ${au.counts.plays}\r\n**Score**:\n- Ranked: ${au.scores.ranked}\n- Total: ${au.scores.total}`)
        .addField("Rank count:", `${emo_config.SSH} ${au.counts.SSH}\n${emo_config.SS}  ${au.counts.SS}\n${emo_config.SH}  ${au.counts.SH}\n${emo_config.S}  ${au.counts[`S`]}\n${emo_config.A}  ${au.counts.A}`, true)
        .addField("Hit count:", `${emo_config.hit50}  ${au.counts[`50`]}\n${emo_config.hit100}  ${au.counts[`100`]}\n${emo_config.hit300} ${au.counts[`300`]}`, true)
      message.channel.send(embed)
    }

    module.exports.config = {
        name: "ctb",
        description: 'check user info of osu!ctb(catch the beat).',
        Group: 'osu!'
    }