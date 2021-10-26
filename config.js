let fs = require('fs')
global.owner = ['6282387704390','6289601145546'] // Letakan nomor kamu disini
global.mods = [] // Moderator?
global.prems = JSON.parse(fs.readFileSync('./src/premium.json')) // Pengguna premium tidak memerlukan limit
global.APIs = { // API Prefix
  // nama: 'https://website'
  rey: 'https://server-api-rey.herokuapp.com',
  bx: 'https://bx-hunter.herokuapp.com',
  dhnjing: 'https://dhnjing.xyz',
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
  lolhum: 'https://api.lolhuman.xyz',
  fxc7: 'https://fxc7-api.herokuapp.com',
  aqul: 'https://api.justaqul.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  dzx: 'https://api.dhamzxploit.my.id',
  fdci: 'https://api.fdci.se',
  bg: 'http://bochil.ddns.net',
  nzcha: 'http://nzcha-apii.herokuapp.com',
}
global.APIKeys = { // APIKey nya disini
  // 'https://website': 'apikey'
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://server-api-rey.herokuapp.com
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://pencarikode.xyz': 'pais',
  'https://api.xteam.xyz': 'seventzid123',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
  'https://api.lolhuman.xyz': 'apikey lu',
  'https://api.vhtear.com': 'apikey lu',
  'https://fxc7-api.herokuapp.com': 'apikey lu',
  'https://api.justaqul.xyz': 'apikey lu'
  'https://leyscoders-api.herokuapp.com': 'MIMINGANZ' 
}

// Sticker WM
global.packname = 'aku sayang kamu'
global.author = 'Dora'

global.wait = '「 ⏱️ 」Harap tunggu...'
global.eror = '*Server Error*'
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&backgroundColor=%23101820&fillTextPattern=Warning!&text='
global.watermark = '® Doraemond'

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
