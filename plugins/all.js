const config = require('../config');
const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');
const axios = require('axios');

cmd({
    pattern: "all",
    desc: "Show all bot commands",
    category: "menu",
    react: "📑",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `
╭━━〔 𝐁.𝐌.𝐁-𝐗𝐌𝐃 All Menu 〕━━┈⊷
┃◈ *Prefix:* ${config.PREFIX}
┃◈ *Mode:* ${config.MODE}
┃◈ *Total Commands:* ${totalCmds}
╰━━━━━━━━━━━━━━━━━━⊷

┃◈ *AI Menu* 🤖
┃• ai, gpt, meta, blackbox, gpt4, bing, copilot

┃◈ *Anime Menu* 🧚
┃• fack, dog, awoo, garl, waifu, neko, megnumin, maid, loli, animegirl, animegirl1-5, anime1-5, animenews, foxgirl, naruto

┃◈ *Convert Menu* 🥀
┃• sticker, sticker2, fancy, take, tomp3, tts, trt

┃◈ *Download Menu* 💚
┃• facebook, mediafire, tiktok, twitter, insta, apk, img, spotify, play, play2, play3, tt2, audio, video, video2, ytmp3, ytmp4, song, darama, git, gdrive, smovie, baiscope, ginisilia

┃◈ *Fun Menu* 😎
┃• insult, pickup, ship, character, hack, joke, hrt, hpy, syd, anger, shy, kiss, mon, cunfuzed, setpp, hand, nikal, hold, hug, hifi, poke

┃◈ *Group Menu* 🥰
┃• grouplink, kickall, add, remove, kick, promote, demote, dismiss, revoke, setgoodbye, setwelcome, delete, getpic, ginfo, disappear on/off/7D, allreq, updategname, updategdesc, joinrequests, senddm, mute, unmute, lockgc, unlockgc, invite, tag, hidetag, tagall, tagadmins

┃◈ *Main Menu* 🗿
┃• ping, live, alive, runtime, uptime, repo, owner, menu, menu2, restart

┃◈ *Owner Menu* 🔰
┃• owner, menu, listcmd, allmenu, repo, block, unblock, fullpp, setpp, restart, shutdown, updatecmd, alive, ping, gjid, jid

┃◈ *Other Menu* 🤖
┃• vv, pair, pair2, fact, font, define, news, movie, weather, srepo, insult, save, wikipedia, gpass, githubstalk, yts, ytv

╰─────────────⊷
> ${config.DESCRIPTION}
`;

        await conn.sendMessage(from, {
            image: { url: `https://i.ibb.co/BY2HCkh/nexus-xmd.jpg` },
            caption: dec,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363382023564830@newsletter',
                    newsletterName: '💫 𝐁.𝐌.𝐁-𝐗𝐌𝐃 💫',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
