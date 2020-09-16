const path = require('path')
const fs = require('fs')
const Discord = require('discord.js')
const client = new Discord.Client()
const Download = require('receive-file')
const osuReplayParser = require('osureplayparser');

const config = require('./config.json')

client.on('ready', async () => {
  console.log('\x1b[32m', `[Ready] Logged in as ${client.user.tag}! ID: ${client.user.id}`) //[Ready] Logged in as sawayo! ID: 754669799195279441
  console.log('\x1b[33m', `Serving ${client.guilds.cache.size} servers.`) //Serving 0 servers.
})

client.commands = new Discord.Collection();
client.categories = fs.readdirSync("./commands/");

fs.readdir("./commands/", (err, files) => {
    if(err) console.log(err);
    const jsfile = files.filter(f => f.endsWith('.js'));
    if (jsfile.length <= 0) return console.log("\x1b[31m" ,"[FS] Couldn't Find Commands!"); //[FS] Couldn't Find Commands!

    jsfile.forEach((f, i) => {
        let pull = require(`./commands/${f}`);
        client.commands.set(pull.config.name, Object.assign(pull, { 
            triggers: [ pull.config.name, ...(pull.config.aliases || []) ]
        }))
    })
});

client.on("message", async message => {
    const prefix = config.prefix;

    if(message.attachments.size > 0) {
        if(message.attachments.first().name.endsWith('.osr')){
        var Attachment = (message.attachments).array();
        var url = Attachment[0].url
        var name = Attachment[0].name
          console.log(url)
          var options = {
            directory: "./osr_parser/",
          }
        Download(url, options, function(err, path){
          if(err){
              console.error(err);
          } else {
              console.log(path);
          }
      })
      await new Promise(res => setTimeout(res, 3000))
        const replayPath = './osr_parser/' + name ;
        const replay = osuReplayParser.parseReplay(replayPath);
        //console.log(replay) //log inf
        const embed = new Discord.MessageEmbed()
        .setColor('#FF1493')
        .setTitle(`Osu!Replay Score of ${replay.playerName}`)
        .setDescription(`Date: ${replay.timestamp}`)
        .addField("Hit count:", `<:h300:709764550626639964> ${replay.number_300s}\n<:h100:709764550362398761> ${replay.number_100s}\n<:h50:709764550332907540> ${replay.number_50s}`, true)
        .addField("Hit count:", `gekis: ${replay.gekis}\nkatus: ${replay.katus}\nmisses: ${replay.misses}`, true)
        .addField("Score count", `score: ${replay.score}\nmax combo: ${replay.max_combo}`, true)
        message.channel.send(embed)
    }
        }

    if(message.author.bot || message.channel.type === 'dm') return;
    if(!message.content.startsWith(prefix)) return;

    const [ cmd, ...args ] = message.content.slice(prefix.length).split(/ +/g) 

    let commandFile = client.commands.find(c => c.triggers.includes(cmd.toLowerCase()));
    if(commandFile) commandFile.run(client, message, args) 
})

client.login(config.token)