// By RC047 :V

let handler = async(m, { conn, text }) => {
    if (!text) return conn.reply(m.chat, 'Silahkan masukkan request', m)
    if (text > 300) return conn.reply(m.chat, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks!', m)
    var nomor = m.sender
    const laporan = `*「 REQUEST 」*\nNomor : wa.me/${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${text}`
    for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid))
    m.reply(laporan, jid)
    conn.reply(m.chat, '✔️ Request telah dikirim ke Owner Bot, request palsu/main2 tidak akan ditanggapi!', m)
}
handler.help = ['request'].map(v => v + ' <fitur>')
handler.tags = ['info']
handler.command = /^(request)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler