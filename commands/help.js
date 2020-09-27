const fs = require('fs')

module.exports.run = async (client, message, args) => {
        let str = '';
        const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

        for (const file of commandFiles) {
            const command = require(`./${file}`);
            str += `Name: ${command.config.name}, Description: ${command.config.description} \n`;
        }

        message.channel.send(str);
    }

    module.exports.config = {
        name: "help",
        aliases: ["h"]
    }

    