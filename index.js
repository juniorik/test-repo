const Discord = require('discord.js');
const client = new Discord.Client();

const config = require('./config.json');

client.once('ready', () => {
    console.log('Ping Pong Bot Loaded!');
});

client.on('message', message => {
    if (message.content === 'ping') {
        message.channel.send('que ricoooo!!!! 🤤');
    }
});

client.login(config.TOKEN)
    .catch((e) => {
        console.log(e);
    });

