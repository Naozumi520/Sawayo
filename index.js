const path = require('path')
const fs = require('fs')
const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')
const con = require('./lib/database.js');

client.on('ready', async () => {
  console.log('\x1b[32m', `[Ready] Logged in as ${client.user.tag}! ID: ${client.user.id}`) // [Ready] Logged in as sawayo! ID: 754669799195279441
  console.log('\x1b[33m', `Serving ${client.guilds.cache.size} servers.`) // Serving 0 servers.
  con.getConnection(function(err, connection) {
  console.log(err ? '[Database] Something went wrong while connecting to the database!' : '[Database] Connected to the database!');
  })
})

client.setInterval(() => {
  const activity = config.activities[Math.floor(Math.random() * config.activities.length)]
  const text = typeof activity.text === 'function' ? activity.text() : activity.text
  client.user.setActivity(text, { type: activity.type })
}, config.activities_Interval)

client.commands = new Discord.Collection()

function walk (dir, callback) {
  fs.readdir(dir, function (err, files) {
    if (err) throw err
    files.forEach(function (file) {
      var filepath = path.join(dir, file)
      fs.stat(filepath, function (err, stats) {
        if (stats.isDirectory()) {
          walk(filepath, callback)
        } else if (stats.isFile() && file.endsWith('.js')) {
          const pull = require(`./${filepath}`)
          client.commands.set(pull.config.name, Object.assign(pull, {
            triggers: [pull.config.name, ...(pull.config.aliases || [])]
          }))
        }
      })
    })
  })
}
walk('./commands/')

client.on('message', async message => {
  const prefix = config.prefix
  if (message.author.bot || message.channel.type === 'dm') return
  if (!message.content.startsWith(prefix)) return

  const [cmd, ...args] = message.content.slice(prefix.length).split(/ +/g)

  const commandFile = client.commands.find(c => c.triggers.includes(cmd.toLowerCase()))
  if (commandFile) commandFile.run(client, message, args)
})

client.login(config.token)
