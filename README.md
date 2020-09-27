# Sawayo
Sawayo, a discord bot for osu!  
This is a repository of Sawayo bot.

## Set-up & Preparation
Clone the git project:
```bash
$ git clone https://github.com/Naozumi520/Sawayo.git
```
This project uses node and npm. Use the following command if you don't have them locally installed.
```bash
$ cd Sawayo/
$ npm install
```
Before starting the bot, you will need to create a file called "config.json" under the root directory of the project.
You will also need to configure the emoji ID in emoji_config.json.
## Sample config.json
	{
         "token" : "8ld6ZJcYNFyswDabQMfLjQ6iL8Zc2ls7UYkyUjHlvMdg7XOf course, this is not a real token.", 
         "prefix" : "s!",
	 "admin_role" : "759786408612986901",
	 
         "activities": [
             { "type": "PLAYING", "text": "osu!" },
             { "type": "LISTENING", "text": "osu!memories 2" },
             { "type": "PLAYING", "text": "with circles" }
             ],
            "activities_Interval" : "50000",
	}
## Sample emoji_config.json
    {
    "admin_role" : "754726868673946891",
    "SSH": "<:SSH:759435267383361536>",
    "SS": "<:SS:759435267181510736>",
    "SH": "<:SH:759435267357540382>",
    "S": "<:S_:759435267316252693>",
    "A": "<:A_:759435267404070922>",
    "hit50": "<:h50:759435458555412480>" ,
    "hit100": "<:h100:759435459671359558>",
    "hit300": "<:h300:759435458584510544>"
    }

Once the preparation is done, the project directory should look like the following:
```
+ Sawayo
  + commands
    - commands1.js
    - commands2.js
    - commands3.js
    - commands4.js
  + files
    + images
     - Sawayo_banner.png
  + node_modules
    - modules
  - index.js
  - package.json 
  - config.json
```

To start the bot:
```bash
$ node index
```

## Contributors
[![](https://github.com/JammieLannie.png?size=50)  JammieLannie](https://github.com/JammieLannie)  
[![](https://github.com/Naozumi520.png?size=50)  Naozumi520](https://github.com/Naozumi520)

![picture](files/images/Sawayo_banner.png)

Feel free to contribute to this project.
