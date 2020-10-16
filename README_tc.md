

# Sawayo

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/975632fdde704e4d8dba5a2be84a02aa)](https://app.codacy.com/gh/JammieLannie/Sawayo?utm_source=github.com&utm_medium=referral&utm_content=JammieLannie/Sawayo&utm_campaign=Badge_Grade)
[![CodeFactor](https://www.codefactor.io/repository/github/naozumi520/sawayo/badge)](https://www.codefactor.io/repository/github/naozumi520/sawayo)<br/>
Language: [English](https://github.com/Naozumi520/Sawayo)


Sawayo, Discord的osu機器人！<br/>
這是Sawayo bot的個人存儲庫。<br/>
[Sawayo團隊存儲庫](https://github.com/TeamSawayo/Sawayo)<br/>
[項目進度](https://github.com/Naozumi520/Sawayo/projects/1)<br/>
該機器人仍在開發中，需要更多時間進行開發。

## 介紹
先說一下因為沒有那麼多時間所以這裡大多數文字都用google翻譯滴.<br/>
這個g氣人用[`discord.js v12`](https://discord.js.org/#/docs/main/v12/general/welcome)建造, 具有諸如檢查osu！玩家信息之類的命令或更多命令。
## 索引

**建立**
- [設置與準備工作](https://github.com/Naozumi520/Sawayo/blob/master/README_tc.md#設置與準備工作)

**項目信息**
- [g氣人命令](https://github.com/Naozumi520/Sawayo/blob/master/README_tc.md#指令)
- [使用中的API](https://github.com/Naozumi520/Sawayo/blob/master/README_tc.md#使用中的api)
- [貢獻者](https://github.com/Naozumi520/Sawayo/blob/master/README_tc.md#貢獻者)
- [我們的discord](https://github.com/Naozumi520/Sawayo/blob/master/README_tc.md#我們的discord)
- [待辦事項清單](https://github.com/Naozumi520/Sawayo/blob/master/README_tc.md#要做的事情)
- [抖內(Donate)](https://github.com/Naozumi520/Sawayo/blob/master/README_tc.md#抖內donate)

## 設置與準備工作
克隆git項目：
```bash
$ git clone https://github.com/Naozumi520/Sawayo.git
```
該項目使用node和npm。 如果未在本地安裝它們，請使用以下命令。
```bash
$ cd Sawayo/
$ npm install
```
啟動g氣人之前，您需要在項目的根目錄下創建一個名為"config.json"的文件。
您還需要在"emoji_config.json"中配置表情符號ID。
## config.json 樣例
	{
         "token" : "8ld6ZJcDYNRFyswDaNotarealtokenls7UYkyUjHlGvMdg7X",
         "apikey": "DkyUjHldyU6RFyNotarealtokenswDalkyUdyU6Y",
         "prefix" : "s!",
	       "admin_role" : "754726868673946891",
	 
         "activities": [
             { "type": "PLAYING", "text": "osu!" },
             { "type": "LISTENING", "text": "osu!memories 2" },
             { "type": "PLAYING", "text": "with circles" }
             ],
              "activities_Interval" : "6000",
              
    "database": {
        "host": "localhost",
        "username": "root",
        "password": "",
        "database": "sawayo",
        "connectionLimit": 50
      }
	}
## emoji_config.json 樣例
    {
    "error": "<:error:759791498279125042>",
    "SSH": "<:SSH:759435267383361536>",
    "SS": "<:SS:759435267181510736>",
    "SH": "<:SH:759435267357540382>",
    "S": "<:S_:759435267316252693>",
    "A": "<:A_:759435267404070922>",
    "hit50": "<:h50:759435458555412480>",
    "hit100": "<:h100:759435459671359558>",
    "hit300": "<:h300:759435458584510544>"
    }

準備完成後，項目目錄應如下所示：
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
  + lib
    -database.js
  + node_modules
    - modules
  - index.js
  - package.json
  - config.json
```

啟動g氣人：
```bash
$ node index
```

## 使用中的API
- [imageapi.js](https://www.npmjs.com/package/imageapi.js) (^1.0.17)
- [node-osu](https://www.npmjs.com/package/node-osu) (^2.2.0)
- [urban](https://www.npmjs.com/package/urban) (^1.0.17)

## 指令
osu！玩家信息:
```
 - osuset     --s!osuset <username>
 - std     --s!std <username>
 - taiko     --s!taiko <username>
 - ctb     --s!ctb <username>
 - mania     --s!mania <username>
```
雜項:
```
- urban     --s!urban <words>
- google     --s!google <things> <- Not work, will fix it soon
```
管理員命令:
```
-mute     --s!mute <mentions_user> <time (could be 1s,1m,1h, 10000(ms))>
-ban     --s!ban <mention_user> <reasons(Optional)>
-kick     --s!kick <mention_user> <reasons(Optional)>
```


## 貢獻者
[![](https://github.com/JammieLannie.png?size=50)  JammieLannie](https://github.com/JammieLannie)<br/>
[![](https://github.com/Naozumi520.png?size=50)  Naozumi520](https://github.com/Naozumi520)<br/>
[![](https://github.com/ItzTheLT.png?size=50)  ItzTheLT](https://github.com/ItzTheLT)

![picture](files/images/Sawayo_banner1.png)

## 我們的discord
- [Naozumi#9929](https://discord.com/users/752146392553881660)
- [dragon.xml#1234](https://discord.com/users/468069720105680896)
- [TheLT#0157](http://discord.com/users/388345263191752704)

## 要做的事情
```
更多命令。
與Discord Server審核相關的管理相關內容。
```
歡迎為這個項目做貢獻。

## 抖內Donate
JammieLannie: https://paypal.me/jammielannie.
