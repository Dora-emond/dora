let fs = require('fs')
global.owner = ['628998512588','628112958665','6283175998566'] // Letakan nomor kamu disini
global.mods = [] // Moderator?
global.prems = JSON.parse(fs.readFileSync('./src/premium.json')) // Pengguna premium tidak memerlukan limit
global.APIs = { // API Prefix
  // nama: 'https://website'
  hardianto: 'https://hardianto-chan.herokuapp.com',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zekais: 'http://zekais-api.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  vhtear: 'https://api.vhtear.com',
  lolhum: 'https://api.lolhuman.xyz'

}
global.APIKeys = { // APIKey nya disini
  // 'https://website': 'apikey'
  'https://hardianto-chan.herokuapp.com': 'isi apikey',
  'https://neoxr-api.herokuapp.com': 'isi apikey',
  'https://pencarikode.xyz': 'isi apikey',
  'https://api.xteam.xyz': 'isi apikey',
  'https://zahirr-web.herokuapp.com': 'isi apikey',
  'https://api.zeks.xyz': 'isi apikey',
  'https://api.lolhuman.xyz': 'isi apikey',
  'https://api.vhtear.com': 'isi apikey',
}

// Sticker WM
global.packname = 'Zafkiel||Kurumi'
global.author = 'Rafly'

global.wait = '「 ⏱️ 」Harap tunggu...'
global.eror = '*Server Error*'
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='
global.watermark = '© Kurumiloli'

global.multiplier = 69 // Semakin tinggi, semakin sulit naik level

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})

// masukin apikey lu yang ada tulisan 'apikey lu' nya
