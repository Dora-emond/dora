let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `
┌〔 Donasi • support 〕
├ cukup gunakan saia dengan 
├ bijak 😀
├
├ https://saweria.co/Doraemond
├
├ saya harap kamu menyukai bot 
├ saya dan jangan lupa untuk 
├ mensupport saya karena saya 
├ sangat menyukai Dora :D
└────
`.trim(), '© Doraemond', 'Donasi', '.donasi', m)
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
