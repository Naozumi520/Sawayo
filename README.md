# Sawayo
Sawayo, a discord bot for osu!  
This is a repository of Sawayo bot.

## Set-up
Clone the git project:
```bash
$ git clone https://github.com/Naozumi520/Sawayo.git
```
This project uses node and npm. Use the following command if you don't have them locally installed.
```bash
$ cd Sawayo/
$ npm install
```
Before starting the bot, you need to create a file called "config.json" under the root directory of the project.
## Sample config.conf
	{
         "token" : "8ld6ZJcYNFyswDabQMfLjQ6iL8Zc2ls7UYkyUjHlvMdg7X", //Of course, this is not a real token.
         "prefix" : "s!"  //The bot prefix
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
