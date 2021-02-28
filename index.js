const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ping Pong Bot Loaded!');
});

client.on('message', message => {
    if (message.content === 'Ping') {
        message.channel.send('Pong!');
    }
});


client.login("ODE1NjY5OTA2MTc0NTA5MDU2.YDvxzA.7K5CqhhqQLPs4L0RWF_dJkPbGOw")
    .catch((e) => {
        console.log(e);
    });
    
