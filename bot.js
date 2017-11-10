const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '$newvid') {
    	message.reply('Make sure to subscribe to MoneyLord if you have not already!\nLatest Upload: https://goo.gl/iktfbb\n\nDownload:\nIn the video's description\n```\nEnjoy the New Awesome Exploit Posted by one and the Only [MoneyLord]');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
