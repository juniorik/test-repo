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

client.login('ODE1NjY3Mjk0NzcxODcxNzc1.YDvvXQ.LVeUqAO69-OWz9SOfcPsJ3YDYH0');