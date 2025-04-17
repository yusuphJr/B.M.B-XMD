const config = require('../config');
const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');
const axios = require('axios');

cmd({
    pattern: "yooh",
    desc: "menu the bot",
    category: "menu",
    react: "🥰",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `
<🔥 *${config.BOT_NAME}* 🔥>
│👑 *Owner:* ${config.OWNER_NAME}
│🌀 *Baileys:* Multi Device
│💻 *Type:* NodeJs
│☁️ *Platform:* Heroku
│🌐 *Mode:* [${config.MODE}]
│⚡ *Prefix:* [${config.PREFIX}]
│🛠 *Version:* 3.0.0 Bᴇᴛᴀ
└───────────────

*⚡MENU LIST⚡*

➤ 🕌 *Quranmenu*
➤ 🕌 .surah1
➤ 🕌 .surah2
➤ 🕌 .surah3
➤ 🕌 .surah4
➤ 🕌 .surah5
➤ 🕌 .surah6
➤ 🕌 .surah7
➤ 🕌 .surah8
➤ 🕌 .surah9
➤ 🕌 .surah10
_________________________
➤ 🕋 *Prayertime*
➤ 🕋 .Prayertime
_________________________
➤ 🤖 *Aimenu*
➤ 🤖 .ai
➤ 🤖 .chatgpt2
➤ 🤖 .openai
➤ 🤖 .deepseek
➤ 🤖 .fluxai
➤ 🤖 .imagine2
➤ 🤖 .imagine3
➤ 🤖 .wallpaper
➤ 🤖 .image
_________________________
➤ 🪙 *AnimeIMGE*
➤ 🪙 .anime
➤ 🪙 .anime1
➤ 🪙 .anime2
➤ 🪙 .anime3
➤ 🪙 .anime4
➤ 🪙 .anime5
➤ 🪙 .garl
➤ 🪙 .waifu
➤ 🪙 .neko
➤ 🪙 .maid
➤ 🪙 .awoo
➤ 🪙 .animegirl
➤ 🪙 .animegirl1
➤ 🪙 .animegirl2
➤ 🪙 .animegirl3
➤ 🪙 .animegirl4
➤ 🪙 .animegirl5
➤ 🪙 .dog
_________________________
➤ 💬 Reactions
➤ 😊 .cry
➤ 😊 .cuddle
➤ 😊 .bully
➤ 😊 .hug
➤ 😊 .awoo
➤ 😊 .lick
➤ 😊 .pat
➤ 😊 .smug
➤ 😊 .bonk
➤ 😊 .yeet
➤ 😊 .blush
➤ 😊 .handhold
➤ 😊 .highfive
➤ 😊 .nom
➤ 😊 .wave
➤ 😊 .smile
➤ 😊 .wink
➤ 😊 .happy
➤ 😊 .glomp
➤ 😊 .bite
➤ 😊 .poke
➤ 😊 .cringe
➤ 😊 .dance
➤ 😊 .kill
➤ 😊 .slap
➤ 😊 .kiss
_________________________
➤ 🔄 *Convertmenu*
➤ 🔄 .sticker
➤ 🔄 .topdf
➤ 🔄 .gif
➤ 🔄 .attp
➤ 🔄 .tts2
➤ 🔄 .tts3
➤ 🔄 .tts
➤ 🔄 .trt
➤ 🔄 .fancy
➤ 🔄 .gitclone
➤ 🔄 .url
➤ 🔄 .logo
➤ 🔄 .fetch
➤ 🔄 .emoji
_________________________
➤ 🎉 *Funmenu*
➤ 🎉 .define
➤ 🎉 .emix 😀,🤣
➤ 🎉 .happy
➤ 🎉 .heart
➤ 🎉 .angry
➤ 🎉 .sad
➤ 🎉 .shy
➤ 🎉 .moon
➤ 🎉 .confused
➤ 🎉 .hot
➤ 🎉 .nikal
➤ 🎉 .compatibility
➤ 🎉 .aura
➤ 🎉 .roast
➤ 🎉 .8ball
➤ 🎉 .compliment
➤ 🎉 .lovetest
➤ 🎉 .joke
➤ 🎉 .hack
_________________________
➤ ⬇️ *Dlmenu*
➤ 🎬 .capcut
➤ 🎵 .ringtone
➤ 📲 .tiktok2
➤ 🎥 .tiktok
➤ 🔍 .tiktoksearch
➤ 📸 .Instagram
➤ 🌀 .facebook
➤ 👻 .snapchat
➤ 🐦 .twitter
➤ 📂 .mediafire
➤ 📂 .gdrive  
➤ 📥 .apk
➤ ⬇️ .gdrive
➤ 💡 .likee
➤ 📌 .pinterest
➤ 🔎 .spotifysearch
➤ 🔎 .yts
➤ 🎥 .mp4
➤ 🎼 .mp3
➤ 📹 .video
➤ 🎥 .video2
➤ 🎞️ .video3
➤ 🎥 .video5
➤ 🎧 .play
➤ 🎶 .play2
➤ 🪙 .img
_________________________
➤ 👥 *Groupmenu*
➤ 👥 .tagall
➤ 👥 .tag
➤ 👥 .taggp
➤ 👥 .hidetag
➤ 👥 .unmute
➤ 👥 .unlockgc
➤ 👥 .kickall
➤ 👥 .kickall2
➤ 👥 .kick
➤ 👥 .removeadmins
➤ 👥 .leave
➤ 👥 .join
➤ 👥 .invite
➤ 👥 .resetglink
➤ 👥 .jid1
➤ 👥 .gjid
_________________________
➤ 🧩 *Othermenu*
➤ 🧩 .ytsearch
➤ 🧩 .githubstalk
➤ 🧩 .tiktokstalk
➤ 🧩 .wikipedia
➤ 🧩 .movie
➤ 🧩 .srepo
➤ 🧩 .screenweb
➤ 🧩 .weather
➤ 🧩 .rcolor
➤ 🧩 .roll
➤ 🧩 .coinflip
➤ 🧩 .time
➤ 🧩 .date
➤ 🧩 .count
➤ 🧩 .shapar
_________________________
➤ 👑 *Ownermenu*
➤ 👑 .alive
➤ 👑 .version
➤ 👑 .antidelete
➤ 👑 .pkpayments 
➤ 👑 .vv
➤ 👑 .vv2
➤ 👑 .forward
➤ 👑 .save
➤ 👑 .env
➤ 👑 .allvar
➤ 👑 .pair
➤ 👑 .repo
➤ 👑 .sc
➤ 👑 .script
➤ 👑 .update
➤ 👑 .menu
➤ 👑 .list
➤ 👑 .owner
➤ 👑 .shutdown
➤ 👑 .broadcast
➤ 👑 .ping
➤ 👑 .speed
➤ 👑 .fetch
➤ 👑 .report
➤ 👑.adult
_________________________

*${config.DESCRIPTION}*`;

        await conn.sendMessage(from, { image: { url: `https://files.catbox.moe/gnqjsg.jpg` }, caption: dec }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
