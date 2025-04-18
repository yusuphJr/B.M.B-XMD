const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

const fetch = require('node-fetch');
const config = require('../config');    
const { cmd } = require('../command');

cmd({
    pattern: "mtambo",
    alias: ["repo", "sc", "info"],
    desc: "Fetch information about a GitHub repository.",
    react: "🎗️",
    category: "info",
    filename: __filename,
},
async (conn, mek, m, { from, reply }) => {
    const githubRepoURL = 'https://github.com/bmbxmd/B.M.B-XMD';

    try {
        // Extract username and repo name from the URL
        const [, username, repoName] = githubRepoURL.match(/github\.com\/([^/]+)\/([^/]+)/);

        // Fetch repository details using GitHub API
        const response = await fetch(`https://api.github.com/repos/${username}/${repoName}`);
        
        if (!response.ok) {
            throw new Error(`GitHub API request failed with status ${response.status}`);
        }

        const repoData = await response.json();

        // Format the repository information
        const formattedInfo = `*𝐇𝐄𝐋𝐋𝐎 𝐓𝐇𝐄𝐑𝐄 𝐁.𝐌.𝐁-𝐗𝐌𝐃 𝐖.𝐀 𝐁𝐎𝐓 𝐔𝐒𝐄𝐑!🇹🇿🇹🇿*
╭══════════════⊷❍    
┃ 🌟 *𝐁.𝐌.𝐁-𝐗𝐌𝐃 REPOSITORY* 🌟   
┃ ❏ 𝗡𝗮𝗺𝗲: *${repo.name}*    
┃ ❏ 𝗢𝘄𝗻𝗲𝗿: *${repo.owner.login}*    
┃ ❏ 𝗦𝘁𝗮𝗿𝘀: ⭐ *${repo.stargazers_count}*    
┃ ❏ 𝗙𝗼𝗿𝗸𝘀: 🍴 *${repo.forks_count}*    
┃ ❏ 𝗜𝘀𝘀𝘂𝗲𝘀: 🛠️ *${repo.open_issues_count}*    
┃ ❏ 𝗪𝗮𝘁𝗰𝗵𝗲𝗿𝘀: 👀 *${repo.watchers_count}*    
┃ ❏ 𝗟𝗮𝗻𝗴𝘂𝗮𝗴𝗲: 🖥️ *${repo.language}*    
┃ ❏ 𝗕𝗿𝗮𝗻𝗰𝗵𝗲𝘀: 🌿 *${repo.default_branch}*    
┃ ❏ 𝗨𝗽𝗱𝗮𝘁𝗲𝗱 𝗼𝗻: 📅 *${new Date(repo.updated_at).toLocaleString()}*    
┃ ❏ 𝗥𝗲𝗽𝗼 𝗟𝗶𝗻𝗸: 🔗 [Click Here](${repo.html_url})    
╰══════════════⊷❍    
        `;    /
         Send an image with the formatted info as a caption and context info
        await conn.sendMessage(from, {
            image: { url: `https://files.catbox.moe/heu4tc.png` },
            caption: formattedInfo,
            contextInfo: { 
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363382023564830@newsletter',
                    newsletterName: '☇ bmb xmd suppσrt  ⃪🤖͎᪳᪳𝆺𝅥',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

        // Send the audio file with context info
        await conn.sendMessage(from, {
            audio: { url: 'https://cdn.ironman.my.id/i/wp4a7x.mp4' },
            mimetype: 'audio/mp4',
            ptt: true,
            contextInfo: { 
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363382023564830@newsletter',
                    newsletterName: '☇ 𝙱.𝙼.𝙱-𝚇𝙼𝙳 suppσrt⃪🤖͎᪳᪳𝆺𝅥',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (error) {
        console.error("Error in repo command:", error);
        reply("Sorry, something went wrong while fetching the repository information. Please try again later.");
    }
});
       
