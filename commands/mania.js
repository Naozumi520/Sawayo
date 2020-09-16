const Discord = require('discord.js');
const nodeosu = require('node-osu')
const osu = new nodeosu.Api('990493715df7b15366ebdfd2853c5ff61d78624c', { //osu api key
    resAsError: true // Reject on not found instead of returning nothing. (default: true)
  })
const config = require('../config.json');
module.exports.run = async (client, message) => {
    const args = message.content.split(" ").slice(1);
    let user = args.join(" ");
    const au = await osu.getUser({u: user,m: "3"})
    var uname = au.name
    .replace('_', '\\_')
    const flagnam = au.country.toLowerCase()
    const embed = new Discord.MessageEmbed()
    .setColor('#2f3136')
    .setTitle(`:flag_${flagnam}:  osu!mania profile for ${uname}`)
    .setThumbnail(`http://s.ppy.sh/a/${au.id}`)
    .setURL(au.profileURL)
    .setDescription(`**Offical Rank:** #${au.pp.rank} (${au.country}#${au.pp.countryRank})\r\n**Level:** ${Math.round(au.level * 100) / 100}\r\n**Total PP:** ${au.pp.raw}\r\n**Accuracy:** ${Math.round(au.accuracy * 100) / 100 + "%"}\r\n**Playcount:** ${au.counts.plays}\r\n**Score**:\n- Ranked: ${au.scores.ranked}\n- Total: ${au.scores.total}`)
      .addField("Score count:", `<:XH_Rank:709759217166319658> ${au.counts.SSH}\n<:X_Rank:709759217195548683> ${au.counts.SS}\n<:SH_Rank:709759217568841769> ${au.counts.SH}\n<:S_Rank:709759217376034946> ${au.counts[`S`]}\n<:A_Rank:709759217292017694> ${au.counts.A}`, true)
      .addField("Hit count:", `<:h50:709764550332907540> ${au.counts[`50`]}\n<:h100:709764550362398761> ${au.counts[`100`]}\n<:h300:709764550626639964> ${au.counts[`300`]}`, true)
    message.channel.send(embed)
  }

  module.exports.config = {
    name: "mania",
    description: 'check user info of osu!maina.',
    Group: 'osu!'
}