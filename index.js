const Discord = require('discord.js');
const client = new Discord.Client();

const config = require('./config.json');

client.once('ready', () => {
    console.log('Ping Pong Bot Loaded!');
});

client.on('message', message => {
    if (message.content === 'Ping') {
        message.channel.send('Pong!');
    }
});


client.login(config.TOKEN)
    .catch((e) => {
        console.log(e);
    });

