const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

client.on('ready', async () => {
    console.clear();
    console.log(`${client.user.tag} - rich presence started!`);

    const r = new Discord.RichPresence()
        .setApplicationId('1258311684334944286')
        .setType('PLAYING')
        .setURL('https://discord.gg/Warmut')
        .setState('& Nitro Murah, Aman, Begaransi')
        .setName('Warmut Store')
        .setDetails('Menjual Berbagai App Premium')
        .setAssetsLargeImage('https://media.discordapp.net/attachments/1183085645388861460/1254503234756677702/20240609_173225_0000.png?ex=668c2fae&is=668ade2e&hm=bcaec76d1759c299bf53b6d138e132db6ea79e4ba803dba5571717d7646b78f8&')
        .setAssetsLargeText('Testimoni 450+')
        .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1183085645388861460/1258312963752988764/1196765932119408711.gif?ex=668c3404&is=668ae284&hm=cb6e70888944ba514633df342f5f9aa924aff700be5393585a52937e5559fb26&')
        .setAssetsSmallText('Verified')
        .addButton('Join Warmut Store', 'https://discord.gg/warmut')
        .addButton('Slow Respon? Tekan Ini', 'https://wa.me/6283102229967');

    client.user.setActivity(r);
    client.user.setPresence({ status: 'idle' });
});

client.login(process.env.TOKEN);












