let handler  = async (m, { conn, text }) => {
  let chats = Object.keys(await conn.chats)
  conn.reply(m.chat, `_Mengirim pesan broadcast ke ${chats.length} chat_`, m)
  for (let id of chats) {
       let bcbg = 'https://telegra.ph/file/34c95be3feef20cb61dd5.jpg'
       await conn.send2ButtonLoc(id, bcbg,'*——————「 Broadcast 」——————*\n' + text.trim(), wm, 'Menu', '.menu', 'Owner', '.owner', m)
     }
  m.reply('*Broadcast selesai*')
}
handler.help = ['broadcastloc','bcloc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcastloc|bcloc)$/i
handler.owner = true

export default handler