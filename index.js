const path = require('path')
const fs = require('fs')
const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')

client.on('ready', async () => {
  console.log('\x1b[32m', `[Ready] Logged in as ${client.user.tag}! ID: ${client.user.id}`) //[Ready] Logged in as sawayo! ID: 754669799195279441
  console.log('\x1b[33m', `Serving ${client.guilds.cache.size} servers.`) //Serving 0 servers.
})

client.setInterval(() => {
    const activity = config.activities[Math.floor(Math.random() * config.activities.length)];
    const text = typeof activity.text === 'function' ? activity.text() : activity.text;
    client.user.setActivity(text, { type: activity.type });
}, config.activities_Interval)


client.commands = new Discord.Collection();

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
    if(message.author.bot || message.channel.type === 'dm') return;
    if(!message.content.startsWith(prefix)) return;

    const [ cmd, ...args ] = message.content.slice(prefix.length).split(/ +/g) 

    let commandFile = client.commands.find(c => c.triggers.includes(cmd.toLowerCase()));
    if(commandFile) commandFile.run(client, message, args)
})

client.login(config.token)
