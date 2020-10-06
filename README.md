# Sawayo
Sawayo, a discord bot for osu!  
This is a repository of Sawayo bot.

## Introduction
This bot is built on [`discord.js v12`]**(https://discord.js.org/#/docs/main/v12/general/welcome)

##Index
**Setup**
- [Our discord](https://github.com/Naozumi520/Sawayo/blob/master/README.md#our-discord)
- [Set-up & Preparation](https://github.com/Naozumi520/Sawayo/blob/master/README.md#set-up--preparation)

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
         "token" : "8ld6ZJcDYNRFyswDaNotarealtokenls7UYkyUjHlGvMdg7X", 
         "prefix" : "s!",
	   "admin_role" : "754726868673946891",
	 
         "activities": [
             { "type": "PLAYING", "text": "osu!" },
             { "type": "LISTENING", "text": "osu!memories 2" },
             { "type": "PLAYING", "text": "with circles" }
             ],
              "activities_Interval" : "6000",

    "reddit": [
        { "username": "reddit_username" },
        { "password": "reddit password" },
        { "app_id": "reddit api app id" },
        { "api_secret": "reddit api secret" }
    ]
	}
## Sample emoji_config.json
    {
    "error": "<:error:759791498279125042>",
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
## Commands  
User-profile:
```
 - std     --s!std <username>
 - taiko     --s!taiko <username>
 - ctb     --s!ctb <username>
 - mania     --s!mania <username>
```
Miscellaneous:
```
- urban     --s!urban <words>
- google     --s!google <things> <- Not work, will fix it soon
```
Admin-commands
```
-mute     --s!mute <mentions_user> <time (could be 1s,1m,1h, 10000(ms))>
-ban     --s!ban <mention_user> <reasons(Optional)>
-kick     --s!kick <mention_user> <reasons(Optional)>
```
 

## Contributors
[![](https://github.com/JammieLannie.png?size=50)  JammieLannie](https://github.com/JammieLannie)  
[![](https://github.com/Naozumi520.png?size=50)  Naozumi520](https://github.com/Naozumi520)

![picture](files/images/Sawayo_banner.png)

## Our discord
- Naozumi#9929
- dragon.xml#1234

## Things need to do
```
Database
Admin related stuff for Discord Server Moderations.
```
Feel free to contribute to this project.

## Donate
JammieLannie: https://paypal.me/jammielannie
