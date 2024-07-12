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
        .setAssetsLargeImage('https://media.discordapp.net/attachments/1183085645388861460/1261240542138990603/vra.png?ex=66923d49&is=6690ebc9&hm=a0602c82e63b45bc6a871b46e7415a00f870ebd35b8bc65f35127fe5c660c9be&=&format=webp&quality=lossless&width=480&height=480')
        .setAssetsLargeText('Testimoni 450+')
        .setAssetsSmallImage('https://media.discordapp.net/attachments/1183085645388861460/1261240589438025750/verif.gif?ex=66923d55&is=6690ebd5&hm=67148eff12407398eee72da889245c265dbb3f5a264fcd20ab1d868ffb26e66c&=')
        .setAssetsSmallText('Verified')
        .addButton('Join Warmut Store', 'https://discord.gg/warmut')
        .addButton('Slow Respon? Tekan Ini', 'https://wa.me/6283102229967');

    client.user.setActivity(r);
    client.user.setPresence({ status: 'idle' });
});

client.login(process.env.TOKEN);












