

const fs = require('fs');
const chalk = require('chalk');

//owmner v card
global.ytname = "YT: " //ur yt chanel name
global.socialm = "GitHub: Zeus30007" //ur github or insta name
global.location = "Indonesia, Papua" //ur location

//new
global.botname = '⨺⃝𝚁𝙾𝚂𝙴𓃦' //ur bot name
global.ownernumber = ['6283891139988'] //ur owner number, dont add more than one
global.ownername = '⨺⃝𝙼𝙸𝚁𝙰𝙽 𝙵𝙾𝚇𓃦' //ur owner name
global.websitex = ""
global.wagc = "https://chat.whatsapp.com/JVOl5GMwn1j4CUjuqvE0mG"
global.themeemoji = '💣'
global.wm = "Xeon Bot Inc."
global.botscript = 'https://github.com/Zeus30007' //script link
global.packname = "𓇻𝕹𝖆𝖙𝖍𝖆𝖓"
global.author = "⨺⃝𝙼𝙸𝚁𝙰𝙽 𝙵𝙾𝚇𓃦"
global.creator = "6283891139988@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["6283891139988"] // Premium User

//channel id
global.xchannel = {
	jid: '1203633190987299@newsletter'
	}

//bot sett
global.typemenu = 'v12' // menu type 'v1' => 'v12'
global.typereply = 'v4' // reply type 'v1' => 'v4'
global.autoblocknumber = '91' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code

global.listv = ['•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆']
global.tempatDB = 'database.json'

global.limit = {
	free: 100,
	premium: 999,
	vip: 'VIP'
}

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	error: 'Error!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
	done: 'Done'
}

global.bot = {
	limit: 0,
	uang: 0
}

global.game = {
	suit: {},
	menfes: {},
	tictactoe: {},
	kuismath: {},
	tebakbom: {},
}

//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
