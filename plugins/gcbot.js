let fetch = require('node-fetch') 
 let handler = async(m, { conn }) => { 
     try { 
         let pp = await(await fetch(image)).buffer 
         let gc1 = '6289618728196@g.us' 
         let gc2 = '6289618728196@g.us' 
         let gc3 = '6287892870587@g.us' 
         let _gc1 = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(gc1) 
         let _gc2 = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(gc2) 
         let _gc3 = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(gc3) 
         let caption = ` 
 *Join juga group official Cute Bot!* 
 Sekedar meramaikan, atau juga jika ada informasi mengenai bot. 
  
 *Group 1* 
 ${_gc1} 
  
 *Group 2* 
 ${_gc2} 
  
 *Group 3* 
 ${_gc3} 
  
 `.trim() 
         await conn.reply(m.chat, caption, m, { contextInfo: { 
             externalAdReply: { 
               sourceUrl: 'https://youtu.be/-tKVN2mAKRI', 
               title: 'Official group', 
               body: 'Haruno Bot', 
               thumbnail: pp 
             } 
         }}) 
     } catch (e) { 
         let tulisan = ` 
 *Join Juga Group Official Cute Bot!* 
Sekedar meramaikan, atau juga jika ada informasi mengenai bot. 
  
 *Group 1* 
https://chat.whatsapp.com/FM4JHZbUJZi0m786dBZrsr
 
 `.trim() 
     await conn.sendButtonDoc(m.chat, tulisan.trim(), 'Harap patuhi rules dan peraturan pada masing masing group ya! Terimakasih.', 'Rules', '.rules', m, {
    quoted: m,
    contextInfo: { forwardingScore: 99999, isForwarded: true,
        externalAdReply: {
        	sourceUrl: 'https://vt.tiktok.com/ZSRRmS8vh/',
            title: 'Gruop Official',
            body: '© Cute NR-MD By Nur Sean',
          thumbnail: await (await fetch('https://telegra.ph/file/f05029f17de62fb420459.jpg')).buffer()
        }
     }
    })
 } 
 }
 handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^gcbot$/i
 module.exports = handler
