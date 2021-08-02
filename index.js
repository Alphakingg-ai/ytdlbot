const TeleBot = require('telebot')
const hx = require('hxz-api')
global.tokebot = '1936402328:AAG8rZmwhIdUBNav5quEUfxFNhKCamRxgLE'
global.ownerid = '1240615992'

const bot = new TeleBot({
    token: global.tokebot
})


bot.on(['/start'], async (msg) => {
    let replyMarkup = bot.keyboard([
        ['/menu','/about️'],
    ], {resize: true});

await bot.sendMessage(msg.chat.id, `Hai ${msg.from.username || msg.from.first_name}👋\nSelamat Datang Di Youtube Downloader Bot!\n\nGunakan perintah /menu untuk melihat fitur di bot ini.`, 
{replyToMessage: msg.message_id})
return await bot.sendMessage(msg.chat.id, 'Gunakan /hide untuk menyembunyikan keyboard!', {replyMarkup})
})

bot.on('/hide', msg => {
    return bot.sendMessage(
        msg.chat.id, 'Berhasil Menyembunyikan Keyboard!\nGunakan /show untuk menampilkan keyboard!', {replyMarkup: 'hide',replyToMessage: msg.message_id})
})

bot.on('/show', msg => {
    let replyMarkup = bot.keyboard([
        ['/menu','/about️'],
    ], {resize: true});
    return bot.sendMessage(msg.chat.id, 'Berhasil Menampilkan Keyboard!\nGunakan /hide untuk menyembunyikan keyboard!', {replyMarkup,replyToMessage: msg.message_id})
})

bot.on(['/menu'], async (msg) => {
    return bot.sendMessage
(msg.chat.id, `Youtube Downloader Bot
by @theodorickalfa09

/ytmp4 [url]
`)
})

bot.on(['/about'], async (msg) => {
return bot.sendMessage
(msg.chat.id, `Created by @theodorickalfa09
`)
})

bot.on(/^\/ytmp4 (.+)$/, async (msg, props) => {
    let url = await props.match[1];
    await msg.reply.text('Sedang Diproses…')
    hx.youtube(link)
    .then(result => {
      return await bot.sendMessage(msg.chat.id, `${result}`)
     })
   })
 })





bot.start()






