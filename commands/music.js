const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const config = require("../config.json");
const ytdlOptions = {
	filter: 'audioonly',
	quality: 'highestaudio',
	format: 'aac',
	hightWaterMark: 1<<25
  };
  const streamOptions = {
	seek: 0,
	volume: 0.5,
	highWaterMark: 1
  };


module.exports.run = async (client, message, args) => {

	if (message.content.startsWith(`${config.prefix}play`)) {
	  const voiceConnection = await message.member.voice.channel;

	if (!voiceConnection) {
		message.reply('please join a voice channel first!');
		return;
	}

	if (!args.length) {
	  message.reply(`${config.prefix} <Youtube URLL>`)
	  return;
	}
	

	  voiceConnection.join().then(async connection => {
		const stream = ytdl(args.toString(), ytdlOptions);

		const dispatcher = connection.play(ytdl(args.toString(), ytdlOptions), streamOptions)
		dispatcher.on('finish', () => voiceConnection.leave());


		const songInfo = await ytdl.getInfo(args.toString());
        const song = {
        title: songInfo.videoDetails.title,
        url: songInfo.videoDetails.video_url
        };

		await message.channel.send(`Now playing: **${song.title}**`);
	  }).catch(err => console.error(err));
	}
}

	module.exports.config = {
		name: "play",
		aliases: ["p"]
	}
